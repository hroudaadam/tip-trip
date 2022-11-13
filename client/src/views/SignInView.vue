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
                                <label for="exampleInputEmail1" class="form-label">Email</label>
                            </div>
                            <div class="col-md-9 ms-md-auto">
                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                            </div>
                        </div>
                        <div class="row text-center" style="margin-top: 1rem;">
                            <div class="col-md-8 ms-md-auto"></div>
                            <div class="col-md-4 ms-md-auto">
                            <a href="#" class="link-primary">Zapomenuté heslo?</a></div>
                        </div>
                        <div class="row">
                            <div class="col-md-3 ms-md-auto">
                                <label for="exampleInputPassword1" class="form-label">Heslo</label>
                            </div>
                            <div class="col-md-9 ms-md-auto">
                                <input type="password" class="form-control" id="exampleInputPassword1">
                            </div>
                        </div>
                        <div class="d-grid gap-2" style="margin-top: 2rem;">
                            <button type="submit" class="btn btn-primary">Přihlásit se</button>
                        </div>
                        <div style="margin-top: 1rem; margin-bottom: 1rem;">
                            Nemáte ještě účet?&nbsp
                            <a href="#/sign-up" class="link-primary">Registrovat se</a>
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
