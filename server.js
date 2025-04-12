const path = require("path");

// 返回 linkpe.html 页面
app.get("/linkpe", (req, res) => {
  res.sendFile(path.join(__dirname, "linkpe.html"));
});

// 可选：返回 index.html
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});
