<script setup lang="ts">
import { useFeatureStore } from '@/stores';

const featureStore = useFeatureStore();
</script>
<template>
    <div class="w-full">
        <!-- Text de Welcome + features -->
        <h1 class="title">Welcome <span class="text-accent">VFull</span>! All Features:</h1>
    </div>
</template>
<style scoped>
</style>