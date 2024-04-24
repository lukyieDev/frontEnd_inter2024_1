let carroselContainer = document.querySelector(".carrousel_images");
let images = document.querySelectorAll(".carrousel_images img");
let positionCircles = document.querySelectorAll(".circle");

function onStart(){
    positionCircles[1].classList.add('activeCircle');
    
}


function slide(){
    positionCircles.forEach((circle)=>{

        circle.addEventListener('click', ()=>{

            if(circle.classList.contains('c1')){
                images[0].style.zIndex = "2";
                images[1].style.zIndex = "1";
                images[2].style.zIndex = "1";

                images[0].style.left = "260px";
                images[1].style.left = "-60px";
                images[1].style.top = "0px";
                images[1].style.height = "300px";
                images[0].style.height = "320px";
                images[0].style.top = "-15px";
                images[2].style.top = "0px";
                images[2].style.height = "300px";
                images[2].style.left = "-180px"


            }else if(circle.classList.contains('c2')){
                images[1].style.zIndex = "2";
                images[0].style.zIndex = "1";
                images[2].style.zIndex = "1";

                images[0].style.left = "180px";
                images[1].style.left = "0px";
                images[1].style.top = "-15px";
                images[1].style.height = "320px";
                images[0].style.height = "300px";
                images[0].style.top = "0px";
                images[2].style.top = "0px";
                images[2].style.height = "300px";
                images[2].style.left = "-180px"

            }else if(circle.classList.contains('c3')){
                images[2].style.zIndex = "2";
                images[1].style.zIndex = "1";
                images[0].style.zIndex = "1";

                images[0].style.left = "180px";
                images[1].style.left = "70px";
                images[1].style.top = "0px";
                images[1].style.height = "300px";
                images[0].style.height = "300px";
                images[0].style.top = "0px";
                images[2].style.left = "-240px"
                images[2].style.top = "-15px";
                images[2].style.height = "320px";
            }

            positionCircles.forEach((circle)=>{circle.classList.remove('activeCircle')});
            circle.classList.add('activeCircle');
        })

    })
}



onStart();

slide();