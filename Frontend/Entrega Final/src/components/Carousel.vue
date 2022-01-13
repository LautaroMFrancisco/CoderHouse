<template>
  <v-carousel cycle height="700" hide-delimiter-background show-arrows-on-hover>
    <v-carousel-item v-for="(item, i) in items" :key="i" :src="item.src">
    </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  name: "Carousel",
  data: () => ({
    items: [
      {
        src: "https://i.imgur.com/0gqrXBM.jpeg",
      },
      {
        src: "https://i.imgur.com/79BnfAi.jpeg",
      },
      {
        src: "https://i.imgur.com/xsO3V36.png",
      },
      {
        src: "https://i.imgur.com/aTpbyNd.png",
      },
    ],
  }),
};
</script>
<style scoped></style>
