$(function(){
  Route.getinlanddiscount(function(info){
    console.log(info);
    $(".inland_discount ul").html(template("tpl",info));
  })




})