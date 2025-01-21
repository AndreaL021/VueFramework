<template>
  <v-row>
    <v-col
      :cols="7"
      style="display: flex; justify-content: left; padding-left: 0px; border-right: solid 1px;"
    >
        <v-input
          type="text"
          label="value"
          v-model="value"
          style="margin-right: auto; margin-bottom: 5px;"
        ></v-input>
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
        :cols="5"
        style="padding:0px; display: flex; align-items: center; justify-content: center"
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
      <v-col style="padding:0px;">
        <!-- Accordion -->
        <v-accordion
          rounded
          :items="[accordion_item]"
          style="width: 100%; margin-left: auto; margin-right: auto; margin-top: 10px;"
        >
          <template #content="{ item }">
            <v-row style="justify-content: center">
              <v-col
                :cols="12"
              style="display: block;"
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
  </template>
      <script>
  export default {
    components: {},
    data() {
      return {
        label: "label",
        rounded: false,
        size: "",
        model: "",
        value:"testString",
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
          ':item-value="'+this.value+'"',
          'v-model="' + this.model + '"',
          "></v-checkbox>",
        ];
      },
    },
    mounted() {
      this.accordion_item.content = [
        "<v-checkbox",
        ':rounded="' + this.rounded + '"',
        ':label="' + this.label + '"',
        ':size="' + this.size + '"',
        ':item-value="'+this.value+'"',
        'v-model="' + this.model + '"',
        "></v-checkbox>",
      ];
    },
    watch: {
      label() {
        this.accordion_item.content = [
          "<v-checkbox",
          ':rounded="' + this.rounded + '"',
          ':label="' + this.label + '"',
          ':size="' + this.size + '"',
          ':item-value="'+this.value+'"',
          'v-model="' + this.model + '"',
          "></v-checkbox>",
        ];
      },
      rounded() {
        this.accordion_item.content = [
          "<v-checkbox",
          ':rounded="' + this.rounded + '"',
          ':label="' + this.label + '"',
          ':size="' + this.size + '"',
          ':item-value="'+this.value+'"',
          'v-model="' + this.model + '"',
          "></v-checkbox>",
        ];
      },
      size() {
        this.accordion_item.content = [
          "<v-checkbox",
          ':rounded="' + this.rounded + '"',
          ':label="' + this.label + '"',
          ':size="' + this.size + '"',
          ':item-value="'+this.value+'"',
          'v-model="' + this.model + '"',
          "></v-checkbox>",
        ];
      },
    },
  };
  </script>