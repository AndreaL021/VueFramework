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
      <v-col><h3>v-row</h3></v-col>
      <v-col :cols="2">
        <div style="display: flex">
          <v-input
            readonly
            label="col-1"
            type="number"
            v-model.number="cols1"
          ></v-input>
          <div
            style="display: flex; flex-direction: column; justify-content: end"
          >
            <fa-i icon="fa-solid fa-plus" @click="cols1<12?cols1++:''"></fa-i>
            <fa-i icon="fa-solid fa-minus" @click="cols1>1?cols1--:''"></fa-i>
          </div>
        </div>
      </v-col>
      <v-col :cols="2">
        <div style="display: flex">
          <v-input
            readonly
            label="col-2"
            type="number"
            v-model.number="cols2"
          ></v-input>
          <div
            style="display: flex; flex-direction: column; justify-content: end"
          >
            <fa-i icon="fa-solid fa-plus" @click="cols2<12?cols2++:''"></fa-i>
            <fa-i icon="fa-solid fa-minus" @click="cols2>1?cols2--:''"></fa-i>
          </div>
        </div>
      </v-col>
      <v-col :cols="2">
        <div style="display: flex">
          <v-input
            readonly
            label="col-3"
            type="number"
            v-model.number="cols3"
          ></v-input>
          <div
            style="display: flex; flex-direction: column; justify-content: end"
          >
            <fa-i icon="fa-solid fa-plus" @click="cols3<12?cols3++:''"></fa-i>
            <fa-i icon="fa-solid fa-minus" @click="cols3>1?cols3--:''"></fa-i>
          </div>
        </div>
      </v-col>
      <v-col :cols="2">
        <div style="display: flex">
          <v-input
            readonly
            label="col-4"
            type="number"
            v-model.number="cols4"
          ></v-input>
          <div
            style="display: flex; flex-direction: column; justify-content: end"
          >
            <fa-i icon="fa-solid fa-plus" @click="cols4<12?cols4++:''"></fa-i>
            <fa-i icon="fa-solid fa-minus" @click="cols4>1?cols4--:''"></fa-i>
          </div>
        </div>
      </v-col>
      <v-col :cols="4">
        <div style="display: flex">
          <v-autocomplete
            label="justify"
            v-model="justify"
            :items="items"
          ></v-autocomplete>
          <div
            style="display: flex; flex-direction: column; justify-content: end"
          >
            <fa-i icon="fa-solid fa-plus" @click="cols4++"></fa-i>
            <fa-i icon="fa-solid fa-minus" @click="cols4--"></fa-i>
          </div>
        </div>
      </v-col>
    </v-row>
    <v-row style="margin-top: 40px; margin-bottom: 40px">
      <v-col>
        <v-row style="background-color: grey" :justify="justify">
          <v-col
            style="background-color: greenyellow; border: solid 1px black"
            :cols="cols1"
            >col-1</v-col
          >
          <v-col
            style="background-color: greenyellow; border: solid 1px black"
            :cols="cols2"
            >col-2</v-col
          >
          <v-col
            style="background-color: greenyellow; border: solid 1px black"
            :cols="cols3"
            >col-3</v-col
          >
          <v-col
            style="background-color: greenyellow; border: solid 1px black"
            :cols="cols4"
            >col-4</v-col
          >
        </v-row>
      </v-col>
    </v-row>

    <!-- Accordion -->
    <v-accordion
      :items="[accordion_item]"
    >
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
      accordion_item: {
        title: "Source",
        content: [],
      },
      items: [
        "flex-start",
        "flex-end",
        "center",
        "space-between",
        "space-around",
        "space-evenly",
      ],
      outlined: true,
      justify: "flex-start",
      cols1: 3,
      cols2: 3,
      cols3: 3,
      cols4: 3,
    };
  },
  methods: {
    checkContent() {
      this.accordion_item.content = [
        '<v-row justify="' + this.justify + '">',
        '<v-col :cols="' + this.cols1 + '">v-col</v-col>',
        '<v-col :cols="' + this.cols2 + '">v-col</v-col>',
        '<v-col :cols="' + this.cols3 + '">v-col</v-col>',
        '<v-col :cols="' + this.cols4 + '">v-col</v-col>',
        "</v-row>",
      ];
    },
  },
  mounted() {
    this.checkContent();
  },
  watch: {
    cols1() {
      this.checkContent();
    },
    cols2() {
      this.checkContent();
    },
    cols3() {
      this.checkContent();
    },
    cols4() {
      this.checkContent();
    },
    justify() {
      this.checkContent();
    },
  },
};
</script>