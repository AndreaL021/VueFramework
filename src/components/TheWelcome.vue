<template>
  <div style="text-align: center">
    <h1>VueJS Framework</h1>
    <!-- <input type="date">
    <input type="datetime-local"> -->
    <!-- <input type="email">
    <input type="file">
    <input type="hidden">
    <input type="image">
    <input type="month">
    <input type="password">
    <input type="radio">
    <input type="range">
    <input type="reset">
    <input type="search">
    <input type="submit">
    <input type="tel">
    <input type="time">
    <input type="url">
    <input type="week"> -->
  
    <Autocomplete />
    <Accordion />
    <Card />
    <TextInput />
    <TextArea />
    <Checkbox />
    <Dialog />
    <br>
    <br>
    <br>





    <v-row justify="center" :maxCols="8">
      <v-col :cols="4" style="display: flex">
        <input type="color">
      </v-col>
      <v-col :cols="4">
        <v-color-picker size="md" label="Color" v-model="model_color"></v-color-picker>
      </v-col>
    </v-row>


      <v-row justify="center" :maxCols="8">
      <v-col :cols="2" style="display: flex">
        <button @click="snackbar = model_text">Visualizza notifica</button>
      </v-col>
      <v-col :cols="2" style="display: flex">
        <button @click="dialog = true">Visualizza Dialog</button>
      </v-col>
      <v-col :cols="2" style="display: flex">
        <button @click="overlayTest">Visualizza Overlay</button>
      </v-col>
    </v-row>

    <v-row justify="center" style="margin-top: 20px">
      <v-col :cols="2">
        <input type="number" v-model="maxCols" />

        <v-autocomplete
          :search="false"
          :items="justify"
          v-model="justify_model"
        ></v-autocomplete>
      </v-col>
      <v-col :cols="2" style="display: flex">
        <button
          style="font-weight: bold; font-size: 30px"
          @click="aggiungiColonna"
        >
          +
        </button>
        <button
          style="font-weight: bold; font-size: 30px"
          @click="rimuoviColonna"
        >
          -
        </button>
      </v-col>
    </v-row>
    <v-row bgColor="grey" :justify="justify_model" :maxCols="maxCols">
      <v-col
        style="border: solid 1px black"
        v-for="(column, i) in columns"
        :justify="'start'"
        bgColor="red"
        :cols="column.cols"
        :key="i"
        >{{ column.text
        }}<input style="width: 50px" type="number" v-model="column.cols"
      /></v-col>
    </v-row>
    <v-dialog v-model="dialog" persistent>
      <div>
        <button @click="dialog = false">chiudi dialog</button>
      </div>
    </v-dialog>
    <v-overlay v-model="overlay"></v-overlay>
    <v-snackbar v-model="snackbar"></v-snackbar>
  </div>
</template>
<script>
import TextInput from './TextInput.vue';
import TextArea from './TextArea.vue';
import Checkbox from './CheckboxView/Checkbox.vue';
import Dialog from './Dialog.vue';
import Card from './Card.vue';
import Accordion from './Accordion.vue';
import Autocomplete from './Autocomplete.vue';

export default {
  components: { TextInput, TextArea, Checkbox, Dialog, Card, Accordion, Autocomplete },
  name: "Framework",
  data() {
    return {
      model_color:"#000000",
      snackbar: "",
      overlay: false,
      dialog: false,
      justify_model: "center",
      justify: [
        "start",
        "end",
        "center",
        "space-around",
        "space-between",
        "space-evenly",
      ],
      maxCols: 12,
      columns: [
        {
          cols: 4,
          text: "Colonna 1",
        },
        {
          cols: 4,
          text: "Colonna 2",
        },
      ],
    };
  },
  methods: {
    overlayTest() {
      this.overlay = true;
      setTimeout(() => {
        this.overlay = false;
      }, 3000);
    },
    aggiungiColonna() {
      this.columns.push({
        cols: 4,
        text: "Colonna " + (this.columns.length + 1),
      });
    },
    rimuoviColonna() {
      this.columns.pop();
    },
  },
};
</script>
