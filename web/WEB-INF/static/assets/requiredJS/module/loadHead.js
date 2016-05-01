require(["template", "jquery", 'underscore','utils', 'text', 'text!commonTpl/head.tpl', 'text!commonTpl/nav.tpl'], function (template) {
    $.ajax( {
        type : "GET",
        url : "json/head.json",
        success : function(data) {
            var headTpl = require('text!commonTpl/head.tpl'),
                navTpl = require('text!commonTpl/nav.tpl'),
                nav = data.nav,
                navText = "";
            if (nav && nav.length > 0) {
                _.each(nav, function (element, index, list) {
                    var item = {
                        'name': element.name,
                        'href': element.href || 'javascript:;',
                        'check': element.check,
                        'child': element.child
                    };
                    navText += getNav(item);
                });
                var navData = {
                    'navText': navText,
                    'logoSrc':data.logoSrc,
                    'logoLink':data.logoLink
                };

                var render = template.compile(headTpl);
                var html = render(navData);
                document.getElementById('site_header').innerHTML = html;
                $("#nav_menu").idealtheme({});

            };
            //通过迭代的方式创建无限级的顶部菜单栏
            function getNav(item) {
                if (item.child && item.child.length > 0) {
                    var childText = "";
                    _.each(item.child, function (element) {
                        var childItem = {
                            'name': element.name,
                            'href': element.href || 'javascript:;',
                            'check': element.check,
                            'child': element.child
                        };
                        childText += getNav(childItem);
                    });
                }
                Jutils.extend(item, {'childText': childText}, true);
                var render = template.compile(navTpl);
                var html = render(item);
                return html;
            }
        },
        error : function() {
            console.log("无法渲染head");
        }
    });



    $.fn.idealtheme = function(options){
        var whatTheLastWidth = getScreenWidth();
        var ifisdescktop = false;
        var MqL = 1170;

        var settings = {
            duration: 300,
            delayOpen: 0,
            menuType: "horizontal", // horizontal - vertical
            position: "right", // right - left
            parentArrow: true,
            hideClickOut: true,
            submenuTrigger: "hover",
            backText: "Back to ",
            clickToltipText: "Click",
        };
        $.extend( settings, options );
        var nav_con = $(this);
        var $nav_con_parent = nav_con.parent("#main_nav");
        var menu = $(this).find('#navy');

        //=====> Mega Menu Top Space
        function megaMenuTop(){
            $(menu).find('.has_mega_menu').each(function() {
                var top_space = $(this).parent('li').outerHeight();
                $(this).find(' > .mega_menu').css({"top" : top_space+"px", "width" : "100%"});
            });
        }
        megaMenuTop();

        //=====> Vertical and Horizontal
        if(settings.menuType == "vertical"){
            $(menu).addClass("vertical_menu");
            if(settings.position == "right"){
                $(menu).addClass("position_right");
            }else{
                $(menu).addClass("position_left");
            }
        }else{
            $(menu).addClass("horizontal_menu");
        }

        //=====> Add Arrows To Parent li
        if(settings.parentArrow === true){
            $(menu).find("li.normal_menu li, li.has_image_menu").each(function(){
                if($(this).children("ul").length > 0){
                    $(this).children("a").append("<span class='parent_arrow normal_menu_arrow'></span>");
                }
            });

            $(menu).find("ul.mega_menu li ul li, .tab_menu_list > li").each(function(){
                if($(this).children("ul").length > 0){
                    $(this).children("a").append("<span class='parent_arrow mega_arrow'></span>");
                }
            });
        }

        function TopSearchFunc(){
            $(".top_search").each(function(index, element) {
                var top_search = $(this);
                top_search.submit(function(event){
                    event.stopPropagation();
                    if(top_search.hasClass("small_top_search")){
                        top_search.removeClass("small_top_search");
                        top_search.addClass("large_top_search");
                        if(getScreenWidth() <= 315 ){
                            top_search.siblings("#top_cart").animate({opacity: 0});
                        }
                        top_search.siblings("#nav_menu:not(.mobile_menu), .logo_container").animate({opacity: 0});
                        return false;
                    }

                });
                $(top_search).on("click touchstart", function(e){
                    e.stopPropagation();
                });
                $(document).on("click touchstart", function(e){
                    if(top_search.hasClass("large_top_search")){
                        top_search.removeClass("large_top_search");
                        top_search.addClass("small_top_search");
                        if(getScreenWidth() <= 315 ){
                            top_search.siblings("#top_cart").animate({opacity: 1});
                        }
                        top_search.siblings("#nav_menu:not(.mobile_menu), .logo_container").animate({opacity: 1});
                    }
                });
            });
            if(getScreenWidth() < 1190){
                $("#navigation_bar").find(".top_search").addClass("small_top_search");
            }else{
                $("#navigation_bar").find(".top_search").removeClass("small_top_search");
            }
        }
        var top_search_func = new TopSearchFunc();

        $(window).resize(function() {
            top_search_func = new TopSearchFunc();
            megaMenuTop();
            if( whatTheLastWidth > 992 && getScreenWidth() <= 992 && $("body").hasClass("header_on_side")){
                $(menu).slideUp();
            }
            if( whatTheLastWidth <= 992 && getScreenWidth() > 992 && $("body").hasClass("header_on_side")){
                $(menu).slideDown();
            }

            if(whatTheLastWidth <= 992 && getScreenWidth() > 992 && !$("body").hasClass("header_on_side") ){
                resizeTabsMenu();
                removeTrigger();
                playMenuEvents();
            }
            if(whatTheLastWidth > 992 && getScreenWidth() <= 992){
                releaseTrigger();
                playMobileEvents();
                resizeTabsMenu();
                $(menu).slideUp();
            }
            whatTheLastWidth = getScreenWidth();
            return false;
        });

        //======> After Refresh
        function ActionAfterRefresh(){
            if(getScreenWidth() <= 992 || $("body").hasClass("header_on_side") ){
                releaseTrigger();
                playMobileEvents();
                resizeTabsMenu();

            } else {
                resizeTabsMenu();
                removeTrigger();
                playMenuEvents();
            }
        }

        var action_after_ref = new ActionAfterRefresh();

        //======> Mobile Menu
        function playMobileEvents(){
            $(".nav_trigger").removeClass("nav-is-visible");
            $(menu).find("li, a").unbind();
            if($(nav_con).hasClass("mobile_menu")){
                $(nav_con).find("li.normal_menu").each(function(){
                    if($(this).children("ul").length > 0){
                        $(this).children("a").not(':has(.parent_arrow)').append("<span class='parent_arrow normal_menu_arrow'></span>");
                    }
                });
            }
            megaMenuEvents();

            $(menu).find("li:not(.has-children):not(.go-back)").each(function(){
                $(this).removeClass("opened_menu");
                if($(this).children("ul").length > 0){
                    var $li_li_li = $(this);
                    $(this).children("a").on("click", function(event){
                        var curr_act = $(this);

                        if(!$(this).parent().hasClass("opened_menu")){
                            $(this).parent().addClass("opened_menu");
                            $(this).parent().siblings("li").removeClass("opened_menu");
                            if($(this).parent().hasClass("tab_menu_item")){
                                $(this).parent().addClass("active");
                                $(this).parent().siblings("li").removeClass("active");
                            }
                            $(this).siblings("ul").slideDown(settings.duration);
                            $(this).parent("li").siblings("li").children("ul").slideUp(settings.duration);
                            setTimeout(function(){
                                var curr_position = curr_act.offset().top;
                                $('body,html').animate({
                                        //scrollTop: curr_position ,
                                    }, {queue:false, duration: 900, easing:"easeInOutExpo"}
                                );
                            }, settings.duration);

                            return false;
                        }
                        else{
                            $(this).parent().removeClass("opened_menu");
                            $(this).siblings("ul").slideUp(settings.duration);
                            if($li_li_li.hasClass("mobile_menu_toggle") || $li_li_li.hasClass("tab_menu_item")){
                                return false;
                            }
                        }
                    });
                }
            });
        }

        function megaMenuEvents(){
            $(menu).find('li.has_mega_menu ul').removeClass("moves-out");
            $(menu).find('.go-back, .mega_toltip').remove();
            $(menu).find('li.has_mega_menu > ul').hover(function() {

                $(this).find(".mega_menu_in ul").each(function(index, element) {
                    var $mega_ul = $(this);
                    var its_height = 0;

                    $mega_ul.children('li').each(function(index, element) {
                        var ul_li_num = $(this).innerHeight();
                        its_height += ul_li_num;
                    });
                    $mega_ul.attr("data-height", its_height);
                });
            });
            $(menu).find('ul.mega_menu li li').each(function(index, element) {
                var $mega_element = $(this);
                if($mega_element.children('ul').length > 0){
                    $mega_element.addClass("has-children");
                    $mega_element.children('ul').addClass("is-hidden");
                }
            });
            $(menu).find('ul.mega_menu li.has-children').children('ul').each(function(index, element) {
                var $mega_ul = $(this);
                var its_height = 0;
                $mega_ul.children('li').each(function(index, element) {
                    var ul_li_num = $(this).innerHeight();
                    its_height += ul_li_num;
                });
                $mega_ul.attr("data-height", its_height);

                var $mega_link = $mega_ul.parent('li').children('a');
                var $mega_title = $mega_ul.parent('li').children('a').text();
                $("<span class='mega_toltip'>" + settings.clickToltipText +"</span>").prependTo($mega_link);

                if(!$mega_link.find('.go-back').length){
                    $("<li class='go-back'><a href='#'>" + settings.backText + $mega_title +"</a></li>").prependTo($mega_ul);
                }

            });

            $(menu).find('ul.mega_menu li.has-children').children('a').on('click', function(event){
                event.preventDefault();
                var selected = $(this);

                if( selected.next('ul').hasClass('is-hidden') ) {
                    var ul_height = parseInt(selected.next('ul').attr("data-height"));
                    var link_height = parseInt(selected.innerHeight());
                    var all_height = ul_height + link_height;

                    selected.addClass('selected').next('ul').removeClass('is-hidden').end().parent('.has-children').parent('ul').addClass('moves-out');
                    selected.closest('.mega_menu_in').animate({height: all_height});

                    selected.parent('.has-children').siblings('.has-children').children('ul').addClass('is-hidden').end().children('a').removeClass('selected');
                    //====> if is mobile
                    if(selected.closest('#nav_menu').hasClass("mobile_menu")){
                        selected.parent('.has-children').removeClass("mega_parent_hidden").prevAll('li').slideUp(settings.duration);
                    }

                }

            });
            //submenu items - go back link
            $('.go-back').on('click', function(){
                var link_height = parseInt($(this).parent("ul").parent("li").parent("ul").attr("data-height"));

                $(this).parent('ul').addClass('is-hidden').parent('.has-children').parent('ul').removeClass('moves-out');
                $(this).closest('.mega_menu_in').animate({height: link_height});
                //====> if is mobile
                if($(this).closest('#nav_menu').hasClass("mobile_menu")){
                    $(this).parent('ul').parent('li').removeClass("mega_parent_hidden").prevAll('li').slideDown(settings.duration);
                }

                return false;
            });
        }
        //======> Desktop Menu
        function playMenuEvents(){
            $(menu).children('li').children('ul').hide(0);
            $(menu).find("li, a").unbind();
            $(menu).slideDown(settings.duration);
            $(menu).find('ul.tab_menu_list').each(function(index, element) {
                var tab_link = $(this).children('li').children('a');
                $("<span class='mega_toltip'>" + settings.clickToltipText +"</span>").prependTo(tab_link);
                $(this).children('li').on('mouseover', function(){
                    if(!$(this).hasClass('active')){
                        $(this).children('ul').stop().fadeIn();
                        $(this).siblings().children('ul').stop().fadeOut();
                        $(this).addClass('active');
                        $(this).siblings().removeClass('active');
                    }
                });
            });
            megaMenuEvents();
            $(menu).find('li.normal_menu, > li').hover(function() {
                var li_link = $(this).children('a');
                $(this).children('ul').stop().fadeIn(settings.duration);
            }, function() {
                $(this).children('ul').stop().fadeOut(settings.duration);
            });
        }
        //======> Trigger Button Mobile Menu
        function releaseTrigger(){
            $(nav_con).find(".nav_trigger").unbind();
            $(nav_con).addClass('mobile_menu');
            $nav_con_parent.addClass('has_mobile_menu');

            $(nav_con).find('.nav_trigger').each(function(index, element) {
                var $trigger_mob = $(this);
                $trigger_mob.on('click touchstart', function(e){
                    e.preventDefault();
                    if($(this).hasClass('nav-is-visible')){
                        $(this).removeClass('nav-is-visible');
                        $(menu).slideUp(settings.duration);

                    }else{
                        $(this).addClass('nav-is-visible');
                        $(document).unbind("click");
                        $(document).unbind("touchstart");
                        $(menu).slideDown(settings.duration, function(){
                            $(menu).on("click touchstart", function(event){
                                event.stopPropagation();
                            });
                            $(document).on('click touchstart', function(event){
                                if($trigger_mob.hasClass('nav-is-visible') && getScreenWidth() <= 992){
                                    $trigger_mob.removeClass('nav-is-visible');
                                    $(menu).slideUp(settings.duration);
                                }
                            });

                        });
                    }
                });

            });
        }
        //=====> get tabs menu height
        function resizeTabsMenu(){
            function thisHeight(){
                return $(this).outerHeight();
            }
            $.fn.sandbox = function(fn) {
                var element = $(this).clone(), result;
                element.css({visibility: 'hidden', display: 'block'}).insertAfter(this);
                element.attr('style', element.attr('style').replace('block', 'block !important'));
                var thisULMax = Math.max.apply(Math, $(element).find("ul:not(.image_menu)").map(thisHeight));
                result = fn.apply(element);
                element.remove();
                return thisULMax;
            };
            $(".tab_menu").each(function() {
                $(this).css({"height" : "inherit"});
                if(!$(nav_con).hasClass("mobile_menu")){
                    var height = $(this).sandbox(function(){ return this.height(); });
                    $(this).height(height);
                }

            });
        }
        resizeTabsMenu();
        //=====> End get tabs menu height
        function removeTrigger(){
            $(nav_con).removeClass('mobile_menu');
            $nav_con_parent.removeClass('has_mobile_menu');
        }
        //----------> sticky menu
        enar_sticky();
    };
    function getScreenWidth(){
        return document.documentElement.clientWidth || document.body.clientWidth || window.innerWidth;
    }
    function enar_sticky(){
        if ( $.isFunction($.fn.sticky) ) {
            var $navigation_bar = $("#navigation_bar");
            $navigation_bar.unstick();
            var mobile_menu_len = $navigation_bar.find(".mobile_menu").length;
            var side_header = $(".header_on_side").length;
            if( mobile_menu_len === 0 && side_header === 0){
                $navigation_bar.sticky({
                    topSpacing : 0,
                    className : "sticky_menu",
                    getWidthFrom : "body"
                });
            }else{
                $navigation_bar.unstick();
            }
        }
    }
});