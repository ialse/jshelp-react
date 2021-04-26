import { useState } from 'react';
import { TableCell, TableRow, Collapse } from '@material-ui/core';
import Highlight from 'react-highlight';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import IconButton from '@material-ui/core/IconButton';

function Row({ row }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <TableRow onClick={() => setOpen(!open)}>
        <TableCell>
          {row.example && (
            <IconButton aria-label="expand row" size="small">
              {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </IconButton>
          )}
        </TableCell>
        <TableCell>{row.method}</TableCell>
        <TableCell>{row.description}</TableCell>
      </TableRow>
      {row.example && (
        <TableRow>
          <TableCell style={{ padding: 0 }} colSpan={6}>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <Highlight className="javascript">{row.example}</Highlight>
            </Collapse>
          </TableCell>
        </TableRow>
      )}
    </>
  );
}

export default Row;
