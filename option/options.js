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

function apiValue(key) {
  let auth = key.authCredentials.authorization;
  let grp = key.authCredentials.groupid;
  // console.log(auth);
  // console.log(grp);
}

function error() {
  console.log("Some Error Occured");
}

const getValue = browser.storage.local.get();
getValue.then(apiValue, error);

const submitKey = document.querySelector("#addkey");
submitKey.addEventListener("click", storeApi);
