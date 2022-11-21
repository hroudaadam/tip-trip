<template>
    <router-link :to="{ name: 'trip-detail', params: { tripId: props.trip.id } }" class="card h-100">
        <img :src="getPathToFile(props.trip.images[0])" class="trip-image card-img-top" alt="..." />
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

const props = defineProps({
    trip: Object
});

const getPathToFile = (fileName) => {
    return new URL(`/src/assets/images/trips/${fileName}`, import.meta.url).href;
};

</script>

<style scoped>
.trip-image {
    height: 12rem;
    object-fit: cover;
}
</style>
