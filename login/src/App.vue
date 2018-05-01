<template>
	<div id="app">
		<Actions/>
		<Login/>
	</div>
</template>

<script>
import Login from '@/Login'
import Actions from '@/Actions'

export default {
	name: 'App',
	components: {
		Login,
		Actions
	},
	computed: {
	}
}
</script>
