<template>
  <v-container>
    <v-row>
      <v-col col="12">
        <v-card max-width="1000" class="mx-auto">
          <v-container>
            <v-row dense>
              <v-col v-for="(food, i) in cart" :key="i" cols="12">
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
                    <v-btn>
                      <v-icon color="pink" @click="deleteFood(food.id)"
                        >mdi-delete
                      </v-icon>
                    </v-btn>
                  </div>
                </v-card>
              </v-col>
              <v-col cols="12">
                <v-card color="black">
                  <div class="d-flex flex-no-wrap justify-space-between">
                    <v-card-text class="text-center font-weight-bold">
                      TOTAL: $ {{ this.$store.getters.total }}
                    </v-card-text>
                    <v-card-actions class="justify-right">
                      <v-btn color="pink"> Check Out </v-btn>
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
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Cart",
  data: () => ({
    selection: null,
  }),
  computed: {
    ...mapGetters(["cart"]),
  },

  methods: {
    ...mapActions(["setCart", "deleteProduct"]),

    cartProducts() {
      axios
        .get(
          `https://61b6bfeec95dd70017d40fec.mockapi.io/users/${this.$route.params.id}`
        )
        .then((response) => {
          this.setCart(response.data.cart);
        });
    },
    deleteFood(foodID) {
      axios
        .get("https://61b6bfeec95dd70017d40fec.mockapi.io/users")
        .then((response) => {
          const user = response.data.find(
            (user) => user.id === this.$route.params.id
          );
          const index = user.cart.findIndex((element) => element.id === foodID);
          this.$store.dispatch("deleteProduct", index);
          user.cart.splice(index, 1);
          axios
            .put(
              `https://61b6bfeec95dd70017d40fec.mockapi.io/users/${this.$route.params.id}`,
              user
            )
            .catch((err) => {
              console.log(err.response);
            });
        });
    },
  },

  mounted() {
    this.cartProducts();
  },
};
</script>
