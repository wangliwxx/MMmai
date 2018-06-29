$(function () {
  var productid = getSearch().productid;
  //  console.log(productid)
  Route.getdiscountproduct(productid, function (info) {
    console.log(info)
    //结合模板引擎渲染数据
    // 模板1：信息的头部
    $(".m-xr1").html(template("tpl1",info));
    $(".m-xr2").html(template("tpl2",info));
    // $(".m-xr3").html(template("tpl3",info));

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
});