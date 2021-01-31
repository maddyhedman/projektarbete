import Vue from "vue";
import App from "./App.vue";
import router from "./router";

Vue.config.productionTip = false;

new Vue({
  data() {
    return {
      activeCardIndex: 0,
      cardStack: [
        {
          id: "432984728397",
          holder: "The name",
          vendor: "bitcoin",
          number: "XXXXYYYYZZZZFFFF",
          validMonth: "12",
          validDay: "5",
        }
      ]
    }
  },
  router,
  render: h => h(App)
}).$mount("#app");
