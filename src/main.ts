import { createApp } from "vue";

import BootstrapVue3 from "bootstrap-vue-3";

// Import Bootstrap an BootstrapVue CSS files (order is important)
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue-3/dist/bootstrap-vue-3.css";

import App from "@/App.vue";
import router from "./router/index";

const app = createApp(App);

// Make BootstrapVue available throughout your project
app.use(BootstrapVue3);

// Optionally install the BootstrapVue icon components plugin
// app.use(IconsPlugin);

// app.use(ModalPlugin);

app.use(router);
app.mount("#app");
