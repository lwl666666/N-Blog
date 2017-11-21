const express = require('express');
const router = express.router;

const checkLogin = require('../middlewares/check').checkLogin;

router.get('/',function(req,res,next){
	res.send('主页');
});

router.get('/create',checkLogin,function(req,res,next){
	res.send('发表文章页');
});
router.post('/create',checkLogin,function(req,res,next){
	res.send('发表文章');
});
router.get('/:postId',function(req,res,next){
	res.send('文章详情页');
});
router.get('/:postId/edit',checkLogin,function(req,res,next){
	res.send('更新文章页');
});
router.post('/:postId/edit',checkLogin,function(req,res,next){
	res.send('更新文章');
});
router.get('/:postId/remove',checkLogin,function(req,res,next){
	res.send('删除文章');
});
router.post('/:postId/comment',checkLogin,function(req,res,next){
	res.send('创建评论');
});
router.get('/:postId/comment/:commentId/remove',checkLogin,function(req,res,next){
	res.send('删除评论');
});
module.exports =router;
