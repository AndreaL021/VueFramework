<template>
  <div
    :style="{
      padding: padding,
      flexGrow: cols,
      flexBasis: cols
        ? (cols / (1 + maxCols())) * 100 + '%'
        : (maxCols() / (1 + maxCols())) * 100 + '%',
      maxWidth: cols
        ? (cols / maxCols()) * 100 + '%'
        : (maxCols() / maxCols()) * 100 + '%',
      backgroundColor: bgColor,
      display: display,
      flexDirection: 'column',
      justifyContent: align,
      alignItems: justify,
    }"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    padding: {
      type: String,
      default: "5px",
    },
    cols: {
      type: Number,
      default: null,
    },
    bgColor: {
      type: String,
      default: "",
    },
    display: {
      type: String,
      default: "block",
    },
    justify: {
      type: String,
      default: "center",
    },
    align: {
      type: String,
      default: "center",
    },
  },
  inject: ["maxCols"],
};
</script>