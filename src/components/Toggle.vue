<template>
  <button class="toggle" @click="toggle">
    <img
      v-if="active"
      src="@/assets/icons/toggle_on.svg"
      alt="hero icon"
      class="img-responsive"
    />
    <img
      v-else
      src="@/assets/icons/toggle_off.svg"
      alt="hero icon"
      class="img-responsive"
    />
  </button>
</template>

<script>
export default {
  name: 'Toggle',

  props: {
    active: {
      type: Boolean,
      required: true,
    },
  },

  methods: {
    toggle() {
      this.$emit('toggle')
    }
  }
};
</script>

<style lang="scss" scoped>
.toggle {
  background: none;
  border: none;
  padding: 0;

  &:hover,
  &:focus {
    cursor: pointer;
  }
}
</style>
