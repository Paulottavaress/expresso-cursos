import { useEffect, useState } from 'react';
import { useParams , Link } from 'react-router-dom';
import moment from 'moment';
import ptBr from '../../internationalization/pt-br';
import { capitalizeFirstLetter } from '../../utils/FormatString';
import { firstLetterUpperCaseParseType } from '../../utils/ParseType';

const Lead = () => {
  const params = useParams();

  const [isLoading, setIsLoading] = useState(false);
  const [leadInfoArr, setLeadInfoArr] = useState([]);

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
      let parsedData = Object.entries(data);
      parsedData = parsedData.filter(leadInfo => !(leadInfo[0] === 'mostRecentTimestamp'));

      parsedData.forEach(leadInfo => {
        const idArr = [];
        const cnhArr = [];
        const addressArr = [];
        const idNumArr = [];
  
        leadInfo = Object.entries(leadInfo[1]);
        leadInfo.forEach((lead, ia) => {
          lead.forEach((info, ib) => {
            if (typeof info === 'object' && info !== null) {
              leadInfo[ia][ib] = Object.entries(info);
  
              leadInfo[ia][ib].forEach(data => {
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
        
        setLeadInfoArr(oldLeadInfoArr => [...oldLeadInfoArr, leadInfo]);
      });
      setIsLoading(false);
    }).catch((err) => {
      setIsLoading(false);
      console.log(`There is no user with an identification number ${params.identificationNumber} - Erro: ${err}`)
    });
  };

  return (
    <div>
      { leadInfoArr.length > 0 && leadInfoArr.reverse().map((leadInfo, ia) => (
        <div key={ia}>
          <p className='h5 font-weight-bold p-2'>{ leadInfo && capitalizeFirstLetter(ptBr.lead[leadInfo[3][0]]) }: <span className='text-break-all font-weight-normal'>{ leadInfo && moment(leadInfo[3][1]).format('DD-MM-YYYY HH:mm').replaceAll('-', '/')}</span></p>
          <div className='d-flex flex-wrap'>
            <div className='p-2'>
              <p className='h3 font-weight-bold'>{ leadInfo && capitalizeFirstLetter(ptBr.lead[leadInfo[0][0]]) }</p>
              { leadInfo && leadInfo[0][1].map((course, ib) => (
              <div
                className='py-1'
                key={`course-${ib}`}
              >
                <p className='h5 font-weight-bold'>{ capitalizeFirstLetter(`${ptBr.lead['course']} ${ib + 1}`) }</p>
                { course.map((info, ic) => (
                  <p
                    className='h5 font-weight-bold'
                    key={`info-${ic}`}
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
      ))}
    </div>
  )
};

export default Lead;