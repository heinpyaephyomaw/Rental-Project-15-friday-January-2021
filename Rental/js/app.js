$(document).ready(function(){

    $(".navbar-toggler").click(function(){
        let show = $(".navbar-collapse").hasClass("show");
        if(show){
            $(".m").removeClass("feather-x");
            $(".m").addClass("feather-menu  ");
        }else{
            $(".m").removeClass("feather-menu");
            $(".m").addClass("feather-x");
        }
    });


    $('.venobox').venobox({
        framewidth : '600px',                            // default: ''
        frameheight: 'auto',                            // default: ''
        border     : '0px',                             // default: '0'
        bgcolor    : 'gray',                          // default: '#fff'
        titleattr  : 'data-title',                       // default: 'title'
        numeratio  : true,                               // default: false
        infinigall : true,                               // default: false
        numerationColor: 'red',
        share      : ['facebook', 'twitter', 'download'] // default: []
    });


    let screenHeight = (window).innerHeight;

    $(window).scroll(function(){
        let res = $(this).scrollTop();
        if(res >= screenHeight){
            $(".first").removeClass("menu");
            $(".first").addClass("menu-two")
        }else{
            $(".first").removeClass("menu-two");
            $(".first").addClass("menu")
            setActive("home")
        }
    });


    function setActive(current){
        $(".nav-link").removeClass("under");
        $(`.nav-link[href="#${current}"]`).addClass("under");
    }

    function navScroll(){
        let currentSection = $(`section[id]`);
        currentSection.waypoint(function(direction){
            if(direction == 'down'){
                let output = $(this.element).attr('id');
                setActive(output)
            }
        });

        currentSection.waypoint(function(direction){
            if(direction == 'up'){
                let output = $(this.element).attr('id');
                setActive(output)
            }
        });


    }

    navScroll();
    //
    $(window).on("load",function(){
        $(".load").fadeOut(1000)
    })


    wow = new WOW(
        {
            boxClass:     'wow',      // default
            animateClass: 'animate__animated', // default
            offset:       0,          // default
            mobile:       true,       // default
            live:         true        // default
        }
    )
    wow.init();









})