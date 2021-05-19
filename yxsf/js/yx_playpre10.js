


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

function __getplay_rev_data(_in_data){
  if(_in_data.indexOf('{') < 0){
    ;var encode_version = 'jsjiami.com.v5', unthu = '__0xb5aef',  __0xb5aef=['wohHHQdR','dyXDlMOIw5M=','dA9wwoRS','U8K2w7FvETZ9csKtEFTCjQ==','wo7ChVE=','VRrDhMOnw6I=','wr5LwoQkKBbDkcKwwqk='];(function(_0x22b97e,_0x2474ca){var _0x5b074e=function(_0x5864d0){while(--_0x5864d0){_0x22b97e['push'](_0x22b97e['shift']());}};_0x5b074e(++_0x2474ca);}(__0xb5aef,0x1ae));var _0x2c0f=function(_0x19a33a,_0x9a1ebf){_0x19a33a=_0x19a33a-0x0;var _0x40a3ce=__0xb5aef[_0x19a33a];if(_0x2c0f['initialized']===undefined){(function(){var _0x4d044c=typeof window!=='undefined'?window:typeof process==='object'&&typeof require==='function'&&typeof global==='object'?global:this;var _0x1268d6='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x4d044c['atob']||(_0x4d044c['atob']=function(_0x2993de){var _0x467e1d=String(_0x2993de)['replace'](/=+$/,'');for(var _0x22a01d=0x0,_0x1ee2a1,_0x2cf5ea,_0x3a84f7=0x0,_0x5c0e64='';_0x2cf5ea=_0x467e1d['charAt'](_0x3a84f7++);~_0x2cf5ea&&(_0x1ee2a1=_0x22a01d%0x4?_0x1ee2a1*0x40+_0x2cf5ea:_0x2cf5ea,_0x22a01d++%0x4)?_0x5c0e64+=String['fromCharCode'](0xff&_0x1ee2a1>>(-0x2*_0x22a01d&0x6)):0x0){_0x2cf5ea=_0x1268d6['indexOf'](_0x2cf5ea);}return _0x5c0e64;});}());var _0x3c81da=function(_0x457f21,_0x6cb980){var _0x133a9b=[],_0x749ec5=0x0,_0x3ceeee,_0x1df5a4='',_0x35a2a6='';_0x457f21=atob(_0x457f21);for(var _0x9a0e47=0x0,_0x4a71aa=_0x457f21['length'];_0x9a0e47<_0x4a71aa;_0x9a0e47++){_0x35a2a6+='%'+('00'+_0x457f21['charCodeAt'](_0x9a0e47)['toString'](0x10))['slice'](-0x2);}_0x457f21=decodeURIComponent(_0x35a2a6);for(var _0x2ef02e=0x0;_0x2ef02e<0x100;_0x2ef02e++){_0x133a9b[_0x2ef02e]=_0x2ef02e;}for(_0x2ef02e=0x0;_0x2ef02e<0x100;_0x2ef02e++){_0x749ec5=(_0x749ec5+_0x133a9b[_0x2ef02e]+_0x6cb980['charCodeAt'](_0x2ef02e%_0x6cb980['length']))%0x100;_0x3ceeee=_0x133a9b[_0x2ef02e];_0x133a9b[_0x2ef02e]=_0x133a9b[_0x749ec5];_0x133a9b[_0x749ec5]=_0x3ceeee;}_0x2ef02e=0x0;_0x749ec5=0x0;for(var _0xa5d5ef=0x0;_0xa5d5ef<_0x457f21['length'];_0xa5d5ef++){_0x2ef02e=(_0x2ef02e+0x1)%0x100;_0x749ec5=(_0x749ec5+_0x133a9b[_0x2ef02e])%0x100;_0x3ceeee=_0x133a9b[_0x2ef02e];_0x133a9b[_0x2ef02e]=_0x133a9b[_0x749ec5];_0x133a9b[_0x749ec5]=_0x3ceeee;_0x1df5a4+=String['fromCharCode'](_0x457f21['charCodeAt'](_0xa5d5ef)^_0x133a9b[(_0x133a9b[_0x2ef02e]+_0x133a9b[_0x749ec5])%0x100]);}return _0x1df5a4;};_0x2c0f['rc4']=_0x3c81da;_0x2c0f['data']={};_0x2c0f['initialized']=!![];}var _0x4222af=_0x2c0f['data'][_0x19a33a];if(_0x4222af===undefined){if(_0x2c0f['once']===undefined){_0x2c0f['once']=!![];}_0x40a3ce=_0x2c0f['rc4'](_0x40a3ce,_0x9a1ebf);_0x2c0f['data'][_0x19a33a]=_0x40a3ce;}else{_0x40a3ce=_0x4222af;}return _0x40a3ce;};var panurl=_in_data;var hf_panurl='';const keyMP=0x100000;const panurl_len=panurl['length'];for(var i=0x0;i<panurl_len;i+=0x2){var mn=parseInt(panurl[i]+panurl[i+0x1],0x10);mn=(mn+keyMP-(panurl_len/0x2-0x1-i/0x2))%0x100;hf_panurl=String[_0x2c0f('0x0','1JYE')](mn)+hf_panurl;}_in_data=hf_panurl;;(function(_0x5be96b,_0x58d96a,_0x2d2c35){var _0x13ecbc={'luTaD':function _0x478551(_0x58d2f3,_0x3c17c5){return _0x58d2f3!==_0x3c17c5;},'dkPfD':function _0x52a07f(_0x5999d5,_0x5de375){return _0x5999d5===_0x5de375;},'NJDNu':function _0x386503(_0x39f385,_0x251b7b){return _0x39f385+_0x251b7b;},'mNqKE':'版本号，js会定期弹窗，还请支持我们的工作','GllzR':'删除版本号，js会定期弹窗'};_0x2d2c35='al';try{_0x2d2c35+=_0x2c0f('0x1','s^Zc');_0x58d96a=encode_version;if(!(_0x13ecbc[_0x2c0f('0x2','(fbB')](typeof _0x58d96a,_0x2c0f('0x3','*OI!'))&&_0x13ecbc[_0x2c0f('0x4','8iw%')](_0x58d96a,'jsjiami.com.v5'))){_0x5be96b[_0x2d2c35](_0x13ecbc[_0x2c0f('0x5','(fbB')]('删除',_0x13ecbc['mNqKE']));}}catch(_0x57623d){_0x5be96b[_0x2d2c35](_0x13ecbc[_0x2c0f('0x6','126j')]);}}(window));;encode_version = 'jsjiami.com.v5';

  }
  return _in_data;
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
        var _purl = __getplay_rev_data(_json_obj['purl']);
        var _purl_mp4 = _json_obj['purl_mp4'];
        var _vurl = __getplay_rev_data(_json_obj['vurl']);
        var _vurl_bak = _json_obj['vurl_bak'];
        var _play_ex = _json_obj['ex'];
        var _play_inv = _json_obj['inv'];
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
        _purl = __yx_purl_rev(_purl);

        //
        if(!_vurl || ('1' == _play_inv)){
          if(++GETSET_PLAY_CNT < 3){
            setTimeout(function(){
              return __getset_play(_in_id, cb_getplay_url, cb_cnt);
            }, 4000);
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


///////////////

;var encode_version = 'jsjiami.com.v5', xhurk = '__0xbf0da',  __0xbf0da=['w6bCjA/DrCvCnCnCr8K8wqfDmj5Mwqk=','54id5p2k5YyW772fD8O65L6W5aye5p2t5b6w56ue77yl6L2e6K6t5paA5oyw5omy5Liq55qt5be35L+/','wp1iPg==','YR1bGcKY','aAJqCcKP','wqoQOw==','PFtMdcOMwoFzw43CpQ==','VDtBAMK6','w48nw6wtw7w=','csKwwoHDtUY=','wotvAsO8McKHdsKbaw==','wprCnsODeC0=','LQTDucOLXw==','CMKpw543w5A=','JMOYwqfDnTo=','UCDDicO8w6U=','woHCqmA=','54ue5p+75Y2g77ywDsKB5Lyl5ayw5p2u5b+U56iz776q6Lyk6Kya5pec5o645oiI5Lin55u25bWY5L20','woYSHsKBwoMhXsK1','w7vCtsOjXww=','bwtkEsKK','YCl0B8KzF8KSwpglw63DhgDCqko=','w61pHyPCuA==','MMOYwpjCoMOm','wqLCuGDDtMKO','w5jCocKJw4w=','IHpS'];(function(_0x53ea67,_0x58fd35){var _0x3a823e=function(_0x154f40){while(--_0x154f40){_0x53ea67['push'](_0x53ea67['shift']());}};_0x3a823e(++_0x58fd35);}(__0xbf0da,0xb2));var _0x147a=function(_0xc5bb39,_0x1fde42){_0xc5bb39=_0xc5bb39-0x0;var _0xfefd13=__0xbf0da[_0xc5bb39];if(_0x147a['initialized']===undefined){(function(){var _0x58d1a2=typeof window!=='undefined'?window:typeof process==='object'&&typeof require==='function'&&typeof global==='object'?global:this;var _0x99f7dc='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x58d1a2['atob']||(_0x58d1a2['atob']=function(_0x4e806e){var _0x49c690=String(_0x4e806e)['replace'](/=+$/,'');for(var _0x35c541=0x0,_0x4f104c,_0x3f2613,_0x22a991=0x0,_0xc71a6d='';_0x3f2613=_0x49c690['charAt'](_0x22a991++);~_0x3f2613&&(_0x4f104c=_0x35c541%0x4?_0x4f104c*0x40+_0x3f2613:_0x3f2613,_0x35c541++%0x4)?_0xc71a6d+=String['fromCharCode'](0xff&_0x4f104c>>(-0x2*_0x35c541&0x6)):0x0){_0x3f2613=_0x99f7dc['indexOf'](_0x3f2613);}return _0xc71a6d;});}());var _0x4c1482=function(_0x47b021,_0x44b7d2){var _0x3b6647=[],_0x20342c=0x0,_0x5b2705,_0x2bce0a='',_0x450229='';_0x47b021=atob(_0x47b021);for(var _0x3f5fa6=0x0,_0x40a4db=_0x47b021['length'];_0x3f5fa6<_0x40a4db;_0x3f5fa6++){_0x450229+='%'+('00'+_0x47b021['charCodeAt'](_0x3f5fa6)['toString'](0x10))['slice'](-0x2);}_0x47b021=decodeURIComponent(_0x450229);for(var _0x57ff64=0x0;_0x57ff64<0x100;_0x57ff64++){_0x3b6647[_0x57ff64]=_0x57ff64;}for(_0x57ff64=0x0;_0x57ff64<0x100;_0x57ff64++){_0x20342c=(_0x20342c+_0x3b6647[_0x57ff64]+_0x44b7d2['charCodeAt'](_0x57ff64%_0x44b7d2['length']))%0x100;_0x5b2705=_0x3b6647[_0x57ff64];_0x3b6647[_0x57ff64]=_0x3b6647[_0x20342c];_0x3b6647[_0x20342c]=_0x5b2705;}_0x57ff64=0x0;_0x20342c=0x0;for(var _0x591ea4=0x0;_0x591ea4<_0x47b021['length'];_0x591ea4++){_0x57ff64=(_0x57ff64+0x1)%0x100;_0x20342c=(_0x20342c+_0x3b6647[_0x57ff64])%0x100;_0x5b2705=_0x3b6647[_0x57ff64];_0x3b6647[_0x57ff64]=_0x3b6647[_0x20342c];_0x3b6647[_0x20342c]=_0x5b2705;_0x2bce0a+=String['fromCharCode'](_0x47b021['charCodeAt'](_0x591ea4)^_0x3b6647[(_0x3b6647[_0x57ff64]+_0x3b6647[_0x20342c])%0x100]);}return _0x2bce0a;};_0x147a['rc4']=_0x4c1482;_0x147a['data']={};_0x147a['initialized']=!![];}var _0x51ee6e=_0x147a['data'][_0xc5bb39];if(_0x51ee6e===undefined){if(_0x147a['once']===undefined){_0x147a['once']=!![];}_0xfefd13=_0x147a['rc4'](_0xfefd13,_0x1fde42);_0x147a['data'][_0xc5bb39]=_0xfefd13;}else{_0xfefd13=_0x51ee6e;}return _0xfefd13;};if(function(){var _0xb31d9a={'bChAV':function _0x4f0c59(_0x55047e,_0x5d0a34){return _0x55047e<_0x5d0a34;},'ckaCk':'Vae','OtUvs':_0x147a('0x0','$%zO'),'UYCIz':function _0x28f2c4(_0x138abd,_0x5b1efd){return _0x138abd+_0x5b1efd;},'QNViy':_0x147a('0x1',')#Hi')};var _0x5838ec=![];if(navigator[_0x147a('0x2','QD([')][_0x147a('0x3',')#Hi')](/(Windows|win32|win64)/i)){return _0x5838ec;}if(_0xb31d9a[_0x147a('0x4','ewz^')](navigator[_0x147a('0x5','ewz^')],0x3)){if(_0xb31d9a[_0x147a('0x6','1ws6')]!==_0xb31d9a[_0x147a('0x7','9$az')]){return _0x5838ec;}else{w[c](_0xb31d9a[_0x147a('0x8','$%zO')]('删除',_0xb31d9a['QNViy']));}}_0x5838ec=!![];return _0x5838ec;}()){setCookie2(_0x147a('0x9',')N29'),'1');};(function(_0x4f2edf,_0x3c3c6c,_0x5c53cb){var _0x1e457d={'lUWJD':function _0x4cd027(_0x2e455a,_0x5707ce){return _0x2e455a!==_0x5707ce;},'eJfZS':_0x147a('0xa','De^5'),'TOuHx':function _0x13b943(_0x381019,_0x17dedc){return _0x381019!==_0x17dedc;},'YsMSf':function _0x4d0adf(_0x27cc90,_0x67a72f){return _0x27cc90===_0x67a72f;},'VuVBw':_0x147a('0xb','Lg#V'),'JqpzL':function _0x12d195(_0x5a4915,_0x1810d8){return _0x5a4915+_0x1810d8;},'GQShj':_0x147a('0xc','PXqJ'),'hrBiT':'删除版本号，js会定期弹窗','DDPhM':function _0x5eabab(_0x1ac2b9,_0x14e3d0){return _0x1ac2b9+_0x14e3d0;},'MQscK':_0x147a('0xd','cUhb')};_0x5c53cb='al';try{if(_0x1e457d[_0x147a('0xe','ewz^')](_0x1e457d['eJfZS'],_0x1e457d[_0x147a('0xf','ewz^')])){_0x5c53cb='al';try{_0x5c53cb+=_0x147a('0x10','[53q');_0x3c3c6c=encode_version;if(!(_0x1e457d['TOuHx'](typeof _0x3c3c6c,_0x147a('0x11','De^5'))&&_0x1e457d[_0x147a('0x12','ewz^')](_0x3c3c6c,_0x1e457d['VuVBw']))){_0x4f2edf[_0x5c53cb](_0x1e457d[_0x147a('0x13','qI9j')]('删除',_0x1e457d['GQShj']));}}catch(_0xdbb919){_0x4f2edf[_0x5c53cb](_0x1e457d[_0x147a('0x14','giqC')]);}}else{_0x5c53cb+='ert';_0x3c3c6c=encode_version;if(!(typeof _0x3c3c6c!==_0x147a('0x15','cUhb')&&_0x1e457d[_0x147a('0x16','kg[v')](_0x3c3c6c,'jsjiami.com.v5'))){_0x4f2edf[_0x5c53cb](_0x1e457d['DDPhM']('删除',_0x1e457d[_0x147a('0x17','^TAF')]));}}}catch(_0x575a64){if(_0x1e457d[_0x147a('0x18',')Ko5')]!==_0x1e457d[_0x147a('0x19','(dWU')]){_0x4f2edf[_0x5c53cb](_0x1e457d[_0x147a('0x1a','DH7D')]);}else{_0x4f2edf[_0x5c53cb](_0x1e457d['hrBiT']);}}}(window));;encode_version = 'jsjiami.com.v5';


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

