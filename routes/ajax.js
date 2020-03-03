var express = require('express');
var router = express.Router();

var data = [
    {name:'Taro', age:35, mail:'taro@yamada'},
    {name:'Hanako', age:29, mail:'hanako@flower'},
    {name:'Sachiko', age:41, mail:'sachico@happy'}
];

router.get('/',(req, res, next) => {
    var n = req.query.id;
    res.json(data[n]);
})

module.exports = router;