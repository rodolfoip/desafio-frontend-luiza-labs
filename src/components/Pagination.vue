<template>
  <div class="pagination">
    <button class="pagination__previous disabled">Anterior</button>
    <button class="pagination__next">Próximo</button>
  </div>
</template>

<script>
export default {
  name: 'Pagination'
};
</script>

<style lang="scss" scoped>
.pagination {
  display: flex;
  align-items: center;
  justify-content: center;

  &__previous,
  &__next {
    border: none;
    border-radius: 4px;
    padding: 0.5rem 0.75rem;
    background-color: $red;
    cursor: pointer;
    font-size: 1rem;
    color: $white;
    transition: background-color 0.15s;

    &:hover,
    &:focus {
      background-color: $red-dark;
    }

    &.disabled {
      background-color: $gray-disabled;
      cursor: not-allowed;
    }
  }

  &__next {
    margin-left: 1rem;
  }
}
</style>
