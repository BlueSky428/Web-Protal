import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Reports from "./views/Reports.vue";
import ContactUs from "./views/ContactUs.vue";
import Registration from "./views/Registration.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    },
    {
      path: "/reports",
      name: "reports",
      component: Reports
    },
    {
      path: "/contact-us",
      name: "contact-us",
      component: ContactUs
    },
    {
      path: "/register",
      name: "register",
      component: Registration,
      props: true
    }
  ]
});
