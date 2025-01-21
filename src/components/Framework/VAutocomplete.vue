<template>
  <div class="input-container" :style="{ width: width }">
    <input
      @focus="dropdown = true"
      @focusout="dropdown = false"
      style="width: 100%"
      type="text"
      :value="modelValue"
      @input="updateModelValue($event.target.value)"
      :readonly="!search"
    />
  </div>
  <transition name="fade" appear>
    <div
      v-show="dropdown"
      class="item-container"
      :style="{ width: width == 'auto' ? '98%' : width }"
    >
      <div
        v-for="(item, i) in filteredItems"
        :key="i"
        class="item"
        @click="select(item)"
      >
        {{ itemText != null ? item[itemText] : item }}
      </div>
    </div>
  </transition>
</template>
<script>
export default {
  data() {
    return {
      filteredItems: [],
      dropdown: false,
    };
  },
  props: {
    search: {
      type: Boolean,
      default: true,
    },
    width: {
      type: String,
      default: "auto",
    },
    items: {
      type: Array,
      default: [],
    },
    modelValue: {
      type: [String, Number],
    },
    itemText: {
      type: String,
      default: null,
    },
    itemValue: {
      type: String,
      default: null,
    },
  },
  computed: {},
  mounted() {
    this.filteredItems = Array.from(this.items);
  },
  watch: {
    items(newVal) {
      if (newVal) {
        this.filteredItems = Array.from(newVal);
      }
    },
    modelValue(newVal) {
      if (newVal) {
        if (this.search) {
          this.filtra();
        }
      }
    },
  },
  emits: ["change", "update:modelValue"],
  methods: {
    updateModelValue(value) {
      this.$emit("update:modelValue", { name: value, url: "" });
      
    },
    filtra() {
      if (this.itemText != null) {
        this.filteredItems = this.items.filter((i) =>
          this.itemText
            ? i[this.itemText]
                .toLowerCase()
                .includes(this.modelValue.toLowerCase())
            : i.toLowerCase().includes(this.modelValue.toLowerCase())
        );
      } else {
        this.filteredItems = this.items.filter((i) =>
          i.toLowerCase().includes(this.modelValue.toLowerCase())
        );
      }
    },
    select(item) {
      this.$emit(
        "update:modelValue",
        this.itemValue ? item[this.itemValue] : item
      );
      
      this.dropdown = false;
    },
  },
};
</script>
<style scoped>
.input-container {
  border: solid black 1px;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding-right: 10px;
  padding-left: 5px;
  overflow: visible;
  position: relative;
  height: 24px;
}
.item-container {
  position: absolute;
  top: calc(100%+18px);
  transform: translateX(-50%) !important;
  left: 50%;
  z-index: 1000;
  background-color: white;
  border: solid 1px;
  max-height: 300px;
  overflow-y: scroll;
}
.item {
  margin: 0px 0px 0px 0px;
  padding-left: 10px;
  padding-right: 15px;
  padding-top: 5px;
  padding-bottom: 5px;
}
.item:hover {
  cursor: pointer;
  background-color: grey;
}
input {
  border: none;
  border-radius: 15px;
}
input:focus {
  border: none !important;
  border-radius: 15px;
  outline: none;
}
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s ease-out;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>