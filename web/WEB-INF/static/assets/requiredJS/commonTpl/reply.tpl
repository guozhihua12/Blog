<ol class="children">
    <li class="comment single_comment">
        <!-- Comment -->
        <div class="comment-container comment-box">
            <div class="trees_number"></div>
            <a href="#" class="avatar">
                <img width="75" height="75"
                     src="{{cover}}"
                     alt="Alan Snow">
            </a>
            <div class="comment_content">
                <h4 class="author_name"><a href="javascript:;">{{name}}{{id}}</a></h4>
															<span class="comment_meta">
																<a href="javascript:;">
                                                                    <time datetime="{{date}}">
                                                                        {{date}}
                                                                    </time>
                                                                </a>
															</span>
                <div class="comment_said_text">
                    <p>{{content}}</p>
                </div>
                <a href="#commentform"
                   class="comment-reply-link">Reply</a>
            </div>
        </div>
        <!-- End Comment -->
        {{#child}}
    </li>
</ol>