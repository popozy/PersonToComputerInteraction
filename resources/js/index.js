 $("#img1-1").hover(function() {
     $("#img1-1").css("display", "none");
     $("#img1-2").css("display", "inline-block");
 }, function() {
     $("#img1-2").mouseleave(function() {
         $("#img1-1").css("display", "inline-block");
         $("#img1-2").css("display", "none");
     });
 });
 $("#img2-1").hover(function() {
     $("#img2-1").css("display", "none");
     $("#img2-2").css("display", "inline-block");
 }, function() {
     $("#img2-2").mouseleave(function() {
         $("#img2-1").css("display", "inline-block");
         $("#img2-2").css("display", "none");
     });
 });
 $("#img3-1").hover(function() {
     $("#img3-1").css("display", "none");
     $("#img3-2").css("display", "inline-block");
 }, function() {
     $("#img3-2").mouseleave(function() {
         $("#img3-1").css("display", "inline-block");
         $("#img3-2").css("display", "none");
     });
 });
 $("#img3-1").click(function() {
     $(".nav2").toggle();
 });
 $("#img3-2").click(function() {
     $(".nav2").toggle();
 });
 $(".nav2-1").click(function() {
     $(".tips-container").toggle();
 });
