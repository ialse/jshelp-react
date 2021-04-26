import { rowsData } from '../../../data/mongo';
import TableWrap from '../../TableWrap/TableWrap';
import ButtonLink from '../../ButtonLink/ButtonLink';

function Mongo() {
  return (
    <section className="block block_size_big">
      <h2 className="block__title">MongoDB</h2>
      <TableWrap rows={rowsData} />
      <ButtonLink url="https://mongoosejs.com/docs/guide.html" />
    </section>
  );
}

export default Mongo;
