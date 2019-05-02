'use strict';

console.log("Hello Chello, brasil posters2!");

// VARIABLES

//eye-hinges
var $allSpokes = document.querySelector('.spokes');
var $spokeB_tprt = document.querySelector('.spokeA-eyeB-top-right');
var $spokeC_mdrt = document.querySelector('.spokeB-eyeC-middle-right');
var $spokeE_mdlft = document.querySelector('.spokeC-eyeE-middle-left');
var $spokeF_bttmrt = document.querySelector('.spokeD-eyeF-bottom-right');

//eyes
var $allEye_imgs = document.querySelector('.eye-images');
var $eyeA_tplft = document.querySelector('.eyeA-top-left');
var $eyeB_tprt = document.querySelector('.eyeB-top-right');
var $eyeC_midrt = document.querySelector('.eyeC-middle-right');
var $eyeD_mideye = document.querySelector('.eyeD-middle-eye');
var $eyeE_midlft = document.querySelector('.eyeE-middle-left');
var $eyeF_bttmrt = document.querySelector('.eyeF-bottom-right');

// ONLOAD ANIMATIONS

var tl = new TimelineLite();

window.onload = function () {

    // TweenMax.staggerTo($allSpokes,.5,{
    //     y:10,

    // } ,.25)
    // console.log('spokes have loaded')

    TweenMax.to('#snake2a', 2, { MorphSVG: '#snake2' });

    tl.from($eyeA_tplft, 1, { scale: 0, opacity: 0 }).from($eyeB_tprt, 1, { y: -15, opacity: 0 }).from($eyeC_midrt, 1, { rotation: -25, x: 3, scale: 2, opacity: 0 }).from($eyeD_mideye, 1, { scale: 0, opacity: 0 }).from($eyeE_midlft, 1, { scale: 0, opacity: 0 }).from($eyeF_bttmrt, 1, { scale: 0, opacity: 0 });
    console.log("eyeballs have loaded");
};
//# sourceMappingURL=main.js.map
