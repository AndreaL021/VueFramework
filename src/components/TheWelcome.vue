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

    <RowCol />
    <Autocomplete />
    <Accordion />
    <Card />
    <TextInput />
    <TextArea />
    <Checkbox />
    <Dialog />
    <ColorPicker />
    <Snackbar />
    <Overlay />
    <br />
    <br />
    <br />

  </div>
</template>
<script>
import TextInput from "./TextInput.vue";
import TextArea from "./TextArea.vue";
import Checkbox from "./CheckboxView/Checkbox.vue";
import Dialog from "./Dialog.vue";
import Card from "./Card.vue";
import Accordion from "./Accordion.vue";
import Autocomplete from "./Autocomplete.vue";
import RowCol from "./RowCol.vue";
import Snackbar from "./Snackbar.vue";
import Overlay from "./Overlay.vue";
import ColorPicker from "./ColorPicker.vue";

export default {
  components: {
    TextInput,
    TextArea,
    Checkbox,
    Dialog,
    Card,
    Accordion,
    Autocomplete,
    RowCol,
    ColorPicker,
    Overlay,
    Snackbar,
  },
  name: "Framework",
  data() {
    return {
    };
  },
};
</script>
