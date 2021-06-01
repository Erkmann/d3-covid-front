export default {
	// Global page headers: https://go.nuxtjs.dev/config-head
	head: {
		title: 'Covid Predict | Mateus Erkmann',
		htmlAttrs: {
			lang: 'pt-BR'
		},
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: '' }
		],
		link: [
			{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
		],
		script: [
			{
				src: '/js/vendor/jquery-3.5.1.slim.min.js'
			},
			{
				async: true,
				src: '/js/vendor/bootstrap.bundle.min.js'
			}
		]
	},

	// Global CSS: https://go.nuxtjs.dev/config-css
	css: [
		'~/assets/css/global.css'
	],

	// Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
	plugins: [
		'~/plugins/vue-toast-notification',
	],

	// Auto import components: https://go.nuxtjs.dev/config-components
	components: true,

	// Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
	buildModules: [
	],

	// Modules: https://go.nuxtjs.dev/config-modules
	modules: [
		// https://go.nuxtjs.dev/bootstrap
		'bootstrap-vue/nuxt',
		// https://go.nuxtjs.dev/axios
		'@nuxtjs/axios',
	],

	bootstrapVue: {
		icons: true
	},

	// Axios module configuration: https://go.nuxtjs.dev/config-axios
	axios: {
		baseURL: process.env.DEFAULT_URL
	},

	// Build Configuration: https://go.nuxtjs.dev/config-build
	build: {
		extractCss: true
	},

	server: {
		host: process.env.HOST,
		port: process.env.PORT,
		timing: true
	}
}
