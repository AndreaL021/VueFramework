<template>
  <div :class="colClass">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'Col',
  props: {
    cols: {
      type: Number,
      default: 12,
      validator: val => val >= 1 && val <= 12
    }
  },
  computed: {
    colClass() {
      return `col col-${this.cols}`
    }
  }
}
</script>
<style scoped>
.col {
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  box-sizing: border-box;
}

.col-1 { flex: 0 0 8.333%; max-width: 8.333%; }
.col-2 { flex: 0 0 16.666%; max-width: 16.666%; }
.col-3 { flex: 0 0 25%; max-width: 25%; }
.col-4 { flex: 0 0 33.333%; max-width: 33.333%; }
.col-5 { flex: 0 0 41.666%; max-width: 41.666%; }
.col-6 { flex: 0 0 50%; max-width: 50%; }
.col-7 { flex: 0 0 58.333%; max-width: 58.333%; }
.col-8 { flex: 0 0 66.666%; max-width: 66.666%; }
.col-9 { flex: 0 0 75%; max-width: 75%; }
.col-10 { flex: 0 0 83.333%; max-width: 83.333%; }
.col-11 { flex: 0 0 91.666%; max-width: 91.666%; }
.col-12 { flex: 0 0 100%; max-width: 100%; }
</style>
