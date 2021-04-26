import { rowsData } from '../../../data/webpack';
import TableWrap from '../../TableWrap/TableWrap';
import ButtonLink from '../../ButtonLink/ButtonLink';

function Webpack() {
  return (
    <section className="block block_size_big">
      <h2 className="block__title">Команды Webpack</h2>
      <TableWrap rows={rowsData} />
      <ButtonLink url="https://githowto.com/ru" />
    </section>
  );
}

export default Webpack;
