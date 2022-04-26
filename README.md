# backend-project-kanhu-nahak-au26
AttainU Repository
# backend-project-kanhu-nahak-au26
AttainU Repository
# Welcome to Fakebook


## Features

- Sign in using local authentication.
- Search for your other users.
- Chat with your friends in realtime.
- Like and comment on a feed.
- API for developers
- View your profile.
- Follow a particular user and get notified for his/her activities.
- Change your profile picture

And a lot more to be added soon...

## To Do's

- Activity feature for user to see follow requests and his/her daily activity.
- Notifications

## Requirements

- [Node.js](https://nodejs.org)
  - expressjs [ExpressJS HTTP middleware](https://npmjs.org/package/express)
  - ejs [Embedded JavaScript templates](https://npmjs.org/package/ejs)
- [MongoDB](http://mongodb.org)

## Installation

Clone the repo locally then install all the dependencies using [NPM](https://npmjs.org/)

```bash
$ git clone https://github.com/dan-divy/spruce.git
$ cd spruce
$ npm i
```

## Local Development

Before running, we need to add the Instgram and Google API Credentials to the project. Under the `config` directory of the repo, you will find `instagram.js` and `google.js`. We need to add the `<CLIENT_ID>`, `<CLIENT_SECRET>` and `<host>:<port>` with our own API credentials

```javascript
/** REPLACE YOUR API CREDENTIALS HERE **/
var in_client_id = 'XXXXXXXXXXXXXXXXXX', // <CLIENT_ID>
    in_client_secret = 'XXXXXXXXXXXXXXXXXXXX', // <CLIENT_SECRET>
```

```javascript
var in_redirect_uri = "http://localhost:80/account/oauth/:service";
```

Finally start the MongoDB server in a seperate bash/pm2

```bash
$ mongod
```

and then start the spruce server via `npm`.

```bash
$ npm start
```

## To know

spruce uses [mongoose](https://npmjs.org/package/mongoose) as an ORM for performing CRUD operations on MongoDB and [express.js](https://npmjs.com/package/express) for server-side HTTP routing.


## Authors

- [Kanhu Charan Nahak](http://github.com/kanhu-nahak-au26)
- [Sapna Saini](https://github.com/saini-sapna-au26)



