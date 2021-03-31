

function __on_pingfen_mouseover(){
    $("#stars img").mouseover(function() {
        str = $(this).attr("src");
        str = str.replace("rank_3.gif", "rank_1.gif");
        str = str.replace("rank_4.gif", "rank_2.gif");
        $(this).attr("src", str);
        $(this).prevAll().each(function() {
            str = $(this).attr("src");
            str = str.replace("rank_3.gif", "rank_1.gif");
            str = str.replace("rank_4.gif", "rank_2.gif");
            $(this).attr("src", str)
        });
        $(this).nextAll().each(function() {
            str = $(this).attr("src");
            str = str.replace("rank_1.gif", "rank_3.gif");
            str = str.replace("rank_2.gif", "rank_4.gif");
            $(this).attr("src", str)
        })
    });
}


//////////////////////////////////


function __onclick_pingfen_newto(){
    $("#stars img").click(function() {
        const _html_elem = $('.donghua_pf #stars').html();
        //
        var len_1 = _html_elem.split('rank_1.gif').length;
        len_1 = (len_1 > 0 ? (len_1 - 1) : 0);
        //
        var len_2 = _html_elem.split('rank_2.gif').length;
        len_2 = (len_2 > 0 ? (len_2 - 1) : 0);

        //
        const _new_pfval = ((len_1 + len_2) / 2).toFixed(1);

        //
        const _url = window.location.href;
        const _r_url = (_url.replace(/\/anime\/(\d{8})\.html/, '/_new_pingfen?aid=$1') + '&pfval=' + _new_pfval);
        $.get(_r_url, function(_in_data, _in_status){
            _in_data = _in_data.replace(/\'/g, '\"');
            const _json_obj = JSON.parse(_in_data);
            const _err_code = _json_obj['err_code'];
            if('0' == _err_code){
                alert('评分成功: ' + _new_pfval + '分');
            }
            else {
                alert('评分失败: ' + _err_code);
            }

            //
            return true;
        });
    });
}



/////////////////////////////////

(function __init_pingfen(){
    const pf_vals = eval($('#avgscore').text());
    const pfval = pf_vals[2].toFixed(1);
    $('#avgscore').html(pfval); //平均分

    // html src pf ------------
    var _html_texts = '';
    const _pf_max_index = (pfval / 0.5);
    for (var i = 0; i < 10; i++){
        var _gif_index = (i % 2 + 1);
        if((i + 0.99) > _pf_max_index){
            _gif_index += 2;
        }
        //
        const _wr_text = '<img src=\"https://cdn.jsdelivr.net/gh/pltfans/xmoss6/yxsf/pic/icon/rank_' + _gif_index + '.gif\">';
        _html_texts += _wr_text;
    }
    $('#avgstar').html(_html_texts);

   // html onclick pf ------------
   var _html_texts = '';
   for (var i = 0; i < 10; i++){
       var _gif_index = (i % 2 + 3);
       //
       const _wr_text = '<img title=\"' + ((i+1)*0.5).toFixed(1) + '\" src=\"https://cdn.jsdelivr.net/gh/pltfans/xmoss6/yxsf/pic/icon/rank_' + _gif_index + '.gif\">';
       _html_texts += _wr_text;
   }
   $('.donghua_pf #stars').html(_html_texts);

   // html last pf --------------
   var _html_texts = '最新评分:<font id="rank">{最新评分}</font>分(共<span id="ppl">{总次数}</span>人评分)';
   _html_texts = _html_texts.replace('{最新评分}', pf_vals[3].toFixed(1));
   _html_texts = _html_texts.replace('{总次数}', pf_vals[0]);
   $('.donghua_pf .pf2').html(_html_texts);
   
   //
   __on_pingfen_mouseover();
   __onclick_pingfen_newto();
   
})();



