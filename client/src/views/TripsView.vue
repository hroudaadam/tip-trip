<template>
    <div>
        <div>
            <div class="d-flex justify-content-between">
                <form class="d-inline-flex">
                    <input class="search-input form-control" type="text" placeholder="Hledat" v-model="state.search" />
                    <button class="btn btn-primary ms-1">
                        <i class="bi bi-search"></i>
                    </button>
                </form>
                <router-link v-if="store.getters.isSignedIn" :to="{ name: 'trip-create' }" class="btn btn-primary ms-1 px-3">
                    <i class="bi bi-plus-circle me-lg-2"></i>
                    <span class="d-none d-sm-inline"> Přidat trip </span>
                </router-link>
            </div>
            <div class="testimonial-group mt-3">
                <div class="d-flex">
                    <button 
                        :disabled="f.name === state.filter"
                        :name="f.name"
                        :class="`filter-item text-body fw-semibold ms-3 ${f.name === state.filter ? 'filter-item__active' : ''}`" 
                        v-for="f in filters" 
                        v-bind:key="f.name"
                        v-on:click="switchFilter" >
                        {{f.text}}
                    </button>
                </div>
            </div>
            <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-4 mt-3">
                <div class="col py-2" v-for="trip in store.state.trips" v-bind:key="trip.id">
                    <TripCard :trip="trip"></TripCard>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { reactive } from "vue";
import TripCard from "../components/TripCard.vue";
import store from "../store";

const props = defineProps({
    search: String,
});

const state = reactive({
    filter: "all",
    search: props.search
});

const filters = [
    {
        name: "all",
        text: "Vše"
    },
    {
        name: "backpack",
        text: "Z batůžku"
    },
    {
        name: "created",
        text: "Vytvořené"
    },
    {
        name: "popular",
        text: "Populární"
    },
    {
        name: "long",
        text: "Celodenní"
    },
    {
        name: "short",
        text: "Krátké"
    },
];

const switchFilter = (e) => {
    state.filter = e.target.name;
};

</script>

<style scoped>
@media screen and (min-width: 768px) {
    .search-input {
        min-width: 350px;
    }
}
.filter-item {
    background: none;
    border: none;
    padding: 0;
    display: inline;
}

.filter-item__active {
    text-decoration: underline;
    text-decoration-color: var(--bs-primary);
    text-decoration-thickness: 3px;
}

.testimonial-group > .d-flex {
    display: block;
    overflow-x: auto;
    white-space: nowrap;
}
.testimonial-group > .d-flex > div {
    display: inline-block;
}
</style>
