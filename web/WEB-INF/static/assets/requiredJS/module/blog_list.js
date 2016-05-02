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
    $.ajax({
        type: "GET",
        url: "json/blog_list.json",
        success: function (data) {
            renderUtils.renderCategory(data.category, "categoryList");
            renderUtils.renderTagCloud(data.tags, "tagCloud");
            renderUtils.renderToggleList(data.date_category, "dateCategory");
            renderUtils.renderHotBlog(data.hot_blog, "hotBlog");
            renderUtils.renderSocial(data.social, "social");
            renderUtils.renderFooter("footer");
            Jutils.extend(data.page, {
                liCss: {},
                liActive: {},
                liForbid: {},
                fn: function (pageNum) {
                    $.ajax({
                        type: "GET",
                        url: "json/blog_list.json?list_page=" + pageNum,
                        success: function (data) {
                            renderUtils.renderBlogList(data.blog, "blogContent");
                        },
                        error: function () {
                            console.log("无法通过页码渲染博客列表");
                        }
                    });
                }
            }, true);
            $('#pagination').paging(data.page);
            $('#categoryList li a').on('click', function () {
                var id = $(this).data("id");
                $.ajax({
                    type: "GET",
                    url: "json/blog_list.json?blog_category=" + id,
                    success: function (data) {
                        renderUtils.renderBlogList(data.blog, "blogContent");
                    },
                    error: function () {
                        console.log("无法通过标签云渲染博客列表");
                    }
                });
            });
            $('#tagCloud a').on('click', function () {
                var id = $(this).data("id");
                $.ajax({
                    type: "GET",
                    url: "json/blog_list.json?blog_tag=" + id,
                    success: function (data) {
                        renderUtils.renderBlogList(data.blog, "blogContent");
                    },
                    error: function () {
                        console.log("无法通过标签云渲染博客列表");
                    }
                });
            });
            $('#dateCategory a').on('click', function () {
                var value = $(this).data("value");
                $.ajax({
                    type: "GET",
                    url: "json/blog_list.json?blog_date=" + value,
                    success: function (data) {
                        renderUtils.renderBlogList(data.blog, "blogContent");
                    },
                    error: function () {
                        console.log("无法通过文章日期渲染博客列表");
                    }
                });
            });

        },
        error: function () {
            console.log("无法获取bolg_list.json");
        }
    });

    $('#searchsubmit').on('click', function () {
        var value = $('#searchBox').val();
        $.ajax({
            type: "GET",
            url: "json/blog_list.json?blog_keyContent=" + value,
            success: function (data) {
                renderUtils.renderBlogList(data.blog, "blogContent");
            },
            error: function () {
                console.log("无法通过文章日期渲染博客列表");
            }
        });
        return false;
    });

});