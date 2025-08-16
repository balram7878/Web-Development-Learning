const { MongoClient } = require('mongodb');


const url = 'mongodb+srv://bmeena97562:sCoFQGYimViXlCK5@cluster0.uwrialx.mongodb.net/';
const client = new MongoClient(url);


const dbName = 'User';

async function main() {

  await client.connect();
  console.log('Connected successfully to server');
  const db = client.db(dbName);
  const collection = db.collection('Personal Info');

const findResult = await collection.find({});
console.log('Found documents =>', findResult);




  return 'done.';
}

main()
  .then(console.log)
  .catch(console.error)
 