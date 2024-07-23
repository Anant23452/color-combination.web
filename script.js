function timeline1(){
    var tl = gsap.timeline({
        scrollTrigger: {
            trigger: '.home',
            start: 'top top',
            scrub: 1,
            // markers: true,
            pin: true,
            end:"bottom -250%"
        }
    })
    tl
        .to(".circle .btm img", {
            rotate: "-180deg",
            scale: 1,
            duration: 1,
            stagger: .1,
            ease: Power1
        }, "sametimemechalege")
    
        .to(".cimage img", {
            scale: "0",
            duration: 1,
            stagger: .1,
            ease: Power1
        }, "sametimemechalege")
    
        .to(".centerimg h5", {
            opacity: 0,
            duration: 1,
            stagger: .1,
            ease: Power1
        }, "sametimemechalege")
    
        .to(".circle", {
            scale: ".6",
            duration: 2,
            stagger: .1,
            ease: Power1
        }, "sametimemechalege")
    
        .to(".circle .top img", {
            scale: "1",
            duration: 1,
            stagger: .1,
            ease: Power1
        }, "sametimemechalege")
    
        .to(".overlay>h1", {
            bottom: "-50%",
            ease: Power1
        }, "sametimemechalege")
    
        .to(".gola", {
            top: "50%",
            scale:2,
            ease: Power1
        }, "sametimemechalege")
    
        .to(".gola", {
            opacity:0,
            duration:1,
            ease: Power1
        }, "hello")
    
        .to(".smcircle", {
            scale: "0",
            duration:2,
            ease: Power1
        }, "hello")
    
        .to(".circle", {
            scale: "0",
            ease: Power1
        }, "hello")
    
        .to(".pf", {
            rotate: "0",
            bottom:"2%",
            duration:2,
            ease: Power1
        }, "hello")
        
        .to(".pinkbox", {
            rotate: "0",
            top:"0%",
            duration:5,
            ease: Power1
        }, "hello")
        .to(".pinkbox", {
            rotate: "0",
            top:"-60%",
            ease: Power1
        }, )
        .to(".pinkbox>h2", {
            rotate: "0",
            top:"0%",
            ease: Power1
        }, "hello")
        .to(".pinkbox>h4", {
            rotate: "0",
            top:"0%",
            ease: Power1
        }, "hello")
        .to(".scircle", {
            rotate: "0",
            top:"50%",
            ease: Power1,
            stagger: .2,
            duration:3
        })
    
    
}
timeline1();
 
function timeline2() {
 var tl2  = gsap.timeline(
 {
   scrollTrigger:{
    trigger:".second",
    scrub:1,
    start: "top top",
    markers:true,
    end: "bottom -150%",
    pin:true
   }
 })
 tl2.from(".scircle", {
    y:"100%",
    stagger: .1,
    ease: Power1,
    
})
 tl2.to(".scircle", {
    left:"50%",
    stagger: .1,
    ease: Power1,
    
})
 tl2.to(".pink", {
    scale:10,
    stagger: .1,
    ease: Power1,
    
})
 tl2.to(".pink", {
    background: "linear-gradient(to right,#d5a7b4,#B4AAD5)",
    
    ease: Power1,
    
},"stop")
 tl2.to(".stop>h1", {
   left:"-150%",
   duration: 3,
    ease: Power1,
    
},"stop")
 tl2.from(".sbtm>h3", {
   y:"50%",
   opacity: 0,
   duration: 3,
    ease: Power1,
    stagger:.1,
    
},"stop")
}
timeline2();