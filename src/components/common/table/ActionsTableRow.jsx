import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

const ActionsTableRow = ({ 
  rows,
  columnsWidth,
  rowsColors
}) => {

  useEffect(() => {
    console.log('rows', rows);
    // console.log('columnsWidth', columnsWidth);
    // console.log('rowsColors', rowsColors);
  });

  return (
    <div className='actions-table-row'>
      {rows && rows.map((row, ia) => (
        <div
          key={row[0][1][0]}
          className='d-flex'
        >
          {row.map((data, ib) => (
          <div
            key={data[0]}
            className='cell p-2 justify-content-center align-items-center'
            style={{ 
              minWidth: columnsWidth[ib],
              display: (data[0] === 'rowId') ? 'none' : 'flex',
              backgroundColor: (ia % 2 === 0) ? rowsColors[1] : rowsColors[0]
            }}
          >
            {(data[0] === 'buttons') && (
              <div className='d-flex gap-1 justify-content-evenly w-100'>
                {data[1].map((button, ic) => (
                  <button
                    key={ic}
                    className='actions-table-button d-flex align-items-center p-1 br-5'
                    type='button'
                    onClick={() => button[2](row)}
                  >
                    <i className={button[1]} />
                  </button>
                ))}
              </div>
            )}
            {(data[0] === 'status') && (
              <div
                className='status'
                style={{ backgroundColor: data[1][2] }}
              />
            )}
            {((data[0] !== 'buttons') && (data[0] !== 'status')) && (
              <div className='w-100'>
                <p className='cell-text m-0 font-weight-bold'>{data[1][1]}</p>
              </div>
            )}
          </div>
          ))}
        </div>
      ))}
    </div>
  )
};

ActionsTableRow.propTypes = {
  rows: PropTypes.array.isRequired,
  columnsWidth: PropTypes.array,
  rowsColors: PropTypes.array
};

export default ActionsTableRow;