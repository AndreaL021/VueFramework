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
      <v-col><h3>v-card</h3></v-col>
      <v-col :cols="3">
        <v-input label="title" style="margin-right: auto" v-model="title">
        </v-input>
      </v-col>
      <v-col :cols="2" style="display: flex; align-items: flex-end">
        <v-checkbox label="animation" v-model="animation"></v-checkbox>
      </v-col>
      <v-col :cols="2" style="display: flex; align-items: flex-end">
        <v-checkbox label="shadow" v-model="shadow"></v-checkbox>
      </v-col>
      <v-col :cols="2" style="display: flex; align-items: flex-end">
        <v-checkbox label="rounded" v-model="rounded"></v-checkbox>
      </v-col>
      <v-col :cols="2" style="display: flex; align-items: flex-end">
        <v-checkbox label="outlined" v-model="outlined"></v-checkbox>
      </v-col>
      <v-col
        :cols="12"
        style="
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 40px;
        "
      >
        <v-card
          bgColorTitle="grey"
          bgColor="greenyellow"
          colorTitle="white"
          width="300px"
          :animation="animation"
          :rounded="rounded"
          :outlined="outlined"
          :title="title"
          :shadow="shadow"
        >
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum
          veritatis temporibus officia quam. Quo id a quidem. Dolorem recusandae
          debitis quas rerum vero, at nemo vitae omnis temporibus error soluta.
        </v-card>
      </v-col>
    </v-row>
    <!-- Accordion -->
    <v-accordion :items="[accordion_item]">
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
export default {
  components: {},
  data() {
    return {
      rounded: true,
      animation: false,
      title: "title",
      shadow: false,
      outlined: true,
      model: "",
      accordion_item: {
        title: "Source",
        content: [],
      },
    };
  },
  methods: {
    checkContent() {
      this.accordion_item.content = [
        "<v-card",
        ':animation="' + this.animation + '"',
        ':rounded="' + this.rounded + '"',
        ':outlined="' + this.outlined + '"',
        ':title="' + this.title + '"',
        ':shadow="' + this.shadow + '"',
        ':bgColor="greenyellow"',
        ':bgColorTitle="grey"',
        ':color="white"',
        ':colorTitle="black"',
        'width="300px"',
        ">Lorem ipsum</v-card>",
      ];
    },
  },
  mounted() {
    this.checkContent();
  },
  watch: {
    title() {
      this.checkContent();
    },
    rounded() {
      this.checkContent();
    },
    shadow() {
      this.checkContent();
    },
    outlined() {
      this.checkContent();
    },
    animation() {
      this.checkContent();
    },
  },
};
</script>