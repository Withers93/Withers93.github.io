var screens = [["sweet", "#97D249"], ["warm", "#FFBA1A"], ["cool", "#59D2AF"], ["nice", "#6D4EBF"],];
var descriptorEl = document.querySelector(".descriptor");
var speed = 3000;

function changeScreen(index){
    if(!index){
        index = 0;
    }
    descriptorEl.innerHTML = screens[index][0];
    document.body.style.backgroundColor = screens[index][1];
}

function start(){
    var index = 0;
    setInterval(function(){
            if(index === screens.length){
                index = 0;
            }
            changeScreen(index);
            index++;
    }, speed);
}
start();