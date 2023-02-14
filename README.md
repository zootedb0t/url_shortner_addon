# url_shortner_addon

Shorten url using bitly api easily and share them. Access all data related to audience like locations, referrers and locations from bitly account dashboard.

Before using add-on goto `Manage Extensions -> Preferences` or click on `gear` icon and enter your api `authorisation key` and `group-id`. Now you are good to go.

`Authorisation Key` can be found in `settings` of your bitly profile. 

For group-id make a `GET` request and pass your Authorization token to header. In curl you can do something like this.

```
curl \
-H 'Authorization: Bearer {TOKEN}' \
-X GET \
https://api-ssl.bitly.com/v4/
```
![1st](https://user-images.githubusercontent.com/62596687/218631944-f484646d-0847-4542-afd9-db182ee13c28.png)

![2nd](https://user-images.githubusercontent.com/62596687/218631971-e3061f4e-0195-48cd-a06c-062c0296e3b7.png)

![3rd](https://user-images.githubusercontent.com/62596687/218631996-aaccf67d-a183-480e-943f-faa2632a2e19.png)

Similar to https://github.com/zootedb0t/url_shortner
