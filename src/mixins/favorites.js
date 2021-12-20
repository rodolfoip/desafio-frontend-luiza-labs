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
    },
    toggleFavorite(hero) {
      const dispatchType = this.isFavorite(hero.id)
        ? 'hero/removeFavoriteHero'
        : 'hero/addFavoriteHero';
      this.$store.dispatch(dispatchType, hero);
    }
  }
};

export { favoriteMixin };
