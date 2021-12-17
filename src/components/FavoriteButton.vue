<template>
  <button class="favorite" :class="{ active: active }">
    {{ text }}
    <span class="favorite-hidden-text">{{ hiddenText }}</span>
  </button>
</template>

<script>
export default {
  name: 'FavoriteButton',

  props: {
    text: {
      type: String,
      default: '',
    },
    hiddenText: {
      type: String,
      default: '',
    },
    active: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
.favorite {
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  max-width: 1.5rem;
  max-height: 1.5rem;
  padding: 0;
  transition: background .2s ease-out;
  background: url('~@/assets/icons/favorito_02.svg') center/contain no-repeat;
  cursor: pointer;
  color: $congo-pink;
  border: none;

  &.active {
    background-image: url('~@/assets/icons/favorito_01.svg');

    &:hover,
    &:focus {
      background-image: url('~@/assets/icons/favorito_03.svg');
    }
  }

  &-hidden-text {
    color: transparent;
    opacity: 0;
    max-width: 0px;
  }
}
</style>
