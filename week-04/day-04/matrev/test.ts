'use strict';

import { square } from './matrev';
let test = require('tape');
console.log("wtf");
test(t => {
t.equals(square(3), 9);
t.end();
});
