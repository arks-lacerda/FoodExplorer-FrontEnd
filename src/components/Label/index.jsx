import { Container } from './style';

export function Label({ title, htmlFor }) {
  return <Container htmlFor={htmlFor}>{title}</Container>;
}
