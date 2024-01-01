import { useState } from 'react';
import { AppContainer } from './App.styled';
import Section from '../Section/Section';
import Statistics from '../Statistics/Statistics';
import Notification from '../Notification/Notification';
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';

export const App = () => {
  const [feedback, setFeedback] = useState({ good: 0, neutral: 0, bad: 0 });

  const handleFeedback = type => {
    setFeedback(prevState => ({ ...prevState, [type]: prevState[type] + 1 }));
  };

  const totalFeedback = () => {
    const { good, neutral, bad } = feedback;
    return good + neutral + bad;
  };

  const positiveFeedbackPercentage = () => {
    const total = totalFeedback();
    return total === 0 ? 0 : Math.round((feedback.good / total) * 100);
  };

  const feedbackOptions = ['good', 'neutral', 'bad'];

  return (
    <AppContainer>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={feedbackOptions}
          onLeaveFeedback={handleFeedback}
        />
      </Section>

      <Section title="Statistics">
        {totalFeedback() > 0 ? (
          <Statistics
            good={feedback.good}
            neutral={feedback.neutral}
            bad={feedback.bad}
            total={totalFeedback()}
            positivePercentage={positiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="No feedback given" />
        )}
      </Section>
    </AppContainer>
  );
};

export default App;
