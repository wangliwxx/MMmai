
$(function(){
  //1、获取导航数据
 Route.getindexmenu(function(info){
  //  console.log(info);
  //  console.log($("#m_nav ul"))
  //结合模板引擎渲染数据
   $("#m_nav ul").html(template("tpl1",info));
   //导航区，倒数4个隐藏显示，切换功能、
  var $more=$("#m_nav ul").find(".menu-item:nth-child(8)>a");
  // console.log($more)
  var $lastFour=$("#m_nav ul").find(".menu-item:nth-last-child(-n+4)>a");
  $lastFour.addClass('hide');
  // $lastFour.hide();
  // console.log($lastFour)  ?????????
  $more.on("click",function(){
    console.log(11)
    $lastFour.toggle();
  })
 })
 //2、获取超值折扣产品展示列表
 Route.getmoneyctrl(function(info){
   console.log(info);
   $(".mpro_list ul").html(template("tpl2",info))
 });
 //返回顶部功能
 $(".mft_bts a:last-child").on("click",function(){
   $("html,body").animate({scrollTop:0},1000);
 })
 






})