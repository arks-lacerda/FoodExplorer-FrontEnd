import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  gap: 1.6rem;

  width: 38rem;
  height: auto;

  overflow-x: auto;
  overflow-y: hidden;
  scroll-behavior: smooth;

  ::-webkit-scrollbar {
    width: 0;
    height: 0;
  }
  ::-webkit-scrollbar-thumb {
    display: none;
  }

  .ButtonLeft {
    width: 11rem;
    height: 44rem;

    position: absolute;
    background: linear-gradient(
      90deg,
      rgba(0, 10, 15, 0.272541) 0%,
      #000a0f 100%
    );
    transform: matrix(-1, 0, 0, 1, 0, 0);

    border-radius: 8px;
    z-index: 1;

    button {
      width: 15rem;
      height: 44rem;
    }
  }

  .ButtonRight {
    width: 0rem;
    height: 44rem;

    position: absolute;
    left: 123rem;

    background: linear-gradient(
      90deg,
      rgba(0, 10, 15, 0.272541) 0%,
      #000a0f 100%
    );

    border-radius: 8px;
    z-index: 1;

    button {
      width: 15rem;
      height: 44rem;
    }
  }

  @media (min-width: 900px) {
    width: 110rem;
    gap: 2.7rem;
  }

  @media (max-width: 900px) {
    .ButtonLeft {
      display: none;
    }

    .ButtonRight {
      display: none;
    }
  }
`;
