var express = require("express");
var app = express();
const port = process.argv[2] || 8080;

// 提供静态资源
app.use(express.static(__dirname));

// 👉 让 /linkpe 自动跳转到 index.html 并保留参数
app.get('/linkpe', (req, res) => {
  const query = req.url.includes('?') ? req.url.slice(req.url.indexOf('?')) : '';
  res.redirect('/index.html' + query);
});

// 启动服务
var server = app.listen(port);
console.log("Server running at http://localhost:" + port);
