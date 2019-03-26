<template>
  <v-app id="app" :class="{ 'mock-mobile elevation-4 my-5 mx-auto' : isDesktop }">
    <v-toolbar flat :app="!isDesktop">
      <v-layout justify-space-between align-center>
        <v-btn icon to="/details">
          <v-icon>place</v-icon>
        </v-btn>
        <v-btn icon to="/">
          <v-icon>whatshot</v-icon>
        </v-btn>
        <v-btn icon to="/activities">
          <v-icon>date_range</v-icon>
        </v-btn>
      </v-layout>
    </v-toolbar>
    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>
export default {
  computed: {
    isDesktop() {
      if (this.$vuetify.breakpoint.name !== 'xs') return true
      return false
    }
  }
}
</script>
