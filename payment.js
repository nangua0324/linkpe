if (window.location.search.indexOf('pa') > -1) {
  const urlParams = new URLSearchParams(window.location.search);
  const pn = urlParams.get('pn') || "";
  const pa = urlParams.get('pa') || "";
  const cu = urlParams.get('cu') || "INR";
  const am = urlParams.get('am') || "";

  const user = (pn !== "") ? pn : pa;
  const upiURL = `upi://pay?pa=${pa}&pn=${pn}&cu=${cu}&am=${am}`;

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

  console.log("UPI URL:", upiURL);


  document.getElementById("payNowButton").addEventListener("click", function () {
  const a = document.createElement("a");
  a.href = upiURL;
  a.style.display = "none";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  });


} else {
  location.replace("linkpe.html?error");
}
