import { mapGetters } from 'vuex';

const favoriteMixin = {
  computed: {
    ...mapGetters({
      favoriteHeroes: 'hero/favoriteHeroes'
    })
  },

  methods: {
    isFavorite(id) {
      return this.favoriteHeroes.some((hero) => hero.id === id);
    }
  }
};

export { favoriteMixin };
