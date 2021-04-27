import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import useStyles from '../../utils/myHooks';
import useStyles2 from '../../utils/myHooks2';
import Row from '../Row/Row';

function TableWrap({ rows }) {
  const classes = useStyles();
  const classes2 = useStyles2();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Метод</TableCell>
            <TableCell>Описание</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <Row key={index} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default TableWrap;
