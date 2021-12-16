<template>
  <label for="search" class="search">
    <button class="search__button">
      <img
        src="@/assets/icons/ic_busca.svg"
        alt="search icon"
        class="img-responsive"
      />
    </button>
    <input
      type="text"
      name="search"
      id="search-input"
      placeholder="Procure por heróis"
      class="search__input"
    />
  </label>
</template>

<script>
export default {
  name: 'searchBar',
};
</script>

<style lang="scss" scoped>
  .search {
    display: flex;
    flex-flow: row nowrap;
    width: 100%;
    height: 5rem;
    max-width: 56rem;
    margin: 0 auto;
    padding: 0 1.5rem;
    border-radius: 5rem;
    background-color: $linen;

    &__button {
      border: none;
      padding-top: 1.5rem;
      padding-bottom: 1.5rem;
      background: none;

      &:hover,
      &:focus {
        cursor: pointer;
      }
    }

    &__input {
      flex: 1;
      height: 100%;
      margin-left: 1.5rem;
      border: none;
      background: transparent;
      font-size: 1.2rem;
      color: $congo-pink;

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
