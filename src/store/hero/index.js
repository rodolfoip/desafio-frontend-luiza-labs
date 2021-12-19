import { getHeroes } from '@/services/hero';

export default {
  namespaced: true,

  state: {
    heroes: [],
    pageCount: 0,
    favoriteHeroes: []
  },
  getters: {
    heroesList: (state) => state.heroes,
    pageCount: (state) => state.pageCount,
    favoriteHeroes: (state) => state.favoriteHeroes
  },
  mutations: {
    setHeroes: (state, heroes) => (state.heroes = heroes),
    setPageCount: (state, count) => (state.pageCount = count),
    addFavoriteHero: (state, heroToAdd) => state.favoriteHeroes.push(heroToAdd),
    removeFavoriteHero: (state, heroToRemove) => {
      state.favoriteHeroes = state.favoriteHeroes.filter((hero) => hero.id != heroToRemove.id);
    }
  },
  actions: {
    get: ({ commit }, { page, name, orderByAsc }) => {
      commit('hero/setHeroes', [], { root: true });

      const orderBy = orderByAsc ? 'name' : '-name';

      return getHeroes({ page, name, orderBy }).then((response) => {
        const { data } = response;
        commit('hero/setHeroes', data.data.results, { root: true });
        commit('hero/setPageCount', data.data.count, { root: true });

        return data.results;
      });
    },
    addFavoriteHero: ({ commit }, hero) => {
      commit('hero/addFavoriteHero', hero, { root: true });
    },
    removeFavoriteHero: ({ commit }, hero) => {
      commit('hero/removeFavoriteHero', hero, { root: true });
    }
  }
};
