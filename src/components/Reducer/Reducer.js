export const reducer_1 = (state, action) => {
  switch (action.type) {
    case 'increment':
      return {
        ...state,
        [action.payload]: state[action.payload] + 1,
      };
    case 'reset':
      return { good: 0, neutral: 0, bad: 0 };

    default:
      return state;
  }
};

// function reducer_2
export const reducer_2 = (state, action) => {
  switch (action.type) {
    case 'good':
      return {
        ...state,
        good: state.good + 1,
      };
    case 'neutral':
      return {
        ...state,
        neutral: state.neutral + 1,
      };
    case 'bad':
      return {
        ...state,
        bad: state.bad + 1,
      };
    case 'reset':
      return { good: 0, neutral: 0, bad: 0 };

    default:
      return state;
  }
};

// function reducer_3
export const reducer_3 = (state, action) => {
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
