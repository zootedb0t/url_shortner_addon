const apiKey = document.querySelector("#apikey");
const groupId = document.querySelector("#groupid");
const submitKey = document.querySelector("#addkey");

submitKey.addEventListener("click", () => {
  if (apiKey.value === "" || groupId.value === "") {
    alert("Enter a valid api key");
  } else {
    browser.storage.local.set({
      authCredentials: {
        authorization: apiKey.value,
        groupid: groupId.value,
      },
    });
    alert("API key added!!");
  }
});

// Access api from extension storage
browser.storage.local
  .get()
  .then(function (result) {
    localStorage.setItem("authKey", result.authCredentials.authorization);
    localStorage.setItem("groupKey", result.authCredentials.groupid);
    alert("Api keys already added!!");
  })
  .catch(function () {
    alert("Please add api key!!\n");
  });
