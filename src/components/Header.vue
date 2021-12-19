<template>
  <header class="header" :class="{ search: searchable }">
    <img
      v-if="searchable"
      src="@/assets/img/logo_menor.svg"
      alt="header logo"
      class="img-responsive header-logo"
    />
    <img v-else src="@/assets/img/logo.svg" alt="header logo" class="img-responsive header-logo" />
    <Search :reduced="searchable" />
  </header>
</template>

<script>
export default {
  name: 'Header',

  components: {
    Search: () => import('@/components/SearchBar.vue')
  },

  props: {
    searchable: {
      type: Boolean,
      default: true
    }
  }
};
</script>

<style lang="scss">
.header {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 2rem;
}
</style>
