const apiKey = document.querySelector("#apikey");
const groupId = document.querySelector("#groupid");

function storeApi() {
  browser.storage.local.set({
    authCredentials: {
      authorization: apiKey.value,
      groupid: groupId.value,
    },
  });
}

const submitKey = document.querySelector("#addkey");
submitKey.addEventListener("click", storeApi);
