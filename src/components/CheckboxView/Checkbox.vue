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
    <v-row justify="center">
      <!-- titolo -->
      <v-col :cols="4">
        <h3><br /><br />Boolean</h3>
      </v-col>
      <v-col :cols="4">
        <h3>v-checkbox <br /><br />Number</h3>
      </v-col>
      <v-col :cols="4">
        <h3><br /><br />String</h3>
      </v-col>
      <v-col :cols="4" style="padding: 2px;">
        <Boolean />
      </v-col>
      <v-col :cols="4" style="padding: 2px;">
        <Number />
      </v-col>
      <v-col :cols="4" style="padding: 2px;">
        <String />
      </v-col>
      <v-col :cols="12">
        <h3><br />Array</h3>
      </v-col>
      <v-col :cols="12" style="padding: 2px;">
        <Array />
      </v-col>
    </v-row>
  </div>
</template>
  <script>
import Boolean from "./CheckboxBoolean.vue";
import String from "./CheckboxString.vue";
import Number from "./CheckboxNumber.vue";
import Array from "./CheckboxArray.vue";
export default {
  components: { Boolean, Number, String, Array },
  data() {
    return {
      accordion_item: {
        title: "Source",
        content: [],
      },
    };
  },
  methods: {},
};
</script>