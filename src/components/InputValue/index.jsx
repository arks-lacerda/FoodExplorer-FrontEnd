import { Container } from './style';

export function InputValue({ type, id, ...rest }) {
  return (
    <Container>
      <input type="number" id={id} {...rest} />
    </Container>
  );
}
