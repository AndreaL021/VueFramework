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
      <v-col><h3>v-accordion</h3></v-col>
      <v-col
        :cols="3"
        style="display: flex; justify-content: left; padding-left: 0%"
      >
        <v-input label="title" style="margin-right: auto" v-model="title">
        </v-input
        >animation
        <v-checkbox
          label="rounded"
          v-model="rounded"
          style="margin-right: auto"
        ></v-checkbox>
      </v-col>
      <v-col
        :cols="4"
        style="display: flex; align-items: center; justify-content: center"
      >
        <v-accordion :items="accordion_items" :rounded="rounded">
        </v-accordion>
      </v-col>
      <v-col>
        <!-- Accordion -->
        <v-accordion
          rounded
          :items="[accordion_item2]"
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
      rounded: false,
      animation: false,
      title: "",
      shadow: false,
      outlined: false,
      model: "",
      accordion_items: [
        {
          title: "item1",
          content: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        },
        {
          title: "item2",
          content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.\n Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        },
        {
          title: "item3",
          content: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        },
      ],
      accordion_item2: {
        title: "Source",
        content: [],
      },
    };
  },
  methods: {
  },
  mounted() {
    this.accordion_item2.content = [
        "<v-accordion",
        ':items="[{ title:"item1", content:""}]"',
        ':rounded="' + this.rounded + '"',
        "></v-accordion>",
    ];
  },
  watch: {
    rounded() {
      this.accordion_item2.content = [
        "<v-accordion",
        ':items="[{ title:"", content:""}]"',
        ':rounded="' + this.rounded + '"',
        "></v-accordion>",
      ];
    },
  },
};
</script>