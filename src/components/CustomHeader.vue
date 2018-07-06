<template>
  <header>
    <v-container>
      <v-layout>
        <v-flex lg2>
          <img src="./../assets/logo.png">
        </v-flex>
      </v-layout>
      <v-layout>
        <v-flex lg7 offset-lg5>
          <h1>
            Друзья, мои походы пока ещё  не закончились, делюсь с вами!
          </h1>
        </v-flex>
      </v-layout>
      <v-layout>
        <v-flex lg2>
          <v-btn color="green" :block="true" @click="addButtonClick">Событие +</v-btn>
        </v-flex>
        <v-flex lg2>
          <v-btn :block="true" @click="updateButtonClick">Обновить</v-btn>
        </v-flex>
      </v-layout>
    </v-container>
    <event-add-dialog :showDialog="isDialogVisible"></event-add-dialog>
  </header>
</template>

<script>
import './../styles/customHeader.scss'

import Vue from 'vue'
import store from './../store'
import Vuetify from 'vuetify'
import EventAddDialog from './EventAddDialog'

import 'vuetify/dist/vuetify.min.css'
Vue.use(Vuetify)

export default {
  store,
  components: {
    EventAddDialog
  },
  methods: {
    addButtonClick: function () {
      store.dispatch('toggleIsAddEventDialogVisible')
    },
    updateButtonClick: function () {
      // alert('updateButtonClick')
      store.dispatch('pushEventsToServer')
    }
  },
  computed: {
    isDialogVisible: function () {
      return this.$store.getters.isAddEventDialogVisible
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
