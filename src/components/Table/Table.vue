<template>
 <table class="data" data-rtc-resizable-table="table.one">
      <thead>
          <tr>
              <th></th><!-- THIS COLUMN WILL NOT BE RESIZABLE -->
              <th data-rtc-resizable="name">Name</th>
              <th data-rtc-resizable="country">Counrty</th>
              <th data-rtc-resizable="region">Region</th>
              <th>City</th><!-- THIS COLUMN WILL NOT BE RESIZABLE -->
              <th data-rtc-resizable="street">Street</th>
              <th data-rtc-resizable="post-code">Post Code</th>
              <th data-rtc-resizable="last-update">Last updated</th>
              <th data-rtc-resizable="uuid">UUID</th>
          </tr>
      </thead>
      <tbody>
          <tr>
              <td>1</td>
              <td>Eugenia</td>
              <td>Serbia</td>
              <td>MN</td>
              <td>Minneapolis</td>
              <td>Ap #207-8285 Nibh Rd.</td>
              <td>41754</td>
              <td>2017-11-15T16:52:00-08:00</td>
              <td>E212DAC2-220E-9589-D96A-3B58242E9817</td>
          </tr>
      </tbody>
  </table>
</template>

<script setup lang="ts">

// //will use the default options


</script>

<style scoped>

</style>