import { createRouter, createWebHashHistory } from 'vue-router';

import common from './modules/common';
const routes = [...common];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
