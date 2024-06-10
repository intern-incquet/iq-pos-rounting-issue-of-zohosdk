import { ZOHO } from './lib/ZOHO-SDK'
import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import router from './router'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
// createApp(App).mount('#app')
loadFonts()

ZOHO.CREATOR.init()
.then(() => {
    createApp(App).use(router).use(createPinia()).use(vuetify).mount('#app')
    console.log("zoho", ZOHO)
})

// import { createApp } from 'vue'
// import App from './App.vue'
// import router from './router'
// // import store from './store'
// import vuetify from './plugins/vuetify'
// import { loadFonts } from './plugins/webfontloader'
// import { ZOHO } from './lib/ZOHO-SDK'
// import { createPinia } from 'pinia'

// loadFonts()

// ZOHO.CREATOR.init()
//     .then(() => {
//         createApp(App)
//             .use(router)
//             .use(createPinia())
//             .use(vuetify)
//             .mount('#app')
//         console.log("zoho", ZOHO);
//     })
