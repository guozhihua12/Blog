 <div class="topbar"><!-- class ( topbar_colored  ) -->
     <div class="content clearfix">

            <div class="top_details clearfix f_left">
                <div class="languages-select languages-drop">
                    <span><i class="ico-globe4"></i><span>欢迎您</span></span>
                </div>
    <span class="top_login">
    <i class="icon ico-key3"></i><a class="popup-with-move-anim" href="#login-popup">登录</a>
    </span>
                <div class="zoom-anim-dialog small-dialog mfp-hide login_popup" id="login-popup">
                    <form class="login_form_colored">
                        <div class="lfc_user_row">
                            <span class="lfc_header">登录</span>
                        </div>
                        <div class="lfc_user_row">
                            <label for="login_user_name">
                                <span class="lfc_alert"></span>
                                <i class="lfc_icon ico-user5"></i>
                                <input type="text" name="login_user_name" id="login_user_name">
                            </label>
                        </div>
                        <div class="lfc_user_row">
                            <label for="login_password">
                                <span class="lfc_alert"></span>
                                <i class="lfc_icon ico-key3"></i>
                                <input type="password" name="login_password" id="login_password">
                            </label>
                        </div>
                        <div class="lfc_user_row clearfix">
                            <div class="my_col_half">
                                <label for="rememberme">
    <span class="remember-box">
    <input type="checkbox" id="rememberme" name="rememberme">
    <span>记住密码</span>
    </span>
                                </label>
                            </div>
                            <div class="my_col_half clearfix">
                                <button type="submit" name="login" class="send_button f_right upper">
                                    Sign in
                                </button>
                            </div>
                        </div>
                        <a class="lfc_forget_pass" href="#">忘记密码?</a>
                    </form>
                </div>
            </div>


        </div>
        <!-- End content -->
<span class="top_expande not_expanded">
    <i class="no_exp ico-angle-double-down"></i>
    <i class="exp ico-angle-double-up"></i>
    </span>
    </div>
    <!-- End topbar -->

    <div id="navigation_bar">
        <div class="content">
            <div id="logo">
                <a href="{{logoLink}}">
                    <img src="{{logoSrc}}"  alt="Enar Logo">
                </a>
            </div>
            <!-- Top Search -->
            <form class="top_search clearfix small_top_search">
                <div class="top_search_con">
                    <input type="text" class="s" placeholder="搜索全部 ...">
                    <span class="top_search_icon"><i class="ico-search4"></i></span>
                    <input type="submit" class="top_search_submit">
                </div>
            </form>
            <!-- End Top Search -->
            <nav id="main_nav">
                <div id="nav_menu">
    <span class="mobile_menu_trigger">
    <a href="#" class="nav_trigger"><span></span></a>
    </span>
                    <ul id="navy" class="clearfix">
                        {{#navText}}
                    </ul>
                </div>
            </nav>
            <!-- End Nav -->

            <div class="clear"></div>
        </div>
    </div>
