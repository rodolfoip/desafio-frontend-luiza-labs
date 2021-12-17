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
            <Toggle :active="true" />
          </div>
          <button class="content-info__favorites">
            <figure class="icon">
              <figcaption>Heart icon</figcaption>
            </figure>
            Somente favoritos
          </button>
        </div>
        <ul class="content-list">
          <li v-for="i of 14" :key="i" class="content-list__item">
            <Card />
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Home',
  components: {
    Header: () => import('@/components/Header.vue'),
    Search: () => import('@/components/SearchBar.vue'),
    Toggle: () => import('@/components/Toggle.vue'),
    Card: () => import('@/components/Card.vue'),
  },
};
</script>

<style lang="scss" scoped>
.home {
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
      align-items: center;
      justify-content: space-between;
      font-size: 1.2rem;
      margin-bottom: 2rem;

      &__count {
        flex: 1 0 auto;
        color: $text-color;
      }

      &__order-by,
      &__favorites {
        display: flex;
        align-items: center;
        flex: 0 0 auto;
        color: $congo-pink;
      }

      &__order-by {
        margin-right: 2rem;

        > .text {
          margin-left: 1rem;
          margin-right: 1.5rem;
        }

        > .hero {
          min-width: 1.5rem;
        }
      }

      &__favorites {
        border: none;
        background: none;
        font-size: unset;

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
          max-width: 1.45rem;
          max-height: 1.45rem;
          margin-right: 1rem;
          background: url('~@/assets/icons/favorito_01.svg') center/cover no-repeat;
          transition: background .2s ease-out;

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
      margin-top: -1rem;
      margin-left: -1rem;
      margin-right: -1rem;
      padding-left: 0;
      list-style: none;

      &__item {
        flex: 0 0 25%;
      }
    }
  }
}
</style>
