import { SectionWrapper, Title } from './Section.styled';

export const Section = ({ title, children }) => (
  <SectionWrapper>
    <Title>{title}</Title>
    {children}
  </SectionWrapper>
);
