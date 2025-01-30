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
        <v-checkbox
          label="rounded"
          v-model="rounded"
          style="margin-right: auto"
        ></v-checkbox>
        <v-checkbox
          label="auto close"
          v-model="autoClose"
          style="margin-right: auto"
        ></v-checkbox>
      </v-col>
      <v-col
        :cols="4"
        style="display: flex; align-items: center; justify-content: center"
      >
        <v-accordion
          :items="accordion_items"
          :rounded="rounded"
          :autoClose="autoClose"
        >
          <template #title="{ title }">
            <div>{{ title }}</div>
          </template>
          <template #content="{ item }">
            <div style="display: flex">
              <img
                style="width: 70px; height: 70px"
                :src="item.img"
                alt="Immagine non caricata"
                loading="eager"
              />
              <div>{{ item.des }}</div>
            </div>
          </template>
        </v-accordion>
      </v-col>
      <v-col :cols="6">
        <!-- Accordion -->
        <v-accordion rounded :items="[accordion_item2]">
          <template #content="{ item }">
            <v-row style="justify-content: center">
              <v-col
                :cols="12"
                style="display: flex; justify-content: left; align-items: start"
              >
                <div v-for="(obj, i) in item.content" :key="i">
                  <span>{{
                    i != 0 && i != item.content.length - 1 && obj!==">"
                      ? "&nbsp;&nbsp;&nbsp;&nbsp; " + obj
                      : obj
                  }}</span>
                </div>
              </v-col>
            </v-row>
          </template>
        </v-accordion>
      </v-col>
      <v-col :cols="6">
        <!-- Accordion -->
        <v-accordion rounded :items="[accordion_item3]">
          <template #content="{ item }">
            <v-row style="justify-content: center">
              <v-col
                :cols="12"
                style="display: flex; justify-content: left; align-items: start"
              >
                <div v-for="(obj, i) in item.content" :key="i">
                  <span>{{
                   ( i != 0 && i != item.content.length - 1 && obj!='>' && !obj.includes('template'))
                      ? "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; " + obj
                      : obj.includes('template')? "&nbsp;&nbsp;&nbsp;&nbsp; "+obj
                      :obj
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
import img1 from "@/assets/images/img1.jpg";
import img2 from "@/assets/images/img2.jpg";
import img3 from "@/assets/images/img3.jpg";
export default {
  components: {},
  data() {
    return {
      rounded: false,
      autoClose: false,
      animation: false,
      title: "",
      shadow: false,
      outlined: false,
      model: "",
      accordion_items: [
        {
          title: "item1",
          img: img1,
          des: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        },
        {
          title: "item2",
          img: img2,
          des: "Lorem ipsum dolor sit amet consectetur adipisicing elit.\n Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        },
        {
          title: "item3",
          img: img3,
          des: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        },
      ],
      accordion_item2: {
        title: "Source",
        content: [],
      },
      accordion_item3: {
        title: "Source",
        content: [],
      },
    };
  },
  methods: {},
  mounted() {
  this.accordion_items.forEach((item) => {
    const img = new Image();
    img.src = item.img;
    
  });
    this.accordion_item2.content = [
      "<v-accordion",
      ':items="[{ title:"item1", content:""}]"',
      ':rounded="' + this.rounded + '"',
      ':autoClose="' + this.autoClose + '"',
      "></v-accordion>",
    ];
    this.accordion_item3.content = [
      "<v-accordion",
      '   :items="[{ title:"item1", img:"", des:""}]"',
      '   :rounded="' + this.rounded + '"',
      '   :autoClose="' + this.autoClose + '"',
      '>',
      '   <template #title="{ item, title }">',
      "           <div>{{ title }}</div>",
      "   </template>",
      '   <template #content="{ item, content }">',
      '       <div style="display: flex">',
      '           <img :src="item.img"/>',
      "           <div>{{ item.des }}</div>",
      "       </div>",
      "   </template>",
      "</v-accordion>",
    ];
  },
  watch: {
    rounded() {
      this.accordion_item2.content = [
      "<v-accordion",
      ':items="[{ title:"item1", content:""}]"',
      ':rounded="' + this.rounded + '"',
      ':autoClose="' + this.autoClose + '"',
      "></v-accordion>",
      ];
    this.accordion_item3.content = [
      "<v-accordion",
      '   :items="[{ title:"item1", img:"", des:""}]"',
      '   :rounded="' + this.rounded + '"',
      '   :autoClose="' + this.autoClose + '"',
      '>',
      '   <template #title="{ item, title }">',
      "           <div>{{ title }}</div>",
      "   </template>",
      '   <template #content="{ item, content }">',
      '       <div style="display: flex">',
      '           <img :src="item.img"/>',
      "           <div>{{ item.des }}</div>",
      "       </div>",
      "   </template>",
      "</v-accordion>",
    ];
    },
    autoClose() {
      this.accordion_item2.content = [
      "<v-accordion",
      ':items="[{ title:"item1", content:""}]"',
      ':rounded="' + this.rounded + '"',
      ':autoClose="' + this.autoClose + '"',
      "></v-accordion>",
      ];
    this.accordion_item3.content = [
      "<v-accordion",
      '   :items="[{ title:"item1", img:"", des:""}]"',
      '   :rounded="' + this.rounded + '"',
      '   :autoClose="' + this.autoClose + '"',
      '>',
      '   <template #title="{ item, title }">',
      "           <div>{{ title }}</div>",
      "   </template>",
      '   <template #content="{ item, content }">',
      '       <div style="display: flex">',
      '           <img :src="item.img"/>',
      "           <div>{{ item.des }}</div>",
      "       </div>",
      "   </template>",
      "</v-accordion>",
    ];
    },
  },
};
</script>