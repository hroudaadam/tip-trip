<template>
    <div>
        <NavigationBar></NavigationBar>
        <RouterView />
    </div>
</template>

<script setup>
import NavigationBar from "./components/NavigationBar.vue";
</script>

<style scoped>
nav {
    display: flex;
    gap: 1rem
}
</style>
