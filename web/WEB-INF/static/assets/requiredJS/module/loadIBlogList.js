require(["template", "jquery", 'underscore','utils',"functions", 'text', 'text!commonTpl/blog_item.tpl'], function (template) {
    $.ajax( {
        type : "GET",
        url : "json/blog_list.json",
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
                //require("functions");

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
});