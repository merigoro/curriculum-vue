import { createApp } from 'vue'
import App from './App.vue'
import { createI18n } from 'vue-i18n'

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faBasketball } from '@fortawesome/free-solid-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'

/* add icons to the library */
library.add(faBasketball, faPhone, faEnvelope, faLocationDot, faLinkedin)


import './assets/main.css'

const i18n = createI18n({
    legacy: false,
    globalInjection: true,
    locale: "en",
    fallbackLocale: "it",
    availableLocales: ["en", "it"],
    messages: {
        en: {
            contactsTitle: "Contacts"
        },
        it: {
            contactsTitle: 'Contatti'
        }
      }
})

createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.use(i18n)
.mount('#app')
