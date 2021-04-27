import { rowsData } from '../../../data/toolsReact';
import TableWrap from '../../TableWrap/TableWrap';
import ButtonLink from '../../ButtonLink/ButtonLink';

function ToolsReact() {
  return (
    <section className="block block_size_big">
      <h2 className="block__title">Команды React</h2>
      <TableWrap rows={rowsData} />
      <ButtonLink url="https://create-react-app.dev/docs/getting-started/" />
    </section>
  );
}

export default ToolsReact;
