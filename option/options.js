/* global browser */

const apiKey = document.querySelector('#apikey')
const groupId = document.querySelector('#groupid')
const submitKey = document.querySelector('#addkey')

submitKey.addEventListener('click', () => {
  if (apiKey.value === '' || groupId.value === '') {
    alert('Enter a valid api key')
  } else {
    browser.storage.local.set({
      authCredentials: {
        authorization: apiKey.value,
        groupid: groupId.value
      }
    })
    alert('API key added!!')

    // Set api-key to local storage
    browser.storage.local
      .get()
      .then((result) => {
        localStorage.setItem('authKey', result.authCredentials.authorization)
        localStorage.setItem('groupKey', result.authCredentials.groupid)
      })
      .catch(() => {
        alert('Please add api key!!\n')
      })
  }
})

function onError(e) {
  console.error(e)
}

function updateUI(restoredSettings) {
  apiKey.value = restoredSettings.authCredentials.authorization || ''
  groupId.value = restoredSettings.authCredentials.groupid || ''
  const para = document.createElement('p')
  para.id = 'keypresent'
  para.innerText = 'Api key already present'
  document.body.appendChild(para)
}

const gettingApiKeys = browser.storage.local.get()
gettingApiKeys.then(updateUI, onError)
