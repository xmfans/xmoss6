


//////////////////////////////////

function __v2t_cb(bSucc, pfram_id, src_url, vlt_lr){
  document.getElementById(pfram_id).src = ___make_url_vlt_param(src_url, vlt_lr);
}

function __v2t_chk_play(pfram_id, playid, purl, vurl, cb_getplay_url, vlt_lr) {
  //
  return false;
  //已不使用 有些手机浏览器不支持
  
  //
  var re_resl = vurl.match(/(.+?)(\[\|time:\d+\])(.+)/);
  if(!re_resl){
    return false;
  }

  //
  var v1 = re_resl[1];
  var v2 = re_resl[3];

  //
	var testvideo = document.createElement('video');
	testvideo.autoplay = false;
	testvideo.hidden = 'hidden';
	var testvideo_div = document.getElementById('testvideo_div');
  testvideo_div.appendChild(testvideo);
  //
  testvideo.addEventListener('loadeddata', function(e) {
    testvideo_div.removeChild(testvideo);
    __v2t_cb(true, pfram_id, purl+v1, vlt_lr);
  });
  testvideo.addEventListener('error', function(e) {
    testvideo_div.removeChild(testvideo);
    __v2t_cb(false, pfram_id, purl+v2, vlt_lr);
  });
  //
  testvideo.setAttribute('src', decodeURIComponent(v1));

  //
  return true;
}


/////////////////////////////

function __ipchk_getplay(_in_data){
  const match_resl = _in_data.match(/^ipchk:(.+)/);
  if(match_resl){
    $('#ipchk_getplay').html(_in_data);
    $('#ipchk_getplay').removeAttr('hidden');
    return true;
  }
  //
  return false;
}

////////////////////////////

function __qpic_chkvurl_converting(_in_vurl){
  const vurl = decodeURIComponent(_in_vurl);
  const match_resl = vurl.match(/^http.+\.f20\.mp4\?ptype=http\?w5=0&h5=0&state=1$/);
  if(match_resl){
    setTimeout(function(){
      $('#ipchk_getplay').html('视频转码中, 请稍后再试');
      $('#ipchk_getplay').removeAttr('hidden');
    }, 5000);
    //
    return true;
  }
  //
  return false;
}


////////////////////////////

function __cb_getplay_url(){
  //
  const _url = window.location.href;
  const _rand = Math.random();
  var _getplay_url = (_url.replace(/.*\/play\/(\d{8})-(\d+?)-(\d+?)\.html.*/, '/_getplay?aid=$1&playindex=$2&epindex=$3') + '&r=' + _rand);
  //
  var re_resl = _getplay_url.match(/[&?]+epindex=(\d+)/);
  const hf_epi = ('' + FEI2(re_resl[1]));
  const t_epindex_ = 'epindex=';
  _getplay_url = _getplay_url.replace(t_epindex_ + re_resl[1], t_epindex_ + hf_epi);
  return _getplay_url;
}


/////////////////////


function __key_enc_vlt(val){
  var n_val = Number(val);
  if(n_val > 0){
    n_val = (n_val * 3 + 1333);
  }
  return n_val;
}

function __key_dec_vlt(val){
  var n_val = Number(val);
  if(n_val > 0){
    n_val = ((n_val - 1333) / 3);
  }
  return n_val;
}

function __get_vlt_lr(_in_ex){
  const re_resl = _in_ex.match(/^#ex=.+#vlt=L(\d+)R(\d+)/);
  var vlt_lr = [0, 0];
  if(re_resl){
    vlt_lr = [__key_enc_vlt(re_resl[1]), __key_enc_vlt(re_resl[2])];
  }
  return vlt_lr;
}



function ___make_url_vlt_param(_in_url, vlt_lr){
  var xxx = (_in_url.indexOf('?') > 0 ? '&' : '?');
  _in_url += (xxx + 'vlt_l=' + vlt_lr[0] + '&vlt_r=' + vlt_lr[1]);
  return _in_url;
}

function __yx_purl_rev(_purl){
  //
  if(window.location.href.match(/^http:\/\//)){
    _purl = _purl.replace('https://bos.nj.bpc.baidu.com/tieba-smallvideo/', 'http://boscdn.bpc.baidu.com/tieba-smallvideo/');
  }
  return _purl;
}

var GETSET_PLAY_CNT = 0;
function __getset_play(_in_id, cb_getplay_url, cb_cnt){
  //
  const _url = window.location.href;
  const _rand = Math.random();
  const _getplay_url = cb_getplay_url();
  if(dettchk()){
    $.get(_getplay_url, function(_in_data, _in_status){
        if('err:timeout' == _in_data){
          if(cb_cnt > 0){
            __getplay_pck();
            __getplay_pck2();
            return __getset_play(_in_id, cb_getplay_url, cb_cnt-1);
          }else {
            return false;
          }
        }

        //
        if(__ipchk_getplay(_in_data)){
          return false;
        }

        //
        var _json_obj = JSON.parse(_in_data);
        var _purl = _json_obj['purl'];
        var _purl_mp4 = _json_obj['purl_mp4'];
        var _vurl = _json_obj['vurl'];
        var _vurl_bak = _json_obj['vurl_bak'];
        var _play_ex = _json_obj['ex'];
        var vlt_lr = __get_vlt_lr(_play_ex);

        //
        if(__qpic_chkvurl_converting(_vurl)){
          return false;
        }

        //
        var _playid = _json_obj['playid'];
        var _vurlp2_getplay_url = '';
        if(true || _playid.indexOf('<play>PC-') >= 0){
            _vurlp2_getplay_url = ('&getplay_url=' + encodeURIComponent(_getplay_url));
        }

        //
        if('<play>QLIVE</play>' == _playid){
          _purl = _purl_mp4;
        }
        _purl = __yx_purl_rev(_purl);

        //
        if(!_vurl){
          if(!GETSET_PLAY_CNT++){
            setTimeout(function(){
              return __getset_play(_in_id, cb_getplay_url, cb_cnt);
            }, 3600);
            return false;
          }
        }

        //
        document.getElementById(_in_id).src = ___make_url_vlt_param(_purl + _vurl + _vurlp2_getplay_url, vlt_lr);
        //
        return true;
    });
  }

  //
  return false;
}

function __yx_SetMainPlayIFrameSRC(_in_id, cb_getplay_url){
    return __getset_play(_in_id, cb_getplay_url, 3);
}


/////////////////////////


function __s_detail_hide_emptyplay(){
  var _chk_zx = undefined;
  for (var i = 0; i < 4; i++){
    var _sel_div_tzx = $('div#tzx_0' + (i + 1));
    var _zx_text = _sel_div_tzx.text();
    _zx_text = _zx_text.replace(/[\r\n ]*/, '');
    var _sel_li_zx = $('li#zx_' + (i + 1));
    if(!_zx_text.length){
      _sel_li_zx.attr('class', 'normalzx');
      _sel_li_zx.hide();
      _sel_div_tzx.attr('class', 'ol-content zxundis');
    }
    else {
      if(1 == _chk_zx){
        $('div#tzx_0' + (_chk_zx)).attr('class', 'ol-content zxundis');
        $('li#zx_' + (_chk_zx)).attr('class', 'normalzx');
        _chk_zx = 0;
      }

      if(!_chk_zx){
        _sel_li_zx.attr('class', 'hoverzx');
        _sel_div_tzx.attr('class', 'ol-content zxdis');
        if(_chk_zx === undefined){ _sel_li_zx.css('marginLeft', '3%'); }
        _chk_zx = (i + 1);
      }
    }
  }

  //
  return null;
}


function __detail_hide_emptyplay(){
  //
  __s_detail_hide_emptyplay();
  //
  const def_pindex = Number($('#DEF_PLAYINDEX').text());
  for (var i = 0; i < 4; i++){
    var _sel_div_tzx = $('div#tzx_0' + (i + 1));
    var _sel_li_zx = $('li#zx_' + (i + 1));
    if(def_pindex == i){
      _sel_li_zx.attr('class', 'hoverzx');
      _sel_div_tzx.attr('class', 'ol-content zxdis');
    }
    else{
      _sel_li_zx.attr('class', 'normalzx');
      _sel_div_tzx.attr('class', 'ol-content zxundis');
    }
  }
  //
  return null;
}



function __play_hide_emptyplay(){
  const _href_url = window.location.href;
  const _refresl = _href_url.match(/\/play\/(\d{8})-(\d+?)-(\d+?)\.html/);
  const _iPlay = Number(_refresl[2]);
  //
  var _chk_zx = false;
  for (var i = 0; i < 4; i++){
    var _sel_div_tzx = $('div#tzx_0' + (i + 1));
    var _zx_text = _sel_div_tzx.text();
    _zx_text = _zx_text.replace(/[\r\n ]*/, '');
    var _sel_li_zx = $('li#zx_' + (i + 1));
    if(_iPlay != i){
      _sel_li_zx.attr('class', 'normalxz');  
      _sel_div_tzx.attr('class', 'down-content xzundis');
      if(!_zx_text.length){
        _sel_li_zx.hide();
      }
    }
    else {
      _sel_li_zx.attr('class', 'hoverxz');
      _sel_div_tzx.attr('class', 'down-content xzdis');
    }
  }

  //
  return null;
}


/////////////////////////////////////


function __setCookie(name, value, _in_days){
	var Days = _in_days;
	var exp = new Date();
	exp.setTime(exp.getTime() + Days*24*60*60*1000);
	document.cookie = name + "="+ escape(value) + ";expires=" + exp.toGMTString() + ";path=/";
}

function setCookie2(name, value){
	return __setCookie(name, value, 36500);
}

function __getCookie(name){
  var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
  if(arr=document.cookie.match(reg)){
	return (arr[2]);
  }else{
	return null;
  }
}

function getCookie2(name){
	return __getCookie(name);
}



///////////////////////////////////////


function FEI2(in_epi){
  
  //
  var hf_epi = Number(in_epi);
  const time_curr = new Date().getTime();

  var fa_t = Number(getCookie2('fa_t'));
  if(!fa_t){
    fa_t = time_curr;
  }

  var fa_c = Number(getCookie2('fa_c'));
  if(!fa_c){
    fa_c = 0;
  }

  //
  if(time_curr - fa_t > (6000)){
    fa_t = 0;
    fa_c = 0;
  }

  //
  fa_c += 1;
  fa_t = time_curr;


  //
  if(fa_c > 10){
    fa_t = 0;
    fa_c = 0;
    //
    if(hf_epi > 1){
      hf_epi = (time_curr % hf_epi);
      if(!hf_epi){
        hf_epi = 1;
      }
    }
  }

  //
  __setCookie('fa_t', fa_t, 1);
  __setCookie('fa_c', fa_c, 1);

  //
  return hf_epi;
}


/////////////////////////////////

function __play_ep_scroll(){
  const _href_url = window.location.href;
  const _refresl = _href_url.match(/\/play\/(\d{8})-(\d+?)-(\d+?)\.html/);
  const _iEP = Number(_refresl[3]);

  //
  const _sel_lis = $('div.xzdis ul li');
  const _ep0_pos = _sel_lis[0].offsetTop;
  const _ep_pos = _sel_lis[_iEP].offsetTop;
  $("div.xzdis ul").scrollTop(_ep_pos - _ep0_pos);
  
  //
  const __t_sel_ep = 'div.xzdis ul li:nth-child(' + (_iEP + 1) + ')';
  $(__t_sel_ep).css('border', '1px solid #F00');
  $(__t_sel_ep + ' a span').css('color', '#F00');
  $(__t_sel_ep + ' p').css('color', '#F00');

  
}


//////////////////////////////////

const __g_exXP = ['', '576', '630', '720', '1080'];
var __g_isfullscn = false;
var __g_new_playleft_id = null;

function __playfull_set(_in_title_on, _in_exXP){
  if (!navigator.userAgent.match(/(iPhone|iPod|Android|mobile|blackberry|webos|incognito|webmate|bada|nokia|lg|ucweb|skyfire)/i)) {
    $(".playerbox").append('<a class="fullscn' + _in_exXP + '">' + _in_title_on + '</a>');
    
    //
    if(!__g_isfullscn || !_in_exXP){
      $((".fullscn" + _in_exXP)).show();
    }

    //
    $("#playleft").mouseover(function() {
      if(!__g_isfullscn || !_in_exXP){
        $((".fullscn" + _in_exXP)).show();
      }
    }).mouseout(function() {
      $((".fullscn" + _in_exXP)).hide()
    });
    $((".fullscn" + _in_exXP)).click(function() {
      if(!__g_isfullscn){
        $((".fullscn" + '')).html('还原窗口');
        const _new_ID = ("fullplayleft" + _in_exXP);
        $("#playleft").attr("id", _new_ID);
        __g_new_playleft_id = _new_ID;
        //
        $("#player_back").attr("id", "player_back_full");
        //
        __g_isfullscn = true;
      }
      else {
        $((".fullscn" + '')).html(_in_title_on);
        $(('#' + __g_new_playleft_id)).attr("id", "playleft");
        //
        $("#player_back_full").attr("id", "player_back");
        //
        __g_isfullscn = false;
      }
    });

    //
    $(document).keyup(function (event) {
      if(27 == event.keyCode || 96 == event.keyCode){
        if(__g_isfullscn){
          $((".fullscn" + '')).html(_in_title_on);
          $(('#' + __g_new_playleft_id)).attr("id", "playleft");
          //
          $("#player_back_full").attr("id", "player_back");
          //
          __g_isfullscn = false;
        }
      }
    });

  };
}

function __exp_playfull_set(){
  for (var i = 0; i < __g_exXP.length; i++){
    const p1 = (__g_exXP[i] ? ('网页' + __g_exXP[i] + 'P') : '网页全屏');
    const p2 = (__g_exXP[i] ? ('-' + __g_exXP[i] + 'p') : '');
    __playfull_set(p1, p2);
  }
}

