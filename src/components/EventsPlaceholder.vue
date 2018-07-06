<template>
  <div class="events-placeholder">
    <v-container>
      <date-section v-for='date in this.dates' :date="date"></date-section>
    </v-container>
  </div>
</template>

<script>
import DateSection from './DateSection'
export default {
  name: 'EventsPlaceholder',
  components: {
    DateSection
  },
  computed: {
    dates () {
      var dates = []
      for (var i = 0; i < this.$store.getters.events.length; i++) {
        if (!dates.includes(this.$store.getters.events[i].Date)) {
          dates.push(this.$store.getters.events[i].Date)
        }
      }
      return dates
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
