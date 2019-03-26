<template>
  <v-dialog v-model="dialog" max-width="480">
    <v-btn slot="activator" flat icon color="info">
      <v-icon>schedule</v-icon>
    </v-btn>
    <v-card xs8>
      <v-list three-line>
        <template v-for="(item, index) in items">
          <v-subheader v-if="item.header" :key="item.header">{{ item.header }}</v-subheader>
          <v-divider v-else-if="item.divider" :inset="item.inset" :key="index"></v-divider>
          <v-list-tile v-else :key="item.title" avatar>
            <v-list-tile-avatar>
              <v-icon>{{ item.action }}</v-icon>
            </v-list-tile-avatar>
            <v-list-tile-content>
              <v-list-tile-title v-html="item.title"></v-list-tile-title>
              <v-list-tile-sub-title v-html="item.subtitle"></v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
        </template>
      </v-list>
      <v-divider></v-divider>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn flat @click.native="dialog = false">Close</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
      items: [
        { header: "Wedding Event" },
        {
          action: "flight_land",
          title: "Thursday &mdash;",
          subtitle: "<strong>Mactan–Cebu International Airport (CEB)</strong>. Alex and Loren will be in Cebu Thursday."
        },
        { divider: true, inset: true },
        {
          action: "wc",
          title: "Saturday &mdash;",
          subtitle:
            "<strong>Mövenpick Hotel Mactan</strong>. Ceremony starts at <strong>16:00 GMT+8</strong> and Reception at <strong>18:00 GMT+8</strong>"
        },
        { divider: true, inset: false },
        { header: "Post Wedding Activities (Optional)" },
        {
          action: "beach_access",
          title: "Sunday &mdash;",
          subtitle:
            "We'll go to Oslob to swim with whale sharks!"
        },
        {
          action: "beach_access",
          title: "Monday &mdash;",
          subtitle:
            "Island hopping in Mactan."
        },
        {
          action: "beach_access",
          title: "Tuesday &mdash;",
          subtitle:
            "Pescador Island and waterfalls."
        },
        { divider: true, inset: false },
        { header: "Departure" },
        {
          action: "flight_takeoff",
          title: "Wednesday &mdash;",
          subtitle:
            "Departing from either <strong>CEB</strong>."
        }
      ]
    };
  }
};
</script>
