import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;

  margin: 15.8rem auto 0;

  text-align: start;

  @media (min-width: 900px) {
    display: grid;
    grid-template-areas:
      'A B'
      'A C';

    width: 136.8rem;
  }
`;

export const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-bottom: 7.3rem;

  @media (min-width: 900px) {
    display: grid;
    grid-area: A;
    margin-right: 30rem;
  }
`;

export const SignInContent = styled.form`
  display: flex;
  flex-direction: column;
  width: 31.6rem;

  margin-left: 6.5rem;
  margin-bottom: 3.2rem;

  label {
    margin-bottom: 0.8rem;
  }

  div {
    margin-bottom: 3.2rem;
  }

  button {
    color: white;
  }

  h1 {
    display: none;
  }

  button {
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

  @media (min-width: 900px) {
    display: grid;
    grid-area: B;

    h1 {
      display: flex;
      justify-content: center;

      font-family: ${({ theme }) => theme.FONT.POPPINS};
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
      font-size: 3.2rem;
      font-weight: 500;
      line-height: 4.4rem;

      margin-bottom: 3.2rem;
    }
  }
`;
export const CreateAccount = styled(Link)`
  display: flex;
  justify-content: center;

  margin-left: 3.5rem;
  color: ${({ theme }) => theme.COLORS.LIGHT_100};

  @media (min-width: 900px) {
    display: grid;
    grid-area: C;
    padding-left: 4rem;
  }
`;
