<template>
  <div class="text-xs-center">
    <v-bottom-sheet v-model="sheet">
      <v-btn slot="activator" icon outline color="info"><v-icon>more_vert</v-icon></v-btn>
      <v-list>
        <v-subheader>Resources</v-subheader>
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
  </div>
</template>

<script>
  export default {
    data: () => ({
      sheet: false,
      tiles: [
        { icon: 'hotel', title: 'Airbnb', url: ''},
        { icon: 'domain', title: 'Hotels', url: ''},
        { icon: 'local_taxi', title: 'Grab', url: ''},
        { icon: 'directions_walk', title: 'Activities', url: '' }
      ]
    })
  }
</script>