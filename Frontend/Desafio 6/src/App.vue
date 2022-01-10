<template>
  <link
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
    rel="stylesheet"
    integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
    crossorigin="anonymous"
  />
  <div
    id="app"
    class="container d-flex justify-content-center align-content mt-5"
  >
    <div class="col-md-6">
      <h2>{{ welcome }} <span style="color: #16944f">VueJs</span></h2>
      <div class="d-flex">
        <input v-model="number" style="border: none" readonly />
        <button class="btn btn-primary" v-on:click="addOne()">+</button>
        <button class="btn btn-danger" v-on:click="subOne()">-</button>
      </div>
      {{ clicks + timesClicked }}
      <hr />
      <h3>Potencia cuadrada del numero en pantalla:</h3>
      {{ pot }}
    </div>
  </div>
</template>
<script>
export default {
  name: "Form",
  components: {},
  data: () => ({
    welcome: "Contador con",
    testing: "thest",
    number: 0,
    clicks: "Veces que se clickeo:",
    timesClicked: 0,
    pot: 0,
  }),
  methods: {
    addOne() {
      this.timesClicked += 1;
      this.number += 1;
      this.pot = this.number * this.number;
      return this.pot;
    },
    subOne() {
      if (this.number === 0) {
        alert("Atencion! No es posible ir por debajo del 0 ");
        return;
      }
      this.timesClicked += 1;
      this.number -= 1;
      this.pot = this.number * this.number;
      return this.pot;
    },
  },
};
</script>

<style></style>
