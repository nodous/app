import Vue from 'vue'
import Router from 'vue-router'
import BasicLayout from '@/layouts/BasicLayout'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'BasicLayout',
      component: BasicLayout,
      children: [
        {
          path: '/',
          redirect: 'mine'
        },
        {
          path: 'mine',
          name: 'Mine',
          meta: {
            title: '首页'
          },
          component: (resolve) => require(['@/pages/Mine.vue'], resolve)
        }
      ]
    }
  ]
})
