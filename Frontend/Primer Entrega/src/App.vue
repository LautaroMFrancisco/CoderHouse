<template>
  <v-app>
    <v-main>
      <NavBar />
      <!--      <SignIn />-->
      <!--      <SignUp />-->
      <!--      <Cart />-->
    </v-main>
  </v-app>
</template>

<script>
import NavBar from "./components/NavBar.vue";
/*import SignIn from "./components/SignIn.vue";*/
/*import SignUp from "./components/SignUp.vue";*/
/*import Products from "./components/Products.vue";*/
/*import Cart from "./components/Cart.vue";*/

export default {
  name: "App",

  components: {
    NavBar,
    /*Cart,*/
    /*SignIn,*/
    /*SignUp,*/
    /*Products,*/
  },

  data: () => ({
    //
  }),
};
</script>
