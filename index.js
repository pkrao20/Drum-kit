// document.querySelectorAll("button")[0].addEventListener("click",function(){
//     alert("mat click kr bsdk");
// });
// document.querySelectorAll("button")[1].addEventListener("click",function(){
//     alert("mat click kr bsdk");
// });
// document.querySelectorAll("button")[2].addEventListener("click",function(){
//     alert("mat click kr bsdk");
// });
// document.querySelectorAll("button")[3].addEventListener("click",function(){
//     alert("mat click kr bsdk");
// });
// document.querySelectorAll("button")[4].addEventListener("click",function(){
//     alert("mat click kr bsdk");
// });
// document.querySelectorAll("button")[5].addEventListener("click",function(){
//     alert("mat click kr bsdk");
// });
// document.querySelectorAll("button")[7].addEventListener("click",function(){
//     alert("mat click kr bsdk");
// });
// all above code written using a loop idiot;
for(var d=0;d<7;d++){
    document.querySelectorAll("button")[d].addEventListener("click",function(){
        var buttonhtml=this.innerHTML;
        switch (buttonhtml) {
            case "w":
                var tom1=new Audio('sounds/tom-1.mp3');
                tom1.play();
                break;
            case "a": 
                var tom2=new Audio('sounds/tom-2.mp3');
                tom2.play();
                break;
            case "s": 
                var tom3=new Audio('sounds/tom-3.mp3');
                tom3.play();
                break;
            case "d": 
                var tom4=new Audio('sounds/tom-4.mp3');
                tom4.play();
                break;
            case "j": 
                var snr=new Audio('sounds/snare.mp3');
                snr.play();
                break;
            case "k": 
                var crsh=new Audio('sounds/crash.mp3');
                crsh.play();
                break;
            case "l": 
                var kik=new Audio('sounds/kick-bass.mp3');
                kik.play();

            break;
            
        }

    });
}
// var audio=new Audio('sounds/tom-1.mp3');
// audio.play();

