<template>
  <div>
    <v-container fluid>
      <v-layout row wrap>
        <v-flex class="text-center" xs12 sm6 offset-sm3 mt-3>
          <h1>Add New Product</h1>
        </v-flex>
        <v-flex xs12 sm6 offset-sm3 mt-3>
          <form ref="form" @submit.prevent>
            <v-layout column
              ><v-flex>
                <v-text-field
                  v-model="name"
                  name="name"
                  label="Name"
                  id="name"
                  type="name"
                  required
                ></v-text-field>
              </v-flex>
              <v-flex>
                <v-text-field
                  v-model="price"
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
                  v-model="details"
                  name="details"
                  label="Details"
                  id="details"
                  type="string"
                  required
                ></v-text-field>
              </v-flex>
              <v-flex>
                <v-text-field
                  v-model="image"
                  name="image"
                  label="Image"
                  id="image"
                  type="string"
                  required
                ></v-text-field>
              </v-flex>
              <v-row>
                <v-col xs="6">
                  <v-flex class="justify-center overflow-auto" mt-2>
                    <v-btn color="pink" type="submit" @click="addProd"
                      >Add Product</v-btn
                    >
                  </v-flex>
                </v-col>
              </v-row>
            </v-layout>
          </form>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Form",

  data: () => ({
    name: "",
    price: "",
    details: "",
    image: "",
    prodId: "",
    product: [],
  }),
  methods: {
    addProd() {
      const prod = {
        name: this.name,
        price: this.price,
        details: this.details,
        image: this.image,
      };
      axios({
        method: "post",
        url: "https://61b6bfeec95dd70017d40fec.mockapi.io/productos",
        data: prod,
      })
        .then((response) => {
          console.log(response.data);
        })
        .catch(function (error) {
          console.log(error);
        });
      this.name = "";
      this.details = "";
      this.price = "";
      this.image = "";
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
