<template>
    <p class="h2">Nový výlet</p>
    <form class="mt-3">
        <div class="row">
            <div class="col-md-3 ms-md-auto">
                <label for="tripName" class="form-label">Název výletu</label>
            </div>
            <div class="col-md-9 ms-md-auto">
                <input type="text" class="form-control" id="tripName" />
            </div>
        </div>
        <div class="row mt-3">
            <div class="col-md-3 ms-md-auto">
                <label for="tripLocation" class="form-label">Místo</label>
            </div>
            <div class="col-md-9 ms-md-auto">
                <input type="text" class="form-control" id="tripLocation" />
            </div>
        </div>
        <div class="row mt-3">
            <div class="col-md-3 ms-md-auto">
                <label for="inputDescription" class="form-label">Popis trasy</label>
            </div>
            <div class="col-md-9 ms-md-auto">
                <textarea class="form-control" id="inputTripDescription" rows="4"></textarea>
            </div>
        </div>
        <div class="row mt-3">
            <div class="col-md-3 ms-md-auto">
                <label for="pictures" class="form-label">Fotky z výletu</label>
            </div>
            <div class="col-md-9 ms-md-auto">
                <input class="form-control" type="file" id="formFile" />
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
                            <input type="tripLength" class="form-control" id="inputTripLength" />
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
                            <input type="number" class="form-control" id="inputTripDescription" />
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
                            <input type="number" class="form-control" id="inputTripDescription" />
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
                        <div class="d-flex w-50 justify-content-between align-items-start h4">
                            <i class="bi bi-droplet-fill"></i>
                            <i class="bi bi-droplet-fill"></i>
                            <i class="bi bi-droplet"></i>
                            <i class="bi bi-droplet"></i>
                            <i class="bi bi-droplet"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="d-grid gap-2 d-md-flex justify-content-md-end mt-3">
            <button class="btn btn-primary px-3">Vytvořit</button>
        </div>
    </form>
</template>

<script setup>
import { onMounted, reactive } from "vue";

const props = defineProps({
    tripId: String,
});

const state = reactive({
    formMode: "create",
});

onMounted(() => {
    const tripId = props.tripId;
    if (tripId) {
        state.formMode = "edit";
    }
});
</script>

<style scoped></style>
