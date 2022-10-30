//========================================================== left slide bar JS ========================
$(document).on('click', '#slidebar li' , function(){
    $(this).addClass('active').siblings().removeClass('active')
});

//========================================================== left menu slide bar dp toggle JS ========================
$('.sub-menu ul').hide();
$(".sub-menu a").click(function(){
    $(this).parent(".sub-menu").children("ul").slideToggle("100");
    $(this).find(".right").toggleClass("fa-caret-up fa-caret-down");
});

//========================================================== slide bartoggle JS ========================
$(document).ready(function(){
    $("#toogleSlidebar").click(function() {
        $(".left-menu").toggleClass("hide");
        $(".content-wrapper").toggleClass("hide");
    });
});