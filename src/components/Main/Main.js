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

function Main({ stateCheckJS, stateCheckEnv }) {
  return (
    <main className="content">
      {stateCheckJS.es6 && <Es6 />}
      {stateCheckJS.prom && <Prom />}
      {stateCheckJS.proto && <Proto />}
      {stateCheckJS.operatorThis && <OperatorThis />}
      {stateCheckJS.expr && <Expr />}
      {stateCheckJS.toolsReact && <ToolsReact />}
      {stateCheckJS.arrays && <Arrays />}
      {stateCheckJS.numbers && <Numbers />}
      {stateCheckJS.strings && <Strings />}
      {stateCheckJS.typeData && <TypeData />}
      {stateCheckJS.operators && <Operators />}
      {stateCheckEnv.git && <Git />}
      {stateCheckEnv.webpack && <Webpack />}
      {stateCheckEnv.mongo && <Mongo />}
    </main>
  );
}

export default Main;
