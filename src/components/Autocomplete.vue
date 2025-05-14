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
    <v-row style="margin-bottom: 30px">
      <!-- titolo -->
      <v-col><h3>v-autocomplete</h3></v-col>
      <v-col style="display: flex; justify-content: left; padding-left: 0%">
        <v-autocomplete
          width="70px"
          select
          label="items"
          v-model="items_type"
          :items="items_type_list"
          itemText="text"
          itemValue="id"
          style="margin-right: auto"
        ></v-autocomplete>
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
        <v-checkbox
          label="multiple"
          v-model="multiple"
          style="margin-right: auto"
        ></v-checkbox>
      </v-col>
      <v-col
        v-if="items_type == 1"
        :cols="12"
        style="
          display: flex;
          justify-content: center;
          align-items: center;
          margin-top: 40px;
        "
      >
        <!-- Colonna array di oggetti -->
        <v-autocomplete
          width="300px"
          v-if="!multiple"
          :label="label"
          :readonly="readonly"
          :rounded="rounded"
          :clearable="clearable"
          :outlined="outlined"
          :items="items"
          :select="select"
          itemText="name"
          itemValue="id"
          v-model="model"
          @input="checkContent"
        ></v-autocomplete>
        <v-autocomplete
          width="300px"
          v-if="multiple"
          :label="label"
          searchLabel="search"
          :readonly="readonly"
          :rounded="rounded"
          :clearable="clearable"
          :outlined="outlined"
          :items="items"
          :select="select"
          :multiple="multiple"
          itemText="name"
          itemValue="id"
          v-model="modelArray"
          @input="checkContent"
        ></v-autocomplete>
      </v-col>
      <v-col
        v-else
        :cols="12"
        style="
          display: flex;
          justify-content: center;
          align-items: center;
          margin-top: 40px;
        "
      >
        <!-- Colonna array semplice -->
        <v-autocomplete
          width="300px"
          v-if="!multiple"
          :label="label"
          :readonly="readonly"
          :rounded="rounded"
          :clearable="clearable"
          :outlined="outlined"
          :items="items2"
          :select="select"
          v-model="model2"
          @input="checkContent"
        ></v-autocomplete>
        <v-autocomplete
          width="300px"
          v-if="multiple"
          :label="label"
          :readonly="readonly"
          multiple
          :rounded="rounded"
          :clearable="clearable"
          :outlined="outlined"
          :items="items2"
          :select="select"
          v-model="modelArray2"
          @input="checkContent"
        ></v-autocomplete>
      </v-col>
    </v-row>
    <!-- Accordion -->
    <v-accordion :items="[accordion_item]" v-if="items_type == 1">
      <template #content="{ item }">
        <v-row justify="center">
          <v-col :cols="12" style="text-align: center">
            <div
              v-for="(obj, i) in item.content"
              :key="i"
              style="display: flex"
            >
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
    <v-accordion :items="[accordion_item2]" v-else>
      <template #content="{ item }">
        <v-row justify="center">
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
import VAutocomplete from "./Framework/VAutocomplete.vue";
export default {
  components: { VAutocomplete },
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
      items2: ["Shelton Klein", "Vance Velasquez", 3, "Bradley Fulton", 12],
      items_type_list: [
        { text: "[]", id: 0 },
        { text: "[{}]", id: 1 },
      ],
      items_type: 1,
      label: "label",
      rounded: false,
      multiple: false,
      clearable: false,
      readonly: false,
      outlined: true,
      select: false,
      model: "",
      model2: "",
      modelArray2: [],
      modelArray: [],
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
    checkContent() {
      this.accordion_item.content = [
        "<v-autocomplete",
        ':multiple="' + this.multiple + '"',
        ':rounded="' + this.rounded + '"',
        ':clearable="' + this.clearable + '"',
        ':label="' + this.label + '"',
        ':outlined="' + this.outlined + '"',
        ':readonly="' + this.readonly + '"',
        ':select="' + this.select + '"',
        'v-model="' +
          (this.multiple ? "[" + this.modelArray + "]" : this.model) +
          '"',
        ":items=\"[{id:1, name:' '}]\"",
        'itemText="name"',
        'itemValue="id"',
        "></v-autocomplete>",
      ];
      if (this.multiple && !this.select) {
        this.accordion_item.content.splice(4, 0, 'searchLabel="search"');
      }
      this.accordion_item2.content = [
        "<v-autocomplete",
        ':rounded="' + this.rounded + '"',
        ':clearable="' + this.clearable + '"',
        ':label="' + this.label + '"',
        ':multiple="' + this.multiple + '"',
        ':outlined="' + this.outlined + '"',
        ':readonly="' + this.readonly + '"',
        ':select="' + this.select + '"',
        'v-model="' +
          (this.multiple ? "[" + this.modelArray2 + "]" : this.model2) +
          '"',
        ":items=\"[' ', 3}]\"",
        "></v-autocomplete>",
      ];
      if (this.multiple && !this.select) {
        this.accordion_item2.content.splice(4, 0, 'searchLabel="search"');
      }
    },
  },
  mounted() {
    this.checkContent();
  },
  watch: {
    modelArray() {
      this.checkContent();
    },
    modelArray2() {
      this.checkContent();
    },
    multiple() {
      this.checkContent();
    },
    model() {
      this.checkContent();
    },
    model2() {
      this.checkContent();
    },
    label() {
      this.checkContent();
    },
    rounded() {
      this.checkContent();
    },
    clearable() {
      this.checkContent();
    },
    outlined() {
      this.checkContent();
    },
    readonly() {
      this.checkContent();
    },
    select() {
      this.checkContent();
    },
  },
};
</script>