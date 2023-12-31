import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 4.8rem;

  > input {
    width: 100%;
    height: 4.8rem;

    background-color: ${({ theme }) => theme.COLORS.DARK_900};
    color: ${({ theme }) => theme.COLORS.LIGHT_300};

    font-family: ${({ theme }) => theme.FONT.ROBOTO};
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 1.6rem;

    padding: 1.4rem;

    border: none;
    border-radius: 0.5rem;

    outline: none;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.LIGHT_500};
    }
  }
`;
