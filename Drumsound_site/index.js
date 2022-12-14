var totalbtn=document.querySelectorAll(".drum").length;
for(i=0;i<totalbtn;i++){
    document.querySelectorAll("button")[i].addEventListener("click",function(){

        var optedButton=this.innerHTML;
        playsound(optedButton);
        addAnimation(optedButton);

    })
}

    document.addEventListener("keydown",function(event){
        playsound(event.key);
        addAnimation(event.key);

    })






function playsound(key)
{
    switch (key) {
        case "w":
            var snd = new Audio("sounds/tom-1.mp3");
            snd.play();
            break;

        case "a":
            var snd1 = new Audio("sounds/tom-2.mp3");
            snd1.play();
            break;

        case "s":
            var snd2 = new Audio("sounds/tom-3.mp3");
            snd2.play();
            break;
            
        case "d":
            var snd3 = new Audio("sounds/tom-4.mp3");
            snd3.play();
            break;

        case "j":       
            var snd4 = new Audio("sounds/snare.mp3");
            snd4.play();
            break;
                    
        case "k":
            var snd5= new Audio("sounds/crash.mp3");
            snd5.play();
            break;

        case "l":
            var snd6= new Audio("sounds/kick-bass.mp3");
            snd6.play();
            break;

        default:
            alert("inavlid choice");
            break;
    }
}

function addAnimation(newkey)
{
var activekey=document.querySelector("."+newkey);
 
activekey.classList.add("pressed");

setTimeout(function(){
    activekey.classList.remove("pressed"); 
},100)
}



