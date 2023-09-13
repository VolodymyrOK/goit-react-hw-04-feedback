export const reducer = (state, action) => {
  switch (action.type) {
    case 'good':
      return {
        ...state,
        good: state.good + action.increase,
      };
    case 'neutral':
      return {
        ...state,
        neutral: state.neutral + action.increase,
      };
    case 'bad':
      return {
        ...state,
        bad: state.bad + action.increase,
      };
    case 'reset':
      return init(action.increase);

    default:
      return state;
  }
};

export const init = state => {
  return state;
};
