import styled from 'styled-components';

const StyledTitle = styled.h1`
    color: palevioletred;
`;

export const Title = ({subtext}) => (
    <div>
      <StyledTitle>Finanças para casais</StyledTitle>
      <h2>{subtext}</h2>
    </div>
  );