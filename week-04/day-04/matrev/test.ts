'use strict';

import { square } from './matrev';
let test = require('tape');

test(t => {
t.equals(square(3), 9);
t.end();
});
