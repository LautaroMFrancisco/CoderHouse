import Vue from "vue";
import VueRouter from "vue-router";
import SignIn from "@/components/SignIn";
import Cart from "@/components/Cart";
import Products from "@/components/Products";
import SignUp from "@/components/SignUp";

Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    name: "SignIn",
    component: SignIn,
  },
  {
    path: "/register",
    name: "SignUp",
    component: SignUp,
  },
  {
    path: "/",
    component: () => import("@/views/Home"),
  },
  {
    path: "/products/:id",
    name: "Product",
    component: Products,
    props: true,
  },
  {
    path: "/cart/:id",
    name: "Cart",
    component: Cart,
  },
  {
    path: "/admin",
    name: "Form",
    component: () => import("@/views/Form"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes: routes,
});

export default router;
