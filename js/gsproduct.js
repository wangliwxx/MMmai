$(function () {
  //
  var shopid = 0;
  var areaid = 0;
  // 一、 获取内容区域的头部信息
  Route.getgsshop(function (info) {
    // console.log(info);
    $("#area1 ul").html(template("tpl1", info))
  })
  Route.getgsshoparea(function (info) {
    // console.log(info);
    $("#area2 ul").html(template("tpl2", info))
  })
  // 二、导航-注册点击事件
  $(".ch_shop").on("click", function () {
    //1.显示下拉搜索框
    $("#area1").toggleClass("now");
    //2.点击下拉搜索框下面的li
    var $li = $("#area1").find("li");
    $li.on("click", function () {
      // shopid : 店铺id 
      var shopid = $(this).data("shopid")
      // console.log(shopid)
      //获取点击的下拉搜索框文本值    
      var txt = $(this).children("a").text();
      $(".ch_shop").children("a").text(txt);

      $(this).children("span").css("color", "red").end().siblings().children("span").css("color", "transparent");
      //渲染对应凑单品商品列表
      // console.log(shopid, areaid)
      render(shopid, areaid);
      //隐藏下拉搜索框
      $("#area1").removeClass("now");
    })

  })
  $(".ch_area").on("click", function () {
    //显示下拉搜索框
    $("#area2").toggleClass("now");
    //2.点击下拉搜索框下面的li
    var $li = $("#area2").find("li");
    $li.on("click", function () {
      //areaid : 区域id
      var areaid = $(this).data("areaid");
      // console.log(areaid)
      //获取点击的下拉搜索框文本值 
      var txt = $(this).children("a").text().slice(0, 2);
      $(".ch_area").children("a").text(txt);

      $(this).children("span").css("color", "red").end().siblings().children("span").css("color", "transparent");
      //渲染对应凑单品商品列表
      render(shopid, areaid);
      //隐藏下拉搜索框
      $("#area2").removeClass("now");

    })
  })
  $(".allprice").on("click", function () {
    //显示下拉搜索框
    $("#area3").toggleClass("now");
    $("#area3").find("span").css("color", "red");
  })
  // 凑单品商品列表

  function render(shopid, areaid) {
    Route.getgsproduct(shopid, areaid, function (info) {
      console.log(info)
      $(".gs_pro_list ul").html(template("tpl3", info));
    });
  }
  render(0,0)






})