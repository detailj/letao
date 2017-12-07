$(function(){
    // 1.测试代码
    // $('button[type=submit]').click(function(event){
    //     event.preventDefault();
    //     $.ajax({
    //         url:"/employee/employeeLogin",
    //         data:$("form").serialize(),
    //         type:'post',
    //         success:function(backData){
    //             console.log(backData);
    //         }
    //     })
    // })

     // 2.初始化 表单验证插件
    /*
        .on('success.form.bv')
        这个事件是插件提供的自定义事件
            当我们点击submit按钮
                验证数据
                    失败 提示用户 失败
                验证成功
    */

    //使用表单校验插件
    $('form').bootstrapValidator({
        //1. 指定不校验的类型，默认为[':disabled', ':hidden', ':not(:visible)'],可以不设置
        // excluded: [':disabled', ':hidden', ':not(:visible)'],

        //2. 指定校验时的图标显示，默认是bootstrap风格
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },

        //3. 指定校验字段
        fields: {
            //校验用户名，对应name表单的name属性
            username: {
                validators: {
                    //不能为空
                    notEmpty: {
                        message: '用户名不能为空'
                    },
                    //长度校验
                    stringLength: {
                        min: 3,
                        max: 12,
                        message: '用户名长度必须在6到30之间'
                    },
                    callback: {
                        message: '用户名不存在'
                    },
                    //正则校验
                    regexp: {
                        regexp: /^[a-zA-Z0-9_\.]+$/,
                        message: '用户名由数字字母下划线和.组成'
                    }
                }
            },
            password: {
                validators: {
                    //不能为空
                    notEmpty: {
                        message: '密码不能为空'
                    },
                    //长度校验
                    stringLength: {
                        min: 6,
                        max: 16,
                        message: '密码长度必须在6到30之间'
                    },
                    callback: {
                        message: '密码错误'
                    },
                    //正则校验
                    regexp: {
                        regexp: /^[a-zA-Z0-9_\.]+$/,
                        message: '密码由数字字母下划线和.组成'
                    }
                }
            }
        }

    }).on('success.form.bv', function (e) {
        e.preventDefault();
        //使用ajax提交逻辑
        console.log('你点我啦');
        // 增加进度条开启代码
        //开启进度条
        NProgress.start();
        $.ajax({
            url: "/employee/employeeLogin",
            data: $('form').serialize(),
            type: 'post',
            success: function (backData) {
                console.log(backData);
                // 正确
                if (backData.success == true) {
                    window.location.href = './index.html';
                }
                else {
                    // 获取验证插件对象
                    var validator = $("form").data('bootstrapValidator');//获取表单验证实例
                    // 失败
                    if (backData.error == 1000) {
                        // console.log('用户名不存在');
                        // 使用表单校验实例可以调用一些常用的方法。
                        validator.updateStatus('username', 'INVALID', 'callback');
                    }
                    else if (backData.error == 1001) {
                        // console.log('密码错误');
                        //使用表单校验实例可以调用一些常用的方法。
                        validator.updateStatus('password', 'INVALID', 'callback');
                    }
                }
                setTimeout(function () {
                    // 收起进度条
                    NProgress.done();
                },1000)
            }
        })
    });
    // 3.为重置表单绑定点击事件
    $('button[type=reset]').click(function () {
        // 获取验证插件对象
        var validator = $("form").data('bootstrapValidator');
        // 获取表单验证实例
        validator.resetForm();
    })
// 4.测试进度条
// 关闭进度条
setTimeout(function () {

    
},2000)
})


