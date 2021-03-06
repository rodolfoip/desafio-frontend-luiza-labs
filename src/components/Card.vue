<template>
  <div class="card">
    <figure class="card__image">
      <img :src="imageUrl" alt="hero image" class="img-responsive" />
    </figure>
    <div class="card__content" :class="{ 'only-title': !favoriteButton }">
      <h4 class="card__title" :class="{ clickable: clickable }" @click="onClick">
        {{ title }}
      </h4>
      <FavButton
        v-if="favoriteButton"
        class="card__favorite"
        hiddenText="favoritar herói"
        :disabled="disableFavoriteButton"
        :active="activeFavorite"
        @on-click="toggleFavorite"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',

  components: {
    FavButton: () => import('@/components/FavoriteButton.vue')
  },

  props: {
    title: {
      type: String,
      required: true
    },
    image: {
      type: Object,
      required: true
    },
    favoriteButton: {
      type: Boolean,
      default: false
    },
    activeFavorite: {
      type: Boolean,
      default: false
    },
    disableFavoriteButton: {
      type: Boolean,
      default: false
    },
    clickable: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    imageUrl() {
      return `${this.image.path}.${this.image.extension}`;
    }
  },

  methods: {
    toggleFavorite() {
      if (!this.disableFavoriteButton) {
        this.$emit('toggle-favorite');
      }
    },
    onClick() {
      this.$emit('on-click');
    }
  }
};
</script>

<style lang="scss" scoped>
.card {
  &__image {
    display: inline-flex;
    border-bottom: 0.25rem $red solid;
    margin-bottom: 1rem;
    min-height: 260px;

    > img {
      width: 298px;
      height: 298px;
      object-fit: cover;
    }
  }

  &__content {
    display: flex;
    justify-content: space-between;

    &.only-title {
      justify-content: center;

      @include media-query-min('md') {
        justify-content: space-between;
      }
    }
  }

  &__title {
    font-size: 1.25rem;
    color: $title-color;

    &.clickable {
      cursor: pointer;
      transition: filter 0.15s;

      &:hover,
      &:focus {
        filter: brightness(1.5);
      }
    }
  }
}
</style>
