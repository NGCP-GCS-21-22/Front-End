import { createApp } from 'vue'
import App from './App.vue'
import VueGoogleMaps from '@fawmi/vue-google-maps'

const app = createApp(App);
app.use(VueGoogleMaps, {
    load: {
        key: 'AIzaSyALxRDktZaYsxXCYJQjLdJ6Wz-l3paEBag',
    },
}).mount('#app')
app.use(VueGoogleMaps, {
    load: {
        key: 'AIzaSyALxRDktZaYsxXCYJQjLdJ6Wz-l3paEBag',
    },
    autobindAllEvents: true,
}).mount('#app')