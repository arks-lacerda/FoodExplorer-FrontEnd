import styled from 'styled-components';

export const Container = styled.span`
  display: flex;
  align-items: center;

  width: fit-content;
  height: 3.2rem;

  padding: 0.7rem;

  background-color: ${({ theme }) => theme.COLORS.DARK_1000};
  border-radius: 0.8rem;
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
`;
