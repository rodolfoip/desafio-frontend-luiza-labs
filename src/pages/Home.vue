<template>
  <div class="home">
    <Header />
    <div class="container">
      <div class="page-header">
        <h2 class="page-header__title">Explore o universo</h2>
        <p class="page-header__description">
          Mergulhe no domínio deslumbrante de todos os personagens clássicos
          que você ama - e aqueles que vcoê descrubrirá em breve!
        </p>
        <Search />
      </div>
      <div class="content">
        <div class="content-info">
          <div class="content-info__count">
            Encontrados 20 heróis
          </div>
          <div class="content-info__order-by">
            <img
              src="@/assets/icons/ic_heroi.svg"
              alt="hero icon"
              class="img-responsive hero"
            />
            <span class="text">Ordernar por nome - A/Z</span>
            <Toggle class="toggle" :active="true" />
          </div>
          <button class="content-info__favorites">
            <figure class="icon">
              <figcaption>Heart icon</figcaption>
            </figure>
            Somente favoritos
          </button>
        </div>
        <ul class="content-list">
          <li v-for="hero, index of heroesList" :key="index" class="content-list__item">
            <Card :title="hero.name" :image="hero.thumbnail" />
          </li>
        </ul>
      </div>
    </div>
    <footer class="footer"></footer>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
export default {
  name: 'Home',

  components: {
    Header: () => import('@/components/Header.vue'),
    Search: () => import('@/components/SearchBar.vue'),
    Toggle: () => import('@/components/Toggle.vue'),
    Card: () => import('@/components/Card.vue'),
  },

  mounted () {
    this.getHeroes;
  },

  computed: {
    ...mapGetters({
      heroesList: 'hero/heroesList',
    }),
    ...mapActions({
      getHeroes: 'hero/get',
    })
  },

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
        display: flex;
        align-items: center;
        flex: 1 0 auto;
        margin-bottom: .5rem;
        color: $congo-pink;

        @include media-query-min('md') {
          margin-bottom: 0;
        }

        @include media-query-min('lg') {
          flex-grow: 0;
        }
      }

      &__order-by {
        @include media-query-min('md') {
          margin-right: 2rem;
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
        border: none;
        background: none;
        font-size: unset;
        padding: 0;

        &:hover,
        &:focus {
          cursor: pointer;

          > .icon {
            background-image: url('~@/assets/icons/favorito_03.svg');
          }
        }

        > .icon {
          width: 100%;
          height: 100%;
          max-width: 1.25rem;
          max-height: 1.25rem;
          margin-right: 1rem;
          background: url('~@/assets/icons/favorito_01.svg') center/cover no-repeat;
          transition: background .2s ease-out;

          @include media-query-min('md') {
            max-width: 1.45rem;
            max-height: 1.45rem;
          }

          > figcaption {
            color: transparent;
            opacity: 0;
          }
        }
      }
    }

    &-list {
      display: flex;
      flex-flow: row wrap;
      overflow: hidden;
      margin: 0 -1rem;
      list-style: none;

      &__item {
        flex: 0 0 50%;
        margin-top: 2rem;
        padding: 0 1rem;

        &:nth-child(-n+2){
          margin-top: 0;
        }

        @include media-query-min('md'){
          flex-basis: 25%;

          &:nth-child(-n+4){
            margin-top: 0;
          }
        }
      }
    }
  }

  .footer {
    height: 3rem;
    margin-top: 3rem;
    background-color: $red;
  }
}
</style>
