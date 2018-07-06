<template>
  <div class="date-section">
    <v-layout>
      <v-flex xl2 lg2 md3 sm3 xs5>
        <h1>
          {{this.date}}
        </h1>
      </v-flex>
    </v-layout>
    <event v-for="event in events" :event="event"></event>
  </div>
</template>

<script>
import Event from './Event'
export default {
  name: 'DateSection',
  components: {
    Event
  },
  props: {
    date: Object
  },
  computed: {
    events () {
      var events = []
      for (var i = 0; i < this.$store.getters.events.length; i++) {
        if (this.$store.getters.events[i].Date === this.date) {
          events.push(this.$store.getters.events[i])
        }
      }
      return events
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
