const showUrl = document.getElementById("copy-url");
const longUrl = document.getElementById("longurl");
const form = document.getElementById("formsubmit");
const openSetting = document.getElementById("setting-img");

// Put current tab url into input field
const url = document.querySelector("#geturl");
url.addEventListener("click", () => {
  browser.tabs.query({ currentWindow: true, active: true }).then((tabs) => {
    let url = tabs[0].url;
    longUrl.value = url;
  });
});

// Open options pages
openSetting.addEventListener("click", () => {
  browser.runtime.openOptionsPage();
});

// await used inside async function make program wait until promise resolves
// Send data to bitly server and fetch response
form.addEventListener("click", async () => {
  const ath = localStorage.getItem("authKey");
  const grp = localStorage.getItem("groupKey");
  const origninalUrl = longUrl.value;
  // console.log(ath);

  showUrl.innerText = "LOADING...";

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
  showUrl.textContent = data.link;

  const elem = document.createElement("button");
  elem.id = `copytoclipboard`;
  elem.innerText = "Copy to clipboard";
  elem.addEventListener("click", () => {
    const cb = navigator.clipboard;
    const data = document.querySelector("#copy-url");
    cb.writeText(data.innerText);
  });
  document.body.appendChild(elem);
});
