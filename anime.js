                                    /*automatic-slides*/ 

$("#1").show();

x = 1;

setInterval(function(){
  x++;
  if (x>5) {x=1}
  $("#" + x).show().prev().hide();
   
},3000)
                                      //slides//




$("#sliderright").click(function() {
    x++;

    if (x==6) {x=1}
   
    $("#" + x).show().prev().hide();
})
  
$("#sliderleft").click(function() {
     
    x--;

    if (x==0) {x=5}   

    $("#" + x).show().next().hide();
})

                                      //scroll-1//

mar = "-500px"

$("#s1scrollright").click(function(){
     $("#s1container").animate({
     	marginLeft:mar,
        }
        ,"slow")
        
})

$("#s1scrollleft").click(function(){
	$("#s1container").animate({
      marginLeft: ""
     },"slow")
})
                                        //s2scroll//



$("#s2scrollright").click(function(){
     $("#s2container").animate({
     	marginLeft:mar,
        }
        ,"slow")
        
})

$("#s2scrollleft").click(function(){
	$("#s2container").animate({
      marginLeft:"50px",
     },"slow")
})

                                      //s3sroll//



$("#s3scrollright").click(function(){
     $("#s3container").animate({
     	marginLeft:mar,
        }
        ,"slow")
        
})

$("#s3scrollleft").click(function(){
	$("#s3container").animate({
      marginLeft:"50px",
     },"slow")
})