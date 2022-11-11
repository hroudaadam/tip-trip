<template>
    <div>
        <NavigationBar></NavigationBar>
        <RouterView class="mb-3" />
        <footer class="footer d-flex justify-content-center mt-auto py-3 bg-light">
            Hello
        </footer>
    </div>
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
