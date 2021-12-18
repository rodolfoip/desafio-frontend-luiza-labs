<template>
  <form @submit.prevent="search">
    <label for="search" class="search">
      <button class="search__button"  type="submit">
        <img
          src="@/assets/icons/ic_busca.svg"
          alt="search icon"
          class="img-responsive search__icon"
        />
      </button>
      <input
        type="text"
        name="search"
        id="search-input"
        placeholder="Procure por heróis"
        class="search__input"
        v-model="searchValue"
      />
    </label>
  </form>
</template>

<script>
export default {
  name: 'searchBar',

  data() {
    return {
      searchValue: '',
    };
  },

  methods: {
    search(){
      this.$emit('search', this.searchValue);
    },
  },
};
</script>

<style lang="scss" scoped>
  .search {
    display: flex;
    flex-flow: row nowrap;
    width: 100%;
    height: 2.5rem;
    max-width: 25rem;
    margin: 0 auto;
    padding: 0 1rem;
    border-radius: 5rem;
    background-color: $linen;

    @include media-query-min('sm') {
      height: 3rem;
      padding: 0 1.5rem;
      max-width: 30rem;
    }

    @include media-query-min('md') {
      height: 3.5rem;
      max-width: 40rem;
    }

    @include media-query-min('lg') {
      height: 4rem;
      max-width: 45rem;
    }

    @include media-query-min('xl') {
      height: 5rem;
      max-width: 56rem;
    }

    &__button {
      display: flex;
      align-items: center;
      min-width: 2rem;
      border: none;
      background: none;
      padding: .5rem;

      @include media-query-min('sm') {
        padding-left: 1rem;
        padding-right: 1rem;
      }

      @include media-query-min('md') {
        padding-left: 1.5rem;
        padding-right: 1.5rem;
      }

      &:hover,
      &:focus {
        cursor: pointer;
      }
    }

    &__icon {
      max-height: 100%;
    }

    &__input {
      flex: 1;
      height: 100%;
      margin-left: .5rem;
      border: none;
      background: transparent;
      font-size: 1.2rem;
      color: $congo-pink;

      @include media-query-min('sm') {
        margin-left: 1rem;
      }

      @include media-query-min('md') {
        margin-left: 1.5rem;
      }

      &:focus-visible {
        border: none;
        outline: none;
      }

      &::placeholder {
        vertical-align: middle;
        opacity: 1;
      }
    }
  }
</style>
