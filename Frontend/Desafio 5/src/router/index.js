import Vue from "vue";
import VueRouter from "vue-router";

import Form from "@/components/Form";
import Product from "@/components/Products";

Vue.use(VueRouter);

const routes = [
  {
    path: "/form",
    name: "Form",
    component: Form,
  },
  {
    path: "/products",
    name: "Product",
    component: Product,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes: routes,
});

export default router;
