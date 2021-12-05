<template>
  <v-layout row wrap>
    <v-flex xs12 sm6 md4 lg3 v-for="food in foods" :key="food.id">
      <v-card :loading="loading" class="mx-auto my-12" max-width="374">
        <template slot="progress">
          <v-progress-linear
            color="deep-purple"
            height="10"
            indeterminate
          ></v-progress-linear>
        </template>
        <v-img height="250" :src="food.image"></v-img>

        <v-card-title>{{ food.name }}</v-card-title>

        <v-card-text>
          <div class="my-4 text-subtitle-1">$ {{ food.price }}</div>

          <div>
            {{ food.details }}
          </div>
        </v-card-text>

        <v-divider class="mx-4"></v-divider>

        <v-card-actions class="justify-center">
          <v-btn color="pink "> Add To Cart </v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: "Products",
  data: () => ({
    loading: false,
    selection: 1,
    foods: [
      {
        id: 1,
        name: "Double Bacon Cheeseburger ",
        price: 600,
        details: "Double Burger 200g Double Cheddar And Bacon",
        image: "https://i.imgur.com/DGcP3vn.png",
      },
      {
        id: 2,
        name: "Triple Bacon Cheeseburger",
        price: 800,
        details: "Triple Burger 200g Triple Cheddar Bacon Tomatoes And Lettuce",
        image: "https://i.imgur.com/Oht8daZ.png",
      },
      {
        id: 3,
        name: "Simple Burger With Cheddar",
        price: 350,
        details: "Burger 100g with Cheddar",
        image: "https://i.imgur.com/yQWaE8C.png",
      },
      {
        id: 4,
        name: "Mandible Destroyer",
        price: 1200,
        details: "Quintuple Burger With Cheddar",
        image: "https://i.imgur.com/73ZiW3h.png",
      },
    ],
  }),
};
</script>

<style scoped></style>
