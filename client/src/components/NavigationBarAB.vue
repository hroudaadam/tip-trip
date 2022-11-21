<template>
    <header>
        <nav class="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
            <div class="container-fluid flex-lg-row-reverse">
                <button class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <router-link class="navbar-brand" :to="{ name: 'home' }">
                    <img src="src/assets/images/logo.png" alt="" height="35" class="d-inline-block align-text-top" />
                </router-link>

                <div class="collapse navbar-collapse" id="navbarNav">
                    <div class="d-flex align-items-start flex-column flex-lg-row">
                        <ul class="navbar-nav">
                            <li class="nav-item px-1">
                                <router-link active-class="nav-link__active" class="nav-link text-body fw-semibold" :to="{ name: 'home' }">
                                    &nbsp;Domů&nbsp;
                                </router-link>
                            </li>
                            <li class="nav-item px-1">
                                <router-link active-class="nav-link__active" class="nav-link text-body fw-semibold" :to="{ name: 'trips' }">
                                    &nbsp;Výlety&nbsp;
                                </router-link>
                            </li>
                        </ul>
                        <router-link v-if="!store.getters.isSignedIn" class="btn btn-primary ms-lg-3 mt-3 mt-lg-0" :to="{ name: 'sign-in' }">
                            Přihlásit
                        </router-link>
                        <div v-else class="btn-group ms-lg-3">
                            <button class="user-profile-btn btn dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown">
                                <i class="h4 bi bi-person"></i>
                            </button>
                            <div class="dropdown-menu p-3 dropdown-menu-lg-end">
                                <p class="fw-semibold">{{store.state.user.userName}}</p>
                                <p>{{store.state.user.email}}</p>
                                <hr class="dropdown-divider" />
                                <button class="dropdown-item" v-on:click="signOut">Odhlásit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    </header>
</template>

<script setup>
import store from "../store";

const signOut = () => {
    store.commit("setUser", null);
};
</script>

<style scoped>
.nav-link:hover,
.nav-link__active {
    text-decoration: underline;
    text-decoration-color: var(--bs-primary);
    text-decoration-thickness: 3px;
}

.user-profile-modal {
    position: absolute;
    bottom: 0px !important;
    right: 0px !important;
    margin: 0px !important;
}

.dropdown-menu {
    min-width: 17.5rem;
}

.dropdown-toggle::after {
    display: none;
}

.user-profile-btn:focus,
.user-profile-btn:active {
    border: none;
}

.dropdown-item:active {
    background-color: var(--bs-secondary);
}
</style>
