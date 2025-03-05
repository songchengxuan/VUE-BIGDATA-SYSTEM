<template>
	<div>
		<div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item>
                    <i class="el-icon-lx-cascades"></i> 新老门店映射表
                </el-breadcrumb-item>
            </el-breadcrumb>
        </div>
		<div class="container">
			<div class="handle-box">
				<el-select v-model="query.selectedOption" class="handle-select mr10">
					<el-option v-for="item in query.options" :key="item" :label="item" :value="item">
					</el-option>
				</el-select>
				<el-button type="primary" :icon="Search" @click="handleSearch">按新门店ID查询</el-button>
				<!-- <el-button type="primary" :icon="Search" @click="handleSearch">按老门店ID查询</el-button> -->
				<el-button type="success" :icon="Plus"  @click="handleAdd">新增</el-button>
                <el-button type="warning" :icon="Upload" @click="handleUploadFile">Excel批量导入</el-button>
				<el-button type="warning" :icon="Top" @click="handlePush" style="float: right;">数据推送</el-button>
			</div>
			<el-table :data="tableData.slice((query.currentPage-1)*query.pagesize,query.currentPage*query.pagesize)" 
                highlight-current-row
                class="table" 
                ref="multipleTable"
                header-cell-class-name="table-header"
                :header-cell-style="{color: '#216386',background: '#ebf2f7'}"
            >
				<el-table-column prop="id" label="ID" width="55" text-align="center"></el-table-column>
				<el-table-column prop="old_store_id" label="老门店ID"></el-table-column>
                <el-table-column prop="new_store_id" label="新门店ID"></el-table-column>
				<el-table-column prop="new_branch_id" label="新连锁公司ID"></el-table-column>
				<el-table-column prop="create_time" label="创建时间"></el-table-column>
                <el-table-column prop="modify_time" label="修改时间"></el-table-column>
				<el-table-column label="操作" width="220" text-align="center">
					<template #default="scope">
						<el-button text :icon="Edit" @click="handleEdit(scope.$index, scope.row)" v-permiss="98">
							编辑
						</el-button>
						<el-button text :icon="Delete" class="red" @click="handleDelete(scope.$index, scope.row)" v-permiss="99">
							删除
						</el-button>
					</template>
				</el-table-column>
			</el-table>
			<div class="pagination">
				<el-pagination
					background
					layout="total, prev, pager, next"
					@size-change="handleSizeChange"
					@current-change="handleCurrentChange" 
					:current-page="query.currentPage"
					:page-sizes="[10,20,40,100]" 
					:page-size="query.pagesize"
					:total="tableData.length"
				></el-pagination>
			</div>
		</div>
		<!--新增界面-->
		<el-dialog title="新增 (注意数据不能为空)" v-model="addVisible" width="500px">
                <el-form label-width="150px">
                    <el-form-item label="老门店ID">
                        <el-input v-model="addForm.old_store_id"></el-input>
                    </el-form-item>
                    <el-form-item label="新门店ID">
                        <el-input v-model="addForm.new_store_id"></el-input>
                    </el-form-item>
                    <el-form-item label="新连锁公司ID">
                        <el-input v-model="addForm.new_branch_id"></el-input>
                    </el-form-item>
                </el-form>
                <template #footer>
                    <span class="dialog-footer">
                        <el-button @click="addVisible = false">取 消</el-button>
                        <el-button type="primary" @click="saveAdd">确 定</el-button>
                    </span>
                </template>
            </el-dialog>

		<!-- 编辑页面 -->
		<el-dialog title="编辑(注意数据不能为空)" v-model="editVisible" width="500px">
			<el-form label-width="150px">
				<el-form-item label="老门店ID">
					<el-input v-model="editForm.old_store_id"></el-input>
				</el-form-item>
				<el-form-item label="新门店ID">
					<el-input v-model="editForm.new_store_id"></el-input>
				</el-form-item>
				<el-form-item label="新连锁公司ID">
					<el-input v-model="editForm.new_branch_id"></el-input>
				</el-form-item>
			</el-form>
			<template #footer>
				<span class="dialog-footer">
					<el-button @click="editVisible = false">取 消</el-button>
					<el-button type="primary"  @click="saveEdit">确 定</el-button>
				</span>
			</template>
		</el-dialog>

		<!-- Excel上传界面 -->
		<el-dialog title="Excel批量导入" v-model="uploadVisible" width="500px">
                <div style="margin-bottom: 10px">
                    <a :href="fronturl+`/excel/${excelname}.xlsx`">点击，下载Excel数据模板</a>
                </div>
                <el-upload
                    class="upload-demo" drag name="exc"
                    :action="backurl+`${excelrouter}`"
                    :before-upload="beforeUpload"
                    :on-success="handleFileSuccess"
                    >
                    <i class="el-icon-upload"></i>
                    <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
                    <div class="el-upload__tip">只能上传xlsx文件，且不超过1MB</div>
                </el-upload>
            </el-dialog>
	</div>
</template>

<script setup lang="ts" name="basetable">
import { ref, reactive } from 'vue';
import { ElMessage, ElMessageBox, ElLoading } from 'element-plus';
import { Delete, Edit, Search, Plus, Upload, Top } from '@element-plus/icons-vue';
import { getDropList } from '../../utils/getlist';
import { y3_list ,y3_add ,y3_delete ,y3_push ,fronturl ,backurl } from '../../api/api';

// ------------------统一配置区域----------------------
// 表格接口
interface TableItem {
	id: number;
	old_store_id: number;
	new_store_id: number;
	new_branch_id: string;
	create_time: string;
	modify_time: string;
}
const tableData = ref<TableItem[]>([]);
// 查询参数
const query = reactive({
	selectedOption: "",
    options: {},
	pagesize: 10,
	currentPage: 1,
});
const columnname: string = "new_store_id"
const excelname: string = "新老门店映射表"
const excelrouter: string = "/y3/upload/"
// 新增页面参数
const addVisible = ref(false);
const addForm = reactive({
	old_store_id: '',
	new_store_id: '',
	new_branch_id: ''
})
// 编辑页面参数
const editVisible = ref(false);
const editForm = reactive({
	id: -1,
	old_store_id: '',
	new_store_id: '',
	new_branch_id: ''
});
// ------------------页面函数区域----------------------
// 页面初始化
const handleSizeChange = (size) => {
	query.pagesize = size;
};
const handleCurrentChange = (currentPage) => {
	query.currentPage = currentPage;
};

// 查询数据
const handleSearch = () => {
	let params: {[propName: string]: string}|null
	if (query.selectedOption === "全部"||typeof query.selectedOption === "object"){
		params = null;
	}else{
		params = { [columnname]: query.selectedOption };
	};
    y3_list(params).then(res => {
        if(res.data.msg==='success') {
			tableData.value = res.data.data;
			//获取下拉列表字段
			query.options = getDropList(tableData, columnname);
			console.log(query.options)
			query.selectedOption = query.options[0];
		} else {
			ElMessage.error(res.data.message);
		}
    }) 
}
handleSearch();

// 新增数据
const handleAdd = () => {
	addVisible.value = true;
}
const saveAdd = () => {
	ElMessageBox.confirm('确认提交吗？', '提示', {
		type: 'warning'
	})
		.then(() => {
			let para = Object.assign({}, addForm);
			y3_add(para).then((res)=>{
				if(res.data.msg === 'success'){
					ElMessage.success('提交成功');
				} else {
					ElMessage.error(res.data.msg);
				}
				addVisible.value = false;
				handleSearch();
			})
		})
}

// 表格编辑时弹窗和保存
const handleEdit = (index, row) => {
	let para = Object.assign({}, row);
	editForm.id = row.id;
	editForm.old_store_id = row.old_store_id;
	editForm.new_store_id = row.new_store_id;
	editForm.new_branch_id = row.new_branch_id
	editVisible.value = true;
};
const saveEdit = () => {
	ElMessageBox.confirm('确认提交吗？', '提示', {
		type: 'warning'
	})
		.then(() => {
			let para = Object.assign({}, editForm);
			y3_add(para).then((res)=>{
				if(res.data.msg === 'success'){
					ElMessage.success('提交成功');
				} else {
					ElMessage.error(res.data.msg);
				}
				editVisible.value = false;
				handleSearch();
			})
		})
};

// 删除操作
const handleDelete = (index, row) => {
	// 二次确认删除
	ElMessageBox.confirm('确定要删除吗？', '提示', {
		type: 'warning'
	})
		.then(() => {
			let para = { id: parseInt(row.id) };
			y3_delete(para).then((res)=>{
				if(res.data.msg === 'success'){
					ElMessage.success('提交成功');
				} else {
					ElMessage.error(res.data.msg);
				}
				handleSearch()
			})
		})
};

// EXCEL上传
const uploadVisible = ref(false);
const handleUploadFile = () => {
	uploadVisible.value = true
}
const beforeUpload = (file) => {
	let extension = file.name.substring(file.name.lastIndexOf(".") + 1);
	let size = file.size / 1024 / 1024;
	if (extension !== "xlsx") {
		ElMessage.warning("只能上传后缀是.xlsx的文件");
	}
	if (size > 10) {
		ElMessage.warning("文件大小不得超过10M");
	}
}
const handleFileSuccess = (response) => {
	ElMessage.success(response.msg)
	uploadVisible.value = false
	handleSearch()
}

// 数据推送
const handlePush = () => {
	const loading = ElLoading.service({
		lock: true,
		text: 'Loading',
		background: 'rgba(0, 0, 0, 0.7)',
	})
	y3_push().then((res) => {
		if(res.data.msg === 'success'){
			ElMessage.success('提交成功');
			loading.close()
		} else {
			ElMessage.error(res.data.msg);
			loading.close()
		}
	})
};

</script>

<style scoped>
.handle-box {
	margin-bottom: 20px;
}

.handle-select {
	width: 200px;
}

.handle-input {
	width: 300px;
}
.table {
	width: 100%;
	font-size: 14px;
}
.red {
	color: #F56C6C;
}
.mr10 {
	margin-right: 10px;
}
.table-td-thumb {
	display: block;
	margin: auto;
	width: 40px;
	height: 40px;
}
</style>
