function Arrays() {
  return (
    <section className="block block_size_big block_array-metod">
      <h2 className="block__title">Методы для массивов</h2>
      <table className="table">
        <tbody>
          <tr>
            <td className="table__cell">
              <span className="table__accent">.length</span>
            </td>
            <td className="table__cell table__cell_right">Длина массива (это свойство, не метод)</td>
          </tr>
          <tr>
            <td className="table__cell">
              <span className="table__accent">.pop()</span>
            </td>
            <td className="table__cell table__cell_right">Извлекает элемент с конца</td>
          </tr>
          <tr>
            <td className="table__cell">
              <span className="table__accent">.push (...items)</span>
            </td>
            <td className="table__cell table__cell_right">Добавляет элементы в конец</td>
          </tr>
          <tr>
            <td className="table__cell">
              <span className="table__accent">.shift()</span>
            </td>
            <td className="table__cell table__cell_right">Извлекает элемент с начала</td>
          </tr>
          <tr>
            <td className="table__cell">
              <span className="table__accent">.unshift(...items)</span>
            </td>
            <td className="table__cell table__cell_right">Добавляет элементы в начало</td>
          </tr>
          <tr>
            <td className="table__cell">
              <span className="table__accent">.slice(start, end)</span>
            </td>
            <td className="table__cell table__cell_right">
              Возвращает новый массив, в который копирует элементы, начиная с индекса start и до end (не включая)
            </td>
          </tr>
          <tr>
            <td className="table__cell">
              <span className="table__accent">.splice(pos, deleteCount, ...items)</span>
            </td>
            <td className="table__cell table__cell_right">
              Начиная с индекса pos, удаляет deleteCount элементов и вставляет items, возвращает новый массив
            </td>
          </tr>
          <tr>
            <td className="table__cell">
              <span className="table__accent">.concat(array, ...)</span>
            </td>
            <td className="table__cell table__cell_right">
              Создаёт новый массив, в который копирует данные из других массивов
            </td>
          </tr>
          <tr>
            <td className="table__cell">
              <span className="table__accent">.indexOf(item, pos)</span>
            </td>
            <td className="table__cell table__cell_right">
              Ищет item, начиная с позиции pos, и возвращает его индекс или -1, если ничего не найдено
            </td>
          </tr>
          <tr>
            <td className="table__cell">
              <span className="table__accent">.lastIndexOf(item, pos)</span>
            </td>
            <td className="table__cell table__cell_right">
              Ищет item, начиная с позиции pos, и возвращает его индекс или -1, если ничего не найдено. Ищет с конца
            </td>
          </tr>
          <tr>
            <td className="table__cell">
              <span className="table__accent">.includes(value)</span>
            </td>
            <td className="table__cell table__cell_right">
              Возвращает true, если в массиве имеется элемент value, в противном случае false
            </td>
          </tr>
          <tr>
            <td className="table__cell">
              <span className="table__accent">.filter(func)</span>
            </td>
            <td className="table__cell table__cell_right">
              Фильтрует элементы через функцию и отдаёт массив значений, при прохождении которых через функцию
              возвращается true
            </td>
          </tr>
          <tr>
            <td className="table__cell">
              <span className="table__accent">.find(func)</span>
            </td>
            <td className="table__cell table__cell_right">
              Ищет элементы через функцию и отдаёт первое значение, при прохождении которых через функцию возвращается
              true
            </td>
          </tr>
          <tr>
            <td className="table__cell">
              <span className="table__accent">.findIndex()</span>
            </td>
            <td className="table__cell table__cell_right">Похож на find, но возвращает индекс вместо значения</td>
          </tr>
          <tr>
            <td className="table__cell">
              <span className="table__accent">.forEach(func)</span>
            </td>
            <td className="table__cell table__cell_right">Вызывает func для каждого элемента. Ничего не возвращает</td>
          </tr>
          <tr>
            <td className="table__cell">
              <span className="table__accent">.map(func)</span>
            </td>
            <td className="table__cell table__cell_right">
              Возвращает новый массив из результатов вызова func для каждого элемента
            </td>
          </tr>
          <tr>
            <td className="table__cell">
              <span className="table__accent">.sort(func)</span>
            </td>
            <td className="table__cell table__cell_right">Сортирует массив «на месте», а потом возвращает его</td>
          </tr>
          <tr>
            <td className="table__cell">
              <span className="table__accent">.reverse()</span>
            </td>
            <td className="table__cell table__cell_right">
              Меняет порядок следования элементов на противоположный «на месте» и возвращает изменённый массив
            </td>
          </tr>
          <tr>
            <td className="table__cell">
              <span className="table__accent">.split()</span>
            </td>
            <td className="table__cell table__cell_right">Преобразует строку в массив</td>
          </tr>
          <tr>
            <td className="table__cell">
              <span className="table__accent">.join()</span>
            </td>
            <td className="table__cell table__cell_right">Преобразует массив в строку</td>
          </tr>
          <tr>
            <td className="table__cell">
              <span className="table__accent">.reduce(func, initial)</span>
            </td>
            <td className="table__cell table__cell_right">
              Вычисляет одно значение на основе всего массива, вызывая func для каждого элемента и передавая
              промежуточный результат между вызовами
            </td>
          </tr>
          <tr>
            <td className="table__cell">
              <span className="table__accent">Array.isArray(arr)</span>
            </td>
            <td className="table__cell table__cell_right">Проверяет, является ли arr массивом</td>
          </tr>
          <tr>
            <td className="table__cell">
              <span className="table__accent">.every(func)</span>
            </td>
            <td className="table__cell table__cell_right">
              Проверяет, удовлетворяют ли все элементы массива условию, заданному в передаваемой функции, возвращает
              true или false
            </td>
          </tr>
          <tr>
            <td className="table__cell">
              <span className="table__accent">.some(func)</span>
            </td>
            <td className="table__cell table__cell_right">
              Проверяет, удовлетворяют ли хоть один элемент массива условию, заданному в передаваемой функции,
              возвращает true или false
            </td>
          </tr>
        </tbody>
      </table>
      <a href="https://learn.javascript.ru/array-methods" className="block__link" target="blank">
        Подробнее
      </a>
    </section>
  );
}

export default Arrays;
