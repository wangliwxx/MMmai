$(function(){
  Route.getsitenav(function (info) {
    console.log(info);
    $(".link").html(template("tpl1", info))
  })






})