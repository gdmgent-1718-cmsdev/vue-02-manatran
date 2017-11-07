<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <section v-for="course in courses">
      <p>{{ course.name[0].value }}</p>
    </section>
    <a href="/#/createcourse">Create Course</a>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'all-courses',
  data () {
    return {
      msg: 'All Courses',
      courses: []
    }
  },
  created () {
    axios
    .get('http://cmsdev.localhost/university/courses?_format=hal_json')
    .then(response => {
      this.courses = response.data
    })
    .catch(({ message: error }) => {
      console.info(error)
    })
  }
}
</script>
