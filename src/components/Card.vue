<template>
  <div class="card">
    <figure class="card__image">
      <img
        :src="imageUrl"
        alt="hero image"
        class="img-responsive"
      >
    </figure>
    <div class="card__content">
      <h4 class="card__title">
        {{ title }}
      </h4>
      <FavButton class="card__favorite" hiddenText="favoritar herói" :active="false" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',

  components: {
    FavButton: () => import('@/components/FavoriteButton.vue'),
  },

  props: {
    title: {
      type: String,
      required: true,
    },
    image: {
      type: Object,
      required: true,
    },
  },

  computed: {
    imageUrl () {
      return `${this.image.path}.${this.image.extension}`;
    }
  }
};
</script>

<style lang="scss" scoped>
  .card {
    &__image {
      display: inline-flex;
      border-bottom: .25rem $red solid;
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
    }

    &__title {
      font-size: 1.25rem;
      color: $title-color;
    }
  }
</style>
