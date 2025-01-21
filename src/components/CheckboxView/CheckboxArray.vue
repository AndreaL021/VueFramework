<template>
  <v-row justify="center">
    <v-col :cols="2" justify="center">
      <v-checkbox
        :rounded="rounded"
        :size="size"
        label="item1"
        item-value="item1"
        v-model="model"
        @change="checkContent"
      ></v-checkbox>
    </v-col>
    <v-col :cols="2" justify="center">
      <v-checkbox
        :rounded="rounded"
        :size="size"
        label="item2"
        item-value="item2"
        v-model="model"
        @change="checkContent"
      ></v-checkbox>
    </v-col>
    <v-col :cols="2" justify="center">
      <v-checkbox
        :rounded="rounded"
        :size="size"
        label="item3"
        item-value="item3"
        v-model="model"
        @change="checkContent"
      ></v-checkbox>
    </v-col>
    <v-col :cols="2" justify="center">
      <v-checkbox
        :rounded="rounded"
        :size="size"
        label="item4"
        item-value="item4"
        v-model="model"
        @change="checkContent"
      ></v-checkbox>
    </v-col>
    <v-col :cols="2" justify="center">
      <v-checkbox
        :rounded="rounded"
        :size="size"
        label="item5"
        item-value="item5"
        v-model="model"
        @change="checkContent"
      ></v-checkbox>
    </v-col>
    <v-col :cols="2" justify="center">
      <v-checkbox
        :rounded="rounded"
        :size="size"
        label="item6"
        item-value="item6"
        v-model="model"
        @change="checkContent"
      ></v-checkbox>
    </v-col>
    <v-col :cols="4" style="padding: 0px">
      <!-- Accordion -->
      <v-accordion
        rounded
        :items="[accordion_item]"
        style="
          width: 100%;
          margin-left: auto;
          margin-right: auto;
          margin-top: 10px;
        "
      >
        <template #content="{ item }">
          <v-row style="justify-content: center">
            <v-col :cols="12" style="display: block">
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
</template>
<script>
export default {
  components: {},
  data() {
    return {
      label: "label",
      rounded: true,
      size: "lg",
      model: [],
      accordion_item: {
        title: "Source",
        content: [],
      },
    };
  },
  methods: {
    checkContent() {
      this.accordion_item.content = [
        "<v-checkbox",
        ':rounded="' + this.rounded + '"',
        ':label="item1"',
        ":size=\"'" + this.size + "'\"",
        ':item-value="item1"',
        'v-model="[' + this.model + ']"',
        "></v-checkbox>",
      ];
    },
  },
  mounted() {
    this.accordion_item.content = [
      "<v-checkbox",
      ':rounded="' + this.rounded + '"',
      ':label="item1"',
      ":size=\"'" + this.size + "'\"",
      ':item-value="item1"',
      'v-model="[' + this.model + ']"',
      "></v-checkbox>",
    ];
  },
  watch: {
    rounded() {
      this.accordion_item.content = [
        "<v-checkbox",
        ':rounded="' + this.rounded + '"',
        ':label="item1"',
        ":size=\"'" + this.size + "'\"",
        ':item-value="item1"',
        'v-model="[' + this.model + ']"',
        "></v-checkbox>",
      ];
    },
  },
};
</script>