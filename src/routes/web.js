const express = require('express');
const { getHomepage, getABC, gethoikimhuy } = require('../controllers/homeController')
const router = express.Router();

router.get('/', getHomepage);
router.get('/abc', getABC);
router.get('/hoikimhuy', gethoikimhuy);

module.exports = router;