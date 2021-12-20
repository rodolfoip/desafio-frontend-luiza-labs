<template>
  <header class="header" :class="{ search: searchable }">
    <router-link :to="headerLink" class="header__link">
      <img
        v-if="searchable"
        src="@/assets/img/logo_menor.svg"
        alt="header logo"
        class="img-responsive header-logo"
      />
      <img
        v-else
        src="@/assets/img/logo.svg"
        alt="header logo"
        class="img-responsive header-logo"
      />
    </router-link>
    <Search v-if="searchable" :reduced="searchable" @search="onSearch" />
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
      default: false
    },
    headerLink: {
      type: String,
      default: '/'
    }
  },

  methods: {
    onSearch(value) {
      this.$emit('on-search', value);
    }
  }
};
</script>

<style lang="scss">
.header {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 0;

  &.search {
    .header__link {
      margin-bottom: 2rem;

      @include media-query-min('md') {
        margin-bottom: 0;
      }
    }
  }
}
</style>
