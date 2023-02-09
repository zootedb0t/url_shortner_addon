let apiKey = document.querySelector("#apikey");
let groupId = document.querySelector("#groupid");
let submitButton = document.querySelector("#submitapi");

function storeApi() {
  browser.storage.local.set({
    authCredentials: {
      authorization: apiKey.value,
      groupid: groupId.value,
    },
  });
}

function addingkey() {
  storeApi();
}
