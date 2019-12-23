import React from "react";
import PropTypes from "prop-types";

const FeedbackOptions = ({ good, neutral, bad }) => (
  <>
    <button type="button" name="good" onClick={good}>
      Good
    </button>
    <button type="button" name="neutral" onClick={neutral}>
      Neutral
    </button>
    <button type="button" name="bad" onClick={bad}>
      Bad
    </button>
  </>
);

FeedbackOptions.propTypes = {
  good: PropTypes.func.isRequired,
  neutral: PropTypes.func.isRequired,
  bad: PropTypes.func.isRequired
};

export default FeedbackOptions;
