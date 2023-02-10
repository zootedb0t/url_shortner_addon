function getUrl() {
  browser.tabs.query({ currentWindow: true, active: true }).then((tabs) => {
    let tabUrl = tabs[0].url;
    console.log(tabUrl);
    let debug = document.getElementById("copy-url");
    debug.innerHTML = `<li>${tabUrl}</li>`;
  });
}

const url = document.querySelector("#geturl");
url.addEventListener("click", getUrl);

const bitly_api = fetch("https://api-ssl.bitly.com/v4/shorten", {
  method: "POST",
  headers: {
    Authorization: "xxxxx",
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    long_url: "https://dev.bitly.com",
    domain: "bit.ly",
    group_guid: "xxxxx",
  }),
});
