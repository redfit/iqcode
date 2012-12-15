var k = new Array(4),w = 80,h = 40,l = 160,m = new Array(4);
for (a=4;a--;) {
  m[a] = new Array(h);
  for (y = h;y --;) {
    m[a][y] = new Array(w);
  }
}

// ツリーを作成
for (var a = 0; a < 4; a ++) {
  for (var y = 0; y < h; y ++) {
    for (var x = 0; x < w; x ++) {
      m[a][y][x] = "_";

      var treeTop = Math.floor(y / 8) * 4;
      var treeW = Math.floor(y / 8 + 1) * 8;

      if (Math.abs(x - w / 2) < (y - treeTop) % treeW) {
        m[a][y][x] = "%";
      }
    }
  }
}

// イルミネーションを作成
for (var a = 0; a < 4; a ++) {
  for (var i = 0; i < l; i ++) {
    var r = (a + i) * i * 49999 + 59999 & 0xFFFF;
    var x = 1 + r % (w - 2);
    var y = 1 + r % (h - 2);

    m[a][y][x] = "*";
    m[a][y][x - 1] = "-";
    m[a][y][x + 1] = "-";
    m[a][y - 1][x] = "|";
    m[a][y + 1][x] = "|";
  }
}

// 文字列化
for (var a = 0; a < 4; a ++) {
  var arrayY = new Array(h);
  for (var y = 0; y < h; y ++) {
    arrayY[y] = m[a][y].join("");
  }
  k[a] = arrayY.join("\n");
}

// 戻り値を戻して終了
return k;

