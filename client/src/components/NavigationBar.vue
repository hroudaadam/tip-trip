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
                            <a class="nav-link active fw-bolder" href="#">Domů</a>
                        </li>
                        <li class="nav-item px-1">
                            <a class="nav-link fw-bolder" href="#">Výlety</a>
                        </li>
                    </ul>
                    <div>
                        <router-link type="button" class="btn btn-primary" :to="{name: 'sign-in'}">Přihlásit se</router-link>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>

<script setup></script>

<style scoped></style>
