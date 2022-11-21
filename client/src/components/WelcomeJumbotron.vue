<template>
    <div class="carousel slide">
        <div class="carousel-inner">
            <div class="carousel-item active">
                <img class="jumbo-image img-fluid rounded" src="/src/assets/images/jumbo.png" alt="Uvítání" />
                <div class="jumbo-caption mx-auto carousel-caption d-flex flex-column align-items-stretch">
                    <p class="jumbo-text h3 p-2 rounded d-block">
                        <span class="d-none d-sm-inline"> Tip Trip -&nbsp; </span>
                        Síť plná výletů
                    </p>
                    <form class="jumbo-search-form d-flex w-100">
                        <input class="form-control me-1 shadow-lg" type="search" v-model="state.search" placeholder="Hledat" />
                        <button class="btn btn-primary shadow-lg" type="button" v-on:click="searchTrips" >
                            <i class="bi bi-search"></i>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { reactive } from "vue";
import router from "../router";

const state = reactive({
    search: ""
});

const searchTrips = () => {
    if (state.search) {
        router.push({ name: "trips", query: { search: state.search} });
    }
    else {
        router.push({ name: "trips" });
    }
};

</script>

<style scoped>
.jumbo-caption {
    max-width: 400px;
}

.jumbo-text {
    background-color: #333333;
    background-color: rgba(51, 51, 51, 0.4);
    text-align: center;
}

.jumbo-image {
    min-height: 150px;
}

@media only screen and (min-width: 576px) {
    .jumbo-image {
        max-height: 200px;
        width: 100%;
        object-fit: cover;
        object-position: top;
    }
}
</style>
