<template>
  
    <div id="app">
      <custom-header></custom-header>
      <main style="background-color: #f6f6f6">
        <router-view></router-view>
      </main>
    </div>
  
</template>

<script>
import CustomHeader from './components/CustomHeader'
import Vue from 'vue'
import store from './store'
import Vuetify from 'vuetify'

import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)

export default {
  name: 'app',
  store,
  components: {
    CustomHeader
  },
  beforeCreate () {
    this.$nextTick(() => this.$store.dispatch('fetchEventsFromServer'))
  },
  computed:
  {
    events () {
      return this.$store.getters.events
    }
  }
}
</script>

<style>
body {
  margin: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  
}

main {
  text-align: center;
  /* margin-top: 40px; */
}

header span {
  display: block;
  position: relative;
  font-size: 20px;
  line-height: 1;
  letter-spacing: .02em;
  font-weight: 400;
  box-sizing: border-box;
  padding-top: 16px;
}
</style>
