<template>
    <div class="rating-container d-flex justify-content-between align-items-start" v-on:mouseleave="() => selectRating(0)">
        <i
            :class="`bi bi-${props.icon}${resolveIconFill(r) ? '-fill' : ''} 
                ${props.readonly ? '' : 'cursor-pointer'}`"
            v-for="r in Array.from(Array(5).keys())"
            v-bind:key="r"
            v-on:mouseenter="() => selectRating(r + 1)"
            v-on:click="() => commitRating(r + 1)"
        ></i>
    </div>
</template>

<script setup>
import { reactive, defineProps, defineEmits } from "vue";

const emit = defineEmits(["update:modelValue"]);

const props = defineProps({
    modelValue: Number,
    readonly: Boolean,
    icon: String
});

const state = reactive({
    inputRating: 0,
    selecting: false
});

const selectRating = (r) => {
    if (props.readonly) return;

    state.selecting = r != 0;
    state.inputRating = r;
};

const commitRating = (r) => {
    if (props.readonly) return;

    state.selecting = false;
    emit("update:modelValue", r);
};

const resolveIconFill = (index) => {
    if (state.selecting) {
        return index < state.inputRating;
    }
    return index < props.modelValue;
};

</script>

<style scoped>
.rating-container {
    min-width: 6em;
    max-width: 8em;
}

.cursor-pointer {
    cursor: pointer;
}
</style>
