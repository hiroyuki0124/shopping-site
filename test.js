$(document).ready(function(){
  $(".menu_icon").click(function(){
    $(".sp_menu_toggle").slideToggle();
  });
});

$(window).load(function(){
  $(".item_slide_list img").click(function(){
    var img_src = $(this).attr("src");
    $(".item_slide_main img").attr("src", img_src);
  });
});