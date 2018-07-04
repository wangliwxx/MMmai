$(function () {
  //获取数据
  Route.getinlanddiscount(function (info) {
    var num = 5;
    console.log(info);
    render();


    var flag = true;
    //-----------------------
    $(window).on("scroll", function () {
      if (flag) {
        // 判断什么时候加载图片
        // scrollTop>=图片的高度+图片的offsetTop
        var offsetTop = $('.inland_discount li:last-child').offset().top;
        // console.log(offsetTop);
        var height = $(window).height();
        // console.log(height);
        var scrollTop = $(window).scrollTop();
        // console.log(scrollTop);
        if (scrollTop + height >= offsetTop) {
          flag = false;
          console.log(11);
          num += 5;
          if (num > info.result.length) {
            return;
          }
          render();
        }
      }
    })

    // --封装render--把获取到的数据结合模板引擎渲染出来-------------------
    function render() {
      var result = [];
      for (var i = 0; i < num; i++) {
        result.push(info.result[i]);
      }

      var obj = {
        result: result
      }
      console.log(obj);
      setTimeout(function () {
        $(".inland_discount ul").html(template("tpl", obj));
        flag = true;
      }, 1000)
    }

  })


})