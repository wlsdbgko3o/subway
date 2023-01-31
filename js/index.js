$("document").ready(function(){
    
    const $nav = $(".header .nav ul");
    const $header = $(".header");
    const $submenu = $(".header .submenu");

    $nav.mouseover(function(){
        $submenu.addClass("on")
        $header.addClass("on")
    }).mouseout(function(){
        $submenu.removeClass("on")
        $header.removeClass("on")
    })

    $submenu.mouseover(function(){
        $submenu.addClass("on")
        $header.addClass("on")
    }).mouseout(function(){
        $submenu.removeClass("on")
        $header.removeClass("on")
    })


    const swiper = new Swiper(".main-slide",{
        loop:true,
        pagination:{
            el: ".swiper-pagination",
            type: "progressbar"
        }
    })
    if(swiper.slides.length - 2 > 9){
        $(".swiper-index span").eq(1).text((swiper.slides.length - 2));
    }else{
        $(".swiper-index span").eq(1).text("0"+(swiper.slides.length - 2));
    }


    swiper.on("slideChange", function(){
        console.log(swiper.realIndex, swiper.slides.length - 2)
        if(swiper.realIndex+1 > 9){
            $(".swiper-index span").eq(0).text((swiper.realIndex+1));
        }else{
            $(".swiper-index span").eq(0).text("0"+(swiper.realIndex+1));
        }
    })
    const swiper2 = new Swiper(".notice-swiper",{
        loop:true,
        // direction: "vertical", // 위아래
        navigation:{
            nextEl : ".btn-next",
            prevEl : ".btn-prev",
        }
    })
    const swiper3 = new Swiper(".popular-area",{
        loop:true,
        direction: "vertical", // 위아래
        autoplay:true
    })

    // event 배너 

    const $event_list = $(".event-list ul li");
    const $event_img = $(".event-img img");

    $("a").click(function(e){
        e.preventDefault();
    })

    $event_list.click(function(){
        let i = $(this).index()+2;
        $event_img.attr("src","images/eventbanner"+i+".png")
        
    })

// subway menu

    const $sub_menu_slide = $(".subway-menu-content .menu-content")
    const $sub_menu_nav = $(".subway-menu-content ul li")
    $sub_menu_slide.eq(0).show()
    $sub_menu_nav.eq(0).addClass("on")

    const swiper4 = new Swiper(".menu-content",{
        loop:true,
        // direction: "vertical", // 위아래
        slidesPerView: 'auto',
        spaceBetween: 50,
        navigation:{
            nextEl : ".swiper-button-next",
            prevEl : ".swiper-button-prev",
        },
        // 슬라이더가 불러올 때마다 새로고침을 해주는 역할 > display:none > block 변경되었을때 먹통되는걸 방지
        observer: true,
        observeParents: true
    })


    $sub_menu_nav.click(function(){
        let i = $(this).index();
        $sub_menu_nav.removeClass("on").eq(i).addClass("on")
        $sub_menu_slide.hide().eq(i).show();
        swiper4[i].slideTo(0,100) // 원 위치로 돌아가는 코드
    })

// sns

    const $tab_nav = $(".subway-sns-content .content-wrap > ul li");
    const $tab_list = $(".subway-sns-content .tab-content");
    $tab_list.eq(0).show();
    $tab_nav.eq(0).addClass("on")

    $tab_nav.click(function(){
        let i = $(this).index();
        $tab_list.hide().eq(i).show();
        $tab_nav.removeClass("on").eq(i).addClass("on")

    })



})