import Vue from 'vue'
import BootstrapVue from "bootstrap-vue"
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"
import jQuery from 'jquery'
import app_store from "./store/app_store"


Vue.use(BootstrapVue)

new Vue({
  el: '#app',
  render: h => h(App)
})

app_store.data.action.isActive = true
app_store.data.control.editSeen = 'edit'

window.jQuery = jQuery
window.$ = jQuery

jQuery.extend(true, jQuery.fn.datetimepicker.defaults, {
    icons: {
        time: 'far fa-clock',
        date: 'far fa-calendar',
        up: 'fas fa-arrow-up',
        down: 'fas fa-arrow-down',
        previous: 'fas fa-chevron-left',
        next: 'fas fa-chevron-right',
        today: 'fas fa-calendar-check',
        clear: 'far fa-trash-alt',
        close: 'far fa-times-circle'
    }
});



