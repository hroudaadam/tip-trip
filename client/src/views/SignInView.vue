<template>
    <form class="sign-in-form mx-auto">
        <h1 class="h2 mb-3">Přihlášení</h1>
        <div class="row">
            <div class="col-md-3 ms-md-auto">
                <label for="inputEmail" class="form-label">Email</label>
            </div>
            <div class="col-md-9 ms-md-auto">
                <input class="form-control" type="email" id="inputEmail" autocomplete="email" v-model="state.formData.email" />
                <FieldValidation :error="state.formErrors.email"></FieldValidation>
            </div>
        </div>
        <div class="row mt-3">
            <div class="col-md-3 ms-md-auto">
                <label for="inputPassword" class="form-label">Heslo</label>
            </div>
            <div class="col-md-9 ms-md-auto">
                <input class="form-control" type="password" id="inputPassword" autocomplete="current-password" v-model="state.formData.password"/>
                <FieldValidation :error="state.formErrors.password"></FieldValidation>
            </div>
        </div>
        <div class="d-grid gap-2 mt-3">
            <button class="btn btn-primary" type="button" v-on:click="signIn">Přihlásit se</button>
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
import { reactive } from "vue";
import FieldValidation from "../components/FieldValidation.vue";

const state = reactive({
    formErrors: {
        email: null,
        password: null
    },
    formData: {
        email: null,
        password: null
    }
}); 

const signIn = () => {
    resetValidation();
    if (!validateForm()) return;

    store.commit("setUser", {
        id: 1,
        userName: "Tomáš Rafoun",
        email: "tomas.rafoun@email.com",
    });
    router.push({ name: "home" });
};

const resetValidation = () => {
    Object.keys(state.formErrors).forEach(k => state.formErrors[k] = null);
};

const validateForm = () => {
    if (!state.formData.email) {
        state.formErrors.email = "Email je povinný";
    }
    if (!state.formData.password) {
        state.formErrors.password = "Heslo je povinné";
    }

    return !Object.keys(state.formErrors).some(k => !!state.formErrors[k]);
};

</script>

<style scoped>
.sign-in-form {
    max-width: 600px;
}
</style>
