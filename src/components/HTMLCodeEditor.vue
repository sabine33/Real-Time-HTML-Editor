<template>
  <code-editor
    v-model="source"
    :language_selector="true"
    :wrap_code="true"
    :display_language="true"
    border_radius="0px"
    :theme="darkMode ? 'dark' : 'light'"
    :languages="[['html', 'HTML']]"
    width="100%"
    height="100%"
  ></code-editor>
</template>

<script>
  import CodeEditor from "simple-code-editor";

  import { mapState } from "vuex";
  export default {
    props: ["darkMode"],
    data() {
      return {};
    },
    components: { "code-editor": CodeEditor },
    methods: {},
    computed: {
      source: {
        get() {
          return this.$store.state.source;
        },
        set(value) {
          this.$store.commit("updateSource", value);
        },
      },
    },
  };
</script>

<style></style>
