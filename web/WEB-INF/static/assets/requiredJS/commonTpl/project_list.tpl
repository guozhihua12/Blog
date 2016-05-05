<li class="filter_item_block animated" data-animation-delay="600" data-animation="bounceInUp">
    <div class="timeline_block clearfix">
        <a href="#" class="timeline_post_format image"><i class="ico-gallery"></i></a>
        <div class="blog_grid_block clearfix">
            <div class="feature_inner">
                <div class="feature_inner_corners">
                    <div class="feature_inner_btns">
                        <a href="#" class="expand_image"><i class="ico-maximize"></i></a>
                        <a href="#" class="icon_link"><i class="ico-link3"></i></a>
                    </div>
                    <div class="porto_galla">
                        <a href="assets/images/project/project_demo1.jpg"
                           class="feature_inner_ling">
                            <img src="assets/images/project/project_demo1.jpg" alt="Post Title">
                        </a>
                        <a href="assets/images/project/project_demo2.jpg"
                           class="feature_inner_ling">
                            <img src="assets/images/project/project_demo2.jpg" alt="Post Title">
                        </a>
                        <a href="assets/images/project/project_demo3.jpg"
                           class="feature_inner_ling">
                            <img src="assets/images/project/project_demo3.jpg" alt="Post Title">
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <h6 class="timeline_title"><a href="#">{{name}}</a></h6>
							<span class="meta">
								<span class="meta_part">
									<a href="#">
                                        <i class="ico-clock7"></i>
                                        <span>{{date}}</span>
                                    </a>
								</span>
								<span class="meta_part">
									<i class="ico-folder-open-o"></i>
									<span>
										{{each category as item }}
                                        <a href="#">{{item.name}}</a> ,
                                        {{/each}}
									</span>
								</span>
							</span>
        <div class="article">{{desp}}</div>
        <div class="clearfix">
            <a class="read_more_button" href="project-content.html" target="_blank">
                <i class="ico-arrow-forward"></i>查看详情
            </a>
        </div>
    </div>
</li><!-- Item -->