<div class="blog_grid_block clearfix">
    <div class="feature_inner">
        <div class="feature_inner_corners">

            {{if type=="text"}}
            <div class="feature_inner_btns">
                <a href="#" class="expand_image"><i class="ico-maximize"></i></a>
                <a href="#" class="icon_link"><i class="ico-link3"></i></a>
            </div>
            <a href="{{defaultCover}}" class="feature_inner_ling"
               data-rel="magnific-popup">
                <img src="{{defaultCover}}" alt="Post Title">
            </a>
            {{/if}}
            {{if type=="cover"}}
            <div class="feature_inner_btns">
                <a href="#" class="expand_image"><i class="ico-maximize"></i></a>
                <a href="#" class="icon_link"><i class="ico-link3"></i></a>
            </div>
            <a href="{{customCover}}" class="feature_inner_ling"
               data-rel="magnific-popup">
                <img src="{{customCover}}" alt="Post Title">
            </a>
            {{/if}}
            {{if type=="gallery"}}
            <div class="feature_inner_btns">
                <a href="#" class="expand_image"><i class="ico-maximize"></i></a>
                <a href="#" class="icon_link"><i class="ico-link3"></i></a>
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
            <video class="hosted_video" id="video_player_1" width="100%" height="100%"
                   poster="assets/images/video-boster.jpg" preload="metadata"
                   controls="controls" style="width:100%;height:100%;">
                <source src="{{videoSrc}}"
                        type="video/mp4"/>
            </video>
            {{/if}}
            {{if type=="audio"}}
            <div class="self_hosted_container">
                <audio class="hosted_audio" id="audio_player_1" width="100%" preload="metadata"
                       controls="controls">
                    <source src="{{audioSrc}}" type="audio/mp3"/>
                </audio>
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
                                            <i class="ico-user5"></i>
                                            <span>{{author}}</span>
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