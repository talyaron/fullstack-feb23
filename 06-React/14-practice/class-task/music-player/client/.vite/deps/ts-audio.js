import "./chunk-5WWUZCGV.js";

// node_modules/ts-audio/dist/index.modern.mjs
var e = (o2, t2 = 3, n2) => {
  fetch(o2).then(n2).catch(() => {
    t2 && e(o2, t2 - 1);
  });
};
var o = { isDecoded: false, isPlaying: false, hasStarted: false, source: null, gainNode: null };
var t = () => {
  const e2 = {};
  return { listener(o2, t2) {
    e2[o2] = t2;
  }, emit(o2, t2) {
    var _a;
    (_a = e2[o2]) == null ? void 0 : _a.call(e2, t2);
  } };
};
var n = (e2, o2) => "suspended" === e2.state ? e2.resume().then(() => o2.start(0)) : o2.start(0);
var a = ({ file: a2, volume: s2 = 1, autoPlay: i2 = false, loop: r = false, preload: d = false }) => {
  const u = (() => {
    const e2 = window.AudioContext || window.webkitAudioContext;
    return e2 || ((e3) => {
      throw new Error("`ts-audio`: Your browser doesn't support AudioContext - https://bit.ly/2YWmpnX");
    })(), new e2();
  })(), l = { ...o }, c = t(), p = ((e2, o2) => ({ ready(o3) {
    e2.listener("decoded", o3);
  }, start(o3) {
    e2.listener("start", o3);
  }, end(o3) {
    e2.listener("end", o3);
  }, state(e3) {
    o2 && (o2.onstatechange = () => e3({ data: o2.state }));
  } }))(c, u);
  d && e(a2);
  const g = { play() {
    if (l.hasStarted)
      return u.resume(), void (l.isPlaying = true);
    ((e3, o2, t2, n2) => {
      const a3 = n2.source = e3.createBufferSource(), s3 = n2.gainNode = e3.createGain();
      s3.gain.value = o2, s3.connect(e3.destination), a3.connect(s3), a3.onended = () => {
        n2.hasStarted = false, n2.isPlaying = false, t2.emit("end", { data: null });
      };
    })(u, s2, c, l);
    const { source: e2 } = l;
    e2 && (((e3) => {
      l.isDecoded = false, ((e4) => fetch(e4).then((e5) => {
        if (!e5.ok)
          throw new Error(`HTTP error, status = ${e5.status}`);
        return e5.arrayBuffer();
      }))(a2).then((o2) => ((e4, o3, t2, n2, a3, s3, i3) => {
        e4.decodeAudioData(t2, (e5) => {
          o3.buffer = e5, o3.loop = a3, s3.isDecoded = true, i3.emit("decoded", { data: e5 }), n2 && (o3.start(0), s3.isPlaying = true);
        }, console.error);
      })(u, e3, o2, i2, r, l, c)).catch(console.error);
    })(e2), l.isDecoded ? n(u, e2) : c.listener("decoded", () => n(u, e2)), l.hasStarted = true, l.isPlaying = true, c.emit("start", { data: null }));
  }, pause() {
    u.suspend(), l.isPlaying = false;
  }, toggle() {
    l.isPlaying ? g.pause() : g.play();
  }, stop() {
    var _a;
    l.hasStarted && ((_a = l.source) == null ? void 0 : _a.stop(0), l.isPlaying = false);
  }, on(e2, o2) {
    var _a;
    (_a = p[e2]) == null ? void 0 : _a.call(p, o2);
  }, get volume() {
    var _a;
    return ((_a = l.gainNode) == null ? void 0 : _a.gain.value) ?? 0;
  }, set volume(e2) {
    l.gainNode && (l.gainNode.gain.value = e2);
  }, get loop() {
    var _a;
    return ((_a = l.source) == null ? void 0 : _a.loop) ?? false;
  }, set loop(e2) {
    l.source && (l.source.loop = e2);
  }, get state() {
    return u.state;
  }, get audioCtx() {
    return u;
  } };
  return g;
};
var s = { volume: 1, loop: false, audio: null, isStopped: false, isPlaying: false, audioIndex: 0 };
var i = ({ files: e2, volume: o2 = 1, loop: n2 = false, shuffle: i2 = false, preload: r = false, preloadLimit: d = 3 }) => {
  const u = t(), l = { ...s, volume: o2, loop: n2 }, c = !Array.isArray(e2), p = n2 || c, g = c ? ((e3) => {
    const o3 = [], t2 = Object.entries(e3);
    for (const [e4, n3] of t2)
      for (let t3 = 0; t3 < n3; t3++)
        o3.push(e4);
    return o3;
  })(e2) : e2, h = i2 || c ? ((e3) => {
    const o3 = e3.slice();
    let t2 = e3.length - 1;
    for (; t2 >= 0; ) {
      const e4 = Math.floor(Math.random() * t2 + 1), n3 = o3[t2];
      o3[t2] = o3[e4], o3[e4] = n3, t2--;
    }
    return o3;
  })(g) : g.slice(), m = ((e3, o3) => {
    const t2 = (n3, s2) => {
      const i3 = a({ file: n3[e3.audioIndex], volume: e3.volume });
      e3.audio = i3, i3.on("start", (e4) => {
        o3.emit("start", e4);
      }), i3.on("end", () => {
        e3.isStopped || (n3.length === e3.audioIndex + 1 ? (e3.audio = null, e3.audioIndex = 0, e3.loop ? t2(n3) : (o3.emit("end", { data: null }), e3.isPlaying = false)) : (e3.audioIndex++, t2(n3)));
      }), i3.play();
    };
    return t2;
  })(l, u);
  r && ((e3, o3, t2 = fetch, n3) => {
    const a2 = e3.slice(o3).reverse();
    let s2 = false;
    const i3 = () => {
      a2.length ? r2(a2.pop()) : s2 || (n3 == null ? void 0 : n3(), s2 = true);
    }, r2 = (e4) => {
      t2(e4).then(i3).catch(i3);
    };
    for (let t3 = 0; t3 < o3; t3++)
      r2(e3[t3]);
  })(h, d);
  const y = { play() {
    const { audio: e3 } = l;
    if (l.isPlaying = true, !e3 || l.isStopped)
      return m(h, p), void (l.isStopped = false);
    e3.play();
  }, toggle() {
    l.isPlaying ? y.pause() : y.play();
  }, pause() {
    var _a;
    (_a = l.audio) == null ? void 0 : _a.pause(), l.isPlaying = false;
  }, stop() {
    var _a;
    l.isPlaying = false, l.isStopped = true, (_a = l.audio) == null ? void 0 : _a.stop();
  }, next() {
    ((e3, o3) => {
      var _a;
      e3.audioIndex = e3.audioIndex === o3.length - 1 ? 0 : e3.audioIndex + 1, (_a = e3.audio) == null ? void 0 : _a.pause();
      const t2 = a({ file: o3[e3.audioIndex], volume: e3.volume });
      e3.audio = t2, t2.play();
    })(l, h);
  }, prev() {
    ((e3, o3) => {
      var _a;
      e3.audioIndex = 0 === e3.audioIndex ? o3.length - 1 : e3.audioIndex - 1, (_a = e3.audio) == null ? void 0 : _a.pause();
      const t2 = a({ file: o3[e3.audioIndex], volume: e3.volume });
      e3.audio = t2, t2.play();
    })(l, h);
  }, on(e3, o3) {
    u.listener(e3, o3);
  }, get volume() {
    return l.volume;
  }, set volume(e3) {
    l.volume = e3, l.audio && (l.audio.volume = e3);
  }, get loop() {
    return l.loop;
  }, get audioCtx() {
    var _a;
    return (_a = l.audio) == null ? void 0 : _a.audioCtx;
  }, set loop(e3) {
    l.loop = e3;
  } };
  return y;
};
export {
  a as Audio,
  i as AudioPlaylist
};
//# sourceMappingURL=ts-audio.js.map
