<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <section v-for="student in students">
      <p>{{ student.field_first_name[0].value }} {{ student.name[0].value }}</p>
    </section>
    <a href="/#/createstudent">Create Student</a>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'all-students',
  data () {
    return {
      msg: 'All Students',
      students: []
    }
  },
  created () {
    axios
    .get('http://cmsdev.localhost/university/students?_format=hal_json')
    .then(response => {
      this.students = response.data
    })
    .catch(({ message: error }) => {
      console.info(error)
    })
  }
}
</script>
