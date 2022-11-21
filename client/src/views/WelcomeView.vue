<template>
    <WelcomeJumbotron></WelcomeJumbotron>
    <div class="mt-5">
        <div class="d-flex justify-content-between align-items-center">
            <p class="h2">Populární výlety</p>
            <router-link :to="{ name: 'trips' }">
                Více
                <i class="bi bi-caret-right"></i>
            </router-link>
        </div>
        <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-4">
            <div class="col py-2 py-lg-0" v-for="trip in store.state.trips.slice(0, 4)" v-bind:key="trip.id">
                <TripCard :trip="trip"></TripCard>
            </div>
        </div>
    </div>
</template>

<script setup>
import TripCard from "../components/TripCard.vue";
import WelcomeJumbotron from "../components/WelcomeJumbotron.vue";
import store from "../store";
</script>

<style scoped></style>
