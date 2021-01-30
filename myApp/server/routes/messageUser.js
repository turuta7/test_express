const express = require('express');
const router = express.Router();

const {validationEmail, validationMessage} = require('../../utils/checkingMailAndMessageLength')

const {getFindMessage, createMessageUser} = require('../../utils/workMethodDB')


/* GET users listing. */
router.get('/list/:num', async function (req, res, next) {
  let {num} = req.params;
  if (num === 0) {
    num = 10
  } else {
    num = Number(Number(num) + 1) * 10;
  }
  const returnMessage = await getFindMessage(num)
  res.send({message: returnMessage});
});

router.get('/single/:id', async function (req, res, next) {
  let {id} = req.params;
  if (id) {
    try {
      const returnMessage = await getFindMessage(undefined, id);
      const status = returnMessage ? 200 : 403;
      res.status(status).send({message: returnMessage});
    } catch (e) {
      console.error(e)
      res.status(403).send({message: 'error'});
    }

  } else {
    res.status(403).send({message: 'error'});
  }
})

router.post('/', async (req, res) => {
  const body = req.body;
  if (body.email && body.message) {
    const booleanValidation = validationEmail(body.email);
    const booleanMessageValidation = validationMessage(body.message)
    try {
      const returnCreateMessage = booleanMessageValidation && booleanValidation ? await createMessageUser(body.email, body.message) : {message: 'error'};
      const status = returnCreateMessage ? 200 : 403;
      res.status(status).send(returnCreateMessage);
    } catch (e) {
      console.error(e);
      res.status(403).send({message: 'error'});
    }
  } else {
    res.status(403).send({message: 'error date'});
  }
})


module.exports = router;
