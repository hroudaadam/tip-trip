<template>
    <p class="text-danger py-0 my-0 fw-light" v-if="props.error">* {{ props.error }}</p>
</template>

<script setup>
const props = defineProps({
    error: String
});
</script>

<style scoped>
p {
    font-size: 0.9rem;
}
</style>
