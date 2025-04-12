const express = require("express");
const path = require("path");
const app = express();

// 让浏览器能访问 css/img/qrious 等静态资源
app.use(express.static(__dirname));

// 返回 index.html（主页）
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// 返回 linkpe.html（生成 UPI 页面）
app.get("/linkpe", (req, res) => {
  res.sendFile(path.join(__dirname, "linkpe.html"));
});

// API：生成 upi://pay 链接
app.get("/generate", (req, res) => {
  const { name, amount, upi } = req.query;

  if (!name || !amount || !upi) {
    return res.status(400).send("Missing required query parameters");
  }

  const url = `upi://pay?pa=${upi}&pn=${name}&am=${amount}&cu=INR`;
  res.send({ upiLink: url });
});

// 启动服务
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
