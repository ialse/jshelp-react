import { useSelector } from 'react-redux';
import OperatorThis from './in/OperatorThis';
import Es6 from './in/Es6';
import Prom from './in/Prom';
import Proto from './in/Proto';
import Expr from './in/Expr';
import Arrays from './in/Arrays';
import Numbers from './in/Numbers';
import Strings from './in/Strings';
import ToolsReact from './in/ToolsReact';
import TypeData from './in/TypeData';
import Operators from './in/Operators';
import Git from './in/Git';
import Webpack from './in/Webpack';
import Mongo from './in/Mongo';
import AboutRedux from './in/AboutRedux';

function Main() {
  const stateBlockJS = useSelector((state) => state.blockJS);
  const stateBlockEnv = useSelector((state) => state.blockEnv);

  return (
    <main className="content">
      {stateBlockJS.aboutRedux && <AboutRedux />}
      {stateBlockJS.es6 && <Es6 />}
      {stateBlockJS.prom && <Prom />}
      {stateBlockJS.proto && <Proto />}
      {stateBlockJS.operatorThis && <OperatorThis />}
      {stateBlockJS.expr && <Expr />}
      {stateBlockJS.toolsReact && <ToolsReact />}
      {stateBlockJS.arrays && <Arrays />}
      {stateBlockJS.numbers && <Numbers />}
      {stateBlockJS.strings && <Strings />}
      {stateBlockJS.typeData && <TypeData />}
      {stateBlockJS.operators && <Operators />}
      {stateBlockEnv.git && <Git />}
      {stateBlockEnv.webpack && <Webpack />}
      {stateBlockEnv.mongo && <Mongo />}
    </main>
  );
}

export default Main;
