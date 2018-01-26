/******移动端头部按钮*******/
$(document).ready(function(){
    $("#m_menu_btn").click(function(){
        if($(".m_menu_list").css("display")=="none"){
            $(".m_menu_list").show();
            $("#mengban").show()
        }else{
            $(".m_menu_list").hide();
            $("#mengban").hide()
        }
    });
});

/******交易表格头部动效******/

$(document).ready(function(){
    /*$(".swipe_menu div").mouseenter(function(){
        $(this).children("p").css("display","block");
    });*/
    // $(".swipe_menu div").mouseleave(function(){
    //     $(this).children("p").css("display","none");
    // });
    $(".swipe_menu div").click(function(){
        $(this).parentNode.children.children("p").css("display","none");
        $(this).children("p").css("display","block");
    });
});

//加载footer
// (()=>{
//     ajax("get","foot_01.html","","text")
//         .then(html=>{
//             document.getElementById("footer").innerHTML=html;
//         })
// })();

/***** PC手机动效 ****/
$(document).ready(function () {
    $(".phone").mouseenter(function () {
        $(this).addClass("animated rubberBand");
    });
    $(".phone").mouseout(function () {
        $(this).removeClass("animated rubberBand");
    });
});
/********** 手机端chart显示隐藏 **********/
$(document).ready(function(){
    $(".t_con_h").click(function(){
        if($(this).siblings().css("display")=="none"){
            $(this).next().css("display","block");
        }else{
            $(this).next().css("display","none");
        }
    });
});