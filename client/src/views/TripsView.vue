<template>
    <div>
        <div>
            <div class="d-flex justify-content-between">
                <form class="d-inline-flex">
                    <input class="search-input form-control" type="search" placeholder="Hledat" />
                    <button class="btn btn-primary ms-1" type="submit">
                        <i class="bi bi-search"></i>
                    </button>
                </form>
                <router-link :to="{ name: 'trip-create' }" class="btn btn-primary ms-1 px-3">
                    <span class="d-none d-sm-inline"> Přidat trip </span>
                    <i class="bi bi-plus-lg d-sm-none"></i>
                </router-link>
            </div>
            <div class="testimonial-group mt-3">
                <div class="d-flex">
                    <button class="filter-item filter-item__active text-body fw-semibold" to="">Vše</button>
                    <button class="filter-item text-body fw-semibold ms-3" to="">Z batůžku</button>
                    <button class="filter-item text-body fw-semibold ms-3" to="">Vytvořené</button>
                    <button class="filter-item text-body fw-semibold ms-3" to="">Populární</button>
                    <button class="filter-item text-body fw-semibold ms-3" to="">Nově přidané</button>
                    <button class="filter-item text-body fw-semibold ms-3" to="">Celodenní</button>
                    <button class="filter-item text-body fw-semibold ms-3" to="">Krátké</button>
                </div>
            </div>
            <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-4 mt-3">
                <div class="col py-2" v-for="i in [1, 2, 3, 4, 5]" v-bind:key="i">
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
@media screen and (min-width: 576px) {
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
