<ol class="children">
    <li class="comment single_comment">
        <!-- Comment -->
        <div class="comment-container comment-box">
            <div class="trees_number"></div>
            <a href="#" class="avatar">
                <img width="75" height="75"
                     src="assets/images/blog/touxiang.jpg"
                     alt="Alan Snow">
            </a>
            <div class="comment_content">
                <h4 class="author_name"><a href="#">{{name}}</a></h4>
															<span class="comment_meta">
																<a href="javascript:;">
                                                                    <time datetime="2015-10-01T19:56:36+00:00">
                                                                        {{date}}
                                                                    </time>
                                                                </a>
															</span>
                <div class="comment_said_text">
                    <p>谢谢大家的厚爱,我也很喜欢我的博客呢.</p>
                </div>
                <a href="#commentform"
                   class="comment-reply-link">Reply</a>
            </div>
        </div>
        <!-- End Comment -->
        {{#child}}
    </li>
</ol>