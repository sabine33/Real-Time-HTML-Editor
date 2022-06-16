<template>
  <div id="app">
    <HeadingVue />
    <router-view />
  </div>
</template>

<script>
  import HeadingVue from "./components/Heading.vue";
  HeadingVue;
  export default {
    components: { HeadingVue },
  };
</script>

<style></style>
