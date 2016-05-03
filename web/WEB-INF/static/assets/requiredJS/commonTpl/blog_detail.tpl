<div class="post_title_con">
    <h6 class="title"><a href="#">{{blog.title}}</a></h6>
							<span class="meta">
								<span class="meta_part">
									<a href="#">
                                        <i class="ico-clock7"></i>
                                        <span>{{blog.date}}</span>
                                    </a>
								</span>
								<span class="meta_part">
									<a href="#">
                                        <i class="ico-comment-o"></i>
                                        <span>{{blog.comment}}条评论</span>
                                    </a>
								</span>
								<span class="meta_part">
									<i class="ico-folder-open-o"></i>
									<span>
                                        {{each blog.category as item index}}
										    <a href="javascript:;">{{item.name}}</a>
                                        {{/each}}
									</span>
								</span>
							</span>
</div>
<div class="blog_grid_con">
    {{blog.content}}
</div>
<div class="post_next_prev_con clearfix">
    <!-- Next and Prev Post-->
    <div class="post_next_prev clearfix">
        <a href="javascript:;" id="prevPage"><i class="ico-arrow-back"></i><span class="t">上一篇</span></a>
        <a href="javascript:;" id="nextPage"><span class="t">下一篇</span><i class="ico-arrow-forward"></i></a>
    </div>
</div>
<div class="small_title">
							<span class="small_title_con">
								<span class="s_icon"><i class="ico-tag4"></i></span>
								<span class="s_text">标签</span>
							</span>
</div>
<div class="tags_con">
    {{each tags as tag index}}
    <a href="index.html?tag={{tag.id}}" target="_blank" rel="tag" data-id="{{tag.id}}">{{tag.name}}</a>
    {{/each}}
</div>
<div class="about_auther">
    <div class="small_title">
								<span class="small_title_con">
									<span class="s_icon"><i class="ico-user5"></i></span>
									<span class="s_text">关于作者</span>
								</span>
    </div>

    <div class="about_auther_con clearfix">
								<span class="avatar_img">
									<img alt="client name" src="assets/images/blog/touxiang.jpg">
								</span>
        <div class="about_auther_details">
            <a href="#" class="auther_link">{{author.name}}</a>
									<span class="desc">{{author.desp}}</span>
            <div class="social_media clearfix" id="social">
            </div>
        </div>

    </div>
</div>