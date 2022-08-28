import React from 'react';
import PropTypes from 'prop-types';
import ActionsTableRow from './ActionsTableRow';
import ActionsTableHeader from './ActionsTableHeader';

const ActionsTable = ({ 
  title,
  outerActionButtons,
  rows,
  columnsWidth,
  rowsColors,
  totalRegistersFound
}) => {
  return (
    <div className='actions-table'>
      <div className='actions-table-outer-top'>
        <div className='d-flex align-items-center justify-content-center mb-3'>
          <p className='text-center h3 font-weight-bold m-0'>{title}</p>
        </div>
        <div className='d-flex gap-1 mb-3'>
          {outerActionButtons && outerActionButtons.map((button, i) => (
            <button
              key={i}
              className='d-flex align-items-center p-1 br-5'
              type='button'
              onClick={() => button.action()}
            >
              <i className={button.icon} />
              {button.text && (
                <p className='m-0 pl-05'>{button.text}</p>
              )}
            </button>
          ))}
        </div>
      </div>
      <div className='actions-table-center mb-3'>
        <ActionsTableHeader
          rows={rows}
          columnsWidth={columnsWidth}
          rowsColors={rowsColors}
        />
        <ActionsTableRow 
          rows={rows}
          columnsWidth={columnsWidth}
          rowsColors={rowsColors}
        />
      </div>
      <div className='actions-table-outer-bottom'>
        <div className='d-flex justify-content-between'>
          <p>Total de registros encontrados: <span className='font-weight-bold'>{ totalRegistersFound }</span></p>
          <div>
            PAGINAÇÃO
          </div>
        </div>
      </div>
    </div>
  )
};

ActionsTable.propTypes = {
  title: PropTypes.string,
  outerActionButtons: PropTypes.array,
  rows: PropTypes.array.isRequired,
  columnsWidth: PropTypes.array.isRequired,
  rowsColors: PropTypes.array.isRequired,
  totalRegistersFound: PropTypes.number
};

export default ActionsTable;