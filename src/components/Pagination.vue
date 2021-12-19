<template>
  <div class="pagination">
    <button
      class="pagination__previous"
      :class="{ disabled: !hasPreviousPage }"
      @click="onClickPrevious"
    >
      Anterior
    </button>
    <div class="pagination__page">
      {{ page }}
    </div>
    <button class="pagination__next" :class="{ disabled: !hasNextPage }" @click="onClickNext">
      Próximo
    </button>
  </div>
</template>

<script>
export default {
  name: 'Pagination',

  props: {
    page: {
      type: Number,
      required: true
    },
    hasNextPage: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    hasPreviousPage() {
      return this.page !== 1;
    }
  },

  methods: {
    onClickPrevious() {
      if (this.hasPreviousPage) {
        this.$emit('previous-page');
      }
    },
    onClickNext() {
      if (this.hasNextPage) {
        this.$emit('next-page');
      }
    }
  }
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

    &:hover {
      background-color: $red-dark;
    }

    &.disabled {
      background-color: $gray-disabled;
      cursor: not-allowed;
    }
  }

  &__page {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2rem;
    height: 2rem;
    margin-left: 2rem;
    margin-right: 2rem;
    border-radius: 4px;
    background-color: $linen;
    color: $title-color;
  }
}
</style>
