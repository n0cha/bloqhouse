// const miniMongo = require('mini-mongo');
//
// const connect = () => new Promise((resolve, reject) => {
// 	miniMongo.connect({
// 		autoload: true,
// 		directory: './data/'
// 	}, (err, db) => {
// 		if (err) {
// 			reject(err);
// 		}
// 		resolve(db);
// 	});
// });
//
// module.exports = {
// 	get: (collection, query) => connect().then(db => new Promise((resolve, reject) => db.collection(collection).findOne(query, result => {
// 		debugger
// 		resolve(result)
// 	}))),
// 	create: (collection, obj) => connect().then(db => new Promise((resolve, reject) => db.collection(collection).insert(obj, result => resolve(result))))
// };

const Datastore = require('nedb-promises')
const db = require('nedb-promises').create('data/users.json')

module.exports = {
	get: (collection, query) => db.findOne(query),
	create: (collection, obj) => db.insert(obj)
};
