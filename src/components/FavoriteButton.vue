<template>
  <button class="favorite" :class="{ active: active }">
    <img v-show="active && !activeHover" @mouseenter="activeHover = true" src="@/assets/icons/favorito_01.svg" alt="favorite icon" class="img-responsive">
    <img v-show="active && activeHover" @mouseleave="activeHover = false" src="@/assets/icons/favorito_03.svg" alt="favorite icon" class="img-responsive">
    <img v-show="!active" src="@/assets/icons/favorito_02.svg" alt="favorite icon" class="img-responsive">
    <div v-if="text" class="favorite-text">
      {{ text }}
    </div>
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

  data() {
    return {
      activeHover: false,
    };
  }
};
</script>

<style lang="scss" scoped>
.favorite {
  display: flex;
  align-items: center;
  padding: 0;
  border: none;
  background: transparent;
  cursor: pointer;
  color: $congo-pink;
  white-space: nowrap;

  &-text {
    margin-left: 1rem;
  }

  &-hidden-text {
    color: transparent;
    opacity: 0;
    max-width: 0px;
  }
}
</style>
