// nav
$('.nav-area .global').click(function(){
    $('.global-area .lang-list').toggleClass('show');
});

$(window).scroll(function(){
    $('.global-area .lang-list').removeClass('show');
});
//비주얼
ScrollTrigger.create({
    trigger:".sec-visual",
    start:"300px 0",
    onEnter:function(){
        $('.header').addClass('show')
    },
    onLeaveBack:function(){
        $('.header').removeClass('show')
    }
})

const section1 = gsap.timeline({
    scrollTrigger:{
        trigger:".sec-visual",
        start:"0% 0%",
        end:"100% 100%",
        scrub:0
    }
})

section1.to('.sec-visual .sticky',{'--opacity':1},'a')
section1.to('.sec-visual .visual-desc01',{opacity:1},'a')
section1.to('.sec-visual .visual-desc01',{opacity:0})
section1.to('.sec-visual .visual-desc02',{opacity:1})
section1.to('.sec-visual .visual-desc02',{opacity:0})
section1.to('.sec-visual .visual-desc03',{opacity:1})
section1.to('.sec-visual .visual-desc03',{opacity:0})
section1.to('.sec-visual .visual-desc04',{opacity:1})

// 새로운방식
const section2 = gsap.timeline({
    scrollTrigger:{
        trigger:".sec-showcase",
        start:"0% 0%",
        end:"100% 100%",
        scrub:0
    }
})

section2.to('.sec-showcase .sticky',{'--opacity':1},'a')
section2.to('.sec-showcase .showcase-inner',{opacity:1},'a')
section2.to('.sec-showcase .showcase-text:nth-child(1)',{xPercent:100},'b')
section2.to('.sec-showcase .showcase-text:nth-child(3)',{xPercent:-100},'b')
section2.to('.sec-showcase .sticky',{'--opacity':0},'c')
section2.to('.sec-showcase .showcase-inner',{opacity:0},'c')
section2.to('.sec-showcase .img1',{height:0})
section2.to('.sec-showcase .img2',{height:0})
section2.to('.sec-showcase .sticky',{'--opacity':1},'d')
section2.to('.sec-showcase .showcase-text-last',{autoAlpha:1},'d')

// 개인사업자 크리에이터
ScrollTrigger.create({
    trigger:".sec-individual",
    start:"0% 0%",
    onEnter:function(){
        $('.header').addClass('dark')
    },
    onLeaveBack:function(){
        $('.header').removeClass('dark')
    }
})

const section3 = gsap.timeline({
    scrollTrigger:{
        trigger:".sec-individual .value-area",
        start:"0% 80%",
        end:"100% 100%",
        scrub:0
    }
})
section3.to('.sec-individual .value-area',{'--valueBarWidth':'420px'},'a')
section3.to('.sec-individual .value-area p:nth-child(1) span',{xPercent:-172},'a')
section3.to('.sec-individual .value-area p:nth-child(3) span',{xPercent:134},'a')


// 배경전환
ScrollTrigger.create({
    trigger:`[data-theme="dark"]`,
    start:"0% 60%",
    end:"100% 40%",
    toggleClass:{targets:"body",className:"dark"},
    onEnter:function(){
        $('.header').removeClass('dark');
    },
    onLeaveBack:function(){
        $('.header').addClass('dark');
    },
    onEnterBack:function(){
        $('.header').removeClass('dark');
    },
    onLeave:function(){
        $('.header').addClass('dark');
    },

})

// 아이덴티티
section4 = gsap.to('.sec-posibility .posibility-area',{
    scrollTrigger:{
        trigger:".sec-posibility",
        start:"20% 0%",
        end:"100% 100%",
        scrub:0,
        invalidateOnRefresh: true,
    },
    xPercent:-100,
    x:function(){
        return window.innerWidth;
    }
})

// data id 정보
const section5 = gsap.timeline({
    scrollTrigger:{
        trigger:".feature-area",
        start:"0% 95%",
        end:"100% 80%",
        scrub:0,
    }
})
section5.from('.feature-area .box-left',{xPercent:-25},'a')
section5.from('.feature-area .box-right',{xPercent:50},'a')

const section5_1 = gsap.timeline({
    scrollTrigger:{
        trigger:".feature-area",
        start:"0% 40%",
        end:"100% 30%",
        scrub:0,
        onEnter:function(){
            gsap.to('.feature-area',0.3,{'--blurOpacity':1})
        },
        onLeaveBack:function(){
            gsap.to('.feature-area',0.3,{'--blurOpacity':0})
        },
    }
})
section5_1.from('.feature-area p',{opacity:0})


ScrollTrigger.create({
    trigger:".feature-area",
    start:"0% 0",
    end:"100% 40%",
    onEnter:function(){
        $('.security-item > li:nth-child(1) .sucurity-inner .img-area, .security-item > li:nth-child(2) .sucurity-inner .img-area').addClass('show');
    }   
})

const section6_1 = gsap.timeline({
    scrollTrigger:{
        trigger:".security-wrap",
        start:"0% 0%",
        end:"100% 100%",
        scrub:0,
        invalidateOnRefresh: true,
        onEnter:function(){
            $('.security-item > li:nth-child(3) .sucurity-inner .img-area').addClass('show');
        }
    }
})
section6_1.to('.security-wrap .sticky-inner',{
    x:function(){
        return $('.security-wrap h3').innerWidth()*-1;
    }
})
section6_1.to('.security-item li:nth-child(2)',{
    xPercent:-100,
    x:-40
},'a')
section6_1.to('.security-item li:nth-child(3)',{
    xPercent:-100*2,
    x:-40*2
},'a')
section6_1.to('.security-item li:nth-child(4)',{
    xPercent:-100*3,
    x:-40*3
},'a')
section6_1.to('.sucurity-last img.img-unlock',0.2,{autoAlpha:0},'a')
section6_1.to('.sucurity-last img.img-lock',0.2,{autoAlpha:1,delay:0.2},'a')
section6_1.to('.sucurity-last img.img-lock',{autoAlpha:0})


const section6_2 = gsap.timeline({
    scrollTrigger:{
        trigger:".service-wrap",
        start:"0% 0%",
        end:"100% 100%",
        scrub:0,
        onEnter:function(){
            $('.security-wrap').removeClass('show');
            $('.service-wrap').addClass('show');
        },
        onLeaveBack:function(){
            $('.security-wrap').addClass('show');
            $('.service-wrap').removeClass('show');
        },
    }
})
section6_2.to('.service-top .card-area span',0.1,{autoAlpha:1})



ScrollTrigger.create({
    trigger:".service-bottom",
    start:"0% 40%",
    onEnter:function(){
        $('.service-desc02').addClass('on');
    }
})


const section6_3 = gsap.timeline({
    scrollTrigger:{
        trigger:".service-bottom",
        start:"0% 0%",
        end:"100% 100%",
        scrub:0,
        onEnter:function(){
            $('.service-desc02 .card-area').addClass('show');
            $('.service-top').addClass('hide');
        },
        onLeaveBack:function(){
            $('.service-desc02 .card-area').removeClass('show');
            $('.service-top').removeClass('hide');
        },
    }
})
section6_3.to('.service-bottom .service-desc02 li:nth-child(2)',{
    xPercent:-100,
    x:-40
},'a')
section6_3.to('.service-bottom .service-desc02 li:nth-child(3)',{
    xPercent:-100*2,
    x:-40*2
},'a')
section6_3.to('.service-bottom .service-desc02 li:nth-child(4)',{
    xPercent:-100*3,
    x:-40*3
},'a')
section6_3.to('.service-desc02 .card-area',0.2,{'--bgOpacity':1},'b')
section6_3.to('.service-bottom .text-box',0.2,{autoAlpha:1},'b')


// 재능자산
const section7 = gsap.timeline({
    scrollTrigger:{
        trigger:".blockchain-area",
        start:"0% 70%",
        end:"100% 100%",
        scrub:0,
    }
})
section7.to('.blockchain-area',{'--bcBarWidth':'420px'},'a')
section7.to('.blockchain-area .block-text01 span',{xPercent:-114},'a')
section7.to('.blockchain-area .block-text03 span',{xPercent:120},'a')
 


ScrollTrigger.create({
    trigger:".finance-wrap",
    start:"0% 30%",
    onEnter:function(){
        $('.finance-area').addClass('on');
    }
})


section7_2 = gsap.to('.finance-wrap .inner',{
    scrollTrigger:{
        trigger:".finance-wrap",
        start:"0% 0%",
        end:"100% 100%",
        scrub:0,
        invalidateOnRefresh: true,
        onEnter:function(){
            $('.finance-wrap .finance-list03').addClass('on');
            $('.finance-wrap .down').addClass('show');
        },
        onLeaveBack:function(){
            $('.finance-wrap .down').removeClass('show');
        },
        onLeave:function(){
            $('.finance-wrap .down').removeClass('show');
        },
        onEnterBack:function(){
            $('.finance-wrap .down').addClass('show');
        },
        onUpdate:self=>{
            if(self.progress >= 0.5){
                $('.finance-wrap .name01').removeClass('show');
                $('.finance-wrap .name02').addClass('show');
            }else{
                $('.finance-wrap .name01').addClass('show');
                $('.finance-wrap .name02').removeClass('show');
            }
        }
    },
    xPercent:-100,
    x:function(){
        return window.innerWidth;
    },
    duration:3
})

// CHOI SORA
const section8 = gsap.timeline({
    scrollTrigger:{
        trigger:".sec-creator",
        start:"0% 0%",
        end:"100% 100%",
        scrub:0,
    }
})
section8.to('.sec-creator .text-box',{autoAlpha:1})
section8.to('.sec-creator .scroll-down',{autoAlpha:1})
section8.to('.sec-creator .text-box',{autoAlpha:0},'a')
section8.to('.sec-creator .scroll-down',{autoAlpha:0},'a')

section9 = gsap.to('.sec-use .inner',{
    scrollTrigger:{
        trigger:".sec-use",
        start:"0% 0%",
        end:"100% 100%",
        scrub:0,
        invalidateOnRefresh: true,
        onEnter:function(){
            $('.sec-use .use-type01').addClass('on');
        }        
    },
    xPercent:-100,
    x:function(){
        return window.innerWidth;
    },
})


// 스크롤
let lastScroll = 0;
$(window).scroll(function(){
    current = $(this).scrollTop();
    winHeight = $(window).height();
    bottomScroll = $(document).height() - winHeight;
    const scShow = $('.sec-showcase').offset().top;
    const foot = $('.footer').offset().top;
    if(current + winHeight > foot){
        $('.btn-top').addClass('ab');
    }else if(current > lastScroll){
        $('.btn-top').removeClass('show');
    }else if(current < scShow){
        $('.btn-top').removeClass('show');
    }else{
        $('.btn-top').addClass('show');
        $('.btn-top').removeClass('ab');
    }
    lastScroll = current;    
    if(Math.floor(current) + 1 >= bottomScroll){        
        $('.sec-join').addClass('show');
    }else{
        $('.sec-join').removeClass('show');
    }
});
$('.btn-top').click(function(){
    $('html').animate({scrollTop:0}, 1000);
});