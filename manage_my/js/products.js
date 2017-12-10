$(function () {
    // 0.定义变量
    var myPageNum = 1;
    var myPageSize = 5;

    // 1页面打开 获取数据
    function getData() {
        $.ajax({
            url: "/product/queryProductDetailList",
            data: {
                page: myPageNum,
                pageSize: myPageSize,
            },
            success: function (backData) {
                // console.log(bacKData);
                // 渲染数据
                $('tbody').html(template('products', backData));
                // 初始化 分页控件
                $(".pagination").bootstrapPaginator({
                    bootstrapMajorVersion: 3, //默认是2，如果是bootstrap3版本，这个参数必填
                    currentPage: myPageNum, //当前页
                    totalPages: Math.ceil(backData.total / backData.size), //总页数
                    size: "small", //设置控件的大小，mini, small, normal,large
                    onPageClicked: function (event, originalEvent, type, page) {
                        // 为按钮绑定点击事件 page:当前点击的按钮值
                        myPageNum = page;
                        // 重新获取数据
                        getData();
                    }
                });
            }
        })
    }
    // 默认调用一次 getData()
    getData();

    // 2.文件上传
    $("#fileUpload").fileupload({
        dataType: "json",
        //e：事件对象
        //data：图片上传后的对象，通过e.result.picAddr可以获取上传后的图片地址
        done: function (e, data) {
            // console.log(data);
            $('<img style="width:100px;height:100px;" src="'+data.result.picAddr+'"></img>').appendTo('form .form-group:last');
        }
    });

    // 3.超出 禁止选择图片
    $('#fileUpload').click(function(event){
        // 图片==3
        if($('form .form-group:last img').length==3){
            // 阻止file的 默认行为
            event.preventDefault();
        }
        console.log('你点我啦');
    })

    // 4.双击 form 最下面的图片 删除自己
    $('form .form-group:last').on('dblclick','img',function(){
        console.log('你双击我啦');
        // 干掉自己
        $(this).remove();
    })
})