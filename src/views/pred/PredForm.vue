<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item>
                    <i class="el-icon-lx-calendar"></i> 表单
                </el-breadcrumb-item>
                <el-breadcrumb-item>时序预测参数设定</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="container">
            <div class="tip">
                <p>1、BI底表数据和日期特征表连接后推送到平台。</p>
                <p>2、前端选择数据预测的范围：品类的范围，组织维度的范围，输出的日期维度，预测多长时间，预测营业额还是销量。</p>
                <p>3、按照最小品类和组织维度单次预测，先不实行批量预测</p>
            </div>
            <div class="form-box">
                <el-form ref="formRef" :model="form" label-width="120px">
                    <el-form-item label="数据集名称" prop="tablename">
                        <el-select v-model="form.name" placeholder="时序表" style="width:480px">
                            <el-option v-for="item in options_name" :key="item.value" :label="item.label" :value="item.value"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="度量类型" prop="predpara">
                        <el-select v-model="form.business_class" placeholder="请选择" style="width:480px">
                            <el-option v-for="item in options_business_class" :key="item.value" :label="item.label" :value="item.value"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="品类维度" prop="para">
                        <el-select v-model="form.class_dim" @change="handleSelectClass" placeholder="请选择" style="width:240px">
                            <el-option v-for="item in option_class_dim" :key="item.value" :label="item.label" :value="item.value"></el-option>
                        </el-select>
                        <span style="margin-left:20px;margin-right:10px;">品类维度值</span>
                        <el-select v-model="form.class_value" placeholder="请选择" style="width:240px">
                            <el-option v-for="item in query.option_class_value" :key="item" :label="item" :value="item"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="组织维度" prop="predpara">
                        <el-select v-model="form.region_dim" @change="handleSelectRegion" placeholder="请选择" style="width:240px">
                            <el-option v-for="item in option_region_dim" :key="item.value" :label="item.label" :value="item.value"></el-option>
                        </el-select>
                        <span style="margin-left:20px;margin-right:10px;">组织维度值</span>
                        <el-select v-model="form.region_value" placeholder="请选择" style="width:240px">
                            <el-option v-for="item in query.option_region_value" :key="item" :label="item" :value="item"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="输出时间尺度" prop="region">
                        <el-select v-model="form.time_scale" placeholder="请选择" style="width:240px">
                            <el-option v-for="item in options_time_scale" :key="item.value" :label="item.label" :value="item.value"></el-option>
                        </el-select>
                        <span style="margin-left:20px;margin-right:10px;">预测开始时间</span>
                        <el-date-picker type="date" placeholder="选择日期" v-model="form.start_sdate" value-format="YYYY-MM-DD" style="width:240px"></el-date-picker>
                        <span style="margin-left:20px;margin-right:10px;">预测区间</span>
                        <el-input v-model="form.daterange" placeholder="请输入内容" style="width:240px"></el-input>
                    </el-form-item>
                    <el-form-item>
                    <el-button type="primary" @click="onSubmit(formRef)">表单提交</el-button>
                    <el-button @click="onReset(formRef)">重置表单</el-button>
                </el-form-item>
                </el-form>
            </div>
            <div class="form-table">
                <el-table :data="tableData.slice((query.currentPage-1)*query.pagesize,query.currentPage*query.pagesize)" 
                    highlight-current-row
                    class="table" 
                    ref="multipleTable"
                    header-cell-class-name="table-header" 
                    :header-cell-style="{color: '#e09037',background: '#ebf2f7'}"
                >
                    <el-table-column prop="id" label="ID" width="55" text-align="center"></el-table-column>
                    <el-table-column prop="business_class" label="度量类型"></el-table-column>
                    <el-table-column prop="class_dim" label="品类维度"></el-table-column>
                    <el-table-column prop="class_value" label="品类维度值"></el-table-column>
                    <el-table-column prop="region_dim" label="组织维度"></el-table-column>
                    <el-table-column prop="region_value" label="组织维度值"></el-table-column>
                    <el-table-column prop="time_scale" label="输出时间尺度"></el-table-column>
                    <el-table-column prop="start_sdate" label="预测开始时间"></el-table-column>
                    <el-table-column prop="daterange" label="预测区间"></el-table-column>
                    <el-table-column prop="remark" label="任务状态"></el-table-column>
                    <el-table-column prop="create_time" label="创建时间"></el-table-column>
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
        </div>
    </div>
</template>

<script setup lang="ts" name="predform">
import { reactive, ref } from "vue";
import { ElMessage, ElLoading } from "element-plus";
import type { FormInstance } from 'element-plus';
import { getDropList } from '../../utils/getlist';
import { mission_class, mission_region, mission_add, mission_list } from '../../api/api';

// ------------------统一配置区域----------------------
// 页面初始化
const handleSizeChange = (size) => {
	query.pagesize = size;
};
const handleCurrentChange = (currentPage) => {
	query.currentPage = currentPage;
};
// 表格接口
interface TableItem {
	id: number;
	business_class: string;
	class_dim: string;
	class_value: string;
	region_dim: string;
	region_value: string;
	time_scale: string;
	start_sdate: Date;
	daterange: number;
	remark: string;
	create_time: Date;
}
const tableData = ref<TableItem[]>([]);
// 查询参数
const query = reactive({
	pagesize: 10,
	currentPage: 1,
    option_class_value:{},
    option_region_value:{}
});
// 下拉框选项
const options_name = [
    // { value: "table0201", label: "0201门店维度日报表数据集" },
    { value: "table0202", label: "0202门店+skc维度商品日报表数据集" },
]
const options_business_class = [
    { value: "business_qty", label: "营业销售量" },
    { value: "business_amount", label: "营业额" },
]
const options_time_scale = [
    { value: "days", label: "按天" },
    { value: "months", label: "按月" },
]
const option_class_dim = [
    { value: "zzdalei_desc", label: "大类名称（SAP）" },
    { value: "zzzhonglei_desc", label: "中类名称（SAP）" },
    { value: "xiaolei_desc", label: "小类名称（SAP）" },
]

const option_region_dim = [
    { value: "branch_id", label: "连锁公司ID" },
    { value: "org_org_department_id", label: "营业部ID" },
    { value: "org_operational_region_id", label: "营业大区ID" },
]

const formRef = ref<FormInstance>();
const form = reactive({
    name:"",
    business_class: "",
    class_dim: "",
    class_value:"",
    region_dim: "",
    region_value:"",
    time_scale:"",
    start_sdate: "",
    daterange:3,
});
//-----------初始化----------//
const formInit = () => {
    form.name = options_name[0].value
};
formInit();

// 下拉框函数
const handleSelectClass = () => {
    // query.option_class_value = ['衬衫']
    const loading = ElLoading.service({
		lock: true,
		text: 'Loading',
		background: 'rgba(0, 0, 0, 0.7)',
	})
    let params: {[propName: string]: string}
    params = { class_dim: form.class_dim }
    console.log(params)
    mission_class(params).then(res => {
        if(res.data.msg==='success') {
			tableData.value = res.data.data;
			//获取下拉列表字段
			query.option_class_value = getDropList(tableData, 'class_value');
            loading.close()
		} else {
			ElMessage.error(res.data.message);
            loading.close()
		}
    }) 
}
const handleSelectRegion = () => {
    // query.option_region_value = ['DC11']
    const loading = ElLoading.service({
		lock: true,
		text: 'Loading',
		background: 'rgba(0, 0, 0, 0.7)',
	})
    let params: {[propName: string]: string}
    params = { region_dim: form.region_dim }
    console.log(params)
    mission_region(params).then(res => {
        if(res.data.msg==='success') {
			tableData.value = res.data.data;
			//获取下拉列表字段
			query.option_region_value = getDropList(tableData, 'region_value');
            loading.close()
		} else {
			ElMessage.error(res.data.message);
            loading.close()
		}
    }) 
}

// 提交
const onSubmit = (formEl: FormInstance | undefined ) => {
    // 表单校验
    if (!formEl) return
    formEl.validate((valid) => {
        if (valid) {
            for(let key in form) {
                if (form[key] == "") {
                    ElMessage.warning(key+'值不能为空！')
                    return false
                }
            }
            let para = Object.assign({}, form)
            console.log(form)
            mission_add(para).then((res)=>{
				if(res.data.msg === 'success'){
					ElMessage.success('提交成功');
                    handleSearch();
				} else {
					ElMessage.error(res.data.msg);
				}
			})
        } else {
            return false
        }
    });
};
// 查询数据
const handleSearch = () => {
    mission_list().then(res => {
        if(res.data.msg==='success') {
			tableData.value = res.data.data;
            console.log(tableData.value)
		} else {
			ElMessage.error(res.data.message);
		}
    }) 
}
handleSearch();
// 重置
const onReset = (formEl: FormInstance | undefined) => {
    if (!formEl) return;
    formEl.resetFields();
};
</script>

<style>
.container .tip {
    padding: 8px 16px;
    background-color: #ecf8ff;
    border-radius: 4px;
    border-left: 5px solid #50bfff;
    margin: 20px 0;
}

.form-table {
    margin-top: 50px;
}
</style>