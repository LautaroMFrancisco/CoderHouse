<template>
  <div>
    <v-spacer></v-spacer>
    <v-data-table
      :headers="headers"
      :items="products"
      item-key="id"
      class="elevation-1"
    >
      <template>
        <tr v-for="(prod, i) in products" :key="i">
          <td>{{ prod.id }}</td>
          <td>{{ prod.name }}</td>
          <td>{{ prod.price }}</td>
          <td>{{ prod.details }}</td>
        </tr>
      </template>
    </v-data-table>
  </div>
</template>

<script>
import axios from "axios";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "ProductsTable",
  data: () => ({
    selection: null,
  }),
  computed: {
    ...mapGetters(["products"]),
    headers() {
      return [
        { text: "ID", value: "id" },
        { text: "Name", value: "name" },
        { text: "Price", value: "price" },
        { text: "Details", value: "details" },
      ];
    },
  },
  methods: {
    ...mapActions(["setProducts"]),
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
