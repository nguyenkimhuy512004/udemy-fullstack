const express = require('express');
const { getHomepage, getABC, gethoikimhuy, postCreateUser } = require('../controllers/homeController')
const router = express.Router();


router.get('/', getHomepage);
router.get('/abc', getABC);
router.get('/hoikimhuy', gethoikimhuy);
router.post('/create-user', postCreateUser);

module.exports = router;