<script setup lang="ts">

</script>
<template>
  <div class="contain">
    <Sidebar />
    <Navbar />
    <MainView />
  </div>    
</template> 

<style scoped>
  .contain {
    display: grid;
    grid-template-columns: min-content calc(100% - 56px);
    grid-template-rows: min-content 1fr;
    grid-auto-flow: unset;
  }

  .sidebar{
    grid-column:1 / 1;
    grid-row: 1 / span 2;
  }
</style>