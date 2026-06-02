import { evaluate } from 'mathjs';

export default function calculations(expression) {
  return evaluate(expression.join(''));
}
