function ToolsReact() {
  return (
    <section className="block block_size_big block_react">
      <h2 className="block__title">Команды React</h2>
      <table className="table">
        <tbody>
          <tr>
            <td className="table__cell">
              <span className="table__accent">npm install -g create-react-app</span>
            </td>
            <td className="table__cell table__cell_right">Установка Create React App</td>
          </tr>
          <tr>
            <td className="table__cell">
              <span className="table__accent">npm init react-app название_проекта</span>
            </td>
            <td className="table__cell table__cell_right">Создание нового CRA-проекта</td>
          </tr>
          <tr>
            <td className="table__cell">
              <span className="table__accent">npm i -g serve </span>
            </td>
            <td className="table__cell table__cell_right">Установка локального сервера</td>
          </tr>
          <tr>
            <td className="table__cell">
              <span className="table__accent">serve -s build</span>
            </td>
            <td className="table__cell table__cell_right">
              Запуск локального сервера. По умолчанию адрес localhost:5000
            </td>
          </tr>
        </tbody>
      </table>
      <a href="https://create-react-app.dev/docs/getting-started/" className="block__link" target="blank">
        Подробнее
      </a>
    </section>
  );
}

export default ToolsReact;
