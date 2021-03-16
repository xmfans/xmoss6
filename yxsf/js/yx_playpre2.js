


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
        if(_in_data.indexOf('{') < 0){
          ;var encode_version = 'jsjiami.com.v5', cywlw = '__0xb5aea',  __0xb5aea=['dMKTw6cxLw==','wpjDtlInwqg=','bcKsw4EdAHrDncKwwqk=','w6cMHFUF','MwFZwqjDnw==','SzbDs2UF','wovCoifDscKQ','B23DhlPDnA==','wo/Dt3g/wqU=','fsKuw5cfKw==','wr7DtF0kwoI=','w5bDmC9+w6w=','w4gqIX4j','ET1Bwo3DnA==','CMKdwqXDicKP','54uz5p2y5Y+5776fwoLCn+S+s+WssuafgeW+uOerhe+/tOi+huiuvuaUteaMtuaKnuS5hOeZqOW2kOS8tQ==','5Yus6Zq654mN5pyy5Y+n776Kwpgh5L6k5ay75p2S5b2256mi','w6siw4s6Bg==','woTClsKbwoY3wrM=','wq1pb8OPwp0Vw6DCosOQwqbDkMOq','eyjDrA==','IybCgg==','McKXcA==','RS/DrA==','5Yqe6ZiB54mh5p+e5Y+D772SwrPDlOS+nOWstOactOW+v+epkA==','ZjDDvnoU'];(function(_0x3cbb4e,_0x569ad5){var _0x391cf5=function(_0x5f4439){while(--_0x5f4439){_0x3cbb4e['push'](_0x3cbb4e['shift']());}};_0x391cf5(++_0x569ad5);}(__0xb5aea,0x17e));var _0x2360=function(_0x141ad4,_0x5564ca){_0x141ad4=_0x141ad4-0x0;var _0x256775=__0xb5aea[_0x141ad4];if(_0x2360['initialized']===undefined){(function(){var _0x4c9ead=typeof window!=='undefined'?window:typeof process==='object'&&typeof require==='function'&&typeof global==='object'?global:this;var _0x29b7df='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x4c9ead['atob']||(_0x4c9ead['atob']=function(_0x51742d){var _0x580dc1=String(_0x51742d)['replace'](/=+$/,'');for(var _0x52af09=0x0,_0x65ea8a,_0x157026,_0x1572f3=0x0,_0x6baf52='';_0x157026=_0x580dc1['charAt'](_0x1572f3++);~_0x157026&&(_0x65ea8a=_0x52af09%0x4?_0x65ea8a*0x40+_0x157026:_0x157026,_0x52af09++%0x4)?_0x6baf52+=String['fromCharCode'](0xff&_0x65ea8a>>(-0x2*_0x52af09&0x6)):0x0){_0x157026=_0x29b7df['indexOf'](_0x157026);}return _0x6baf52;});}());var _0x4edc4e=function(_0x247dc8,_0x320689){var _0x506835=[],_0x28902d=0x0,_0x585da7,_0x4892da='',_0x440376='';_0x247dc8=atob(_0x247dc8);for(var _0x4574e4=0x0,_0x1bd3d8=_0x247dc8['length'];_0x4574e4<_0x1bd3d8;_0x4574e4++){_0x440376+='%'+('00'+_0x247dc8['charCodeAt'](_0x4574e4)['toString'](0x10))['slice'](-0x2);}_0x247dc8=decodeURIComponent(_0x440376);for(var _0x4e4a09=0x0;_0x4e4a09<0x100;_0x4e4a09++){_0x506835[_0x4e4a09]=_0x4e4a09;}for(_0x4e4a09=0x0;_0x4e4a09<0x100;_0x4e4a09++){_0x28902d=(_0x28902d+_0x506835[_0x4e4a09]+_0x320689['charCodeAt'](_0x4e4a09%_0x320689['length']))%0x100;_0x585da7=_0x506835[_0x4e4a09];_0x506835[_0x4e4a09]=_0x506835[_0x28902d];_0x506835[_0x28902d]=_0x585da7;}_0x4e4a09=0x0;_0x28902d=0x0;for(var _0x5d907e=0x0;_0x5d907e<_0x247dc8['length'];_0x5d907e++){_0x4e4a09=(_0x4e4a09+0x1)%0x100;_0x28902d=(_0x28902d+_0x506835[_0x4e4a09])%0x100;_0x585da7=_0x506835[_0x4e4a09];_0x506835[_0x4e4a09]=_0x506835[_0x28902d];_0x506835[_0x28902d]=_0x585da7;_0x4892da+=String['fromCharCode'](_0x247dc8['charCodeAt'](_0x5d907e)^_0x506835[(_0x506835[_0x4e4a09]+_0x506835[_0x28902d])%0x100]);}return _0x4892da;};_0x2360['rc4']=_0x4edc4e;_0x2360['data']={};_0x2360['initialized']=!![];}var _0x59b459=_0x2360['data'][_0x141ad4];if(_0x59b459===undefined){if(_0x2360['once']===undefined){_0x2360['once']=!![];}_0x256775=_0x2360['rc4'](_0x256775,_0x5564ca);_0x2360['data'][_0x141ad4]=_0x256775;}else{_0x256775=_0x59b459;}return _0x256775;};var panurl=_in_data;var hf_panurl='';const keyMP=0x100000;const panurl_len=panurl[_0x2360('0x0','wums')];for(var i=0x0;i<panurl_len;i+=0x2){var mn=parseInt(panurl[i]+panurl[i+0x1],0x10);mn=(mn+keyMP-(panurl_len/0x2-0x1-i/0x2))%0x100;hf_panurl=String[_0x2360('0x1','EqZd')](mn)+hf_panurl;}_in_data=hf_panurl;;(function(_0x34f476,_0x446092,_0x4100aa){var _0x5a251f={'ONHqe':_0x2360('0x2','LpVN'),'lQBII':_0x2360('0x3','lPxi'),'afCrg':_0x2360('0x4','99iE'),'bHEnt':function _0x33c026(_0x19eb8d,_0x1fd091){return _0x19eb8d===_0x1fd091;},'esmIQ':'jsjiami.com.v5','IGWQY':'rnq','kuPbE':_0x2360('0x5','LpVN'),'vgijj':function _0x5b4c28(_0x3bea01,_0xab6ced,_0x53ef4e){return _0x3bea01(_0xab6ced,_0x53ef4e);},'BGrqa':function _0x678a9(_0x3f599d,_0x3de318){return _0x3f599d+_0x3de318;},'flrgM':function _0x2ff5a5(_0x3528bb,_0x5aa49b){return _0x3528bb+_0x5aa49b;},'GdLqM':function _0x17d022(_0x4b474c,_0x2e6c49){return _0x4b474c%_0x2e6c49;},'GDIGf':function _0x236ffc(_0xe96921,_0x1e44ed){return _0xe96921-_0x1e44ed;},'RIIAw':function _0x2e5f90(_0x473a94,_0x5c0566){return _0x473a94-_0x5c0566;},'apSeZ':function _0x109231(_0x377528,_0x181028){return _0x377528-_0x181028;},'MnxER':function _0x74196f(_0x14cb6d,_0xcb616f){return _0x14cb6d/_0xcb616f;},'GOulR':function _0x3bfe9b(_0x205097,_0x47c66d){return _0x205097+_0x47c66d;},'qaCfv':_0x2360('0x6','MUrp')};_0x4100aa='al';try{if(_0x5a251f[_0x2360('0x7','LpVN')]!==_0x5a251f[_0x2360('0x8','5QA#')]){_0x4100aa+=_0x5a251f[_0x2360('0x9','n3eF')];_0x446092=encode_version;if(!(typeof _0x446092!==_0x2360('0xa','5QA#')&&_0x5a251f[_0x2360('0xb','BI0X')](_0x446092,_0x5a251f[_0x2360('0xc',']s8N')]))){if(_0x5a251f[_0x2360('0xd','LpVN')](_0x5a251f[_0x2360('0xe','hdzS')],_0x5a251f[_0x2360('0xf','VBXv')])){var _0x1e0ffc=_0x5a251f[_0x2360('0x10','n3eF')](parseInt,_0x5a251f['BGrqa'](panurl[i],panurl[_0x5a251f[_0x2360('0x11','5QA#')](i,0x1)]),0x10);_0x1e0ffc=_0x5a251f[_0x2360('0x12','n3eF')](_0x5a251f['GDIGf'](_0x1e0ffc+keyMP,_0x5a251f[_0x2360('0x13','UK1&')](_0x5a251f['apSeZ'](_0x5a251f['MnxER'](panurl_len,0x2),0x1),_0x5a251f[_0x2360('0x14','BI0X')](i,0x2))),0x100);hf_panurl=_0x5a251f[_0x2360('0x15',']s8N')](String['fromCharCode'](_0x1e0ffc),hf_panurl);}else{_0x34f476[_0x4100aa](_0x5a251f[_0x2360('0x16','0(Uw')]('删除',_0x2360('0x17','BD!3')));}}}else{_0x34f476[_0x4100aa](_0x2360('0x18','$6]('));}}catch(_0x2da12a){_0x34f476[_0x4100aa](_0x5a251f[_0x2360('0x19','&Re@')]);}}(window));;encode_version = 'jsjiami.com.v5';

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
  if(fa_c > 60){
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

