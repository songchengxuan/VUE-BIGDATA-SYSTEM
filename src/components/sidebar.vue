<template>
    <div class="sidebar">
        <el-menu
            class="sidebar-el-menu"
            :default-active="onRoutes"
            :collapse="sidebar.collapse"
            background-color="#324157"
            text-color="#bfcbd9"
            active-text-color="#20a0ff"
            unique-opened
            router
        >
            <template v-for="item in items">
                <template v-if="item.subs">
                    <el-sub-menu :index="item.index" :key="item.index" v-permiss="item.permiss">
                        <template #title>
                            <el-icon>
                                <component :is="item.icon"></component>
                            </el-icon>
                            <span>{{ item.title }}</span>
                        </template>
                        <template v-for="subItem in item.subs">
                            <el-sub-menu
                                v-if="subItem.subs"
                                :index="subItem.index"
                                :key="subItem.index"
                                v-permiss="item.permiss"
                            >
                                <template #title>{{ subItem.title }}</template>
                                <el-menu-item v-for="(threeItem, i) in subItem.subs" :key="i" :index="threeItem.index">
                                    {{ threeItem.title }}
                                </el-menu-item>
                            </el-sub-menu>
                            <el-menu-item v-else :index="subItem.index" v-permiss="item.permiss">
                                {{ subItem.title }}
                            </el-menu-item>
                        </template>
                    </el-sub-menu>
                </template>
                <template v-else>
                    <el-menu-item :index="item.index" :key="item.index" v-permiss="item.permiss">
                        <el-icon>
                            <component :is="item.icon"></component>
                        </el-icon>
                        <template #title>{{ item.title }}</template>
                    </el-menu-item>
                </template>
            </template>
        </el-menu>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useSidebarStore } from '../store/sidebar';
import { useRoute } from 'vue-router';

const items = [
    {
        icon: 'Odometer',
        index: '/dashboard',
        title: '系统首页',
        permiss: '1',
    },
    {
        icon: 'Collection',
        index: '1',
        title: '手工表维护',
        permiss: '2',
        subs: [
            {
                index: '/extableY1',
                title: '主推商品属性表',
                permiss: '21',
            },
            {
                index: '/extableY2',
                title: '可比门店表',
                permiss: '22',
            },
            {
                index: '/extableY3',
                title: '新老门店映射表',
                permiss: '23',
            },
            {
                index: '/extableY4',
                title: '指定加盟店表',
                permiss: '24',
            },
        ],
    },
    {
        icon: 'View',
        index: '3',
        title: '增强算子模块',
        permiss: '3',
        subs: [
            {
                index: '/predForm',
                title: '时序预测参数设定',
                permiss: '31',
            },
            {
                index: '/predCharts',
                title: '时序预测结果展示',
                permiss: '32',
            },
        ],
    },
    {
        icon: 'Calendar',
        index: '12',
        title: '表格相关',
        permiss: '4',
        subs: [
            {
                index: '/table',
                title: '常用表格',
                permiss: '41',
            },
            {
                index: '/import',
                title: '导入Excel',
                permiss: '42',
            },
            {
                index: '/export',
                title: '导出Excel',
                permiss: '43',
            },
        ],
    },
    {
        icon: 'DocumentCopy',
        index: '/tabs',
        title: 'tab选项卡',
        permiss: '5',
    },
    {
        icon: 'Edit',
        index: '13',
        title: '表单相关',
        permiss: '6',
        subs: [
            {
                index: '/form',
                title: '基本表单',
                permiss: '61',
            },
            {
                index: '/upload',
                title: '文件上传',
                permiss: '62',
            },
            {
                index: '4',
                title: '三级菜单',
                permiss: '63',
                subs: [
                    {
                        index: '/editor',
                        title: '富文本编辑器',
                        permiss: '631',
                    },
                    {
                        index: '/markdown',
                        title: 'markdown编辑器',
                        permiss: '632',
                    },
                ],
            },
        ],
    },
    {
        icon: 'Setting',
        index: '/icon',
        title: '自定义图标',
        permiss: '7',
    },
    {
        icon: 'Warning',
        index: '/permission',
        title: '权限管理',
        permiss: '8',
    },
];

const route = useRoute();
const onRoutes = computed(() => {
    return route.path;
});

const sidebar = useSidebarStore();
</script>

<style scoped>
.sidebar {
    display: block;
    position: absolute;
    left: 0;
    top: 70px;
    bottom: 0;
    overflow-y: scroll;
}
.sidebar::-webkit-scrollbar {
    width: 0;
}
.sidebar-el-menu:not(.el-menu--collapse) {
    width: 250px;
}
.sidebar > ul {
    height: 100%;
}
</style>
