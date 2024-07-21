

function HomePageAnimations(){
    gsap.set(".slidesm" , {scale:5})
    
    var tl = gsap.timeline({       //tl is created to make  a timeline for two different animation at the same time
        scrollTrigger: {
            trigger: ".home",
            start: "top top",
            end: "bottom bottom",
            // markers: true,   //used to show the start and end points on the screen
            // pin: true,
            scrub: 1
        },    //it is for animation when screen been scrolled
    
    })
    
    tl.to(".vdodiv", {
        '--clip': "0%",
        ease: Power2,
        // duration: 2
    }, 'a')  //here a is used for the same timeline of two different animations and we have to use same flag at the end to run the animation at the sametime. it could be anything lilke a b and etc; 
    
    tl.to(".slidesm", {
        scale: 0.8,
        ease: Power2,
        // duration: 2
    }, 'a')
    
    tl.to(".lft", {
        xPercent: -10,
        stagger: 0.07,
        ease: Power4,
    }, 'b')
    tl.to(".rgt", {
        xPercent: 10,
        stagger: 0.07,
        ease: Power4,
    }, 'b')

}

function RealPageAnimation(){
    gsap.to(".slide",{
        scrollTrigger: {
            trigger: ".real",
            // markers: true,
            start: "top top",
            end: "bottom bottom",
            scrub: 2
    
        },
        xPercent: -200,
        ease: Power4
    })

}
function teamAnimation(){
    document.querySelectorAll(".listelem")
    .forEach(function(el){
        el.addEventListener("mousemove", function(dets){
            // console.log(gsap.utils.mapRange(0, window.InnerWidth, -200, 200, dets.clientX))  //here mapRange is the range of the movement of the mouse and window.InnerWidth is the width of the right side edge,  and the -200 and 200 is the range of the movement of the picture while moving the mouse and 'clientX' is used for the current location of the mouse
            gsap.to(this.querySelector(".picture"),{opacity: 1, x: gsap.utils.mapRange(0, window.innerWidth,-200,200, dets.clientX), ease:Power4, duration: .5})   //"this" means the part where the cursor is currently moving     and x: is used for the movement of the picture in the x direction
        })
        el.addEventListener("mouseleave", function(dets){
            gsap.to(this.querySelector(".picture"),{opacity: 0, ease:Power4, duration: .5})   //"this" means the part where the cursor is currently moving
    
        })
    })
}
function paraAnimation(){
    var clutter = "";
    document.querySelector(".textPara")
    .textContent.split("")
    .forEach(function(e){
        if(e===" ") clutter += `<span>&nbsp;</span>`
        clutter += `<span>${e}</span>`
    }) //split is been used for split each letter in the paragraph and so we can make each letter an span
    
    document.querySelector(".textPara").innerHTML= clutter;
    
    gsap.set(".textPara span" ,{
        opacity: .1
    })
    gsap.to(".textPara span",{
        scrollTrigger: {
            trigger: ".para",
            start: "top 90%",
            bottom: "bottom 90%",
            // markers: true,
            scrub: 2
        },
        opacity: 1,
        stagger: .001,
        ease: Power4
    })

}

function loco(){
    (function () {
        const locomotiveScroll = new LocomotiveScroll();
    })();
}

function capsuleAnimation(){
    gsap.to(".capsule:nth-child(2)",{
        scrollTrigger: {
            trigger: ".capsules",
            start: "top 70%",
            end: "bottom bottom",
            scrub: 1,
        },
        y: 0,
        ease: Power4
    })

}

function bodyColorChange(){
    document.querySelectorAll(".section")
    .forEach(function(e){
        ScrollTrigger.create({
            trigger: e,
            start: "top 50%",
            end: "bottom 50%",
            // markers: true,
            onEnter: function(){
                document.body.setAttribute("theme", e.dataset.color);
            },
            onEnterBack: function(){
                document.body.setAttribute("theme", e.dataset.color);
    
            }
        })
    })   //ScrollTrigger can be created without using gsap because it would directly target body tag

}

loco();

HomePageAnimations();

RealPageAnimation();

teamAnimation();

paraAnimation();

capsuleAnimation();

bodyColorChange();