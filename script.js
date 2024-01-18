var wrapper = document.getElementById("wrapper");
wrapper.style.right = wrapper.clientWidth - wrapper.offsetWidth +"px";



let title = document.querySelector("#wrapper");
let div = document.querySelector("#move-div");

function isTouchDevice(){
    try{
        document.createEvent("TouchEvent");
        return true;
    }
    catch(e){
        return false;
    }
};

const move = (e) => {
    try {
        var x = !(isTouchDevice()) ? e.pageX : e.touches[0].pageX;
        var y = !isTouchDevice() ? e.pageY : e.touches[0].pageY;
    }
    catch (error) {}
    document.querySelector("#move-div").style.left = x + "px";
    document.querySelector("#move-div").style.top = y + "px";
        const rect = document.querySelector("#wrapper").getBoundingClientRect();

        if( x > rect.left && x < rect.right &&
            y > rect.top && y < rect.bottom ){
            document.querySelector("#move-div").style.height = 5 + "em";
            document.querySelector("#move-div").style.width = 5 + "em";
        }

        else{
            document.querySelector("#move-div").style.width = 2 + "em";
            document.querySelector("#move-div").style.height = 2 + "em";
        }
    };

document.addEventListener("mousemove", (e) =>{
    move(e);
});

document.addEventListener("touchmove", (e) =>{
    move(e);
});