import Vue from 'vue'
import Router from 'vue-router'
import Courses from '@/components/Courses'
import Students from '@/components/Students'
import Instructors from '@/components/Instructors'
import CreateStudent from '@/components/CreateStudent'
import CreateCourse from '@/components/CreateCourse'
import CreateInstructor from '@/components/CreateInstructor'

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
    },
    {
      path: '/createcourse',
      name: 'Create Course',
      component: CreateCourse
    },
    {
      path: '/createinstructor',
      name: 'Create Instructor',
      component: CreateInstructor
    }
  ]
})
