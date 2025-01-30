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
      <v-col><h3>v-input</h3></v-col>
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
          label="readonly"
          v-model="readonly"
          style="margin-right: auto"
        ></v-checkbox>
        <v-checkbox
          label="rounded"
          v-model="rounded"
          style="margin-right: auto"
        ></v-checkbox>
        <v-checkbox
          label="clearable"
          v-model="clearable"
          style="margin-right: auto"
        ></v-checkbox>
        <v-checkbox
          label="outlined"
          v-model="outlined"
          style="margin-right: auto"
        ></v-checkbox>

        <select
          name="choice"
          v-model="type"
          @change="model = null"
          style="margin-right: auto"
        >
        <option value="password">password</option>
          <option value="number">number</option>
          <option value="text">text</option>
        </select>
      </v-col>
      <v-col
        :cols="3"
        style="display: flex; align-items: center; justify-content: center"
      >
        <v-input
          v-if="type == 'text'|| type=='password'"
          :rounded="rounded"
          :clearable="clearable"
          :label="label"
          :outlined="outlined"
          :readonly="readonly"
          v-model="model"
          :type="type"
          @input="checkContent"
        ></v-input>
        <v-input
          v-if="type == 'number'"
          :rounded="rounded"
          :clearable="clearable"
          :label="label"
          :outlined="outlined"
          type="number"
          v-model.number="model"
          @input="checkContent"
        ></v-input>
      </v-col>
      <v-col>
        <!-- Accordion -->
        <v-accordion
          rounded
          :items="[accordion_item]"
          style="width: 80%; margin-left: auto; margin-right: auto"
        >
          <template #content="{ item }">
            <v-row style="justify-content: center">
              <v-col
                :cols="6"
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
      clearable: false,
      readonly: false,
      outlined: true,
      model: "",
      type: "text",
      accordion_item: {
        title: "Source",
        content: [],
      },
    };
  },
  methods: {
    checkContent() {
      this.accordion_item.content = [
        "<v-input",
        ':rounded="' + this.rounded + '"',
        ':clearable="' + this.clearable + '"',
        ':label="' + this.label + '"',
        ':outlined="' + this.outlined + '"',
        'type="' + this.type + '"',
        this.type == "number"
          ? 'v-model.number="' + this.model + '"'
          : 'v-model="' + this.model + '"',
        "></v-input>",
      ];
    },
  },
  mounted() {
    this.accordion_item.content = [
      "<v-input",
      ':rounded="' + this.rounded + '"',
      ':clearable="' + this.clearable + '"',
      ':label="' + this.label + '"',
      ':outlined="' + this.outlined + '"',
      ':readonly="' + this.readonly + '"',
      'type="' + this.type + '"',
      this.type == "number"
        ? 'v-model.number="' + this.model + '"'
        : 'v-model="' + this.model + '"',
      "></v-input>",
    ];
  },
  watch: {
    label() {
      this.accordion_item.content = [
        "<v-input",
        ':rounded="' + this.rounded + '"',
        ':clearable="' + this.clearable + '"',
        ':label="' + this.label + '"',
        ':outlined="' + this.outlined + '"',
        ':readonly="' + this.readonly + '"',
        'type="' + this.type + '"',
        this.type == "number"
          ? 'v-model.number="' + this.model + '"'
          : 'v-model="' + this.model + '"',
        "></v-input>",
      ];
    },
    rounded() {
      this.accordion_item.content = [
        "<v-input",
        ':rounded="' + this.rounded + '"',
        ':clearable="' + this.clearable + '"',
        ':label="' + this.label + '"',
        ':outlined="' + this.outlined + '"',
        ':readonly="' + this.readonly + '"',
        'type="' + this.type + '"',
        this.type == "number"
          ? 'v-model.number="' + this.model + '"'
          : 'v-model="' + this.model + '"',
        "></v-input>",
      ];
    },
    clearable() {
      this.accordion_item.content = [
        "<v-input",
        ':rounded="' + this.rounded + '"',
        ':clearable="' + this.clearable + '"',
        ':label="' + this.label + '"',
        ':outlined="' + this.outlined + '"',
        ':readonly="' + this.readonly + '"',
        'type="' + this.type + '"',
        this.type == "number"
          ? 'v-model.number="' + this.model + '"'
          : 'v-model="' + this.model + '"',
        "></v-input>",
      ];
    },
    outlined() {
      this.accordion_item.content = [
        "<v-input",
        ':rounded="' + this.rounded + '"',
        ':clearable="' + this.clearable + '"',
        ':label="' + this.label + '"',
        ':outlined="' + this.outlined + '"',
        ':readonly="' + this.readonly + '"',
        'type="' + this.type + '"',
        this.type == "number"
          ? 'v-model.number="' + this.model + '"'
          : 'v-model="' + this.model + '"',
        "></v-input>",
      ];
    },
    type() {
      this.accordion_item.content = [
        "<v-input",
        ':rounded="' + this.rounded + '"',
        ':clearable="' + this.clearable + '"',
        ':label="' + this.label + '"',
        ':outlined="' + this.outlined + '"',
        ':readonly="' + this.readonly + '"',
        'type="' + this.type + '"',
        this.type == "number"
          ? 'v-model.number="' + this.model + '"'
          : 'v-model="' + this.model + '"',
        "></v-input>",
      ];
    },
    readonly() {
      this.accordion_item.content = [
        "<v-input",
        ':rounded="' + this.rounded + '"',
        ':clearable="' + this.clearable + '"',
        ':label="' + this.label + '"',
        ':outlined="' + this.outlined + '"',
        ':readonly="' + this.readonly + '"',
        'type="' + this.type + '"',
        this.type == "number"
          ? 'v-model.number="' + this.model + '"'
          : 'v-model="' + this.model + '"',
        "></v-input>",
      ];
    },
  },
};
</script>