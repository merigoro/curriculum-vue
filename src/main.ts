import { createApp } from 'vue'
import App from './App.vue'
import { createI18n } from 'vue-i18n'

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faBasketball } from '@fortawesome/free-solid-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

/* add icons to the library */
library.add(faBasketball, faPhone, faEnvelope, faLocationDot, faLinkedin, faGithub)


import './assets/main.css'

import { languages, defaultLocale } from './locales/index.js'
const messages = Object.assign(languages)

const i18n = createI18n({
    legacy: false,
    globalInjection: true,
    locale: defaultLocale,
    fallbackLocale: "it",
    availableLocales: ["en", "it"],
    messages: languages
})

const vuetify = createVuetify({
    components,
    directives,
  })

export default i18n

createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.use(vuetify)
.use(i18n)
.mount('#app')
