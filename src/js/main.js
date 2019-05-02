console.log("Hello Chello, brasil posters2!");

// VARIABLES

//body

let $tie = document.querySelector('.navy-tie');
let $Otongue = document.querySelectorAll('.orange-tongue path');
let $posterTitle = document.querySelectorAll('.poster-title');

//eye-hinges
let $allSpokes = document.querySelector('.eye-hinges')
let $spokeB_tprt = document.querySelector('.spokeA-eyeB-top-right');
let $spokeC_mdrt = document.querySelector('.spokeB-eyeC-middle-right');
let $spokeE_mdlft = document.querySelector('.spokeC-eyeE-middle-left');
let $spokeF_bttmrt = document.querySelector('.spokeD-eyeF-bottom-right');

//eyes
let $allEye_imgs = document.querySelectorAll('.eye-images');

let $eyeA_tplft = document.querySelector('.eyeA-top-left');
let $eyeB_tprt = document.querySelector('.eyeB-top-right');
let $eyeC_midrt = document.querySelector('.eyeC-middle-right');
let $eyeD_mideye = document.querySelector('.eyeD-middle-eye');
let $eyeE_midlft = document.querySelector('.eyeE-middle-left');
let $eyeF_bttmrt = document.querySelector('.eyeF-bottom-right');
let $eyeG_bttmlft = document.querySelector('.moving-pupil');

let $moving_eye = document.querySelector(".eyeG-pupil")

// // ONLOAD ANIMATIONS

let tl_Onload =  new TimelineMax();

let tl_Eyeballs = new TimelineMax({repeat: -1, yoyo:true});
let tl_Eyehinges = new TimelineMax({repeat: -1, yoyo:true});

tl_Onload
    // .from($Otongue,3,{scale:2, opacity:0})
    .from($tie,2,{y:-300, opacity:0}, 'tongue')
    .from($eyeA_tplft,1,{ scale:0 ,y:-15, opacity:0},'tongue+=1.5')
    .staggerFrom($Otongue,3,{drawSVG: '0%'}, 1, 'tongue+=2')
    .from($eyeG_bttmlft,1,{scale:2,opacity:0}, 'tongue+=4.8')
    .from($spokeF_bttmrt,.5, {y:-5, opacity:0},'spoke')
    .from($spokeB_tprt,.5, {y:-10, opacity:0}, 'spoke+=1.1')
    .from($spokeE_mdlft,.5, {y:-10, opacity:0},'spoke+=1.5')
    .from($spokeC_mdrt,.5, {y:-10, opacity:0},'spoke+=1.4')
    .from($eyeB_tprt,1,{y:-15, opacity:0})
    .from($eyeC_midrt,1, {rotation:-25, y:-10, scale:0, opacity:0})
    .from($eyeD_mideye,.5,{scale:0, opacity:0})
    .from($eyeE_midlft,.5,{scale:0, opacity:0})
    .from($eyeF_bttmrt,.5,{scale:0, opacity:0})
    .from($posterTitle,3,{y:100, opacity:0, scale:3,ease:Back.easeInOut})
console.log("loading poster");
  
    
tl_Eyeballs
    .fromTo($eyeA_tplft,6,{rotation:160,},{rotation:-160,ease:Back.easeInOut},"eyes")
    .fromTo($eyeD_mideye,8,{rotation:180},{rotation:-180,ease:Back.easeInOut},"eyes")
    
    
 
tl_Eyehinges
    .fromTo($eyeB_tprt,2,{rotation:15},{rotation:-65},"eyes")
    .fromTo($eyeC_midrt,2,{rotation:-8},{rotation:52},"eyes+=.5")
    .fromTo($eyeE_midlft,2,{rotation:-8},{rotation:52},"eyes+=1.3")
    .fromTo($eyeF_bttmrt,2,{rotation:-15},{rotation:29},"eyes+=1")



