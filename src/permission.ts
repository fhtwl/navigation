import router from './router';
import { useStore } from './store/system/user';
import NProgress from 'nprogress';
import '@/components/NProgress/nprogress.less';
import { notification } from 'ant-design-vue';
import { resetMenuRouter, updateMenuRouter } from './utils/router';

NProgress.configure({ showSpinner: false });

const allowList = ['login', 'register', 'registerResult'];
export const loginRoutePath = '/auth/login';
const defaultRoutePath = '/dashboard/my-dashboard';

router.beforeEach((to, from, next) => {
  NProgress.start();
  // 重置之前的动态路由
  resetMenuRouter();
  // 更新动态路由
  updateMenuRouter().then(() => {
    // 请求带有 redirect 重定向时，登录自动重定向到该地址
    const redirect = decodeURIComponent(
      (from.query?.redirect as string | undefined) || to.path
    );
    if (to.path === redirect) {
      next({ ...to, replace: true });
    } else {
      // 跳转到目的路由
      next({ path: redirect });
    }
  });
});

router.afterEach(() => {
  NProgress.done();
});
