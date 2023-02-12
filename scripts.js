const showUrl = document.getElementById("copy-url");
const sendUrl = document.getElementById("submitUrl");
const longUrl = document.getElementById("longurl");
const form = document.getElementById("formsubmit");

function getUrl() {
  browser.tabs.query({ currentWindow: true, active: true }).then((tabs) => {
    let url = tabs[0].url;
    // console.log(longUrl);
    longUrl.value = url;
    showUrl.textContent = `${url}`;
  });
}

function submitUrl() {
  let main_url = longUrl.value;
  console.log(main_url);
}

const url = document.querySelector("#geturl");
url.addEventListener("click", getUrl);

const sendLongUrl = document.querySelector("#submiturl");
sendLongUrl.addEventListener("click", submitUrl);

function sendData() {
  const ath = localStorage.getItem("authKey");
  const grp = localStorage.getItem("groupKey");
  const origninalUrl = longUrl.value;
  // console.log(ath);

  let bitlyUrl = fetch("https://api-ssl.bitly.com/v4/shorten", {
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

  bitlyUrl.then(success, error);

  async function success(value) {
    console.log(value);
  }

  async function error(error) {
    console.log(error);
  }
}

form.addEventListener("click", sendData);
