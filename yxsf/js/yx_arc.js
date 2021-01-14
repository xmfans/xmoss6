function ggo(a) {
    return document.getElementById(a)
}

function HoverLixz(a) {
    temp = document.getElementById("xz_");
    x = temp.getElementsByTagName("li").length;
    for (var b = 1; b <= x; b++) ggo("xz_" + b).className = "normalxz", ggo("txz_0" + b).className = "xzundis";
    ggo("txz_0" + a).className = "xzdis";
    ggo("xz_" + a).className = "hoverxz"
}

function HoverLizx(a) {
    temp = document.getElementById("zx_");
    x = temp.getElementsByTagName("li").length;
    for (var b = 1; b <= x; b++) ggo("zx_" + b).className = "normalzx", ggo("tzx_0" + b).className = "zxundis";
    ggo("tzx_0" + a).className = "zxdis";
    ggo("zx_" + a).className = "hoverzx"
}
for (var test = document.getElementsByClassName("id_inner"), i = 0; i < test.length; i++) {
    var p = test[i].parentNode;
    0 == p.getElementsByTagName("li").length && (p.style.display = "none")
}
for (var test1 = document.getElementsByClassName("cai_inner"), testid = document.getElementById("cai_nodiv"), i = 0; i < test1.length; i++) p = test1[i].parentNode, 1 == p.getElementsByTagName("li").length && (testid.style.display = "none");
for (var zixun = document.getElementsByClassName("zixun_inner"), zixunid = document.getElementById("zixun_nodiv"), i = 0; i < zixun.length; i++) p = zixun[i].parentNode, 0 == p.getElementsByTagName("li").length && (zixunid.style.display = "none");

function gamedescopenall() {
    document.getElementById("showall").style.display = "";
    document.getElementById("showshort").style.display = "none"
}

function gamedescopenshort() {
    document.getElementById("showall").style.display = "none";
    document.getElementById("showshort").style.display = ""
}

function switchDescOpen(a) {
    "on" == a && (document.getElementById("showall").style.display = "", document.getElementById("showshort").style.display = "none");
    a && "off" != a || (document.getElementById("showall").style.display = "none", document.getElementById("showshort").style.display = "")
}
var now = new Date;

function getNowFormatDate() {
    var a = new Date,
        b = a.getFullYear(),
        c = a.getMonth() + 1,
        a = a.getDate();
    1 <= c && 9 >= c && (c = "0" + c);
    0 <= a && 9 >= a && (a = "0" + a);
    return b + "-" + c + "-" + a
}
var newtxz = $("#txz_01 ul").children("li").first().text(),
    newtzx = $("#tzx_01 ul").children("li").last().text();

//arcpub == getNowFormatDate() && (newest == newtxz && ($("#txz_01 ul").children("li").eq(0).addClass("new-coin"), $("#txz_01 ul").children("li").eq(0).children("a").prepend("<div class='today'></div>")), newest == newtzx && ($("#tzx_01 ul").children("li").last().addClass("new-coin"), $("#tzx_01 ul").children("li").last().children("a").prepend("<div class='today'></div>")));


function changeorder(a, b) {
    $(a).parents("div.play-px").find("a").removeClass("p-hide");
    $(a).addClass("p-hide");
    $("#tzx_01,#tzx_02,#tzx_03,#tzx_04,#tzx_05").find("ul li").each(function() {
        $(this).prependTo($(this).parent())
    });
    return !1
}
//window.onload = changeorder(this, 0);

function changeorder1(a, b) {
    $(a).parents("div.down-px").find("a").removeClass("p-hide");
    $(a).addClass("p-hide");
    $("#txz_01,#txz_02,#txz_03,#txz_04,#txz_05").find("ul li").each(function() {
        $(this).prependTo($(this).parent())
    });
    return !1
}

function setCookie() {
    var a = window.location.pathname,
        b = encodeURIComponent(a.substring(a.lastIndexOf("/") + 1)),
        a = a.substring(0, a.lastIndexOf("/") + 1);
    expires = new Date;
    expires.setTime(expires.getTime() + 36E5);
    document.cookie = b + "=" + encodeURIComponent("iloveu") + "; expires=" + expires.toGMTString() + "; path=" + a
}

function getCookie(a) {
    for (var b = document.cookie.split("; "), c = 0; c < b.length; c++) {
        var d = b[c].split("=");
        if (a == d[0]) return d[1]
    }
    return null
};
