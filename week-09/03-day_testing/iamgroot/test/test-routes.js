'use strict';

const test = require('tape');
const request = require('supertest');
const app = require('../routes');

test('groot endpont with msg', t => {
  request(app)
    .get('/groot?message=anyadat')
    .send()
    .end((err, resp) => {
      if (err) throw err;
      t.same(resp.body, {
        received: 'anyadat',
        translated: 'I am groot'
      });
      t.equal(resp.status, 200);
      t.end();
    });
});

test('groot endpont without msg', t => {
  request(app)
    .get('/groot?')
    .send()
    .end((err, resp) => {
      if (err) throw err;
      t.same(resp.body, {
        error: 'no msg bro'
      });
      t.equal(resp.status, 400);
      t.end();
    });
});
