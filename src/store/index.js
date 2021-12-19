import Vue from 'vue';
import Vuex from 'vuex';

import heroModule from './hero';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    hero: heroModule
  }
});
