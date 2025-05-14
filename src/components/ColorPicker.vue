<template>
  <div
    style="
      width: 70%;
      border: solid 1px black;
      padding: 5px;
      margin-left: auto;
      margin-right: auto;
    "
  >
    <v-row justify="center">
      <!-- titolo -->
      <v-col><h3>v-color-picker</h3></v-col>
      <v-col :cols="3">
        <v-autocomplete
          label="size"
          v-model="size"
          :items="items"
        ></v-autocomplete>
      </v-col>
      <v-col :cols="3">
        <v-input label="label" v-model="label"> </v-input>
      </v-col>
      <v-col style="display: flex; justify-content: center; margin-top: 40px">
        <v-color-picker
          v-model="model"
          :label="label"
          :size="size"
        ></v-color-picker>
      </v-col>
    </v-row>
    <!-- Accordion -->
    <v-accordion :items="[accordion_item]" style="margin-top: 30px">
      <template #content="{ item }">
        <v-row style="justify-content: center">
          <v-col :cols="3">
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
  </div>
</template>
  <script>
export default {
  components: {},
  data() {
    return {
      model: "#ff8a8a",
      size: "md",
      label: "label",
      accordion_item: {
        title: "Source",
        content: [],
      },
      items: ["sm", "md", "lg", 30],
    };
  },
  methods: {
    checkContent() {
      this.accordion_item.content = [
        "<v-color-picker",
        'size="' + this.size + '"',
        'v-model="' + this.model + '"',
        'label="' + this.label + '"',
        "></v-color-picker>",
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
    size() {
      this.checkContent();
    },
    label() {
      this.checkContent();
    },
  },
};
</script>