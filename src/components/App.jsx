import { useReducer } from 'react';
import { GlobalStyle } from 'styles/GlobalStyles';
import { Layout } from 'styles/Layout';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';
import { init, reducer } from './Reducer/Reducer';

export const App = () => {
  const [review, dispatch] = useReducer(
    reducer,
    { good: 0, neutral: 0, bad: 0 },
    init
  );

  const onReload = () => {
    dispatch({ type: 'reset', increase: { good: 0, neutral: 0, bad: 0 } });
  };

  const { good, neutral, bad } = review;

  const total = good + neutral + bad;

  const countPositiveFeedbackPercentage = Math.round(
    (good / (total || 1)) * 100
  );

  const onLeaveFeedback = key => {
    dispatch({
      type: key,
      increase: 1,
    });
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
