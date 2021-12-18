import { getHeroes } from '@/services/hero';

export default {
  namespaced: true,

  state: {
    heroes: [],
  },
  getters: {
    heroesList: (state) => state.heroes,
  },
  mutations: {
    setHeroes: (state, heroes) => { (state.heroes = heroes); },
  },
  actions: {
    get: ({ commit }, { page, name, orderByAsc }) => {
      commit('hero/setHeroes', [], { root: true });

      const orderBy =  orderByAsc ? 'name' : '-name';

      return getHeroes({ page, name, orderBy })
        .then((response) => {
          const { data } = response;
          commit('hero/setHeroes', data.data.results, { root: true });

          return data.results;
        });
    },
  },
};
