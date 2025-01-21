<template>
    <div
      class="accordion"
      :style="{ width: width, borderRadius: rounded ? '8px' : '' }"
    >
      <div v-for="(item, index) in items" :key="index">
        <div
          class="accordion-title"
          :class="{ 'is-open': openIndex === index }"
          @click="toggleOpen(index)"
        >
          <slot name="title" :item="item">
            {{ item.title }}
          </slot>
        <slot name="icon">
          <fa-i
            icon="fa-solid fa-chevron-down"
            class="icon"
          ></fa-i>
        </slot>
      </div>
      <div
        ref="contents"
        :class="['accordion-content', { 'is-open': openIndex === index }]"
        :style="{
          maxHeight: openIndex === index ? computedHeights[index] : '0',
          textAlign: 'left'
        }"
      >
        <slot name="content" :item="item">
          {{ item.content }}
        </slot>
      </div>
    </div>
  </div>
</template>
  
  <script>
export default {
  data() {
    return {
      openIndex: null, // Indice della sezione aperta
      computedHeights: [], // Altezze dinamiche calcolate
    };
  },
  props: {
    width: {
      type: String,
      default: "auto",
    },
    rounded: {
      type: Boolean,
      default: false,
    },
    items: {
      type: Array,
      required: true, // Elenco delle sezioni
    },
  },
  mounted() {
    // Inizializza le altezze dinamiche
    this.$nextTick(() => {
      this.computedHeights = this.$refs.contents.map((content) =>
        content ? `${content.scrollHeight}px` : "0"
      );
    });
  },
  methods: {
    toggleOpen(index) {
      if (this.openIndex === index) {
        // Chiusura
        this.openIndex = null;
      } else {
        // Apertura
        this.openIndex = index;

        // Calcolo dinamico dell'altezza del contenuto
        this.$nextTick(() => {
          const content = this.$refs.contents[index];
          this.computedHeights[index] = `${content.scrollHeight}px`;
        });
      }
    },
  },
};
</script>
  
<style scoped>
.accordion {
  border: 1px solid #929292;
  border-radius: 8px;
  overflow: hidden;
}

.accordion-title {
  cursor: pointer;
  background-color: #f5f5f5;
  padding: 10px;
  font-size: 18px;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: background-color 0.3s ease;
}

.accordion-title.is-open {
  background-color: #e6e6e6;
}

.accordion-title .icon {
  transition: transform 0.4s ease;
}

.accordion-title.is-open .icon {
  transform: rotate(180deg);
}

.accordion-content {
  padding: 0 10px; /* Rimuove il padding verticale quando chiuso */
  background-color: #fff;
  overflow: hidden;
  max-height: 0;
  transition: max-height 0.2s ease-out, padding 0.2s ease-out; /* Anima sia l'altezza che il padding */
}

.accordion-content.is-open {
  padding: 10px; /* Aggiunge il padding verticale quando aperto */
  max-height: 500px; /* Imposta un valore massimo dinamico durante l'apertura */
}
</style>