<template>
  <div>
    <b-breadcrumb
			:items="[
				{ text: '管理', active: true },
				{ text: '数据概览', href: '#/desktop/admin/overview' },
				{ text: '项目组漏洞排名', active: true },
			]"
		/>

    <chart-canvas
      style="height:800px"
      :options="{
        credits: { enabled: false },
        chart: { type: 'bar' },
        title: { text: null },
        xAxis: {
          categories: ['开发8部', '开发7部', '开发6部', '开发4部', '开发3部', '开发2部', '开发1部', '开发5部'],
          title: {
            text: '项目组'
          }
        },
        yAxis: {
          min: 0,
          title: {
            text: '记录数',
          }
        },
        plotOptions: {
          bar: {
            dataLabels: {
              enabled: true,
            }
          }
        },
        legend: false,
        series: [{
          colorByPoint: true,
          data: [
            { y: 16 },
            { y: 15 },
            { y: 14 },
            { y: 13 },
            { y: 11 },
            { y: 10 },
            { y: 10 },
            { y: 10 }
          ]
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
