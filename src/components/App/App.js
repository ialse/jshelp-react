import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';
import Main from '../Main/Main';
import { useEffect, useState } from 'react';

function App() {
  const [stateCheckJS, setStateCheckJS] = useState({
    jsAll: true,
    es6: true,
    prom: true,
    proto: true,
    expr: true,
    toolsReact: true,
    operatorThis: true,
    arrays: true,
    numbers: true,
    strings: true,
    typeData: true,
    operators: true,
  });
  const [stateCheckEnv, setStateCheckEnv] = useState({
    envAll: true,
    git: true,
    webpack: true,
    mongo: true,
  });

  function handleCheckJS(elem) {
    setStateCheckJS({ ...stateCheckJS, [elem.name]: elem.checked ? true : false });
  }

  function handleCheckAll(elem) {
    const flag = elem.checked ? true : false;
    const currArr = elem.name === 'jsAll' ? stateCheckJS : stateCheckEnv;
    const newStateArr = {};
    for (const key in currArr) {
      newStateArr[key] = flag;
    }
    if (elem.name === 'jsAll') {
      setStateCheckJS(newStateArr);
    } else if (elem.name === 'envAll') {
      setStateCheckEnv(newStateArr);
    }
  }

  function handleCheckEnv(elem) {
    setStateCheckEnv({ ...stateCheckEnv, [elem.name]: elem.checked ? true : false });
  }

  useEffect(() => {
    if (localStorage.getItem('userCheckJS') && localStorage.getItem('userCheckEnv')) {
      const userCheckJS = JSON.parse(localStorage.getItem('userCheckJS'));
      const userCheckEnv = JSON.parse(localStorage.getItem('userCheckEnv'));
      setStateCheckJS(userCheckJS);
      setStateCheckEnv(userCheckEnv);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('userCheckJS', JSON.stringify(stateCheckJS));
  }, [stateCheckJS]);

  useEffect(() => {
    localStorage.setItem('userCheckEnv', JSON.stringify(stateCheckEnv));
  }, [stateCheckEnv]);

  return (
    <div className="page">
      <Header />
      <Navigation
        stateCheckJS={stateCheckJS}
        stateCheckEnv={stateCheckEnv}
        handleCheckJS={handleCheckJS}
        handleCheckAll={handleCheckAll}
        handleCheckEnv={handleCheckEnv}
      />
      <Main
        stateCheckJS={stateCheckJS}
        stateCheckEnv={stateCheckEnv}
        handleCheckJS={handleCheckJS}
        handleCheckEnv={handleCheckEnv}
      />
    </div>
  );
}

export default App;
