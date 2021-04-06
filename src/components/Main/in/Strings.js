function Strings() {
  return (
    <section className="block block_size_middle block_string-metod">
      <h2 className="block__title">Методы для строк</h2>
      <table className="table">
        <tbody>
          <tr>
            <td className="table__cell">
              <span className="table__accent">.length</span>
            </td>
            <td className="table__cell table__cell_right">Длина строки (это свойство, не метод)</td>
          </tr>
          <tr>
            <td className="table__cell">
              <span className="table__accent">.toLowerCase()</span>
            </td>
            <td className="table__cell table__cell_right">Меняет регистр на нижний</td>
          </tr>
          <tr>
            <td className="table__cell">
              <span className="table__accent">.toUpperCase() </span>
            </td>
            <td className="table__cell table__cell_right">Меняет регистр на верхний</td>
          </tr>
          <tr>
            <td className="table__cell">
              <span className="table__accent">.indexOf(substr, pos)</span>
            </td>
            <td className="table__cell table__cell_right">Поиск подстроки</td>
          </tr>
          <tr>
            <td className="table__cell">
              <span className="table__accent">.lastIndexOf(substr, pos)</span>
            </td>
            <td className="table__cell table__cell_right">Поиск подстроки. Ищет с конца</td>
          </tr>
          <tr>
            <td className="table__cell">
              <span className="table__accent">.includes(substr, pos)</span>
            </td>
            <td className="table__cell table__cell_right">Поиск подстроки</td>
          </tr>
          <tr>
            <td className="table__cell">
              <span className="table__accent">.startsWith()</span>
            </td>
            <td className="table__cell table__cell_right">Начинается ли строка с </td>
          </tr>
          <tr>
            <td className="table__cell">
              <span className="table__accent">.endsWith()</span>
            </td>
            <td className="table__cell table__cell_right">Кончается ли строка на</td>
          </tr>
          <tr>
            <td className="table__cell">
              <span className="table__accent">.slice(start, end)</span>
            </td>
            <td className="table__cell table__cell_right">Часть строки от start до (не включая) end</td>
          </tr>
          <tr>
            <td className="table__cell">
              <span className="table__accent">.substring(start, end)</span>
            </td>
            <td className="table__cell table__cell_right">Часть строки между start и end</td>
          </tr>
        </tbody>
      </table>
      <a href="https://learn.javascript.ru/string" className="block__link" target="blank">
        Подробнее
      </a>
    </section>
  );
}

export default Strings;
