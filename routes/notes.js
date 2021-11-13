const { Router } = require('express');
const Note = require('../models/note');

const router = Router();

router.get('/', (req, res, next) => {
  const notes = Note.list();
  res.json(notes);
});

router.get('/:id', (req, res, next) => {
  const id = Number(req.params.id);

  try {
    const note = Note.get(id);
    res.json(note);
  } catch (e) {
    next(e);
  }
});

router.post('/', (req, res, next) => {
  const { title, content } = req.body;
  const note = Note.create(title, content);
  res.json(note);
});

router.put('/:id', (req, res, next) => {
  const id = Number(req.params.id);
  const { title, content } = req.body;

  try {
    const note = 
      Note.update(id, title, content);
    res.json(note);
  } catch (e) {
    next(e);
  }
});

router.delete('/:id', (req, res, next) => {
  const id = Number(req.params.id);

  try {
    Note.delete(id);
    res.json({ result: 'success' });
  } catch (e) {
    next(e);
  }
});

module.exports = router;