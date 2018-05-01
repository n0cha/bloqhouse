const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const users = require('./modules/users');

const HTTP_PORT = 3000;

app.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
	next();
});

app.use(bodyParser.json());

app.get('/', (req, res) => res.send('Hello World!'));

app.post('/login', (req, res) => {
	users.get(req.body.usr, req.body.pwd)
			.then(user => {
				res.setHeader('Content-Type', 'application/json');
				res.status(200).send(Object.assign(user, {token: 'TOKEN'}));
			})
			.catch(() => {
				res.status(403).send();
			})
});

app.post('/logout', (req, res) => {
	if (req.get('authorization') === 'Bearer TOKEN') {
		return res.status(200).send();
	}
	res.status(403).send();
});

app.get('/challenge', (req, res) => {
	if (req.get('authorization') === 'Bearer TOKEN') {
		return res.status(200).send('congratz!');
	}
	res.status(403).send('nope');
});

app.post('/create', (req, res) => {
	debugger
	users.create(req.body.usr, req.body.pwd, 'user');
	res.send('user created');
});

app.listen(HTTP_PORT, () => console.log('Example app listening on port 3000!'));
