import { createApp } from 'vue';
import App from './App.vue';
import "./assets/style.css"

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from '@fortawesome/free-brands-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(fas);
library.add(fab);
library.add(far);

const app = createApp(App);


(async () => {
    const components = import.meta.glob("./components/Framework/**/*.vue");

    for (const path in components) {
        const componentName = path.split("/").pop().replace(/\.\w+$/, '');

        // Caricamento sincrono del componente
        const module = await components[path]();
        app.component(componentName, module.default);
    }

    app.component("fa-i", FontAwesomeIcon)

    app.mount('#app');
})();
