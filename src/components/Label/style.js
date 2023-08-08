import styled from 'styled-components';

export const Container = styled.label`
  font-family: ${({ theme }) => theme.FONT.ROBOTO};
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 1.6rem;
  text-align: start;

  color: ${({ theme }) => theme.COLORS.LIGHT_400};
`;
