<template>
    <div class="container">
        <div class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src="src/assets/images/image2.png" class="d-block w-100 rounded" height="200" alt="..." />
                    <div class="jumbo mx-auto carousel-caption d-flex flex-column align-items-stretch">
                        <p class="jumbo-text h3 px-3 py-3 rounded d-block">
                            <span class="d-none d-sm-inline"> Tip Trip -&nbsp; </span>
                            Síť plná výletů
                        </p>
                        <form class="jumbo-search-form d-flex w-100">
                            <input class="form-control me-1" type="search" placeholder="Hledat" />
                            <button class="btn btn-primary" type="submit">
                                <i class="bi bi-search"></i>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <div class="mt-5">
            <div class="d-flex justify-content-between align-items-center">
                <p class="h2">Populární výlety</p>
                <router-link :to="{ name: 'trips' }">
                    Více
                    <i class="bi bi-caret-right"></i>
                </router-link>
            </div>
            <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-4">
                <div class="col py-2 py-lg-0" v-for="i in [1, 2, 3, 4]" v-bind:key="i">
                    <TripCard></TripCard>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import TripCard from "../components/TripCard.vue";
</script>

<style scoped>
.jumbo {
    max-width: 400px;
}

.jumbo-text {
    background-color: #333333;
    background-color: rgba(51, 51, 51, 0.4);
    text-align: center;
}
</style>
