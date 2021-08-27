const { MongoClient } = require('mongodb');

const url = `mongodb+srv://nihalmaddela:Ecom_127@cluster0.3ticg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(url);

const connect = async () => {
  // connect
  await client.connect();
  console.log('Connected successfully to server');
}

module.exports = {
    connect,
    client
}