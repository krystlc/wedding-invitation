import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    rsvp: {
      name: '',
      email: '',
      plus: false,
      edit: true
    },
    showRsvp: false,
    songs: [],
    success: false
  },
  mutations: {
    editRsvp(state) {
      state.rsvp.edit = false
    },
    greatSuccess(state) {
      state.success = true
    }
  },
  actions: {
    async submitRsvp({commit}, data) {
      commit('editRsvp')
      commit('greatSuccess')
      let response = await fetch(`https://script.google.com/macros/s/${process.env.VUE_APP_SCRIPT_ID}/exec?Name=${data.name}&Email=${data.email}&Plus=${data.plus}`)
      // eslint-disable-next-line
      console.log(response)
    }
  }
})
