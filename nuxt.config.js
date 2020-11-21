export default {
    components: true,
    head: {
        titleTemplate: "Airbnb %s",
        htmlAttrs: {
            lang: "en"
        },
        bodyAttrs: {
            class: ["my-style"]
        },
        meta: [{
            charset: "utf-8",
        }]
    },
    router: {
        prefetchLinks: false,
    },
    // plugins:[ '~/plugins/maps.client' ]
    // Modules (https://go.nuxtjs.dev/config-modules)
    modules: [
        // https://go.nuxtjs.dev/bootstrap
        'bootstrap-vue/nuxt',

    ],
    // Only include the layout: https://bootstrap-vue.org/docs#nuxtjs-module
    bootstrapVue: {
        componentPlugins: [
            'LayoutPlugin' // only include the layout
        ],
    },
}