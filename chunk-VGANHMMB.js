var p = Object.create;
var h = Object.defineProperty
  , q = Object.defineProperties
  , r = Object.getOwnPropertyDescriptor
  , s = Object.getOwnPropertyDescriptors
  , t = Object.getOwnPropertyNames
  , g = Object.getOwnPropertySymbols
  , u = Object.getPrototypeOf
  , k = Object.prototype.hasOwnProperty
  , m = Object.prototype.propertyIsEnumerable;
var w = Math.pow
  , l = (a,b,c)=>b in a ? h(a, b, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: c
}) : a[b] = c
  , x = (a,b)=>{
    for (var c in b || (b = {}))
        k.call(b, c) && l(a, c, b[c]);
    if (g)
        for (var c of g(b))
            m.call(b, c) && l(a, c, b[c]);
    return a
}
  , y = (a,b)=>q(a, s(b));
var z = (a,b)=>{
    var c = {};
    for (var d in a)
        k.call(a, d) && b.indexOf(d) < 0 && (c[d] = a[d]);
    if (a != null && g)
        for (var d of g(a))
            b.indexOf(d) < 0 && m.call(a, d) && (c[d] = a[d]);
    return c
}
;
var A = (a,b)=>()=>(a && (b = a(a = 0)),
b);
var B = (a,b)=>()=>(b || a((b = {
    exports: {}
}).exports, b),
b.exports)
  , C = (a,b)=>{
    for (var c in b)
        h(a, c, {
            get: b[c],
            enumerable: !0
        })
}
  , v = (a,b,c,d)=>{
    if (b && typeof b == "object" || typeof b == "function")
        for (let e of t(b))
            !k.call(a, e) && e !== c && h(a, e, {
                get: ()=>b[e],
                enumerable: !(d = r(b, e)) || d.enumerable
            });
    return a
}
;
var D = (a,b,c)=>(c = a != null ? p(u(a)) : {},
v(b || !a || !a.__esModule ? h(c, "default", {
    value: a,
    enumerable: !0
}) : c, a));
var E = (a,b,c)=>new Promise((d,e)=>{
    var n = f=>{
        try {
            i(c.next(f))
        } catch (j) {
            e(j)
        }
    }
      , o = f=>{
        try {
            i(c.throw(f))
        } catch (j) {
            e(j)
        }
    }
      , i = f=>f.done ? d(f.value) : Promise.resolve(f.value).then(n, o);
    i((c = c.apply(a, b)).next())
}
);
export {w as a, x as b, y as c, z as d, A as e, B as f, C as g, D as h, E as i};
