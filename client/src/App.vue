<template>
    <NavigationBar></NavigationBar>
    <main class="flex-shrink-0 my-3">
        <div class="container">
            <RouterView/>
        </div>
    </main>
    <AppFooter></AppFooter>
</template>

<script setup>
import AppFooter from "./components/AppFooter.vue";
import NavigationBar from "./components/NavigationBar.vue";
</script>

<style scoped>
nav {
    display: flex;
    gap: 1rem;
}
</style>
