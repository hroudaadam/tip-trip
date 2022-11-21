<template>
    <div class="d-flex justify-content-between">
        <form class="d-inline-flex">
            <input class="search-input form-control" type="text" placeholder="Hledat" v-model="state.search" />
            <button class="btn btn-primary ms-1" type="button" v-on:click="search">
                <i class="bi bi-search"></i>
            </button>
        </form>
        <router-link class="btn btn-primary ms-1 px-3" v-if="store.getters.isSignedIn" :to="{ name: 'trip-create' }">
            <i class="bi bi-plus-circle me-lg-2"></i>
            <span class="d-none d-sm-inline"> Přidat trip </span>
        </router-link>
    </div>
    <div class="testimonial-group mt-3">
        <div class="d-flex">
            <button
                :class="`filter-item text-body fw-semibold ms-3 ${f.name === state.filter ? 'filter-item__active' : ''}`"
                type="button"
                :disabled="f.name === state.filter"
                :name="f.name"
                v-for="f in filters.filter(x => store.getters.isSignedIn || !x.auth)"
                v-bind:key="f.name"
                v-on:click="switchFilter"
            >
                {{ f.text }}
            </button>
        </div>
    </div>
    <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-4 mt-3">
        <div class="col py-2" v-for="trip in state.trips" v-bind:key="trip.id">
            <TripCard :trip="trip"></TripCard>
        </div>
    </div>
</template>

<script setup>
import { onMounted, reactive } from "vue";
import TripCard from "../components/TripCard.vue";
import store from "../store";

const props = defineProps({
    search: String,
});

const state = reactive({
    filter: "new",
    search: props.search,
    trips: [],
});

const filters = [
    {
        name: "new",
        text: "Nejnovější",
        auth: false
    },
    {
        name: "popular",
        text: "Populární",
        auth: false
    },
    {
        name: "short",
        text: "Krátké",
        auth: false
    },
    {
        name: "allday",
        text: "Celodenní",
        auth: false
    },
    {
        name: "backpack",
        text: "Z batůžku",
        auth: true
    },
    {
        name: "created",
        text: "Vytvořené",
        auth: true
    }
];

onMounted(() => {
    switchFilter(null);
    search();
});

const switchFilter = (e) => {
    if (e) {
        state.filter = e.target.name;
        state.search = "";
    }

    switch (state.filter) {
        case "backpack":
            state.trips = store.state.trips.filter((t) => t.inBackpack);
            break;
        case "created":
            state.trips = store.state.trips.filter((t) => t.createdBy.id == store.state.user.id);
            break;
        case "short":
            state.trips = store.state.trips.filter((t) => t.duration <= 3);
            break;
        case "allday":
            state.trips = store.state.trips.filter((t) => t.duration >= 6 && t.duration <= 8);
            break;
        case "popular":
            state.trips = [...store.state.trips].sort((a,b) => b.rating - a.rating);
            break;
        default:
            state.trips = [...store.state.trips].sort((a,b) => b.created.getTime() - a.created.getTime());
            break;
    }
};

const search = () => {
    if (!state.search) return;
    const searchString = state.search.toLowerCase();
    state.trips = state.trips.filter(t => t.title.toLowerCase().includes(searchString) || 
        t.location.toLowerCase().includes(searchString));
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
