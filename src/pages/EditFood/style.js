import styled from 'styled-components';

export const Container = styled.main`
  display: grid;
  grid-template-columns: 1fr;
  place-items: center;

  h1 {
    width: 100%;
    font-family: ${({ theme }) => theme.FONT.POPPINS};
    font-weight: 500;
    font-size: 3.2rem;
    line-height: 4.4rem;
    padding: 0 3.2rem 3.5rem;
  }

  @media (min-width: 900px) {
    h1 {
      width: 100%;
      margin-left: 4.8rem;
    }
  }
`;

export const CreateProductForm = styled.form`
  width: 100%;

  display: flex;
  flex-direction: column;

  padding: 0 3.2rem 3.5rem;

  input {
    background-color: ${({ theme }) => theme.COLORS.DARK_800};
  }

  .column {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1.6rem;
  }

  .row {
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  label {
    font-family: ${({ theme }) => theme.FONT.ROBOTO};
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 1.6rem;
    text-align: start;
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
  }

  .label {
    margin-top: 2.4rem;
  }

  .custom-file-upload {
    width: 100%;
    font-family: ${({ theme }) => theme.FONT.POPPINS};
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    font-weight: 500;
    font-size: 1.4rem;
    display: flex;
    align-items: center;
    gap: 0.8rem;
    padding: 1.2rem 3.2rem;

    background-color: ${({ theme }) => theme.COLORS.DARK_800};

    border-radius: 0.8rem;

    cursor: pointer;
  }

  .custom-file-upload:hover {
    background-color: ${({ theme }) => theme.COLORS.DARK_100};
  }

  input[type='file'] {
    display: none;
  }

  select {
    appearance: none;
    background-image: url("data:image/svg+xml,%3Csvg width='24' height='25' viewBox='0 0 24 25' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M4.4545 8.75358C4.89384 8.31424 5.60616 8.31424 6.0455 8.75358L12 14.7081L17.9545 8.75358C18.3938 8.31424 19.1062 8.31424 19.5455 8.75358C19.9848 9.19292 19.9848 9.90523 19.5455 10.3446L12.7955 17.0946C12.3562 17.5339 11.6438 17.5339 11.2045 17.0946L4.4545 10.3446C4.01517 9.90523 4.01517 9.19292 4.4545 8.75358Z' fill='%23C4C4CC'/%3E%3C/svg%3E");
    background-color: ${({ theme }) => theme.COLORS.DARK_800};
    background-repeat: no-repeat;
    background-position: center;
    background-position-x: 32rem;
    height: 4.8rem;

    cursor: pointer;
    font-family: ${({ theme }) => theme.FONT.ROBOTO};
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
    font-weight: 400;
    font-size: 1.4rem;
    line-height: 2.2rem;
    border: none;

    padding: 1.6rem;
    border-radius: 0.8rem;
  }

  select:hover {
    filter: brightness(1.1);
  }

  select:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.2);
  }

  .Ingredients {
    display: flex;
    align-items: center;
    gap: 1.6rem;
    flex-wrap: wrap;

    padding: 1rem 1.6rem;
    width: 100%;

    border-radius: 0.8rem;
    overflow-y: auto;

    background-color: ${({ theme }) => theme.COLORS.DARK_800};

    max-height: 9rem;

    input {
      margin: 0;
      background-color: transparent;

      outline: none;
    }
  }

  input[type='number']::-webkit-inner-spin-button,
  input[type='number']::-webkit-outer-spin-button {
    -webkit-appearance: none;
  }

  input[type='number'] {
    -moz-appearance: textfield;
    appearance: textfield;
  }

  textarea {
    width: 100%;
    height: 20.4rem;
    border: none;
    resize: none;
    border-radius: 0.8rem;
    background-color: ${({ theme }) => theme.COLORS.DARK_800};
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
    font-family: ${({ theme }) => theme.FONT.ROBOTO};
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 1.6rem;
    padding: 1.4rem;
    margin-top: 1.6rem;
    margin-bottom: 3.2rem;

    border: 1px solid ${({ theme }) => theme.COLORS.DARK_900};
    outline: none;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.LIGHT_500};
    }
  }

  .buttons {
    display: flex;
    justify-content: space-between;
    gap: 3.2rem;

    justify-content: center;
    align-items: center;

    padding: 1.2rem 3.2rem;
  }

  .save {
    display: flex;

    background-color: ${({ theme }) => theme.COLORS.TOMATO_400};

    width: 45%;
    height: 4.8rem;

    justify-content: center;
    align-items: center;

    border-radius: 0.8rem;

    color: ${({ theme }) => theme.COLORS.LIGHT_100};

    font-size: 1.4rem;
    font-weight: 500;
    line-height: 2.4rem;
  }

  .delete {
    display: flex;

    width: 45%;
    height: 4.8rem;

    background-color: ${({ theme }) => theme.COLORS.DARK_800};

    justify-content: center;
    align-items: center;

    border-radius: 0.8rem;

    color: ${({ theme }) => theme.COLORS.LIGHT_100};

    font-size: 1.4rem;
    font-weight: 500;
    line-height: 2.4rem;
  }

  @media (min-width: 900px) {
    width: 100%;
    overflow: hidden;

    padding: 0 3.2rem 3.5rem;

    .row {
      flex-direction: row;
      gap: 3.2rem;
      height: auto;
      margin-left: 0;
      margin-bottom: 3.2rem;

      .label {
        margin-top: 0;
        margin-left: 0;
      }
    }

    label {
      margin-left: 0;
    }

    .column {
      margin-top: 1rem;
    }

    #name-product {
      width: 50.3rem;
    }

    .custom-file-upload {
      > i {
        font-size: 1.4rem;
      }
    }

    select {
      width: 36.4rem;
    }

    .Ingredients {
      width: 100%;
      overflow: auto;
    }

    .row-grid {
      display: grid;
      grid-template-columns: 4fr 1fr;
      grid-template-areas: 'ingredients price';
    }

    .Ingredients {
      width: 100%;
      overflow: auto;
      grid-area: 'ingredients';
    }

    .price {
      grid-area: price;
    }

    #price-product {
      width: 25.1rem;
    }

    textarea {
      width: 100%;
      margin-left: 0;
    }

    .buttons {
      width: 100%;
      padding: 0;
      justify-content: end;

      .delete {
        width: 17.2rem;
        padding-left: 0;
        padding-right: 0;
      }

      .save {
        background-color: ${({ theme }) => theme.COLORS.TOMATO_400};
        width: 17.2rem;
      }
    }
  }
`;
