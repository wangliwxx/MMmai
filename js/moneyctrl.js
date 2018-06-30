$(function () {
  //发送ajax获取数据-获取商品信息
  render(0);
  //上一页
  $(".m_prev").on("click", function () {
    var tep = $("#mfenye_select").val() - 1;
    // console.log(tep);
    if (tep <= 0) {
      return;
    }
    render(tep);
  })
  // change
  $("#mfenye_select").on("change", function () {
    var temp = $(this).val();
    render(temp);
  })
  // 下一页??????????????????????有问题，到不了最后一页？？？？？？？？？
  $(".m_next").on("click", function () {
    var tep = $("#mfenye_select").val();
    console.log(tep);
    var total = $("#mfenye_select option:last-child").val();
    console.log(total);
    tep++;
    if (tep >= total) {
      return
    }
   
    render(tep)
  })




  //---封装函数------获取数据-----------------------
  function render(page) {
    Route.getmoneyctrl(page, function (info) {
      console.log(info);
      $(".mpro_list ul").html(template("tpl2", info));
      // 渲染上一页-下一页
      var total = Math.ceil(info.totalCount / info.pagesize);
      // console.log(total);
      var html = "";
      for (var i = 0; i <= total; i++) {
        html += "<option value='" + i + "'>" + (i+1) + "/" + total + "</option>";
      }
      $("#mfenye_select").html(html);
      $('#mfenye_select').val(page);

    });
  }

})