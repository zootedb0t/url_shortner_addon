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

![Screenshot_2023-02-20-10-43-38_1920x1080](https://user-images.githubusercontent.com/62596687/220016953-5ebef5b6-4cef-493d-95a9-277edc973391.png)

![Screenshot_2023-02-20-10-44-05_1920x1080](https://user-images.githubusercontent.com/62596687/220017002-d79c6835-871e-4856-a507-880999bc4853.png)

![Screenshot_2023-02-20-10-44-34_1920x1080](https://user-images.githubusercontent.com/62596687/220017058-0ea5cf51-bef8-43a3-ba93-b9077fa94a82.png)

Similar to https://github.com/zootedb0t/url_shortner
