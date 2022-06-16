import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    message: "No Message",
    orientation: "vertical",
    darkMode: false,
    orientations: ["vertical", "horizontal"],
    source: localStorage.getItem("code") ?? "<h1>Hi Mom!</h1>",
  },
  mutations: {
    setOrientation(state, payload) {
      state.orientation = payload;
    },
    setMode(state, payload) {
      state.darkMode = payload;
    },
    updateSource(state, payload) {
      state.source = payload;
    },
    saveCode(state) {
      console.log("written");
      localStorage.setItem("code", state.source);
      // navigator.clipboard.writeText(state.source);
      state.message = "Saved";
    },
  },
  actions: {},
  modules: {},
});
