<template>
	<div class="container">
		<div class="plugins-tips">通过 v-permiss 自定义指令实现权限管理，使用非 admin 账号登录，可查看效果。</div>
		<div class="mgb20">
			<span class="label">角色：</span>
			<el-select v-model="role" @change="handleChange">
				<el-option label="超级管理员" value="admin"></el-option>
				<el-option label="普通用户" value="user"></el-option>
				<el-option label="SAP用户" value="sap"></el-option>
			</el-select>
		</div>
		<div class="mgb20 tree-wrapper">
			<el-tree
				ref="tree"
				:data="data"
				node-key="id"
				default-expand-all
				show-checkbox
				:default-checked-keys="checkedKeys"
			/>
		</div>
		<el-button type="primary" @click="onSubmit">保存权限</el-button>
	</div>
</template>

<script setup lang="ts" name="permission">
import { ref } from 'vue';
import { ElTree } from 'element-plus';
import { usePermissStore } from '../store/permiss';

const role = ref<string>('admin');

interface Tree {
	id: string;
	label: string;
	children?: Tree[];
}

const data: Tree[] = [
	{ id: '1', label: '系统首页' },
	{ id: '2', label: '手工表维护',
		children: [
			{ id: '21', label: '主推商品属性表' },
			{ id: '22', label: '可比门店表' },
			{ id: '23', label: '新老门店映射表' },
			{ id: '24', label: '指定加盟店表' },
		]
	},
	{ id: '3', label: '增强算子模块',
		children: [
			{ id: '31', label: '时序预测参数设定' },
			{ id: '32', label: '时序预测结果展示' },
		]
	},
	{ id: '4', label: '表格相关',
		children: [
			{ id: '41', label: '常用表格' },
			{ id: '42', label: '导入Excel' },
			{ id: '43', label: '导出Excel' },
		]
	},
	{ id: '5', label: 'tab选项卡' },
	{ id: '6', label: '表单相关',
		children: [
			{ id: '61', label: '基本表单' },
			{ id: '62', label: '文件上传' },
			{ id: '63', label: '三级菜单',
				children:[
					{ id: '631', label: '富文本编辑器'},
					{ id: '632', label: 'markdown编辑器'},
				] 
			},
		]
	},
	{ id: '7', label: '自定义图标' },
	{ id: '8', label: '权限管理'}
];

const permiss = usePermissStore();

// 获取当前权限
const checkedKeys = ref<string[]>([]);
const getPremission = () => {
	// 请求接口返回权限
	checkedKeys.value = permiss.defaultList[role.value];
};
getPremission();

// 保存权限
const tree = ref<InstanceType<typeof ElTree>>();
const onSubmit = () => {
	// 获取选中的权限
	console.log(tree.value!.getCheckedKeys(false));
};

const handleChange = (val: string[]) => {
	tree.value!.setCheckedKeys(permiss.defaultList[role.value]);
};
</script>

<style scoped>
.tree-wrapper {
	max-width: 500px;
}
.label {
	font-size: 14px;
}
</style>
