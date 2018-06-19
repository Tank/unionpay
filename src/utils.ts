import * as pemutils from 'pemutils';

export function h2d(s) {
  function add(x, y) {
    let c = 0;
    const r: number[] = [];
    x = x.split('').map(Number);
    y = y.split('').map(Number);
    while (x.length || y.length) {
      const s = (x.pop() || 0) + (y.pop() || 0) + c;
      r.unshift(s < 10 ? s : s - 10);
      c = s < 10 ? 0 : 1;
    }
    if (c) r.unshift(c);
    return r.join('');
  }

  let dec = '0';
  s.split('').forEach(function (chr) {
    let n = parseInt(chr, 16);
    for (let t = 8; t; t >>= 1) {
      dec = add(dec, dec);
      if (n & t) dec = add(dec, '1');
    }
  });
  return dec;
}

export function pfx2pem(path: string, password: string): Promise<any> {
  return new Promise((resolve, reject) => {
    pemutils.fromPfx(
      {
        path,
        password,
      },
      (err, res) => {
        if (err) reject(err);
        else resolve(res);
      }
    );
  });
}