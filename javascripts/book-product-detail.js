$(
    function () {
        //书籍销售页轮播图
        $(".sa-slide").slidebox({
            boxh: 58, //盒子的高度
            w: 331, //图片的宽度
            h: 56, //图片的高度
            isShow: true, //是否显示控制器
            isShowBtn: true, //是否显示左右按钮
            controltop: 10, //控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
            controlsW: 10, //控制按钮宽度
            controlsH: 10, //控制按钮高度
            radius: 10 //控制按钮圆角度数
        });

        // 商品评论区选项卡
        $('.ct-detail').mouseenter(
            function () {
                let index = $(this).index()
                // 上标
                $(this).addClass('ct-active').siblings('li').removeClass('ct-active');
                // 下标
                $('.cc-detail').eq(index).css('display', 'block');
                $('.cc-detail').eq(index).siblings('li').css('display', 'none');

            }
        );

        // 平装版精装版点击效果
        $('.edition').click(
            function () {
                // 当前选择加减类名
                $(this).addClass('e-border').siblings().removeClass('e-border');

                // 当前下的另一个类名加减类名

                $(this).find('.edition-select').addClass('es-active');

                $(this).siblings().
                find('.edition-select').removeClass('es-active');
            }
        );
        // 书本数量选择
        // 增加按钮

        $('.btn1').click(
            function () {
                let value = parseInt($('.sc-text').val());
                if( value<100){
                    $('.sc-text').val(99)
                }
                $('.sc-text').val(++value)
            }
        );
        // 减少按钮

        $('.btn2').click(
            function () {
                let value = parseInt($('.sc-text').val());
                if (value <1) {
                    $('.sc-text').val(1)
                 
                } 
                }
            }
        );
        // 限制商品输入的数量

        $('.sc-text').keyup(
            function () {
                let val = $(this).val();
                if (val > 99) {
                    $(this).val(99)
                }else if(val<=1){
                    $(this).val(1),
                    $('.btn2').css('disabled','disabled')

                }

            }
        );

        // 放大镜效果

        let magnifierConfig = {
            magnifier: "#magnifier1", //最外层的大容器
            width: 320, //承载容器宽
            height: 330, //承载容器高
            moveWidth: null, //如果设置了移动盒子的宽度，则不计算缩放比例
            zoom: 5 //缩放比例
        };

        let _magnifier = magnifier(magnifierConfig);
        // 放大镜结束

        $('.small-img img').click(
            function () {
                $(this).addClass('si-active');
                $(this).closest('li').siblings().find('.small-img img').removeClass('si-active')


            }
        )






    }
)