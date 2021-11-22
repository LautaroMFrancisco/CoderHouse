Vue.component("waifus-table", {
  props: ["waifus"],
  template: `
    <div>
    <table class="table table-hover table-dark">
      <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Name</th>
        <th scope="col">Anime</th>
        <th scope="col">Season</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(waifu,i) in waifus" :class="waifu.id % 2 === 0 ? 'table-dark fw-bold' : 'table-secondary text-danger fw-bold'">
        <th scope="row">{{ waifu.id }}</th>
        <td>{{ waifu.name }}</td>
        <td>{{ waifu.anime }}</td>
        <td>{{ waifu.season }}</td>
      </tr>
      </tbody>
    </table>
    </div>
  `,
});

const app = new Vue({
  el: "#app",
  data: {
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
  },
  methods: {},
  computed: {},
});
