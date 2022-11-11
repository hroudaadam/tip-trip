<template>
    <div class="container">
        <div class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src="src/assets/images/image2.png" class="d-block w-100 rounded" alt="..." />
                    <div class="carousel-caption d-none d-sm-block">
                        <p class="h2 py-3">Tip Trip - Váš rádce na dobré výlety</p>
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
                <p class="h2">Populární výlety</p>
                <div class="d-flex justify-content-between">
                    <router-link v-for="i in [1, 2, 3, 4]" v-bind:key="i" :to="{name: 'trip-detail', params: {tripId: 1}}" class="card" style="width: 18rem">
                        <img src="src/assets/images/image2.png" style="height: 12rem" class="card-img-top" alt="..." />
                        <div class="card-body d-flex flex-column justify-content-between">
                            <div>
                                <div class="h5 card-title">Rozhledna Mackova hora asdsa dsa as dsa</div>
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
                                <div class="text-secondary">
                                    Trvání 1h
                                </div>
                            </div>
                        </div>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup></script>

<style scoped></style>
