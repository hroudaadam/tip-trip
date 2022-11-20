import { createRouter, createWebHashHistory } from "vue-router";
import store from "../store";

import WelcomeView from "../views/WelcomeView.vue";
import TripsView from "../views/TripsView.vue";
import UserTripsView from "../views/UserTripsView.vue";
import TripFormView from "../views/TripFormView.vue";
import TripDetailView from "../views/TripDetailView.vue";

import SignInView from "../views/SignInView.vue";
import SignUpView from "../views/SignUpView.vue";
import AboutView from "../views/AboutView.vue";

const authenticationGuard = (to, from, next) => {
    if (store.getters.isSignedIn) {
        next();
    }
    else {
        next({name: "sign-in"});
    }
};

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: "/",
            name: "home",
            component: WelcomeView
        },
        {
            path: "/trips",
            name: "trips",
            component: TripsView
        },
        {
            path: "/trips/new",
            name: "trip-create",
            component: TripFormView,
            beforeEnter: authenticationGuard
        },
        {
            path: "/trips/:tripId",
            name: "trip-detail",
            component: TripDetailView,
            props: true
        },
        {
            path: "/trips/:tripId/edit",
            name: "trip-edit",
            component: TripFormView,
            props: true,
            beforeEnter: authenticationGuard
        },
        {
            path: "/my-trips",
            name: "user-trips",
            component: UserTripsView
        },
        {
            path: "/sign-in",
            name: "sign-in",
            component: SignInView
        },
        {
            path: "/sign-up",
            name: "sign-up",
            component: SignUpView
        },
        {
            path: "/about",
            name: "about",
            component: AboutView
        }
    ]
});

export default router;
