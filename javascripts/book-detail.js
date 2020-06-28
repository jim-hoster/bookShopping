$(function () {
    //主轮播图
    $(".bookmeau-slide").slidebox({
        boxh: 430, //盒子的高度
        w: 1000, //图片的宽度
        h: 400, //图片的高度
        isShow: true, //是否显示控制器
        isShowBtn: true, //是否显示左右按钮
        controltop: 10, //控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
        controlsW: 10, //控制按钮宽度
        controlsH: 10, //控制按钮高度
        radius: 10 //控制按钮圆角度数
    });

    $(' .bookmeau-right>ul>li').mouseenter(
        function () {
            //当前
            $(this).css('height', 100)
            //其他
            $(this).siblings('li').css('height', 48)
        }
    )

    //索引小于3的背景颜色设置为黄色
    $(' .bookmeau-right span:lt(3)').css('backgroundColor', 'red');
    $(' .bookmeau-right span:gt(2)').css('backgroundColor', '#42454a');

    // 主编推荐

    $('.newBook-right li span:lt(3)').css('color', 'red')

    // 鼠标移入显示详情
    $('.newBook-right>ul>li').mouseenter(function () { //当前
        $(this).find('.nr-detail').css('display', 'block');
        $(this).find('p').css('display', 'none');
        //其他

        $(this).siblings('li').find('.nr-detail').css('display', 'none');
        $(this).siblings('li').find('p').css('display', 'block');

    });

    // 独家提供轮播图
    $(".pr-slide").slidebox({
        boxh: 460, //盒子的高度
        w: 1200, //图片的宽度
        h: 420, //图片的高度
        isShow: true, //是否显示控制器
        isShowBtn: true, //是否显示左右按钮
        controltop: 10, //控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
        controlsW: 10, //控制按钮宽度
        controlsH: 10, //控制按钮高度
        radius: 10 //控制按钮圆角度数
    });

    //独家提供选项卡

    $('.pt-nav>li').mouseenter(
        function () {
            // 当前
            let index = $(this).index();
            $(this).addClass('pn-active').siblings().removeClass('pn-active')
            // 其他兄弟
            $('.pr-slide').eq(index).css('display', 'block');
            $('.pr-slide').eq(index).
            siblings().css('display', 'none');
        }
    )












})