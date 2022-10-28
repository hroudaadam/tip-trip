<template>
    <div>
        <h1>This is trip detail page</h1>
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
</style>
