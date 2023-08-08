import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: none;
  flex-grow: 0;
  gap: 1.2rem;

  align-items: center;

  width: 21rem;
  height: 29.2rem;

  padding: 2.4rem;

  isolation: isolate;

  border: 0.1rem solid #000204;
  border-radius: 0.8rem;

  order: 0;

  position: relative;

  background-color: ${({ theme }) => theme.COLORS.DARK_200};

  &:hover {
    transform: scale(1.05);
    transition: 700ms;
  }

  .Include {
    height: 3.2rem;
  }

  .Buttons {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .btnInclude {
    display: flex;
    justify-content: center;
    align-items: center;

    min-width: 16rem;
    width: 100%;
    height: 3.2rem;

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
    display: flex;

    gap: 1.6rem;

    width: 30rem;
    height: 44rem;

    .Buttons {
      margin-top: 2rem;
    }

    .btnInclude {
      background-color: none;
    }
  }
`;

export const Like = styled.button`
  width: 2.4rem;
  height: 2.2rem;

  position: absolute;
  left: 17rem;
  top: 1.6rem;

  @media (min-width: 900px) {
    left: 25rem;
    top: 1.6rem;
  }
`;

export const Edit = styled.button`
  width: 2.4rem;
  height: 2.2rem;

  position: absolute;
  left: 17rem;
  top: 1.6rem;

  @media (min-width: 900px) {
    left: 25rem;
    top: 1.6rem;
  }
`;

export const ImageProduct = styled.div`
  width: 8.8rem;
  height: 8.8rem;

  border-radius: 50%;

  margin-top: ${({ isAdmin }) => (isAdmin ? '5rem' : 'none')};

  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }

  @media (min-width: 900px) {
    width: 17.6rem;
    height: 17.6rem;
  }
`;

export const Title = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  font-family: ${({ theme }) => theme.FONT.POPPINS};
  font-size: 1.4rem;
  font-weight: 700;
  line-height: 2.4rem;

  color: ${({ theme }) => theme.COLORS.LIGHT_300};

  img {
    width: 0.4rem;
    height: 1.4rem;
    text-align: center;
    margin-left: 1rem;
  }

  @media (min-width: 900px) {
    font-size: 2.2rem;
    line-height: 3.3rem;
    img {
      width: 0.6rem;
    }
  }
`;

export const Description = styled.p`
  width: 25.6rem;
  height: 2rem;

  overflow: hidden;

  font-family: ${({ theme }) => theme.FONT.ROBOTO};
  font-size: 1.4rem;
  font-weight: 400;
  text-align: center;
  line-height: 2.2rem;

  color: ${({ theme }) => theme.COLORS.LIGHT_400};

  @media (max-width: 900px) {
    display: none;
  }
`;

export const Price = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  font-family: ${({ theme }) => theme.FONT.ROBOTO};
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 1.6rem;

  color: ${({ theme }) => theme.COLORS.CAKE_200};

  span {
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 1.6rem;
    color: ${({ theme }) => theme.COLORS.CAKE_200};
    margin-left: 0.5rem;
  }
`;
