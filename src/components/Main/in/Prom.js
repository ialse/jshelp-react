import { rowsData } from '../../../data/prom';
import TableWrap from '../../TableWrap/TableWrap';
import ButtonLink from '../../ButtonLink/ButtonLink';

function Prom() {
  return (
    <section className="block block_size_big">
      <h2 className="block__title">Промисы</h2>
      <TableWrap rows={rowsData} />
      <ButtonLink url="https://learn.javascript.ru/promise" />
    </section>
  );
}

export default Prom;
