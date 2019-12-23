import React, { Component } from "react";
import FeedbackOptions from "./feedbackOptions/FeedbackOptions";
import Section from "./section/Section";
import Statistics from "./statistics/Statistics";

export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };

  static defaultProps = {
    step: 1,
    title: "Please leave feedback"
  };

  onHandleClick = e => {
    const name = e.target.name;
    this.setState(prevState => ({
      [name]: prevState[name] + this.props.step
    }));
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = () => {
    return Math.round((this.state.good * 100) / this.countTotalFeedback());
  };

  render() {
    return (
      <>
        <Section title={this.props.title}>
          <FeedbackOptions
            good={this.onHandleClick}
            neutral={this.onHandleClick}
            bad={this.onHandleClick}
          />
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />
        </Section>
      </>
    );
  }
}
