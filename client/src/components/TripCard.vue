<template>
    <router-link :to="{ name: 'trip-detail', params: { tripId: props.trip.id } }" class="card">
        <img :src="`src/assets/images/${props.trip.images[0]}`" class="trip-image card-img-top" alt="..." />
        <div class="card-body d-flex flex-column justify-content-between">
            <div>
                <div class="h5 card-title">{{props.trip.title}}</div>
                <div class="card-subtitle mb-2 text-muted">
                    <i class="bi bi-geo-alt-fill"></i>
                    {{props.trip.location}}
                </div>
            </div>
            <!-- <p class="card-text">Some text</p> -->
            <div class="d-flex justify-content-between">
                <RatingInput :rating="props.trip.rating" :readonly="true" icon="star"></RatingInput>
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

</script>

<style scoped>
.trip-image {
    height: 12rem;
    object-fit: cover;
}
</style>
