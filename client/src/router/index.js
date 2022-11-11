import { createRouter, createWebHashHistory } from "vue-router";

import WelcomeView from "../views/WelcomeView.vue";
import TripsView from "../views/TripsView.vue";
import UserTripsView from "../views/UserTripsView.vue";
import TripFormView from "../views/TripFormView.vue";
import TripDetailView from "../views/TripDetailView.vue";

import SignInView from "../views/SignInView.vue";
import SignUpView from "../views/SignUpView.vue";
import UserProfileView from "../views/UserProfileView.vue";
import AboutView from "../views/AboutView.vue";

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
            component: TripFormView
        },
        {
            path: "/trips/:tripId",
            name: "trip-detail",
            component: TripDetailView,
            props: true
        },
        {
            path: "/trips/:tripId/edit",
            name: "trip-form",
            component: TripFormView,
            props: true
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
            path: "/user-profile",
            name: "user-profile",
            component: UserProfileView
        },
        {
            path: "/about",
            name: "about",
            component: AboutView
        }
    ]
});

export default router;
