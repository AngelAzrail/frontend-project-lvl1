import { even } from '../games/brain-even.js';
import { calc } from '../games/brain-calc.js';
import { gcd } from '../games/brain-gcd.js';

export const games = {
  'brain-even':
      {
        startMessage: 'Answer "yes" if the number is even, otherwise answer "no".',
        game: even,
      },
  'brain-calc':
      {
        startMessage: 'What is the result of the expression?',
        game: calc,
      },
  'brain-gcd':
      {
        startMessage: 'What is the result of the expression?',
        game: gcd,
      },
};
