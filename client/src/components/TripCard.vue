<template>
    <router-link class="card h-100" :to="{ name: 'trip-detail', params: { tripId: props.trip.id } }">
        <img class="trip-image card-img-top" :src="getPathToTripImage(props.trip.images[0])" alt="Úvodní obrázek výletu" />
        <div class="card-body d-flex flex-column justify-content-between">
            <div>
                <div class="h5 card-title">{{props.trip.title}}</div>
                <div class="card-subtitle mb-2 text-muted">
                    <i class="bi bi-geo-alt-fill"></i>
                    {{props.trip.location}}
                </div>
            </div>
            <div class="d-flex justify-content-between">
                <RatingInput :model-value="props.trip.rating" :readonly="true" icon="star"></RatingInput>
                <div class="text-secondary">Trvání {{props.trip.duration}}h</div>
            </div>
        </div>
    </router-link>
</template>

<script setup>
import RatingInput from "./RatingInput.vue";
import { getPathToTripImage } from "../helpers/utils.js";

const props = defineProps({
    trip: Object
});

</script>

<style scoped>
.trip-image {
    height: 12rem;
    object-fit: cover;
}
</style>
