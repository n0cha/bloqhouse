<template>
	<div class="loginContainer">
		<q-card>
			<q-card-title>Sign In</q-card-title>
			<q-card-separator/>
			<q-card-main>
				<div class="row">
					<div class="col">
						<q-input v-model="userName" stack-label="User name"/>
					</div>
				</div>
				<div class="row">
					<div class="col">
						<q-input type="password" v-model="password" stack-label="Password" :no-pass-toggle="true"/>
					</div>
				</div>
			</q-card-main>
			<q-card-actions align="end">
				<q-btn icon-right="fa-sign-in-alt" color="primary" :loading="loggingIn" @click="logIn">Sign in</q-btn>
			</q-card-actions>
		</q-card>
	</div>
</template>

<script>
import * as components from 'quasar-framework'

export default {
	components,
	name: 'Login',
	data() {
		return {
			loggingIn: false,
			userName: '',
			password: ''
		}
	},
	computed: {
	},
	methods: {
		logIn() {
			this.loggingIn = true
			this.$store.dispatch('logIn', {userName: this.userName, password: this.password})
		}
	}
}
</script>
