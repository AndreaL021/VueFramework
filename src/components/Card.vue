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
      <v-col><h3>v-card</h3></v-col>
      <v-col
        :cols="3"
        style="display: flex; justify-content: left; padding-left: 0%"
      >
        <v-input label="title" style="margin-right: auto" v-model="title">
        </v-input>
        <v-checkbox
          label="animation"
          v-model="animation"
          style="margin-right: auto"
        ></v-checkbox>
        <v-checkbox
          label="shadow"
          v-model="shadow"
          style="margin-right: auto"
        ></v-checkbox>
        <v-checkbox
          label="rounded"
          v-model="rounded"
          style="margin-right: auto"
        ></v-checkbox>
        <v-checkbox
          label="outlined"
          v-model="outlined"
          style="margin-right: auto"
        ></v-checkbox>
      </v-col>
      <v-col
        :cols="4"
        style="display: flex; align-items: center; justify-content: center"
      >
        <v-card
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
      <v-col>
        <!-- Accordion -->
        <v-accordion
          rounded
          :items="[accordion_item]"
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
      animation:false,
      title: "",
      shadow: false,
      outlined: false,
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
        ':bgColor=""',
        ':bgColorTitle=""',
        ">Lorem ipsum</v-card>"
      ];
    },
  },
  mounted() {
    this.accordion_item.content = [
        "<v-card",
        ':animation="' + this.animation + '"',
        ':rounded="' + this.rounded + '"',
        ':outlined="' + this.outlined + '"',
        ':title="' + this.title + '"',
        ':shadow="' + this.shadow + '"',
        ':bgColor=""',
        ':bgColorTitle=""',
        ">Lorem ipsum</v-card>"
    ];
  },
  watch: {
    title() {
      this.accordion_item.content = [
        "<v-card",
        ':animation="' + this.animation + '"',
        ':rounded="' + this.rounded + '"',
        ':outlined="' + this.outlined + '"',
        ':title="' + this.title + '"',
        ':shadow="' + this.shadow + '"',
        ':bgColor=""',
        ':bgColorTitle=""',
        ">Lorem ipsum</v-card>"
      ];
    },
    rounded() {
      this.accordion_item.content = [
        "<v-card",
        ':animation="' + this.animation + '"',
        ':rounded="' + this.rounded + '"',
        ':outlined="' + this.outlined + '"',
        ':title="' + this.title + '"',
        ':shadow="' + this.shadow + '"',
        ':bgColor=""',
        ':bgColorTitle=""',
        ">Lorem ipsum</v-card>"
      ];
    },
    shadow() {
      this.accordion_item.content = [
        "<v-card",
        ':animation="' + this.animation + '"',
        ':rounded="' + this.rounded + '"',
        ':outlined="' + this.outlined + '"',
        ':title="' + this.title + '"',
        ':shadow="' + this.shadow + '"',
        ':bgColor=""',
        ':bgColorTitle=""',
        ">Lorem ipsum</v-card>"
      ];
    },
    outlined() {
      this.accordion_item.content = [
        "<v-card",
        ':animation="' + this.animation + '"',
        ':rounded="' + this.rounded + '"',
        ':outlined="' + this.outlined + '"',
        ':title="' + this.title + '"',
        ':shadow="' + this.shadow + '"',
        ':bgColor=""',
        ':bgColorTitle=""',
        ">Lorem ipsum</v-card>"
      ];
    },
    animation() {
      this.accordion_item.content = [
        "<v-card",
        ':animation="' + this.animation + '"',
        ':rounded="' + this.rounded + '"',
        ':outlined="' + this.outlined + '"',
        ':title="' + this.title + '"',
        ':shadow="' + this.shadow + '"',
        ':bgColor=""',
        ':bgColorTitle=""',
        ">Lorem ipsum</v-card>"
      ];
    },
  },
};
</script>