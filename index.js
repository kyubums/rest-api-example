const express = require('express');
const notesRouter = require('./routes/notes');

const app = express();

app.use(express.json());

app.use('/notes', notesRouter);

app.use((req, res, next) => {
  res.status(404);
  res.send({ 
    result: 'fail', 
    error: `Page not found ${req.path}`
  });
});

app.use((err, req, res, next) => {
  res.status(500);

  res.json({
    result: 'fail',
    error: err.message,
  });
});

app.listen(3000);