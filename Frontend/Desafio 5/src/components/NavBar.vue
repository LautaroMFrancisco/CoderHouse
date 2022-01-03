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
        <span class="font-weight-bold text-decoration:none">Desafio 8</span>
      </v-toolbar-title>
    </div>

    <v-spacer></v-spacer>

    <v-btn to="/form" text>
      <span class="mr-2">Form</span>
      <v-icon color="pink">mdi-file-edit-outline </v-icon>
    </v-btn>

    <v-btn to="/products" text>
      <span class="mr-2">Cart</span>
      <v-icon color="pink">mdi-login-variant </v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<style scoped></style>
