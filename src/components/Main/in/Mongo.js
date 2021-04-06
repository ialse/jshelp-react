function Mongo() {
  return (
    <section className="block block_size_big block_mongo">
      <h2 className="block__title">MongoDB</h2>
      <table className="table">
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
      </table>
      <a href="#" className="block__link" target="blank">
        Подробнее
      </a>
    </section>
  );
}

export default Mongo;
