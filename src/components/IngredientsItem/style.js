import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;

  width: 13.6rem;
  height: 3.2rem;

  padding: 0 1rem 0;

  background-color: ${({ theme, isNew }) =>
    isNew ? 'transparent' : theme.COLORS.LIGHT_600};
  border: ${({ theme, isNew }) =>
    isNew ? `1px dashed ${theme.COLORS.LIGHT_500}` : `none`};

  border-radius: 0.8rem;

  > button {
    border: none;

    background: none;
    color: ${({ theme, isNew }) =>
      isNew ? theme.COLORS.LIGHT_500 : theme.COLORS.LIGHT_100};

    font-size: 1.6rem;

    padding-top: 0.5rem;
  }

  input {
    width: 9.6rem;
    height: 3.2rem;

    background: transparent;
    border: none;
    color: ${({ theme, isNew }) =>
      isNew ? theme.COLORS.LIGHT_500 : theme.COLORS.LIGHT_100};

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.LIGHT_500};
    }
  }
`;
