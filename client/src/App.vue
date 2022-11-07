<template>
    <div>
        <!-- <div>
            <nav>
                <router-link :to="{name: 'home'}">Home</router-link>
                <router-link :to="{name: 'user-trips'}">My trips</router-link>
                <router-link :to="{name: 'trip-detail', params: {tripId: '1'}}">Trip detail</router-link>
                <router-link :to="{name: 'trip-create'}">Trip form</router-link>
                <router-link :to="{name: 'sign-in'}">Sign in</router-link>
                <router-link :to="{name: 'sign-up'}">Sign up</router-link>
                <router-link :to="{name: 'user-profile'}">User profile</router-link>
                <router-link :to="{name: 'about'}">About</router-link>
            </nav>
        </div> -->
        <RouterView />
    </div>
</template>

<script setup>
</script>

<style scoped>
nav {
    display: flex;
    gap: 1rem
}
</style>
