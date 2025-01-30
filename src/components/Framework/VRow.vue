<template>
    <div :style="{
        display:'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: justify,
        margin:margin,
        backgroundColor:bgColor,
        width:width
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
        default:'0px'
    },
    bgColor:{
        type:String,
        default:''
    },
    width: {
        type:String,
        default:'100%'
    }
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