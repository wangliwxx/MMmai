$(function () {
  // 根据优惠券标题id获取该标题对应的列表
  var couponid = getSearch().couponid;
  Route.getcouponproduct(couponid, function (info) {
    console.log(info)
    $(".cpp_list ul").html(template("tpl", info));
    // 点击li,显示遮罩框，
    $(".cpp_xq").on("click", function () {
      console.log(info)
      // 1.显示遮罩框
      $(".m_mask").css("display", "block");

      // 引用mui图片轮播
      // $(".lbt").html(template("tpl2",info));
      // // 初始化轮播图
      // mui('.mui-slider').slider({
      //   // interval: 5000//自动轮播周期，若为0则不自动播放，默认为0；
      // });

      // 自己原生JS生成的轮播图
      //1. 找对象
      //2. 给右箭头注册点击事件
      //3. 给左箭头注册点击事件

      // 2.获取数据后结合模板引擎渲染出来
      $(".lbt_w ul").html(template("tpl2",info));
      var width = $('.lbt_w').width();
      console.log(width);
      $(".lbt_w ul").css('left', -width);
      //3.JS加动画，让其轮播
      //1. 获取对象
      //1.1 获取box
      var box = document.querySelector(".lbt_w");
      //1.2 获取ul
      var ul = box.querySelector("ul");
      //1.5 所有的图片
      var imgs = ul.children;
      console.log(imgs)
      $(".lbt_w ul").width(width*imgs.length);
      // console.log(rightArr)
      //2. 给右箭头注册点击事件
      //需要一个核心的变量：
      var count = 0;
      $(".m_arrow .right").on("click", function () {
        console.log(111)
        //判断是否是最后一张，如果是，瞬间换成第0张
        if (count >= imgs.length - 1) {
          count = 1;
          ul.style.left = -width + 'px';
        }


        //2.1 count++
        count++;
        //2.2 需要移动ul
        var target = -count * box.offsetWidth;
        animate(ul, target, 40);

      })


      //3. 给左箭头注册点击事件
      $(".m_arrow .left").on("click", function () {
        //3.0 如果是第一张，瞬间变回最后一张
        if (count <= 1) {
          count = imgs.length - 1;
          //====================================坑：不要丢了px=====================
          ul.style.left = -count * box.offsetWidth + "px";//这行代码等于没用
        }


        //2.1 count++
        count--;
        //2.2 需要移动ul
        var target = -count * box.offsetWidth;
        animate(ul, target, 40);


      })





    })

  });
  // 关闭遮罩框
  $(".close").on("click",function(){
    $(".m_mask").css("display", "none");
  })





  //---函数-用于获取地址栏中--后面的参数-------------------
  function getSearch() {
    var temp = location.search;
    temp = decodeURI(temp);
    temp = temp.slice(1);
    var arr = temp.split("&");
    // console.log(arr)
    var obj = {};
    arr.forEach(function (e, i) {
      var k = e.split("=")[0];
      var v = e.split("=")[1];
      obj[k] = v;
    })
    return obj;
    // console.log(obj)
  }
})