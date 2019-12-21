import React from 'react';
import PropTypes from 'prop-types';

const FeedbackOptions = ({ good, neutral, bad }) => (
  <>
    <button type="button" onClick={good}>
      Good
    </button>
    <button type="button" onClick={neutral}>
      Neutral
    </button>
    <button type="button" onClick={bad}>
      Bad
    </button>
  </>
);

FeedbackOptions.propTypes = {
  good: PropTypes.func.isRequired,
  neutral: PropTypes.func.isRequired,
  bad: PropTypes.func.isRequired,
};

export default FeedbackOptions;
