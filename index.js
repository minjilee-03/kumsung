$(document).ready(function(){ 
    var rolltime = 5000; // 롤링 시간 
    var fadetime = 1000; //페이드 인아웃 시간 
    var $rollimg = $(".rolling_box > li"); 
    var dots = document.getElementsByClassName("dot");
    $rollimg.not(":first").hide(); 
    setInterval(rolling, rolltime); 
    
    if (slideIndex > slides.length) {slideIndex = 1}   
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block"; 
    dots[slideIndex-1].className += " active";

    function rolling() { 
        $visible_img = $rollimg.filter(":visible"); 
        $visible_img.fadeOut(fadetime); 
        $next_img = $visible_img.next(); 
        if ($next_img.length === 0) { 
            $next_img = $rollimg.filter(":first"); 
        } 
        $next_img.fadeIn(fadetime); } });
   

/*const { func } = require("prop-types");

    var $slideWrap;
    var $slideCenter;
    var $imglist;
    var $images;
    var $dotList;
    var $dot;
    var imgWidth;
    var imgNum;
    var overNum = 0;
    var myInterval;
    var intervalPlay = true;

    $(window).load(function(){
        $slideWrap = $("#slide_wrap");
        $slideCenter = $("slide_center");
        $imglist = $("img_list");
        $images = $("img_list img");
        $dotList = $("dot_list");
        $dot = $("#dot_list li");

        imgReset();

        showDot(0);

        $dot.bind("click", onOver);

        myInterval = setInterval(onplay, 1000);
        $slideWrap.bind("mouseleave", onInterval);
    });

    function showDot(newMenu){
        $dot.css("background-color", "white");
        $dot.eq(newMenu).css("background-color", "red");
    }
    function imgReset(){
        imgWidth = $slideCenter.innerWidth();

        $images.css("width", imgWidth);

        $slideWrap.css("height", $images.innerHeight());
        $dot.css({"width": (imgWidth/40),"height": (imgWidth/40), "border-radius":(imgWidth/40)/2});
        $imglist.css("width", imgWidth * imgNum);
    }

    function onOver(){
        overNum = $dot.index($(this));

        onvrdisplaydisconnect(overNum);

        clearInterval(myInterval);
        intervalPlay = true;
    };

    function onSlide(newNum){
        $imglist.animate({"left": - imgWidth*newNum}, 500, "easeOutExpo");
        showDot(newNum);
    }

    function onplay(){
        overNum = overNum + 1;

        if(overNum >= imgNum){
            overNum = 0;
        }
        onSlide(overNum);
    }

    function onInterval(){
        if(intervalPlay){
            myInterval = setInterval(onplay, 1000);
            intervalPlay = false;
        }
    }*/

