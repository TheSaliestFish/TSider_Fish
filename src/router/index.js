import Vue from 'vue'
import Router from 'vue-router'
import Main from '../components/Main.vue'
import Chat from '../components/Chat.vue'
import App from '../App.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'App',
      component: Main
    },
    {
      path: '/chat',
      name: 'Chat',
      component: Chat
    }
  ]
})
