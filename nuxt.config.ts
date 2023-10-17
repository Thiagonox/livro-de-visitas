export default {
  routes: [
    {
      name: 'listar',
      path: '/listar',
      component: '~/pages/listar.vue'
    },
    {
      name: 'dashboard',
      path: '/dashboard',
      component: '~/pages/dashboard.vue'
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