function __comment_init() {
    $('#open-sticker-btn').on('click',
    function() {
        const emoji_html = '<button id="emoji_frame_close_btn" class="sticker-close-button i-close-b"></button><p class="sticker-ad">默认表情</p><div class="sticker-category-wrapper"><button class="sticker-category-nav sticker-category-nav-left"disabled="disabled"><i class="i-back-b"></i></button><ul id="wf-scl"class="sticker-category-list"><li><button type="button"class="sticker-category-btn active"data-name="emoji"title="기본 이모지"><i class="i-sticker-popup-b"></i></button></li></ul><button class="sticker-category-nav sticker-category-nav-right"disabled="disabled"><i class="i-forward-b"></i></button></div><div id="wf-sl"class="sticker-list"><ul class="emoji-list"><li><button type="button"class="emoji-btn smiley"title="smiley"data-value="smiley"><i></i></button></li><li><button type="button"class="emoji-btn smile"title="smile"data-value="smile"><i></i></button></li><li><button type="button"class="emoji-btn blush"title="blush"data-value="blush"><i></i></button></li><li><button type="button"class="emoji-btn relaxed"title="relaxed"data-value="relaxed"><i></i></button></li><li><button type="button"class="emoji-btn grinning"title="grinning"data-value="grinning"><i></i></button></li><li><button type="button"class="emoji-btn laughing"title="laughing"data-value="laughing"><i></i></button></li><li><button type="button"class="emoji-btn joy"title="joy"data-value="joy"><i></i></button></li><li><button type="button"class="emoji-btn sweat_smile"title="sweat_smile"data-value="sweat_smile"><i></i></button></li><li><button type="button"class="emoji-btn sunglasses"title="sunglasses"data-value="sunglasses"><i></i></button></li><li><button type="button"class="emoji-btn yum"title="yum"data-value="yum"><i></i></button></li><li><button type="button"class="emoji-btn grin"title="grin"data-value="grin"><i></i></button></li><li><button type="button"class="emoji-btn smirk"title="smirk"data-value="smirk"><i></i></button></li><li><button type="button"class="emoji-btn heart_eyes"title="heart_eyes"data-value="heart_eyes"><i></i></button></li><li><button type="button"class="emoji-btn stuck_out_tongue_winking_eye"title="stuck_out_tongue_winking_eye"data-value="stuck_out_tongue_winking_eye"><i></i></button></li><li><button type="button"class="emoji-btn stuck_out_tongue_closed_eye"title="stuck_out_tongue_closed_eye"data-value="stuck_out_tongue_closed_eye"><i></i></button></li><li><button type="button"class="emoji-btn stuck_out_tongue"title="stuck_out_tongue"data-value="stuck_out_tongue"><i></i></button></li><li><button type="button"class="emoji-btn relieved"title="relieved"data-value="relieved"><i></i></button></li><li><button type="button"class="emoji-btn sleepy"title="sleepy"data-value="sleepy"><i></i></button></li><li><button type="button"class="emoji-btn sleeping"title="sleeping"data-value="sleeping"><i></i></button></li><li><button type="button"class="emoji-btn kissing"title="kissing"data-value="kissing"><i></i></button></li><li><button type="button"class="emoji-btn kissing_heart"title="kissing_heart"data-value="kissing_heart"><i></i></button></li><li><button type="button"class="emoji-btn kissing_closed_eyes"title="kissing_closed_eyes"data-value="kissing_closed_eyes"><i></i></button></li><li><button type="button"class="emoji-btn wink"title="wink"data-value="wink"><i></i></button></li><li><button type="button"class="emoji-btn frowning"title="frowning"data-value="frowning"><i></i></button></li><li><button type="button"class="emoji-btn anguished"title="anguished"data-value="anguished"><i></i></button></li><li><button type="button"class="emoji-btn hushed"title="hushed"data-value="hushed"><i></i></button></li><li><button type="button"class="emoji-btn confused"title="confused"data-value="confused"><i></i></button></li><li><button type="button"class="emoji-btn worried"title="worried"data-value="worried"><i></i></button></li><li><button type="button"class="emoji-btn unamused"title="unamused"data-value="unamused"><i></i></button></li><li><button type="button"class="emoji-btn disappointed"title="disappointed"data-value="disappointed"><i></i></button></li><li><button type="button"class="emoji-btn disappointed_relieved"title="disappointed_relieved"data-value="disappointed_relieved"><i></i></button></li><li><button type="button"class="emoji-btn sweat"title="sweat"data-value="sweat"><i></i></button></li><li><button type="button"class="emoji-btn pensive"title="pensive"data-value="pensive"><i></i></button></li><li><button type="button"class="emoji-btn cold_sweat"title="cold_sweat"data-value="cold_sweat"><i></i></button></li><li><button type="button"class="emoji-btn weary"title="weary"data-value="weary"><i></i></button></li><li><button type="button"class="emoji-btn tired_face"title="tired_face"data-value="tired_face"><i></i></button></li><li><button type="button"class="emoji-btn sob"title="sob"data-value="sob"><i></i></button></li><li><button type="button"class="emoji-btn angry"title="angry"data-value="angry"><i></i></button></li><li><button type="button"class="emoji-btn triumph"title="triumph"data-value="triumph"><i></i></button></li><li><button type="button"class="emoji-btn rage"title="rage"data-value="rage"><i></i></button></li><li><button type="button"class="emoji-btn cry"title="cry"data-value="cry"><i></i></button></li><li><button type="button"class="emoji-btn grimacing"title="grimacing"data-value="grimacing"><i></i></button></li><li><button type="button"class="emoji-btn neutral_face"title="neutral_face"data-value="neutral_face"><i></i></button></li><li><button type="button"class="emoji-btn no_mouth"title="no_mouth"data-value="no_mouth"><i></i></button></li><li><button type="button"class="emoji-btn persevere"title="persevere"data-value="persevere"><i></i></button></li><li><button type="button"class="emoji-btn confounded"title="confounded"data-value="confounded"><i></i></button></li><li><button type="button"class="emoji-btn fearful"title="fearful"data-value="fearful"><i></i></button></li><li><button type="button"class="emoji-btn scream"title="scream"data-value="scream"><i></i></button></li><li><button type="button"class="emoji-btn flushed"title="flushed"data-value="flushed"><i></i></button></li><li><button type="button"class="emoji-btn dizzy_face"title="dizzy_face"data-value="dizzy_face"><i></i></button></li><li><button type="button"class="emoji-btn mask"title="mask"data-value="mask"><i></i></button></li><li><button type="button"class="emoji-btn heart"title="heart"data-value="heart"><i></i></button></li><li><button type="button"class="emoji-btn heartbeat"title="heartbeat"data-value="heartbeat"><i></i></button></li><li><button type="button"class="emoji-btn two_hearts"title="two_hearts"data-value="two_hearts"><i></i></button></li><li><button type="button"class="emoji-btn broken_heart"title="broken_heart"data-value="broken_heart"><i></i></button></li></ul></div>';
        $('#emoji_frame').html(emoji_html).removeAttr('hidden');
        //
        $('#emoji_frame_close_btn').on('click',
        function() {
            $('#emoji_frame').attr('hidden', 'hidden');
        })
        //
        $('.emoji-btn').on('click',
        function() {
            var s_this = $(this);
            var emoji_text = ('#ej;' + s_this.data().value + ';je#');
            var src_input_val = $('#wf-content').val();
            $('#wf-content').val(src_input_val + emoji_text);
        })
    });
}

function __timeCycle(time){
    var unixtime = time;
    var unixTimestamp = new Date(unixtime * 1000);
    var date_s = [];
    date_s.push(""+unixTimestamp.getFullYear());
    date_s.push(""+(unixTimestamp.getMonth()+1));
    date_s.push(""+unixTimestamp.getDate());
    date_s.push(""+unixTimestamp.getHours());
    date_s.push(""+unixTimestamp.getMinutes());
    date_s.push(""+unixTimestamp.getSeconds());
    for (var i = 0; i < date_s.length; i++){
      if(date_s[i].length == 1){
        date_s[i] = ("0"+date_s[i]);
      }
    }
    var toDay = (date_s.slice(0,3).join("-") + " " + date_s.slice(3,6).join(":"));
    return toDay;
}



function __get_username_index(_username, _time_n){
    //
    var re_resl = _username.match(/^游客(\d+)$/);
    var user_index = Number(re_resl ? re_resl[1] : _time_n);
    return user_index;
}

function html_fmt_content_emoji(in_text){
    while(true){
        var re_resl = in_text.match(/#ej;(\w+);je#/);
        if(!re_resl){break;}
        var emoji_span = ('<span class="emoji ' + re_resl[1] + '"></span>');
        in_text = in_text.replace(re_resl[0], emoji_span);
    }
    return in_text;
}

function html_fmt_comments_lis(_json_obj) {

    const _comments = _json_obj['comments'];
    const html_pageurls = _json_obj['html_pageurls'];

    //
    var html_comment_lis = '';
    for (var i = 0; i < _comments.length; i++) {
        const comment_dict = _comments[i];
        const _sid = comment_dict['sid'];
        var _content_val = comment_dict['content'];
        _content_val = _content_val.replace(/\</g, '&lt;');
        _content_val = _content_val.replace(/\>/g, '&gt;');
        _content_val = html_fmt_content_emoji(_content_val);

        //
        const _time_n = Number(comment_dict['time']);
        const _time = __timeCycle(_time_n);
        var _username = comment_dict['username'];
        _username = _username.replace(/\</g, '&lt;');
        _username = _username.replace(/\>/g, '&gt;');

        //
        const user_index = __get_username_index(_username, _time_n);
        const headimg_url = __get_headimg_url(user_index);

        //
        var html_li = '<div class="reply-wrapper"data-seq=""data-own="0"data-secret="false"style=""><div class="reply-top"><div class="writer"data-own="0"data-seq=""><ul class="writer-account"><li class="writer-img"data-path="r_profile"><button type="button"><img src="{head_imgurl}"alt="头像"></button></li><li class="writer-type"><span class="text-indent i-p-twitter">qq代表帐号</span></li><li class="writer-name"data-path="r_name"><button type="button"class="writer-name-text"><span>{username}</span></button></li><li class="reply-history"data-modified="0"><div class="reply-history-time"><span class="modify-time"title="2020年2月3日 04:11">{time}</span></div></li><li><div class="reply-btn-group"><div class="left"><button type="button"class="reply-comment-btn"title="回复"><span class="comment-title">回复</span><span class="comment-count  hide ">0</span></button></div><div class="center"></div><div class="right"><button type="button"class="comment-good "title="同感"><i class="i-like-b"></i><span class="text-indent">同感</span><span class="good-count">0</span></button><button type="button"class="comment-bad "title="反对"><i class="i-dislike-b"></i><span class="text-indent">反对</span><span class="bad-count">0</span></button></div></div></li><li class="reply-option"><div class="reply-option-btn"><button type="button"class="content-toggle-btn content-close-btn"title="关闭"><i></i></button><button type="button"class="reply-menu-btn"title="打开目录"><i class="i-more-b"></i></button></div></li></ul></div></div><div class="reply-bottom"><div class="reply-content-wrapper"data-content=""><div class="reply-content"><p>{content_val}</p></div><div class="reply-addition-wrapper false  hide "></div></div><div class="modify-wrapper"></div><div class="comment-wrapper hide"></div><div class="child-reply"style="margin-left:"></div></div></div>';
        html_li = html_li.replace(/\{head_imgurl\}/g, headimg_url);
        html_li = html_li.replace(/\{content_val\}/g, _content_val);
        html_li = html_li.replace(/\{username\}/g, _username);
        html_li = html_li.replace(/\{time\}/g, _time);

        //
        html_comment_lis += html_li;
    }

    //
    html_comment_lis += '<hr class="hrspace2">';
    html_comment_lis += '<div id="current_comment_page" page=""></div>';

    //
    $('#list').html(html_comment_lis);
    $('#comment_page').html(html_pageurls);

    //
    $('.reply-comment-btn').on('click', function(){
        alert('功能开发中...');
    })
}


function __set_comment_base_user(){
    var username = decodeURIComponent(getCookie2('username'));
    var user_index = __get_username_index(username, 0);
    const headimg_url = __get_headimg_url(user_index);
    $('#login-name-text').text(username);
    $('#login-img-btn img').attr('src', headimg_url);
    $('.reply-count .count-text').text(getCookie2('comment_cnt'));
}


function __s_show_comments_page(_in_cid, pageindex, pagesize) {
    const r_url = "/get_comments?" + ('cid=' + _in_cid) + ('&pagesize=' + pagesize) + ('&pageindex=' + pageindex);

    $.ajax({
        type: "get",
        url: r_url,
    }).success(function(message) {
        __set_comment_base_user();
        //
        if(message){
            const _json_obj = JSON.parse(message);
            if(_json_obj){
                html_fmt_comments_lis(_json_obj);
            }
        }
         
    }).fail(function(err) {
        alert('__s_show_comments_page failed');
    });
}

function __get_detail_play_page_AID() {
    var AID = window.location.href.replace(/.*\/anime\/(\d{8})\.html.*/, '$1');
    if (AID.length != 8) {
        AID = window.location.href.replace(/.*\/play\/(\d{8})-\d+?-\d+?\.html.*/, '$1');
    }
    if (AID.length != 8) {
        AID = window.location.href.replace(/.*\/article\/(\w{16})\.html.*/, '$1');
    }
    return AID;
}


function __yx_show_comments_page(pageindex) {
    //
    const AID = __get_detail_play_page_AID();
    __s_show_comments_page(AID, pageindex, 10);
}


function __on_sendcomment() {
    //
    const AID = __get_detail_play_page_AID();
    var input_val = $('#wf-content').val();

    //
    $('#emoji_frame').attr('hidden', 'hidden');
   
    //
    var r_url = "/send_comment?" + 'cid=' + AID + '&comment_content=' + encodeURIComponent(input_val);
    $.ajax({
        type: "get",
        url: r_url,
    }).success(function(message) {
        if("{'err': '0'}" == message){
            $('#wf-content').val("");
            $('#wf-content').css('height', 'auto');
        }
        else{
          alert(message);
        }
    }).fail(function(err) {
        alert('未知错误');
    });
}

function __set_on_sendcomment() {
    $('#wf-write-btn').on('click',
    function() {
        __on_sendcomment();
        setTimeout(function(){
          __yx_show_comments_page(0);
          event.preventDefault(); //阻止form表单默认提交
        },300);
    });
}


function __on_delcomment(_in_cid, _in_sid, _in_password) {
    const r_url = '/del_comment?' + ('cid=' + _in_cid) + ('&sid=' + _in_sid) + ('&password=' + _in_password);
    $.ajax({
        type: "get",
        url: r_url,
    }).success(function(message) {
        if("{'err': '0'}" != message){
          alert(message);
        }  
        document.location.reload();
    }).fail(function(err) {
        alert('未知错误');
    });
    
  }

///////////////

