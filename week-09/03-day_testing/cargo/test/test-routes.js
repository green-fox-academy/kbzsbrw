'use strict';

const test = require('tape');
const request = require('supertest');
const app = require('../routes');

test('test for the proper speed', t => {
  request(app)
    .get('/yondu?distance=100&time=10')
    .send()
    .end((err, res) => {
      if (err) throw err;
      t.same(res.body, {
        distance: '100',
        time: '10',
        speed: 10
      });
      t.end();
    });
});
test('test if no time', t => {
  request(app)
    .get('/yondu?distance=100&time=0')
    .send()
    .end((err, res) => {
      if (err) throw err;
      t.same(res.body, {
        error: 'no time, no speed'
      });
      t.equal(res.status, 401);
      t.end();
    });
});
