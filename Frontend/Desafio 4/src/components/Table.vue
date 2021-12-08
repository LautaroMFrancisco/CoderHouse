<template>
  <div>
    <v-spacer></v-spacer>
    <v-data-table
      :headers="headers"
      :items="data"
      item-key="id"
      class="elevation-1"
    >
      <template>
        <tr v-for="(prod, i) in data" :key="i">
          <td>{{ prod.name }}</td>
          <td>{{ prod.price }}</td>
          <td>{{ prod.stock }}</td>
          <td>{{ prod.category }}</td>
        </tr>
      </template>
    </v-data-table>
  </div>
</template>

<script>
export default {
  name: "Table",
  props: ["data"],
  data: () => ({
    selection: null,
  }),
  computed: {
    headers() {
      return [
        { text: "Name", value: "name" },
        { text: "Price", value: "price" },
        { text: "Stock", value: "stock" },
        { text: "Category", value: "menu" },
      ];
    },
  },
};
</script>
