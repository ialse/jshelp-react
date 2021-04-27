import { rowsData } from '../../../data/operators';
import TableWrap from '../../TableWrap/TableWrap';
import ButtonLink from '../../ButtonLink/ButtonLink';

function Operators() {
  return (
    <section className="block">
      <h2 className="block__title">Операторы</h2>
      <TableWrap rows={rowsData} />
      <ButtonLink url="https://learn.javascript.ru/operators" />
    </section>
  );
}

export default Operators;
