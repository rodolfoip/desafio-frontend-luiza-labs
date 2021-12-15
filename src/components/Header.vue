<template>
  <header class="header">
    <img src="@/assets/img/logo.svg" alt="header logo" class="img-responsive header-logo">
  </header>
</template>

<script>
export default {
  name: 'Header',
};

</script>

<style lang="scss">
.header {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 2rem;
}
</style>
