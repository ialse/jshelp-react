function reducer(state, action) {
  switch (action.type) {
    case 'ON_BLOCK': {
        const block = action.toggle;

        return { ...state, block}
    }

    case 'OFF_BLOCK':
      return { ...state, action.payload};
    default:
      return state;
  }
}
