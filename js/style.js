/**
 * Created by pointer on 2016/11/23.
 */



<!--下拉菜单的动画-->
$(document).ready(function(){
    $("#about1").click(function(){
        $("html,body").animate({scrollTop:$("#about").offset().top},1000);
    });

    $("#about2").click(function(){
        $("html,body").animate({scrollTop:$("#about").offset().top},1000);
    });

    $("#business1").click(function(){
        $("html,body").animate({scrollTop:$("#business").offset().top},1000);
    });

    $("#business2").click(function(){
        $("html,body").animate({scrollTop:$("#business").offset().top},1000);
    });


    $("#Journalism1").click(function(){
        $("html,body").animate({scrollTop:$("#Journalism").offset().top},1000);
    });

    $("#Journalism2").click(function(){
        $("html,body").animate({scrollTop:$("#Journalism").offset().top},1000);
    });


    $("#product1").click(function(){
        $("html,body").animate({scrollTop:$("#product").offset().top},2000);
    });

    $("#product2").click(function(){
        $("html,body").animate({scrollTop:$("#product").offset().top},2000);
    });

    $("#app1").click(function(){
        $("html,body").animate({scrollTop:$("#app").offset().top},2000);
    });

    $("#app2").click(function(){
        $("html,body").animate({scrollTop:$("#app").offset().top},2000);
    });



    $("#contact1").click(function(){
        $("html,body").animate({scrollTop:$("#contact").offset().top},2000);
    });

    $("#contact2").click(function(){
        $("html,body").animate({scrollTop:$("#contact").offset().top},2000);
    });


});


<!--下拉菜单的显示和隐藏-->
$(function(){
    var tag =function(){
        var width=$(window).width();
        if(width<991){
            $('.nav').hide();
            $(window).unbind('scroll');
        }else {
            $('.nav').show();
            $(window).unbind('scroll').scroll(function(){
                height = $(window).scrollTop();
                if(height > 400){
                    $('.nav').fadeIn();
                }else{
                    $('.nav').fadeOut();
                }

            });
        }
    };
    tag();
    $(window).resize(tag)
});


<!--手机端的按钮的显示和隐藏-->
$(function(){
    $("#header .right").on("click",function(){
        var val = $(this).attr('class');
        if(val.indexOf('on') == -1){
            $(this).addClass('on');
            $(".menu").show(0).stop().animate({
                height:'36rem'
            },0);
        }else{
            $(this).removeClass('on');
            $(".menu").hide(0).stop().animate({
                height:'0'
            },0);
        }
    })

    $(".menu a").on("click",function(){
        $(this).parents(".menu").hide();
        $("#header .right").removeClass('on');
    })

});

