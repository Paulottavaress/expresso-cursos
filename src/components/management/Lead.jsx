import { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import moment from 'moment';
import AlertContext from '../../context/alert/alertContext';
import Drawer from '../common/drawer/Drawer';
import ptBr from '../../internationalization/pt-br';
import { capitalizeFirstLetter } from '../../utils/FormatString';
import { firstLetterUpperCaseParseType } from '../../utils/ParseType';
import { firstAndLastNamesInitials } from '../../utils/FormatPersonalName';

const Lead = () => {
  const params = useParams();

  const alertContext = useContext(AlertContext);
  const { setAlert } = alertContext;

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

      parsedData.forEach((leadInfo, i) => {
        const idArr = [];
        const cnhArr = [];
        const addressArr = [];
        const idNumArr = [];
        const registerNum = ['id', leadInfo[0].slice(-4)]; 
  
        leadInfo = Object.entries(leadInfo[1]);
        leadInfo.forEach((lead, ia) => {
          lead.forEach((info, ib) => {
            if (typeof info === 'object' && info !== null) {
              leadInfo[ia][ib] = Object.entries(info);
  
              leadInfo[ia][ib].forEach(data => {
                if ([
                  'birthDate',
                  'email',
                  'phoneNumber'
                ].includes(data[0])) data[1] = idArr.push([data[0], data[1]])
                else if (['fullName'].includes(data[0])) {
                  idArr.push([data[0], data[1]]);
                  registerNum[1] = firstAndLastNamesInitials(data[1]).toUpperCase() + '-' + registerNum[1];
                }
                else if (['identificationType'].includes(data[0])) idNumArr[0] = (data[1] === 'PF') ? 'CPF' : 'CNPJ'
                else if (['identificationNumber'].includes(data[0])) {
                  idNumArr[1] = data[1];
                  registerNum[1] += data[1].slice(-4);
                }
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
        leadInfo[4] = ['mode', (i === parsedData.length - 1)
          ? 'visualize'
          : 'closed'
        ];
        leadInfo[5] = registerNum;
        
        setLeadInfoArr(oldLeadInfoArr => [...oldLeadInfoArr, leadInfo]);
      });
      setIsLoading(false);
    }).catch((err) => {
      setIsLoading(false);
      console.log(`There is no user with an identification number ${params.identificationNumber} - Erro: ${err}`)
    });
  };

  const isDataUpdated = (i) => {
    // Display a dialog to confirm action
    return false;
  };

  const visualizeEntry = (i) => {
    if (isDataUpdated()) return;

    const tempLeadInfoArr = leadInfoArr.slice();
    tempLeadInfoArr[i][4][1] = (tempLeadInfoArr[i][4][1] === 'visualize')
      ? 'closed'
      : 'visualize';
    setLeadInfoArr(tempLeadInfoArr.reverse());
  };

  const editEntry = (i) => {
    const tempLeadInfoArr = leadInfoArr.slice();
    tempLeadInfoArr[i][4][1] = (tempLeadInfoArr[i][4][1] === 'edit')
      ? 'closed'
      : 'edit';
    setLeadInfoArr(tempLeadInfoArr.reverse());

    // Create edit mode in the template, where all data become input/drop down fields prepopulated
  };

  const deleteEntry = () => {
    console.log('deleteEntry');

    // Display a dialog to confirm action
  };

  const confirmEdition = (i) => {
    // Display a dialog to confirm action

    setAlert({
      type: 'success',
      text: ptBr.lead['successEdition'].replace('{var}', leadInfoArr[i][5][1]),
      time: 5000
    });

    // setAlert({
    //   type: 'danger',
    //   text: ptBr.lead['failureEdition'].replace('{var}', leadInfoArr[i][5][1]),
    //   time: 5000
    // });

    // Mock the front end to make the changes take effect

    visualizeEntry(i);
  };

  const cancelEdition = (i) => {
    if (isDataUpdated()) return;
    
    console.log('cancelEdition');
    // should restore all values to the defaults


    setAlert({
      type: 'warning',
      text: ptBr.lead['cancelEdition'].replace('{var}', leadInfoArr[i][5][1]),
      time: 5000
    });

    visualizeEntry(i);
  };

  const headerBtns = [
    [
      ptBr.lead['collapseUncollapse'],
      'fa-solid fa-eye',
      visualizeEntry
    ],
    [
      ptBr.lead['edit'],
      'fa-solid fa-pen-to-square',
      editEntry,
    ],
    [
      ptBr.lead['delete'],
      'fa-solid fa-trash-can',
      deleteEntry
    ]
  ];

  const footerBtns = [
    [
      ptBr.lead['confirm'],
      'fa-solid fa-remove',
      cancelEdition,
      'bg-danger'
    ],
    [
      ptBr.lead['confirm'],
      'fa-solid fa-check',
      confirmEdition,
      'bg-success'
    ]
  ];

  return (
    <div>
      { leadInfoArr.length > 0 && leadInfoArr.reverse().map((leadInfo, ia) => (
        <div
          className='py-2'
          key={ia}
        >
          <Drawer
            header={(
              <div className='d-flex justify-content-between'>
                { (leadInfo[4][1] === 'closed')
                  ? (
                    <p className='h5 font-weight-bold p-2 mb-0'>{ leadInfo && capitalizeFirstLetter(ptBr.lead[leadInfo[3][0]]) }: <span className='text-break-all font-weight-normal'>{ leadInfo && moment(leadInfo[3][1]).format('DD-MM-YYYY HH:mm').replaceAll('-', '/')}</span></p>
                  ) : (
                    <p className='h5 font-weight-bold p-2 mb-0'>{ptBr.lead['drawerStatus'].replace('{var}', (leadInfo[4][1] === 'visualize')
                      ? capitalizeFirstLetter(ptBr.lead['visualizing'])
                      : capitalizeFirstLetter(ptBr.lead['editing'])
                    )} {leadInfo[5][1]}</p>
                  )
                }
                <div className='d-flex'>
                  <div className='d-flex gap-1 justify-content-evenly align-items-center w-100'>
                    {headerBtns.map((button, i) => (
                      <button
                        key={i}
                        className='d-flex align-items-center p-1 br-5'
                        type='button'
                        onClick={() => button[2](ia)}
                      >
                        <i className={button[1]} />
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}
            content={(
              <div>
                <p className='h5 font-weight-bold p-2 mb-0'>{ leadInfo && capitalizeFirstLetter(ptBr.lead[leadInfo[3][0]]) }: <span className='text-break-all font-weight-normal'>{ leadInfo && moment(leadInfo[3][1]).format('DD-MM-YYYY HH:mm').replaceAll('-', '/')}</span></p>
                <div className='content-wrapper d-flex flex-wrap'>
                  <div className='p-2 w-50'>
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
                  <div className='p-2 w-50'>
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
                </div>
              </div>
            )}
            footer={(leadInfo[4][1] === 'edit') && (
              <div className='d-flex gap-1 justify-content-end align-items-center w-100'>
              {footerBtns.map((button, i) => (
                <button
                  key={i}
                  className={'d-flex align-items-center justify-content-center p-1 br-5 ' + button[3]}
                  style={{width: '25px'}}
                  type='button'
                  onClick={() => button[2](ia)}
                >
                  <i className={button[1]} />
                </button>
              ))}
              </div>
            )}
            isOpen={(leadInfo[4][1] !== 'closed')}
          />
        </div>
      ))}
      <p>{capitalizeFirstLetter(ptBr.lead['amountOfRegisters'])}: <span className='font-weight-bold'>{ leadInfoArr.length }</span></p>
    </div>
  )
};

export default Lead;