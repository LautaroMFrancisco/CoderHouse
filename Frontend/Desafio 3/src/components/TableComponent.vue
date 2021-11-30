<template>
  <v-data-table
    :headers="headers"
    :items="waifus"
    item-key="id"
    class="elevation-1"
  >
    <template v-slot:header.id="{ header }">
      {{ header.text.toUpperCase() }}
    </template>
    <template v-slot:item="{ item }">
      <tr :class="getColor(item.id)">
        <td>{{ item.id }}</td>
        <td>{{ item.name }}</td>
        <td>{{ item.anime }}</td>
        <td>{{ item.season }}</td>
      </tr>
    </template>
  </v-data-table>
</template>

<script>
export default {
  data() {
    return {
      waifus: [
        {
          id: 1,
          name: "Kigiri",
          anime: "Danganronpa",
          season: "Summer 2013",
        },
        {
          id: 2,
          name: "May",
          anime: "Pokemon Advanced Generation",
          season: "Fall 2002",
        },
        {
          id: 3,
          name: "Makise",
          anime: "Steins;Gate",
          season: "Spring 2011",
        },
        {
          id: 4,
          name: "Dia",
          anime: "Sekai Saikou no Ansatsusha, Isekai Kizoku ni Tensei suru",
          season: "Fall 2021",
        },
      ],
    };
  },
  computed: {
    headers() {
      return [
        { text: "ID", value: "id" },
        { text: "Name", value: "name" },
        { text: "Anime", value: "anime" },
        { text: "Season", value: "season" },
      ];
    },
  },
  methods: {
    getColor(id) {
      if (id % 2 === 0) return "red-bg";
      else return "pink-bg";
    },
  },
};
</script>
<style>
.red-bg {
  display: table-row;
  background: pink;
  color: black;
  font-weight: bold;
}
.pink-bg {
  display: table-row;
  background: mediumvioletred;
  color: white;
  font-weight: bold;
}
</style>
