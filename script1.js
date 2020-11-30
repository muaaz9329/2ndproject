document.querySelectorAll("button")[0].addEventListener("click", no1)
    function no1(){
        var snd = new Audio("sound/0.mp3");
        snd.play();
        document.querySelectorAll("button")[0].style.color = "black";
    }
    document.querySelectorAll("button")[1].addEventListener("click",no2)
        function no2(){
        var snd = new Audio("sound/1.mp3");
        snd.play();
        document.querySelectorAll("button")[1].style.color = "black";
    }
    document.querySelectorAll("button")[2].addEventListener("click",no3) 
        function no3(){
        var snd = new Audio("sound/2.mp3");
        snd.play();
        document.querySelectorAll("button")[2].style.color = "black";
    }
    document.querySelectorAll("button")[3].addEventListener("click",no4) 
    function no4(){
    var snd = new Audio("sound/3.mp3");
    snd.play();
    document.querySelectorAll("button")[3].style.color = "black";
}
    document.querySelector("a").addEventListener("click",
    function(){
    var snd = new Audio("sound/4.mp3");
    snd.play();
})
document.addEventListener("keypress", function(event){
    if(event.key=="w")
    {
        no1();
    }
    else if(event.key=="a")
    {
        no2();
    }
    else if(event.key=="s")
    {
        no3();
    }
    else if(event.key=="d")
    {
        no4();
    }
})
