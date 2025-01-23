<template>
  <div>
    <v-row
      style="
        width: 70%;
        border: solid 1px black;
        padding: 5px;
        margin-left: auto;
        margin-right: auto;
        display: flex;
        justify-content: space-evenly;
      "
    >
      <!-- titolo -->
      <v-col><h3>v-textarea</h3></v-col>
      <v-col
        :cols="3"
        style="display: flex; justify-content: left; padding-left: 0%"
      >
        <v-input
          type="text"
          label="label"
          v-model="label"
          style="margin-right: auto"
        ></v-input>
        <v-checkbox
          label="rounded"
          v-model="rounded"
          style="margin-right: auto"
        ></v-checkbox>
        <v-checkbox
          label="outlined"
          v-model="outlined"
          style="margin-right: auto"
        ></v-checkbox>
        <v-checkbox
          label="resizable"
          v-model="resizable"
          style="margin-right: auto"
        ></v-checkbox>
      </v-col>
      <v-col
        :cols="3"
        style="display: flex; align-items: center; justify-content: center"
      >
        <v-textarea
          :rounded="rounded"
          :label="label"
          :outlined="outlined"
          v-model="model"
          :rows="rows"
          :resizable="resizable"
          @input="checkContent"
        ></v-textarea>
      </v-col>
      <v-col>
        <!-- Accordion -->
        <v-accordion
          rounded
          :items="[accordion_item]"
          style="width: 80%; margin-left: auto; margin-right: auto"
        >
          <!-- <template #title="{ item }">
        <span style="color: blue; font-size: 20px;">{{ item.title }}</span>
      </template> -->
          <template #content="{ item }">
            <v-row style="justify-content: center">
              <v-col
                :cols="4"
                style="display: flex; justify-content: left; align-items: start"
              >
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
      </v-col>
    </v-row>
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
      'v-model="' + this.model + '"',
      "></v-textarea>",
    ];
    },
  },
  mounted() {
    this.accordion_item.content = [
      "<v-textarea",
      ':rounded="' + this.rounded + '"',
      ':label="' + this.label + '"',
      ':outlined="' + this.outlined + '"',
      ':rows="' + this.rows + '"',
      ':resizable="' + this.resizable + '"',
      'v-model="' + this.model + '"',
      "></v-textarea>",
    ];
  },
  watch: {
    label() {
      this.accordion_item.content = [
        "<v-textarea",
        ':rounded="' + this.rounded + '"',
        ':label="' + this.label + '"',
        ':outlined="' + this.outlined + '"',
        ':rows="' + this.rows + '"',
        ':resizable="' + this.resizable + '"',
        'v-model="' + this.model + '"',
        "></v-textarea>",
      ];
    },
    rounded() {
      this.accordion_item.content = [
        "<v-textarea",
        ':rounded="' + this.rounded + '"',
        ':label="' + this.label + '"',
        ':outlined="' + this.outlined + '"',
        ':rows="' + this.rows + '"',
        ':resizable="' + this.resizable + '"',
        'v-model="' + this.model + '"',
        "></v-textarea>",
      ];
    },
    outlined() {
      this.accordion_item.content = [
        "<v-textarea",
        ':rounded="' + this.rounded + '"',
        ':label="' + this.label + '"',
        ':outlined="' + this.outlined + '"',
        ':rows="' + this.rows + '"',
        ':resizable="' + this.resizable + '"',
        'v-model="' + this.model + '"',
        "></v-textarea>",
      ];
    },
  },
};
</script>