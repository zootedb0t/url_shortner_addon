const apiKey = document.querySelector("#apikey");
const groupId = document.querySelector("#groupid");
const submitKey = document.querySelector("#addkey");

function storeApi() {
  browser.storage.local.set({
    authCredentials: {
      authorization: apiKey.value,
      groupid: groupId.value,
    },
  });
}

// Access api from extension storage
browser.storage.local
  .get()
  .then(function (result) {
    localStorage.setItem("authKey", result.authCredentials.authorization);
    localStorage.setItem("groupKey", result.authCredentials.groupid);
  })
  .catch(function (error) {
    console.log(error);
  });

submitKey.addEventListener("click", storeApi);
