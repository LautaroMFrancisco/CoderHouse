<template>
  <v-container>
    <v-row>
      <v-col col="12">
        <v-card max-width="1000" class="mx-auto">
          <v-container>
            <v-row dense>
              <v-col v-for="(food, i) in foods" :key="i" cols="12">
                <v-card color="black">
                  <div class="d-flex flex-no-wrap justify-space-between">
                    <div>
                      <v-card-title
                        class="headline text-no-wrap"
                        v-text="food.name"
                      ></v-card-title>
                      <v-divider class="15"></v-divider>
                      <v-card-subtitle v-text="food.details"></v-card-subtitle>
                    </div>

                    <v-card-text class="text-right font-weight-bold">
                      $ {{ food.price }}
                    </v-card-text>
                    <v-avatar class="ma-3" size="125" tile>
                      <v-img :src="food.image"></v-img>
                    </v-avatar>
                  </div>
                </v-card>
              </v-col>
              <v-col cols="12">
                <v-card color="black">
                  <div class="d-flex flex-no-wrap justify-space-between">
                    <v-card-text class="text-center font-weight-bold">
                      TOTAL: $
                    </v-card-text>
                    <v-card-actions class="justify-right">
                      <v-btn color="pink "> Check Out </v-btn>
                    </v-card-actions>
                  </div>
                </v-card>
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Cart",
  data: () => ({
    selection: null,
    foods: [
      {
        id: 1,
        name: "Double Bacon Cheeseburger ",
        price: 600,
        details: "Double Burger 200g Double Cheddar And Bacon",
        image: "https://i.imgur.com/DGcP3vn.png",
        stock: 5,
      },
      {
        id: 2,
        name: "Triple Bacon Cheeseburger",
        price: 800,
        details: "Triple Burger 200g Triple Cheddar Bacon Tomatoes And Lettuce",
        image: "https://i.imgur.com/Oht8daZ.png",
        stock: 2,
      },
      {
        id: 3,
        name: "Simple Burger With Cheddar",
        price: 350,
        details: "Burger 100g with Cheddar",
        image: "https://i.imgur.com/yQWaE8C.png",
        stock: 7,
      },
      {
        id: 4,
        name: "Mandible Destroyer",
        price: 1200,
        details: "Quintuple Burger With Cheddar",
        image: "https://i.imgur.com/73ZiW3h.png",
        stock: 3,
      },
    ],
  }),
};
</script>
