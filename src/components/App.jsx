import { useState } from 'react';
import { GlobalStyle } from 'styles/GlobalStyles';
import { Layout } from 'styles/Layout';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';

export const App = () => {
  const [review, setReview] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const onReload = () => {
    setReview({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  const { good, neutral, bad } = review;

  const total = good + neutral + bad;

  const countPositiveFeedbackPercentage = Math.round(
    (good / (total || 1)) * 100
  );

  const onLeaveFeedback = key => {
    setReview(prevState => ({
      ...prevState,
      [key]: review[key] + 1,
    }));
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
