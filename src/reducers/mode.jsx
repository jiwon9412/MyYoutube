export const TOGGLE = 'MODE/TOGGLE';

export const toggleMode = (darkmode) => ({ type: TOGGLE, darkmode });

const initialState = {
  darkmode: false,
};

const mode = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE:
      return {
        ...state,
        darkmode: action.darkmode,
      };

    default:
      return state;
  }
};

export default mode;
