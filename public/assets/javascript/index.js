$(document).on("click mousemove",".CardDiv",function(e){ 
    var y = e.originalEvent.layerY;
    var newposY = y - 100; 
    if(y <= 100){
        newposY = 0;
    }
    $(".blitzCrank").css("transform","translate("+40+"px,"+newposY+"px)");
//     console.log(e);
//     var cursorY = e.originalEvent.pageY;
//     var papaWindow = parent.window;
//   var $pxFromTop = $(papaWindow).scrollTop();
//   var $userScreenHeight = $(papaWindow).height();
//   console.log($userScreenHeight);

//   if (cursorY > (($userScreenHeight + $pxFromTop) / 1.5)) {

//          if ($pxFromTop < ($userScreenHeight * 3.2)) {

//                    papaWindow.scrollBy(0, ($userScreenHeight / 30));
//              }
//         }
//   else if (cursorY < (($userScreenHeight + $pxFromTop) * .75)) {

//         var ScrollDown = b => {
//            setTimeout() papaWindow.scrollBy({top: -($userScreenHeight / 30), behavior: "smooth"});
//         }
//         }
    });