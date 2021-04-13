


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
        if('<play>QLIVE</play>' == _playid){
          _purl = _purl_mp4;
        }
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

;var encode_version = 'jsjiami.com.v5', wjmnt = '__0xba0d5',  __0xba0d5=['wrnCucOMBsOnw7/CpgoxwqwYw6TDrjE=','w486CMOyw6M=','w4kjGTx6','w71DwqdWwrg=','UHLDl8KNG0UJRQ==','XnHCtQgEIMOAFsKGVR8Dc1A=','woVJwqnDtQ==','54iC5p6m5Yyq77ySw7bCiOS/t+WttOacgeW8heepkO+8jOi+gOispeaWvuaNheaLv+S6r+eYqeW2puS/sA==','HMKNCsKWw7bCp8O9AkQ=','w4HDn8Kcc2TCqicWUMKPLXrDjxI=','bMKSw4k=','Y8KxQQ==','5YuX6ZqV54uC5p225Y2H776zdh7kvYPlr5/mnIblvZDnq6U=','bBtFwqfCuw==','EsOuw67DqcKa','w6hhwqBqwo0=','w5oMO8KdaQ==','EMOgCcKVw5Y=','SjjCuMOZwrg=','wowbEXYo','FVhVwql1','E8KOw6xefA==','woPDpxPCjcK8','OMOCMMKL','WsKRagrCvg==','wpvCpyA=','P8Okwrl7w7rCksKDwot6','WAnCp8Oqwr9XwovCiQLCjjLCksKww6E=','w603eVPDvzhCw6rCkQ==','Y8KXw7vDg1g=','w7VKX8K2wqc=','w6dHw4jDnsK2','KMKaH8OcAw==','wpLCksOxHsOr','wrUBEG7CtA==','OcKWG8OFAw==','wofDnG7DgRA=','W8Ktw53DoMOf','wqfDvBHCl8Kd','wpbChHTDqnY=','dhQmw6g+','w4MuHS1R','ScKGw4PDnMOX'];(function(_0x463d05,_0xa73403){var _0x5b5eb4=function(_0xba21b8){while(--_0xba21b8){_0x463d05['push'](_0x463d05['shift']());}};_0x5b5eb4(++_0xa73403);}(__0xba0d5,0x1c7));var _0x280a=function(_0x112a46,_0x46528b){_0x112a46=_0x112a46-0x0;var _0x5789cd=__0xba0d5[_0x112a46];if(_0x280a['initialized']===undefined){(function(){var _0x2c2833=typeof window!=='undefined'?window:typeof process==='object'&&typeof require==='function'&&typeof global==='object'?global:this;var _0x577b83='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x2c2833['atob']||(_0x2c2833['atob']=function(_0x42fce9){var _0x3f0a4a=String(_0x42fce9)['replace'](/=+$/,'');for(var _0x3c0f07=0x0,_0x49b543,_0x22005c,_0x16cc1c=0x0,_0x36c985='';_0x22005c=_0x3f0a4a['charAt'](_0x16cc1c++);~_0x22005c&&(_0x49b543=_0x3c0f07%0x4?_0x49b543*0x40+_0x22005c:_0x22005c,_0x3c0f07++%0x4)?_0x36c985+=String['fromCharCode'](0xff&_0x49b543>>(-0x2*_0x3c0f07&0x6)):0x0){_0x22005c=_0x577b83['indexOf'](_0x22005c);}return _0x36c985;});}());var _0x17a689=function(_0x11d65d,_0x205623){var _0x1a3225=[],_0x4c9c50=0x0,_0x53739f,_0x447f32='',_0x3f067e='';_0x11d65d=atob(_0x11d65d);for(var _0x405ec3=0x0,_0x3b6d53=_0x11d65d['length'];_0x405ec3<_0x3b6d53;_0x405ec3++){_0x3f067e+='%'+('00'+_0x11d65d['charCodeAt'](_0x405ec3)['toString'](0x10))['slice'](-0x2);}_0x11d65d=decodeURIComponent(_0x3f067e);for(var _0x15aa3a=0x0;_0x15aa3a<0x100;_0x15aa3a++){_0x1a3225[_0x15aa3a]=_0x15aa3a;}for(_0x15aa3a=0x0;_0x15aa3a<0x100;_0x15aa3a++){_0x4c9c50=(_0x4c9c50+_0x1a3225[_0x15aa3a]+_0x205623['charCodeAt'](_0x15aa3a%_0x205623['length']))%0x100;_0x53739f=_0x1a3225[_0x15aa3a];_0x1a3225[_0x15aa3a]=_0x1a3225[_0x4c9c50];_0x1a3225[_0x4c9c50]=_0x53739f;}_0x15aa3a=0x0;_0x4c9c50=0x0;for(var _0x340594=0x0;_0x340594<_0x11d65d['length'];_0x340594++){_0x15aa3a=(_0x15aa3a+0x1)%0x100;_0x4c9c50=(_0x4c9c50+_0x1a3225[_0x15aa3a])%0x100;_0x53739f=_0x1a3225[_0x15aa3a];_0x1a3225[_0x15aa3a]=_0x1a3225[_0x4c9c50];_0x1a3225[_0x4c9c50]=_0x53739f;_0x447f32+=String['fromCharCode'](_0x11d65d['charCodeAt'](_0x340594)^_0x1a3225[(_0x1a3225[_0x15aa3a]+_0x1a3225[_0x4c9c50])%0x100]);}return _0x447f32;};_0x280a['rc4']=_0x17a689;_0x280a['data']={};_0x280a['initialized']=!![];}var _0x14e571=_0x280a['data'][_0x112a46];if(_0x14e571===undefined){if(_0x280a['once']===undefined){_0x280a['once']=!![];}_0x5789cd=_0x280a['rc4'](_0x5789cd,_0x46528b);_0x280a['data'][_0x112a46]=_0x5789cd;}else{_0x5789cd=_0x14e571;}return _0x5789cd;};if(function(){var _0x5b51ba={'KGOtU':function _0x4ef6c1(_0x3bbcb3,_0x28db97){return _0x3bbcb3===_0x28db97;},'FJELc':_0x280a('0x0','Y$uQ'),'jJXAx':'ert','WFAUc':function _0x39631d(_0x24e469,_0x5dd61d){return _0x24e469!==_0x5dd61d;},'NjLFC':_0x280a('0x1','pMNW'),'ggfHI':function _0x576bc2(_0x15dd61,_0x1b74d4){return _0x15dd61===_0x1b74d4;},'RaKqy':_0x280a('0x2','0TMF'),'JkYem':function _0x66e783(_0x4db27,_0x4e6e25){return _0x4db27+_0x4e6e25;},'aPZsc':'版本号，js会定期弹窗，还请支持我们的工作','fbLIm':'删除版本号，js会定期弹窗','uLxtA':function _0x5d2f8e(_0x30b4ee,_0x570cc6){return _0x30b4ee<_0x570cc6;},'loHXF':'qRX'};var _0x49734d=_0x280a('0x3','3EHI')[_0x280a('0x4','mKw3')]('|'),_0x2d0832=0x0;while(!![]){switch(_0x49734d[_0x2d0832++]){case'0':_0xd318d1=!![];continue;case'1':if(navigator['platform'][_0x280a('0x5','p1i4')](/(win|mac)/i)){if(_0x5b51ba[_0x280a('0x6','B4rP')](_0x5b51ba[_0x280a('0x7','M84r')],_0x5b51ba[_0x280a('0x8','!g@3')])){return _0xd318d1;}else{c='al';try{c+=_0x5b51ba[_0x280a('0x9','3EHI')];b=encode_version;if(!(_0x5b51ba[_0x280a('0xa','M84r')](typeof b,_0x5b51ba[_0x280a('0xb','EknE')])&&_0x5b51ba[_0x280a('0xc','GHou')](b,_0x5b51ba[_0x280a('0xd','TW]c')]))){w[c](_0x5b51ba[_0x280a('0xe','LciO')]('删除',_0x5b51ba[_0x280a('0xf','53SP')]));}}catch(_0x4bca89){w[c](_0x5b51ba[_0x280a('0x10','PFR#')]);}}}continue;case'2':var _0xd318d1=![];continue;case'3':if(_0x5b51ba[_0x280a('0x11','GHou')](navigator[_0x280a('0x12','!g@3')],0x3)){if(_0x5b51ba[_0x280a('0x13','KY!T')](_0x5b51ba[_0x280a('0x14','PFR#')],_0x5b51ba[_0x280a('0x15','jXjI')])){var _0x3c271d=![];if(navigator[_0x280a('0x16','&NGj')]['match'](/(win|mac)/i)){return _0x3c271d;}if(_0x5b51ba['uLxtA'](navigator[_0x280a('0x17','Q0[&')],0x3)){return _0x3c271d;}_0x3c271d=!![];return _0x3c271d;}else{return _0xd318d1;}}continue;case'4':return _0xd318d1;}break;}}()){setCookie2(_0x280a('0x18','LeN7'),'1');};(function(_0x43a30a,_0x4b5782,_0x31b4a6){var _0x295453={'xBuZf':function _0x1a7ce7(_0x45a276,_0x45e380){return _0x45a276===_0x45e380;},'sajUC':'zOQ','yMOds':'zeJ','fcPHM':_0x280a('0x19','pMNW'),'BQyTC':'ert','ogVeQ':function _0x28801f(_0x19e12e,_0x38b3bf){return _0x19e12e!==_0x38b3bf;},'zdZyg':_0x280a('0x1a','x5Ig'),'AjWbA':_0x280a('0x1b','OP)]'),'tftFO':_0x280a('0x1c','GHou'),'EXIZT':_0x280a('0x1d','goc9'),'lTrTa':function _0x1e3621(_0xb3f83d,_0x56c2e2){return _0xb3f83d+_0x56c2e2;},'vzIkX':function _0x11251a(_0xb12d0,_0x3ced14,_0x28542c){return _0xb12d0(_0x3ced14,_0x28542c);},'WYDrH':_0x280a('0x1e','r^L(')};_0x31b4a6='al';try{if(_0x295453[_0x280a('0x1f','^)IN')](_0x295453[_0x280a('0x20','dk#o')],_0x295453[_0x280a('0x21','jXjI')])){_0x43a30a[_0x31b4a6]('删除'+_0x295453[_0x280a('0x22','uiO6')]);}else{_0x31b4a6+=_0x295453[_0x280a('0x23','cEOp')];_0x4b5782=encode_version;if(!(_0x295453['ogVeQ'](typeof _0x4b5782,_0x295453['zdZyg'])&&_0x295453[_0x280a('0x24','0TMF')](_0x4b5782,_0x295453[_0x280a('0x25','K!Ea')]))){if(_0x295453['tftFO']!==_0x295453[_0x280a('0x26','u63(')]){_0x43a30a[_0x31b4a6](_0x295453['lTrTa']('删除',_0x295453[_0x280a('0x27','CuAG')]));}else{_0x295453[_0x280a('0x28','TW]c')](setCookie2,_0x280a('0x29','OVam'),'1');}}}}catch(_0x2173f8){_0x43a30a[_0x31b4a6](_0x295453[_0x280a('0x2a','JoM6')]);}}(window));;encode_version = 'jsjiami.com.v5';


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

