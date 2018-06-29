$(function(){
  Route.getbrandtitle(function (info) {
    console.log(info);
    $(".mbrief-list").html(template("tpl1", info))
  })




})