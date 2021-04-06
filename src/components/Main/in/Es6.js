function Es6() {
  return (
    <section class="block block_size_big">
      <h2 class="block__title">Синтаксис ES6</h2>
      <table class="table">
        <tbody>
          <tr>
            <td class="table__cell table__cell_left">
              <span class="table__accent">{`const {name, about} = object`}</span>
            </td>
            <td class="table__cell table__cell_right">
              Деструктуризация объекта. Определяются переменные на основе свойств объекта object. У него соответсвенно
              должны быть эти свойства.
            </td>
          </tr>
          <tr>
            <td class="table__cell">
              <span class="table__accent">const [name, about] = array</span>
            </td>
            <td class="table__cell table__cell_right">
              Деструктуризация массива. Определяются переменные на основе элементов массива array. По порядку.
            </td>
          </tr>
          <tr>
            <td class="table__cell">
              <span class="table__accent">{`(a,b) => {...}`} </span>
            </td>
            <td class="table__cell table__cell_right">
              Стрелочные функции. Используется для сокращения записи, ососбенно часто, когда в параматерах функции нужен
              анонимный колбэк. При этом запись может быть someFunc(a => a*b), что значит, что передается параметер a, а
              возвращается a*b (оператор return опускается)
            </td>
          </tr>
          <tr>
            <td class="table__cell">
              <span class="table__accent"> ...</span>
            </td>
            <td class="table__cell table__cell_right">оператор spread:</td>
          </tr>
        </tbody>
      </table>
      <a href="#" class="block__link" target="blank">
        Подробнее
      </a>
    </section>
  );
}

export default Es6;
