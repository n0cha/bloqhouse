// require(`quasar/dist/quasar.ie`)
// require(`quasar/dist/quasar.ie.${__THEME}.css`)

import Vue from 'vue'
import store from './store'
import Quasar from 'quasar'
import 'quasar-extras/fontawesome'
import 'quasar/dist/quasar.mat.css'
import 'quasar-extras/roboto-font'
import App from './App'

Vue.config.productionTip = false
Vue.use(Quasar)

Quasar.start(() => {
	new Vue({ /* eslint-disable-line no-new */
		el: '#app',
		store,
		...App
	})
})
