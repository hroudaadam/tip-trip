<template>
    <div class="container">
        <div class="d-grid gap-2 d-md-flex justify-content-md-end" style="margin-bottom: 0.5rem;">
            <button type="button" class="btn btn-primary">Upravit trip</button>
            <button type="button" class="btn btn-primary">+ Do batůžku</button>
            <button type="button" class="btn btn-danger active me-md-2">- Z batůžku</button>
        </div>
        <div class="card mb-3 card-style">
            <div class="d-flex align-items-start">
                <div class="clearfix">
                    <div class="col-md-6 float-md-start">
                        <img src="src/assets/images/image2.png" class="card-img-top image rounded" alt="Ilustracni foto" />
                    </div>
                    <div class="col-md-6 float-md-start">
                        <div class="card-body" style="margin-left:1rem;">
                            <h1>Název výletu</h1>
                            <div class="card-subtitle mb-2 text-muted" style="margin-top: 1rem; margin-bottom: 1rem;">
                                <i class="bi bi-geo-alt-fill"></i>
                                Nové Strašecí
                            </div>
                            <div class="d-flex" style="margin-bottom: 1.5rem; margin-top: 1rem;">
                                <div class="bold">Pridal:</div>
                                <div style="margin-left: 0.5rem;"> Jmeno</div>
                            </div>
                            <div class="d-flex">
                                <i class="bi bi-star-fill st"></i>
                                <i class="bi bi-star-fill st"></i>
                                <i class="bi bi-star-fill st"></i>
                                <i class="bi bi-star-fill st"></i>
                                <i class="bi bi-star"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            
        <div class="mt-5 d-flex flex-column d-sm-flex flex-sm-row justify-content-between details">
            <div class="d-flex">
                <i class="bi bi-clock large-icon"></i>
                <div class="flex-column l-margin">
                    <div class="bold">1 h</div>
                    <div class="text-secondary">doba</div>
                </div>
            </div>
            <div class="d-flex">
                <i class="bi bi-arrow-up large-icon"></i>
                <div class="flex-column l-margin">
                    <div class="bold">200 m</div>
                    <div class="text-secondary">Prevyseni</div>
                </div>
            </div>
            <div class="d-flex">
                <i class="bi bi-droplet large-icon"></i> 
                <div class="flex-column l-margin">
                    <div class="bold">2°</div>
                    <div class="text-secondary">Narocnost</div>
                </div>
            </div>
            <div class="d-flex">
                <i class="bi bi-arrow-right large-icon"></i> 
                <div class="flex-column l-margin">
                    <div class="bold">2 km</div>
                    <div class="text-secondary">Vzdalenost</div>
                </div>
            </div>
        </div>
        <div class="d-flex flex-column d-lg-flex flex-lg-row justify-content-center" style="margin-top: 2rem;">
            <div class="p-3">
                <img src="src/assets/images/image2.png" class="image rounded image-card" alt="Ilustracni foto"/>
            </div>
            <div class="p-3">
                <img src="src/assets/images/image2.png" class="image rounded image-card" alt="Ilustracni foto"/>
            </div>
            <div class="p-3">
                <img src="src/assets/images/image2.png" class="image rounded image-card" alt="Ilustracni foto"/>
            </div>
            <div class="p-3">
                <img src="src/assets/images/image2.png" class="image rounded image-card" alt="Ilustracni foto"/>
            </div>
            <div class="p-3">
                <img src="src/assets/images/image2.png" class="image rounded image-card" alt="Ilustracni foto"/>
            </div>
        </div>
        <div class="container" style="margin-top: 4rem;">
            <h2>Popis</h2>
            <h3>Charakteristika</h3>
            <p>Jsou tri feraty</p>
            <p style="font-weight: bold">Z vrcholu se dejte dolu</p>
        </div>
    </div>
</template>

<script setup>
import { onMounted, reactive } from "vue";

const props = defineProps({
    tripId: String
});

onMounted(() => {
    const tripId = props.tripId;
    console.log(tripId);
});

</script>

<style scoped>
    .details {
        margin-left: 5%;
        margin-right: 5%;
    }
    .image {
        height: 12rem;
        width: 20rem;
    }
    .card-style {
        border: none;
    }
    .st {
        margin-right: 0.5%;
    }
    .bold {
        font-weight: bold;
    }
    .large-icon {
        font-size: x-large;
    }
    .l-margin {
        margin-left: 1rem;
    }
    .image-card{
        max-width: 12rem;
        max-height: 12rem;
    }
</style>
