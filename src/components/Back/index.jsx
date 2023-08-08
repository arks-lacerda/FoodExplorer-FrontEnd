import { Container } from './style';
import CaretLeft from '../../assets/caretLeft.svg';

export function Back() {
  return (
    <Container to="/">
      <img src={CaretLeft} alt="Image to return" /> Back
    </Container>
  );
}
