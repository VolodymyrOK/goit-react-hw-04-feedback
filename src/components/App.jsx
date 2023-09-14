import { useReducer } from 'react';
import { GlobalStyle } from 'styles/GlobalStyles';
import { Layout } from 'styles/Layout';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';
// import { init, reducer_3 } from './Reducer/Reducer';
// import { reducer_2 } from './Reducer/Reducer';
import { reducer_1 } from './Reducer/Reducer';

export const App = () => {
  const [review, dispatch] = useReducer(
    reducer_1,
    { good: 0, neutral: 0, bad: 0 }
    // init //function reducer_3
  );

  const onReload = () => {
    // dispatch({ type: 'reset', increase: { good: 0, neutral: 0, bad: 0 } }); //function reducer_3
    dispatch({ type: 'reset' }); //function reducer_2 and reducer_1
  };

  const { good, neutral, bad } = review;

  const total = good + neutral + bad;

  const countPositiveFeedbackPercentage = Math.round(
    (good / (total || 1)) * 100
  );

  // function reducer_1
  const onLeaveFeedback = key => {
    dispatch({
      type: 'increment',
      payload: key,
    });

    // function reducer_2
    // dispatch({
    //   type: key,
    // });

    // function reducer_3
    // dispatch({
    //   type: key,
    //   increase: 1,
    // });
  };

  const options = Object.keys(review);
  const entries = Object.entries(review);
  return (
    <Layout>
      <Section title="Please leave feedback">
        <FeedbackOptions options={options} onLeaveFeedBack={onLeaveFeedback} />
      </Section>
      <Section title="Statistics">
        {total ? (
          <Statistics
            entries={entries}
            total={total}
            positivePercentage={countPositiveFeedbackPercentage}
            onReload={onReload}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
      <GlobalStyle />
    </Layout>
  );
};
