<template>
  <v-carousel hide-delimiters style="height: 320px">
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
      reverse-transition="fade"
      transition="fade"
    ></v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          src:
            'https://i1.wp.com/pinaygadabout.com/wp-content/uploads/2016/10/IMG_0247.jpg'
        },
        {
          src:
            'https://www.movenpick.com/fileadmin/files/Hotels/Philippines/Cebu_Resort/Upload_August_21st/Movenpick_Cebu_17_.jpg'
        },
        {
          src:
            'https://i.redd.it/s1guz02t3foz.jpg'
        },
        {
          src:
            'https://scontent-lga3-1.cdninstagram.com/vp/4cadf4d32cdd4938ff7123ef15a031f9/5C55A949/t51.2885-15/e35/41848924_283774592462136_8549585404281132853_n.jpg'
        }
      ]
    }
  }
}
</script>
