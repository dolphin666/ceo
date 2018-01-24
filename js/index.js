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
    $(".swipe_menu div").mouseenter(function(){
        $(this).children("p").css("display","block");
    });
    $(".swipe_menu div").mouseleave(function(){
        $(this).children("p").css("display","none");
    });
});
