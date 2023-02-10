function storeApi() {
  const apiKey = document.querySelector("#apikey");
  const groupId = document.querySelector("#groupid");
  browser.storage.local.set({
    authCredentials: {
      authorization: apiKey.value,
      groupid: groupId.value,
    },
  });
  // For Debug
  console.log(apiKey.value);
  console.log(groupId.value);
}

const submitKey = document.querySelector("#addkey");
submitKey.addEventListener("click", storeApi);
