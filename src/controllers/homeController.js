
const connection = require('../config/database');

const getHomepage = (req, res) => {
    return res.render('home.ejs');
}

const postCreateUser = (req, res) => {
    console.log(">> req.body: ", req.body)
    res.send('create a new user')
}

const getABC = (req, res) => {
    res.send('check ABC!');
}

const gethoikimhuy = (req, res) => {
    res.render('sample.ejs')
}

module.exports = {
    getHomepage, getABC, gethoikimhuy, postCreateUser
}