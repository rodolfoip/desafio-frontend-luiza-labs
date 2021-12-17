<template>
  <div class="card">
    <figure class="card__image">
      <img
        src="http://placehold.jp/160x160.png"
        alt="hero image"
        class="img-responsive"
      >
    </figure>
    <div class="card__content">
      <h4 class="card__title">
        Star-Lord
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
};
</script>

<style lang="scss" scoped>
  .card {
    padding: 1rem;

    &__image {
      display: inline-flex;
      border-bottom: .25rem $red solid;
      margin-bottom: 1rem;
    }

    &__content {
      display: flex;
      justify-content: space-between;
    }
  }
</style>
