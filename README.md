# url_shortner_addon

Shorten current webpage url using bitly api easily and share them. All data related to audience like locations, referrers, engagement and clicks can be accessed from bitly account dashboard. 

Before using add-on goto `Manage Extensions -> Preferences` or click on `gear` icon and enter your api `authorisation key` and `guid`. Now you are good to go.

`Authorisation Key` can be found in `settings` of your bitly profile. 

For group-id make a `GET` request and pass your Authorization token to header. In curl you can do something like this.

```
curl \
-H 'Authorization: Bearer {TOKEN}' \
-X GET \
https://api-ssl.bitly.com/v4/groups
```
This return a json response with your `guid`.

![1st](https://user-images.githubusercontent.com/62596687/219436939-e00c9b1b-49f8-4605-bb09-9f66f0020b81.png)

![2nd](https://user-images.githubusercontent.com/62596687/218631971-e3061f4e-0195-48cd-a06c-062c0296e3b7.png)

![3rd](https://user-images.githubusercontent.com/62596687/219437106-1f4fcedf-8f11-4222-a4ef-229b066dd632.png)

Similar to https://github.com/zootedb0t/url_shortner
