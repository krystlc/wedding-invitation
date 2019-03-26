<template>
  <v-container fluid fill-height class="rsvp">
    <v-layout column>
      <v-layout row>
        <v-flex>
          <v-card>
            <v-responsive>
              <details-carousel/>
            </v-responsive>
            <v-card-title class="py-1">
              <h3 class="subheadline mb-0">Cebu, 2019/02/16</h3>
              <v-spacer></v-spacer>
              <v-btn icon @click="show = !show">
                <v-icon color="error" style="font-size:36px">more_horiz</v-icon>
              </v-btn>
            </v-card-title>
            <v-slide-y-transition>
              <v-card-text v-show="show">
                <h3 class="mt-0">About The Event</h3>
                <p>Escape the winter with us! Eloped couple looking to share their wedding ceremony with family and close friends in Cebu, Philippines!</p>
                <p>Jokes aside, we're holding the wedding ceremony and reception at
                  <strong>Mövenpick Hotel Mactan</strong> in Cebu on
                  <strong class="text--red">Saturday, February 16, 2019.</strong> After that, we'll go island hopping around Cebu and/or Palawan for a few days!
                </p>
              </v-card-text>
            </v-slide-y-transition>
          </v-card>
        </v-flex>
      </v-layout>
      <v-layout row align-start justify-center class="action py-3">
        <v-btn color="info" flat icon href="https://goo.gl/maps/WyuUS44o8j42" target="_blank">
          <v-icon>near_me</v-icon>
        </v-btn>
        <details-btn-cancel/>
        <details-btn-more/>
        <v-btn icon large fab outline color="success" disabled @click.native.stop="openRsvpForm">
          <v-icon>favorite</v-icon>
        </v-btn>
        <details-btn-schedule/>
      </v-layout>
      <rsvp-form/>
    </v-layout>
  </v-container>
</template>

<script>
import DetailsCarousel from "@/components/DetailsCarousel";
import RsvpForm from "@/components/RsvpForm";
import DetailsBtnMore from "@/components/DetailsBtnMore";
import DetailsBtnCancel from "@/components/DetailsBtnCancel";
import DetailsBtnSchedule from "@/components/DetailsBtnSchedule";

export default {
  components: {
    DetailsCarousel,
    RsvpForm,
    DetailsBtnMore,
    DetailsBtnCancel,
    DetailsBtnSchedule
  },
  data() {
    return {
      show: false
    };
  },
  methods: {
    openRsvpForm() {
      this.$store.state.showRsvp = true;
    }
  }
};
</script>
