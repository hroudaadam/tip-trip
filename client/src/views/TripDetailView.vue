<template>
    <div v-if="state.trip != null">
        <div class="row gx-5">
            <div class="col-md-6">
                <div class="carousel slide" id="carouselExampleControls" data-bs-ride="carousel">
                    <div class="carousel-inner">
                        <div :class="`carousel-item ${index == 0 ? 'active' : ''}`" v-for="(image, index) in state.trip.images" v-bind:key="image">
                            <img :src="getPathToFile(image)" class="trip-main-image img-fluid rounded" alt="Obrázek výletu" />
                        </div>
                    </div>
                    <button
                        class="carousel-control-prev"
                        v-if="state.trip.images.length > 1"
                        data-bs-target="#carouselExampleControls"
                        data-bs-slide="prev"
                    >
                        <span class="carousel-control-prev-icon"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button
                        class="carousel-control-next"
                        v-if="state.trip.images.length > 1"
                        data-bs-target="#carouselExampleControls"
                        data-bs-slide="next"
                    >
                        <span class="carousel-control-next-icon"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
            <div class="col-md-6 mt-3 mt-lg-0">
                <h1 class="h2">{{ state.trip.title }}</h1>
                <p class="text-muted">
                    <i class="bi bi-geo-alt-fill"></i>
                    {{ state.trip.location }}
                </p>
                <p>
                    <span class="fw-semibold">Autor: &nbsp;</span>
                    {{ state.trip.createdBy.userName }}
                </p>
                <div class="d-flex gap-2">
                    <RatingInput :model-value="state.trip.rating" :readonly="!canRate" icon="star" v-on:update:model-value="rateTrip"></RatingInput>
                </div>
            </div>
            <div v-if="store.getters.isSignedIn">
                <div class="d-flex gap-2 justify-content-end mt-3" v-if="state.trip.createdBy.id == store.state.user.id">
                    <router-link class="btn btn-primary px-3" :to="{ name: 'trip-edit', props: { tripId: state.trip.id } }">
                        <i class="bi bi-pencil me-2"></i>
                        Upravit
                    </router-link>
                    <button class="btn btn-secondary px-3" type="button" v-on:click="deleteTrip"><i class="bi bi-x-circle me-2"></i>Odstranit</button>
                </div>
                <div class="d-flex gap-2 justify-content-end mt-3" v-else>
                    <button class="btn btn-primary px-3" type="button" v-if="!state.trip.inBackpack" v-on:click="changeBackpackStatus">
                        <i class="bi bi-plus-circle me-2"></i>
                        Do batůžku
                    </button>
                    <button class="btn btn-secondary px-3" type="button" v-else v-on:click="changeBackpackStatus">
                        <i class="bi bi-x-circle me-2"></i>
                        Z batůžku
                    </button>
                </div>
            </div>
        </div>

        <div class="row row-cols-2 row-cols-lg-4 mt-3">
            <div class="col d-flex">
                <i class="bi bi-clock h3"></i>
                <div class="flex-column ms-3">
                    <div class="fw-bolder">{{ state.trip.duration.toLocaleString() }} h</div>
                    <div class="text-secondary">Trvání</div>
                </div>
            </div>
            <div class="col d-flex">
                <i class="bi bi-arrow-up h3"></i>
                <div class="flex-column ms-3">
                    <div class="fw-bolder">{{ state.trip.elevation.toLocaleString() }} m</div>
                    <div class="text-secondary">Převýšení</div>
                </div>
            </div>
            <div class="col d-flex mt-2 mt-lg-0">
                <i class="bi bi-droplet h3"></i>
                <div class="flex-column ms-3">
                    <div class="fw-bolder">{{ state.trip.difficulty }} / 5</div>
                    <div class="text-secondary">Náročnost</div>
                </div>
            </div>
            <div class="col d-flex mt-2 mt-lg-0">
                <i class="bi bi-arrow-right h3"></i>
                <div class="flex-column ms-3">
                    <div class="fw-bolder">{{ state.trip.distance.toLocaleString() }} km</div>
                    <div class="text-secondary">Vzálenost</div>
                </div>
            </div>
        </div>

        <div class="mt-3">
            <p class="h4">Popis</p>
            <p>
                {{ state.trip.detail }}
            </p>
        </div>
    </div>
</template>

<script setup>
import { onMounted, reactive, computed } from "vue";
import RatingInput from "../components/RatingInput.vue";
import router from "../router";
import store from "../store";

const props = defineProps({
    tripId: String,
});

const state = reactive({
    trip: null
});

const canRate = computed(() => {
    return store.getters.isSignedIn && state.trip.createdBy.id != store.state.user.id && state.trip?.givenRating == null;
});

onMounted(() => {
    state.trip = store.getters.tripById(props.tripId);
});

const changeBackpackStatus = () => {
    state.trip.inBackpack = !state.trip.inBackpack;
};

const deleteTrip = () => {
    router.push({ name: "trips" });
};

const rateTrip = (rating) => {
    state.trip.givenRating = rating;
};

const getPathToFile = (fileName) => {
    return new URL(`/src/assets/images/trips/${fileName}`, import.meta.url).href;
};

</script>

<style scoped>
.trip-main-image {
    min-height: 150px;
    object-fit: cover;
    object-position: top;
}

@media only screen and (min-width: 576px) {
    .trip-main-image {
        height: 300px;
        width: 100%;
    }
}
</style>
