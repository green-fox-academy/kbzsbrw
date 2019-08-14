'use strict';
import { doTheTask, matrix1, seeIfOdd } from './matrix';
import { fail } from 'assert';
let test = require('tape');
let matrixOutput
test(t => {
    t.deepEquals(doTheTask([
        [1, 3, 6, 2],
        [7, 5, 6, 1],
        [3, 3, 1, 5],
        [9, 0, 5, 3]
      ]), [
        [1, 3, 12, 4],
        [14, 10, 6, 2],
        [3, 3, 1, 5],
        [18, 0, 10, 6]
      ]);
      t.equals(seeIfOdd(2), true)
      t.equals(seeIfOdd(3), false)
    t.end();
    });
