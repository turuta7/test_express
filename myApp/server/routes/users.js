const express = require('express');
const router = express.Router();

const {getAllUsers} = require('../../utils/schemeDB/workMethodDB')

/* GET users listing. */
router.get('/', async function (req, res, next) {
  const resu = await getAllUsers()
  console.log(resu)

  res.send({users: resu});
});
router.post ('/',async (req,res) => {

})


module.exports = router;
