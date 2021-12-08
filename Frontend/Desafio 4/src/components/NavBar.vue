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
      />
      <v-toolbar-title>
        <span class="font-weight-bold">Challenge 4</span>
      </v-toolbar-title>
    </div>
  </v-app-bar>
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<style scoped></style>
