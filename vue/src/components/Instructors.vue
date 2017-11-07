<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <section v-for="instructor in instructors">
      <p>{{ instructor.field_first_name[0].value }} {{ instructor.name[0].value }}</p>
    </section>
    <a href="/#/createinstructor">Create Instructor</a>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'all-instructors',
  data () {
    return {
      msg: 'All Instructors',
      instructors: []
    }
  },
  created () {
    axios
    .get('http://cmsdev.localhost/university/instructors?_format=hal_json')
    .then(response => {
      this.instructors = response.data
    })
    .catch(({ message: error }) => {
      console.info(error)
    })
  }
}
</script>
