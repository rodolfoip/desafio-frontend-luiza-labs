<template>
  <div class="home">
    <Header />
    home page
  </div>
</template>

<script>

export default {
  name: 'Home',
  components: {
    Header: () => import('@/components/Header.vue'),
  },
};
</script>
