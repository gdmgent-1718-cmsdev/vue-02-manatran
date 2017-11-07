<template>
  <div class="hello">

    <h1>{{ msg }}</h1>

    <form action="POST" @submit.prevent="create">
      <label for="field_first_name">Instructor First Name:</label><br>
      <input id="field_first_name" name="field_first_name" placeholder="First Name" v-model="field_first_name">
      <br><br>
      <label for="name">Instructor Name:</label><br>
      <input id="name" name="name" placeholder="Name" v-model="name">
      <br><br>
      <label for="field_academic_">Academic Title:</label><br>
      <select id="field_academic_" name="field_academic_" placeholder="Academic Title" v-model="field_academic_">
        <option>title_5-0</option>
        <option>title_6-0</option>
        <option>title_6-1</option>
        <option>title_7-1</option>
        <option>title_7-2</option>
        <option>title_8-0</option>
      </select>
      <br><br>
      <label for="field_academic_ranking">Academic Ranking:</label><br>
      <select id="field_academic_ranking" name="field_academic_ranking" placeholder="Academic Ranking" v-model="field_academic_ranking">
        <option>rank_0</option>
        <option>rank_1</option>
        <option>rank_2</option>
        <option>rank_3</option>
        <option>rank_4</option>
      </select>
      <br><br>
      <input type="submit" value="Create Instructor">
    </form>

  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'create-instructor',
  data () {
    return {
      msg: 'Create Instructor',
      name: '',
      field_first_name: '',
      field_academic_: 'title_7-1',
      field_academic_ranking: 'rank_3'
    }
  },
  methods: {
    create: function () {
      axios
        .post('http://cmsdev.localhost/entity/instructor',
        {
          '_links': {
            'type': {
              'href': 'http://cmsdev.localhost/rest/type/instructor/instructor'
            }
          },
          'name': {
            'value': this.name
          },
          'field_first_name': {
            'value': this.field_first_name
          },
          'field_academic_ranking': {
            'value': this.field_academic_ranking
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
