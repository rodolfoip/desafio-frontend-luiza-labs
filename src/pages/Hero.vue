<template>
  <div class="hero-page">
    <div class="container">
      <Header searchable @on-search="searchByName" />
      <section v-if="heroSelected" class="hero">
        <div class="hero__body">
          <div class="hero__info">
            <h1 class="title">
              {{ heroSelected.name }}
            </h1>
            <FavButton
              hiddenText="favoritar herói"
              :active="isFavorite(heroSelected.id)"
              :disabled="!isFavorite(heroSelected.id) && !favoriteIsAble"
              @on-click="toggleFavorite(heroSelected)"
            />
          </div>
          <div class="hero__content">
            <p class="description">
              {{ heroSelected.description }}
            </p>

            <div class="comic">
              <h4 class="comic__title">Quadrinhos</h4>
              <div class="comic__content">
                <img
                  src="@/assets/icons/ic_quadrinhos.svg"
                  alt="comic icon"
                  class="img-responsive"
                />
                {{ heroSelected.comics.available }}
              </div>
            </div>
            <div class="films">
              <h4 class="films__title">Filmes</h4>
              <div class="films__content">
                <img src="@/assets/icons/ic_trailer.svg" alt="comic icon" class="img-responsive" />
                {{ heroSelected.series.available }}
              </div>
            </div>
            <div class="last-release">
              <h4 class="last-release__title">Último lançamento:</h4>
              <div class="last-release__date">{{ lastComicReleaseDate }}</div>
            </div>
          </div>
        </div>
        <figure class="hero__image">
          <img :src="imageUrl" alt="heroSelected.name" class="img-responsive" />
        </figure>
      </section>
      <section class="comics">
        <h2 class="comics__title">Últimos lançamentos</h2>
        <ul v-if="comics" class="comics__list">
          <li class="comic" v-for="(comic, index) of comics" :key="index">
            <Card :title="comic.title" :image="comic.thumbnail" />
          </li>
        </ul>
      </section>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { favoriteMixin } from '@/mixins/favorites';
import dayjs from 'dayjs';

export default {
  name: 'Hero',

  mixins: [favoriteMixin],

  components: {
    Header: () => import('@/components/Header.vue'),
    FavButton: () => import('@/components/FavoriteButton.vue'),
    Card: () => import('@/components/Card.vue')
  },

  computed: {
    ...mapGetters({
      heroSelected: 'hero/heroSelected',
      comics: 'hero/comics'
    }),
    imageUrl() {
      return `${this.heroSelected.thumbnail.path}.${this.heroSelected.thumbnail.extension}`;
    },
    lastComicReleaseDate() {
      if (this.comics.length) {
        const comics = [...this.comics];
        const lastComic = comics.shift().dates.find((date) => date.type === 'onsaleDate');
        return dayjs(lastComic.date).format('DD MMM[.] YYYY');
      }
      return '';
    }
  },

  mounted() {
    if (this.$route.params.id !== this.heroSelected?.id) {
      this.getHero();
    }
    this.getComics();
  },

  methods: {
    getHero() {
      this.$store.dispatch('hero/getHeroById', this.$route.params.id);
    },
    getComics() {
      this.$store.dispatch('hero/getHeroComics', this.$route.params.id);
    },
    searchByName(value) {
      this.$router.push({
        name: 'Home',
        query: {
          search: value
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.hero-page {
  display: flex;
  flex-flow: column nowrap;
  flex: 1;
  justify-content: space-between;
  background-color: $linen;

  .header {
    margin-bottom: 2rem;
    flex-direction: column;

    @include media-query-min('md') {
      flex-direction: row;
      margin-bottom: 3.5rem;
    }

    @include media-query-min('lg') {
      margin-bottom: 5rem;
    }
  }

  .hero {
    display: flex;
    flex-direction: column;
    margin-bottom: 3rem;

    @include media-query-min('md') {
      flex-direction: row;
    }

    &__body {
      overflow: hidden;
      margin-bottom: 2rem;

      @include media-query-min('md') {
        flex-basis: 50%;
        margin-bottom: 0;
        margin-right: 4rem;
      }

      @include media-query-min('lg') {
        flex-basis: 30%;
      }
    }

    &__info {
      display: flex;
      flex-flow: row nowrap;
      justify-content: space-between;
      margin-bottom: 2rem;

      .title {
        font-size: 1.5rem;
        color: $title-color;
        margin: 0;
      }

      .favorite {
        margin-left: 1rem;
      }
    }

    &__content {
      display: flex;
      flex-flow: row wrap;

      .description {
        color: $text-color;
        margin-bottom: 2rem;
      }

      .comic,
      .films,
      .last-release {
        color: $title-color;

        &__title {
          font-weight: 600;
        }
      }

      .comic,
      .films {
        display: flex;
        flex-flow: column nowrap;
        justify-content: space-between;
        flex-basis: 50%;
        margin-bottom: 2.5rem;

        &__title {
          margin-bottom: 0.75rem;
        }

        &__content {
          display: flex;
          align-items: flex-end;

          img {
            margin-right: 0.75rem;
          }
        }
      }

      .last-release {
        display: flex;
        flex-flow: row nowrap;

        &__title {
          margin-right: 0.75rem;
        }
      }
    }

    &__image {
      flex-basis: 50%;
      max-width: 25rem;
      margin-left: auto;
      margin-right: auto;
    }
  }

  .comics {
    &__title {
      margin-bottom: 2rem;
      color: $title-color;
    }

    &__list {
      flex-flow: row wrap;
      overflow: hidden;
      margin: 0 -1rem 3rem;
      list-style: none;

      @include media-query-min('sm') {
        display: flex;
      }

      .comic {
        flex: 0 0 50%;
        margin-top: 2rem;
        padding: 0 1rem;
        text-align: center;

        @include media-query-min('sm') {
          text-align-last: left;

          &:nth-child(-n + 2) {
            margin-top: 0;
          }
        }

        @include media-query-min('lg') {
          flex-basis: (100% /4);

          &:nth-child(-n + 4) {
            margin-top: 0;
          }
        }

        @include media-query-min('xl') {
          flex-basis: (100% /5);

          &:nth-child(-n + 5) {
            margin-top: 0;
          }
        }
      }
    }
  }
}
</style>
