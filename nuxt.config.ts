// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss'
  ],
  app:{
head:{
title: "Nuxt 3 training",
meta:[
  {name:'description', content: 'this is a nuxt training app'}
],
link:[
 { rel:"stylesheet", href:"https://fonts.googleapis.com/icon?family=Material+Icons"}
]
},
  },
  runtimeConfig:{
    currencyKey: process.env.CURRENCY_API_KEY
  }
})
