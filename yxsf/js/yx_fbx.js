var _KEY_ARY = ["match", "userAgent", "", "write", "hide", ".sidebar", "slideToggle", "#fsb", "#sqfsb", "insertAfter", ".main", "show", ".sidebar>*", "#dh-update", "top", "offset", "#nav", "animate", "body", "class", "rt-nav-on", "attr", "#rt-nav", "height", "slideUp", "rt-nav", "click", "", "dh-box", "getElementById", "offsetTop", "position:", "position", "style", ";top:", "innerWidth", "pageYOffset", "setAttribute", "position:fixed;top:", "px", "documentElement", "clientWidth", "scrollTop", "cssText", "px;_position:absolute;_top:expression(eval(document.documentElement.scrollTop+", "))", "px;_position:absolute;_top:expression(eval(document.body.scrollTop+", "onscroll", ".aclogin", "body,html", "#totop", "#hotsec", "#fixbox2", "#newsec", "#fixbox3", "onload", "fixbox4", "onclick", "/feedback.html", "open", "#fixbox1-go", "one", "width", "#fixbox1", ".bgbox", "#fixbox10", ".fixbox10-bc li img", ".allbox", "#hidebox", "#showbox"];

if ((navigator[_KEY_ARY[1]][_KEY_ARY[0]](/(iPhone|iPod|ipad|Android|mobile|blackberry|webos|incognito|webmate|bada|nokia|lg|ucweb|ios|skyfire)/i))) {
	document[_KEY_ARY[3]](_KEY_ARY[2]);
	var sbarswitch = true;

	function backHide() {
		$(_KEY_ARY[5])[_KEY_ARY[4]]();
		sbarswitch = true
	}
	$(_KEY_ARY[22])[_KEY_ARY[26]](function() {
		if (sbarswitch) {
			sbarswitch = false;
			$(_KEY_ARY[7])[_KEY_ARY[6]](500);
			$(_KEY_ARY[8])[_KEY_ARY[6]](500);
			$(_KEY_ARY[10])[_KEY_ARY[9]]($(_KEY_ARY[5]));
			$(_KEY_ARY[5])[_KEY_ARY[11]]();
			$(_KEY_ARY[12])[_KEY_ARY[4]]();
			$(_KEY_ARY[13])[_KEY_ARY[11]]();
			var _0x10C4E = $(_KEY_ARY[16])[_KEY_ARY[15]]()[_KEY_ARY[14]];
			$(_KEY_ARY[18])[_KEY_ARY[17]]({
				scrollTop: _0x10C4E
			}, 300);
			$(_KEY_ARY[22])[_KEY_ARY[21]](_KEY_ARY[19], _KEY_ARY[20]);
			var _0x10C40 = $(_KEY_ARY[13])[_KEY_ARY[23]]();
			$(_KEY_ARY[5])[_KEY_ARY[23]](0)[_KEY_ARY[11]]()[_KEY_ARY[17]]({
				height: _0x10C40 + 15
			}, function() {
				return false
			})
		} else {
			$(_KEY_ARY[5])[_KEY_ARY[24]](500);
			$(_KEY_ARY[7])[_KEY_ARY[6]](500);
			$(_KEY_ARY[8])[_KEY_ARY[6]](500);
			$(_KEY_ARY[22])[_KEY_ARY[21]](_KEY_ARY[19], _KEY_ARY[25]);
			sbarswitch = true
		}
	})
};
if (!(navigator[_KEY_ARY[1]][_KEY_ARY[0]](/(iPhone|iPod|ipad|Android|mobile|blackberry|webos|incognito|webmate|bada|nokia|lg|ucweb|ios|skyfire)/i))) {
	document[_KEY_ARY[3]](_KEY_ARY[27]);
	(function() {
		var _0x10C6A = document[_KEY_ARY[29]](_KEY_ARY[28]);
		var _0x10C86 = _0x10C6A[_KEY_ARY[30]];
		var _0x10C94 = _KEY_ARY[31] + _0x10C6A[_KEY_ARY[33]][_KEY_ARY[32]] + _KEY_ARY[34] + _0x10C6A[_KEY_ARY[33]][_KEY_ARY[14]];
		var _0x10CBE = 298;
		var _0x10CB0 = null;
		var _0x10C78 = move_style_exp = null;
		if (window[_KEY_ARY[35]]) {
			_0x10CB0 = function() {
				return window[_KEY_ARY[36]]
			};
			_0x10C78 = function(_0x10CDA, _0x10CE8) {
				_0x10CDA[_KEY_ARY[37]](_KEY_ARY[33], _0x10CE8)
			};
			move_style_exp = _KEY_ARY[38] + _0x10CBE + _KEY_ARY[39]
		} else {
			if (document[_KEY_ARY[40]] && document[_KEY_ARY[40]][_KEY_ARY[41]]) {
				_0x10CB0 = function() {
					return document[_KEY_ARY[40]][_KEY_ARY[42]]
				};
				_0x10C78 = function(_0x10CDA, _0x10CE8) {
					_0x10CDA[_KEY_ARY[33]][_KEY_ARY[43]] = _0x10CE8
				};
				move_style_exp = _KEY_ARY[38] + _0x10CBE + _KEY_ARY[44] + _0x10CBE + _KEY_ARY[45]
			} else {
				if (document[_KEY_ARY[18]][_KEY_ARY[41]]) {
					_0x10CB0 = function() {
						return document[_KEY_ARY[18]][_KEY_ARY[42]]
					};
					_0x10C78 = function(_0x10CDA, _0x10CE8) {
						_0x10CDA[_KEY_ARY[33]][_KEY_ARY[43]] = _0x10CE8
					};
					move_style_exp = _KEY_ARY[38] + _0x10CBE + _KEY_ARY[46] + _0x10CBE + _KEY_ARY[45]
				} else {
					return
				}
			}
		};
		var _0x10CA2 = false;
		var _0x10CCC = function() {
				var _0x10CF6 = _0x10CB0();
				if (_0x10CF6 >= _0x10C86 - _0x10CBE) {
					if (!_0x10CA2) {
						_0x10C78(_0x10C6A, move_style_exp);
						_0x10CA2 = true
					}
				} else {
					if (_0x10C6A[_KEY_ARY[30]] != _0x10C86) {
						if (_0x10CA2) {
							_0x10C78(_0x10C6A, _0x10C94);
							_0x10CA2 = false
						}
					}
				}
			};
		var _0x10C5C = window[_KEY_ARY[47]];
		if (_0x10C5C) {
			window[_KEY_ARY[47]] = function() {
				_0x10CCC();
				_0x10C5C()
			}
		} else {
			window[_KEY_ARY[47]] = _0x10CCC
		}
	})();
	$(_KEY_ARY[50])[_KEY_ARY[26]](function() {
		var _0x10D04 = $(_KEY_ARY[48])[_KEY_ARY[15]]()[_KEY_ARY[14]];
		$(_KEY_ARY[49])[_KEY_ARY[17]]({
			scrollTop: _0x10D04
		}, 500)
	});
	$(_KEY_ARY[52])[_KEY_ARY[26]](function() {
		var _0x10D04 = $(_KEY_ARY[51])[_KEY_ARY[15]]()[_KEY_ARY[14]];
		$(_KEY_ARY[49])[_KEY_ARY[17]]({
			scrollTop: _0x10D04
		}, 500)
	});
	$(_KEY_ARY[54])[_KEY_ARY[26]](function() {
		var _0x10D04 = $(_KEY_ARY[53])[_KEY_ARY[15]]()[_KEY_ARY[14]];
		$(_KEY_ARY[49])[_KEY_ARY[17]]({
			scrollTop: _0x10D04
		}, 500)
	});
	window[_KEY_ARY[55]] = function() {
		var _0x10D12 = document[_KEY_ARY[29]](_KEY_ARY[56]);
		_0x10D12[_KEY_ARY[57]] = function() {
			window[_KEY_ARY[59]](_KEY_ARY[58])
		}
	};
	var faceFlag = true;

	function faceHide() {
		$(_KEY_ARY[60])[_KEY_ARY[4]]();
		faceFlag = true
	}
	$(_KEY_ARY[63])[_KEY_ARY[26]](function() {
		if (faceFlag) {
			faceFlag = false;
			$(_KEY_ARY[60])[_KEY_ARY[62]](0)[_KEY_ARY[11]]()[_KEY_ARY[17]]({
				width: 641
			}, function() {
				$(document)[_KEY_ARY[61]](_KEY_ARY[26], faceHide)
			})
		}
	});
	var backchange = true;

	function backHide() {
		$(_KEY_ARY[64])[_KEY_ARY[4]]();
		backchange = true
	}
	$(_KEY_ARY[65])[_KEY_ARY[26]](function() {
		if (backchange) {
			backchange = false;
			$(_KEY_ARY[64])[_KEY_ARY[23]](0)[_KEY_ARY[11]]()[_KEY_ARY[17]]({
				height: 122
			}, function() {
				return false
			})
		} else {
			$(_KEY_ARY[64])[_KEY_ARY[4]]();
			backchange = true
		}
	});
	$(_KEY_ARY[66])[_KEY_ARY[26]](function() {
		if (backchange) {
			backchange = false;
			$(_KEY_ARY[64])[_KEY_ARY[23]](0)[_KEY_ARY[11]]()[_KEY_ARY[17]]({
				height: 122
			}, function() {
				return false
			})
		} else {
			$(_KEY_ARY[64])[_KEY_ARY[4]]();
			backchange = true
		}
	});
	var hidebox = true;

	function boxHide() {
		$(_KEY_ARY[67])[_KEY_ARY[4]]();
		hidebox = true
	}
	$(_KEY_ARY[68])[_KEY_ARY[26]](function() {
		if (!hidebox) {
			$(_KEY_ARY[68])[_KEY_ARY[4]]();
			$(_KEY_ARY[69])[_KEY_ARY[11]]();
			$(_KEY_ARY[67])[_KEY_ARY[24]](500);
			hidebox = true
		}
	});
	$(_KEY_ARY[69])[_KEY_ARY[26]](function() {
		if (hidebox) {
			$(_KEY_ARY[68])[_KEY_ARY[11]]();
			$(_KEY_ARY[69])[_KEY_ARY[4]]();
			hidebox = false;
			$(_KEY_ARY[67])[_KEY_ARY[23]](0)[_KEY_ARY[11]]()[_KEY_ARY[17]]({
				height: 336
			}, function() {
				return false
			})
		}
	})
}
