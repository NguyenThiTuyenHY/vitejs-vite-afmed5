import { createRouter, createWebHashHistory } from 'vue-router';
const Commomn = { template: '<router-view></router-view>' };
import Home from '../pages/client/Home.vue';
const About = { template: '<div>About</div>' };
import ClientLayout from '../layout/ClientLayout.vue';
import Dashboard from '../pages/admin/Dashboard.vue';
import AdminLayout from '../layout/AdminLayout.vue';
import SignIn from '../pages/login/SignIn.vue';
import SignUp from '../pages/login/SignUp.vue';
import DefaultLayout from '../layout/DefaultLayout.vue';
import NotFound from '../pages/system/NotFound.vue';

const routes = [
  {
    path: '/',
    name: 'trang-chu',
    component: Home,
    meta: {
      layout: ClientLayout,
      title: 'Trang chủ',
    },
  },
  {
    path: '/trang-chu',
    name: 'trang-chu',
    component: Home,
    meta: {
      layout: ClientLayout,
      title: 'Trang chủ',
    },
  },
  {
    path: '/lien-he',
    name: 'lien-he',
    component: About,
    meta: {
      layout: ClientLayout,
      title: 'Liên hệ',
    },
  },
  {
    path: '/tong-quan',
    name: 'tong-quan',
    component: About,
    meta: {
      layout: ClientLayout,
      title: 'Tổng quan',
    },
  },
  {
    path: '/admin',
    component: Commomn,
    children: [
      {
        path: '',
        component: Dashboard,
        name: 'admin-trang-chu',
        meta: {
          layout: AdminLayout,
          isAuthen: true,
          title: 'Admin - trang chủ',
        },
      },
      {
        path: 'trang-chu',
        component: Dashboard,
        name: 'admin-trang-chu',
        meta: {
          layout: AdminLayout,
          isAuthen: true,
          title: 'Admin - trang chủ',
        },
      },
    ],
  },
  {
    path: '/dang-nhap',
    component: SignIn,
    name: 'dang-nhap',
    meta: {
      layout: DefaultLayout,
      title: 'Đăng nhập',
    },
  },
  {
    path: '/dang-ky',
    name: 'dang-ky',
    component: SignUp,
    meta: {
      layout: DefaultLayout,
      title: 'Đăng ký',
    },
  },
  {
    path: '/:catchAll(.*)',
    component: NotFound,
    meta: {
      layout: DefaultLayout,
      title: '404 Not found',
    },
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  if (to.meta?.isAuthen) {
    next('/dang-nhap');
  } else {
    next();
  }
});

export default router;
