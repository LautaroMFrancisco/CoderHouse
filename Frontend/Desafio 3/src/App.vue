<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-spacer></v-spacer>
      <h1 class="cen justify-center">Waifus</h1>
    </v-app-bar>

    <v-main>
      <TableComponent />
    </v-main>
  </v-app>
</template>

<script>
import TableComponent from "./components/TableComponent";

export default {
  name: "App",

  components: {
    TableComponent,
  },

  data: () => ({
    //
  }),
};
</script>
