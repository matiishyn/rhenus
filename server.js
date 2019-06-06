const express = require('express');
const next = require('next');

// https://github.com/isaachinman/next-i18next/blob/master/examples/simple/server.js
const nextI18NextMiddleware = require('next-i18next/middleware');
const nextI18next = require('./services/i18n').default;

const dev = process.env.NODE_ENV !== 'production';
const port = process.env.PORT || 3000;
const app = next({ dev });
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    const server = express();

    server.use(nextI18NextMiddleware(nextI18next));

    // server.get('/p/:id', (req, res) => {
    //   const actualPage = '/post';
    //   const queryParams = { title: req.params.id };
    //   app.render(req, res, actualPage, queryParams);
    // });

    server.get('*', (req, res) => {
      return handle(req, res);
    });

    server.listen(port, err => {
      if (err) throw err;
      console.log(`> Ready on http://localhost:${port}`);
    });
  })
  .catch(ex => {
    console.error(ex.stack);
    process.exit(1);
  });
