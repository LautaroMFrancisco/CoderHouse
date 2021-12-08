<template>
  <v-app>
    <v-main>
      <NavBar />
      <Form />
    </v-main>
  </v-app>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import Form from "./components/Form.vue";
export default {
  name: "App",

  components: {
    NavBar,
    Form,
  },

  data: () => ({
    //
  }),
};
</script>
