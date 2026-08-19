
const getHomepage = (req, res) => {
    res.send('Hello World and kim huy & nodemon');
}

const getABC = (req, res) => {
    res.send('check ABC!');
}

const gethoikimhuy = (req, res) => {
    res.render('sample.ejs')
}

module.exports = {
    getHomepage, getABC, gethoikimhuy
}