import Vue from 'vue'
import Router from 'vue-router'
import Courses from '@/components/Courses'
import Students from '@/components/Students'
import Instructors from '@/components/Instructors'
import CreateStudent from '@/components/CreateStudent'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/courses',
      name: 'Courses',
      component: Courses
    },
    {
      path: '/students',
      name: 'Students',
      component: Students
    },
    {
      path: '/instructors',
      name: 'Instructors',
      component: Instructors
    },
    {
      path: '/createstudent',
      name: 'Create Student',
      component: CreateStudent
    }
  ]
})
