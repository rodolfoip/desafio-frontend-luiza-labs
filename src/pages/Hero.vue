<template>
  <div class="hero-page">
    <div class="container">
      <Header />
      <section v-if="heroSelected" class="hero">
        <div class="hero__body">
          <div class="hero__info">
            <h1 class="title">
              {{ heroSelected.name }}
            </h1>
            <FavButton />
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
          </div>
        </div>
        <figure class="hero__image">
          <img :src="imageUrl" alt="heroSelected.name" class="img-responsive" />
        </figure>
      </section>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Hero',

  components: {
    Header: () => import('@/components/Header.vue'),
    FavButton: () => import('@/components/FavoriteButton.vue')
  },

  computed: {
    ...mapGetters({
      heroSelected: 'hero/heroSelected'
    }),
    imageUrl() {
      return `${this.heroSelected.thumbnail.path}.${this.heroSelected.thumbnail.extension}`;
    }
  },

  mounted() {
    if (this.$route.params.id !== this.heroSelected?.id) {
      this.getHero();
    }
  },

  methods: {
    getHero() {
      this.$store.dispatch('hero/getHeroById', this.$route.params.id);
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

  .header {
    margin-bottom: 5rem;
  }

  .hero {
    display: flex;
    flex-flow: row nowrap;

    &__body {
      flex-basis: 30%;
      margin-right: 4rem;
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
      .films {
        display: flex;
        flex-flow: column nowrap;
        justify-content: space-between;
        flex-basis: 50%;
        font-weight: 600;
        color: $title-color;

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
    }

    &__image {
      flex-basis: 50%;
      max-width: 25rem;
      margin-left: auto;
      margin-right: auto;
    }
  }
}
</style>
