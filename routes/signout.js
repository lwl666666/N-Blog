const express = require('express');
const router = express.router;

const checkLogin = require('../middlewares/check').checkLogin;

router.get('/',checkLogin,function(req,res,next){
	res.send('登出');
})

module.exports = router;
