import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import initialState from './initialState';

const TOGGLE_BLOCK = 'TOGGLE_BLOCK';
const TOGGLE_ALL_BLOCK = 'TOGGLE_ALL_BLOCK';

function reducer(state = initialState, action) {
  const isJS = state.blockJS.hasOwnProperty(action.on);
  const isEnv = state.blockEnv.hasOwnProperty(action.on);
  const block = isJS ? 'blockJS' : isEnv ? 'blockEnv' : null;

  switch (action.type) {
    case TOGGLE_BLOCK: {
      return {
        ...state,
        [block]: { ...state[block], [action.on]: !state[block][action.on] },
      };
    }

    case TOGGLE_ALL_BLOCK: {
      const newArr = {};
      for (const key in state[block]) {
        newArr[key] = !state[block][action.on];
      }

      return {
        ...state,
        [block]: { ...newArr },
      };
    }

    default:
      return state;
  }
}

export const store = createStore(reducer, composeWithDevTools());

export const toggleBlock = (block) => ({ type: TOGGLE_BLOCK, on: block });
export const toggleAllBlock = (block) => ({ type: TOGGLE_ALL_BLOCK, on: block });
