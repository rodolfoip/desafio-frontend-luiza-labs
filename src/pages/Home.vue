<template>
  <div class="home">
    <Header />
    <div class="container">
      <div class="page-header">
        <h2 class="page-header__title">Explore o universo</h2>
        <p class="page-header__description">
          Mergulhe no domínio deslumbrante de todos os personagens clássicos que você ama - e
          aqueles que vcoê descrubrirá em breve!
        </p>
        <Search @search="searchByName" :searchInput="filters.name" />
      </div>
      <div class="content">
        <div class="content-info">
          <div v-if="fullHeroes" class="content-info__count">
            Encontrados {{ fullHeroes.length }} heróis
          </div>
          <div class="content-info__order-by">
            <img src="@/assets/icons/ic_heroi.svg" alt="hero icon" class="img-responsive hero" />
            <span class="text">Ordernar por nome - A/Z</span>
            <Toggle class="toggle" :active="this.filters.orderByAsc" @toggle="toggleOrderBy" />
          </div>
          <FavButton
            class="content-info__favorites"
            text="Somente favoritos"
            :active="onlyFavorites"
            @on-click="onlyFavorites = !onlyFavorites"
          />
        </div>
        <ul class="content-list">
          <li v-for="(hero, index) of fullHeroes" :key="index" class="content-list__item">
            <Card
              :title="hero.name"
              :image="hero.thumbnail"
              :active-favorite="isFavorite(hero.id)"
              :disable-favorite-button="!isFavorite(hero.id) && !favoriteIsAble"
              clickable
              favorite-button
              @on-click="showHeroDetails(hero)"
              @toggle-favorite="toggleFavorite(hero)"
            />
          </li>
        </ul>
        <Pagination
          v-if="!onlyFavorites"
          :page="filters.page"
          :has-next-page="hasNextPage"
          @previous-page="previousPage"
          @next-page="nextPage"
        />
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { favoriteMixin } from '@/mixins/favorites';

export default {
  name: 'Home',

  mixins: [favoriteMixin],

  components: {
    Header: () => import('@/components/Header.vue'),
    Search: () => import('@/components/SearchBar.vue'),
    Toggle: () => import('@/components/Toggle.vue'),
    Card: () => import('@/components/Card.vue'),
    FavButton: () => import('@/components/FavoriteButton.vue'),
    Pagination: () => import('@/components/Pagination.vue'),
    Footer: () => import('@/components/Footer.vue')
  },

  data() {
    return {
      filters: {
        page: 1,
        name: '',
        orderByAsc: true
      },
      onlyFavorites: false
    };
  },

  mounted() {
    if (!this.$route.query.search) {
      this.getHeroes();
    } else {
      this.searchByName(this.$route.query.search);
      this.$router.replace({ search: null });
    }
  },

  computed: {
    ...mapGetters({
      heroesList: 'hero/heroesList',
      pageCount: 'hero/pageCount'
    }),
    fullHeroes() {
      return this.onlyFavorites ? this.favoriteHeroes : this.heroesList;
    },
    hasNextPage() {
      return this.filters.page < this.pageCount;
    }
  },

  methods: {
    getHeroes() {
      this.$store.dispatch('hero/get', this.filters);
    },
    searchByName(value) {
      this.filters.name = value;
      this.filters.page = 1;
      this.getHeroes();
    },
    toggleOrderBy() {
      this.filters.orderByAsc = !this.filters.orderByAsc;
      this.filters.page = 1;
      this.getHeroes();
    },
    previousPage() {
      this.filters.page--;
      this.getHeroes();
    },
    nextPage() {
      this.filters.page++;
      this.getHeroes();
    },
    showHeroDetails(hero) {
      this.$store.dispatch('hero/setHero', hero);
      this.$router.push({
        name: 'Hero',
        params: {
          id: hero.id
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.home {
  display: flex;
  flex-flow: column nowrap;
  flex: 1;
  justify-content: space-between;

  .page-header {
    margin-bottom: 3rem;
    text-align: center;

    &__title {
      margin-bottom: 1rem;
      font-size: 2rem;
      color: $title-color;
      text-transform: uppercase;
    }

    &__description {
      color: $text-color;
      margin-bottom: 2.5rem;
    }
  }

  .content {
    &-info {
      display: flex;
      flex-flow: column nowrap;
      justify-content: space-between;
      margin-bottom: 1rem;

      @include media-query-min('md') {
        flex-direction: row;
        align-items: center;
        margin-bottom: 2rem;
      }

      @include media-query-min('lg') {
        font-size: 1.2rem;
      }

      &__count {
        flex: 1 0 auto;
        order: 1;
        color: $text-color;

        @include media-query-min('md') {
          order: 0;
        }
      }

      &__order-by,
      &__favorites {
        margin-bottom: 0.5rem;

        @include media-query-min('md') {
          margin-bottom: 0;
        }
      }

      &__order-by {
        display: flex;
        align-items: center;
        flex: 1 0 auto;
        color: $congo-pink;

        @include media-query-min('md') {
          margin-right: 2rem;
          flex-grow: 0;
        }

        > .text {
          flex: 1 0 auto;
          margin-left: 1rem;
          margin-right: 1rem;

          @include media-query-min('md') {
            margin-right: 1.5rem;
          }
        }

        > .hero {
          @include media-query-min('lg') {
            min-width: 1.5rem;
          }
        }

        > .toggle {
          max-width: 3rem;
        }
      }

      &__favorites {
        font-size: unset;

        @include media-query-min('md') {
          justify-content: flex-end;
        }
      }
    }

    &-list {
      flex-flow: row wrap;
      overflow: hidden;
      margin: 0 -1rem 3rem;
      list-style: none;

      @include media-query-min('sm') {
        display: flex;
      }

      &__item {
        flex: 0 0 50%;
        margin-top: 2rem;
        padding: 0 1rem;

        &:first-child {
          margin-top: 0;
        }

        @include media-query-min('sm') {
          &:nth-child(-n + 2) {
            margin-top: 0;
          }
        }

        @include media-query-min('md') {
          flex-basis: 25%;

          &:nth-child(-n + 4) {
            margin-top: 0;
          }
        }

        .card {
          max-width: 298px;
          margin-left: auto;
          margin-right: auto;

          @include media-query-min('sm') {
            max-width: unset;
          }
        }
      }
    }
  }
}
</style>
