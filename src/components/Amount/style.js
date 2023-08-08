import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.4rem;

  width: 10rem;
  height: 3.2rem;

  button {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 2.4rem;
    height: 2.4rem;
  }

  p {
    font-family: ${({ theme }) => theme.COLORS.ROBOTO};
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 1.6rem;

    color: ${({ theme }) => theme.COLORS.LIGHT_300};
  }
`;
