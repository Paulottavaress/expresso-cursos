import moment from 'moment';
import React, { useEffect, useState } from 'react';
import ActionsTable from '../../components/common/table/ActionsTable';
import { formatDayOfTheWeekPT } from '../../utils/ParseDayOfTheWeek';
import { colorStatuses, translateStatuses } from '../../utils/ParseLeadStatuses';
import { firstLetterUpperCaseParseType } from '../../utils/ParseType';
import { uppercaseAllPersonalNames } from '../../utils/FormatPersonalName';
import { useNavigate } from 'react-router-dom';

const Leads = () => {
  const [isLoading, setIsLoading] = useState('true');
  const [rows, setRows] = useState([]);
  const [totalRegistersFound, setTotalRegistersFound] = useState(0);
  const tableContainerWidth = 1376;
  const navigate = useNavigate();

  useEffect(() => {
    fetchLeads();
  }, []);

  const fetchLeads = (() => {
    setIsLoading('true');

    fetch(process.env.REACT_APP_BASE_URL + process.env.REACT_APP_GET_LEADS_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        'orderBy': 'mostRecentTimestamp',
        'amountPerPage': 'all'
      }),
    })
    .then(response => response.json())
    .then(leads => {
      const fetchedRows = [];

      leads.forEach((lead) => {
        const mostRecentTimestamp = lead['mostRecentTimestamp'];
        const lastContact = lead[mostRecentTimestamp];
        const { registrationInfo } = lastContact;
        const {
          fullName,
          state,
          identificationNumber
        } =  registrationInfo;

        const row = {
          rowId: [
            identificationNumber,
            identificationNumber
          ],
          status: [
            'Status',
            translateStatuses('Pending payment'),
            colorStatuses('Pending payment')
          ],
          date: [
            'Data',
            moment(mostRecentTimestamp).format('DD-MM-YYYY').replaceAll('-', '/')
            // moment(mostRecentTimestamp).format('DD-MM-YYYY HH:mm').replaceAll('-', '/').replace(' ', ' - ')
          ],
          dayOfTheWeek: [
            'Dia da semana',
            formatDayOfTheWeekPT(moment(mostRecentTimestamp).day())
          ],
          name: [
            'Nome',
            uppercaseAllPersonalNames(fullName)
          ],
          state: [
            'Estado',
            state
          ],
          courseName: [
            'Curso',
            Object.entries(lastContact.courses)[0][1].name
          ],
          courseType: [
            'Tipo',
            firstLetterUpperCaseParseType(Object.entries(lastContact.courses)[0][1].type)
          ],
          paymentMethod: [
            'Método',
            ''
          ],
          value: [
            'Valor',
            Object.entries(lastContact.courses)[0][1].value.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
          ],
          buttons: [
            [
              'Ações',
              'fa-solid fa-eye',
              visualizeLead
            ],
            [
              'Ações',
              'fa-solid fa-pen-to-square',
              editLead,
            ],
            [
              'Ações',
              'fa-solid fa-trash-can',
              deleteLead
            ]
          ]
        };

        fetchedRows.push(Object.entries(row));

        setIsLoading('false');
      });
      setTotalRegistersFound(fetchedRows.length);
      setRows(fetchedRows);
    }).catch(error => {
      // add alert telling that there is an backend user and to get in touch with me
      setIsLoading('false');
      alert("Unexpected error\n"+JSON.stringify(error));
    });
  });

  const filterLeads = () => {
    console.log('filterLeads');
  };

  const addLead = lead => {
    console.log('addLead', lead);
  };

  const visualizeLead = lead => navigate(`/management/leads/${lead[0][1][1]}/visualize`, {});

  const editLead = lead => {
    console.log('editLead', lead);
  };

  const deleteLead = () => {
    console.log('deleteLead');
  };

  const outerActionButtons = [
    {
      icon: 'fas fa-filter',
      // text: 'Filter',
      action: filterLeads
    },
    {
      icon: 'fas fa-plus-circle',
      // text: 'Add',
      action: addLead
    }
  ];

  return (
  <div
    id='leads'
    className='bg-primary'
  >
    {(isLoading === 'false') && (
      <ActionsTable
        title='Leads'
        outerActionButtons={outerActionButtons}
        rows={rows}
        columnsWidth={[
          `${(tableContainerWidth * 0)}px`,
          `${(tableContainerWidth * 0.05)}px`,
          `${(tableContainerWidth * 0.075)}px`,
          `${(tableContainerWidth * 0.1)}px`,
          `${(tableContainerWidth * 0.15)}px`,
          `${(tableContainerWidth * 0.075)}px`,
          `${(tableContainerWidth * 0.171)}px`,
          `${(tableContainerWidth * 0.1)}px`,
          `${(tableContainerWidth * 0.1)}px`,
          `${(tableContainerWidth * 0.075)}px`,
          `${(tableContainerWidth * 0.1)}px`,
        ]}
        rowsColors={[
          'rgb(255 255 255)',
          'rgb(189 186 189)'
        ]}
        totalRegistersFound={totalRegistersFound}
      />
    )}
  </div>
  );
};

export default Leads;