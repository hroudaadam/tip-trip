<template>
    <p class="h2">{{ state.formMode == "new" ? "Nový" : "Upravit" }} výlet</p>
    <form class="mt-3">
        <div class="row">
            <div class="col-md-3 ms-md-auto">
                <label class="form-label" for="inputTitle">Název výletu</label>
            </div>
            <div class="col-md-9 ms-md-auto">
                <input class="form-control" type="text" id="inputTitle" v-model="state.trip.title" />
            </div>
        </div>
        <div class="row mt-3">
            <div class="col-md-3 ms-md-auto">
                <label class="form-label" for="inputLocation">Místo</label>
            </div>
            <div class="col-md-9 ms-md-auto">
                <input class="form-control" type="text" id="inputLocation" v-model="state.trip.location" />
            </div>
        </div>
        <div class="row mt-3">
            <div class="col-md-3 ms-md-auto">
                <label class="form-label" for="inputDetail">Popis trasy</label>
            </div>
            <div class="col-md-9 ms-md-auto">
                <textarea class="form-control" id="inputDetail" rows="4" v-model="state.trip.detail"></textarea>
            </div>
        </div>
        <div class="row mt-3">
            <div class="col-md-3 ms-md-auto">
                <label class="form-label" for="inputPictures">Fotky z výletu</label>
            </div>
            <div class="col-md-9 ms-md-auto">
                <input class="form-control" type="file" id="inputPictures" accept="image/png, image/jpeg" multiple />
            </div>
        </div>

        <p class="h4 mt-4">Další informace</p>
        <div class="row gx-5 row-cols-2 mt-3">
            <div class="col">
                <div class="row">
                    <div class="col-md-3">
                        <label class="form-label" for="inputDistance">Délka trasy</label>
                    </div>
                    <div class="col-md-9">
                        <div class="input-group">
                            <input class="form-control" type="number" step="any" id="inputDistance" v-model="state.trip.distance" />
                            <div class="input-group-text">km</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="row">
                    <div class="col-md-3">
                        <label class="form-label" for="inputElevation">Převýšení</label>
                    </div>
                    <div class="col-md-9">
                        <div class="input-group">
                            <input class="form-control" type="number" id="inputElevation" v-model="state.trip.elevation" />
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
                        <label class="form-label" for="inputDuration">Trvání</label>
                    </div>
                    <div class="col-md-9">
                        <div class="input-group">
                            <input class="form-control" type="number" step="any" id="inputDuration" v-model="state.trip.duration" />
                            <div class="input-group-text">h</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="row">
                    <div class="col-md-3">
                        <label class="form-label" for="inputDifficulty">Náročnost</label>
                    </div>
                    <div class="col-md-9">
                        <RatingInput class="h4" icon="droplet" v-model="state.trip.difficulty" id="inputDifficulty"></RatingInput>
                    </div>
                </div>
            </div>
        </div>
        <div class="d-grid gap-2 d-md-flex justify-content-md-end mt-3">
            <button class="btn btn-primary px-3" type="button" v-on:click="saveTrip">{{ state.formMode == "new" ? "Vytvořit" : "Uložit"}}</button>
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
        images: [],
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
