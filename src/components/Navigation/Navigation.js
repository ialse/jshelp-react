import React from 'react';
import './Navigation.scss';
import { makeStyles } from '@material-ui/core/styles';
import { Checkbox, FormControlLabel } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '180px',
    margin: '0',
  },
  checkBox: {
    padding: theme.spacing(0.5),
  },
}));

function Navigation({ stateCheckJS, stateCheckEnv, handleCheckJS, handleCheckAll, handleCheckEnv }) {
  const classes = useStyles();

  function handleClickJS(e) {
    handleCheckJS(e.target);
  }

  function handleClickAll(e) {
    handleCheckAll(e.target);
  }

  function handleClickEnv(e) {
    handleCheckEnv(e.target);
  }

  return (
    <nav className="nav">
      <div className="nav__theme">
        <div className="nav__title-container">
          <h3 className="nav__title">Javascript</h3>

          <FormControlLabel
            control={
              <Checkbox
                color="primary"
                size="small"
                name="jsAll"
                checked={stateCheckJS.jsAll}
                onClick={handleClickAll}
              />
            }
            label="Включить все"
          />
        </div>

        <div className="nav__trigger-container">
          <FormControlLabel
            control={
              <Checkbox
                color="primary"
                size="small"
                name="es6"
                checked={stateCheckJS.es6}
                onClick={handleClickJS}
                className={classes.checkBox}
              />
            }
            label="Синтаксис ES6"
            className={classes.root}
          />

          <FormControlLabel
            control={
              <Checkbox
                color="primary"
                size="small"
                name="prom"
                checked={stateCheckJS.prom}
                onClick={handleClickJS}
                className={classes.checkBox}
              />
            }
            label="Промисы"
            className={classes.root}
          />

          <FormControlLabel
            control={
              <Checkbox
                color="primary"
                size="small"
                name="proto"
                checked={stateCheckJS.proto}
                onClick={handleClickJS}
                className={classes.checkBox}
              />
            }
            label="Наследование"
            className={classes.root}
          />

          <FormControlLabel
            control={
              <Checkbox
                color="primary"
                size="small"
                name="operatorThis"
                checked={stateCheckJS.operatorThis}
                onClick={handleClickJS}
                className={classes.checkBox}
              />
            }
            label="this"
            className={classes.root}
          />

          <FormControlLabel
            control={
              <Checkbox
                color="primary"
                size="small"
                name="expr"
                checked={stateCheckJS.expr}
                onClick={handleClickJS}
                className={classes.checkBox}
              />
            }
            label="Express.js"
            className={classes.root}
          />

          <FormControlLabel
            control={
              <Checkbox
                color="primary"
                size="small"
                name="toolsReact"
                checked={stateCheckJS.toolsReact}
                onClick={handleClickJS}
                className={classes.checkBox}
              />
            }
            label="React"
            className={classes.root}
          />

          <FormControlLabel
            control={
              <Checkbox
                color="primary"
                size="small"
                name="arrays"
                checked={stateCheckJS.arrays}
                onClick={handleClickJS}
                className={classes.checkBox}
              />
            }
            label="Методы массивов"
            className={classes.root}
          />

          <FormControlLabel
            control={
              <Checkbox
                color="primary"
                size="small"
                name="numbers"
                checked={stateCheckJS.numbers}
                onClick={handleClickJS}
                className={classes.checkBox}
              />
            }
            label="Методы чисел"
            className={classes.root}
          />

          <FormControlLabel
            control={
              <Checkbox
                color="primary"
                size="small"
                name="strings"
                checked={stateCheckJS.strings}
                onClick={handleClickJS}
                className={classes.checkBox}
              />
            }
            label="Методы строк"
            className={classes.root}
          />

          <FormControlLabel
            control={
              <Checkbox
                color="primary"
                size="small"
                name="typeData"
                checked={stateCheckJS.typeData}
                onClick={handleClickJS}
                className={classes.checkBox}
              />
            }
            label="Типы данных"
            className={classes.root}
          />

          <FormControlLabel
            control={
              <Checkbox
                color="primary"
                size="small"
                name="operators"
                checked={stateCheckJS.operators}
                onClick={handleClickJS}
                className={classes.checkBox}
              />
            }
            label="Операторы"
            className={classes.root}
          />
        </div>
      </div>

      <div className="nav__theme">
        <div className="nav__title-container">
          <h3 className="nav__title">Окружение</h3>

          <FormControlLabel
            control={
              <Checkbox
                color="primary"
                size="small"
                name="envAll"
                checked={stateCheckJS.envAll}
                onClick={handleClickAll}
              />
            }
            label="Включить все"
          />
        </div>

        <div className="nav__trigger-container">
          <FormControlLabel
            control={
              <Checkbox
                color="primary"
                size="small"
                name="git"
                checked={stateCheckEnv.git}
                onClick={handleClickEnv}
                className={classes.checkBox}
              />
            }
            label="Git"
            className={classes.root}
          />

          <FormControlLabel
            control={
              <Checkbox
                color="primary"
                size="small"
                name="webpack"
                checked={stateCheckEnv.webpack}
                onClick={handleClickEnv}
                className={classes.checkBox}
              />
            }
            label="Webpack"
            className={classes.root}
          />

          <FormControlLabel
            control={
              <Checkbox
                color="primary"
                size="small"
                name="mongo"
                checked={stateCheckEnv.mongo}
                onClick={handleClickEnv}
                className={classes.checkBox}
              />
            }
            label="Mongo"
            className={classes.root}
          />
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
