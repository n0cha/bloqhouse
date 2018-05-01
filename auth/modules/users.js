const storage = require('./storage');

module.exports = {
	get: (username, password) => storage.get('users', {username, password}).then(user => {
		if (!user) {
			throw new Error('user not found');
		}
		const {username, role} = user;
		return {username, role};
	}),
	
	create: (username, password, role) => storage.create('users', {username, password, role})
};
