<template>
  <div>
    <b-breadcrumb
			:items="[
				{ text: '管理', active: true },
				{ text: '数据概览', href: '#/desktop/admin/overview' },
				{ text: '漏洞修复时长', active: true },
			]"
		/>

    <chart-canvas
      style="height:800px"
      :options="{
        series: [{
          type: 'treemap',
          layoutAlgorithm: 'stripes',
          alternateStartingDirection: true,
          levels: [{
            level: 1,
            layoutAlgorithm: 'sliceAndDice',
            dataLabels: {
              enabled: true,
              align: 'left',
              verticalAlign: 'top',
              style: {
                fontSize: '15px',
                fontWeight: 'bold'
              }
            }
          }],
          data: [{
            id: 'A',
            name: '1工作日',
            color: '#dc3545'
          }, {
            id: 'B',
            name: '2工作日',
            color: '#ffc107'
          }, {
            id: 'C',
            name: '3工作日',
            color: '#17a2b8'
          }, {
          }, {
            id: 'D',
            name: '4工作日',
            color: '#DDDF00'
          }, {
          }, {
            id: 'E',
            name: '5工作日',
            color: '#24CBE5'
          }, {
          }, {
            id: 'F',
            name: '6工作日',
            color: '#64E572'
          }, {
          }, {
            id: 'G',
            name: '7工作日',
            color: '#FF9655'
          }, {
          }, {
            id: 'H',
            name: '8工作日',
            color: '#6AF9C4'
          }, {
            name: '信用卡中心',
            parent: 'A',
            value: 7
          }, {
            name: '天津分行',
            parent: 'A',
            value: 3
          }, {
            name: '上海分行',
            parent: 'A',
            value: 4
          }, {
            name: '信用卡中心',
            parent: 'B',
            value: 2
          }, {
            name: '天津分行',
            parent: 'B',
            value: 5
          }, {
            name: '上海分行',
            parent: 'B',
            value: 1
          }, {
            name: '信用卡中心',
            parent: 'C',
            value: 3
          }, {
            name: '天津分行',
            parent: 'C',
            value: 3
          }, {
            name: '上海分行',
            parent: 'C',
            value: 2
          }, {
            name: '信用卡中心',
            parent: 'D',
            value: 5
          },{
            name: '天津分行',
            parent: 'D',
            value: 1
          },{
            name: '上海分行',
            parent: 'D',
            value: 6
          },{
            name: '南宁分行',
            parent: 'D',
            value: 3
          },{
            name: '信用卡中心',
            parent: 'E',
            value: 7
          },{
            name: '天津分行',
            parent: 'E',
            value: 2
          },{
            name: '信用卡中心',
            parent: 'F',
            value: 4
          },{
            name: '天津分行',
            parent: 'F',
            value: 3
          },{
            name: '上海分行',
            parent: 'F',
            value: 6
          },{
            name: '信用卡中心',
            parent: 'G',
            value: 1
          },{
            name: '天津分行',
            parent: 'G',
            value: 7
          },{
            name: '上海分行',
            parent: 'G',
            value: 2
          },{
            name: '南昌分行',
            parent: 'G',
            value: 4
          },{
            name: '信用卡中心',
            parent: 'H',
            value: 4
          },{
            name: '天津分行',
            parent: 'H',
            value: 3
          },{
            name: '上海分行',
            parent: 'H',
            value: 4
          }]
        }],
        title: {
          text: null
        }
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
