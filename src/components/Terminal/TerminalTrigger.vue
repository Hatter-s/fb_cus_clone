<template>
    <button class="btn btn-success" @click="() => terminalStore.toggleOpenStatus()">Terminal trigger</button>
</template>

<script setup lang="ts">
import { useTerminalStore } from '../../stores';

const terminalStore = useTerminalStore();

</script>

<style scoped>

</style>