<template>
  <div>
    <v-layout row wrap>
      <v-flex xs12 sm6 md4 lg3 v-for="food in product" :key="food.id">
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
        </v-card>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
const axios = require("axios");

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
    ...mapGetters(["product"]),
  },

  methods: {
    ...mapActions(["getProducts"]),

    allProducts() {
      axios({
        method: "get",
        url: "https://61b6bfeec95dd70017d40fec.mockapi.io/productos",
      }).then((response) => {
        this.getProducts(response.data);
      });
    },
  },
  mounted() {
    this.allProducts();
  },
};
</script>

<style scoped></style>
