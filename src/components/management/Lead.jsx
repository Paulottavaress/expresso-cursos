import { useEffect, useState } from 'react';
import { useParams , Link } from 'react-router-dom';
import moment from 'moment';
import ptBr from '../../internationalization/pt-br';
import { capitalizeFirstLetter } from '../../utils/FormatString';
import { firstLetterUpperCaseParseType } from '../../utils/ParseType';
import { DataArrayTwoTone } from '@mui/icons-material';

const Lead = () => {
  const params = useParams();

  const [isLoading, setIsLoading] = useState(false);
  const [leadInfo, setLeadInfo] = useState(null);

  useEffect(() => {
    getLead();
  }, []);

  const getLead = () => {
    setIsLoading(true);

    fetch(process.env.REACT_APP_BASE_URL + process.env.REACT_APP_GET_LEAD_URL + params.identificationNumber, {
      method: 'GET'
    }).then((res) => {
      return res.json();
    }).then(data => {
      let leadInfo = data[data.mostRecentTimestamp];

      leadInfo = {"courses":{"b05a64e1-bc67-45ac-b50e-e228b5af5cf9":{"id":"b05a64e1-bc67-45ac-b50e-e228b5af5cf9","image":"assets/images/backgrounds/mopp.jpeg","name":"MOPP","sellingPage":"/mopp-formacao","type":"formacao","value":335},"b05a64e1-bc67-45ac-b50e-e228b5af5cf1":{"id":"b05a64e1-bc67-45ac-b50e-e228b5af5cf9","image":"assets/images/backgrounds/mopp.jpeg","name":"MOPP","sellingPage":"/mopp-formacao","type":"formacao","value":335}},"registrationInfo":{"address":"Rua dos cordeiro","addressComplement":"Casa","addressNumber":"198","birthDate":"17/09/1983","city":"Bocaiúva do Sul","country":"Brasil","driversLicenseCategory":"Categoria E","driversLicenseExpiryDate":"03/11/2025","driversLicenseNumber":"05590286522","email":"Samuelcasturin09@gmail. Com","fullName":"Samuel casturino ","identificationNumber":"05585442902","identificationType":"PF","neighbourhood":"Torre 2","phoneNumber":"41 996376910","state":"PR","zipCode":"83450000"},"subtotal":335,"timestamp":1658187941233};

      const idArr = [];
      const cnhArr = [];
      const addressArr = [];
      const idNumArr = [];

      leadInfo = Object.entries(leadInfo);
      leadInfo.forEach((lead, ia) => {
        lead.forEach((info, ib) => {
          if (typeof info === 'object' && info !== null) {
            leadInfo[ia][ib] = Object.entries(info);

            leadInfo[ia][ib].forEach(data => {
              // Número de identificação: 05585442902
              // Tipo do documento de identificação: PF

              if ([
                'birthDate',
                'email',
                'fullName',
                'phoneNumber',
              ].includes(data[0])) data[1] = idArr.push([data[0], data[1]])
              else if (['identificationType'].includes(data[0])) idNumArr[0] = (data[1] === 'PF') ? 'CPF' : 'CNPJ'
              else if (['identificationNumber'].includes(data[0])) idNumArr[1] = data[1]
              else if ([
                'driversLicenseCategory',
                'driversLicenseExpiryDate',
                'driversLicenseNumber'
              ].includes(data[0])) data[1] = cnhArr.push([data[0], data[1]])
              else if ([
                'address',
                'addressComplement',
                'addressNumber',
                'city',
                'country',
                'neighbourhood',
                'state',
                'zipCode'
              ].includes(data[0])) data[1] = addressArr.push([data[0], data[1]]);
            });
          };
        });
      });

      leadInfo[0][1].forEach((course, i) => {
        leadInfo[0][1][i] = Object.entries(course[1]);

        leadInfo[0][1][i] = leadInfo[0][1][i].filter(info => !['image', 'sellingPage'].includes(info[0]));

        leadInfo[0][1][i].forEach(info => {
          if (info[0] === 'type') info[1] = firstLetterUpperCaseParseType(info[1])
          else if (info[0] === 'value') info[1] = info[1].toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
        })
      });

      idArr.unshift(idNumArr);
      leadInfo[1][1] = idArr;
      leadInfo[1][2] = cnhArr;
      leadInfo[1][3] = addressArr;

      console.log('leadInfo', leadInfo);

      setLeadInfo(leadInfo);
      setIsLoading(false);
    }).catch((err) => {
      setIsLoading(false);
      console.log(`There is no user with an identification number ${params.identificationNumber} - Erro: ${err}`)
    });
  };

  return (
    <div>
      <p className='h5 font-weight-bold p-2'>{ leadInfo && capitalizeFirstLetter(ptBr.lead[leadInfo[3][0]]) }: <span className='text-break-all font-weight-normal'>{ leadInfo && moment(leadInfo[3][1]).format('DD-MM-YYYY hh:mm').replaceAll('-', '/')}</span></p>
      <div className='d-flex flex-wrap'>
        <div className='p-2'>
          <p className='h3 font-weight-bold'>{ leadInfo && capitalizeFirstLetter(ptBr.lead[leadInfo[0][0]]) }</p>
          { leadInfo && leadInfo[0][1].map((course, ia) => (
          <div
            className='py-1'
            key={`course-${ia}`}
          >
            <p className='h5 font-weight-bold'>{ capitalizeFirstLetter(`${ptBr.lead['course']} ${ia + 1}`) }</p>
            { course.map((info, ib) => (
              <p
                className='h5 font-weight-bold'
                key={`info-${ib}`}
              >{ capitalizeFirstLetter(ptBr.lead[info[0]]) }: <span className='text-break-all font-weight-normal'>{ info[1] }</span></p>
            )) }
          </div>
          )) }
          <p className='h5 font-weight-bold'>{ leadInfo && capitalizeFirstLetter(ptBr.lead[leadInfo[2][0]]) }: <span className='text-break-all font-weight-normal'>{ leadInfo && leadInfo[2][1].toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}) }</span></p>
        </div> 
        <div className='p-2'>
          <p className='h3 font-weight-bold'>{ leadInfo && capitalizeFirstLetter(ptBr.lead[leadInfo[1][0]]) }</p>
          <div className='py-2'>
            <p className='h5 font-weight-bold'>{ leadInfo && capitalizeFirstLetter(ptBr.lead['identification']) }</p>
            { leadInfo && leadInfo[1][1].map((registrationInfo, i) => (
              <p
                className='h5 font-weight-bold'
                key={i}
              >{ capitalizeFirstLetter(ptBr.lead[registrationInfo[0]]) }: <span className='text-break-all font-weight-normal'>{ registrationInfo[1] }</span></p>
            )) }
          </div>
          <div className='py-2'>
            <p className='h5 font-weight-bold'>{ leadInfo && capitalizeFirstLetter(ptBr.lead['driversLicense']) }</p>
            { leadInfo && leadInfo[1][2].map((registrationInfo, i) => (
              <p
                className='h5 font-weight-bold'
                key={i}
              >{ capitalizeFirstLetter(ptBr.lead[registrationInfo[0]]) }: <span className='text-break-all font-weight-normal'>{ registrationInfo[1] }</span></p>
            )) }
          </div>
          <div className='py-2'>
            <p className='h5 font-weight-bold'>{ leadInfo && capitalizeFirstLetter(ptBr.lead['addressTitle']) }</p>
            { leadInfo && leadInfo[1][3].map((registrationInfo, i) => (
              <p
                className='h5 font-weight-bold'
                key={i}
              >{ capitalizeFirstLetter(ptBr.lead[registrationInfo[0]]) }: <span className='text-break-all font-weight-normal'>{ registrationInfo[1] }</span></p>
            )) }
          </div>
        </div>
        {/* <Link
          to={`/management/leads/:/edit`}
        >
          Edit
        </Link> */}
      </div>
    </div>
  )
};

export default Lead;