import { GlobalStyle } from 'styles/GlobalStyles';
import { Layout } from 'styles/Layout';
import { Component } from 'react';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';

const initialState = {
  good: 0,
  neutral: 0,
  bad: 0,
};

export class App extends Component {
  state = {
    ...initialState,
  };

  onReload = () => {
    // window.location.reload();
    this.setState({ ...initialState });
  };

  onLeaveFeedback = option => {
    this.setState(prevState => {
      return { [option]: prevState[option] + 1 };
    });
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const total = this.countTotalFeedback() || 1;
    return Math.round((good / total) * 100);
  };

  render() {
    const options = Object.keys(this.state);
    const entries = Object.entries(this.state);
    return (
      <Layout>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={options}
            onLeaveFeedBack={this.onLeaveFeedback}
          />
        </Section>
        <Section title="Statistics">
          {this.countTotalFeedback() ? (
            <Statistics
              entries={entries}
              total={this.countTotalFeedback}
              positivePercentage={this.countPositiveFeedbackPercentage}
              onReload={this.onReload}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
        <GlobalStyle />
      </Layout>
    );
  }
}
