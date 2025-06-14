import { MongoClient } from 'mongodb';

const uri = 'mongodb+srv://sardarsaadisaadi:sardarsaadi801@cluster0.7wg131x.mongodb.net/notesApp'; // Change if needed
const options = {};

let client;
let clientPromise;

if (!global._mongoClientPromise) {
  client = new MongoClient(uri, options);
  global._mongoClientPromise = client.connect();
}
clientPromise = global._mongoClientPromise;

export default clientPromise;
