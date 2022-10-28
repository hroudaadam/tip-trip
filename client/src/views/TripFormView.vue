<template>
    <div>
        <h1>This is trip form page</h1>
        <div>Form mode: {{state.formMode}}</div>
    </div>
</template>

<script setup>
import { onMounted, reactive } from "vue";

const props = defineProps({
    tripId: String
});

const state = reactive({
    formMode: "create"
});

onMounted(() => {
    const tripId = props.tripId;
    if (tripId) {
        state.formMode = "edit";
    }
});

</script>

<style scoped>
</style>
