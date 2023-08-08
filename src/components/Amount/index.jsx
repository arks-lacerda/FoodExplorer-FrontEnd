import { Container } from './style';
import IconPlus from '../../assets/plus.svg';
import IconMinus from '../../assets/minus.svg';

export function Amount({ value, setValue }) {
  const decrement = (e) => {
    e.preventDefault();
    if (value < 2) {
      alert('You cannot order less than 1!');
      return setValue(+1);
    }

    setValue(value - 1);
  };

  const increment = (e) => {
    e.preventDefault();

    setValue(value + 1);
  };

  return (
    <Container>
      <button onClick={decrement}>
        <img src={IconMinus} alt="image to subtract" />
      </button>

      <p>{value.toString().padStart(2, '0')}</p>

      <button onClick={increment}>
        <img src={IconPlus} alt="Image to add" />
      </button>
    </Container>
  );
}
