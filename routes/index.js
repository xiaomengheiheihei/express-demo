// var express = require('express');
// var router = express.Router();

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

// module.exports = router;

// 首页
exports.index = function (req, res, next) {
	res.render('index', { title: "It's So Cool" });
}

// 用户主页
exports.user = function (req, res, next) {

}

// 发表信息
exports.post = function (req, res, next) {
	
}

// 用户注册
exports.reg = function (req, res, next) {
	
}

// 发送用户注册信息
exports.doReg = function (req, res, next) {
	
}

// 用户登录
exports.login = function (req, res, next) {
	
}

// 发送用户名密码
exports.doLogin = function (req, res, next) {
	
}

// 登出
exports.logout = function (req, res, next) {
	
}
