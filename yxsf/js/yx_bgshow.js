
      var _KEY_ARY2 = ["class", "attr", "#page-back", "page-back1", "isCloseBghint", "cookie", "yes", "<span class=\"bg-hint\"><font>点此可以</font><font>更改背景</font><span class=\"bot\"></span><span class=\"top\"></span><i class=\"bg-hint-close\"></i></span>", "append", "#dh-box", "fadeOut", ".bg-hint", "click", ".bg-hint-close", "getTime", "setTime", "=", ";expires=", "toGMTString", "each", ".fixbox10-bc li", "ready", ";", "split", "length", "substring", "charAt", " ", "indexOf"];

        $(document)[_KEY_ARY2[21]](function() {
          var _0x1A75D = getCookiex(_KEY_ARY2[0]);
          $(_KEY_ARY2[2])[_KEY_ARY2[1]](_KEY_ARY2[0], _0x1A75D);
          if (_0x1A75D == null) {
            $(_KEY_ARY2[2])[_KEY_ARY2[1]](_KEY_ARY2[0], _KEY_ARY2[3]);
            $(function() {
              if ($[_KEY_ARY2[5]](_KEY_ARY2[4]) != _KEY_ARY2[6]) {
                $(_KEY_ARY2[9])[_KEY_ARY2[8]](_KEY_ARY2[7]);
                $(_KEY_ARY2[13])[_KEY_ARY2[12]](function() {
                  $(_KEY_ARY2[11])[_KEY_ARY2[10]]();
                  $[_KEY_ARY2[5]](_KEY_ARY2[4], _KEY_ARY2[6], {
                    expires: 15
                  })
                })
              }
            })
          };
          $(_KEY_ARY2[20])[_KEY_ARY2[19]](function() {
            $(this)[_KEY_ARY2[12]](function() {
              var _0x1A791 = $(this)[_KEY_ARY2[1]](_KEY_ARY2[0]);
              $(_KEY_ARY2[2])[_KEY_ARY2[1]](_KEY_ARY2[0], _0x1A791, 15);

              function _0x1A7C5(_0x1A861, _0x1A895, _0x1A7F9) {
                var _0x1A82D = new Date();
                _0x1A82D[_KEY_ARY2[15]](_0x1A82D[_KEY_ARY2[14]]() + _0x1A7F9 * 24 * 60 * 60 * 1000);
                document[_KEY_ARY2[5]] = _0x1A861 + _KEY_ARY2[16] + escape(_0x1A895) + _KEY_ARY2[17] + _0x1A82D[_KEY_ARY2[18]]()
              }
              _0x1A7C5(_KEY_ARY2[0], _0x1A791, 15)
            })
          })
        });

        function getCookiex(_0x1A861) {
          var _0x1A965 = _0x1A861 + _KEY_ARY2[16];
          var _0x1A8FD = document[_KEY_ARY2[5]][_KEY_ARY2[23]](_KEY_ARY2[22]);
          for (var _0x1A931 = 0; _0x1A931 < _0x1A8FD[_KEY_ARY2[24]]; _0x1A931++) {
            var _0x1A8C9 = _0x1A8FD[_0x1A931];
            while (_0x1A8C9[_KEY_ARY2[26]](0) == _KEY_ARY2[27]) {
              _0x1A8C9 = _0x1A8C9[_KEY_ARY2[25]](1, _0x1A8C9[_KEY_ARY2[24]])
            };
            if (_0x1A8C9[_KEY_ARY2[28]](_0x1A965) == 0) {
              return _0x1A8C9[_KEY_ARY2[25]](_0x1A965[_KEY_ARY2[24]], _0x1A8C9[_KEY_ARY2[24]])
            }
          };
          return null
        }
        