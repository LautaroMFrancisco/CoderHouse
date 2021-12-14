<template>
  <div>
    <v-container fluid>
      <v-layout row wrap>
        <v-flex class="text-center" xs12 sm6 offset-sm3 mt-3>
          <h1>ABM</h1>
        </v-flex>
        <v-flex xs12 sm6 offset-sm3 mt-3>
          <form ref="form" @submit.prevent>
            <v-layout column>
              <v-flex>
                <v-text-field
                  v-model="prodId"
                  name="id"
                  label="Solo para Editar / Borrar Ingresar ID del producto Deseado"
                  id="id"
                  type="number"
                  class="inputPrice"
                  @input="autoComplete"
                ></v-text-field> </v-flex
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
                  <v-flex class="text-xs-center" mt-2>
                    <v-btn color="pink" type="submit" @click="addProd"
                      >Add Product</v-btn
                    >
                  </v-flex></v-col
                ><v-col xs="6">
                  <v-flex class="text-xs-center" mt-2>
                    <v-btn color="pink" type="submit" @click="deleteProd"
                      >Delete Product</v-btn
                    >
                  </v-flex> </v-col
                ><v-col xs="6">
                  <v-flex class="text-xs-center" mt-2>
                    <v-btn color="pink" type="submit" @click="updateProd"
                      >Update Product</v-btn
                    >
                  </v-flex></v-col
                >
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
    },
    updateProd() {
      axios
        .get("https://61b6bfeec95dd70017d40fec.mockapi.io/productos")
        .then((response) => {
          const prod = response.data;
          const prodData = prod.find((element) => element.id === this.prodId);
          prodData.name = this.name;
          prodData.price = this.price;
          prodData.details = this.details;
          prodData.image = this.image;
          axios
            .put(
              `https://61b6bfeec95dd70017d40fec.mockapi.io/productos/${this.prodId}`,
              prodData
            )
            .then((response) => {
              console.log(response);
            })
            .catch((err) => {
              console.log(err.response);
            });
          this.prodId = "";
          this.name = "";
          this.details = "";
          this.price = "";
          this.image = "";
        });
    },
    deleteProd() {
      axios
        .get("https://61b6bfeec95dd70017d40fec.mockapi.io/productos")
        .then((response) => {
          const prod = response.data;
          const prodData = prod.find((element) => element.id === this.prodId);
          axios
            .delete(
              `https://61b6bfeec95dd70017d40fec.mockapi.io/productos/${this.prodId}`,
              prodData
            )
            .then((response) => {
              console.log(response);
            })
            .catch((err) => {
              console.log(err.response);
            });
          this.prodId = "";
          this.name = "";
          this.details = "";
          this.price = "";
          this.image = "";
        });
    },
    autoComplete() {
      axios({
        method: "get",
        url: "https://61b6bfeec95dd70017d40fec.mockapi.io/productos",
      }).then((response) => {
        const prod = response.data;
        const prodData = prod.find((element) => element.id === this.prodId);
        this.name = prodData.name;
        this.details = prodData.details;
        this.price = prodData.price;
        this.image = prodData.image;
      });
    },
  },

  mounted() {
    axios({
      method: "get",
      url: "https://61b6bfeec95dd70017d40fec.mockapi.io/productos",
    }).then((response) => {
      this.product = response.data;
    });
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
