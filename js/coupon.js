$(function(){
  Route.getcoupon(function(info){
  console.log(info)
  $(".coupon ul").html(template("tpl",info));
  })
})