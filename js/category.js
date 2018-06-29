$(function(){
  //发送ajax，获取数据 ---商品分类标题
  Route.getcategorytitle(function(info){
    console.log(info);
    //结合模板引擎渲染---商品分类标题
    $(".mbrief-list").html(template("tpl1",info));
    //给标题注册点击事件
    $(".tit").on("click",function(){
      //发送ajax，根据分类的标题获取标题对应的分类列表
      var titleid=$(this).data("id");
      // console.log(titleid);
      // var $that=$(this).next();
      // $that.removeClass("hidden").parentNode().siblings().last-child().addClass("hidden");
      //????问题：点击怎么让其他的.info 加上hidden??????????????????
      // $(this).next().slideToggle().parent().siblings().find(".info").slideUp();
      $(this).next().toggle().parent().siblings().find(".info").hide();
      
      Route.getcategory(titleid,function(info){
       // console.log(info);
         //结合模板引擎渲染--标题对应的分类列表

         $(".ul_info").html(template("tpl2",info));
      })
    })
  })




})
