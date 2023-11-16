<script setup lang="ts">

const props = defineProps({
    backgroundSize: {
        type: String,
        required: true
    },
    backgroundPosition: {
        type: String,
        required: true
    },
    backgroundImage: {
        type: String,
        required: true
    },
    width: {
        type: String,
        required: false
    },
    height: {
        type: String,
        required: false
    }
});
</script>
<template>
    <i :style="{ 
        backgroundImage: backgroundImage, 
        width: width ? width : '20px', 
        height: height ? height : '20px' }"
    ></i>
</template>
<style scoped>
i {
    background-size: v-bind(backgroundSize);
    background-position: v-bind(backgroundPosition);
    background-repeat: no-repeat;
    height: 20px;
    display: inline-block;
}
</style>