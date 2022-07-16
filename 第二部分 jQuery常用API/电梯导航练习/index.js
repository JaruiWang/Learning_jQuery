$(function(){
    // 当我们点击了小li 此时不需要执行 页面滚动事件里面的li的背景选中 添加current
    // 节流阀  互斥锁
    var flag=true;
    var toolTop=$('.recommend').offset().top;
    checkTop();
    function checkTop(){
        if($(document).scrollTop()>=toolTop){
            $('.fixedtool').fadeIn();
        }else{
            $('.fixedtool').fadeOut();
        }
    }

    $(window).scroll(function(){
        checkTop();

        if(flag){
        // 页面滚动到某个区域，左侧电梯导航小Li应该添加和删去相应的current类名
        $('.floor div').each(function(i,ele){
            if($(document).scrollTop()>=$(ele).offset().top){
                console.log(i);
                $('.fixedtool li').eq(i).addClass('current').siblings().removeClass('current');

            }    
        })

        }


 })

     //点击后滚动到目标位置  $(document).scrollTop(100);
     $('.fixedtool li').click(function(){
        // console.log();
        flag=false;
        var current=$('.floor div').eq($(this).index()).offset().top
        $('body,html').stop().animate({
            scrollTop:current
        },500,function(){
            flag=true;
        });

        $(this).addClass('current').siblings().removeClass('current');

      
        
    })

})