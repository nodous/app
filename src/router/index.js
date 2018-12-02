import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'BasicLayout',
      component: (resolve) => require(['@/layouts/BasicLayout.vue'], resolve),
      children: [
        {
          path: '/',
          redirect: 'mine'
        },
        {
          path: 'mine',
          name: 'Mine',
          meta: {
            title: '我的'
          },
          component: (resolve) => require(['@/pages/Mine.vue'], resolve)
        },
        {
          path: 'homepage',
          name: 'HomePage',
          meta: {
            title: '首页'
          },
          component: (resolve) => require(['@/pages/HomePage.vue'], resolve)
        }
      ]
    }
  ]
})
