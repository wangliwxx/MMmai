//发送ajax获取数据
$(function () {
  var categoryid = getSearch().categoryid;
  // console.log(categoryid);
  // 获取面包屑数据
  Route.getcategorybyid(categoryid, function (info) {
    // console.log(info);
    $(".product_list_title ul").html(template("tpl1", info));
  });
  //获取商品列表数据
  render(1);
  //select--change事件

  $('#mfenye_select').on("change", function () {
    var temp = $(this).val();
    render(temp);
  })
  //上一页
  $(".m_prev").on("click", function () {
    var tep = $('#mfenye_select').val() - 1;
    if (tep <= 0) {
      return;
    }
    render(tep);
  })
  //下一页
  $(".m_next").on("click", function () {
    var tep = $('#mfenye_select').val();
    console.log(tep);
    var total = $('#mfenye_select option:last-child').val();
    console.log(total);
    if (tep >= total) {
      return;
    }
    tep++;
    render(tep);
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
  //-------封装函数-------- 获取商品列表数据
  function render(page) {
    Route.getproductlist(categoryid, page, function (info) {
      console.log(info)
      //1.渲染商品列表数据
      $(".product_list_content ul").html(template("tpl2", info));
      //2.渲染上一页-下一页 ??????????-未完成
      // $("#mfenye_select").html(template("tpl3",info));
      var total = Math.ceil(info.totalCount / info.pagesize);
      var html = "";
      for (var i = 1; i <= total; i++) {
        html += " <option value='" + i + "'>" + i + "/" + total + "</option>";
      }
      $('#mfenye_select').html(html);
      $('#mfenye_select').val(page);
    })
  }

})

















