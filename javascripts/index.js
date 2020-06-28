//文档加载事件
$(function () {

    //主轮播图
    $(".meauSlide").slidebox({
        boxh: 470, //盒子的高度
        w: 1000, //图片的宽度
        h: 470, //图片的高度
        isShow: true, //是否显示控制器
        isShowBtn: true, //是否显示左右按钮
        controltop: 10, //控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
        controlsW: 10, //控制按钮宽度
        controlsH: 10, //控制按钮高度
        radius: 10 //控制按钮圆角度数
    });

    //主轮播图
    $(".bookSlide").slidebox({
        boxh: 221, //盒子的高度
        w: 330, //图片的宽度
        h: 221, //图片的高度
        isShow: true, //是否显示控制器
        isShowBtn: true, //是否显示左右按钮
        controltop: 10, //控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
        controlsW: 20, //控制按钮宽度
        controlsH: 5, //控制按钮高度
        radius: 10 //控制按钮圆角度数
    });
    $('.bookListDetail').mouseenter(function () {
        // 当前
        $('.bookListDetail>div').show();
        $('.bookListDetail>p').hide();
        // 其他
        $(this).siblings('li').find('div').hide()
        $(this).siblings('li').find('p').show()
    })

    // 前三的图书排行版文字序号为红色

    $('.bookListDetail>span:lt(3)').css('color', 'red')

    $(".clothSlide").slidebox({
        boxh: 334, //盒子的高度
        w: 440, //图片的宽度
        h: 334, //图片的高度
        isShow: true, //是否显示控制器
        isShowBtn: true, //是否显示左右按钮
        controltop: 10, //控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
        controlsW: 20, //控制按钮宽度
        controlsH: 5, //控制按钮高度
        radius: 10 //控制按钮圆角度数
    });

    // 单身狗倒计时
    $(".sportSlide").slidebox({
        boxh: 334, //盒子的高度
        w: 440, //图片的宽度
        h: 334, //图片的高度
        isShow: true, //是否显示控制器
        isShowBtn: true, //是否显示左右按钮
        controltop: 10, //控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
        controlsW: 20, //控制按钮宽度
        controlsH: 5, //控制按钮高度
        radius: 10 //控制按钮圆角度数
    });
    $(".babySlide").slidebox({
        boxh: 334, //盒子的高度
        w: 440, //图片的宽度
        h: 334, //图片的高度
        isShow: true, //是否显示控制器
        isShowBtn: true, //是否显示左右按钮
        controltop: 10, //控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
        controlsW: 20, //控制按钮宽度
        controlsH: 5, //控制按钮高度
        radius: 10 //控制按钮圆角度数
    });
    // 电子书选项卡

    $('.book-title>li').hover(
        function () {
            $(this).addClass('active').siblings('li').removeClass('active')

        },
        function () {

        }
    );
    // 服装选项卡
    $('.cloth-title>ul>li').hover(
        function () {
            $(this).addClass('active').siblings().removeClass('active')
        },
        function () {

        }
    )
    //左侧边导航栏

    // 顶部固定栏
    $(window).scroll(function () {
        let stp = $('html').scrollTop();
        if (stp > 2000) {
            $('.fixTop').slideDown();
            $('.searchForm').appendTo('.fixTop')

        } else {
            $('.fixTop').slideUp();
            $('.searchForm').appendTo('.search-box')
        }

    }); //结束

    //侧边导航栏
    $('.slideNav li').hover(
        function () {
            let bgc = $(this).attr('bgc');
            $(this).css({
                'background-color': bgc,
                'background-position-x': '-40px',
                'width': '80px'

            })

        },
        function () {
            $(this).css({
                'background-color': '',
                'background-position-x': 0,
                'width': '40px'

            })

        }
    ).click(
        function () {
            let index = $(this).index();
            let stp = $('.floor').eq(index).offset().top;
            $('html').animate({
                    scrollTop: stp
                }, 500

            );
        }
    );

    // 回到顶部

    //在某个固定范围内隐藏
    $(window).scroll(function () {
        if ($(window).scrollTop() > 500) {
            $('.backTop').css('display', 'block')

        } else {
            $('.backTop').css('display', 'none')

        }

    });

    $('.backTop').click(function () {
        $('html,body').animate({
            'scrollTop': 0
        }, 500)
    });
})