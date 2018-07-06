import Vue from 'vue'
import Vuex from 'vuex'
import firebase from './../firebase'

Vue.use(Vuex)

export default new Vuex.Store(
  {
    state:
    {
      events: [],
      isAddEventDialogVisible: false
    },
    mutations:
    {
      ADD_EVENTS (state, events) {
        state.events = events
      },
      ADD_SINGLE_EVENT_MANUALLY (state, event) {
        state.events.push(event)
      },
      TOGGLE_IS_ADD_DIALOG_VISIBLE (state) {
        state.isAddEventDialogVisible = !state.isAddEventDialogVisible
      },
      REMOVE_EVENT (state, event) {
        var index = state.events.indexOf(event)
        state.events.splice(index, 1)
      }
    },
    actions:
    {
      fetchEventsFromServer (context) {
        // var events = []
        // firebase.database().ref('Events').once('value').then(snapshot => console.log(snapshot.val())).catch(err => console.log(err))
        firebase.database().ref('Events').once('value').then(snapshot => context.commit('ADD_EVENTS', snapshot.val())).catch(err => console.log(err))
        // context.commit('ADD_EVENTS', events)
      },
      pushEventsToServer (context) {
        firebase.database().ref('Events').set(this.state.events).then(() => console.log('События успешно загружены на сервер в БД')).catch(() => console.log('ОШИБКА при загрузке данных на сервер в БД'))
      },
      addSingleEventManually (context, event) {
        context.commit('ADD_SINGLE_EVENT_MANUALLY', event)
      },
      toggleIsAddEventDialogVisible (context) {
        context.commit('TOGGLE_IS_ADD_DIALOG_VISIBLE')
      },
      removeEvent (context, event) {
        context.commit('REMOVE_EVENT', event)
      }
    },
    getters:
    {
      events (state) {
        return state.events
      },
      isAddEventDialogVisible (state) {
        return state.isAddEventDialogVisible
      }
    }
  })
