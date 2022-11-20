<template>
    <form class="sign-in-form mx-auto">
        <p class="h2 mb-3">Přihlášení</p>
        <div class="row">
            <div class="col-md-3 ms-md-auto">
                <label for="email" class="form-label">Email</label>
            </div>
            <div class="col-md-9 ms-md-auto">
                <input type="email" class="form-control" id="email" aria-describedby="emailHelp" />
            </div>
        </div>
        <div class="row mt-3">
            <div class="col-md-3 ms-md-auto">
                <label for="password" class="form-label">Heslo</label>
            </div>
            <div class="col-md-9 ms-md-auto">
                <input type="password" class="form-control" id="password" />
            </div>
        </div>
        <div class="d-grid gap-2 mt-3">
            <button class="btn btn-primary" v-on:click="signIn">Přihlásit se</button>
        </div>
        <div class="mt-3">
            Nemáš účet?&nbsp;
            <router-link :to="{ name: 'sign-up' }" class="link-primary">Registrovat se</router-link>
        </div>
    </form>
</template>

<script setup>
import store from "../store";
import router from "../router";

const signIn = () => {
    store.commit("setUser", {
        id: 1,
        userName: "Tomáš Rafoun",
        email: "tomas.rafoun@email.com",
    });
    router.push({ name: "home" });
};
</script>

<style scoped>
.sign-in-form {
    max-width: 600px;
}
</style>
