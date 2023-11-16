<script setup lang="ts">

</script>
<template>
  <div class="contain">
    <Sidebar />
    <Navbar />
    <TerminalTrigger />
    <Terminal />
  </div>    
</template> 

<style scoped>
  .contain {
    display: grid;
    grid-template-columns: min-content 1fr;
    grid-template-rows: min-content 1fr;
  }

  .sidebar{
    grid-column:1 / 1;
    grid-row: 1 / span 2;
  }
</style>