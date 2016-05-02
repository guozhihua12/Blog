<div class="blog_grid_block clearfix">
    <div class="feature_inner">
        <div class="feature_inner_corners">
            {{if type=="text"}}
            <div class="feature_inner_btns">
                <a href="javascript:;" class="expand_image"><i class="ico-maximize"></i></a>
                <!--<a href="javascript:;" class="icon_link"><i class="ico-link3"></i></a>-->
            </div>
            <a href="{{defaultCover}}" class="feature_inner_ling"
               data-rel="magnific-popup">
                <img src="{{defaultCover}}" alt="Post Title">
            </a>
            {{/if}}
            {{if type=="cover"}}
            <div class="feature_inner_btns">
                <a href="javascript:;" class="expand_image"><i class="ico-maximize"></i></a>
                <!--<a href="javascript:;" class="icon_link"><i class="ico-link3"></i></a>-->
            </div>
            <a href="{{customCover}}" class="feature_inner_ling"
               data-rel="magnific-popup">
                <img src="{{customCover}}" alt="Post Title">
            </a>
            {{/if}}
            {{if type=="gallery"}}
            <div class="feature_inner_btns">
                <a href="javascript:;" class="expand_image"><i class="ico-maximize"></i></a>
                <!--<a href="javascript:;" class="icon_link"><i class="ico-link3"></i></a>-->
            </div>
            <div class="porto_galla">
                {{each imageSrc as img index}}
                <a href="{{img}}" class="feature_inner_ling">
                    <img src="{{img}}" alt="Post Title">
                </a>
                {{/each}}
            </div>
            {{/if}}
            {{if type=="video"}}
            <div class="centered">
                <a class="popup-vimeo vid_con" href="{{videoSrc}}">
                    <span class="vid_type_icon"><i class="ico-video"></i></span>
                    <span class="vid_icon"><i class="ico-playback-play"></i></span>
                    <img alt="Awesome Product" src="{{videoBg}}">
                </a>
            </div>
            {{/if}}
            {{if type=="audio"}}
            <div class="centered">
                <a class="popup-vimeo vid_con" href="{{audioSrc}}">
                    <span class="vid_type_icon"><i class="ico-file-audio-o"></i></span>
                    <span class="vid_icon"><i class="ico-playback-play"></i></span>
                    <img alt="Awesome Product" src="{{audioBg}}">
                </a>
            </div>
            {{/if}}
        </div>
    </div>
    <div class="blog_grid_con">
        <h6 class="title"><a href="#">{{title}}</a></h6>
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
                                            {{each category as value index}}<a href="#">{{value.name}}</a>{{/each}}
										</span>
									</span>
                                    <span class="meta_part">
										<a href="#">
                                            <i class="ico-eye"></i>
                                            <span>{{reader}}</span>
                                        </a>
									</span>
                                    <span class="meta_part">
										<a href="#">
                                            <i class="ico-comments-o"></i>
                                            <span>{{comment}}</span>
                                        </a>
									</span>
								</span>
        <p class="desc">{{summary}}</p>
        <a class="btn_a" href="blog-content.html?id={{id}}" target="_blank">
									<span>
										<i class="in_left ico-angle-right"></i>
										<span>查看详情</span>
										<i class="in_right ico-angle-right"></i>
									</span>
        </a>
    </div>
</div>