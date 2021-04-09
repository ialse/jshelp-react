import { Button } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import useStyles from '../../../utils/myHooks';

function Webpack() {
  const classes = useStyles();

  return (
    <section className="block block_size_big block_webpack">
      <h2 className="block__title">Команды Webpack</h2>
      <table className="table">
        <tbody>
          <tr>
            <td className="table__cell">
              <span className="table__accent">npm init --yes</span>
            </td>
            <td className="table__cell table__cell_right">
              Инициализация проекта. Создание файла package.json с ответами Да на все вопросы
            </td>
          </tr>
          <tr>
            <td className="table__cell">
              <span className="table__accent">npm i webpack --save-dev</span>
            </td>
            <td className="table__cell table__cell_right">
              Установка Webpack, --save-dev - флаг, что данный модуль нужен только в процессе разработки и не нужен в
              финальной сборке
            </td>
          </tr>
          <tr>
            <td className="table__cell">
              <span className="table__accent">npm i webpack-cli --save-dev</span>
            </td>
            <td className="table__cell table__cell_right">Интерфейс командной строки для Вебпака</td>
          </tr>
          <tr>
            <td className="table__cell table__cell_left">
              <span className="table__accent">npm i webpack-dev-server --save-dev</span>
            </td>
            <td className="table__cell table__cell_right">Локальный сервер для вебпака. Работает на localhost:8080</td>
          </tr>
          <tr>
            <td className="table__cell">
              <span className="table__accent">npm i @babel/core --save-dev</span>
            </td>
            <td className="table__cell table__cell_right">
              Бабель - транспилирует JS код ES6 в старый, поддерживаемый старыми браузерами
            </td>
          </tr>
          <tr>
            <td className="table__cell">
              <span className="table__accent"> npm i @babel/preset-env --save-dev</span>
            </td>
            <td className="table__cell table__cell_right">
              Пресет (правила) для бабеля, по которому он будет транспилировать новый код в старый. Есть и другие.
              Позволяет указать, в каких версиях браузеров должен работать итоговый код. Данный самый распространенный
            </td>
          </tr>
          <tr>
            <td className="table__cell">
              <span className="table__accent">npm i core-js --save</span>
            </td>
            <td className="table__cell table__cell_right">
              core-js - полифилы распространенных методов для совсем старых браузеров. Необходим для случаев, когда даже
              транспиляция не помогает
            </td>
          </tr>
          <tr>
            <td className="table__cell">
              <span className="table__accent">npm i babel-loader --save-dev</span>
            </td>
            <td className="table__cell table__cell_right">Пакет, который позволяет подключить бабель к «Вебпаку»</td>
          </tr>
          <tr>
            <td className="table__cell table__cell_left">
              <span className="table__accent">npm i html-webpack-plugin --save-dev</span>
            </td>
            <td className="table__cell table__cell_right">Плагин для добавления HTML файлов в сборку</td>
          </tr>
          <tr>
            <td className="table__cell table__cell_left">
              <span className="table__accent">npm i clean-webpack-plugin --save-dev</span>
            </td>
            <td className="table__cell table__cell_right">Плагин, удаляет содержимое папки dist перед сборкой</td>
          </tr>
          <tr>
            <td className="table__cell table__cell_left">
              <span className="table__accent">npm i css-loader --save-dev</span>
            </td>
            <td className="table__cell table__cell_right">
              Нужен для того, чтобы научить «Вебпак» работать с файлами CSS
            </td>
          </tr>
          <tr>
            <td className="table__cell table__cell_left">
              <span className="table__accent">npm i mini-css-extract-plugin --save-dev </span>
            </td>
            <td className="table__cell table__cell_right">Плагин. Берёт много css-файлов и объединяет их в один.</td>
          </tr>
          <tr>
            <td className="table__cell table__cell_left">
              <span className="table__accent">npm i postcss-loader --save-dev</span>
            </td>
            <td className="table__cell table__cell_right">Препроцессор для обработки CSS</td>
          </tr>
          <tr>
            <td className="table__cell table__cell_left">
              <span className="table__accent">npm i autoprefixer --save-dev</span>
            </td>
            <td className="table__cell table__cell_right">
              Плагин для PostCSS. Проставляет или удаляет браузерные префиксы
            </td>
          </tr>
          <tr>
            <td className="table__cell table__cell_left">
              <span className="table__accent">npm i cssnano --save-dev</span>
            </td>
            <td className="table__cell table__cell_right">
              Плагин для PostCSS. Минифицирует CSS код, удаляя пробелы, комменты и прочее
            </td>
          </tr>
        </tbody>
      </table>
      <a href="https://habr.com/ru/post/524260/" className="block__link" target="blank">
        <Button variant="contained" color="primary" endIcon={<SendIcon />} className={classes.button}>
          Подробнее
        </Button>
      </a>
    </section>
  );
}

export default Webpack;
