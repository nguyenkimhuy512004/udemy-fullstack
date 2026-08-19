
const connection = require('../config/database');

const getHomepage = (req, res) => {

    let users = [];

    connection.query(
        'select * From  Users u',
        function (err, results, fields) {
            users = results;
            console.log(">>>results homePage = ", results)

            //console.log(">> check users; ", users)
            res.send(JSON.stringify(users))

        }
    );
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