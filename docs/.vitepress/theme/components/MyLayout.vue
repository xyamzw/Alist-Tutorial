<template>
    <DefaultTheme.Layout>
     
      <template #layout-top>
        <MouseFollower />
        <MouseClick />
      </template>
    </DefaultTheme.Layout>
  </template>
  <script setup>
  
  import MouseClick from "./MouseClick.vue";
  import MouseFollower from "./MouseFollower.vue";
  
  </script>