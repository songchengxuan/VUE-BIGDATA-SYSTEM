import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import { usePermissStore } from '../store/permiss';
import Home from '../views/home.vue';

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        redirect: '/dashboard',
    },
    {
        path: '/',
        name: 'Home',
        component: Home,
        children: [
            {
                path: '/dashboard',
                name: 'dashboard',
                meta: {
                    title: '系统首页',
                    permiss: '1',
                },
                component: () => import(/* webpackChunkName: "dashboard" */ '../views/dashboard.vue'),
            },
            {
                path: "/extableY1",
                name: "extableY1",
                meta: {
                    title: '主推商品属性表',
                    permiss: '21',
                },
                component: () => import ("../views/tableupload/ExtTableY1.vue")
            },
            {
                path: "/extableY2",
                name: "extableY2",
                meta: {
                    title: '可比门店表',
                    permiss: '22',
                },
                component: () => import ("../views/tableupload/ExtTableY2.vue")
            },
            {
                path: "/extableY3",
                name: "extableY3",
                meta: {
                    title: '新老门店映射表',
                    permiss: '23',
                },
                component: () => import ("../views/tableupload/ExtTableY3.vue")
            },
            {
                path: "/extableY4",
                name: "extableY4",
                meta: {
                    title: '指定加盟店表',
                    permiss: '24',
                },
                component: () => import ("../views/tableupload/ExtTableY4.vue")
            },
            {
                path: "/predForm",
                name: "predForm",
                meta: {
                    title: '时序预测参数设定',
                    permiss: '31',
                },
                component: () => import ("../views/pred/PredForm.vue")
            },
            {
                path: "/predCharts",
                name: "predCharts",
                meta: {
                    title: '时序预测结果展示',
                    permiss: '32',
                },
                component: () => import ("../views/pred/PredCharts.vue")
            },
            /*============原生index============*/
            {
                path: '/table',
                name: 'basetable',
                meta: {
                    title: '常用表格',
                    permiss: '41',
                },
                component: () => import(/* webpackChunkName: "table" */ '../views/table.vue'),
            },
            {
                path: '/import',
                name: 'import',
                meta: {
                    title: '导入Excel',
                    permiss: '42',
                },
                component: () => import(/* webpackChunkName: "import" */ '../views/import.vue'),
            },
            {
                path: '/export',
                name: 'export',
                meta: {
                    title: '导出Excel',
                    permiss: '43',
                },
                component: () => import(/* webpackChunkName: "export" */ '../views/export.vue'),
            },
            {
                path: '/tabs',
                name: 'tabs',
                meta: {
                    title: 'tab标签',
                    permiss: '5',
                },
                component: () => import(/* webpackChunkName: "tabs" */ '../views/tabs.vue'),
            },
            {
                path: '/form',
                name: 'baseform',
                meta: {
                    title: '基本表单',
                    permiss: '61',
                },
                component: () => import(/* webpackChunkName: "form" */ '../views/form.vue'),
            },
            {
                path: '/upload',
                name: 'upload',
                meta: {
                    title: '上传插件',
                    permiss: '62',
                },
                component: () => import(/* webpackChunkName: "upload" */ '../views/upload.vue'),
            },
            {
                path: '/editor',
                name: 'editor',
                meta: {
                    title: '富文本编辑器',
                    permiss: '631',
                },
                component: () => import(/* webpackChunkName: "editor" */ '../views/editor.vue'),
            },
            {
                path: '/markdown',
                name: 'markdown',
                meta: {
                    title: 'markdown编辑器',
                    permiss: '631',
                },
                component: () => import(/* webpackChunkName: "markdown" */ '../views/markdown.vue'),
            },
            {
                path: '/icon',
                name: 'icon',
                meta: {
                    title: '自定义图标',
                    permiss: '7',
                },
                component: () => import(/* webpackChunkName: "icon" */ '../views/icon.vue'),
            },
            {
                path: '/permission',
                name: 'permission',
                meta: {
                    title: '权限管理',
                    permiss: '8',
                },
                component: () => import(/* webpackChunkName: "permission" */ '../views/permission.vue'),
            },
            {
                path: '/user',
                name: 'user',
                meta: {
                    title: '个人中心',
                },
                component: () => import(/* webpackChunkName: "user" */ '../views/user.vue'),
            },
        ],
    },
    {
        path: '/login',
        name: 'Login',
        meta: {
            title: '登录',
        },
        component: () => import(/* webpackChunkName: "login" */ '../views/login.vue'),
    },
    {
        path: '/403',
        name: '403',
        meta: {
            title: '没有权限',
        },
        component: () => import(/* webpackChunkName: "403" */ '../views/403.vue'),
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

router.beforeEach((to, from, next) => {
    document.title = `${to.meta.title} | vue-manage-system`;
    const role = localStorage.getItem('ms_username');
    const permiss = usePermissStore();
    if (!role && to.path !== '/login') {
        next('/login');
    } else if (to.meta.permiss && !permiss.key.includes(to.meta.permiss)) {
        // 如果没有权限，则进入403
        next('/403');
    } else {
        next();
    }
});

export default router;
