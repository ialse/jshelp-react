import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Navigation.scss';
import { makeStyles } from '@material-ui/core/styles';
import { Checkbox, FormControlLabel } from '@material-ui/core';
import { toggleBlock, toggleAllBlock } from '../../store/store';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '180px',
    margin: '0',
  },
  checkBox: {
    padding: theme.spacing(0.5),
  },
}));

function Navigation() {
  const classes = useStyles();
  const state = useSelector((state) => state);
  const stateCheckboxJS = useSelector((state) => state.blockJS);
  const stateCheckboxEnv = useSelector((state) => state.blockEnv);
  const dispatch = useDispatch();

  function handleClickBlock(e) {
    dispatch(toggleBlock(e.target.name));
  }

  function handleClickAll(e) {
    dispatch(toggleAllBlock(e.target.name));
  }

  useEffect(() => {
    localStorage.setItem('userChoise', JSON.stringify(state));
  }, [state]);

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
                checked={stateCheckboxJS.jsAll}
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
                name="aboutRedux"
                checked={stateCheckboxJS.aboutRedux}
                onClick={handleClickBlock}
                className={classes.checkBox}
              />
            }
            label="Redux"
            className={classes.root}
          />

          <FormControlLabel
            control={
              <Checkbox
                color="primary"
                size="small"
                name="es6"
                checked={stateCheckboxJS.es6}
                onClick={handleClickBlock}
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
                checked={stateCheckboxJS.prom}
                onClick={handleClickBlock}
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
                checked={stateCheckboxJS.proto}
                onClick={handleClickBlock}
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
                checked={stateCheckboxJS.operatorThis}
                onClick={handleClickBlock}
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
                checked={stateCheckboxJS.expr}
                onClick={handleClickBlock}
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
                checked={stateCheckboxJS.toolsReact}
                onClick={handleClickBlock}
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
                checked={stateCheckboxJS.arrays}
                onClick={handleClickBlock}
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
                checked={stateCheckboxJS.numbers}
                onClick={handleClickBlock}
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
                checked={stateCheckboxJS.strings}
                onClick={handleClickBlock}
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
                checked={stateCheckboxJS.typeData}
                onClick={handleClickBlock}
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
                checked={stateCheckboxJS.operators}
                onClick={handleClickBlock}
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
                checked={stateCheckboxEnv.envAll}
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
                checked={stateCheckboxEnv.git}
                onClick={handleClickBlock}
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
                checked={stateCheckboxEnv.webpack}
                onClick={handleClickBlock}
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
                checked={stateCheckboxEnv.mongo}
                onClick={handleClickBlock}
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
