<template>
  <div>
    <v-layout row wrap>
      <v-flex xs12 sm6 md4 lg3 v-for="food in products" :key="food.id">
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
            <v-btn color="pink " @click="addFood(food.id)"> Add To Cart </v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
const axios = require("axios");
import { mapGetters, mapActions } from "vuex";

function getUsers() {
  return axios.get("https://61b6bfeec95dd70017d40fec.mockapi.io/users");
}
function getProducts() {
  return axios.get("https://61b6bfeec95dd70017d40fec.mockapi.io/productos");
}

export default {
  name: "Products",
  data: function () {
    return {
      loading: false,
      selection: 1,
      id: this.$route.params.id,
    };
  },
  computed: {
    ...mapGetters(["products"]),
  },
  methods: {
    ...mapActions(["setProducts"]),
    addFood(prodID) {
      axios
        .all([getUsers(), getProducts()])
        .then(
          axios.spread((userResponse, productResponse) => {
            const dataUser = userResponse.data;
            const user = dataUser.find(
              (userID) => userID.id === this.$route.params.id
            );
            const dataProduct = productResponse.data;
            const product = dataProduct.findIndex(
              (productID) => productID.id === prodID
            );
            user.cart.push(dataProduct[product]);
            axios
              .put(
                `https://61b6bfeec95dd70017d40fec.mockapi.io/users/${this.$route.params.id}`,
                user
              )
              .then(() => {
                this.$swal(
                  "Successfully!",
                  "You have successfully added your product!",
                  "success"
                );
              })
              .catch((err) => {
                console.log(err.response);
              });
          })
        )
        .catch((err) => {
          console.log(err);
        });
    },
    allProducts() {
      axios({
        method: "get",
        url: "https://61b6bfeec95dd70017d40fec.mockapi.io/productos",
      }).then((response) => {
        this.setProducts(response.data);
      });
    },
  },

  mounted() {
    this.allProducts();
  },
};
</script>

<style scoped></style>
