<template>
  <div class="event">
    <v-layout>
        <v-flex lg2 xs2 sm2><h2>{{event.Time}}</h2></v-flex>
        <v-flex lg7 xs8 offset-xs1 sm9 offset-lg2><h3>{{event.Caption}}</h3></v-flex>
        <v-flex lg1><img src="./../assets/times-solid.svg" @click="removeClick"></v-flex>
    </v-layout>
    <v-layout>
      <v-flex lg3 xs3 sm3>{{event.Location}}</v-flex>
      <v-flex lg7 xs8 offset-xs1 sm8 offset-sm1 offset-lg1>{{event.Content}}</v-flex>
    </v-layout>
  </div>
</template>

<script>
import store from './../store'
import './../styles/place.scss'
export default {
  name: 'Event',
  store,
  props: {
    event: Object
  },
  methods: {
    removeClick: function () {
      // alert('removeClick')
      store.dispatch('removeEvent', this.event)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #35495E;
}
</style>
