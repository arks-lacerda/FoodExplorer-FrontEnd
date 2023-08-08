import styled from 'styled-components';

export const Container = styled.button`
  display: none;

  @media (min-width: 900px) {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.8rem;

    height: 4.8rem;

    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    font-family: ${({ theme }) => theme.FONT.POPPINS};
    font-weight: 500;
    font-size: 1.4rem;
    line-height: 2.4rem;
    text-align: center;

    border-radius: 0.5rem;

    padding: 1.2rem 2.4rem;
    background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
  }

  &:disabled {
    opacity: 0.5;
  }
`;
