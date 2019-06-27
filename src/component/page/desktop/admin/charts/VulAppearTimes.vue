<template>
  <div>
    <b-breadcrumb
			:items="[
				{ text: '管理', active: true },
				{ text: '数据概览', href: '#/desktop/admin/overview' },
				{ text: '漏洞出现频率', active: true },
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
            text: '漏洞名称'
          },
          categories: [
            'SQL注入漏洞', 
            '反射型跨站漏洞', 
            '暴力攻击', 
            '不安全的HTTP方法', 
            '登录信息明文传输', 
            '接口越权访问漏洞', 
            '系统后台弱口令', 
            '脆弱的SSL加密算法', 
            '第三方框架版本过低', 
            '脚本上传漏洞'   
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
        series: [
        {
          name: '40',
          data: [2, 1, 1, 0, 1, 0, 0, 2, 0, 0]
        }, 
        {
          name: '39',
          data: [1, 1, 0, 0, 2, 1, 0, 0, 1, 0]
        }, 
        {
          name: '38',
          data: [1, 0, 1, 0, 1, 2, 1, 0, 0, 0]
        }, 
        {
          name: '37',
          data: [1, 0, 0, 1, 0, 0, 0, 0, 1, 0]
        }, 
        {
          name: '36',
          data: [1, 0, 0, 1, 0, 0, 1, 0, 0, 1]
        }, 
        {
          name: '35',
          data: [1, 1, 2, 2, 0, 0, 1, 1, 0, 1]
        }, 
        {
          name: '34',
          data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        }, 
        {
          name: '33',
          data: [0, 1, 0, 0, 0, 0, 0, 0, 0, 0]
        }, 
        {
          name: '32',
          data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        }, 
        {
          name: '31',
          data: [0, 1, 0, 0, 0, 0, 0, 0, 0, 0]
        }, 
        {
          name: '30',
          data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        }
        ]
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
