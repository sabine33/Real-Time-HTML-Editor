<template>
  <div class="heading">
    <div class="title">Real Time HTML Editor</div>
    <div class="message" v-if="message">{{ message }}</div>
    <div class="menus">
      <div>
        <label class="switch">
          <input type="checkbox" v-model="darkMode" />
          <span class="slider round"></span>
        </label>
      </div>

      <div class="form-group">
        <label for="">Orientation</label>
        <select class="form-control" v-model="orientation">
          <option
            v-for="(orient, index) in orientations"
            :key="index"
            :value="orient"
          >
            {{ orient }}
          </option>
        </select>
      </div>
      <div>
        <button @click="saveCode()">Save</button>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapState, mapMutations } from "vuex";

  export default {
    computed: {
      ...mapState({
        message: (state) => state.message,
        orientations: (state) => state.orientations,
        darkMode: (state) => state.darkMode,
      }),
      darkMode: {
        get() {
          return this.$store.state.darkMode;
        },
        set(value) {
          this.$store.commit("setMode", value);
        },
      },
      orientation: {
        get() {
          return this.$store.state.orientation;
        },
        set(value) {
          this.$store.commit("setOrientation", value);
        },
      },
    },

    methods: {
      ...mapMutations({
        saveCode: "saveCode",
      }),
    },
  };
</script>

<style></style>
