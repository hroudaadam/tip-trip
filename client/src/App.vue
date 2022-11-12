<template>
    <NavigationBar></NavigationBar>

    <main class="flex-shrink-0 mb-3">
        <RouterView class="container" />
    </main>
    <footer class="d-flex justify-content-center mt-auto py-2 bg-light">
        <router-link class="fw-semibold pe-3" to="/">Domů</router-link>
        <router-link class="fw-semibold pe-3" to="/">O nás</router-link>
        <p class="py-0 my-0">
            Copyright 2022
        </p>
    </footer>
</template>

<script setup>
import NavigationBar from "./components/NavigationBar.vue";
</script>

<style scoped>
nav {
    display: flex;
    gap: 1rem;
}
</style>
