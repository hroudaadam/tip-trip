<template>
    <div>
        <form>
            <h1>Nový trip</h1>
            <div class="row" style="margin-top: 1rem">
                <div class="col-md-3 ms-md-auto">
                    <label for="inputTripName" class="form-label">Název tripu</label>
                </div>
                <div class="col-md-9 ms-md-auto">
                    <input type="tripName" class="form-control" id="inputTripName" />
                </div>
            </div>
            <div class="row" style="margin-top: 1rem">
                <div class="col-md-3 ms-md-auto">
                    <label for="inputTripPlace" class="form-label">Místo tripu</label>
                </div>
                <div class="col-md-9 ms-md-auto">
                    <input type="tripPlace" class="form-control" id="inputTripPlace" />
                </div>
            </div>
            <div class="row" style="margin-top: 1rem">
                <div class="col-md-3 ms-md-auto">
                    <label for="inputDescription" class="form-label">Popis trasy</label>
                </div>
                <div class="col-md-9 ms-md-auto">
                    <textarea class="form-control" id="inputTripDescription" rows="4"></textarea>
                </div>
            </div>
            <div class="row" style="margin-top: 1rem">
                <div class="col-md-3 ms-md-auto">
                    <label for="pictures" class="form-label">Obrázky z tripu</label>
                </div>
                <div class="col-md-9 ms-md-auto">
                    <input class="form-control" type="file" id="formFile" />
                </div>
            </div>

            <h2 style="margin-top: 2rem">Charakteristika</h2>
            <div class="row" style="margin-top: 1rem">
                <div class="row col-md-6 ms-md-auto">
                    <div class="col-md-3 ms-md-auto">
                        <label for="inputTripLength" class="form-label">Délka trasy</label>
                    </div>
                    <div class="col-md-7 ms-md-auto">
                        <input type="tripLength" class="form-control" id="inputTripLength" />
                    </div>
                </div>
                <div class="row col-md-6 ms-md-auto">
                    <div class="col-md-3 ms-md-auto">
                        <label for="inputDescription" class="form-label">Převýšení</label>
                    </div>
                    <div class="col-md-7 ms-md-auto">
                        <input type="description" class="form-control" id="inputTripDescription" />
                    </div>
                </div>
            </div>
            <div class="row justify-content-center" style="margin-top: 2rem">
                <div class="row col-md-6 ms-md-auto">
                    <div class="col-md-3 ms-md-auto">
                        <label for="inputDescription" class="form-label">Časová náročnost</label>
                    </div>
                    <div class="col-md-7 ms-md-auto">
                        <input type="description" class="form-control" id="inputTripDescription" />
                    </div>
                </div>
                <div class="row col-md-6 ms-md-auto">
                    <div class="col-md-3 ms-md-auto">
                        <label for="inputDescription" class="form-label">Náročnost (1-5)</label>
                    </div>
                    <div class="col-md-7 ms-md-auto">
                        <input type="description" class="form-control" id="inputTripDescription" />
                    </div>
                </div>
            </div>

            <button type="submit" class="btn btn-primary" style="margin-top: 1rem">Vytvořit nový trip</button>
        </form>
    </div>
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
