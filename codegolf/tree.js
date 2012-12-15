var k = [],w = 80,h = 40,l = 160,m = [];
for (a=4;a--;) {
  m[a] = [];
  for (y = h;y --;)m[a][y] = [];
}

// ツリーを作成
for (a = 4;a--;) {
  for (y = h; y --;) {
    for (x = w; x --;) {
      m[a][y][x] = "_";

       T = (y >> 3) * 4;
       W = ((y >> 3) + 1) * 8;

      if (Math.abs(x - w / 2) < (y - T) % W)m[a][y][x] = "%";

    }
  }
}

// イルミネーションを作成
for ( a = 0; a < 4; a ++) {
  for ( i = 0; i < l; i ++) {
     r = (a + i) * i * 49999 + 59999 & 0xFFFF;
     x = 1 + r % (w - 2);
     y = 1 + r % (h - 2);

    m[a][y][x] = "*";
    m[a][y][x - 1] = "-";
    m[a][y][x + 1] = "-";
    m[a][y - 1][x] = "|";
    m[a][y + 1][x] = "|";
  }
}

// 文字列化
for ( a = 0; a < 4; a ++) {
   Y = [];
  for ( y = 0; y < h; y ++)Y[y] = m[a][y].join("");
  k[a] = Y.join("\n");
}

// 戻り値を戻して終了
return k;

