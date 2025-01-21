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
      <v-col><h3>v-dialog</h3></v-col>
      <v-col
        :cols="3"
        style="display: flex; justify-content: center; align-items: center"
      >
        <v-checkbox
          label="persistent"
          v-model="persistent"
          style="margin-right: auto"
        ></v-checkbox>
      </v-col>
      <v-col
        :cols="3"
        style="display: flex; align-items: center; justify-content: center"
      >
        <button @click="model = true">Test</button>
      </v-col>
      <v-col>
        <!-- Accordion -->
        <v-accordion
          rounded
          :items="[accordion_item]"
          style="width: 80%; margin-left: auto; margin-right: auto"
        >
          <!-- <template #title="{ item }">
          <span style="color: blue; font-size: 20px;">{{ item.title }}</span>
        </template> -->
          <template #content="{ item }">
            <v-row style="justify-content: center">
              <v-col
                :cols="4"
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
    <v-dialog :persistent="persistent" v-model="model">
      <div style="width: 300px">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
        earum consequuntur vero porro, et expedita rerum a facere? Doloremque
        veritatis at laudantium fugit eum quas magni eos. Similique, dicta sunt.
      </div>
      <button @click="model = false">chiudiDialog</button>
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
  methods: {},
  mounted() {
    this.accordion_item.content = [
      "<v-dialog",
      ':persistent="' + this.persistent + '"',
      'v-model="' + this.model + '"',
      "></v-dialog>",
    ];
  },
  watch: {
    modelValue() {
      this.accordion_item.content = [
        "<v-dialog",
        ':persistent="' + this.persistent + '"',
        'v-model="' + this.model + '"',
        "></v-dialog>",
      ];
    },
    persistent() {
      this.accordion_item.content = [
        "<v-dialog",
        ':persistent="' + this.persistent + '"',
        'v-model="' + this.model + '"',
        "></v-dialog>",
      ];
    },
  },
};
</script>