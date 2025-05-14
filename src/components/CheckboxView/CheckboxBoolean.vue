<template>
  <v-row>
    <v-col :cols="4">
      <v-input
        type="text"
        label="label"
        v-model="label"
      ></v-input>
    </v-col>
    <v-col :cols="4" style="display: flex;">
      <v-checkbox
        label="rounded"
        v-model="rounded"
      ></v-checkbox>
    </v-col>
    <v-col :cols="4" style="display: flex;">
      <select
        name="choice"
        v-model="size"
        @change="model = null"
      >
        <option value="sm">sm</option>
        <option value="">md</option>
        <option value="lg">lg</option>
        <option value="xl">xl</option>
        <option value="2xl">2xl</option>
      </select>
    </v-col>
    <v-col :cols="12" style="display: flex; justify-content: center; margin-top: 30px;">
      <v-checkbox
        :rounded="rounded"
        :label="label"
        :size="size"
        v-model="model"
        @change="checkContent"
      ></v-checkbox>
    </v-col>
  </v-row>
      <!-- Accordion -->
      <v-accordion
        :items="[accordion_item]"
        style="
          width: 100%;
          margin-top: 30px;
        "
      >
        <template #content="{ item }">
          <v-row>
            <v-col :cols="12" style="display: block">
              <div v-for="(obj, i) in item.content" :key="i">
                <div>
                  {{
                    i != 0 && i != item.content.length - 1
                      ? "&nbsp;&nbsp;&nbsp;&nbsp; " + obj
                      : obj
                  }}
                </div>
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
      rounded: false,
      size: "",
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
        "<v-checkbox",
        ':rounded="' + this.rounded + '"',
        ':label="' + this.label + '"',
        ':size="' + this.size + '"',
        'v-model="' + this.model + '"',
        "></v-checkbox>",
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
    label() {
      this.checkContent();
    },
    rounded() {
      this.checkContent();
    },
    size() {
      this.checkContent();
    },
  },
};
</script>