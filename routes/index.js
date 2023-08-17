const messages = [
  {
    text: 'Hola cara de bola',
    user: 'Milly666',
    added: new Date(),
  },
  {
    text: 'Mikasa esta en mi casa',
    user: 'Eren',
    added: new Date(),
  },
];

const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Mini Message Board', messages });
});

router.get('/new', function (req, res) {
  res.render('form');
});

router.post('/new', function (req, res) {
  messages.push({
    text: req.body.message,
    user: req.body.user,
    added: new Date(),
  });
  res.redirect('/');
});

module.exports = router;
