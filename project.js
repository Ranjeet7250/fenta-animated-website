var tl=gsap.timeline({
    scrollTrigger:{
        trigger:".two",
        start:"0% 95%",
        end:"70% 60%",
        scrub:true,
        // markers:true
    }
})
tl.to("#fanta",{
    top:"110%",
    right:"65%",
},'orange')


tl.to("#slice",{
    top:"150%",
    left:"19%",
},'orange')

tl.to("#orange",{
    width:"15%",
    height:"25%",
    top:"170%",
    left:"70%",
},'orange')

tl.to("#leaf",{
    height:"30%",
    rotate:"190deg",
    top:"100%",
    left:"80%",
},'orange')

tl.to("#leaf2",{
    height:"30%",
    rotate:"190deg",
    top:"115%",
    left:"0%",
},'orange')
var tl2=gsap.timeline({
    scrollTrigger:{
        trigger:".three",
        start:"0% 95%",
        end:"70% 60%",
        scrub:true,
        // markers:true
    }
})
tl2.to("#fanta",{
    top:"205%",
    right:"30%",
},'can')
tl2.to("#slice",{
    left:"44%",
    top:"195%",
},'can')


