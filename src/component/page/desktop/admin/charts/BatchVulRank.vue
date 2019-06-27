<template>
  <div>
    <b-breadcrumb
			:items="[
				{ text: '管理', active: true },
				{ text: '数据概览', href: '#/desktop/admin/overview' },
				{ text: '批次漏洞排名', active: true },
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
            text: '批次'
          },
          categories: ['34', '32', '33', '31', '30', '21', '22', '25', '23', '24']
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
          name: '总行内网',
          data: [5, 6, 4, 5, 2, 0, 3, 0, 0, 1]
        }, {
          name: '信用卡中心',
          data: [5, 5, 4, 7, 2, 5, 3, 4, 4, 1]
        }, {
          name: '天津分行',
          data: [7, 4, 3, 2, 3, 3, 2, 2, 2, 1]
        }, {
          name: '上海分行',
          data: [4, 3, 3, 2, 3, 4, 3, 2, 1, 1]
        }, {
          name: '南宁分行',
          data: [6, 4, 4, 2, 5, 2, 3, 4, 2, 1]
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
