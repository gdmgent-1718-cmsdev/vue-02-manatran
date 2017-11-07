<template>
  <div class="hello">

    <h1>{{ msg }}</h1>

    <form action="POST" @submit.prevent="create">
      <label for="field_first_name">Student First Name:</label><br>
      <input id="field_first_name" name="field_first_name" placeholder="First Name" v-model="field_first_name">
      <br><br>

      <label for="name">Student Name:</label><br>
      <input id="name" name="name" placeholder="Name" v-model="name">
      <br><br>
      <input type="submit" value="Create Student">
    </form>

  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'create-student',
  data () {
    return {
      msg: 'Create Student',
      name: '',
      field_first_name: ''
    }
  },
  methods: {
    create: function () {
      axios
        .post('http://cmsdev.localhost/entity/student',
        {
          '_links': {
            'type': {
              'href': 'http://cmsdev.localhost/rest/type/student/student'
            }
          },
          'name': {
            'value': this.name
          },
          'field_first_name': {
            'value': this.field_first_name
          }
        },
        {
          auth: {
            username: 'admin',
            password: 'secret'
          },
          'headers': {
            'Accept': 'application/hal+json',
            'Content-Type': 'application/hal+json',
            'X-CSRF-Token': 'kVoRDNFRpoNTAKHXoLle58r0LXFibDfLPyZmMmXWCGQ'
          }
        }).then(function (response) {
          console.log(response)
        })
        .catch(function (error) {
          console.log(error)
        })
    }
  }
}
</script>
