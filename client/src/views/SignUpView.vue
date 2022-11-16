<template>
    <form class="sign-in-form mx-auto">
        <p class="h2 mb-3">Vytvoření účtu</p>
        <div class="row">
            <div class="col-md-3 ms-md-auto">
                <label for="userName" class="form-label">Uživatelské jméno</label>
            </div>
            <div class="col-md-9 ms-md-auto">
                <input type="text" class="form-control" id="userName" />
            </div>
        </div>
        <div class="row mt-3">
            <div class="col-md-3 ms-md-auto">
                <label for="email" class="form-label">Email</label>
            </div>
            <div class="col-md-9 ms-md-auto">
                <input type="email" class="form-control" id="email" />
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
        <div class="row mt-3">
            <div class="col-md-3 ms-md-auto">
                <label for="verifyPassword" class="form-label">Ověření hesla</label>
            </div>
            <div class="col-md-9 ms-md-auto">
                <input type="password" class="form-control" id="verifyPassword" />
            </div>
        </div>
        <div class="d-grid gap-2 mt-3" >
            <button type="submit" class="btn btn-primary">Registrovat se</button>
        </div>
        <div class="mt-3">
            Máš už účet?&nbsp;
            <router-link :to="{name: 'sign-in'}" class="link-primary">Přihlásit se</router-link>
        </div>
    </form>
</template>

<script setup></script>

<style scoped>
.sign-in-form {
    max-width: 600px;
}
</style>
