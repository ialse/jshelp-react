import { rowsData } from '../../../data/numbers';
import TableWrap from '../../TableWrap/TableWrap';
import ButtonLink from '../../ButtonLink/ButtonLink';

function Numbers() {
  return (
    <section className="block block_size_middle">
      <h2 className="block__title">Методы для чисел</h2>
      <TableWrap rows={rowsData} />
      <ButtonLink url="https://learn.javascript.ru/number" />
    </section>
  );
}

export default Numbers;
