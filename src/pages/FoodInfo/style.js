import styled from 'styled-components';

export const Container = styled.main`
  display: grid;
  grid-template-columns: 1fr;
  place-items: center;
`;

export const Content = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 0 5.6rem;

  margin-bottom: 3.3rem;

  .content-desktop {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media (min-width: 900px) {
    width: 136.8rem;
    flex-direction: row;

    .content-desktop {
      flex-direction: column;
      align-items: start;
      justify-content: center;

      width: 68.7rem;

      margin-top: 14rem;
      margin-left: 5.8rem;
      margin-bottom: 19rem;
    }
  }
`;

export const ImageProduct = styled.div`
  width: 26.4rem;
  height: 26.4rem;

  margin: 0 0 2rem;

  img {
    width: 100%;
    height: 100%;

    object-fit: cover;

    border-radius: 50%;
  }

  img:hover {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }

  @media (min-width: 900px) {
    width: 38.9rem;
    height: 38.9rem;
  }
`;

export const Title = styled.h1`
  display: flex;
  text-align: center;

  width: 31.6rem;

  font-family: ${({ theme }) => theme.FONT.POPPINS};
  font-size: 2.7rem;
  font-weight: 500;
  line-height: 3.7rem;

  color: ${({ theme }) => theme.COLORS.LIGHT_300};
  margin-bottom: 2.4rem;

  @media (min-width: 900px) {
    width: 68.7rem;
    font-size: 4rem;
    line-height: 5.6rem;
  }
`;

export const Description = styled.p`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  text-align: left;

  width: 31.6rem;
  height: auto;

  font-family: ${({ theme }) => theme.FONT.POPPINS};
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 2.2rem;

  color: ${({ theme }) => theme.COLORS.LIGHT_300};

  margin-bottom: 2.4rem;

  @media (min-width: 900px) {
    width: 68.7rem;
    justify-content: flex-start;
    font-size: 2.4rem;
    line-height: 3.3rem;
  }
`;

export const ContentIngredients = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  gap: 2rem;

  width: 31.6rem;
  height: auto;

  @media (min-width: 900px) {
    width: 68.7rem;
    justify-content: flex-start;
  }
`;

export const ContentAmount = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.6rem;

  button::nth-child(3) {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.8rem;

    width: 100%;
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

  .include-btn,
  .edit-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.8rem;

    width: 100%;
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

  width: 31.6rem;

  margin-top: 4.8rem;

  @media (min-width: 900px) {
    justify-content: flex-start;

    .edit-btn {
      width: 13.1rem;
    }
  }
`;
