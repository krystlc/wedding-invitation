<template>
    <v-dialog v-model="dialog" persistent max-width="290">
      <v-card>
        <v-card-title>
          <span class="headline">RSVP</span>
        </v-card-title>
        <v-card-text>
          <v-form
            ref="form"
            v-model="valid"
            lazy-validation
          >
            <v-text-field 
              label="Name"
              v-model="rsvp.name"
              :rules="notEmptyRule"
              required
            ></v-text-field>
            <v-text-field
              label="Email"
              v-model="rsvp.email"
              hint="To receive updates."
              persistent-hint
            ></v-text-field>
            <v-checkbox
              v-model="rsvp.plus"
              label="+1"
            ></v-checkbox>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn flat @click.native="close">Close</v-btn>
          <v-btn color="success" flat @click.native="handleRSVP" :disabled="!valid || rsvp.edit === false">RSVP</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
</template>

<script>
export default {
  data() {
    return {
      valid: false,
      notEmptyRule: [
        v => !!v || 'Cannot be empty'
      ]
    }
  },
  computed: {
    rsvp() {
      return this.$store.state.rsvp
    },
    dialog() {
      return this.$store.state.showRsvp
    }
  },
  methods: {
    handleRSVP() {
      const obj = {
        name: this.rsvp.name,
        email: this.rsvp.email,
        plus: this.rsvp.plus
      }
      if (!obj.name) {
        this.valid = false
        return false
      }
      this.$store.dispatch('submitRsvp', obj)
      this.$emit('trigger')
      this.close()
    },
    close() {
      this.$store.state.showRsvp = false
    }
  }
}
</script>