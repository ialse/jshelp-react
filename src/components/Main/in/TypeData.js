function TypeData() {
  return (
    <section className="block block_type-data">
      <h2 className="block__title">Типы данных</h2>
      <table className="table">
        <tbody>
          <tr>
            <td className="table__cell">
              <span className="table__accent">number</span>
            </td>
            <td className="table__cell table__cell_right">целое число или с точкой, а также NaN и Infinity</td>
          </tr>
          <tr>
            <td className="table__cell">
              <span className="table__accent">bigint</span>
            </td>
            <td className="table__cell table__cell_right">большие числа > 2 в 53</td>
          </tr>
          <tr>
            <td className="table__cell">
              <span className="table__accent">string</span>
            </td>
            <td className="table__cell table__cell_right">строка</td>
          </tr>
          <tr>
            <td className="table__cell">
              <span className="table__accent">boolean</span>
            </td>
            <td className="table__cell table__cell_right">булево: true или false</td>
          </tr>
          <tr>
            <td className="table__cell">
              <span className="table__accent">null</span>
            </td>
            <td className="table__cell table__cell_right">для неизвестных значений</td>
          </tr>
          <tr>
            <td className="table__cell">
              <span className="table__accent">undefined</span>
            </td>
            <td className="table__cell table__cell_right">для неприсвоенных значений</td>
          </tr>
          <tr>
            <td className="table__cell">
              <span className="table__accent">object</span>
            </td>
            <td className="table__cell table__cell_right">для сложных структур данных</td>
          </tr>
          <tr>
            <td className="table__cell">
              <span className="table__accent">symbol</span>
            </td>
            <td className="table__cell table__cell_right">для уникальных идентификаторов</td>
          </tr>
        </tbody>
      </table>

      <p className="block__paragraph">
        Оператор <span className="block__name">typeof</span> позволяет увидеть, какой тип данных сохранён в переменной.
      </p>
      <a href="https://learn.javascript.ru/types" className="block__link" target="blank">
        Подробнее
      </a>
    </section>
  );
}

export default TypeData;
