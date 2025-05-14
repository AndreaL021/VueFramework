<template>
  <v-row>
    <v-col :cols="6">
      <v-input
        type="text"
        label="label"
        v-model="label"
        style="margin-right: auto"
      ></v-input>
    </v-col>
    <v-col :cols="6">
      <v-input
        type="number"
        label="value"
        v-model.number="value"
        style="margin-right: auto; margin-bottom: 5px"
      ></v-input>
    </v-col>
    <v-col :cols="6" style="display: flex;">
      <v-checkbox
        label="rounded"
        v-model="rounded"
        style="margin-right: auto"
      ></v-checkbox>
    </v-col>
    <v-col :cols="6" style="display: flex;">
      <select
        name="choice"
        v-model="size"
        @change="model = null"
        style="margin-right: auto"
      >
        <option value="sm">sm</option>
        <option value="">md</option>
        <option value="lg">lg</option>
        <option value="xl">xl</option>
        <option value="2xl">2xl</option>
      </select>
    </v-col>
    <v-col
      :cols="12"
      style="
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 30px;
      "
    >
      <v-checkbox
        :rounded="rounded"
        :label="label"
        :size="size"
        :item-value="value"
        v-model="model"
        @change="checkContent"
      ></v-checkbox>
    </v-col>
  </v-row>
      <!-- Accordion -->
      <v-accordion
        :items="[accordion_item]"
        style="
          width: 100%;
          margin-top: 10px;
        "
      >
        <template #content="{ item }">
          <v-row>
            <v-col :cols="12" style="display: block">
              <div v-for="(obj, i) in item.content" :key="i">
                <span>{{
                  i != 0 && i != item.content.length - 1
                    ? "&nbsp;&nbsp;&nbsp;&nbsp; " + obj
                    : obj
                }}</span>
              </div>
            </v-col>
          </v-row>
        </template>
      </v-accordion>
</template>
      <script>
export default {
  components: {},
  data() {
    return {
      label: "label",
      rounded: false,
      size: "",
      value: 10,
      model: null,
      accordion_item: {
        title: "Source",
        content: [],
      },
    };
  },
  methods: {
    checkContent() {
      this.accordion_item.content = [
        "<v-checkbox",
        ':rounded="' + this.rounded + '"',
        ':label="' + this.label + '"',
        ':size="' + this.size + '"',
        ':item-value="' + this.value + '"',
        'v-model="' + this.model + '"',
        "></v-checkbox>",
      ];
    },
  },
  mounted() {
    this.checkContent();
  },
  watch: {
    model() {
      this.checkContent();
    },
    label() {
      this.checkContent();
    },
    rounded() {
      this.checkContent();
    },
    size() {
      this.checkContent();
    },
    value() {
      this.checkContent()
    },
  },
};
</script>