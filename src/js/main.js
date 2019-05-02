console.log("Hello Chello, brasil posters2!");


// VARIABLES

//eye-hinges
let $allSpokes = document.querySelector('.eye-hinges')
let $spokeB_tprt = document.querySelector('.spokeA-eyeB-top-right');
let $spokeC_mdrt = document.querySelector('.spokeB-eyeC-middle-right');
let $spokeE_mdlft = document.querySelector('.spokeC-eyeE-middle-left');
let $spokeF_bttmrt = document.querySelector('.spokeD-eyeF-bottom-right');

//eyes
let $allEye_imgs = document.querySelector('.eye-images');
let $eyeA_tplft = document.querySelector('.eyeA-top-left');
let $eyeB_tprt = document.querySelector('.eyeB-top-right');
let $eyeC_midrt = document.querySelector('.eyeC-middle-right');
let $eyeD_mideye = document.querySelector('.eyeD-middle-eye');
let $eyeE_midlft = document.querySelector('.eyeE-middle-left');
let $eyeF_bttmrt = document.querySelector('.eyeF-bottom-right');


// ONLOAD ANIMATIONS

let tl = new TimelineLite();

window.onload = function(){
    

    
    
    TweenMax.staggerTo($allSpokes,.5,{
        y:0,
        console.log("spokes have loaded"),

    } ,.25)
    
    
    
    tl.from($eyeA_tplft,1,{scale:0, opacity:0})
        .from($eyeB_tprt,1,{y:-15, opacity:0})
        .from($eyeC_midrt,1, {scale:2, opacity:0})
        .from($eyeD_mideye,1,{scale:0, opacity:0})
        .from($eyeE_midlft,1,{scale:0, opacity:0})
        .from($eyeF_bttmrt,1,{scale:0, opacity:0})
        console.log("eyeballs have loaded");
        
}