<template>
    <div class="container" style="margin-top: 5rem;">
        <h1>Přihlásit</h1>
        <h2 style="margin-top: 2rem;">Vítej zpět!</h2>
        <div class="container" style="margin-top: 3rem;">
            <div class="row">
                <div class="col-md-6">
                    <form><div class="container">
                        <div class="row">
                            <div class="col-md-3 ms-md-auto">
                                <label for="inputJmeno" class="form-label">Jméno</label>
                            </div>
                            <div class="col-md-9 ms-md-auto">
                                <input type="jmeno" class="form-control" id="inputJmeno">
                            </div>
                        </div>
                        <div class="row" style="margin-top: 1rem;">
                            <div class="col-md-3 ms-md-auto">
                                <label for="inputPrijmeni" class="form-label">Příjmení</label>
                            </div>
                            <div class="col-md-9 ms-md-auto">
                                <input type="prijmeni" class="form-control" id="inputPrijmeni">
                            </div>
                        </div>
                        <div class="row" style="margin-top: 1rem;">
                            <div class="col-md-3 ms-md-auto">
                                <label for="inputEmail" class="form-label">Email</label>
                            </div>
                            <div class="col-md-9 ms-md-auto">
                                <input type="email" class="form-control" id="inputEmail">
                            </div>
                        </div>
                        <div class="row" style="margin-top: 3rem;">
                            <div class="col-md-3 ms-md-auto">
                                <label for="inputPassword1" class="form-label">Heslo</label>
                            </div>
                            <div class="col-md-9 ms-md-auto">
                                <input type="password" class="form-control" id="inputPassword1">
                            </div>
                        </div>
                        <div class="row" style="margin-top: 1rem;">
                            <div class="col-md-3 ms-md-auto">
                                <label for="inputPassword2" class="form-label">Heslo znovu</label>
                            </div>
                            <div class="col-md-9 ms-md-auto">
                                <input type="password" class="form-control" id="inputPassword2">
                            </div>
                        </div>
                        <div class="d-grid gap-2" style="margin-top: 2rem;">
                            <button type="submit" class="btn btn-primary">Vytvořit účet</button>
                        </div>
                        <div style="margin-top: 1rem; margin-bottom: 1rem;">
                            Již máš účet?&nbsp
                            <a href="#/sign-in" class="link-primary">Přihlásit se</a>
                        </div>
                    </div></form>
                </div>
                <div class="col-md-6">
                    <img src="src/assets/images/image2.png" class="card-img-top image rounded" alt="Ilustracni foto" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
</script>

<style scoped>
</style>
