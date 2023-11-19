<template>
    <div class="main-view">
        <ChooseAction />
        <div class="search-container">
            <ButtonsBar />
            <TerminalTrigger />
            <Terminal />
        </div>
    </div>
</template>

<script setup lang="ts"></script>

<style scoped>
    .main-view {
        @apply flex flex-col flex-nowrap;
    }
    .search-container {
        @apply flex-1 bg-white mx-2 mb-4 rounded;
    }
</style>
