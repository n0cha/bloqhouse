import Vue from 'vue'
import Vuex from 'vuex'
import auth from '../modules/auth'

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		token: ''
	},

	getters: {
		isLoggedIn: state => !!state.token
	},

	mutations: {
		setToken(state, token) {
			state.token = token
		}
	},

	actions: {
		logIn: ({ commit }, { userName, password }) => auth.logIn(userName, password)
			.then(response => {
				commit('setToken', response.token)
			}),
		logOut: ({ state, commit }) => auth.logOut(state.token)
			.then(() => {
				commit('setToken', '')
			}),
		challenge: ({ state }) => auth.challenge(state.token)
	}
})

export default store
