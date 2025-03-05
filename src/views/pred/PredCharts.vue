<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item>
                    <i class="el-icon-pie-chart"></i> 时序预测结果展示
                </el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="container">
            <div class="plugins-tips">
                预测结果分析看板展示
                <div class="handle-box">
                <el-select v-model="query.option_pid_value" class="handle-select mr10">
                        <el-option v-for="item in query.options" :key="item" :label="item" :value="item">
                        </el-option>
                    </el-select>
                    <el-button type="primary" :icon="Search" @click="handleSearch">按算法实例ID查询</el-button>
                </div>
            </div>
            <el-row :gutter="20">
                <el-col :span="4">
                    <div class="target-card">
                        <div class="card-title">实际值</div>
                        <div class="card-value">123123</div>
                    </div>
                </el-col>
                <el-col :span="4">
                    <div class="target-card">
                        <div class="card-title">预测值</div>
                        <div class="card-value">123123</div>
                    </div>
                </el-col>
                <el-col :span="4">
                    <div class="target-card">
                        <div class="card-title">预测下限值</div>
                        <div class="card-value">123123</div>
                    </div>
                </el-col>
                <el-col :span="4">
                    <div class="target-card">
                        <div class="card-title">预测上限值</div>
                        <div class="card-value">123123</div>
                    </div>
                </el-col>
                <el-col :span="4">
                    <div class="target-card">
                        <div class="card-title">TTL_FA</div>
                        <div class="card-value">50.00%</div>
                    </div>
                </el-col>
                <el-col :span="4">
                    <div class="target-card">
                        <div class="card-title">MAPE</div>
                        <div class="card-value">50.00%</div>
                    </div>
                </el-col>
            </el-row>
            <div class="schart-box">
                <div class="content-title">促销类型</div>
                <schart class="schart" canvasId="pie" :options="options3"></schart>
            </div>
            <div class="schart-box">
                <div class="content-title">促销机制</div>
                <schart class="schart" canvasId="bar" :options="options1"></schart>
            </div>
            <div class="schart-box-l">
                <div class="content-title">历史销售与预测结果</div>
                <schart class="schart" canvasId="line" :options="options2"></schart>
            </div>
            <div class="schart-box-l">
                <div class="content-title">同期销售对比</div>
                <schart class="schart" canvasId="line2" :options="options2"></schart>
            </div>
            <div class="schart-box-l">
                <div class="content-title">节假日走势</div>
                <!-- <iframe style="width: 1200px; height: 600px;" src="http://172.31.101.118/page/c90be74633001493e9e9ae7a?ps=iframe"></iframe> -->
            </div>
            <div class="schart-box-l">
                <div class="content-title">促销活动走势</div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts" name="predcharts">
import Schart from "vue-schart";
import { ref, reactive } from 'vue';
import { ElMessage, ElMessageBox, ElLoading } from 'element-plus';
import { Delete, Edit, Search, Plus, Upload, Top } from '@element-plus/icons-vue';
import { getDropList } from '../../utils/getlist';
import { mission_list } from '../../api/api';

// ------------------统一配置区域----------------------
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
    option_pid_value: "",
    options: {}
})
// 查询数据
const handleSearch = () => {
    mission_list().then(res => {
        if(res.data.msg==='success') {
			tableData.value = res.data.data;
			//获取下拉列表字段
			query.options = getDropList(tableData, 'id');
            query.option_pid_value = query.options[0]
		} else {
			ElMessage.error(res.data.message);
		}
    }) 
}
handleSearch();
// echarts数据初始化



// echarts图初始化
const options1 = {
    type: "bar",
    title: {
        text: "最近一周各品类销售图",
    },
    bgColor: "#fbfbfb",
    labels: ["周一", "周二", "周三", "周四", "周五"],
    datasets: [
        {
            label: "家电",
            fillColor: "rgba(241, 49, 74, 0.5)",
            data: [234, 278, 270, 190, 230],
        },
        {
            label: "百货",
            data: [164, 178, 190, 135, 160],
        },
        {
            label: "食品",
            data: [144, 198, 150, 235, 120],
        },
    ],
};
const options2 = {
    type: "line",
    title: {
        text: "最近几个月各品类销售趋势图",
    },
    bgColor: "#fbfbfb",
    labels: ["6月", "7月", "8月", "9月", "10月"],
    datasets: [
        {
            label: "家电",
            data: [234, 278, 270, 190, 230],
        },
        {
            label: "百货",
            data: [164, 178, 150, 135, 160],
        },
        {
            label: "食品",
            data: [114, 138, 200, 235, 190],
        },
    ],
};
const options3 = {
    type: "pie",
    title: {
        text: "服装品类销售饼状图",
    },
    legend: {
        position: "left",
    },
    bgColor: "#fbfbfb",
    labels: [
        "T恤",
        "牛仔裤",
        "连衣裙",
        "毛衣",
        "七分裤",
        "短裙",
        "羽绒服",
    ],
    datasets: [
        {
            data: [334, 278, 190, 235, 260, 200, 141],
        },
    ],
};
</script>

<style scoped>
.handle-box {
	margin-top: 10px;
    display:flex;
    height: 30px;
}
.handle-select {
	width: 200px;
}
.mr10 {
	margin-right: 20px;
}
.el-row{
    margin-bottom: 20px;
    display: flex;
}
.target-card{
    background: rgb(241 246 251);
    text-align: center;
    width: 150px;
    height: 80px;
    border-radius:25px;
    padding: 20px;
    margin: auto;
}
.card-title{
    color: rgb(0, 51, 78);
    font-size: 20px;
    font-weight: bold;
    margin: 10px;
}
.card-value{
    color: rgb(85, 121, 238);
    font-size: 35px;
    font-family: sans-serif;
    margin: 10px;
}
.schart {
    width: 100%;
    height: 400px;
}
.schart-box {
    display: inline-block;
    margin: 20px;
    width: 45%;
}
.schart-box-l {
    display: inline-block;
    margin: 20px;
    width: 100%;
}
.content-title {
    font-size: 16px;
    font-weight: bold;
    line-height: 30px;
    
}
.content-title {
    clear: both;
    font-weight: 400;
    line-height: 50px;
    margin: 10px 0;
    font-size: 22px;
    color: #1f2f3d;
}
.plugins-tips {
    font-weight: bold;
    color: rgb(82, 139, 238);
    font-size: 30px;
}
</style>