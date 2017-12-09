$(function () {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('main_left'));

    // 指定图表的配置项和数据
    var option = {
        title: {
            text: '2017注冊人數'
        },
        tooltip: {},
        legend: {
            data: ['人數']
        },
        xAxis: {
            data: ["1月", "2月", "3月", "4月", "5月", "6月"]
        },
        yAxis: {},
        series: [{
            name: '人數',
            type: 'bar',
            data: [500, 2000, 3000, 4000, 5000, 6000]
        }]
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);


    var myChart2 = echarts.init(document.getElementById('main_right'));

    

    option2 = {
        title: {
            text: '热门品牌销售',
            subtext: '纯属虚构',
            x: 'center'
        },
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
            orient: 'vertical',
            left: 'left',
            data: ['耐克', '阿迪', '百伦', '安踏', '李宁']
        },
        series: [{
            name: '访问来源',
            type: 'pie',
            radius: '55%',
            center: ['50%', '60%'],
            data: [{
                    value: 335,
                    name: '耐克'
                },
                {
                    value: 310,
                    name: '阿迪'
                },
                {
                    value: 234,
                    name: '百伦'
                },
                {
                    value: 135,
                    name: '安踏'
                },
                {
                    value: 1548,
                    name: '李宁'
                }
            ],
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }]
    };

    myChart2.setOption(option2);


})