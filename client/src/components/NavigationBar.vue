<template>
    <nav class="navbar navbar-expand-lg navbar-light">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">
                <img src="src/assets/images/logo.png" alt="" height="60" class="d-inline-block align-text-top" />
            </a>
            <button class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarNav">
                <div class="d-flex ms-auto">
                    <ul class="navbar-nav">
                        <li class="nav-item px-1">
                            <router-link class="nav-link active fw-bolder" href="#">Domů</router-link>
                        </li>
                        <li class="nav-item px-1">
                            <router-link class="nav-link fw-bolder" :to="{name: ''}">Výlety</router-link>
                        </li>
                    </ul>
                    <router-link type="button" class="btn btn-primary ms-3" :to="{name: 'sign-in'}">Přihlásit se</router-link>
                </div>
            </div>
        </div>
    </nav>
</template>

<script setup></script>

<style scoped></style>
