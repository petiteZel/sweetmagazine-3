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
    }).to(".overlay", 0.5, {
        width:"8%",
        ease:Linear.easeNone
    }).from("#mirror, #photo, #photo-s, #clock", 0.5, {
        opacity:0, y:-50, ease:Expo.easeInOut
    }).from("#bookshelf", 0.5, {
        opacity:0, x:50, ease:Expo.easeInOut
    }).from("#desk", 0.5, {
        opacity:0, y:50, ease:Expo.easeInOut
    })

    const mirror = document.querySelector("#mirror");
    const photo = document.querySelector("#photo");
    const photo_s = document.querySelector("#photo-s");
    const clock = document.querySelector("#clock");
    const bookshelf = document.querySelector("#bookshelf");
    const desk = document.querySelector("#desk");


    const tooltipMirror = new bootstrap.Tooltip(mirror, {
        placement:'top',
        title:'저를 소개할게요'
    })
    const tooltipPhoto = new bootstrap.Tooltip(photo, {
        placement:'left',
        title:'제가 경험한 팀프로젝트에요.'
    })
    const tooltipClock = new bootstrap.Tooltip(clock, {
        placement:'top',
        title:'지금은 몇시 일까요?'
    })
    const tooltipBookshelf = new bootstrap.Tooltip(bookshelf, {
        placement:'top',
        title:'제가 진행한 개인 프로젝트에요'
    })
    const tooltipDesk = new bootstrap.Tooltip(desk, {
        placement:'top',
        title:'코드 모음'
    })
    mirror.addEventListener("click", ()=>{

    })


})