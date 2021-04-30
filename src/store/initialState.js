let initialState = {};

if (localStorage.getItem('userChoise')) {
  initialState = JSON.parse(localStorage.getItem('userChoise'));
} else {
  initialState = {
    blockJS: {
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
      aboutRedux: true,
    },
    blockEnv: {
      envAll: true,
      git: true,
      webpack: true,
      mongo: true,
    },
  };
}

export default initialState;
