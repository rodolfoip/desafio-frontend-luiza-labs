import { getHeroes } from '@/services/hero';

export default {
  namespaced: true,

  state: {
    heroes: [],
    pageCount: 0,
    totalCount: 0,
    favoriteHeroes: [],
    heroSelected: null
  },
  getters: {
    heroesList: (state) => state.heroes,
    pageCount: (state) => state.pageCount,
    totalCount: (state) => state.totalCount,
    favoriteHeroes: (state) => state.favoriteHeroes,
    heroSelected: (state) => state.heroSelected
  },
  mutations: {
    setHeroes: (state, heroes) => (state.heroes = heroes),
    setPageCount: (state, count) => (state.pageCount = count),
    setTotalCount: (state, totalCount) => (state.totalCount = totalCount),
    addFavoriteHero: (state, heroToAdd) => state.favoriteHeroes.push(heroToAdd),
    removeFavoriteHero: (state, heroToRemove) => {
      state.favoriteHeroes = state.favoriteHeroes.filter((hero) => hero.id != heroToRemove.id);
    },
    setHero: (state, hero) => (state.heroSelected = hero)
  },
  actions: {
    get: ({ commit }, { page, name, orderByAsc }) => {
      commit('hero/setHeroes', [], { root: true });

      const orderBy = orderByAsc ? 'name' : '-name';

      return getHeroes({ page, name, orderBy }).then((response) => {
        const { data } = response;
        commit('hero/setHeroes', data.data.results, { root: true });
        commit('hero/setPageCount', Math.ceil(data.data.total / data.data.limit), { root: true });
        commit('hero/setTotalCount', data.data.total, { root: true });

        return data.results;
      });
    },
    addFavoriteHero: ({ commit }, hero) => {
      commit('hero/addFavoriteHero', hero, { root: true });
    },
    removeFavoriteHero: ({ commit }, hero) => {
      commit('hero/removeFavoriteHero', hero, { root: true });
    },
    setHero: ({ commit }, hero) => {
      commit('hero/setHero', hero, { root: true });
    }
  }
};
