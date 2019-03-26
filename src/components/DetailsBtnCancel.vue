<template>
  <v-dialog v-model="dialog" max-width="480">
    <v-btn slot="activator" icon large outline color="error"><v-icon>clear</v-icon></v-btn>
    <v-img src="https://media.giphy.com/media/91yVUkHqyB4yY/giphy.gif">
    </v-img>
  </v-dialog>
</template>

<script>
  export default {
    data () {
      return {
        dialog: false
      }
    }
  }
</script>
