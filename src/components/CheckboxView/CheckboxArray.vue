<template>
  <v-row justify="center">
    <v-col :cols="2">
      <v-checkbox
        :rounded="rounded"
        :size="size"
        label="item1"
        item-value="item1"
        v-model="model"
        @change="checkContent"
      ></v-checkbox>
    </v-col>
    <v-col :cols="2">
      <v-checkbox
        :rounded="rounded"
        :size="size"
        label="item2"
        item-value="item2"
        v-model="model"
        @change="checkContent"
      ></v-checkbox>
    </v-col>
    <v-col :cols="2">
      <v-checkbox
        :rounded="rounded"
        :size="size"
        label="item3"
        item-value="item3"
        v-model="model"
        @change="checkContent"
      ></v-checkbox>
    </v-col>
    <v-col :cols="2">
      <v-checkbox
        :rounded="rounded"
        :size="size"
        label="item4"
        item-value="item4"
        v-model="model"
        @change="checkContent"
      ></v-checkbox>
    </v-col>
    <v-col :cols="2">
      <v-checkbox
        :rounded="rounded"
        :size="size"
        label="item5"
        item-value="item5"
        v-model="model"
        @change="checkContent"
      ></v-checkbox>
    </v-col>
    <v-col :cols="2">
      <v-checkbox
        :rounded="rounded"
        :size="size"
        label="item6"
        item-value="item6"
        v-model="model"
        @change="checkContent"
      ></v-checkbox>
    </v-col>
  </v-row>
      <!-- Accordion -->
      <v-accordion
        :items="[accordion_item]"
        style="
          margin-top: 10px;
        "
      >
        <template #content="{ item }">
          <v-row justify="center">
            <v-col :cols="6" style="margin-left: 100px;">
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
    this.checkContent();
  },
  watch: {
    size() {
      this.checkContent();
    },
    rounded() {
      this.checkContent();
    },
    model() {
      this.checkContent();
    },
  },
};
</script>