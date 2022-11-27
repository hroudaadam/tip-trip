<template>
    <form class="sign-in-form mx-auto">
        <h1 class="h2 mb-3">Vytvoření účtu</h1>
        <div class="row">
            <div class="col-md-3 ms-md-auto">
                <label class="form-label" for="inputUserName">Uživatelské jméno</label>
            </div>
            <div class="col-md-9 ms-md-auto">
                <input class="form-control" type="text" id="inputUserName" autocomplete="username" />
            </div>
        </div>
        <div class="row mt-3">
            <div class="col-md-3 ms-md-auto">
                <label class="form-label" for="inputEmail">Email</label>
            </div>
            <div class="col-md-9 ms-md-auto">
                <input class="form-control" type="email" id="inputEmail" autocomplete="email" />
            </div>
        </div>
        <div class="row mt-3">
            <div class="col-md-3 ms-md-auto">
                <label class="form-label" for="inputPassword">Heslo</label>
            </div>
            <div class="col-md-9 ms-md-auto">
                <input class="form-control" type="password" id="inputPassword" autocomplete="new-password" />
            </div>
        </div>
        <div class="row mt-3">
            <div class="col-md-3 ms-md-auto">
                <label class="form-label" for="inputVerifyPassword">Ověření hesla</label>
            </div>
            <div class="col-md-9 ms-md-auto">
                <input class="form-control" type="password" id="inputVerifyPassword" />
            </div>
        </div>
        <div class="d-grid gap-2 mt-3" >
            <button class="btn btn-primary" type="button" v-on:click="signUp">Registrovat se</button>
        </div>
        <div class="mt-3">
            Máš už účet?&nbsp;
            <router-link class="link-primary" :to="{name: 'sign-in'}">Přihlásit se</router-link>
        </div>
    </form>
</template>

<script setup>
import router from "../router";

const signUp = () => {
    router.push({name: "home"});
};

</script>

<style scoped>
.sign-in-form {
    max-width: 600px;
}
</style>
