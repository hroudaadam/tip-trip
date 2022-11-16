<template>
    <div>
        <div>
            <div class="d-flex justify-content-between mb-3">
                <form class="d-inline-flex">
                    <input class="form-control" type="search" placeholder="Hledat" />
                    <button class="btn btn-primary ms-1" type="submit">
                        <i class="bi bi-search"></i>
                    </button>
                </form>
                <router-link :to="{ name: 'trip-create' }" class="btn btn-primary"> Přidat trip </router-link>
            </div>
            <div>
                <nav class="nav">
                    <a class="nav-link active" href="#">Active</a>
                    <a class="nav-link" href="#">Link</a>
                    <a class="nav-link" href="#">Link</a>
                    <a class="nav-link" href="#">Link</a>
                    <a class="nav-link" href="#">Link</a>
                    <a class="nav-link" href="#">Link</a>
                    <a class="nav-link" href="#">Link</a>
                    <a class="nav-link" href="#">Link</a>
                    <a class="nav-link" href="#">Link</a>
                    <a class="nav-link" href="#">Link</a>
                    <a class="nav-link" href="#">Link</a>
                </nav>
            </div>
            <div>
                <div class="d-flex justify-content-between">
                    <TripCard v-for="i in [1, 2, 3, 4]" v-bind:key="i"></TripCard>
                </div>
                <div class="d-flex justify-content-between mt-5">
                    <TripCard v-for="i in [1, 2, 3, 4]" v-bind:key="i"></TripCard>
                </div>
            </div>
            <nav class="mt-3">
                <ul class="pagination justify-content-center text-primary">
                    <li class="page-item disabled">
                        <a class="page-link">
                            <i class="bi bi-caret-left"></i>
                        </a>
                    </li>
                    <li class="page-item"><a class="page-link">1</a></li>
                    <li class="page-item"><a class="page-link">2</a></li>
                    <li class="page-item"><a class="page-link">3</a></li>
                    <li class="page-item">
                        <a class="page-link">
                            <i class="bi bi-caret-right"></i>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
</template>

<script setup>
import TripCard from "../components/TripCard.vue";
</script>

<style scoped></style>
