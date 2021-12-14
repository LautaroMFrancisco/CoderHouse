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
import axios from "axios";

export default {
  name: "Cart",
  data: () => ({
    selection: null,
    foods: [],
  }),
  mounted() {
    axios({
      method: "get",
      url: `https://61b6bfeec95dd70017d40fec.mockapi.io/users/${this.$route.params.id}`,
    }).then((response) => {
      this.foods = response.data.cart;
    });
  },
};
</script>
