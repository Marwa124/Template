$(".page-options").css("display","none")
$(".option .st").click(function(){
      $(".page-options").toggleClass(500);
      
  }) 
$(".page-options").css("display","none")
$(".option a").click(function(){
      $(".page-options").toggle(500); 
  }) 

$("#acc div").css("display","none")

$("#acc .li-1").click(function(){
        $("#acc .ri-1").slideToggle(1000);
})

$("#acc .li-2").click(function(){
        $("#acc .ri-2").slideToggle(1000);
})

$("#acc .li-3").click(function(){
        $("#acc .ri-3").slideToggle(1000);
})

$("#acc .li-4").click(function(){
        $("#acc .ri-4").slideToggle(1000);
})


var maxLength = 100;
$('textarea').keyup(function() {
  var textlen = maxLength - $(this).val().length;
  $('#char').text(textlen);
});
