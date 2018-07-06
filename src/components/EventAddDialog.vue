<template>

  <v-dialog id="add-event-dialog" v-model="showDialog" persistent max-width="500px" v-show="showDialog">
    <v-container grid-list-md>
      <v-layout wrap>
        <v-flex xl12 lg12 md12>
          <v-text-field label="Событие" v-model="placeToAdd.Caption" required="true"></v-text-field>
        </v-flex>
      </v-layout>
      <v-layout wrap>
        <v-flex xl7 lg7 md7>
          <v-text-field label="Место" v-model="placeToAdd.Location" required="true"></v-text-field>
        </v-flex>
        <v-flex xl1 lg1 md1>
          <v-btn id="mapBtn" fab="true" block="true" width="30px" height="30px" @click="mapClick">
            <img src="./../assets/gotoMap.png" width="30px" height="30px">
          </v-btn>
        </v-flex>
        <v-flex lg4 md4>
          <v-text-field label="Время" v-model="placeToAdd.Time" required="true"></v-text-field>
        </v-flex>
      </v-layout>
      <v-layout>
        <v-flex xl12 lg12 md12>
          <v-textarea id="description" label="Описание" v-model="placeToAdd.Content" required="true"></v-textarea>
        </v-flex>
      </v-layout>
      <v-layout>
        <v-flex xl7 lg7 md7>
          <b-form-checkbox id="checkbox1"
                     v-model="placeToAdd.isImportant"
                     value="accepted"
                     unchecked-value="not_accepted">
            Пометить событие как важное
          </b-form-checkbox>
        </v-flex>
        <v-flex xl3 lg3 md3>
          <b-button id="apply" @click="applyClick">Готово</b-button>
        </v-flex>
        <v-flex xl3 lg3 md3>
          <b-button id="cancel" @click="cancelClick">Удалить</b-button>
        </v-flex>
      </v-layout>
    </v-container>
  </v-dialog>

<!--
  <div id="add-event-dialog" v-show="showDialog">
    <v-container>
      <v-layout>
        <v-flex xl6 lg6 md12 sm12 xs12>
          <h1>ВОТ ТУТ ВСЁ СОДЕРЖИМОЕ ДИАЛОГА</h1>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
-->
</template>

<script>
import Vue from 'vue'
import store from './../store'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './../styles/eventAddDialog.scss'

Vue.use(BootstrapVue)
export default {
  name: 'EventAddDialog',
  store,
  data: function () {
    return {
      placeToAdd: {
        Caption: '',
        Content: '',
        Date: '',
        Location: '',
        Time: '',
        isImportant: false
      },
      tmpDate: ''
    }
  },
  props: {
    showDialog: Boolean
  },
  mounted () {
    if (!Object.keys(this.$store.getters.currentEditingEvent).length === 0) {
      alert('this.$store.getters.currentEditingEvent is NOT empty')
      // this.placeToAdd = this.$store.getters.currentEditingEvent
      Object.assign(this.placeToAdd, this.$store.getters.currentEditingEvent)
    }
  },
  methods: {
    mapClick: function () {
      alert('map clicked')
    },
    applyClick: function () {
      // alert('add place pressed')
      var monthNames = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря']
      this.tmpDate = new Date()
      this.placeToAdd.Date = this.tmpDate.toString().slice(8, 10) + ' ' + monthNames[this.tmpDate.getMonth()]
      if (this.placeToAdd.isImportant === 'accepted') {
        this.placeToAdd.isImportant = true
      }
      if (this.placeToAdd.isImportant === 'not_accepted') {
        this.placeToAdd.isImportant = false
      }
      var tmpPlace = {}
      Object.assign(tmpPlace, this.placeToAdd)
      this.$nextTick().then(() => store.dispatch('addSingleEventManually', tmpPlace))
      // store.dispatch('addSingleEventManually', this.placeToAdd)
      // store.dispatch('toggleIsAddEventDialogVisible')
      this.cancelClick()
    },
    cancelClick: function () {
      this.placeToAdd.Caption = ''
      this.placeToAdd.Content = ''
      this.placeToAdd.Date = ''
      this.placeToAdd.Location = ''
      this.placeToAdd.Time = ''
      this.placeToAdd.isImportant = false
      store.dispatch('toggleIsAddEventDialogVisible')
      store.dispatch('clearCurrentEditingElement')
    }
  }
}
</script>

</style>
