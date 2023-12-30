document.addEventListener("DOMContentLoaded", function() {

    var tl = gsap.timeline();
    tl.to(".first", 0.2, {
        width:"2%",
        ease:Linear.easeNone
    }).to(".second", 0.2, {
        width: "2%",
        ease:Linear.easeNone
    }).to(".third", 0.2, {
        width: "2%",
        ease:Linear.easeNone
    }).to(".forth", 0.2, {
        width: "2%",
        ease:Linear.easeNone
    }).from("#mirror, #photo, #photo-s, #clock", 0.5, {
        opacity:0, y:-50, ease:Expo.easeInOut
    }).from("#bookshelf", 0.5, {
        opacity:0, x:50, ease:Expo.easeInOut
    }).from("#desk", 0.5, {
        opacity:0, y:50, ease:Expo.easeInOut
    })


})