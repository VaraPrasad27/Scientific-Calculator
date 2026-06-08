const numOperatorsLabels = [
  { label: '7', value: 7 },
  { label: '8', value: 8 },
  { label: '9', value: 9 },
  { label: 'DEL', value: 'del' },
  { label: 'AC', value: 'ac' },

  { label: '4', value: 4 },
  { label: '5', value: 5 },
  { label: '6', value: 6 },
  { label: '*', value: '*' },
  { label: '/', value: '/' },

  { label: '1', value: 1 },
  { label: '2', value: 2 },
  { label: '3', value: 3 },
  { label: '+', value: '+' },
  { label: '-', value: '-' },

  { label: '0', value: 0 },
  { label: '^', value: '^' },
  { label: '.', value: '.' },
  { label: '%', value: '/100' },
  { label: '=', value: '=' },
];

const complexLabels = [
  { label: '√(', value: 'sqrt(' },
  { label: 'log(', value: 'log(' },
  { label: 'ln(', value: 'ln(' },
  { label: '(', value: '(' },
  { label: ')', value: ')' },
  { label: '!', value: '!' },
  { label: 'π', value: 'pi' },
  { label: 'e', value: 'e' },
];

const triLabels = [
  { label: 'arc', value: 'arc' },
  { label: 'sin(', value: 'sin(' },
  { label: 'cos(', value: 'cos(' },
  { label: 'tan(', value: 'tan(' },
];
const inverseTriLabel = [
  { label: 'hyp', value: 'hyp' },
  { label: 'sin-1(', value: 'asin(' },
  { label: 'cos-1(', value: 'acos(' },
  { label: 'tan-1(', value: 'atan(' },
];
const hypLabels = [
  { label: 'ahyp', value: 'ahyp' },
  { label: 'sinh(', value: 'sinh(' },
  { label: 'cosh(', value: 'cosh(' },
  { label: 'tanh(', value: 'tanh(' },
];
const inverseHypLabels = [
  { label: 'tri', value: 'tri' },
  { label: 'sinh-1(', value: 'asinh(' },
  { label: 'cosh-1(', value: 'acosh(' },
  { label: 'tanh-1(', value: 'atanh(' },
];

export {
  numOperatorsLabels,
  triLabels,
  inverseTriLabel,
  hypLabels,
  inverseHypLabels,
  complexLabels,
};
