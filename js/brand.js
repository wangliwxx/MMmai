$(function(){
  var brandtitleid=getSearch().brandtitleid;
  // console.log(brandtitleid)
  // 平板电视哪个牌子好
  Route.getbrand(brandtitleid,function (info) {
    console.log(info);
    $(".mbrief-list").html(template("tpl1", info))
  })
  // 平板电视产品销量排行
  Route.getbrandproductlist(brandtitleid,4,function (info) {
    console.log(info);
    $(".mpro_list ul").html(template("tpl2", info))
  })
  // 平板电视最新评价
  // Route.getproductcom(0,function (info) {
  //   console.log(info);
  //   $(".bra_conment").html(template("tpl3", info))
  // })



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