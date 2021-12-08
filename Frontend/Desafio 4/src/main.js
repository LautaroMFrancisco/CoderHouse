import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import VueForm from "vue-form";

Vue.config.productionTip = false;
Vue.use(VueForm);

new Vue({
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
