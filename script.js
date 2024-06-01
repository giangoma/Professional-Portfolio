var tl = gsap.timeline({scrollTrigger:{
    trigger: ".two",
    start: "0% 95%",
    end: "85% 50%",
    scrub: true,
    // markers: true,
}})

tl.to("#selfie",{
    top: "120%",
    left: "0%"
}, 'smth')
tl.to("#doodle",{
    top:"160%",
    left: "23%"
}, 'smth')
tl.to("#smth",{
    width: "15%",
    top:"160%",
    right: "10%"
}, 'smth')
tl.to("#operate",{
    top:"110%",
    rotate: "130deg",
    left: "70%"
}, 'smth')
tl.to("#operate2",{
    top:"110%",
    rotate: "130deg",
    left: "0%"
}, 'smth')


var tl2 = gsap.timeline({scrollTrigger:{
    trigger: ".three",
    start: "0% 95%",
    end: "20% 50%",
    scrub: true,
    // markers: true,
}})

tl2.from(".vector1",{
    rotate: "-90deg",
    left: "-100%",
    top: "110%"
}, 'ca')
tl2.from("#resume-qr",{
    rotate: "-90deg",
    top: "110%",
    left: "-100%",
}, 'ca')

tl2.from(".vector2",{
    rotate: "90deg",
    left: "100%",
    top: "110%"
}, 'ca')
tl2.from("#operate4",{
    rotate: "90deg",
    top: "110%",
    left: "100%",
}, 'ca')

tl2.to("#doodle",{
    width:"18%",
    left: "42%",
    top: "204%"
}, 'ca')
tl2.to("#selfie",{
    width:"35%",
    top: "210%",
    left: "33%",
}, 'ca')
