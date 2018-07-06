<template>
  <div class="event" v-touch:swipe.left="swipeLeftHandler" v-touch:swipe.right="swipeRightHandler">
    <v-layout>
        <v-flex lg2 xs2 sm2><h2>{{event.Time}}</h2></v-flex>
        <v-flex lg7 xs8 offset-xs1 sm9 offset-lg2><h3>{{event.Caption}}</h3></v-flex>
        <v-flex lg1><img src="./../assets/times-solid.svg" @click="removeClick"></v-flex>
    </v-layout>
    <v-layout>
      <v-flex lg3 xs3 sm3>{{event.Location}}</v-flex>
      <v-flex lg7 xs8 offset-xs1 sm8 offset-sm1 offset-lg1>{{event.Content}}</v-flex>
    </v-layout>
    <!--
    <v-layout>
      <v-flex xl12 lg12 md12 sm12 xs12>
        <span v-touch:swipe.left="swipeHandler">Swipe Here</span>
      </v-flex>
    </v-layout>
    -->
  </div>
</template>

<script>
import store from './../store'
import Vue from 'vue'
import Vue2TouchEvents from 'vue2-touch-events'
import './../styles/place.scss'
Vue.use(Vue2TouchEvents)
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
    },
    swipeLeftHandler: function () {
      // alert('swipeHandler')
      store.dispatch('setCurrentEditingEvent', this.event)
      store.dispatch('toggleIsAddEventDialogVisible')
    },
    swipeRightHandler: function () {
      this.removeClick()
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
