var express = require("express");
var app = express();
const port = process.argv[2] || 8080;

// Create a server
// Serves resources from public folder
app.use(express.static(__dirname));

// 👉 添加这段！让 /linkpe 正确返回 linkpe.html
app.get('/linkpe', (req, res) => {
  res.sendFile(__dirname + '/linkpe.html');
});

var server = app.listen(port);

console.log("Server running at http://localhost:" + port);
