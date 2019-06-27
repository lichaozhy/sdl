<template>
  <div>
    <b-breadcrumb
			:items="[
				{ text: '管理', active: true },
				{ text: '数据概览', href: '#/desktop/admin/overview' },
				{ text: '项目漏洞排名', active: true },
			]"
		/>

    <chart-canvas
      style="height:800px"
      :options="{
        chart: {
          type: 'bar'
        },
        title: {
          text: null
        },
        xAxis: {
          title: {
            text: '项目(系统)名称'
          },
          categories: [
            '手机银行信用卡专版', 
            '金融租赁', 
            '资金交易管理系统', 
            '大连分行微信银行', 
            '合肥分行短信平台', 
            '南昌分行微信公众号', 
            '信用卡中心', 
            '金融租赁邮箱管理系统', 
            '天津公积金贷前回收', 
            '人事服务平台' 
          ]
        },
        yAxis: {
          min: 0,
          title: {
            text: '记录数'
          }
        },
        legend: {
          reversed: true 
        },
        plotOptions: {
          series: {
            stacking: 'normal'
          }
        },
        series: [{
          name: '低危漏洞',
          data: [5, 3, 4, 3, 2, 3, 2, 1, 1, 1]
        }, {
          name: '中危漏洞',
          data: [3, 5, 4, 3, 3, 2, 4, 3, 2, 1]
        }, {
          name: '高危漏洞',
          data: [7, 5, 4, 3, 2, 4, 2, 2, 1, 1]
        }, {
          name: '建议修复',
          data: [4, 3, 3, 4, 4, 2, 1, 3, 2, 1]
        }]
      }"
    />
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
