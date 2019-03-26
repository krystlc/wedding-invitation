<template>
  <v-container fluid fill-height class="match">
    <v-layout column align-space-between justify-center>
      <v-slide-y-transition>
        <v-layout align-center column justify-end class="white--text" v-show="show">
          <h1 class="cursive-title">It's a Wedding!</h1>
          <h3 class="subheading">Loren and Alex are getting married!</h3>
        </v-layout>
      </v-slide-y-transition>
      <v-layout row align-center justify-space-around>
        <v-slide-x-transition>
          <v-avatar size="128" v-show="show">
            <img src="../assets/loren.jpg" alt="Loren">
          </v-avatar>
        </v-slide-x-transition>
        <v-slide-x-reverse-transition>
          <v-avatar size="128" v-show="show">
            <img src="../assets/alex.jpg" alt="Alex">
          </v-avatar>
        </v-slide-x-reverse-transition>
      </v-layout>
      <v-slide-y-reverse-transition>
        <v-layout column align-center justify-center px-4 class="action" v-show="show">
          <v-btn depressed outline round dark large disabled @click.native.stop="openRsvpForm">
            <v-icon left>person_add</v-icon>RSVP open until 11/30
          </v-btn>
          <v-btn depressed round dark large to="/details">
            <v-icon left>not_listed_location</v-icon>Get event details
          </v-btn>
          <v-btn depressed outline round dark large to="/activities">
            <v-icon left>date_range</v-icon>Post Wedding Activities
          </v-btn>
        </v-layout>
      </v-slide-y-reverse-transition>
      <v-slide-y-reverse-transition>
        <v-layout column align-center justify-center v-show="show">
          <v-bottom-sheet v-model="sheet">
            <v-btn slot="activator" flat dark>
              <v-icon left>redeem</v-icon>Wedding Registry
            </v-btn>
            <v-list>
              <v-subheader>Thanks!</v-subheader>
              <v-list-tile
                v-for="tile in tiles"
                :key="tile.title"
                @click="sheet = false"
                :href="tile.url"
                target="_blank"
              >
                <v-list-tile-avatar>
                  <v-avatar size="32px" tile>
                    <v-icon>{{ tile.icon }}</v-icon>
                  </v-avatar>
                </v-list-tile-avatar>
                <v-list-tile-title>{{ tile.title }}</v-list-tile-title>
              </v-list-tile>
            </v-list>
          </v-bottom-sheet>
        </v-layout>
      </v-slide-y-reverse-transition>
      <rsvp-form/>
    </v-layout>
  </v-container>
</template>

<script>
import RsvpForm from "@/components/RsvpForm";

export default {
  components: { RsvpForm },
  data() {
    return {
      show: false,
      sheet: false,
      tiles: [
        {
          icon: "redeem",
          title: "Amazon Gift Registry",
          url: process.env.VUE_APP_REGISTRY_URL
        },
        {
          icon: "attach_money",
          title: "Paypal Gift Registry",
          url: process.env.VUE_APP_MONEY_POOL
        }
      ]
    };
  },
  mounted() {
    this.show = true;
  },
  methods: {
    openRsvpForm() {
      this.$store.state.showRsvp = true;
    }
  }
};
</script>
