# API documentation

## Endpoints
### News
__GET /api/news__

Returns all news articles contained within the news spreadsheet.

__POST /api/news__

Adds a news article to the spreadsheet.

Example request body (json): 

```json
{
    "title": "New Medicine Discovered At McMaster",
    "article_link": "https://sample.ca",
    "photo_link": "https://sampleurl.ca"
}
```

Successful POST response (json):
```json
{
    "message": "Article appended successfully!!"
}
```

__DELETE /api/news__

Used to delete a specific news article given an article name.

Sample request body (json):
```json
{
    "title": "New Medicine Discovered At McMaster"
}
```
Successful response will return all news articles after deletions have occured.

Unsuccessful response body (json):
```json
{
    "message" : "That title does not corrispond to a news article!"
}
```

-----
### Events
__GET /api/events__

Returns all events contained within the events spreadsheet.

__POST /api/events__

Adds an event to the spreadsheet.

Example request body (json): 

event_name,description,date,time,location
poker,desc,january,5 oclock,belarus
```json
{
    "event_name": "Sample event",
    "description": "Sample desc",
    "date": "Jan 5",
    "time": "5:00am",
    "location": "Hamilton"
}
```

Successful POST response (json): 
```json
{
    "message": "Event appended successfully!!"
}
```

__DELETE /api/events__

Used to delete a specific news article given an article name.

Sample request body (json):
```json
{
    "event_name": "Sample event"
}
```

Successful response will return all events, after deletions have occured.

Unsuccessful response body (json):
```json
{
    "message" : "That event name does not corrispond to an event!"
}
```