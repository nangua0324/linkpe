if (window.location.search.indexOf('pa') > -1) {
  const urlParams = new URLSearchParams(window.location.search);
  const pn = urlParams.get('pn') || "";
  const pa = urlParams.get('pa') || "";
  const cu = urlParams.get('cu') || "INR";
  const am = urlParams.get('am') || "";

  const user = (pn !== "") ? pn : pa;

  // 构建通用的 upi 参数部分
  const upiParams = `pay?pa=${pa}&pn=${pn}&cu=${cu}&am=${am}`;
  const upiURL = `upi://${upiParams}`; // 用于 QR 码生成

  document.getElementById("name").innerHTML =
    `Click on Pay Now or Scan QR and Pay using any UPI App<br><b>${user}</b>`;

  new QRious({
    element: document.getElementById('qr'),
    background: '#fff',
    foreground: '#000',
    size: 200,
    level: 'H',
    value: upiURL
  });

  document.getElementById("payNowButton").addEventListener("click", function () {
    const userAgent = navigator.userAgent.toLowerCase();

    // 判断是否为 Android
    const isAndroid = /android/.test(userAgent);

    if (isAndroid) {
      if (userAgent.includes("gpay") || userAgent.includes("google")) {
        // Google Pay 跳转
        window.location.href = `tez://${upiParams}`;
      } else if (userAgent.includes("paytm")) {
        // Paytm 跳转
        window.location.href = `paytmmp://${upiParams}`;
      } else {
        // 默认尝试 Google Pay 跳转
        window.location.href = `tez://${upiParams}`;
      }
    } else {
      alert("UPI 支付跳转仅在支持的 Android 设备和 App 中有效，请使用扫码方式支付。");
    }
  });

} else {
  location.replace("linkpe.html?error");
}
