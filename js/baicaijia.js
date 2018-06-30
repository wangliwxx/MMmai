$(function () {






  // 功能一：内容区域-头部导航信息
  // 获取数据
  Route.getbaicaijiatitle(function (info) {
    console.log(info)
    $(".bcj_title ul").html(template("tpl1", info));
    //1：动态计算秒杀商品的ul的宽度
    //思路：
    //1. 找到ul
    //2. 找到所有的li，计算总的宽度
    //3. 设置给ul即可


    var ul = document.querySelector(".bcj_title ul");
    var lis = ul.querySelectorAll("li");
    //宽度 * 个数
    ul.style.width = lis[0].offsetWidth * lis.length + "px";


    //2.传的是父元素的选择器
    new IScroll(".bcj_title", {
      scrollY: false,//禁用垂直滚动
      scrollX: true//启动水平滚动
    });

    render(1);
    // 3.给li注册点击事件，添加now类，给当前点击的li下面的a添加current类
    $(lis).on("click", function () {
      //获取titleid
      var titleid = $(this).data("titleid");
      console.log(titleid)
      $(this).addClass("now").siblings().removeClass("now");
      // console.log( $(this).find("a"))
      $(this).find("a").addClass("current").end().siblings().find("a").removeClass("current");


      // 根据标题id获取该标题对应的商品列表然后渲染到页面
      render(titleid)


    })

  })


  //---------   获取对应商品详情信息---------------------
  function render(titleid) {
    Route.getbaicaijiaproduct(titleid, function (info) {
      console.log(info)

      $(".bcj_list ul").html(template("tpl2", info));
    })
  }




})