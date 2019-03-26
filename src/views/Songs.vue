<template>
  <v-container fluid fill-height>
    <v-layout align-center justify-center>
      <v-flex>
        <h3 class="title">Recommend a song</h3>
        <v-form
          ref="form"
          v-model="valid"
          lazy-validation
        >
          <v-text-field
            v-model="artist"
            label="Artist"
            :rules="notEmptyRule"
            required
          ></v-text-field>
          <v-text-field
            v-model="title"
            label="Title"
            :rules="notEmptyRule"
            required
          ></v-text-field>
          <v-btn
            block
            depressed
            large
            class="mt-4"
            :disabled="!valid"
            @click="submitSong"
          >Save</v-btn>
        </v-form>
      </v-flex>
    </v-layout>
    <v-snackbar
      v-model="snackbar"
      :color="response.ok ? 'success' : 'error'"
    >
      {{ response.ok ? 'Thanks for the recommendation!' : 'Yikes, something went wrong.' }}
    </v-snackbar>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      artist: '',
      title: '',
      valid: false,
      notEmptyRule: [
        v => !!v || 'Cannot be empty'
      ],
      snackbar: false,
      response: {
        ok: true
      }
    }
  },
  methods: {
    async submitSong() {
      if (!this.artist || !this.title) {
        this.valid = false
        this.response.ok = false
        this.snackbar = true
        return false
      }
      let response = await fetch(`https://script.google.com/macros/s/${process.env.VUE_APP_SCRIPT_ID}/exec?Artist=${this.artist}&Title=${this.title}`)
      this.response.ok = response.ok
      this.snackbar = true
      this.artist = ''
      this.title = ''
    }
  }
}
</script>
