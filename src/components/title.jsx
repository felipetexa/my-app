import styled from 'styled-components';

const StyledTitle = styled.h1`
    color: ivory;
`;

export const Title = ({subtext}) => (
    <div>
      <StyledTitle>Couple Goals</StyledTitle>
      <h2>{subtext}</h2>
    </div>
  );