function Numbers() {
  return (
    <section className="block block_size_middle block_number-metod">
      <h2 className="block__title">Методы для чисел</h2>
      <table className="table">
        <tbody>
          <tr>
            <td className="table__cell">
              <span className="table__accent">Math.floor()</span>
            </td>
            <td className="table__cell table__cell_right">Округление в меньшую сторону</td>
          </tr>
          <tr>
            <td className="table__cell">
              <span className="table__accent">Math.ceil()</span>
            </td>
            <td className="table__cell table__cell_right">Округление в большую сторону</td>
          </tr>
          <tr>
            <td className="table__cell">
              <span className="table__accent">Math.round()</span>
            </td>
            <td className="table__cell table__cell_right">Округление до ближайшего целого</td>
          </tr>
          <tr>
            <td className="table__cell">
              <span className="table__accent">Math.trunc()</span>
            </td>
            <td className="table__cell table__cell_right">Удаление дробной части без округления</td>
          </tr>
          <tr>
            <td className="table__cell">
              <span className="table__accent">parseInt()</span>
            </td>
            <td className="table__cell table__cell_right">Ищет первое целое число в строке</td>
          </tr>
          <tr>
            <td className="table__cell">
              <span className="table__accent">parseFloat()</span>
            </td>
            <td className="table__cell table__cell_right">Ищет первое дробное число в строке</td>
          </tr>
          <tr>
            <td className="table__cell">
              <span className="table__accent">Math.random()</span>
            </td>
            <td className="table__cell table__cell_right">Возвращает псевдослучайное число от 0 до 1</td>
          </tr>
          <tr>
            <td className="table__cell">
              <span className="table__accent">Math.max(a, b, c...)</span>
            </td>
            <td className="table__cell table__cell_right">Возвращает наибольшее</td>
          </tr>
          <tr>
            <td className="table__cell">
              <span className="table__accent">Math.min(a, b, c...)</span>
            </td>
            <td className="table__cell table__cell_right">Возвращает наименьшее</td>
          </tr>
          <tr>
            <td className="table__cell">
              <span className="table__accent">Math.pow(n, power)</span>
            </td>
            <td className="table__cell table__cell_right">Возводит n в степень power</td>
          </tr>
        </tbody>
      </table>
      <a href="https://learn.javascript.ru/number" className="block__link" target="blank">
        Подробнее
      </a>
    </section>
  );
}

export default Numbers;
