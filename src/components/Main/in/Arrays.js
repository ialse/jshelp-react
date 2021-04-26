import { rowsData } from '../../../data/methodsArray';
import TableWrap from '../../TableWrap/TableWrap';
import ButtonLink from '../../ButtonLink/ButtonLink';

function Arrays() {
  return (
    <section className="block block_size_big">
      <h2 className="block__title">Методы для массивов</h2>
      <TableWrap rows={rowsData} />
      <ButtonLink url="https://learn.javascript.ru/array-methods" />
    </section>
  );
}

export default Arrays;
