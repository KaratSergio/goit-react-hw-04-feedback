import { StatisticsTitle } from './Section.styled';

const Section = ({ title, children }) => {
  return (
    <div>
      <StatisticsTitle>{title}</StatisticsTitle>
      {children}
    </div>
  );
};

export default Section;
