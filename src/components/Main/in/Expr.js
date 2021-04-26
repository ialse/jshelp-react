import { rowsData } from '../../../data/expr';
import TableWrap from '../../TableWrap/TableWrap';
import ButtonLink from '../../ButtonLink/ButtonLink';

function Expr() {
  return (
    <section className="block block_size_big">
      <h2 className="block__title">Express</h2>
      <TableWrap rows={rowsData} />
      <ButtonLink url="https://expressjs.com/ru/" />
    </section>
  );
}

export default Expr;
