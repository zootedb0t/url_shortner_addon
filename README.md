# url_shortner_addon

Shorten current webpage url using bitly api and share and manage url easily. Access all data related to url like locations, referrers and locations from bitly account dashboard.

Before using add on goto `Manage Extensions -> Preferences` and enter your api `authorisation key` and `group-id`. Now you are good to go.

`Authorisation Key` can be found in `settings` of your profile. 

For group id make a `GET` request and pass your Authorization token to header. In curl you can do this

```
curl \
-H 'Authorization: Bearer {TOKEN}' \
-X GET \
https://api-ssl.bitly.com/v4/
```

Similar to https://github.com/zootedb0t/url_shortner
