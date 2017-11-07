<template>
  <div class="hello">

    <h1>{{ msg }}</h1>

    <form action="POST" @submit.prevent="create">
      <label for="name">Course Name:</label><br>
      <input id="name" name="name" placeholder="Name" v-model="name">
      <br><br>

      <label for="name">Institution Name:</label><br>
      <input id="field_institution" name="field_institution" v-model="field_institution">
      <br><br>
      <input type="submit" value="Create Course">
    </form>

  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'create-course',
  data () {
    return {
      msg: 'Create Course',
      name: '',
      field_institution: 'Arteveldehogeschool'
    }
  },
  methods: {
    create: function () {
      axios
        .post('http://cmsdev.localhost/entity/course',
        {
          '_links': {
            'type': {
              'href': 'http://cmsdev.localhost/rest/type/course/course'
            }
          },
          'name': {
            'value': this.name
          },
          'field_institution': {
            'value': this.field_institution
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
