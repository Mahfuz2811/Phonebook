require('./bootstrap');

window.Vue = require('vue');


import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)


let myheader = require('./components/MyHeader.vue');
let myfooter = require('./components/MyFooter.vue');

let home = require('./components/Home.vue');
let about = require('./components/About.vue');

const routes = [
  { path: '/home', component: home },
  { path: '/about', component: about }
]

const router = new VueRouter({
	mode: 'history',
  	routes // short for `routes: routes`
})

const app = new Vue({
    el: '#app',
    router,
    components: {myheader, myfooter}
});
