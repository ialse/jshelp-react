import { Button, Table } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import useStyles from '../../../utils/myHooks';
import { DataGrid } from '@material-ui/data-grid';

function Mongo() {
  const classes = useStyles();

  const columns = [
    { field: 'object', headerName: 'Тема', flex: 0.3 },
    { field: 'description', headerName: 'Описание', flex: 1 },
  ];

  const rows = [
    { id: 1, object: 'mongodb.com', description: 'Скачать MongoDB' },
    { id: 2, object: 'mongod', description: 'Команда в GitBash - запускает сервер MongoDB' },
    { id: 3, object: 'mongoose', description: 'Скачать mongoose' },
    { id: 4, object: 'npm i mongoose', description: 'Установка пакета Mongoose для связи JS и базы MongoDB' },
    { id: 5, object: `const mongoose = require('mongoose');`, description: 'Подключаемся к серверу mongo' },
  ];

  return (
    <section className="block block_size_big block_mongo">
      <h2 className="block__title">MongoDB</h2>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        autoHeight="true"
        hideFooter="true"
        disableColumnMenu="true"
        showColumnRightBorder="true"
      />
      {/* <table className="table">
        <tbody>
          <tr>
            <td className="table__cell">
              <a href="https://www.mongodb.com/" className="" target="blank">
                mongodb.com
              </a>
            </td>
            <td className="table__cell table__cell_right">Скачать MongoDB</td>
          </tr>
          <tr>
            <td className="table__cell">
              <span className="table__accent">mongod</span>
            </td>
            <td className="table__cell table__cell_right">Команда в GitBash - запускает сервер MongoDB</td>
          </tr>

          <tr>
            <td className="table__cell">
              <a href="https://mongoosejs.com/" className="table__accent" target="blank">
                mongoose
              </a>
            </td>
            <td className="table__cell table__cell_right">Скачать mongoose</td>
          </tr>

          <tr>
            <td className="table__cell">
              <span className="table__accent">npm i mongoose </span>
            </td>
            <td className="table__cell table__cell_right">Установка пакета Mongoose для связи JS и базы MongoDB</td>
          </tr>
          <tr>
            <td className="table__cell">
              <span className="table__accent">const mongoose = require('mongoose');</span>
            </td>
            <td className="table__cell table__cell_right">Импорт Mongoose</td>
          </tr>
          <tr>
            <td className="table__cell">
              <span className="table__accent">mongoose.connect('URL', objProp)</span>
            </td>
            <td className="table__cell table__cell_right">Подключаемся к серверу mongo</td>
          </tr>
        </tbody>
      </table>*/}
      <a href="https://mongoosejs.com/docs/guide.html" className="block__link" target="blank">
        <Button variant="contained" color="primary" endIcon={<SendIcon />} className={classes.button}>
          Подробнее
        </Button>
      </a>
    </section>
  );
}

export default Mongo;
