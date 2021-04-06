import image from '../../../images/JS_proto.jpg';

function Proto() {
  return (
    <section className="block block_size_big">
      <h2 className="block__title">Наследование</h2>
      <table className="table">
        <tbody>
          <tr>
            <td className="table__cell">
              <span className="table__accent">.__proto__</span>
            </td>
            <td className="table__cell table__cell_right">
              Любой объект имеет это свойство. Содержит ссылку на прототип
            </td>
          </tr>
          <tr>
            <td className="table__cell">
              <span className="table__accent">.prototype</span>
            </td>
            <td className="table__cell table__cell_right">
              Любая функция конструктор (и пользовательская и встроенная (String, Array, Object, Number и другие ))
              содержит это свойство, в котором содержатся методы объекты
            </td>
          </tr>
          <tr>
            <td className="table__cell">
              <span className="table__accent">Оператор new</span>
            </td>
            <td className="table__cell table__cell_right">
              При вызове функции с этим оператором по умолчанию происходит создание пустого объекта и в конце возврат
              этого объекта. Такие функции называются функции-конструкторы.
            </td>
          </tr>
        </tbody>
      </table>
      <img className="block__image" src={image} alt="Схема наследования через прототипы"></img>
      <a href="#" className="block__link" target="blank">
        Подробнее
      </a>
    </section>
  );
}

export default Proto;
