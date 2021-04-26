import { rowsData } from '../../../data/typeData';
import TableWrap from '../../TableWrap/TableWrap';
import ButtonLink from '../../ButtonLink/ButtonLink';

function TypeData() {
  return (
    <section className="block block_size_middle">
      <h2 className="block__title">Типы данных</h2>
      <TableWrap rows={rowsData} />
      <p className="block__paragraph">
        Оператор <span className="block__name">typeof</span> позволяет увидеть, какой тип данных сохранён в переменной.
      </p>
      <ButtonLink url="https://learn.javascript.ru/types" />
    </section>
  );
}

export default TypeData;
