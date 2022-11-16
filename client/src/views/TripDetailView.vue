<template>
    <div class="row gx-5">
        <div class="col-md-6">
            <!-- <img src="src/assets/images/trip1.jpg" class="trip-main-image img-fluid rounded" alt="..." /> -->
            <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="src/assets/images/trip1.jpg" class="trip-main-image img-fluid rounded" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src="src/assets/images/trip2.jpg" class="trip-main-image img-fluid rounded" alt="..." />
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
        <div class="col-md-6 mt-3 mt-lg-0">
            <p class="h2">Rozhledna Mackova hora</p>
            <p class="text-muted">
                <i class="bi bi-geo-alt-fill"></i>
                Nové Strašecí
            </p>
            <p class="">
                <span class="fw-semibold">Přidal: &nbsp;</span>
                Jiří Šťastný
            </p>
            <div class="rating-container d-flex justify-content-between align-items-start">
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-half"></i>
                <i class="bi bi-star"></i>
                <i class="bi bi-star"></i>
            </div>
        </div>
        <div class="d-flex gap-2 justify-content-end mt-3">
            <button type="button" class="btn btn-primary px-3"><i class="bi bi-pencil me-2"></i>Upravit</button>
            <button type="button" class="btn btn-secondary px-3"><i class="bi bi-x-circle me-2"></i>Odstranit</button>
            <button type="button" class="btn btn-primary px-3"><i class="bi bi-plus-circle me-2"></i> Do batůžku</button>
            <button type="button" class="btn btn-secondary px-3"><i class="bi bi-x-circle me-2"></i> Z batůžku</button>
        </div>
    </div>

    <div class="row row-cols-2 row-cols-lg-4 mt-3">
        <div class="col d-flex">
            <i class="bi bi-clock h3"></i>
            <div class="flex-column ms-3">
                <div class="fw-bolder">1 h</div>
                <div class="text-secondary">Trvání</div>
            </div>
        </div>
        <div class="col d-flex">
            <i class="bi bi-arrow-up h3"></i>
            <div class="flex-column ms-3">
                <div class="fw-bolder">200 m</div>
                <div class="text-secondary">Převýšení</div>
            </div>
        </div>
        <div class="col d-flex mt-2 mt-lg-0">
            <i class="bi bi-droplet h3"></i>
            <div class="flex-column ms-3">
                <div class="fw-bolder">2 / 5</div>
                <div class="text-secondary">Náročnost</div>
            </div>
        </div>
        <div class="col d-flex mt-2 mt-lg-0">
            <i class="bi bi-arrow-right h3"></i>
            <div class="flex-column ms-3">
                <div class="fw-bolder">2 km</div>
                <div class="text-secondary">Vzálenost</div>
            </div>
        </div>
    </div>

    <div class="mt-3">
        <p class="h4">Popis</p>
        <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus
            saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Vivamus ac leo pretium faucibus. Integer tempor. In sem
            justo, commodo ut, suscipit at, pharetra vitae, orci. Aenean fermentum risus id tortor.
        </p>
    </div>
</template>

<script setup>
import { onMounted } from "vue";

const props = defineProps({
    tripId: String,
});

onMounted(() => {
    const tripId = props.tripId;
    console.log(tripId);
});
</script>

<style scoped>
.rating-container {
    max-width: 125px;
}

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
