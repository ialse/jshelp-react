import { rowsData } from '../../../data/git';
import TableWrap from '../../TableWrap/TableWrap';
import ButtonLink from '../../ButtonLink/ButtonLink';

function Git() {
  return (
    <section className="block block_size_big block_git">
      <h2 className="block__title">Команды Git</h2>
      <TableWrap rows={rowsData} />
      <ButtonLink url="https://githowto.com/ru" />
    </section>
  );
}

export default Git;
