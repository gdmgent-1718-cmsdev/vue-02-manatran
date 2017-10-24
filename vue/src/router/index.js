import Vue from 'vue'
import Router from 'vue-router'
import ReadArticle from '@/components/AllEntities'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'AllEntities',
      component: AllEntities
    }
  ]
})
