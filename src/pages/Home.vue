<template>
  <div class="home">
    <Header />
    <div class="page-header">
      <div class="container">
        <h2 class="page-header__title">Explore o universo</h2>
        <p class="page-header__description">
          Mergulhe no domínio deslumbrante de todos os personagens clássicos
          que você ama - e aqueles que vcoê descrubrirá em breve!
        </p>
        <Search />
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
  },
};
</script>

<style lang="scss" scoped>
.home {
  .page-header {
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
}
</style>
