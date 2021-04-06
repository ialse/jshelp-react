import React from 'react';
import './Navigation.scss';

function Navigation({ stateCheckJS, stateCheckEnv, handleCheckJS, handleCheckAll, handleCheckEnv }) {
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

          <input
            type="checkbox"
            className="nav__trigger"
            name="jsAll"
            checked={stateCheckJS.jsAll}
            onClick={handleClickAll}
          ></input>
          <label htmlFor="jsAll" className="nav__label">
            Включить все
          </label>
        </div>

        <div className="nav__trigger-container">
          <label htmlFor="es6" className="nav__label">
            <input
              type="checkbox"
              className="nav__trigger"
              name="es6"
              checked={stateCheckJS.es6}
              onClick={handleClickJS}
            ></input>
            Синтаксис ES6
          </label>

          <label htmlFor="prom" className="nav__label">
            <input
              type="checkbox"
              className="nav__trigger"
              name="prom"
              checked={stateCheckJS.prom}
              onClick={handleClickJS}
            ></input>
            Промисы
          </label>

          <label htmlFor="proto" className="nav__label">
            <input
              type="checkbox"
              className="nav__trigger"
              name="proto"
              checked={stateCheckJS.proto}
              onClick={handleClickJS}
            ></input>
            Наследование
          </label>

          <label htmlFor="operatorThis" className="nav__label">
            <input
              type="checkbox"
              className="nav__trigger"
              name="operatorThis"
              checked={stateCheckJS.operatorThis}
              onClick={handleClickJS}
            ></input>
            this
          </label>

          <label htmlFor="expr" className="nav__label">
            <input
              type="checkbox"
              className="nav__trigger"
              name="expr"
              checked={stateCheckJS.expr}
              onClick={handleClickJS}
            />
            Express.js
          </label>

          <label htmlFor="toolsReact" className="nav__label">
            <input
              type="checkbox"
              className="nav__trigger"
              name="toolsReact"
              checked={stateCheckJS.toolsReact}
              onClick={handleClickJS}
            />
            React
          </label>

          <label htmlFor="arrays" className="nav__label">
            <input
              type="checkbox"
              className="nav__trigger"
              name="arrays"
              checked={stateCheckJS.arrays}
              onClick={handleClickJS}
            />
            Методы массивов
          </label>

          <label htmlFor="numbers" className="nav__label">
            <input
              type="checkbox"
              className="nav__trigger"
              name="numbers"
              checked={stateCheckJS.numbers}
              onClick={handleClickJS}
            />
            Методы чисел
          </label>

          <label htmlFor="strings" className="nav__label">
            <input
              type="checkbox"
              className="nav__trigger"
              name="strings"
              checked={stateCheckJS.strings}
              onClick={handleClickJS}
            />
            Методы строк
          </label>

          <label htmlFor="typeData" className="nav__label">
            <input
              type="checkbox"
              className="nav__trigger"
              name="typeData"
              checked={stateCheckJS.typeData}
              onClick={handleClickJS}
            />
            Типы данных
          </label>

          <label htmlFor="operators" className="nav__label">
            <input
              type="checkbox"
              className="nav__trigger"
              name="operators"
              checked={stateCheckJS.operators}
              onClick={handleClickJS}
            />
            Операторы
          </label>
        </div>
      </div>

      <div className="nav__theme">
        <div className="nav__title-container">
          <h3 className="nav__title">Окружение</h3>
          <input
            type="checkbox"
            className="nav__trigger"
            name="envAll"
            checked={stateCheckEnv.envAll}
            onClick={handleClickAll}
          ></input>
          <label htmlFor="envAll" className="nav__label">
            Включить все
          </label>
        </div>

        <div className="nav__trigger-container">
          <label htmlFor="git" className="nav__label">
            <input
              type="checkbox"
              className="nav__trigger"
              name="git"
              checked={stateCheckEnv.git}
              onClick={handleClickEnv}
            ></input>
            Git
          </label>

          <label htmlFor="Webpack" className="nav__label">
            <input
              type="checkbox"
              className="nav__trigger"
              name="webpack"
              checked={stateCheckEnv.webpack}
              onClick={handleClickEnv}
            />
            Webpack
          </label>

          <label htmlFor="mongo" className="nav__label">
            <input
              type="checkbox"
              className="nav__trigger"
              name="mongo"
              checked={stateCheckEnv.mongo}
              onClick={handleClickEnv}
            />
            Mongo
          </label>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
