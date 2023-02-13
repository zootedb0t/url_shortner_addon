const showUrl = document.getElementById("copy-url");
const sendUrl = document.getElementById("submitUrl");
const longUrl = document.getElementById("longurl");
const form = document.getElementById("formsubmit");
const copytoclipboard = document.getElementById("copytoclipboard");

function getUrl() {
  browser.tabs.query({ currentWindow: true, active: true }).then((tabs) => {
    let url = tabs[0].url;
    longUrl.value = url;
  });
}

function submitUrl() {
  let main_url = longUrl.value;
  console.log(main_url);
}

const url = document.querySelector("#geturl");
url.addEventListener("click", getUrl);

const sendLongUrl = document.querySelector("#formsubmit");
sendLongUrl.addEventListener("click", submitUrl);

async function sendData() {
  const ath = localStorage.getItem("authKey");
  const grp = localStorage.getItem("groupKey");
  const origninalUrl = longUrl.value;
  // console.log(ath);

  const bitlyUrl = await fetch("https://api-ssl.bitly.com/v4/shorten", {
    method: "POST",
    headers: {
      Authorization: ath,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      long_url: origninalUrl,
      domain: "bit.ly",
      group_guid: grp,
    }),
  });

  const data = await bitlyUrl.json();
  // Debugging
  // console.log(data);
  showUrl.innerText = data.link;
}

function urlCopy() {
  const cb = navigator.clipboard;
  const data = document.querySelector("#copy-url");
  cb.writeText(data.innerText);
}

form.addEventListener("click", sendData);
copytoclipboard.addEventListener("click", urlCopy);
