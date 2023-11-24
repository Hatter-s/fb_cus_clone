<template>
    <button class="btn btn-success btn-sm" style="backgroundColor: hsl(90.17 90.95% 39.02% ); color: white" @click="() => terminalStore.toggleOpenStatus()">ICY TOOL</button>
</template>

<script setup lang="ts">
import { useTerminalStore } from '../../stores';

const terminalStore = useTerminalStore();

</script>

<style scoped>

</style>