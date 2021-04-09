import { Button } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import useStyles from '../../../utils/myHooks';

function Es6() {
  const classes = useStyles();

  return (
    <section className="block block_size_big">
      <h2 className="block__title">Синтаксис ES6</h2>
      <table className="table">
        <tbody>
          <tr>
            <td className="table__cell table__cell_left">
              <span className="table__accent">let, const</span>
            </td>
            <td className="table__cell table__cell_right">let, const и блочная область видимости</td>
          </tr>
          <tr>
            <td className="table__cell table__cell_left">
              <span className="table__accent">Промисы</span>
            </td>
            <td className="table__cell table__cell_right">
              В ES6 появилась встроенная поддержка промисов. Промис это объект, который ждёт выполнения асинхронной
              операции, после которого (т.е. после выполнения) промис принимает одно из двух состояний: fulfilled
              (resolved, успешное выполнение) или rejected (выполнено с ошибкой).
            </td>
          </tr>
          <tr>
            <td className="table__cell table__cell_left">
              <span className="table__accent">{`const {name, about} = object`}</span>
            </td>
            <td className="table__cell table__cell_right">
              Деструктуризация объекта. Определяются переменные на основе свойств объекта object. У него соответсвенно
              должны быть эти свойства.
            </td>
          </tr>
          <tr>
            <td className="table__cell">
              <span className="table__accent">const [name, about] = array</span>
            </td>
            <td className="table__cell table__cell_right">
              Деструктуризация массива. Определяются переменные на основе элементов массива array. По порядку.
            </td>
          </tr>
          <tr>
            <td className="table__cell">
              <span className="table__accent">{`(a,b) => {...}`} </span>
            </td>
            <td className="table__cell table__cell_right">
              Стрелочные функции. Используется для сокращения записи, ососбенно часто, когда в параматерах функции нужен
              анонимный колбэк. При этом запись может быть someFunc(a => a*b), что значит, что передается параметер a, а
              возвращается a*b (оператор return опускается)
            </td>
          </tr>
          <tr>
            <td className="table__cell">
              <span className="table__accent"> ...</span>
            </td>
            <td className="table__cell table__cell_right">
              Spread / Rest оператор. При использовании в любом итерируемом объекте (iterable), данный оператор
              "разбивает" ("spread") его на индивидуальные элементы. Другим распространённым использованием оператора
              ... является объединение набора значений в один массив. В данном случае оператор работает как "rest"
            </td>
          </tr>
        </tbody>
      </table>

      <a href="https://habr.com/ru/post/305900/" className="block__link" target="blank">
        <Button variant="contained" color="primary" endIcon={<SendIcon />} className={classes.button}>
          Подробнее
        </Button>
      </a>
    </section>
  );
}

export default Es6;
