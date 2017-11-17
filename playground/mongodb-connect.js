// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

// var user = {name: 'kris', age: 26};
// //Destructure name from user object
// // - creates a variable with the value of destructured element
// var {name} = user;
// console.log(name);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // db.collection('Todos').insertOne({
  //   text: 'Something to do',
  //   completed: false
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Unable to insert todo', err);
  //   }
  //
  //   console.log(JSON.stringify(result.ops, undefined, 2))
  // });

  // Insert new doc into Users (name, age, location)
  // Print error/etc,

  // db.collection('Users').insertOne({
  //   name: 'Kris',
  //   age: 26,
  //   location: 'Vancouver'
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Unable to insert new User')
  //   }
  //
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  //   console.log(result.ops[0]._id.getTimestamp());
  // });

  db.close();
});
