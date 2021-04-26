import { rowsData } from '../../../data/strings';
import TableWrap from '../../TableWrap/TableWrap';
import ButtonLink from '../../ButtonLink/ButtonLink';

function Strings() {
  return (
    <section className="block block_size_middle">
      <h2 className="block__title">Методы для строк</h2>
      <TableWrap rows={rowsData} />
      <ButtonLink url="https://learn.javascript.ru/string" />
    </section>
  );
}

export default Strings;
