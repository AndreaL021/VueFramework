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
      <v-col><h3>v-dialog</h3></v-col>
      <v-col
        :cols="2"
        style="display: flex; justify-content: center; align-items: center"
      >
        <v-checkbox
          label="persistent"
          v-model="persistent"
          style="margin-right: auto"
        ></v-checkbox>
      </v-col>
      <v-col
        :cols="2"
        style="display: flex; align-items: center; justify-content: center"
      >
        <button @click="model = true">Test</button>
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
    <v-dialog :persistent="persistent" v-model="model">
      <v-card rounded animation outlined>
        <template #title>
          <v-row>
            <v-col :cols="4"></v-col>
            <v-col :cols="4">Title</v-col>
            <v-col :cols="4" display="flex" justify="end">
              <button @click="model = false">
                <fa-i icon="fa-solid fa-close" class="icon"></fa-i>
              </button>
            </v-col>
          </v-row>
        </template>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
        earum consequuntur vero porro, et expedita rerum a facere? Doloremque
        veritatis at laudantium fugit eum quas magni eos. Similique, dicta sunt.
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      persistent: false,
      model: false,
      accordion_item: {
        title: "Source",
        content: [],
      },
    };
  },
  methods: {
    checkContent() {
      this.accordion_item.content = [
        "<v-dialog",
        ':persistent="' + this.persistent + '"',
        'v-model="' + this.model + '"',
        ">",
        "<v-card></v-card>",
        "</v-dialog>",
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