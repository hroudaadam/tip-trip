<template>
    <div class="container">
        <div class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src="src/assets/images/image2.png" class="d-block w-100 rounded" height="300" alt="..." />
                    <div class="carousel-caption d-none d-sm-block">
                        <p class="h2 py-5">Tip Trip - Váš rádce na dobré výlety</p>
                        <form class="d-flex mx-auto" style="max-width: 400px">
                            <input class="form-control me-1" type="search" placeholder="Hledat" />
                            <button class="btn btn-primary" type="submit">
                                <i class="bi bi-search"></i>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            <div class="mt-5">
                <div class="d-flex justify-content-between">
                    <p class="h2">Populární výlety</p>
                    <router-link :to="{ name: 'trips' }">
                        Další tripy
                        <i class="bi bi-caret-right"></i>
                    </router-link>
                </div>
                <div class="d-flex justify-content-between">
                    <TripCard v-for="i in [1, 2, 3, 4]" v-bind:key="i"></TripCard>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import TripCard from "../components/TripCard.vue";
</script>

<style scoped></style>
