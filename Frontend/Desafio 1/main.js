const app = new Vue({
  el: "#app",
  data: {
    counter: 0,
    clicks: 0,
  },
  methods: {
    incrementCounter() {
      this.counter += 1;
    },
    decreaseCounter() {
      if (this.counter > 0) {
        this.counter -= 1;
      }
    },
    clickCounter() {
      this.clicks += 1;
    },
  },
  computed: {
    powerCounter() {
      return this.counter * this.counter;
    },
  },
});
