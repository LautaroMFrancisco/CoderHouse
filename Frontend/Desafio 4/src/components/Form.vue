<template>
  <div>
    <v-container fluid>
      <v-layout row wrap>
        <v-flex xs12 sm6 offset-sm3 mt-3>
          <h1>Add Product</h1>
        </v-flex>
        <v-flex xs12 sm6 offset-sm3 mt-3>
          <form ref="form" @submit.prevent="onSubmit()">
            <v-layout column>
              <v-flex>
                <v-text-field
                  v-model="nameValue"
                  name="name"
                  label="Name"
                  id="name"
                  type="name"
                  required
                ></v-text-field>
              </v-flex>
              <v-flex>
                <v-text-field
                  v-model="priceValue"
                  class="inputPrice"
                  name="price"
                  label="Price"
                  id="price"
                  type="number"
                  required
                ></v-text-field>
              </v-flex>
              <v-flex>
                <v-text-field
                  v-model="stockValue"
                  class="inputPrice"
                  name="stock"
                  label="Stock"
                  id="stock"
                  type="number"
                  required
                ></v-text-field>
              </v-flex>
              <v-flex>
                <v-select
                  :items="items"
                  label="Categories"
                  requiered
                  v-model="menuValue"
                ></v-select>
              </v-flex>
              <v-flex class="text-xs-center" mt-5>
                <v-btn color="pink" type="submit">Add Product</v-btn>
              </v-flex>
            </v-layout>
          </form>
        </v-flex>
      </v-layout>
    </v-container>
    <Table :data="product" />
  </div>
</template>

<script>
import Table from "./Table.vue";
export default {
  name: "Form",
  components: {
    Table,
  },
  data: () => ({
    nameValue: "",
    priceValue: "",
    stockValue: "",
    menuValue: "",
    product: [],
    items: ["Burges", "Pastas", "Sandiwchs", "Milanesas"],
  }),
  methods: {
    onSubmit() {
      this.product.push({
        name: this.nameValue,
        price: this.priceValue,
        stock: this.stockValue,
        menu: this.menuValue,
      });
      this.nameValue = "";
      this.priceValue = "";
      this.stockValue = "";
      this.menuValue = "";
    },
  },
};
</script>

<style scoped>
.inputPrice >>> input[type="number"] {
  -moz-appearance: textfield;
}
.inputPrice >>> input::-webkit-outer-spin-button,
.inputPrice >>> input::-webkit-inner-spin-button {
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
}
</style>
