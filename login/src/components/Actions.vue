<template>
	<q-card>
		<q-card-actions align="end">
			<q-btn v-if="loggedIn" icon="fa-sign-out-alt" color="primary" :loading="loggingOut" @click="logOut">Sign out</q-btn>
			<q-btn icon="fa-question" :color="challengeSucceeded ? 'positive' : 'negative'" :loading="challenging" @click="challenge">Test</q-btn>
		</q-card-actions>
	</q-card>
</template>

<script>
import * as components from 'quasar-framework'

export default {
	components,
	name: 'Actions',
	data() {
		return {
			loggingOut: false,
			challenging: false,
			challengeSucceeded: false
		}
	},
	computed: {
		loggedIn() {
			return this.$store.getters.isLoggedIn
		}
	},
	methods: {
		logOut() {
			this.loggingOut = true
			this.$store.dispatch('logOut')
				.then(() => {
					this.loggingOut = false
				})
		},
		challenge() {
			this.challenging = true
			this.$store.dispatch('challenge')
				.then(() => {
					this.challenging = false
					this.challengeSucceeded = true
				})
				.catch(() => {
					this.challengeSucceeded = false
				})
		}
	}
}
</script>
