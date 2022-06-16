<template>
  <vue-friendly-iframe :src="source" />
</template>

<script>
  import { VueFriendlyIframe } from "vue-friendly-iframe";
  import { mapState } from "vuex";
  export default {
    props: ["orientation"],
    components: {
      "vue-friendly-iframe": VueFriendlyIframe,
    },
    computed: {
      ...mapState({
        source: (state) =>
          "data:text/html;charset=utf-8," + encodeURIComponent(state.source),
      }),
    },
  };
</script>

<style>
  iframe {
    width: 100%;
    height: 100%;
  }
</style>
