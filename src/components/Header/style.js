import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  width: 100%;
  padding: 2.4rem 0rem;

  background-color: ${({ theme }) => theme.COLORS.DARK_600};

  @media (min-width: 900px) {
    width: 100%;
    justify-content: center;
  }
`;

export const HeaderComponent = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 2rem;

  @media (min-width: 900px) {
    justify-content: space-around;
    gap: 3.2rem;

    width: 100%;
  }
`;

export const Menu = styled(Link)`
  width: 2.4rem;
  height: 1.8rem;
  color: ${({ theme }) => theme.COLORS.LIGHT_100};

  @media (min-width: 900px) {
    display: none;
  }
`;

export const Logo = styled.div`
  width: 15.8rem;
  height: 2.6rem;

  img {
    width: 100%;
    height: 100%;

    object-fit: cover;
  }
`;

export const ReceiptNotification = styled.div`
  display: flex;
  width: 2.6rem;
  height: 2.2rem;

  position: relative;

  img {
    height: 100%;
  }

  p {
    width: 2rem;
    height: 2rem;

    background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
    border-radius: 50%;

    font-family: ${({ theme }) => theme.FONT.POPPINS};
    text-align: center;
    font-size: 1.4rem;
    font-weight: 500;

    color: ${({ theme }) => theme.COLORS.LIGHT_100};

    position: absolute;
    top: -1rem;
    left: 1.2rem;
  }

  @media (min-width: 900px) {
    display: none;
  }
`;

export const LogoAdmin = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;

  width: 27.8rem;
  height: 2.6rem;

  position: relative;

  img {
    height: 100%;
  }

  p {
    width: 3.4rem;
    height: 1.9rem;

    font-family: ${({ theme }) => theme.FONT.ROBOTO};
    font-size: 1.2rem;
    font-weight: 400;
    line-height: 1.9rem;

    color: ${({ theme }) => theme.COLORS.CAKE_200};

    margin-top: 0.5rem;
  }

  @media (min-width: 900px) {
    width: 15.7rem;
    margin-bottom: 1rem;
    margin-right: 1rem;

    p {
      position: absolute;
      top: 2rem;
      left: 13rem;
    }
  }
`;

export const ContentInput = styled.div`
  display: none;

  @media (min-width: 900px) {
    display: flex;
    gap: 1.4rem;
    justify-content: center;
    align-items: center;

    max-width: 50rem;
    width: 100%;
    height: 4.8rem;

    background-color: ${({ theme }) => theme.COLORS.DARK_900};
    border-radius: 0.5rem;

    padding-left: 2.4rem;

    input {
      width: 100%;

      background-color: transparent;
      color: ${({ theme }) => theme.COLORS.LIGHT_300};
      border: none;

      font-family: ${({ theme }) => theme.FONT.ROBOTO};
      font-size: 1.6rem;
      font-weight: 400;
      line-height: 1.6rem;

      outline: none;

      &::placeholder {
        color: ${({ theme }) => theme.COLORS.LIGHT_500};
      }
    }

    svg {
      width: 2rem;
      height: 2rem;
      color: ${({ theme }) => theme.COLORS.LIGHT_500};
    }
  }
`;

export const Logout = styled.button`
  display: none;

  @media (min-width: 900px) {
    display: flex;

    width: 3.2rem;
    height: 3.2rem;

    color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }
`;
