import { rowsData } from '../../../data/es6';
import TableWrap from '../../TableWrap/TableWrap';
import ButtonLink from '../../ButtonLink/ButtonLink';

function Es6() {
  return (
    <section className="block block_size_big">
      <h2 className="block__title">ES6</h2>
      <TableWrap rows={rowsData} />
      <ButtonLink url="https://habr.com/ru/post/305900/" />
    </section>
  );
}

export default Es6;
