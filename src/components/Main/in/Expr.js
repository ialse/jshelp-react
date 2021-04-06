function Expr() {
  return (
    <section class="block block_size_big">
      <h2 class="block__title">Express</h2>
      <table class="table">
        <tbody>
          <tr>
            <td class="table__cell">
              <span class="table__accent">npm i express</span>
            </td>
            <td class="table__cell table__cell_right">Установка фреймворка для сервера Express</td>
          </tr>
          <tr>
            <td class="table__cell">
              <span class="table__accent">npm i nodemon -D</span>
            </td>
            <td class="table__cell table__cell_right">
              Установка пакета nodemon, который отвечает за пересборку и запуск проекта после сохранения файлов с кодом.
              Флаг -D - dev зависимость
            </td>
          </tr>
          <tr>
            <td class="table__cell">
              <span class="table__accent">npm i express</span>
            </td>
            <td class="table__cell table__cell_right">Установка фреймворка для сервера Express</td>
          </tr>
        </tbody>
      </table>
      <a href="https://expressjs.com/ru/" class="block__link" target="blank">
        Подробнее
      </a>
    </section>
  );
}

export default Expr;
