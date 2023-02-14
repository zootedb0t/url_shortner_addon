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

Similar to https://github.com/zootedb0t/url_shortner
