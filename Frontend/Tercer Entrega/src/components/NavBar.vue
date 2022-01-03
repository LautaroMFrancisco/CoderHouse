<template>
  <v-app-bar app color="black" dark>
    <div class="d-flex align-center">
      <v-img
        alt="Food Store Logo"
        class="shrink mr-2"
        contain
        src="@/assets/NavBarLogo.png"
        transition="scale-transition"
        width="40"
        to="/"
        style="cursor: pointer"
        v-on:click="$router.push('/')"
      />
      <v-toolbar-title style="cursor: pointer" @click="$router.push('/')">
        <span class="font-weight-bold text-decoration:none">Food Store</span>
      </v-toolbar-title>
    </div>

    <v-spacer></v-spacer>

    <v-btn to="/admin" color="#FAEDF0" text v-if="this.$store.state.isAdmin">
      <span class="options">Product Manager</span>
      <v-icon>mdi-format-list-checkbox</v-icon>
    </v-btn>

    <v-btn to="/register" text v-if="!this.$store.state.isLogged">
      <span class="mr-2">Sign Up</span>
      <v-icon color="pink">mdi-file-edit-outline </v-icon>
    </v-btn>

    <v-btn to="/login" text v-if="!this.$store.state.isLogged">
      <span class="mr-2">Sing In</span>
      <v-icon color="pink">mdi-login-variant </v-icon>
    </v-btn>

    <v-btn
      color="#FAEDF0"
      v-if="this.$store.state.isLogged"
      @click="products"
      text
    >
      <span class="mr-2">Products</span>
      <v-icon>mdi-format-list-checkbox </v-icon>
    </v-btn>

    <v-btn color="#FAEDF0" v-if="hideButtons()" @click="cart" text>
      <span class="mr-2">Cart</span>
      <v-icon>mdi-cart-minus </v-icon>
    </v-btn>

    <v-btn
      color="#FAEDF0"
      text
      v-if="this.$store.state.isLogged"
      @click="onLogout()"
    >
      <span class="options">Logout</span>
      <v-icon>mdi-account-lock-open</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
export default {
  name: "NavBar",
  methods: {
    onLogout() {
      this.$store.dispatch("setUserAuth");
      this.$router.push("/");
      if (this.$store.state.isAdmin) {
        this.$store.dispatch("setAdminAuth");
      }
    },
    cart() {
      this.$router.push(`/cart/${this.$route.params.id}`);
    },
    products() {
      this.$router.push(`/products/${this.$route.params.id}`);
    },
    hideButtons() {
      if (this.$store.state.isLogged && !this.$store.state.isAdmin) {
        return this.$store.state.isLogged;
      }
    },
  },
};
</script>

<style scoped></style>
