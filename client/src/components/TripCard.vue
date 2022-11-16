<template>
    <router-link :to="{ name: 'trip-detail', params: { tripId: 1 } }" class="card">
        <img src="src/assets/images/trip1.jpg" class="trip-image card-img-top" alt="..." />
        <div class="card-body d-flex flex-column justify-content-between">
            <div>
                <div class="h5 card-title">Rozhledna Mackova hora</div>
                <div class="card-subtitle mb-2 text-muted">
                    <i class="bi bi-geo-alt-fill"></i>
                    Nové Strašecí
                </div>
            </div>
            <!-- <p class="card-text">Some text</p> -->
            <div class="d-flex justify-content-between">
                <div class="d-flex w-50 justify-content-between align-items-start">
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-half"></i>
                    <i class="bi bi-star"></i>
                    <i class="bi bi-star"></i>
                </div>
                <div class="text-secondary">Trvání 1h</div>
            </div>
        </div>
    </router-link>
</template>

<script setup></script>

<style scoped>
.trip-image {
    height: 12rem;
    object-fit: cover;
}
</style>
