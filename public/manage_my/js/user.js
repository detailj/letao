$(function () {

    // 抽取为变量
    var myPageNum = 1;
    var myPageSize = 5;
    //需求1
    //页面打开代码 获取用户数据

    function getData() {
        $.ajax({
            url: "/user/queryUser",
            data: {
                page: myPageNum,
                pageSize: myPageSize
            },
            success: function (backData) {
                // 数据获取之后 渲染到页面上
                console.log(backData);
                // 填坑 使用
                $('tbody').html(template('user', backData));
                //  需求2  分页插件使用
                $("#pagintor").bootstrapPaginator({
                    bootstrapMajorVersion: 3, //默认是2，如果是bootstrap3版本，这个参数必填
                    currentPage: myPageNum, //当前页 
                    totalPages: Math.ceil(backData.total / backData.size), //总页数
                    size: "small", //设置控件的大小，mini, small, normal,large
                    onPageClicked: function (event, originalEvent, type, page) {
                        //为按钮绑定点击事件 page:当前点击的按钮值
                        console.log(page);
                        // 设置给变量
                        myPageNum = page;
                        // 重新获取变量
                        getData();
                    }
                });
            }
        })
    }
    getData();








})