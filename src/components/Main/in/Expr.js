import { Button } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import useStyles from '../../../utils/myHooks';

function Expr() {
  const classes = useStyles();

  return (
    <section className="block block_size_big">
      <h2 className="block__title">Express</h2>
      <table className="table">
        <tbody>
          <tr>
            <td className="table__cell">
              <span className="table__accent">npm i express</span>
            </td>
            <td className="table__cell table__cell_right">Установка фреймворка для сервера Express</td>
          </tr>
          <tr>
            <td className="table__cell">
              <span className="table__accent">npm i nodemon -D</span>
            </td>
            <td className="table__cell table__cell_right">
              Установка пакета nodemon, который отвечает за пересборку и запуск проекта после сохранения файлов с кодом.
              Флаг -D - dev зависимость
            </td>
          </tr>
          <tr>
            <td className="table__cell">
              <span className="table__accent">npm i express</span>
            </td>
            <td className="table__cell table__cell_right">Установка фреймворка для сервера Express</td>
          </tr>
        </tbody>
      </table>

      <a href="https://expressjs.com/ru/" className="block__link" target="blank">
        <Button variant="contained" color="primary" endIcon={<SendIcon />} className={classes.button}>
          Подробнее
        </Button>
      </a>
    </section>
  );
}

export default Expr;
