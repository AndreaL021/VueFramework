


<template>
  <div
    @mousemove="handleMouseMove"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
    ref="card"
    style="transform: scale(0.9);cursor: default;"
    :class="{ 'card-animation': cardAnimation }"
  >
    <div
      ref="cardContainer"
      :class="{
        rounded: rounded,
        outlined: outlined,
        shadow: shadow,
        cardAnimation: animation,
      }"
      :style="{ width: width }"
    >
      <div :class="{ 'card-content-animation': animation }">
        <slot name="title">
          <div
            v-if="title"
            style="border: solid grey; border-width: 0px 0px 1px 0px"
          >
            <span class="title">{{ title }}</span>
          </div>
        </slot>
        <div :style="{ padding: '7px' }">
          <slot> </slot>
        </div>
      </div>
    </div>
  </div>
</template>
  <script>
export default {
  props: {
    outlined: {
      type: Boolean,
      default: false,
    },
    rounded: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      default: null,
    },
    width: {
      type: String,
      default: "auto",
    },
    bgColor: {
      type: String,
      default: "auto",
    },
    bgColorTitle: {
      type: String,
      default: "auto",
    },
    shadow: {
      type: Boolean,
      default: false,
    },
    animation: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
    };
  },
  mounted() {},
  computed: {
    isValuePresent() {
      if (this.type == "text") {
        return (
          this.modelValue !== null &&
          this.modelValue !== undefined &&
          this.modelValue !== ""
        );
      } else {
        return (
          this.modelValue !== null &&
          this.modelValue !== undefined &&
          !isNaN(this.modelValue)
        );
      }
    },
  },
  methods: {
    handleMouseMove(mouseEvent) {
      if (this.animation) {
        let card = this.$refs.card;
        let cardContainer = this.$refs.cardContainer;
        let mouseX = mouseEvent.pageX;
        let mouseY = mouseEvent.pageY;

        const centerX = card.offsetLeft + card.clientWidth / 2;
        const centerY = card.offsetTop + card.clientHeight / 2;

        const percentX = (mouseX - centerX) / (card.clientWidth / 2);
        const percentY = -((mouseY - centerY) / (card.clientHeight / 2));

        cardContainer.style.transform =
          "perspective(400px) rotateY(" +
          percentX * 5 +
          "deg) rotateX(" +
          percentY * 5 +
          "deg)";
      }
    },
    handleMouseEnter() {
      if (this.animation) {
        let card = this.$refs.cardContainer;
        setTimeout(() => {
          card.style.transition = "";
        }, 100);
        card.style.transition = "transform 0.1s";
      }
    },
    handleMouseLeave() {
      if (this.animation) {
        let card = this.$refs.cardContainer;
        card.style.transition = "transform 0.1s";
        setTimeout(() => {
          card.style.transition = "";
        }, 100);

        card.style.transform = "perspective(400px) rotateY(0deg) rotateX(0deg)";
      }
    },
  },
};
</script>
<style scoped>
.shadow {
  -webkit-box-shadow: -3px 3px 7px 1px rgba(0, 0, 0, 0.6);
  box-shadow: -3px 3px 7px 1px rgba(0, 0, 0, 0.6);
}

.rounded {
  border-radius: 8px;
}

.outlined {
  border: solid grey 1px;
}

.title {
  font-size: 24px;
  font-weight: bold;
}

.card-animation {
  transform: perspective(600px) rotateX(0deg) rotateY(0deg);
  will-change: transform;
}
.card-content-animation {
  color: black;
  text-align: center;
  transform: translateZ(80px);
}
</style>
  