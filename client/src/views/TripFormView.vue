<template>
    <h1 class="h2">{{ state.formMode == "new" ? "Nový" : "Upravit" }} výlet</h1>
    <form class="mt-3">
        <div class="row">
            <div class="col-md-3 ms-md-auto">
                <label class="form-label" for="inputTitle">Název výletu</label>
            </div>
            <div class="col-md-9 ms-md-auto">
                <input class="form-control" type="text" id="inputTitle" v-model="state.formData.title" />
                <FieldValidation :error="state.formErrors.title"></FieldValidation>
            </div>
        </div>
        <div class="row mt-3">
            <div class="col-md-3 ms-md-auto">
                <label class="form-label" for="inputLocation">Místo</label>
            </div>
            <div class="col-md-9 ms-md-auto">
                <input class="form-control" type="text" id="inputLocation" v-model="state.formData.location" />
                <FieldValidation :error="state.formErrors.location"></FieldValidation>
            </div>
        </div>
        <div class="row mt-3">
            <div class="col-md-3 ms-md-auto">
                <label class="form-label" for="inputDetail">Popis trasy</label>
            </div>
            <div class="col-md-9 ms-md-auto">
                <textarea class="form-control" id="inputDetail" rows="4" v-model="state.formData.detail"></textarea>
                <FieldValidation :error="state.formErrors.detail"></FieldValidation>
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

        <h2 class="h4 mt-4">Další informace</h2>
        <div class="row gx-5 row-cols-2 mt-3">
            <div class="col">
                <div class="row">
                    <div class="col-md-3">
                        <label class="form-label" for="inputDistance">Délka trasy</label>
                    </div>
                    <div class="col-md-9">
                        <div class="input-group">
                            <input class="form-control" type="number" min="0" step="any" id="inputDistance" v-model="state.formData.distance" />
                            <div class="input-group-text">km</div>
                        </div>
                        <FieldValidation :error="state.formErrors.distance"></FieldValidation>
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
                            <input class="form-control" type="number" id="inputElevation" min="0" v-model="state.formData.elevation" />
                            <div class="input-group-text">m</div>
                        </div>
                        <FieldValidation :error="state.formErrors.elevation"></FieldValidation>
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
                            <input class="form-control" type="number" step="any" min="0" id="inputDuration" v-model="state.formData.duration" />
                            <div class="input-group-text">h</div>
                        </div>
                        <FieldValidation :error="state.formErrors.duration"></FieldValidation>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="row">
                    <div class="col-md-3">
                        <label class="form-label" for="inputDifficulty">Náročnost</label>
                    </div>
                    <div class="col-md-9">
                        <RatingInput class="h4" icon="droplet" v-model="state.formData.difficulty" id="inputDifficulty"></RatingInput>
                        <FieldValidation :error="state.formErrors.difficulty"></FieldValidation>
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
import FieldValidation from "../components/FieldValidation.vue";

const props = defineProps({
    tripId: String,
});

const state = reactive({
    formMode: "new",
    formData: {
        title: null,
        location: null,
        detail: null,
        duration: null,
        elevation: null,
        difficulty: null,
        distance: null,
        images: [],
    },
    formErrors: {
        title: null,
        location: null,
        detail: null,
        duration: null,
        elevation: null,
        distance: null
    },
});

onMounted(() => {
    const tripId = props.tripId;
    if (tripId != null) {
        state.formMode = "edit";
        state.formData = store.getters.tripById(props.tripId);
    }
});

const saveTrip = () => {
    resetValidation();
    if (!validateForm()) return;
    router.push({name: "trips"});
};

const resetValidation = () => {
    Object.keys(state.formErrors).forEach(k => state.formErrors[k] = null);
};

const validateForm = () => {
    if (!state.formData.title) {
        state.formErrors.title = "Název je povinný";
    }
    
    if (!state.formData.location) {
        state.formErrors.location = "Místo je povinné";
    }

    if (!state.formData.detail) {
        state.formErrors.detail = "Popis trasy je povinný";
    }

    if (state.formData.duration == null) {
        state.formErrors.duration = "Trvání je povinné";
    }
    else if (state.formData.duration <= 0) {
        state.formErrors.duration = "Trvání musí být větší než 0";
    }

    if (state.formData.elevation == null) {
        state.formErrors.elevation = "Převýšení je povinné";
    }

    if (state.formData.distance == null) {
        state.formErrors.distance = "Délka trasy je povinná";
    }
    else if (state.formData.distance <= 0) {
        state.formErrors.distance = "Délka trasy musí být větší než 0";
    }

    if (!state.formData.difficulty) {
        state.formErrors.difficulty = "Náročnost je povinná";
    }

    return !Object.keys(state.formErrors).some(k => !!state.formErrors[k]);
};

</script>

<style scoped></style>
