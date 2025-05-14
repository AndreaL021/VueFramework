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
    <v-row>
      <!-- titolo -->
      <v-col><h3>v-textarea</h3></v-col>
      <v-col :cols="3">
        <v-input
          type="text"
          label="label"
          v-model="label"
          style="margin-right: auto"
        ></v-input>
      </v-col>
      <v-col :cols="3" style="display: flex; justify-content: center">
        <v-checkbox label="rounded" v-model="rounded"></v-checkbox>
      </v-col>
      <v-col :cols="3" style="display: flex; justify-content: center">
        <v-checkbox label="outlined" v-model="outlined"></v-checkbox>
      </v-col>
      <v-col :cols="3" style="display: flex; justify-content: center">
        <v-checkbox label="resizable" v-model="resizable"></v-checkbox>
      </v-col>
      <v-col
        :cols="12"
        style="margin-top: 40px; margin-bottom: 40px; display: flex; align-items: center; justify-content: center"
      >
        <v-textarea
          width="250px"
          :rounded="rounded"
          :label="label"
          :outlined="outlined"
          v-model="model"
          :rows="rows"
          :resizable="resizable"
          @input="checkContent"
        ></v-textarea>
      </v-col>
    </v-row>
    <!-- Accordion -->
    <v-accordion :items="[accordion_item]">
      <template #content="{ item }">
        <v-row style="justify-content: center">
          <v-col :cols="4">
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
      label: "label",
      rounded: false,
      outlined: true,
      model: "",
      accordion_item: {
        title: "Source",
        content: [],
      },
      rows: 5,
      resizable: true,
    };
  },
  methods: {
    checkContent() {
      this.accordion_item.content = [
        "<v-textarea",
        ':rounded="' + this.rounded + '"',
        ':label="' + this.label + '"',
        ':outlined="' + this.outlined + '"',
        ':rows="' + this.rows + '"',
        ':resizable="' + this.resizable + '"',
        'width="250px"',
        'v-model="' + this.model + '"',
        "></v-textarea>",
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
    resizable() {
      this.checkContent();
    },
    label() {
      this.checkContent();
    },
    rounded() {
      this.checkContent();
    },
    outlined() {
      this.checkContent();
    },
  },
};
</script>