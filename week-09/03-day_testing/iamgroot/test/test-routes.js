'use strict';

const test = require('tape');
const request = require('supertest');
const app = require('../routes');

test('groot endpont', (t) => {
  request(app)
    .get('/groot?message=anyadat')
    .send()
    .end((err, resp) => {
      if(err) throw err;
      t.same(resp.body, {
        received: 'anyadat',
        translated: 'I am groot'
      });
      t.equal(resp.status, 200);
      t.end();
    });
});
