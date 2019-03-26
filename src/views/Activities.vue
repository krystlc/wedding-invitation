<template>
  <v-container>
    <v-layout row wrap>
      <v-flex>
        <h3 class="headline">Activities</h3>
        <v-layout>
          <v-flex>
            <p>The following are day-long activities we can start doing the day after the wedding.
            Prices are based on groups of 12 people or more.</p>
          </v-flex>
          <v-flex xs3>
            <v-select
              :items="['USD','PHP','YEN','WON']"
              label="Select currency"
              v-model="currency"
              light
              solo
            ></v-select>
          </v-flex>
        </v-layout>
        <v-card v-for="activity in activities" :key="activity['.key']" class="mb-2">
          <v-layout>
            <v-flex>
              <v-img
                :src="activity.ImageURL"
                height="180"
              ></v-img>
            </v-flex>
            <v-flex xs7>
              <v-card-title>
                <div>
                  <div><strong>{{ activity.Title }}</strong></div>
                  <p>{{ activity.Hours }}</p>
                  <small class="text-uppercase">Per person</small>
                  <h2 class="display-1">{{ sign }}{{ activity[currency] }}</h2>
                </div>
              </v-card-title>
            </v-flex>
          </v-layout>
          <v-divider></v-divider>
          <v-card-actions>
            <v-btn depressed small :color="activities.includes(activity['.key']) ? 'primary' : 'error'" @click="addLike(activity['.key'], activity.Likes)">
              <v-icon left dark small>favorite</v-icon>
              {{ activity.Likes }}
            </v-btn>
            <v-spacer></v-spacer>
            <v-btn color="info" small dense flat :href="activity.URL" target="_blank">Read more</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { db } from '../main'

export default {
  data() {
    return {
      activities: [],
      currency: 'USD',
      liked: []
    }
  },
  computed: {
    sign() {
      switch (this.currency) {
        case 'USD':
          return '$'
        case 'PHP':
          return '₱'
        case 'YEN':
          return '¥'
        case 'WON':
          return '₩'
      }
    }
  },
  firestore() {
    return {
      activities: db.collection('activities').orderBy('Likes', 'desc')
    }
  },
  methods: {
    addLike(id, num) {
      let add = 1
      const index = this.liked.indexOf(id)
      if (index > -1) {
        this.liked.splice(index, 1)
        add *= -1
      } else {
        this.liked.push(id)
      }
      db.collection('activities').doc(id).update({
        Likes: num + add
      })
    }
  }
}
</script>
