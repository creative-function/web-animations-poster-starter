'use strict';

console.log("Hello Chello, brasil posters2!");

// VARIABLES

//body

var $tie = document.querySelector('.navy-tie');
var $Otongue = document.querySelectorAll('.orange-tongue path');
var $posterTitle = document.querySelectorAll('.poster-title');

//eye-hinges
var $allSpokes = document.querySelector('.eye-hinges');
var $spokeB_tprt = document.querySelector('.spokeA-eyeB-top-right');
var $spokeC_mdrt = document.querySelector('.spokeB-eyeC-middle-right');
var $spokeE_mdlft = document.querySelector('.spokeC-eyeE-middle-left');
var $spokeF_bttmrt = document.querySelector('.spokeD-eyeF-bottom-right');

//eyes
var $allEye_imgs = document.querySelectorAll('.eye-images');

var $eyeA_tplft = document.querySelector('.eyeA-top-left');
var $eyeB_tprt = document.querySelector('.eyeB-top-right');
var $eyeC_midrt = document.querySelector('.eyeC-middle-right');
var $eyeD_mideye = document.querySelector('.eyeD-middle-eye');
var $eyeE_midlft = document.querySelector('.eyeE-middle-left');
var $eyeF_bttmrt = document.querySelector('.eyeF-bottom-right');
var $eyeG_bttmlft = document.querySelector('.moving-pupil');

var $moving_eye = document.querySelector(".eyeG-pupil");

// // ONLOAD ANIMATIONS

var tl_Onload = new TimelineMax();

var tl_Eyeballs = new TimelineMax({ repeat: -1, yoyo: true });
var tl_Eyehinges = new TimelineMax({ repeat: -1, yoyo: true });

tl_Onload
// .from($Otongue,3,{scale:2, opacity:0})
.from($tie, 2, { y: -300, opacity: 0 }, 'tongue').from($eyeA_tplft, 1, { scale: 0, y: -15, opacity: 0 }, 'tongue+=1.5').staggerFrom($Otongue, 3, { drawSVG: '0%' }, 1, 'tongue+=2').from($eyeG_bttmlft, 1, { scale: 2, opacity: 0 }, 'tongue+=4.8').from($spokeF_bttmrt, .5, { y: -5, opacity: 0 }, 'spoke').from($spokeB_tprt, .5, { y: -10, opacity: 0 }, 'spoke+=1.1').from($spokeE_mdlft, .5, { y: -10, opacity: 0 }, 'spoke+=1.5').from($spokeC_mdrt, .5, { y: -10, opacity: 0 }, 'spoke+=1.4').from($eyeB_tprt, 1, { y: -15, opacity: 0 }).from($eyeC_midrt, 1, { rotation: -25, y: -10, scale: 0, opacity: 0 }).from($eyeD_mideye, .5, { scale: 0, opacity: 0 }).from($eyeE_midlft, .5, { scale: 0, opacity: 0 }).from($eyeF_bttmrt, .5, { scale: 0, opacity: 0 }).from($posterTitle, 3, { y: 100, opacity: 0, scale: 3, ease: Back.easeInOut });
console.log("loading poster");

tl_Eyeballs.fromTo($eyeA_tplft, 6, { rotation: 160 }, { rotation: -160, ease: Back.easeInOut }, "eyes").fromTo($eyeD_mideye, 8, { rotation: 180 }, { rotation: -180, ease: Back.easeInOut }, "eyes");

tl_Eyehinges.fromTo($eyeB_tprt, 2, { rotation: 15 }, { rotation: -65 }, "eyes").fromTo($eyeC_midrt, 2, { rotation: -8 }, { rotation: 52 }, "eyes+=.5").fromTo($eyeE_midlft, 2, { rotation: -8 }, { rotation: 52 }, "eyes+=1.3").fromTo($eyeF_bttmrt, 2, { rotation: -15 }, { rotation: 29 }, "eyes+=1");
//# sourceMappingURL=main.js.map
