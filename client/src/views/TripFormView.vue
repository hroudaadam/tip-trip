<template>
    <p class="h2">{{ state.formMode == "new" ? "Nový" : "Upravit" }} výlet</p>
    <form class="mt-3">
        <div class="row">
            <div class="col-md-3 ms-md-auto">
                <label for="tripName" class="form-label">Název výletu</label>
            </div>
            <div class="col-md-9 ms-md-auto">
                <input type="text" class="form-control" id="tripName" v-model="state.trip.title" />
            </div>
        </div>
        <div class="row mt-3">
            <div class="col-md-3 ms-md-auto">
                <label for="tripLocation" class="form-label">Místo</label>
            </div>
            <div class="col-md-9 ms-md-auto">
                <input type="text" class="form-control" id="tripLocation" v-model="state.trip.location" />
            </div>
        </div>
        <div class="row mt-3">
            <div class="col-md-3 ms-md-auto">
                <label for="inputDescription" class="form-label">Popis trasy</label>
            </div>
            <div class="col-md-9 ms-md-auto">
                <textarea class="form-control" id="inputTripDescription" rows="4" v-model="state.trip.detail"></textarea>
            </div>
        </div>
        <div class="row mt-3">
            <div class="col-md-3 ms-md-auto">
                <label for="pictures" class="form-label">Fotky z výletu</label>
            </div>
            <div class="col-md-9 ms-md-auto">
                <input class="form-control" type="file" id="formFile" accept="image/png, image/jpeg" multiple />
            </div>
        </div>

        <p class="h4 mt-4">Další informace</p>
        <div class="row gx-5 row-cols-2 mt-3">
            <div class="col">
                <div class="row">
                    <div class="col-md-3">
                        <label for="inputTripLength" class="form-label">Délka trasy</label>
                    </div>
                    <div class="col-md-9">
                        <div class="input-group">
                            <input type="number" step="any" class="form-control" id="inputTripLength" v-model="state.trip.distance" />
                            <div class="input-group-text">km</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="row">
                    <div class="col-md-3">
                        <label for="inputDescription" class="form-label">Převýšení</label>
                    </div>
                    <div class="col-md-9">
                        <div class="input-group">
                            <input type="number" class="form-control" id="inputTripDescription" v-model="state.trip.elevation" />
                            <div class="input-group-text">m</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row gx-5 row-cols-2 mt-3">
            <div class="col">
                <div class="row">
                    <div class="col-md-3">
                        <label for="inputDescription" class="form-label">Trvání</label>
                    </div>
                    <div class="col-md-9">
                        <div class="input-group">
                            <input type="number" class="form-control" id="inputTripDescription" v-model="state.trip.duration" />
                            <div class="input-group-text">h</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="row">
                    <div class="col-md-3">
                        <label for="inputDescription" class="form-label">Náročnost</label>
                    </div>
                    <div class="col-md-9">
                        <RatingInput class="h4" icon="droplet" v-model="state.trip.difficulty"></RatingInput>
                    </div>
                </div>
            </div>
        </div>
        <div class="d-grid gap-2 d-md-flex justify-content-md-end mt-3">
            <button class="btn btn-primary px-3" v-on:click="saveTrip">{{ state.formMode == "new" ? "Vytvořit" : "Uložit"}}</button>
        </div>
    </form>
</template>

<script setup>
import { onMounted, reactive } from "vue";
import RatingInput from "../components/RatingInput.vue";
import router from "../router";
import store from "../store";

const props = defineProps({
    tripId: String,
});

const state = reactive({
    formMode: "new",
    trip: {
        title: "",
        location: "",
        detail: "",
        duration: null,
        elevation: null,
        difficulty: null,
        distance: null,
        images: ["trip1.jpg"],
    },
});

onMounted(() => {
    const tripId = props.tripId;
    if (tripId != null) {
        state.formMode = "edit";
        state.trip = store.getters.tripById(props.tripId);
    }
});

const saveTrip = () => {
    router.push({name: "trips"});
};

</script>

<style scoped></style>
