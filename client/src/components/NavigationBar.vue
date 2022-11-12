<template>
    <header>
        <nav class="navbar navbar-expand-lg navbar-light">
            <div class="container-fluid">
                <router-link class="navbar-brand" :to="{name: 'home'}">
                    logo placeholder
                    <!-- <img src="src/assets/images/logo.png" alt="" height="40" class="d-inline-block align-text-top" /> -->
                </router-link>
                <button class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarNav">
                    <div class="d-flex ms-auto">
                        <ul class="navbar-nav">
                            <li class="nav-item px-1">
                                <router-link active-class="nav-link__active" class="nav-link text-body fw-semibold" :to="{ name: 'home' }">&nbsp;Domů&nbsp;</router-link>
                            </li>
                            <li class="nav-item px-1">
                                <router-link active-class="nav-link__active" class="nav-link text-body fw-semibold" :to="{ name: 'trips' }">&nbsp;Výlety&nbsp;</router-link>
                            </li>
                        </ul>
                        <router-link class="btn btn-primary ms-3" :to="{ name: 'sign-in' }">
                            Přihlásit
                            <!-- <i class="bi bi-box-arrow-in-right"></i> -->
                        </router-link>
                    </div>
                </div>
            </div>
        </nav>
    </header>
</template>

<script setup>

</script>

<style scoped>

.nav-link:hover, .nav-link__active {
    text-decoration: underline;
    text-decoration-color: var(--bs-primary);
    text-decoration-thickness: 3px;
}
</style>
