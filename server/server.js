const express = require('express');
const app = express();
const MongoClient = require('mongodb').MongoClient;
const createRouter = require('./helpers/create_router.js');
const cors = require('cors');

app.use(express.json());
app.use(cors());
// if hosting remotely this would be the address of the database hosting 
//made a connection
MongoClient.connect('mongodb://localhost:27017', {useUnifiedTopology: true })
//returned client which is the output of above which is the dial tone to the database 
.then((client) => {
  // using the client to connect to a db called games_hub
  const db = client.db('games_hub');
  const gamesCollection = db.collection('games');
  //create a router and use it anytime there is a request at /api/games
  const gamesRouter = createRouter(gamesCollection);
  app.use('/api/games', gamesRouter);
})
.catch(() => console.log(error));

app.listen(5000, function () {
  console.log(`Listening on port ${ this.address().port }`);
});
 