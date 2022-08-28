import React from 'react';
import PropTypes from 'prop-types';

const ActionsTableHeader = ({
  rows,
  columnsWidth,
  rowsColors
}) => {

  return (
    <div className='actions-table-header d-flex'>
      {rows && rows[0].map((data, i) => (
        <div
          key={data[0]}
          className='cell p-2 justify-content-center align-items-center'
          style={{
            backgroundColor: rowsColors[0],
            minWidth: columnsWidth[i],
            display: (data[0] === 'rowId') ? 'none' : 'flex'
          }}
        >
          {(data[0] === 'buttons') && (
            <div className='w-100'>
              <p className='cell-text m-0 font-weight-bold'>{data[1][0][0]}</p>
            </div>
          )}
          {(data[0] === 'status') && (
            <div className='w-100'>
              <p className='cell-text m-0 font-weight-bold'>{data[1][0]}</p>
            </div>
          )}
          {((data[0] !== 'buttons') && (data[0] !== 'status')) && (
            <div className='w-100'>
              <p className='cell-text m-0 font-weight-bold'>{data[1][0]}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  )
};

ActionsTableHeader.propTypes = {
  rows: PropTypes.array.isRequired,
  columnsWidth: PropTypes.array,
  rowsColors: PropTypes.array
};

export default ActionsTableHeader;