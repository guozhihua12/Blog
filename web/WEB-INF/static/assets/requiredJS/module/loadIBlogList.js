require(["template", "jquery", 'underscore','utils', 'text', 'text!commonTpl/blog_item.tpl'], function (template) {
    $.ajax( {
        type : "GET",
        url : "json/blog_list.json",
        success : function(data) {
            console.log(data);
            var itemTpl=require('text!commonTpl/blog_item.tpl'),
                blogList=data.blog,htmlText="";
            if(blogList && blogList.length>0){
                _.each(blogList,function(element,index,list){
                    var render=template.compile(itemTpl);
                    htmlText += render(element);
                });
            }
            console.log(htmlText);
            //document.getElementById('blogContent').innerHTML=htmlText;
        },
        error : function() {
            console.log("无法渲染博客列表");
        }
    });
});