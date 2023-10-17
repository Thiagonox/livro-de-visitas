export default {
  routes: [
    {
      name: 'listar',
      path: '/listar',
      component: '~/pages/listar.vue'
    }
  ],
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
}