
let innerWidth = $(".InnerSideBar").innerWidth();
$("#sideBar").css('left', -innerWidth)


$("#sideBar .close").click(function(){
        $("#sideBar").animate({left : -innerWidth } , 500)  
})

$("#sideBar .list").click(function(){
        $("#sideBar").animate({left : "0px"} , 500)
     
})

// ================================================


$(".InnerSideBar ul li ").eq(1).click(function(){
        let x = $("#home").offset().top;

        $("body").animate({scrollTop : x}, 400)
})
$(".InnerSideBar ul li ").eq(2).click(function(){
        let x = $("#Duration").offset().top;

        $("body").animate({scrollTop : x}, 400)
})
$(".InnerSideBar ul li ").eq(3).click(function(){
        let x = $("#joinUs").offset().top;

        $("body").animate({scrollTop : x}, 400)
})
$(".InnerSideBar ul li ").eq(4).click(function(){
        let x = $("#footer").offset().top;

        $("body").animate({scrollTop : x}, 400)
})

// ================================================
$("h3").click(function(e){

        $(".slideUp p").not($(e.target).next()).slideUp(500)
        $(e.target).next().slideToggle(500);
})
// ================================================

let countdownDate = new Date("Dec 31 , 2025 23:59:59").getTime();
console.log(countdownDate);

let counter  = setInterval(()=>{
        //get date now
        let dateNow = new Date().getTime();

        let dateDiff = countdownDate - dateNow;

        let days = Math.floor(dateDiff /( 1000 * 60 * 60 * 24))
        let hours = Math.floor((dateDiff % ( 1000 * 60 * 60 * 24))/ (1000 * 60 * 60))
        let minutes = Math.floor((dateDiff % ( 1000 * 60 * 60))/ (1000 * 60))
        let second = Math.floor((dateDiff % ( 1000 * 60 ))/ (1000))

        document.querySelector(".days").innerHTML = days + " D"
        document.querySelector(".hours").innerHTML = hours + " h"
        document.querySelector(".min").innerHTML = minutes + " m"
        document.querySelector(".second").innerHTML = second + " s"
}, 1000)



// ================================================
$("textarea").keyup(function (e) {

        if(100 - e.target.value.length > 0 ){
                document.getElementById("correct").innerHTML = 100 - e.target.value.length + "  Character Reamining" ;
                document.getElementById("none").innerHTML ="";
        }
        else{
                document.getElementById("correct").innerHTML ="";
                document.getElementById("none").innerHTML="text finish";
        }
})
