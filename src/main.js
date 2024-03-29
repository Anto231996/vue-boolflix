import Vue from 'vue'
import App from './App.vue'
import CountryFlag from 'vue-country-flag'

Vue.component('country-flag', CountryFlag)

new Vue({
  render: h => h(App),
}).$mount('#app')