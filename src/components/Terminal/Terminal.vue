<template>
    <div class="terminal" v-if="terminalStore.$state.isOpen">
        <div class="head">
            <p>Terminal</p>
            <button class="close" @click="() => terminalStore.toggleOpenStatus()"></button>
        </div>
        <div class="body">
            <div class="code-display">
                <Typed :options="options">
                    <h1 class="typing"></h1>
                </Typed>
            </div>
        </div>

    </div>
</template>

<script setup lang="ts">
import { useTerminalStore } from '../../stores';
import { Typed } from "@duskmoon/vue3-typed-js";
import type { TypedOptions } from "@duskmoon/vue3-typed-js";

const terminalStore = useTerminalStore();
const options: TypedOptions = {
    strings: terminalStore.$state.content,
    loop: false,
    typeSpeed: 10,
}
</script>

<style scoped>
.terminal {
    --terminal-clr: hsl(212.31, 18.31%, 13.92%);

    @apply fixed bottom-0 left-1/2 -translate-x-1/2 bg-[--terminal-clr] text-white box-border rounded-ss-xl rounded-se-xl w-[50vw];
}

/* HEAD */
.terminal .head {
    --terminal-head-clr: hsl(213.33, 17.65%, 10%);
    @apply bg-[--terminal-head-clr] text-center text-3xl relative py-3 rounded-ss-xl rounded-se-xl;
}

.terminal .head .close {
    --terminal-clr: hsl(212.31, 18.31%, 13.92%);

    @apply bg-[--terminal-clr] absolute top-1/2 -translate-y-1/2 right-4 h-4 w-4 rounded-full inline-block shadow-sm shadow-white/25;
    @apply hover:bg-red-500;
}

/* BODY */
.terminal .body {
    @apply px-10 pt-8 pb-4 overflow-y-auto h-[500px] text-lg;
}

/* .terminal .body .typed-element {
    display: flex;
    flex-flow: row wrap;
} */

.terminal .body .typing {
    display: inline;
}
</style>