import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  width: 100%;

  @media (min-width: 900px) {
    header {
      > div:nth-child(3) {
        width: 50.5rem;
      }
    }
  }
`;

export const Banner = styled.div`
  margin-top: 4.4rem;
  padding: 0 3rem;
  width: 90%;
  height: 12rem;
  background: linear-gradient(180deg, #091e26 0%, #00131c 100%);
  border-radius: 2.91696px;
  position: relative;
  margin-bottom: 2rem;

  img {
    position: absolute;
    width: 19.1rem;
    height: 14.9rem;
    opacity: 0.8;
    top: -2.9rem;
    left: -2rem;
  }

  .Texting {
    font-family: ${({ theme }) => theme.FONT.POPPINS};
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    width: 20rem;
    padding-top: 3.6rem;
    margin-left: 13rem;

    h1 {
      font-weight: 600;
      font-size: 1.8rem;
      line-height: 2.5rem;
    }

    p {
      font-weight: 400;
      font-size: 1.2rem;
      line-height: 1.6rem;
    }
  }

  @media (min-width: 900px) {
    max-width: 111rem;
    height: 26rem;

    margin-top: 17rem;
    margin-bottom: 3rem;

    img {
      width: 65rem;
      height: 41rem;
      top: -13.5rem;
      left: -6rem;
    }

    .Texting {
      width: 50rem;
      padding-top: 8.7rem;
      margin-left: 47rem;

      h1 {
        font-size: 4rem;
        margin-bottom: 1rem;
      }

      p {
        font-size: 1.6rem;
      }
    }
  }
`;
export const Section = styled.section`
  width: 100%;
  padding: 0 2rem;
  height: 34.1rem;
  overflow: hidden;
  margin-bottom: 2.4rem;

  h1 {
    font-family: ${({ theme }) => theme.FONT.POPPINS};
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    font-size: 1.8rem;
    font-weight: 600;
    line-height: 140%;
    margin-left: 2rem;
    margin-bottom: 2.4rem;
  }

  @media (min-width: 900px) {
    width: 112rem;
    height: 53rem;
    margin-bottom: 4.8rem;

    h1 {
      font-size: 3.2rem;
      line-height: 4.4rem;
    }
  }
`;
