import image from '../../../images/JS_proto.jpg';
import { rowsData } from '../../../data/proto';
import TableWrap from '../../TableWrap/TableWrap';
import ButtonLink from '../../ButtonLink/ButtonLink';

function Proto() {
  return (
    <section className="block block_size_big">
      <h2 className="block__title">Наследование</h2>
      <TableWrap rows={rowsData} />
      <img className="block__image" src={image} alt="Схема наследования через прототипы"></img>
      <ButtonLink url="https://expressjs.com/ru/" />
    </section>
  );
}

export default Proto;
