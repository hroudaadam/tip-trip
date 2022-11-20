import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/styles/bootstrap-custom.scss";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./assets/styles/style.css";

const app = createApp(App);
app.use(router);
app.use(store);
app.mount("body");