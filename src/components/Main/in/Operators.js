function Operators() {
  return (
    <section className="block block_operators">
      <h2 className="block__title">Операторы</h2>
      <table className="table">
        <tbody>
          <tr>
            <td className="table__cell">
              <span className="table__accent">+</span>
            </td>
            <td className="table__cell table__cell_right">сложение, действует и для строк</td>
          </tr>
          <tr>
            <td className="table__cell">
              <span className="table__accent">-</span>
            </td>
            <td className="table__cell table__cell_right">вычитание</td>
          </tr>
          <tr>
            <td className="table__cell">
              <span className="table__accent">*</span>
            </td>
            <td className="table__cell table__cell_right">умножение</td>
          </tr>
          <tr>
            <td className="table__cell">
              <span className="table__accent">/</span>
            </td>
            <td className="table__cell table__cell_right">деление</td>
          </tr>
          <tr>
            <td className="table__cell">
              <span className="table__accent">=</span>
            </td>
            <td className="table__cell table__cell_right">присваивание</td>
          </tr>
          <tr>
            <td className="table__cell">
              <span className="table__accent">++</span>
            </td>
            <td className="table__cell table__cell_right">инкремент, i++ то же, что i=i+1</td>
          </tr>
          <tr>
            <td className="table__cell">
              <span className="table__accent">--</span>
            </td>
            <td className="table__cell table__cell_right">декремент, i-- то же, что i=i-1</td>
          </tr>
          <tr>
            <td className="table__cell">
              <span className="table__accent">%</span>
            </td>
            <td className="table__cell table__cell_right">остаток от деления</td>
          </tr>
          <tr>
            <td className="table__cell">
              <span className="table__accent">**</span>
            </td>
            <td className="table__cell table__cell_right">возведение в степень</td>
          </tr>
        </tbody>
      </table>
      <a href="https://learn.javascript.ru/operators" className="block__link" target="blank">
        Подробнее
      </a>
    </section>
  );
}

export default Operators;
