<template>
    <form class="sign-in-form mx-auto">
        <h1 class="h2 mb-3">Vytvoření účtu</h1>
        <div class="row">
            <div class="col-md-3 ms-md-auto">
                <label class="form-label" for="inputUserName">Uživatelské jméno</label>
            </div>
            <div class="col-md-9 ms-md-auto">
                <input class="form-control" type="text" id="inputUserName" autocomplete="username" v-model="state.formData.userName" />
                <FieldValidation :error="state.formErrors.userName"></FieldValidation>
            </div>
        </div>
        <div class="row mt-3">
            <div class="col-md-3 ms-md-auto">
                <label class="form-label" for="inputEmail">Email</label>
            </div>
            <div class="col-md-9 ms-md-auto">
                <input class="form-control" type="email" id="inputEmail" autocomplete="email" v-model="state.formData.email" />
                <FieldValidation :error="state.formErrors.email"></FieldValidation>
            </div>
        </div>
        <div class="row mt-3">
            <div class="col-md-3 ms-md-auto">
                <label class="form-label" for="inputPassword">Heslo</label>
            </div>
            <div class="col-md-9 ms-md-auto">
                <input class="form-control" type="password" id="inputPassword" autocomplete="new-password" v-model="state.formData.password" />
                <FieldValidation :error="state.formErrors.password"></FieldValidation>
            </div>
        </div>
        <div class="row mt-3">
            <div class="col-md-3 ms-md-auto">
                <label class="form-label" for="inputVerifyPassword">Ověření hesla</label>
            </div>
            <div class="col-md-9 ms-md-auto">
                <input class="form-control" type="password" id="inputVerifyPassword" v-model="state.formData.verifyPassword"/>
                <FieldValidation :error="state.formErrors.verifyPassword"></FieldValidation>
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
import { reactive } from "vue";
import FieldValidation from "../components/FieldValidation.vue";

const state = reactive({
    formErrors: {
        userName: null,
        email: null,
        password: null,
        verifyPassword: null
    },
    formData: {
        userName: null,
        email: null,
        password: null,
        verifyPassword: null
    }
}); 

const signUp = () => {
    resetValidation();
    if (!validateForm()) return;

    router.push({name: "home"});
};

const resetValidation = () => {
    Object.keys(state.formErrors).forEach(k => state.formErrors[k] = null);
};

const validateForm = () => {
    if (!state.formData.userName) {
        state.formErrors.userName = "Uživatelské jméno je povinné";
    }
    
    if (!state.formData.email) {
        state.formErrors.email = "Email je povinný";
    }

    if (!state.formData.password) {
        state.formErrors.password = "Heslo je povinné";
    }
    else if (state.formData.password.length < 8) {
        state.formErrors.password = "Heslo musí být delší než 8 znaků";
    }

    if (state.formData.password != state.formData.verifyPassword) {
        state.formErrors.verifyPassword = "Ověření hesla musí být shodné se zadaným";
    }

    return !Object.keys(state.formErrors).some(k => !!state.formErrors[k]);
};

</script>

<style scoped>
.sign-in-form {
    max-width: 600px;
}
</style>
