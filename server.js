const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send(`
    <h2>✅ LinkPe API 已部署成功！</h2>
    <p>使用以下接口生成 UPI 支付链接：</p>
    <code>/generate?name=YourName&amount=100&upi=yourupi@upi</code>
  `);
});

app.get("/generate", (req, res) => {
  const { name, amount, upi } = req.query;

  if (!name || !amount || !upi) {
    return res.status(400).send("缺少必要参数 name、amount 或 upi。");
  }

  const url = `upi://pay?pa=${upi}&pn=${name}&am=${amount}&cu=INR`;
  res.send({ upiLink: url });
});

app.listen(process.env.PORT || 3000, () => {
  console.log("✅ Server started");
});

