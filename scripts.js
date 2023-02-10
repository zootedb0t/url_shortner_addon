const debug = document.getElementById("copy-url");

function getUrl() {
  browser.tabs.query({ currentWindow: true, active: true }).then((tabs) => {
    let tabUrl = tabs[0].url;
    console.log(tabUrl);
    debug.innerHTML = `<li>${tabUrl}</li>`;
  });
}

const url = document.querySelector("#geturl");
url.addEventListener("click", getUrl);

// Access api from extension storage

// function apiValue(key) {
//   localStorage.setItem("auth", key.authCredentials.authorization);
//   localStorage.setItem("group", key.authCredentials.groupid);
// }
// ath = localStorage.getItem("auth");
// grp = localStorage.getItem("group");
// console.log(ath);
// console.log(grp);

// function error() {
//   console.log("Some Error Occured");
// }

// const getValue = browser.storage.local.get();
// getValue.then(apiValue, error);

// Another way of accessing extension storage

browser.storage.local
  .get()
  .then(function (result) {
    localStorage.setItem("authKey", result.authCredentials.authorization);
    localStorage.setItem("groupKey", result.authCredentials.groupid);
  })
  .catch(function (error) {
    console.log(error);
  });

const ath = localStorage.getItem("authKey");
const grp = localStorage.getItem("groupKey");
// Debugging
// console.log(ath);
// console.log(grp);

// fetch("https://api-ssl.bitly.com/v4/shorten", {
//   method: "POST",
//   headers: {
//     Authorization: `${ath}`,
//     "Content-Type": "application/json",
//   },
//   body: JSON.stringify({
//     long_url: "https://dev.bitly.com",
//     domain: "bit.ly",
//     group_guid: `${grp}`,
//   }),
// });
