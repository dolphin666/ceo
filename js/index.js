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


