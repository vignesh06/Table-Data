import React from 'react';
import TableCell from './TableCell';

const TableRow = (props) => {
  return (
    <React.Fragment>
              <tr>
<TableCell columns={props.columns} data={props.data}></TableCell>
      </tr>
    </React.Fragment>
  );
}

export default TableRow;