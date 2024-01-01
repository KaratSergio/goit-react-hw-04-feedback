import { StatisticsBox, Text, Number } from './Statistics.styled';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <StatisticsBox>
      <Text>
        Good: <Number>{good}</Number>
      </Text>
      <Text>
        Neutral: <Number>{neutral}</Number>
      </Text>
      <Text>
        Bad: <Number>{bad}</Number>
      </Text>
      <Text>
        Total: <Number>{total}</Number>
      </Text>
      <Text>
        Positive Feedback: <Number>{positivePercentage}%</Number>
      </Text>
    </StatisticsBox>
  );
};

export default Statistics;
