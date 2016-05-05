require([
    "template",
    "jquery",
    'underscore',
    "renderUtils",
    "plugins",
    "mediaelement_and_player",
    "isotope",
    "utils",
    "sweetAlert",
    "paging",
    "loadHead"], function (template) {
    $('#preloader').remove();
    $.ajax( {
        type : "GET",
        url : "json/project_list.json",
        success : function(data) {
            renderUtils.renderProjectList(data,"project_list");
            renderUtils.bindEvent();
        },
        error : function() {
            console.log("无法渲染head");
        }
    });

});