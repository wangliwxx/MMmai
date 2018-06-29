$(function () {
  var categoryid = getSearch().categoryId;
  // console.log(categoryid);
  // 获取面包屑数据
  Route.getcategorybyid(categoryid, function (info) {
    // console.log(info);
    $(".product_list_title ul").html(template("tpl1", info));
  });
  //获取产品详情
  var productid = getSearch().productId;
  // console.log(productid)
  Route.getproduct(productid, function (info) {
    // console.log(info);
    $('.product_detail').html(template("tpl2", info));
  })
  // 获取评论数据
  Route.getproductcom(productid, function (info) {
    console.log(info);
    $('.mpj_list').html(template("tpl3", info));
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