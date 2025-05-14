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
      <v-row justify="space-evenly">
        <!-- titolo -->
        <v-col><h3>v-snackbar</h3></v-col>
        <v-col
          :cols="2"
          style="display: flex; justify-content: center; align-items: center"
        >
          <v-input
            label="text"
            v-model="text"
          ></v-input>
        </v-col>
        <v-col
          :cols="2"
          style="display: flex; align-items: center; justify-content: center"
        >
          <button @click="model = text">Test</button>
        </v-col>
      </v-row>
      <!-- Accordion -->
      <v-accordion :items="[accordion_item]" style="margin-top: 30px">
        <template #content="{ item }">
          <v-row style="justify-content: center">
            <v-col :cols="3">
              <div v-for="(obj, i) in item.content" :key="i">
                <span>{{
                  i != 0 &&
                  i != item.content.length - 1 
                    ? "&nbsp;&nbsp;&nbsp;&nbsp; " + obj
                    : obj
                }}</span>
              </div>
            </v-col>
          </v-row>
        </template>
      </v-accordion>
      <v-snackbar v-model="model"></v-snackbar>
    </div>
  </template>
  <script>
  export default {
    components: {},
    data() {
      return {
        model: "",
        text:"test message",
        accordion_item: {
          title: "Source",
          content: [],
        },
      };
    },
    methods: {
      checkContent() {
        this.accordion_item.content = [
          "<v-snackbar",
          'v-model="' + this.model + '"',
          "></v-snackbar>",
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
      persistent() {
        this.checkContent();
      },
    },
  };
  </script>