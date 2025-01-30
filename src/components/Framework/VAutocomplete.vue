


<template>
  <div
    class="input-container"
    :class="{
      focused: isFocused,
      value: isValuePresent,
      outlined: outlined,
      rounded: rounded,
    }"
    :style="{
      width: width,
      height: '24px',
      padding: clearable&&!readonly ? '5px 30px 5px 5px' : '5px 5px 5px 5px',
    }"
    @blur="onBlur"
  >
    <span @click="onFocus" class="label">{{ label }}</span>
    <input
      ref="Input"
      style="width: 100%; padding-left: 0; margin-top: 10px"
      type="text"
      v-model="model"
      :readonly="readonly || !search"
      @input="filtra()"
      @focus="onFocus"
      @blur="onBlur"
    />
    <!-- @blur="onBlur" -->
    <slot name="appendIcon">
      <fa-i
        v-if="clearable&&!readonly && model"
        @click="onFocus, selectItem(model, true)"
        icon="fa-solid fa-circle-xmark"
        class="appendIcon"
        :size="outlined ? 'lg' : null"
      ></fa-i>
    </slot>
    <transition name="fade" appear>
      <div
        v-show="dropdown && !readonly"
        class="item-container"
        :style="{ width: '100%' }"
        @mousedown="onDropdownMouseDown"
      >
        <div
          v-for="(item, i) in filteredItems"
          :key="i"
          class="item"
          @click="selectItem(item)"
        >
          {{ itemText != null ? item[itemText] : item }}
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
export default {
  props: {
    label: {
      type: String,
      default: "",
    },
    modelValue: {
      type: [String, Number],
      default: "",
    },
    items: {
      type: Array,
      default: [],
    },
    itemText: {
      type: String,
      default: null,
    },
    itemValue: {
      type: String,
      default: null,
    },
    width: {
      type: String,
      default: "auto",
    },
    rounded: {
      type: Boolean,
      default: false,
    },
    clearable: {
      type: Boolean,
      default: false,
    },
    outlined: {
      type: Boolean,
      default: true,
    },
    readonly: {
      type: Boolean,
      default: false,
    },
    search: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      isFocused: false, // Gestisce lo stato di focus
      model: "",
      filteredItems: [],
      dropdown: false,
      isClickingDropdownItem: false,
    };
  },
  mounted() {
    if (!this.itemText && !this.itemValue) {
      this.model = this.modelValue;
    }
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
  computed: {
    isValuePresent() {
      return (
        this.model !== null && this.model !== undefined && this.model !== ""
      );
    },
  },
  methods: {
    filtra() {
      if (this.itemText && this.itemValue) {
        this.filteredItems = this.items.filter((i) =>
          i[this.itemText]
            .toString()
            .toLowerCase()
            .includes(this.model.toString().toLowerCase())
        );
      } else {
        this.filteredItems = this.items.filter((i) =>
          i
            .toString()
            .toLowerCase()
            .includes(this.model.toString().toLowerCase())
        );
      }
    },
    selectItem(item, clear) {
      if (clear) {
        item = "";
      }
      if (!this.itemValue && !this.itemText) {
        this.model = item;
      } else {
        this.model = item[this.itemText];
      }
      this.$emit(
        "update:modelValue",
        this.itemValue ? item[this.itemValue] : item
      );
      this.$emit("change");

      this.dropdown = false;
      this.isClickingDropdownItem = false;
    },
    onFocus() {
      this.$refs.Input.focus();
      this.isFocused = true;
      this.dropdown = true;
      this.filteredItems=Array.from(this.items)
    },
    onBlur() {
      if (!this.isClickingDropdownItem) {
        this.isFocused = false;
        this.dropdown = false;
        if (this.itemText) {
          this.model = this.filteredItems.find((i)=>i[this.itemValue]==this.modelValue)?
          this.filteredItems.find((i)=>i[this.itemValue]==this.modelValue)[this.itemText]:"";
        } else {
          this.model = this.modelValue;
        }
      }
    },
    onDropdownMouseDown() {
      this.isClickingDropdownItem = true;
    },
  },
};
</script>
<style scoped>
.input-container {
  margin-top: 12px;
  background: rgb(240, 240, 240);
  border: solid grey;
  border-width: 0 0 1px 0;
  padding-top: 2px !important;
  padding-bottom: 4px !important;
  position: relative;
  overflow: visible;
}

.input-container.outlined {
  margin-top: 12px;
  border: solid grey 1px;
  transition: border-color 0.3s;
  position: relative;
}

.rounded {
  border-radius: 8px;
}

.input-container.focused {
  border-color: black;
}

.label {
  color: grey;
  position: absolute;
  left: 5px;
  top: 50%;
  transform: translateY(-50%);
  transition: all 0.3s ease; /* Animazione */
  pointer-events: none;
}

.input-container.value .label,
.input-container.value .label {
  top: 7px;
  font-size: 13px;
  color: grey;
}
.input-container.focused .label,
.input-container.focused .label {
  top: 7px;
  font-size: 13px;
  color: black;
}

.input-container:hover .appendIcon,
.input-container:hover .appendIcon {
  opacity: 1;
}
.appendIcon {
  font-size: 17px;
  color: grey;
  position: absolute;
  cursor: pointer;
  opacity: 0;
  top: 8px;
  right: 5px;
}
.appendIcon:hover {
  color: black;
}

input {
  border: none;
  padding-left: 0; /* Rimuove il padding a sinistra */
  background-color: transparent;
}
input:focus {
  outline: none;
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
</style>
