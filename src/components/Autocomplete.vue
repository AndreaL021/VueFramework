<template>
  <div
      style="
        width: 70%;
        border: solid 1px black;
        padding: 5px;
        margin-left: auto;
        margin-right: auto;
      ">
    <v-row style="justify-content: center;">
      <!-- titolo -->
      <v-col><h3>v-autocomplete</h3></v-col>
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
          label="select"
          v-model="select"
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
      </v-col>
      <v-col
        :cols="3"
        style="display: flex; justify-content: center; align-items: center;"
      >
        <v-autocomplete
          :items="items"
          itemText="name"
          itemValue="id"
          :rounded="rounded"
          :clearable="clearable"
          :label="label"
          :outlined="outlined"
          :readonly="readonly"
          :select="select"
          v-model="model"
          @input="checkContent"
          @change="test"
        ></v-autocomplete>
      </v-col>
    </v-row>

    <v-row>
      <v-col :cols="6">
        <!-- Accordion -->
        <v-accordion
          rounded
          :items="[accordion_item]"
          style="width: 80%; margin-left: auto; margin-right: auto"
        >
          <template #content="{ item }">
            <v-row style="justify-content: center">
              <v-col
                :cols="12"
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
      <v-col :cols="6">
        <!-- Accordion -->
        <v-accordion
          rounded
          :items="[accordion_item2]"
          style="width: 80%; margin-left: auto; margin-right: auto"
        >
          <template #content="{ item }">
            <v-row style="justify-content: center">
              <v-col
                :cols="12"
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
      items: [
        {
          id: 1,
          name: "Adkins Frazier",
        },
        {
          id: 2,
          name: "Vance Velasquez",
        },
        {
          id: 3,
          name: "Oneal Espinoza",
        },
        {
          id: 4,
          name: "Johns Vinson",
        },
        {
          id: 5,
          name: "Bradley Fulton",
        },
        {
          id: 6,
          name: "Shelton Klein",
        },
      ],
      label: "label",
      rounded: false,
      select: false,
      clearable: false,
      readonly: false,
      outlined: true,
      model: "",
      accordion_item: {
        title: "Source",
        content: [],
      },
      accordion_item2: {
        title: "Source",
        content: [],
      },
    };
  },
  methods: {
    test() {
      console.log(this.model);
    },
    checkContent() {
      this.accordion_item.content = [
        "<v-autocomplete",
        ':rounded="' + this.rounded + '"',
        ':clearable="' + this.clearable + '"',
        ':label="' + this.label + '"',
        ':outlined="' + this.outlined + '"',
        ':readonly="' + this.readonly + '"',
        ':search="' + this.select + '"',
        'v-model="' + this.model + '"',
        ':items="[string/number]"',
        "></v-autocomplete>",
      ];
      this.accordion_item2.content = [
        "<v-autocomplete",
        ':rounded="' + this.rounded + '"',
        ':clearable="' + this.clearable + '"',
        ':label="' + this.label + '"',
        ':outlined="' + this.outlined + '"',
        ':readonly="' + this.readonly + '"',
        ':search="' + this.select + '"',
        'v-model="' + this.model + '"',
        'itemText="des"',
        'itemValue="id"',
        ':items="[{id:null, des:""}]"',
        "></v-autocomplete>",
      ];
    },
  },
  mounted() {
    this.accordion_item.content = [
        "<v-autocomplete",
        ':rounded="' + this.rounded + '"',
        ':clearable="' + this.clearable + '"',
        ':label="' + this.label + '"',
        ':outlined="' + this.outlined + '"',
        ':readonly="' + this.readonly + '"',
        ':search="' + this.select + '"',
        'v-model="' + this.model + '"',
        ':items="[string/number]"',
        "></v-autocomplete>",
    ];
      this.accordion_item2.content = [
        "<v-autocomplete",
        ':rounded="' + this.rounded + '"',
        ':clearable="' + this.clearable + '"',
        ':label="' + this.label + '"',
        ':outlined="' + this.outlined + '"',
        ':readonly="' + this.readonly + '"',
        ':search="' + this.select + '"',
        'v-model="' + this.model + '"',
        'itemText="des"',
        'itemValue="id"',
        ':items="[{id:null, des:""}]"',
        "></v-autocomplete>",
      ];
  },
  watch: {
    label() {
      this.accordion_item.content = [
        "<v-autocomplete",
        ':rounded="' + this.rounded + '"',
        ':clearable="' + this.clearable + '"',
        ':label="' + this.label + '"',
        ':outlined="' + this.outlined + '"',
        ':readonly="' + this.readonly + '"',
        ':search="' + this.select + '"',
        'v-model="' + this.model + '"',
        ':items="[string/number]"',
        "></v-autocomplete>",
      ];
      this.accordion_item2.content = [
        "<v-autocomplete",
        ':rounded="' + this.rounded + '"',
        ':clearable="' + this.clearable + '"',
        ':label="' + this.label + '"',
        ':outlined="' + this.outlined + '"',
        ':readonly="' + this.readonly + '"',
        ':search="' + this.select + '"',
        'v-model="' + this.model + '"',
        'itemText="des"',
        'itemValue="id"',
        ':items="[{id:null, des:""}]"',
        "></v-autocomplete>",
      ];
    },
    rounded() {
      this.accordion_item.content = [
        "<v-autocomplete",
        ':rounded="' + this.rounded + '"',
        ':clearable="' + this.clearable + '"',
        ':label="' + this.label + '"',
        ':outlined="' + this.outlined + '"',
        ':readonly="' + this.readonly + '"',
        ':search="' + this.select + '"',
        'v-model="' + this.model + '"',
        ':items="[string/number]"',
        "></v-autocomplete>",
      ];
      this.accordion_item2.content = [
        "<v-autocomplete",
        ':rounded="' + this.rounded + '"',
        ':clearable="' + this.clearable + '"',
        ':label="' + this.label + '"',
        ':outlined="' + this.outlined + '"',
        ':readonly="' + this.readonly + '"',
        ':search="' + this.select + '"',
        'v-model="' + this.model + '"',
        'itemText="des"',
        'itemValue="id"',
        ':items="[{id:null, des:""}]"',
        "></v-autocomplete>",
      ];
    },
    clearable() {
      this.accordion_item.content = [
        "<v-autocomplete",
        ':rounded="' + this.rounded + '"',
        ':clearable="' + this.clearable + '"',
        ':label="' + this.label + '"',
        ':outlined="' + this.outlined + '"',
        ':readonly="' + this.readonly + '"',
        ':search="' + this.select + '"',
        'v-model="' + this.model + '"',
        ':items="[string/number]"',
        "></v-autocomplete>",
      ];
      this.accordion_item2.content = [
        "<v-autocomplete",
        ':rounded="' + this.rounded + '"',
        ':clearable="' + this.clearable + '"',
        ':label="' + this.label + '"',
        ':outlined="' + this.outlined + '"',
        ':readonly="' + this.readonly + '"',
        ':search="' + this.select + '"',
        'v-model="' + this.model + '"',
        'itemText="des"',
        'itemValue="id"',
        ':items="[{id:null, des:""}]"',
        "></v-autocomplete>",
      ];
    },
    outlined() {
      this.accordion_item.content = [
        "<v-autocomplete",
        ':rounded="' + this.rounded + '"',
        ':clearable="' + this.clearable + '"',
        ':label="' + this.label + '"',
        ':outlined="' + this.outlined + '"',
        ':readonly="' + this.readonly + '"',
        ':search="' + this.select + '"',
        'v-model="' + this.model + '"',
        ':items="[string/number]"',
        "></v-autocomplete>",
      ];
      this.accordion_item2.content = [
        "<v-autocomplete",
        ':rounded="' + this.rounded + '"',
        ':clearable="' + this.clearable + '"',
        ':label="' + this.label + '"',
        ':outlined="' + this.outlined + '"',
        ':readonly="' + this.readonly + '"',
        ':search="' + this.select + '"',
        'v-model="' + this.model + '"',
        'itemText="des"',
        'itemValue="id"',
        ':items="[{id:null, des:""}]"',
        "></v-autocomplete>",
      ];
    },
    readonly() {
      this.accordion_item.content = [
        "<v-autocomplete",
        ':rounded="' + this.rounded + '"',
        ':clearable="' + this.clearable + '"',
        ':label="' + this.label + '"',
        ':outlined="' + this.outlined + '"',
        ':readonly="' + this.readonly + '"',
        ':search="' + this.select + '"',
        'v-model="' + this.model + '"',
        ':items="[string/number]"',
        "></v-autocomplete>",
      ];
      this.accordion_item2.content = [
        "<v-autocomplete",
        ':rounded="' + this.rounded + '"',
        ':clearable="' + this.clearable + '"',
        ':label="' + this.label + '"',
        ':outlined="' + this.outlined + '"',
        ':readonly="' + this.readonly + '"',
        ':search="' + this.select + '"',
        'v-model="' + this.model + '"',
        'itemText="des"',
        'itemValue="id"',
        ':items="[{id:null, des:""}]"',
        "></v-autocomplete>",
      ];
    },
    select() {
      this.accordion_item.content = [
        "<v-autocomplete",
        ':rounded="' + this.rounded + '"',
        ':clearable="' + this.clearable + '"',
        ':label="' + this.label + '"',
        ':outlined="' + this.outlined + '"',
        ':readonly="' + this.readonly + '"',
        ':search="' + this.select + '"',
        'v-model="' + this.model + '"',
        ':items="[string/number]"',
        "></v-autocomplete>",
      ];
      this.accordion_item2.content = [
        "<v-autocomplete",
        ':rounded="' + this.rounded + '"',
        ':clearable="' + this.clearable + '"',
        ':label="' + this.label + '"',
        ':outlined="' + this.outlined + '"',
        ':readonly="' + this.readonly + '"',
        ':search="' + this.select + '"',
        'v-model="' + this.model + '"',
        'itemText="des"',
        'itemValue="id"',
        ':items="[{id:null, des:""}]"',
        "></v-autocomplete>",
      ];
    },
  },
};
</script>