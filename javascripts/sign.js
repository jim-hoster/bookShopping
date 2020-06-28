$(
    function () {

        //初始化插件
        $('#login-form').validate({

            //验证规则
            rules: {
                userName: {
                    required: true,
                    isUserName: true, //自定义校验的调用方式
                    minlength: 4

                },
                pwd: {
                    required: true,
                    isPwd: true,
                    minlength: 6
                },
                checkpwd: {
                    equalTo: "#pwd"
                },
                phone: {
                    required: true,
                    isPhone: true,
                    minlength: 11
                }

            },
            //错误提示信息
            messages: {
                userName: {
                    required: '请输入账号'
                },
                pwd: {
                    required: '请输入密码'
                },
                checkpwd: {
                    equalTo: "两次密码不一致"
                },
                phone: {
                    required: '请输入手机号'
                },

            }
        });

        // 用户名正则验证
        $.validator.addMethod("isUserName", function (value, element) {
            let user_reg = /^[a-zA-Z0-9_-]{4,16}$/;
            return this.optional(element) || (user_reg.test(value));
        }, "请输入4到16位（字母，数字，下划线，减号）");


        //密码正则验证
        $.validator.addMethod("isPwd", function (value, element) {
            let pwd_reg = /^.*(?=.{6,})(?=.*\d)(?=.*[A-Z])(?=.*[a-z]).*$/; //最少6位，包括至少1个大写字母，1个小写字母，1个数字
            return this.optional(element) || (pwd_reg.test(value));
        }, "请输入6-12位正确密码");

        //手机号正则验证
        $.validator.addMethod("isPhone", function (value, element) {
            let phone_reg = /^[1]([3-9])[0-9]{9}$/;
            return this.optional(element) || (phone_reg.test(value));
        }, "请输入11位正确的手机号码");

        // 图片验证码

        let verifyCode = new GVerify("v_container");
        console.log(verifyCode),
            $('#formVerify').blur(
                function () {
                    let res = verifyCode.validate($(this).val());
                    if(res){
                        $('.vfy-message').text('验证通过')
                    }else{ $('.vfy-message').text('验证失败')

                    }
                }
            );



    })