<template>
  <div class="home">
    <multi-pane
      :class="{
        'vertical-panes': orientation == 'vertical',
        'horizontal-panes': orientation == 'horizontal',
      }"
      :layout="orientation"
    >
      <div
        class="pane"
        :class="{
          vertical: orientation == 'vertical',
          horizontal: orientation == 'horizontal',
        }"
      >
        <HTMLCodeEditorVue :darkMode="darkMode" />
      </div>
      <multipane-resizer> </multipane-resizer>
      <div
        class="pane"
        :class="{
          vertical: orientation == 'vertical',
          horizontal: orientation == 'horizontal',
        }"
      >
        <OutputVue :orientation="orientation" />
      </div>
    </multi-pane>
  </div>
</template>

<script>
  import OutputVue from "../components/Output.vue";
  import HTMLCodeEditorVue from "../components/HTMLCodeEditor.vue";
  import { Multipane, MultipaneResizer } from "vue-multipane";
  import { mapState } from "vuex";

  export default {
    name: "Home",
    data() {
      return {};
    },
    mounted() {},
    methods: {},
    components: {
      OutputVue,
      HTMLCodeEditorVue,
      "multi-pane": Multipane,
      "multipane-resizer": MultipaneResizer,
    },
    computed: {
      ...mapState({
        message: (state) => state.message,
        orientation: (state) => state.orientation,
        orientations: (state) => state.orientations,
        darkMode: (state) => state.darkMode,
      }),
    },
  };
</script>
