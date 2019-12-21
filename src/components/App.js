import React, { Component } from 'react';
import FeedbackOptions from './feedbackOptions/FeedbackOptions';
import Section from './section/Section';
import Statistics from './statistics/Statistics';

// Создай компонент одного элемента статистики <Statistic label="" value={} >,
// он будет использоваться в компоненте <Statistics>.

// Добавь отображение общего количества собранных отзывов из всех категорий и
// процент положительных отзывов. Для этого создай вспомогательные методы countTotalFeedback()
// и countPositiveFeedbackPercentage(), подсчитывающие эти значения основываясь на данных в
// состоянии (вычисляемые данные).

export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  static defaultProps = {
    step: 1,
    title: 'Please leave feedback',
  };

  handleGood = () => {
    this.setState(prevState => ({
      good: prevState.good + this.props.step,
    }));
  };

  handleNeutral = () => {
    this.setState(prevState => ({
      neutral: prevState.neutral + this.props.step,
    }));
  };

  handleBad = () => {
    this.setState(prevState => ({
      bad: prevState.bad + this.props.step,
    }));
  };

  //   countTotalFeedback = () => {
  //     return this.state.good + this.state.neutral + this.state.bad;
  //   };

  //   countPositiveFeedbackPercentage = () => {
  //     Math.round((this.state.good * 100) / this.countTotalFeedback);
  //   };

  render() {
    return (
      <>
        <Section title={this.props.title}>
          <FeedbackOptions
            good={this.handleGood}
            neutral={this.handleNeutral}
            bad={this.handleBad}
          />
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.state.good + this.state.neutral + this.state.bad}
            positivePercentage={Math.round(
              (this.state.good * 100) /
                (this.state.good + this.state.neutral + this.state.bad),
            )}
          />
          {/* <Notification message="No feedback given" /> */}
        </Section>
      </>
    );
  }
}
