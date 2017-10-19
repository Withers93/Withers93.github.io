var screens = [["sweet", "#97D249"], ["cute", "#FFBA1A"], ["funny", "#59D2AF"], ["smart", "#6D4EBF"], ["amazing", "#6D4EBF"], ["lovely", "#6D4EBF"], ["beautiful", "#6D4EBF"], ["sweet", "#6D4EBF"], ["nice", "#6D4EBF"], ["honest", "#6D4EBF"], ["perfect", "#6D4EBF"],];
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