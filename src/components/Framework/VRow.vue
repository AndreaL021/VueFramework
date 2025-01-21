<template>
    <div :style="{
        display:'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: justify,
        margin:margin,
        backgroundColor:bgColor
    }"
    >
    <slot></slot>
    </div>
</template>
  
  <script>
export default {
  data() {
    return {
      providedMaxCols: this.maxCols
    };
  },
  props: {
    justify:{
        type:String,
        default:'start'
    },
    maxCols:{
        type:Number,
        default:12
    },
    margin:{
        type:String,
        default:'5px'
    },
    bgColor:{
        type:String,
        default:''
    },
  },
  provide() {
    return {
      maxCols: () => this.providedMaxCols
    };
  },
  watch: {
    maxCols(newVal) {
      this.providedMaxCols = newVal;
    }
  }
};
</script>