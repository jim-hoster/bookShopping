$(
    function () {
        //鼠标移入显示扫一扫
        $('.ld-scan>div').hover(
            function () {
                $(this).animate({
                    'width': 252
                }, 400)
            },
            function () {
                $(this).animate({
                    'width': 253
                }, 400)

            }
        )
        // 扫一扫结束

        //扫码登录与账户登录选项卡
        $('.login-title>li').mouseenter(
            function () {
                // 自身
                let index = $(this).index();
                $(this).addClass('active').siblings('li').removeClass('active');

                $('.login-detail>li').eq(index).css('display', 'block');
                $('.login-detail>li').eq(index).siblings().
                css('display', 'none');
            }); //扫一扫结束

        // 用户名正则验证
        $('.user-name').blur(
            function () {
                let user_reg = /^[a-zA-Z0-9_-]{4,16}$/;
                if (!(user_reg.test($(this).val()))) {
                    $('.user-message').css('display', 'block')
                }
            }
        );

        // 密码正则验证

        $('.pwd').blur(
            function () {
                let pwd_reg = /^.*(?=.{6,})(?=.*\d)(?=.*[A-Z])(?=.*[a-z]).*$/;
                if (!(pwd_reg.test($(this).val()))) {
                    $('.pwd-message').css('display', 'block')
                }
            }
        );

        let flag = false;
        $('.small-box').click(
            function () {
                if (!flag) {
                    $('.small-box::after').css('display', 'block')
                } else {
                    $('.small-box::after').css('display', 'none')
                }
                flag = !flag
            }
        )







    }
)