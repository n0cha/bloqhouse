import axios from 'axios'
import md5 from 'md5'

const server = axios.create({
	baseURL: 'http://localhost:3000/'
})

export default {
	logIn: (userName, password) => {
		const usr = userName
		const pwd = md5(password)
		return server.post('login', {usr, pwd}).then(response => response.data)
	},

	logOut: token => server.post('logout', {}, {
		headers: {
			Authorization: `Bearer ${token}`
		}
	}),

	challenge: token => server.get('challenge', {
		headers: {
			Authorization: `Bearer ${token}`
		}
	})
}
