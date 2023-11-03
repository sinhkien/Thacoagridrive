/*! For license information please see richdocuments-document.js.LICENSE.txt */
(() => {
    var e = {
            7737: (e, t, n) => {
                const r = n(5503),
                    {
                        MAX_LENGTH: o,
                        MAX_SAFE_INTEGER: i
                    } = n(5519),
                    {
                        re: a,
                        t: s
                    } = n(8238),
                    c = n(4433),
                    {
                        compareIdentifiers: l
                    } = n(3242);
                class u {
                    constructor(e, t) {
                        if (t = c(t), e instanceof u) {
                            if (e.loose === !!t.loose && e.includePrerelease === !!t.includePrerelease) return e;
                            e = e.version
                        } else if ("string" != typeof e) throw new TypeError(`Invalid Version: ${e}`);
                        if (e.length > o) throw new TypeError(`version is longer than ${o} characters`);
                        r("SemVer", e, t), this.options = t, this.loose = !!t.loose, this.includePrerelease = !!t.includePrerelease;
                        const n = e.trim().match(t.loose ? a[s.LOOSE] : a[s.FULL]);
                        if (!n) throw new TypeError(`Invalid Version: ${e}`);
                        if (this.raw = e, this.major = +n[1], this.minor = +n[2], this.patch = +n[3], this.major > i || this.major < 0) throw new TypeError("Invalid major version");
                        if (this.minor > i || this.minor < 0) throw new TypeError("Invalid minor version");
                        if (this.patch > i || this.patch < 0) throw new TypeError("Invalid patch version");
                        n[4] ? this.prerelease = n[4].split(".").map((e => {
                            if (/^[0-9]+$/.test(e)) {
                                const t = +e;
                                if (t >= 0 && t < i) return t
                            }
                            return e
                        })) : this.prerelease = [], this.build = n[5] ? n[5].split(".") : [], this.format()
                    }
                    format() {
                        return this.version = `${this.major}.${this.minor}.${this.patch}`, this.prerelease.length && (this.version += `-${this.prerelease.join(".")}`), this.version
                    }
                    toString() {
                        return this.version
                    }
                    compare(e) {
                        if (r("SemVer.compare", this.version, this.options, e), !(e instanceof u)) {
                            if ("string" == typeof e && e === this.version) return 0;
                            e = new u(e, this.options)
                        }
                        return e.version === this.version ? 0 : this.compareMain(e) || this.comparePre(e)
                    }
                    compareMain(e) {
                        return e instanceof u || (e = new u(e, this.options)), l(this.major, e.major) || l(this.minor, e.minor) || l(this.patch, e.patch)
                    }
                    comparePre(e) {
                        if (e instanceof u || (e = new u(e, this.options)), this.prerelease.length && !e.prerelease.length) return -1;
                        if (!this.prerelease.length && e.prerelease.length) return 1;
                        if (!this.prerelease.length && !e.prerelease.length) return 0;
                        let t = 0;
                        do {
                            const n = this.prerelease[t],
                                o = e.prerelease[t];
                            if (r("prerelease compare", t, n, o), void 0 === n && void 0 === o) return 0;
                            if (void 0 === o) return 1;
                            if (void 0 === n) return -1;
                            if (n !== o) return l(n, o)
                        } while (++t)
                    }
                    compareBuild(e) {
                        e instanceof u || (e = new u(e, this.options));
                        let t = 0;
                        do {
                            const n = this.build[t],
                                o = e.build[t];
                            if (r("prerelease compare", t, n, o), void 0 === n && void 0 === o) return 0;
                            if (void 0 === o) return 1;
                            if (void 0 === n) return -1;
                            if (n !== o) return l(n, o)
                        } while (++t)
                    }
                    inc(e, t) {
                        switch (e) {
                            case "premajor":
                                this.prerelease.length = 0, this.patch = 0, this.minor = 0, this.major++, this.inc("pre", t);
                                break;
                            case "preminor":
                                this.prerelease.length = 0, this.patch = 0, this.minor++, this.inc("pre", t);
                                break;
                            case "prepatch":
                                this.prerelease.length = 0, this.inc("patch", t), this.inc("pre", t);
                                break;
                            case "prerelease":
                                0 === this.prerelease.length && this.inc("patch", t), this.inc("pre", t);
                                break;
                            case "major":
                                0 === this.minor && 0 === this.patch && 0 !== this.prerelease.length || this.major++, this.minor = 0, this.patch = 0, this.prerelease = [];
                                break;
                            case "minor":
                                0 === this.patch && 0 !== this.prerelease.length || this.minor++, this.patch = 0, this.prerelease = [];
                                break;
                            case "patch":
                                0 === this.prerelease.length && this.patch++, this.prerelease = [];
                                break;
                            case "pre":
                                if (0 === this.prerelease.length) this.prerelease = [0];
                                else {
                                    let e = this.prerelease.length;
                                    for (; --e >= 0;) "number" == typeof this.prerelease[e] && (this.prerelease[e]++, e = -2); - 1 === e && this.prerelease.push(0)
                                }
                                t && (0 === l(this.prerelease[0], t) ? isNaN(this.prerelease[1]) && (this.prerelease = [t, 0]) : this.prerelease = [t, 0]);
                                break;
                            default:
                                throw new Error(`invalid increment argument: ${e}`)
                        }
                        return this.format(), this.raw = this.version, this
                    }
                }
                e.exports = u
            },
            2426: (e, t, n) => {
                const r = n(7737);
                e.exports = (e, t) => new r(e, t).major
            },
            7488: (e, t, n) => {
                const {
                    MAX_LENGTH: r
                } = n(5519), {
                    re: o,
                    t: i
                } = n(8238), a = n(7737), s = n(4433);
                e.exports = (e, t) => {
                    if (t = s(t), e instanceof a) return e;
                    if ("string" != typeof e) return null;
                    if (e.length > r) return null;
                    if (!(t.loose ? o[i.LOOSE] : o[i.FULL]).test(e)) return null;
                    try {
                        return new a(e, t)
                    } catch (e) {
                        return null
                    }
                }
            },
            7907: (e, t, n) => {
                const r = n(7488);
                e.exports = (e, t) => {
                    const n = r(e, t);
                    return n ? n.version : null
                }
            },
            5519: e => {
                const t = Number.MAX_SAFE_INTEGER || 9007199254740991;
                e.exports = {
                    SEMVER_SPEC_VERSION: "2.0.0",
                    MAX_LENGTH: 256,
                    MAX_SAFE_INTEGER: t,
                    MAX_SAFE_COMPONENT_LENGTH: 16
                }
            },
            5503: (e, t, n) => {
                var r = n(4155);
                const o = "object" == typeof r && r.env && r.env.NODE_DEBUG && /\bsemver\b/i.test(r.env.NODE_DEBUG) ? (...e) => console.error("SEMVER", ...e) : () => {};
                e.exports = o
            },
            3242: e => {
                const t = /^[0-9]+$/,
                    n = (e, n) => {
                        const r = t.test(e),
                            o = t.test(n);
                        return r && o && (e = +e, n = +n), e === n ? 0 : r && !o ? -1 : o && !r ? 1 : e < n ? -1 : 1
                    };
                e.exports = {
                    compareIdentifiers: n,
                    rcompareIdentifiers: (e, t) => n(t, e)
                }
            },
            4433: e => {
                const t = ["includePrerelease", "loose", "rtl"];
                e.exports = e => e ? "object" != typeof e ? {
                    loose: !0
                } : t.filter((t => e[t])).reduce(((e, t) => (e[t] = !0, e)), {}) : {}
            },
            8238: (e, t, n) => {
                const {
                    MAX_SAFE_COMPONENT_LENGTH: r
                } = n(5519), o = n(5503), i = (t = e.exports = {}).re = [], a = t.src = [], s = t.t = {};
                let c = 0;
                const l = (e, t, n) => {
                    const r = c++;
                    o(e, r, t), s[e] = r, a[r] = t, i[r] = new RegExp(t, n ? "g" : void 0)
                };
                l("NUMERICIDENTIFIER", "0|[1-9]\\d*"), l("NUMERICIDENTIFIERLOOSE", "[0-9]+"), l("NONNUMERICIDENTIFIER", "\\d*[a-zA-Z-][a-zA-Z0-9-]*"), l("MAINVERSION", `(${a[s.NUMERICIDENTIFIER]})\\.(${a[s.NUMERICIDENTIFIER]})\\.(${a[s.NUMERICIDENTIFIER]})`), l("MAINVERSIONLOOSE", `(${a[s.NUMERICIDENTIFIERLOOSE]})\\.(${a[s.NUMERICIDENTIFIERLOOSE]})\\.(${a[s.NUMERICIDENTIFIERLOOSE]})`), l("PRERELEASEIDENTIFIER", `(?:${a[s.NUMERICIDENTIFIER]}|${a[s.NONNUMERICIDENTIFIER]})`), l("PRERELEASEIDENTIFIERLOOSE", `(?:${a[s.NUMERICIDENTIFIERLOOSE]}|${a[s.NONNUMERICIDENTIFIER]})`), l("PRERELEASE", `(?:-(${a[s.PRERELEASEIDENTIFIER]}(?:\\.${a[s.PRERELEASEIDENTIFIER]})*))`), l("PRERELEASELOOSE", `(?:-?(${a[s.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${a[s.PRERELEASEIDENTIFIERLOOSE]})*))`), l("BUILDIDENTIFIER", "[0-9A-Za-z-]+"), l("BUILD", `(?:\\+(${a[s.BUILDIDENTIFIER]}(?:\\.${a[s.BUILDIDENTIFIER]})*))`), l("FULLPLAIN", `v?${a[s.MAINVERSION]}${a[s.PRERELEASE]}?${a[s.BUILD]}?`), l("FULL", `^${a[s.FULLPLAIN]}$`), l("LOOSEPLAIN", `[v=\\s]*${a[s.MAINVERSIONLOOSE]}${a[s.PRERELEASELOOSE]}?${a[s.BUILD]}?`), l("LOOSE", `^${a[s.LOOSEPLAIN]}$`), l("GTLT", "((?:<|>)?=?)"), l("XRANGEIDENTIFIERLOOSE", `${a[s.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`), l("XRANGEIDENTIFIER", `${a[s.NUMERICIDENTIFIER]}|x|X|\\*`), l("XRANGEPLAIN", `[v=\\s]*(${a[s.XRANGEIDENTIFIER]})(?:\\.(${a[s.XRANGEIDENTIFIER]})(?:\\.(${a[s.XRANGEIDENTIFIER]})(?:${a[s.PRERELEASE]})?${a[s.BUILD]}?)?)?`), l("XRANGEPLAINLOOSE", `[v=\\s]*(${a[s.XRANGEIDENTIFIERLOOSE]})(?:\\.(${a[s.XRANGEIDENTIFIERLOOSE]})(?:\\.(${a[s.XRANGEIDENTIFIERLOOSE]})(?:${a[s.PRERELEASELOOSE]})?${a[s.BUILD]}?)?)?`), l("XRANGE", `^${a[s.GTLT]}\\s*${a[s.XRANGEPLAIN]}$`), l("XRANGELOOSE", `^${a[s.GTLT]}\\s*${a[s.XRANGEPLAINLOOSE]}$`), l("COERCE", `(^|[^\\d])(\\d{1,${r}})(?:\\.(\\d{1,${r}}))?(?:\\.(\\d{1,${r}}))?(?:$|[^\\d])`), l("COERCERTL", a[s.COERCE], !0), l("LONETILDE", "(?:~>?)"), l("TILDETRIM", `(\\s*)${a[s.LONETILDE]}\\s+`, !0), t.tildeTrimReplace = "$1~", l("TILDE", `^${a[s.LONETILDE]}${a[s.XRANGEPLAIN]}$`), l("TILDELOOSE", `^${a[s.LONETILDE]}${a[s.XRANGEPLAINLOOSE]}$`), l("LONECARET", "(?:\\^)"), l("CARETTRIM", `(\\s*)${a[s.LONECARET]}\\s+`, !0), t.caretTrimReplace = "$1^", l("CARET", `^${a[s.LONECARET]}${a[s.XRANGEPLAIN]}$`), l("CARETLOOSE", `^${a[s.LONECARET]}${a[s.XRANGEPLAINLOOSE]}$`), l("COMPARATORLOOSE", `^${a[s.GTLT]}\\s*(${a[s.LOOSEPLAIN]})$|^$`), l("COMPARATOR", `^${a[s.GTLT]}\\s*(${a[s.FULLPLAIN]})$|^$`), l("COMPARATORTRIM", `(\\s*)${a[s.GTLT]}\\s*(${a[s.LOOSEPLAIN]}|${a[s.XRANGEPLAIN]})`, !0), t.comparatorTrimReplace = "$1$2$3", l("HYPHENRANGE", `^\\s*(${a[s.XRANGEPLAIN]})\\s+-\\s+(${a[s.XRANGEPLAIN]})\\s*$`), l("HYPHENRANGELOOSE", `^\\s*(${a[s.XRANGEPLAINLOOSE]})\\s+-\\s+(${a[s.XRANGEPLAINLOOSE]})\\s*$`), l("STAR", "(<|>)?=?\\s*\\*"), l("GTE0", "^\\s*>=\\s*0\\.0\\.0\\s*$"), l("GTE0PRE", "^\\s*>=\\s*0\\.0\\.0-0\\s*$")
            },
            5358: (e, t, n) => {
                "use strict";

                function r() {
                    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                    if (arguments.length < 1) return "";
                    var r = t.filter((function(e) {
                        return e.length > 0
                    }));
                    if (r.length < 1) return "";
                    var o = r[r.length - 1],
                        i = "/" === r[0].charAt(0),
                        a = "/" === o.charAt(o.length - 1),
                        s = r.reduce((function(e, t) {
                            return e.concat(t.split("/"))
                        }), []),
                        c = !i,
                        l = s.reduce((function(e, t) {
                            return "" === t ? e : c ? (c = !1, e + t) : e + "/" + t
                        }), "");
                    return a ? l + "/" : l
                }
                t.Ec = function(e) {
                    if (!e) return e;
                    return e.split("/").map(encodeURIComponent).join("/")
                }, n(1249), n(4916), n(3123), n(5306), n(7327), n(5827), n(2222)
            },
            9753: (e, t, n) => {
                "use strict";
                n(9070), t.imagePath = t.getRootUrl = t.generateUrl = t.generateOcsUrl = void 0, n(9601), n(4916), n(5306), n(1539), n(9714), n(2772);
                t.generateOcsUrl = function(e, t, n) {
                    var o = 1 === Object.assign({
                        ocsVersion: 2
                    }, n || {}).ocsVersion ? 1 : 2;
                    return window.location.protocol + "//" + window.location.host + i() + "/ocs/v" + o + ".php" + r(e, t, n)
                };
                var r = function(e, t, n) {
                    var r, o = Object.assign({
                        escape: !0
                    }, n || {});
                    return "/" !== e.charAt(0) && (e = "/" + e), r = (r = t || {}) || {}, e.replace(/{([^{}]*)}/g, (function(e, t) {
                        var n = r[t];
                        return o.escape ? "string" == typeof n || "number" == typeof n ? encodeURIComponent(n.toString()) : encodeURIComponent(e) : "string" == typeof n || "number" == typeof n ? n.toString() : e
                    }))
                };
                t.generateUrl = function(e, t, n) {
                    var o, a, s, c = Object.assign({
                        noRewrite: !1
                    }, n || {});
                    return !0 !== (null === (o = window) || void 0 === o || null === (a = o.OC) || void 0 === a || null === (s = a.config) || void 0 === s ? void 0 : s.modRewriteWorking) || c.noRewrite ? i() + "/index.php" + r(e, t, n) : i() + r(e, t, n)
                };
                t.imagePath = function(e, t) {
                    return -1 === t.indexOf(".") ? o(e, "img", t + ".svg") : o(e, "img", t)
                };
                var o = function(e, t, n) {
                    var r, o, a, s = -1 !== (null === (r = window) || void 0 === r || null === (o = r.OC) || void 0 === o || null === (a = o.coreApps) || void 0 === a ? void 0 : a.indexOf(e)),
                        c = i();
                    if ("php" !== n.substring(n.length - 3) || s)
                        if ("php" === n.substring(n.length - 3) || s) c += "settings" !== e && "core" !== e && "search" !== e || "ajax" !== t ? "/" : "/index.php/", s || (c += "apps/"), "" !== e && (c += e += "/"), t && (c += t + "/"), c += n;
                        else {
                            var l, u, d;
                            c = null === (l = window) || void 0 === l || null === (u = l.OC) || void 0 === u || null === (d = u.appswebroots) || void 0 === d ? void 0 : d[e], t && (c += "/" + t + "/"), "/" !== c.substring(c.length - 1) && (c += "/"), c += n
                        }
                    else c += "/index.php/apps/" + e, "index.php" !== n && (c += "/", t && (c += encodeURI(t + "/")), c += n);
                    return c
                };
                var i = function() {
                    var e, t;
                    return (null === (e = window) || void 0 === e || null === (t = e.OC) || void 0 === t ? void 0 : t.webroot) || ""
                };
                t.getRootUrl = i
            },
            9669: (e, t, n) => {
                e.exports = n(1609)
            },
            5448: (e, t, n) => {
                "use strict";
                var r = n(4867),
                    o = n(6026),
                    i = n(4372),
                    a = n(5327),
                    s = n(4097),
                    c = n(4109),
                    l = n(7985),
                    u = n(7874),
                    d = n(2648),
                    p = n(644),
                    f = n(205);
                e.exports = function(e) {
                    return new Promise((function(t, n) {
                        var A, m = e.data,
                            h = e.headers,
                            g = e.responseType;

                        function v() {
                            e.cancelToken && e.cancelToken.unsubscribe(A), e.signal && e.signal.removeEventListener("abort", A)
                        }
                        r.isFormData(m) && r.isStandardBrowserEnv() && delete h["Content-Type"];
                        var b = new XMLHttpRequest;
                        if (e.auth) {
                            var C = e.auth.username || "",
                                y = e.auth.password ? unescape(encodeURIComponent(e.auth.password)) : "";
                            h.Authorization = "Basic " + btoa(C + ":" + y)
                        }
                        var x = s(e.baseURL, e.url);

                        function w() {
                            if (b) {
                                var r = "getAllResponseHeaders" in b ? c(b.getAllResponseHeaders()) : null,
                                    i = {
                                        data: g && "text" !== g && "json" !== g ? b.response : b.responseText,
                                        status: b.status,
                                        statusText: b.statusText,
                                        headers: r,
                                        config: e,
                                        request: b
                                    };
                                o((function(e) {
                                    t(e), v()
                                }), (function(e) {
                                    n(e), v()
                                }), i), b = null
                            }
                        }
                        if (b.open(e.method.toUpperCase(), a(x, e.params, e.paramsSerializer), !0), b.timeout = e.timeout, "onloadend" in b ? b.onloadend = w : b.onreadystatechange = function() {
                                b && 4 === b.readyState && (0 !== b.status || b.responseURL && 0 === b.responseURL.indexOf("file:")) && setTimeout(w)
                            }, b.onabort = function() {
                                b && (n(new d("Request aborted", d.ECONNABORTED, e, b)), b = null)
                            }, b.onerror = function() {
                                n(new d("Network Error", d.ERR_NETWORK, e, b, b)), b = null
                            }, b.ontimeout = function() {
                                var t = e.timeout ? "timeout of " + e.timeout + "ms exceeded" : "timeout exceeded",
                                    r = e.transitional || u;
                                e.timeoutErrorMessage && (t = e.timeoutErrorMessage), n(new d(t, r.clarifyTimeoutError ? d.ETIMEDOUT : d.ECONNABORTED, e, b)), b = null
                            }, r.isStandardBrowserEnv()) {
                            var E = (e.withCredentials || l(x)) && e.xsrfCookieName ? i.read(e.xsrfCookieName) : void 0;
                            E && (h[e.xsrfHeaderName] = E)
                        }
                        "setRequestHeader" in b && r.forEach(h, (function(e, t) {
                            void 0 === m && "content-type" === t.toLowerCase() ? delete h[t] : b.setRequestHeader(t, e)
                        })), r.isUndefined(e.withCredentials) || (b.withCredentials = !!e.withCredentials), g && "json" !== g && (b.responseType = e.responseType), "function" == typeof e.onDownloadProgress && b.addEventListener("progress", e.onDownloadProgress), "function" == typeof e.onUploadProgress && b.upload && b.upload.addEventListener("progress", e.onUploadProgress), (e.cancelToken || e.signal) && (A = function(e) {
                            b && (n(!e || e && e.type ? new p : e), b.abort(), b = null)
                        }, e.cancelToken && e.cancelToken.subscribe(A), e.signal && (e.signal.aborted ? A() : e.signal.addEventListener("abort", A))), m || (m = null);
                        var O = f(x);
                        O && -1 === ["http", "https", "file"].indexOf(O) ? n(new d("Unsupported protocol " + O + ":", d.ERR_BAD_REQUEST, e)) : b.send(m)
                    }))
                }
            },
            1609: (e, t, n) => {
                "use strict";
                var r = n(4867),
                    o = n(1849),
                    i = n(321),
                    a = n(7185);
                var s = function e(t) {
                    var n = new i(t),
                        s = o(i.prototype.request, n);
                    return r.extend(s, i.prototype, n), r.extend(s, n), s.create = function(n) {
                        return e(a(t, n))
                    }, s
                }(n(5546));
                s.Axios = i, s.CanceledError = n(644), s.CancelToken = n(4972), s.isCancel = n(6502), s.VERSION = n(7288).version, s.toFormData = n(7675), s.AxiosError = n(2648), s.Cancel = s.CanceledError, s.all = function(e) {
                    return Promise.all(e)
                }, s.spread = n(8713), s.isAxiosError = n(6268), e.exports = s, e.exports.default = s
            },
            4972: (e, t, n) => {
                "use strict";
                var r = n(644);

                function o(e) {
                    if ("function" != typeof e) throw new TypeError("executor must be a function.");
                    var t;
                    this.promise = new Promise((function(e) {
                        t = e
                    }));
                    var n = this;
                    this.promise.then((function(e) {
                        if (n._listeners) {
                            var t, r = n._listeners.length;
                            for (t = 0; t < r; t++) n._listeners[t](e);
                            n._listeners = null
                        }
                    })), this.promise.then = function(e) {
                        var t, r = new Promise((function(e) {
                            n.subscribe(e), t = e
                        })).then(e);
                        return r.cancel = function() {
                            n.unsubscribe(t)
                        }, r
                    }, e((function(e) {
                        n.reason || (n.reason = new r(e), t(n.reason))
                    }))
                }
                o.prototype.throwIfRequested = function() {
                    if (this.reason) throw this.reason
                }, o.prototype.subscribe = function(e) {
                    this.reason ? e(this.reason) : this._listeners ? this._listeners.push(e) : this._listeners = [e]
                }, o.prototype.unsubscribe = function(e) {
                    if (this._listeners) {
                        var t = this._listeners.indexOf(e); - 1 !== t && this._listeners.splice(t, 1)
                    }
                }, o.source = function() {
                    var e;
                    return {
                        token: new o((function(t) {
                            e = t
                        })),
                        cancel: e
                    }
                }, e.exports = o
            },
            644: (e, t, n) => {
                "use strict";
                var r = n(2648);

                function o(e) {
                    r.call(this, null == e ? "canceled" : e, r.ERR_CANCELED), this.name = "CanceledError"
                }
                n(4867).inherits(o, r, {
                    __CANCEL__: !0
                }), e.exports = o
            },
            6502: e => {
                "use strict";
                e.exports = function(e) {
                    return !(!e || !e.__CANCEL__)
                }
            },
            321: (e, t, n) => {
                "use strict";
                var r = n(4867),
                    o = n(5327),
                    i = n(782),
                    a = n(3572),
                    s = n(7185),
                    c = n(4097),
                    l = n(4875),
                    u = l.validators;

                function d(e) {
                    this.defaults = e, this.interceptors = {
                        request: new i,
                        response: new i
                    }
                }
                d.prototype.request = function(e, t) {
                    "string" == typeof e ? (t = t || {}).url = e : t = e || {}, (t = s(this.defaults, t)).method ? t.method = t.method.toLowerCase() : this.defaults.method ? t.method = this.defaults.method.toLowerCase() : t.method = "get";
                    var n = t.transitional;
                    void 0 !== n && l.assertOptions(n, {
                        silentJSONParsing: u.transitional(u.boolean),
                        forcedJSONParsing: u.transitional(u.boolean),
                        clarifyTimeoutError: u.transitional(u.boolean)
                    }, !1);
                    var r = [],
                        o = !0;
                    this.interceptors.request.forEach((function(e) {
                        "function" == typeof e.runWhen && !1 === e.runWhen(t) || (o = o && e.synchronous, r.unshift(e.fulfilled, e.rejected))
                    }));
                    var i, c = [];
                    if (this.interceptors.response.forEach((function(e) {
                            c.push(e.fulfilled, e.rejected)
                        })), !o) {
                        var d = [a, void 0];
                        for (Array.prototype.unshift.apply(d, r), d = d.concat(c), i = Promise.resolve(t); d.length;) i = i.then(d.shift(), d.shift());
                        return i
                    }
                    for (var p = t; r.length;) {
                        var f = r.shift(),
                            A = r.shift();
                        try {
                            p = f(p)
                        } catch (e) {
                            A(e);
                            break
                        }
                    }
                    try {
                        i = a(p)
                    } catch (e) {
                        return Promise.reject(e)
                    }
                    for (; c.length;) i = i.then(c.shift(), c.shift());
                    return i
                }, d.prototype.getUri = function(e) {
                    e = s(this.defaults, e);
                    var t = c(e.baseURL, e.url);
                    return o(t, e.params, e.paramsSerializer)
                }, r.forEach(["delete", "get", "head", "options"], (function(e) {
                    d.prototype[e] = function(t, n) {
                        return this.request(s(n || {}, {
                            method: e,
                            url: t,
                            data: (n || {}).data
                        }))
                    }
                })), r.forEach(["post", "put", "patch"], (function(e) {
                    function t(t) {
                        return function(n, r, o) {
                            return this.request(s(o || {}, {
                                method: e,
                                headers: t ? {
                                    "Content-Type": "multipart/form-data"
                                } : {},
                                url: n,
                                data: r
                            }))
                        }
                    }
                    d.prototype[e] = t(), d.prototype[e + "Form"] = t(!0)
                })), e.exports = d
            },
            2648: (e, t, n) => {
                "use strict";
                var r = n(4867);

                function o(e, t, n, r, o) {
                    Error.call(this), this.message = e, this.name = "AxiosError", t && (this.code = t), n && (this.config = n), r && (this.request = r), o && (this.response = o)
                }
                r.inherits(o, Error, {
                    toJSON: function() {
                        return {
                            message: this.message,
                            name: this.name,
                            description: this.description,
                            number: this.number,
                            fileName: this.fileName,
                            lineNumber: this.lineNumber,
                            columnNumber: this.columnNumber,
                            stack: this.stack,
                            config: this.config,
                            code: this.code,
                            status: this.response && this.response.status ? this.response.status : null
                        }
                    }
                });
                var i = o.prototype,
                    a = {};
                ["ERR_BAD_OPTION_VALUE", "ERR_BAD_OPTION", "ECONNABORTED", "ETIMEDOUT", "ERR_NETWORK", "ERR_FR_TOO_MANY_REDIRECTS", "ERR_DEPRECATED", "ERR_BAD_RESPONSE", "ERR_BAD_REQUEST", "ERR_CANCELED"].forEach((function(e) {
                    a[e] = {
                        value: e
                    }
                })), Object.defineProperties(o, a), Object.defineProperty(i, "isAxiosError", {
                    value: !0
                }), o.from = function(e, t, n, a, s, c) {
                    var l = Object.create(i);
                    return r.toFlatObject(e, l, (function(e) {
                        return e !== Error.prototype
                    })), o.call(l, e.message, t, n, a, s), l.name = e.name, c && Object.assign(l, c), l
                }, e.exports = o
            },
            782: (e, t, n) => {
                "use strict";
                var r = n(4867);

                function o() {
                    this.handlers = []
                }
                o.prototype.use = function(e, t, n) {
                    return this.handlers.push({
                        fulfilled: e,
                        rejected: t,
                        synchronous: !!n && n.synchronous,
                        runWhen: n ? n.runWhen : null
                    }), this.handlers.length - 1
                }, o.prototype.eject = function(e) {
                    this.handlers[e] && (this.handlers[e] = null)
                }, o.prototype.forEach = function(e) {
                    r.forEach(this.handlers, (function(t) {
                        null !== t && e(t)
                    }))
                }, e.exports = o
            },
            4097: (e, t, n) => {
                "use strict";
                var r = n(1793),
                    o = n(7303);
                e.exports = function(e, t) {
                    return e && !r(t) ? o(e, t) : t
                }
            },
            3572: (e, t, n) => {
                "use strict";
                var r = n(4867),
                    o = n(8527),
                    i = n(6502),
                    a = n(5546),
                    s = n(644);

                function c(e) {
                    if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted) throw new s
                }
                e.exports = function(e) {
                    return c(e), e.headers = e.headers || {}, e.data = o.call(e, e.data, e.headers, e.transformRequest), e.headers = r.merge(e.headers.common || {}, e.headers[e.method] || {}, e.headers), r.forEach(["delete", "get", "head", "post", "put", "patch", "common"], (function(t) {
                        delete e.headers[t]
                    })), (e.adapter || a.adapter)(e).then((function(t) {
                        return c(e), t.data = o.call(e, t.data, t.headers, e.transformResponse), t
                    }), (function(t) {
                        return i(t) || (c(e), t && t.response && (t.response.data = o.call(e, t.response.data, t.response.headers, e.transformResponse))), Promise.reject(t)
                    }))
                }
            },
            7185: (e, t, n) => {
                "use strict";
                var r = n(4867);
                e.exports = function(e, t) {
                    t = t || {};
                    var n = {};

                    function o(e, t) {
                        return r.isPlainObject(e) && r.isPlainObject(t) ? r.merge(e, t) : r.isPlainObject(t) ? r.merge({}, t) : r.isArray(t) ? t.slice() : t
                    }

                    function i(n) {
                        return r.isUndefined(t[n]) ? r.isUndefined(e[n]) ? void 0 : o(void 0, e[n]) : o(e[n], t[n])
                    }

                    function a(e) {
                        if (!r.isUndefined(t[e])) return o(void 0, t[e])
                    }

                    function s(n) {
                        return r.isUndefined(t[n]) ? r.isUndefined(e[n]) ? void 0 : o(void 0, e[n]) : o(void 0, t[n])
                    }

                    function c(n) {
                        return n in t ? o(e[n], t[n]) : n in e ? o(void 0, e[n]) : void 0
                    }
                    var l = {
                        url: a,
                        method: a,
                        data: a,
                        baseURL: s,
                        transformRequest: s,
                        transformResponse: s,
                        paramsSerializer: s,
                        timeout: s,
                        timeoutMessage: s,
                        withCredentials: s,
                        adapter: s,
                        responseType: s,
                        xsrfCookieName: s,
                        xsrfHeaderName: s,
                        onUploadProgress: s,
                        onDownloadProgress: s,
                        decompress: s,
                        maxContentLength: s,
                        maxBodyLength: s,
                        beforeRedirect: s,
                        transport: s,
                        httpAgent: s,
                        httpsAgent: s,
                        cancelToken: s,
                        socketPath: s,
                        responseEncoding: s,
                        validateStatus: c
                    };
                    return r.forEach(Object.keys(e).concat(Object.keys(t)), (function(e) {
                        var t = l[e] || i,
                            o = t(e);
                        r.isUndefined(o) && t !== c || (n[e] = o)
                    })), n
                }
            },
            6026: (e, t, n) => {
                "use strict";
                var r = n(2648);
                e.exports = function(e, t, n) {
                    var o = n.config.validateStatus;
                    n.status && o && !o(n.status) ? t(new r("Request failed with status code " + n.status, [r.ERR_BAD_REQUEST, r.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4], n.config, n.request, n)) : e(n)
                }
            },
            8527: (e, t, n) => {
                "use strict";
                var r = n(4867),
                    o = n(5546);
                e.exports = function(e, t, n) {
                    var i = this || o;
                    return r.forEach(n, (function(n) {
                        e = n.call(i, e, t)
                    })), e
                }
            },
            5546: (e, t, n) => {
                "use strict";
                var r = n(4155),
                    o = n(4867),
                    i = n(6016),
                    a = n(2648),
                    s = n(7874),
                    c = n(7675),
                    l = {
                        "Content-Type": "application/x-www-form-urlencoded"
                    };

                function u(e, t) {
                    !o.isUndefined(e) && o.isUndefined(e["Content-Type"]) && (e["Content-Type"] = t)
                }
                var d, p = {
                    transitional: s,
                    adapter: (("undefined" != typeof XMLHttpRequest || void 0 !== r && "[object process]" === Object.prototype.toString.call(r)) && (d = n(5448)), d),
                    transformRequest: [function(e, t) {
                        if (i(t, "Accept"), i(t, "Content-Type"), o.isFormData(e) || o.isArrayBuffer(e) || o.isBuffer(e) || o.isStream(e) || o.isFile(e) || o.isBlob(e)) return e;
                        if (o.isArrayBufferView(e)) return e.buffer;
                        if (o.isURLSearchParams(e)) return u(t, "application/x-www-form-urlencoded;charset=utf-8"), e.toString();
                        var n, r = o.isObject(e),
                            a = t && t["Content-Type"];
                        if ((n = o.isFileList(e)) || r && "multipart/form-data" === a) {
                            var s = this.env && this.env.FormData;
                            return c(n ? {
                                "files[]": e
                            } : e, s && new s)
                        }
                        return r || "application/json" === a ? (u(t, "application/json"), function(e, t, n) {
                            if (o.isString(e)) try {
                                return (t || JSON.parse)(e), o.trim(e)
                            } catch (e) {
                                if ("SyntaxError" !== e.name) throw e
                            }
                            return (n || JSON.stringify)(e)
                        }(e)) : e
                    }],
                    transformResponse: [function(e) {
                        var t = this.transitional || p.transitional,
                            n = t && t.silentJSONParsing,
                            r = t && t.forcedJSONParsing,
                            i = !n && "json" === this.responseType;
                        if (i || r && o.isString(e) && e.length) try {
                            return JSON.parse(e)
                        } catch (e) {
                            if (i) {
                                if ("SyntaxError" === e.name) throw a.from(e, a.ERR_BAD_RESPONSE, this, null, this.response);
                                throw e
                            }
                        }
                        return e
                    }],
                    timeout: 0,
                    xsrfCookieName: "XSRF-TOKEN",
                    xsrfHeaderName: "X-XSRF-TOKEN",
                    maxContentLength: -1,
                    maxBodyLength: -1,
                    env: {
                        FormData: n(1623)
                    },
                    validateStatus: function(e) {
                        return e >= 200 && e < 300
                    },
                    headers: {
                        common: {
                            Accept: "application/json, text/plain, */*"
                        }
                    }
                };
                o.forEach(["delete", "get", "head"], (function(e) {
                    p.headers[e] = {}
                })), o.forEach(["post", "put", "patch"], (function(e) {
                    p.headers[e] = o.merge(l)
                })), e.exports = p
            },
            7874: e => {
                "use strict";
                e.exports = {
                    silentJSONParsing: !0,
                    forcedJSONParsing: !0,
                    clarifyTimeoutError: !1
                }
            },
            7288: e => {
                e.exports = {
                    version: "0.27.2"
                }
            },
            1849: e => {
                "use strict";
                e.exports = function(e, t) {
                    return function() {
                        for (var n = new Array(arguments.length), r = 0; r < n.length; r++) n[r] = arguments[r];
                        return e.apply(t, n)
                    }
                }
            },
            5327: (e, t, n) => {
                "use strict";
                var r = n(4867);

                function o(e) {
                    return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]")
                }
                e.exports = function(e, t, n) {
                    if (!t) return e;
                    var i;
                    if (n) i = n(t);
                    else if (r.isURLSearchParams(t)) i = t.toString();
                    else {
                        var a = [];
                        r.forEach(t, (function(e, t) {
                            null != e && (r.isArray(e) ? t += "[]" : e = [e], r.forEach(e, (function(e) {
                                r.isDate(e) ? e = e.toISOString() : r.isObject(e) && (e = JSON.stringify(e)), a.push(o(t) + "=" + o(e))
                            })))
                        })), i = a.join("&")
                    }
                    if (i) {
                        var s = e.indexOf("#"); - 1 !== s && (e = e.slice(0, s)), e += (-1 === e.indexOf("?") ? "?" : "&") + i
                    }
                    return e
                }
            },
            7303: e => {
                "use strict";
                e.exports = function(e, t) {
                    return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e
                }
            },
            4372: (e, t, n) => {
                "use strict";
                var r = n(4867);
                e.exports = r.isStandardBrowserEnv() ? {
                    write: function(e, t, n, o, i, a) {
                        var s = [];
                        s.push(e + "=" + encodeURIComponent(t)), r.isNumber(n) && s.push("expires=" + new Date(n).toGMTString()), r.isString(o) && s.push("path=" + o), r.isString(i) && s.push("domain=" + i), !0 === a && s.push("secure"), document.cookie = s.join("; ")
                    },
                    read: function(e) {
                        var t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
                        return t ? decodeURIComponent(t[3]) : null
                    },
                    remove: function(e) {
                        this.write(e, "", Date.now() - 864e5)
                    }
                } : {
                    write: function() {},
                    read: function() {
                        return null
                    },
                    remove: function() {}
                }
            },
            1793: e => {
                "use strict";
                e.exports = function(e) {
                    return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)
                }
            },
            6268: (e, t, n) => {
                "use strict";
                var r = n(4867);
                e.exports = function(e) {
                    return r.isObject(e) && !0 === e.isAxiosError
                }
            },
            7985: (e, t, n) => {
                "use strict";
                var r = n(4867);
                e.exports = r.isStandardBrowserEnv() ? function() {
                    var e, t = /(msie|trident)/i.test(navigator.userAgent),
                        n = document.createElement("a");

                    function o(e) {
                        var r = e;
                        return t && (n.setAttribute("href", r), r = n.href), n.setAttribute("href", r), {
                            href: n.href,
                            protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
                            host: n.host,
                            search: n.search ? n.search.replace(/^\?/, "") : "",
                            hash: n.hash ? n.hash.replace(/^#/, "") : "",
                            hostname: n.hostname,
                            port: n.port,
                            pathname: "/" === n.pathname.charAt(0) ? n.pathname : "/" + n.pathname
                        }
                    }
                    return e = o(window.location.href),
                        function(t) {
                            var n = r.isString(t) ? o(t) : t;
                            return n.protocol === e.protocol && n.host === e.host
                        }
                }() : function() {
                    return !0
                }
            },
            6016: (e, t, n) => {
                "use strict";
                var r = n(4867);
                e.exports = function(e, t) {
                    r.forEach(e, (function(n, r) {
                        r !== t && r.toUpperCase() === t.toUpperCase() && (e[t] = n, delete e[r])
                    }))
                }
            },
            1623: e => {
                e.exports = null
            },
            4109: (e, t, n) => {
                "use strict";
                var r = n(4867),
                    o = ["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"];
                e.exports = function(e) {
                    var t, n, i, a = {};
                    return e ? (r.forEach(e.split("\n"), (function(e) {
                        if (i = e.indexOf(":"), t = r.trim(e.substr(0, i)).toLowerCase(), n = r.trim(e.substr(i + 1)), t) {
                            if (a[t] && o.indexOf(t) >= 0) return;
                            a[t] = "set-cookie" === t ? (a[t] ? a[t] : []).concat([n]) : a[t] ? a[t] + ", " + n : n
                        }
                    })), a) : a
                }
            },
            205: e => {
                "use strict";
                e.exports = function(e) {
                    var t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
                    return t && t[1] || ""
                }
            },
            8713: e => {
                "use strict";
                e.exports = function(e) {
                    return function(t) {
                        return e.apply(null, t)
                    }
                }
            },
            7675: (e, t, n) => {
                "use strict";
                var r = n(4867);
                e.exports = function(e, t) {
                    t = t || new FormData;
                    var n = [];

                    function o(e) {
                        return null === e ? "" : r.isDate(e) ? e.toISOString() : r.isArrayBuffer(e) || r.isTypedArray(e) ? "function" == typeof Blob ? new Blob([e]) : Buffer.from(e) : e
                    }
                    return function e(i, a) {
                        if (r.isPlainObject(i) || r.isArray(i)) {
                            if (-1 !== n.indexOf(i)) throw Error("Circular reference detected in " + a);
                            n.push(i), r.forEach(i, (function(n, i) {
                                if (!r.isUndefined(n)) {
                                    var s, c = a ? a + "." + i : i;
                                    if (n && !a && "object" == typeof n)
                                        if (r.endsWith(i, "{}")) n = JSON.stringify(n);
                                        else if (r.endsWith(i, "[]") && (s = r.toArray(n))) return void s.forEach((function(e) {
                                        !r.isUndefined(e) && t.append(c, o(e))
                                    }));
                                    e(n, c)
                                }
                            })), n.pop()
                        } else t.append(a, o(i))
                    }(e), t
                }
            },
            4875: (e, t, n) => {
                "use strict";
                var r = n(7288).version,
                    o = n(2648),
                    i = {};
                ["object", "boolean", "number", "function", "string", "symbol"].forEach((function(e, t) {
                    i[e] = function(n) {
                        return typeof n === e || "a" + (t < 1 ? "n " : " ") + e
                    }
                }));
                var a = {};
                i.transitional = function(e, t, n) {
                    function i(e, t) {
                        return "[Axios v" + r + "] Transitional option '" + e + "'" + t + (n ? ". " + n : "")
                    }
                    return function(n, r, s) {
                        if (!1 === e) throw new o(i(r, " has been removed" + (t ? " in " + t : "")), o.ERR_DEPRECATED);
                        return t && !a[r] && (a[r] = !0, console.warn(i(r, " has been deprecated since v" + t + " and will be removed in the near future"))), !e || e(n, r, s)
                    }
                }, e.exports = {
                    assertOptions: function(e, t, n) {
                        if ("object" != typeof e) throw new o("options must be an object", o.ERR_BAD_OPTION_VALUE);
                        for (var r = Object.keys(e), i = r.length; i-- > 0;) {
                            var a = r[i],
                                s = t[a];
                            if (s) {
                                var c = e[a],
                                    l = void 0 === c || s(c, a, e);
                                if (!0 !== l) throw new o("option " + a + " must be " + l, o.ERR_BAD_OPTION_VALUE)
                            } else if (!0 !== n) throw new o("Unknown option " + a, o.ERR_BAD_OPTION)
                        }
                    },
                    validators: i
                }
            },
            4867: (e, t, n) => {
                "use strict";
                var r, o = n(1849),
                    i = Object.prototype.toString,
                    a = (r = Object.create(null), function(e) {
                        var t = i.call(e);
                        return r[t] || (r[t] = t.slice(8, -1).toLowerCase())
                    });

                function s(e) {
                    return e = e.toLowerCase(),
                        function(t) {
                            return a(t) === e
                        }
                }

                function c(e) {
                    return Array.isArray(e)
                }

                function l(e) {
                    return void 0 === e
                }
                var u = s("ArrayBuffer");

                function d(e) {
                    return null !== e && "object" == typeof e
                }

                function p(e) {
                    if ("object" !== a(e)) return !1;
                    var t = Object.getPrototypeOf(e);
                    return null === t || t === Object.prototype
                }
                var f = s("Date"),
                    A = s("File"),
                    m = s("Blob"),
                    h = s("FileList");

                function g(e) {
                    return "[object Function]" === i.call(e)
                }
                var v = s("URLSearchParams");

                function b(e, t) {
                    if (null != e)
                        if ("object" != typeof e && (e = [e]), c(e))
                            for (var n = 0, r = e.length; n < r; n++) t.call(null, e[n], n, e);
                        else
                            for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.call(null, e[o], o, e)
                }
                var C, y = (C = "undefined" != typeof Uint8Array && Object.getPrototypeOf(Uint8Array), function(e) {
                    return C && e instanceof C
                });
                e.exports = {
                    isArray: c,
                    isArrayBuffer: u,
                    isBuffer: function(e) {
                        return null !== e && !l(e) && null !== e.constructor && !l(e.constructor) && "function" == typeof e.constructor.isBuffer && e.constructor.isBuffer(e)
                    },
                    isFormData: function(e) {
                        var t = "[object FormData]";
                        return e && ("function" == typeof FormData && e instanceof FormData || i.call(e) === t || g(e.toString) && e.toString() === t)
                    },
                    isArrayBufferView: function(e) {
                        return "undefined" != typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(e) : e && e.buffer && u(e.buffer)
                    },
                    isString: function(e) {
                        return "string" == typeof e
                    },
                    isNumber: function(e) {
                        return "number" == typeof e
                    },
                    isObject: d,
                    isPlainObject: p,
                    isUndefined: l,
                    isDate: f,
                    isFile: A,
                    isBlob: m,
                    isFunction: g,
                    isStream: function(e) {
                        return d(e) && g(e.pipe)
                    },
                    isURLSearchParams: v,
                    isStandardBrowserEnv: function() {
                        return ("undefined" == typeof navigator || "ReactNative" !== navigator.product && "NativeScript" !== navigator.product && "NS" !== navigator.product) && ("undefined" != typeof window && "undefined" != typeof document)
                    },
                    forEach: b,
                    merge: function e() {
                        var t = {};

                        function n(n, r) {
                            p(t[r]) && p(n) ? t[r] = e(t[r], n) : p(n) ? t[r] = e({}, n) : c(n) ? t[r] = n.slice() : t[r] = n
                        }
                        for (var r = 0, o = arguments.length; r < o; r++) b(arguments[r], n);
                        return t
                    },
                    extend: function(e, t, n) {
                        return b(t, (function(t, r) {
                            e[r] = n && "function" == typeof t ? o(t, n) : t
                        })), e
                    },
                    trim: function(e) {
                        return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, "")
                    },
                    stripBOM: function(e) {
                        return 65279 === e.charCodeAt(0) && (e = e.slice(1)), e
                    },
                    inherits: function(e, t, n, r) {
                        e.prototype = Object.create(t.prototype, r), e.prototype.constructor = e, n && Object.assign(e.prototype, n)
                    },
                    toFlatObject: function(e, t, n) {
                        var r, o, i, a = {};
                        t = t || {};
                        do {
                            for (o = (r = Object.getOwnPropertyNames(e)).length; o-- > 0;) a[i = r[o]] || (t[i] = e[i], a[i] = !0);
                            e = Object.getPrototypeOf(e)
                        } while (e && (!n || n(e, t)) && e !== Object.prototype);
                        return t
                    },
                    kindOf: a,
                    kindOfTest: s,
                    endsWith: function(e, t, n) {
                        e = String(e), (void 0 === n || n > e.length) && (n = e.length), n -= t.length;
                        var r = e.indexOf(t, n);
                        return -1 !== r && r === n
                    },
                    toArray: function(e) {
                        if (!e) return null;
                        var t = e.length;
                        if (l(t)) return null;
                        for (var n = new Array(t); t-- > 0;) n[t] = e[t];
                        return n
                    },
                    isTypedArray: y,
                    isFileList: h
                }
            },
            9662: (e, t, n) => {
                var r = n(614),
                    o = n(6330),
                    i = TypeError;
                e.exports = function(e) {
                    if (r(e)) return e;
                    throw i(o(e) + " is not a function")
                }
            },
            9483: (e, t, n) => {
                var r = n(4411),
                    o = n(6330),
                    i = TypeError;
                e.exports = function(e) {
                    if (r(e)) return e;
                    throw i(o(e) + " is not a constructor")
                }
            },
            1530: (e, t, n) => {
                "use strict";
                var r = n(8710).charAt;
                e.exports = function(e, t, n) {
                    return t + (n ? r(e, t).length : 1)
                }
            },
            9670: (e, t, n) => {
                var r = n(111),
                    o = String,
                    i = TypeError;
                e.exports = function(e) {
                    if (r(e)) return e;
                    throw i(o(e) + " is not an object")
                }
            },
            1318: (e, t, n) => {
                var r = n(5656),
                    o = n(1400),
                    i = n(6244),
                    a = function(e) {
                        return function(t, n, a) {
                            var s, c = r(t),
                                l = i(c),
                                u = o(a, l);
                            if (e && n != n) {
                                for (; l > u;)
                                    if ((s = c[u++]) != s) return !0
                            } else
                                for (; l > u; u++)
                                    if ((e || u in c) && c[u] === n) return e || u || 0;
                            return !e && -1
                        }
                    };
                e.exports = {
                    includes: a(!0),
                    indexOf: a(!1)
                }
            },
            2092: (e, t, n) => {
                var r = n(9974),
                    o = n(1702),
                    i = n(8361),
                    a = n(7908),
                    s = n(6244),
                    c = n(5417),
                    l = o([].push),
                    u = function(e) {
                        var t = 1 == e,
                            n = 2 == e,
                            o = 3 == e,
                            u = 4 == e,
                            d = 6 == e,
                            p = 7 == e,
                            f = 5 == e || d;
                        return function(A, m, h, g) {
                            for (var v, b, C = a(A), y = i(C), x = r(m, h), w = s(y), E = 0, O = g || c, I = t ? O(A, w) : n || p ? O(A, 0) : void 0; w > E; E++)
                                if ((f || E in y) && (b = x(v = y[E], E, C), e))
                                    if (t) I[E] = b;
                                    else if (b) switch (e) {
                                case 3:
                                    return !0;
                                case 5:
                                    return v;
                                case 6:
                                    return E;
                                case 2:
                                    l(I, v)
                            } else switch (e) {
                                case 4:
                                    return !1;
                                case 7:
                                    l(I, v)
                            }
                            return d ? -1 : o || u ? u : I
                        }
                    };
                e.exports = {
                    forEach: u(0),
                    map: u(1),
                    filter: u(2),
                    some: u(3),
                    every: u(4),
                    find: u(5),
                    findIndex: u(6),
                    filterReject: u(7)
                }
            },
            1194: (e, t, n) => {
                var r = n(7293),
                    o = n(5112),
                    i = n(7392),
                    a = o("species");
                e.exports = function(e) {
                    return i >= 51 || !r((function() {
                        var t = [];
                        return (t.constructor = {})[a] = function() {
                            return {
                                foo: 1
                            }
                        }, 1 !== t[e](Boolean).foo
                    }))
                }
            },
            9341: (e, t, n) => {
                "use strict";
                var r = n(7293);
                e.exports = function(e, t) {
                    var n = [][e];
                    return !!n && r((function() {
                        n.call(null, t || function() {
                            return 1
                        }, 1)
                    }))
                }
            },
            3671: (e, t, n) => {
                var r = n(9662),
                    o = n(7908),
                    i = n(8361),
                    a = n(6244),
                    s = TypeError,
                    c = function(e) {
                        return function(t, n, c, l) {
                            r(n);
                            var u = o(t),
                                d = i(u),
                                p = a(u),
                                f = e ? p - 1 : 0,
                                A = e ? -1 : 1;
                            if (c < 2)
                                for (;;) {
                                    if (f in d) {
                                        l = d[f], f += A;
                                        break
                                    }
                                    if (f += A, e ? f < 0 : p <= f) throw s("Reduce of empty array with no initial value")
                                }
                            for (; e ? f >= 0 : p > f; f += A) f in d && (l = n(l, d[f], f, u));
                            return l
                        }
                    };
                e.exports = {
                    left: c(!1),
                    right: c(!0)
                }
            },
            1589: (e, t, n) => {
                var r = n(1400),
                    o = n(6244),
                    i = n(6135),
                    a = Array,
                    s = Math.max;
                e.exports = function(e, t, n) {
                    for (var c = o(e), l = r(t, c), u = r(void 0 === n ? c : n, c), d = a(s(u - l, 0)), p = 0; l < u; l++, p++) i(d, p, e[l]);
                    return d.length = p, d
                }
            },
            7475: (e, t, n) => {
                var r = n(3157),
                    o = n(4411),
                    i = n(111),
                    a = n(5112)("species"),
                    s = Array;
                e.exports = function(e) {
                    var t;
                    return r(e) && (t = e.constructor, (o(t) && (t === s || r(t.prototype)) || i(t) && null === (t = t[a])) && (t = void 0)), void 0 === t ? s : t
                }
            },
            5417: (e, t, n) => {
                var r = n(7475);
                e.exports = function(e, t) {
                    return new(r(e))(0 === t ? 0 : t)
                }
            },
            4326: (e, t, n) => {
                var r = n(84),
                    o = r({}.toString),
                    i = r("".slice);
                e.exports = function(e) {
                    return i(o(e), 8, -1)
                }
            },
            648: (e, t, n) => {
                var r = n(1694),
                    o = n(614),
                    i = n(4326),
                    a = n(5112)("toStringTag"),
                    s = Object,
                    c = "Arguments" == i(function() {
                        return arguments
                    }());
                e.exports = r ? i : function(e) {
                    var t, n, r;
                    return void 0 === e ? "Undefined" : null === e ? "Null" : "string" == typeof(n = function(e, t) {
                        try {
                            return e[t]
                        } catch (e) {}
                    }(t = s(e), a)) ? n : c ? i(t) : "Object" == (r = i(t)) && o(t.callee) ? "Arguments" : r
                }
            },
            9920: (e, t, n) => {
                var r = n(2597),
                    o = n(3887),
                    i = n(1236),
                    a = n(3070);
                e.exports = function(e, t, n) {
                    for (var s = o(t), c = a.f, l = i.f, u = 0; u < s.length; u++) {
                        var d = s[u];
                        r(e, d) || n && r(n, d) || c(e, d, l(t, d))
                    }
                }
            },
            8880: (e, t, n) => {
                var r = n(9781),
                    o = n(3070),
                    i = n(9114);
                e.exports = r ? function(e, t, n) {
                    return o.f(e, t, i(1, n))
                } : function(e, t, n) {
                    return e[t] = n, e
                }
            },
            9114: e => {
                e.exports = function(e, t) {
                    return {
                        enumerable: !(1 & e),
                        configurable: !(2 & e),
                        writable: !(4 & e),
                        value: t
                    }
                }
            },
            6135: (e, t, n) => {
                "use strict";
                var r = n(4948),
                    o = n(3070),
                    i = n(9114);
                e.exports = function(e, t, n) {
                    var a = r(t);
                    a in e ? o.f(e, a, i(0, n)) : e[a] = n
                }
            },
            8052: (e, t, n) => {
                var r = n(614),
                    o = n(3070),
                    i = n(6339),
                    a = n(3072);
                e.exports = function(e, t, n, s) {
                    s || (s = {});
                    var c = s.enumerable,
                        l = void 0 !== s.name ? s.name : t;
                    if (r(n) && i(n, l, s), s.global) c ? e[t] = n : a(t, n);
                    else {
                        try {
                            s.unsafe ? e[t] && (c = !0) : delete e[t]
                        } catch (e) {}
                        c ? e[t] = n : o.f(e, t, {
                            value: n,
                            enumerable: !1,
                            configurable: !s.nonConfigurable,
                            writable: !s.nonWritable
                        })
                    }
                    return e
                }
            },
            3072: (e, t, n) => {
                var r = n(7854),
                    o = Object.defineProperty;
                e.exports = function(e, t) {
                    try {
                        o(r, e, {
                            value: t,
                            configurable: !0,
                            writable: !0
                        })
                    } catch (n) {
                        r[e] = t
                    }
                    return t
                }
            },
            9781: (e, t, n) => {
                var r = n(7293);
                e.exports = !r((function() {
                    return 7 != Object.defineProperty({}, 1, {
                        get: function() {
                            return 7
                        }
                    })[1]
                }))
            },
            4154: e => {
                var t = "object" == typeof document && document.all,
                    n = void 0 === t && void 0 !== t;
                e.exports = {
                    all: t,
                    IS_HTMLDDA: n
                }
            },
            317: (e, t, n) => {
                var r = n(7854),
                    o = n(111),
                    i = r.document,
                    a = o(i) && o(i.createElement);
                e.exports = function(e) {
                    return a ? i.createElement(e) : {}
                }
            },
            7207: e => {
                var t = TypeError;
                e.exports = function(e) {
                    if (e > 9007199254740991) throw t("Maximum allowed index exceeded");
                    return e
                }
            },
            5268: (e, t, n) => {
                var r = n(4326),
                    o = n(7854);
                e.exports = "process" == r(o.process)
            },
            8113: (e, t, n) => {
                var r = n(5005);
                e.exports = r("navigator", "userAgent") || ""
            },
            7392: (e, t, n) => {
                var r, o, i = n(7854),
                    a = n(8113),
                    s = i.process,
                    c = i.Deno,
                    l = s && s.versions || c && c.version,
                    u = l && l.v8;
                u && (o = (r = u.split("."))[0] > 0 && r[0] < 4 ? 1 : +(r[0] + r[1])), !o && a && (!(r = a.match(/Edge\/(\d+)/)) || r[1] >= 74) && (r = a.match(/Chrome\/(\d+)/)) && (o = +r[1]), e.exports = o
            },
            748: e => {
                e.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"]
            },
            2109: (e, t, n) => {
                var r = n(7854),
                    o = n(1236).f,
                    i = n(8880),
                    a = n(8052),
                    s = n(3072),
                    c = n(9920),
                    l = n(4705);
                e.exports = function(e, t) {
                    var n, u, d, p, f, A = e.target,
                        m = e.global,
                        h = e.stat;
                    if (n = m ? r : h ? r[A] || s(A, {}) : (r[A] || {}).prototype)
                        for (u in t) {
                            if (p = t[u], d = e.dontCallGetSet ? (f = o(n, u)) && f.value : n[u], !l(m ? u : A + (h ? "." : "#") + u, e.forced) && void 0 !== d) {
                                if (typeof p == typeof d) continue;
                                c(p, d)
                            }(e.sham || d && d.sham) && i(p, "sham", !0), a(n, u, p, e)
                        }
                }
            },
            7293: e => {
                e.exports = function(e) {
                    try {
                        return !!e()
                    } catch (e) {
                        return !0
                    }
                }
            },
            7007: (e, t, n) => {
                "use strict";
                n(4916);
                var r = n(1702),
                    o = n(8052),
                    i = n(2261),
                    a = n(7293),
                    s = n(5112),
                    c = n(8880),
                    l = s("species"),
                    u = RegExp.prototype;
                e.exports = function(e, t, n, d) {
                    var p = s(e),
                        f = !a((function() {
                            var t = {};
                            return t[p] = function() {
                                return 7
                            }, 7 != "" [e](t)
                        })),
                        A = f && !a((function() {
                            var t = !1,
                                n = /a/;
                            return "split" === e && ((n = {}).constructor = {}, n.constructor[l] = function() {
                                return n
                            }, n.flags = "", n[p] = /./ [p]), n.exec = function() {
                                return t = !0, null
                            }, n[p](""), !t
                        }));
                    if (!f || !A || n) {
                        var m = r(/./ [p]),
                            h = t(p, "" [e], (function(e, t, n, o, a) {
                                var s = r(e),
                                    c = t.exec;
                                return c === i || c === u.exec ? f && !a ? {
                                    done: !0,
                                    value: m(t, n, o)
                                } : {
                                    done: !0,
                                    value: s(n, t, o)
                                } : {
                                    done: !1
                                }
                            }));
                        o(String.prototype, e, h[0]), o(u, p, h[1])
                    }
                    d && c(u[p], "sham", !0)
                }
            },
            2104: (e, t, n) => {
                var r = n(4374),
                    o = Function.prototype,
                    i = o.apply,
                    a = o.call;
                e.exports = "object" == typeof Reflect && Reflect.apply || (r ? a.bind(i) : function() {
                    return a.apply(i, arguments)
                })
            },
            9974: (e, t, n) => {
                var r = n(1702),
                    o = n(9662),
                    i = n(4374),
                    a = r(r.bind);
                e.exports = function(e, t) {
                    return o(e), void 0 === t ? e : i ? a(e, t) : function() {
                        return e.apply(t, arguments)
                    }
                }
            },
            4374: (e, t, n) => {
                var r = n(7293);
                e.exports = !r((function() {
                    var e = function() {}.bind();
                    return "function" != typeof e || e.hasOwnProperty("prototype")
                }))
            },
            6916: (e, t, n) => {
                var r = n(4374),
                    o = Function.prototype.call;
                e.exports = r ? o.bind(o) : function() {
                    return o.apply(o, arguments)
                }
            },
            6530: (e, t, n) => {
                var r = n(9781),
                    o = n(2597),
                    i = Function.prototype,
                    a = r && Object.getOwnPropertyDescriptor,
                    s = o(i, "name"),
                    c = s && "something" === function() {}.name,
                    l = s && (!r || r && a(i, "name").configurable);
                e.exports = {
                    EXISTS: s,
                    PROPER: c,
                    CONFIGURABLE: l
                }
            },
            84: (e, t, n) => {
                var r = n(4374),
                    o = Function.prototype,
                    i = o.call,
                    a = r && o.bind.bind(i, i);
                e.exports = function(e) {
                    return r ? a(e) : function() {
                        return i.apply(e, arguments)
                    }
                }
            },
            1702: (e, t, n) => {
                var r = n(4326),
                    o = n(84);
                e.exports = function(e) {
                    if ("Function" === r(e)) return o(e)
                }
            },
            5005: (e, t, n) => {
                var r = n(7854),
                    o = n(614),
                    i = function(e) {
                        return o(e) ? e : void 0
                    };
                e.exports = function(e, t) {
                    return arguments.length < 2 ? i(r[e]) : r[e] && r[e][t]
                }
            },
            8173: (e, t, n) => {
                var r = n(9662),
                    o = n(8554);
                e.exports = function(e, t) {
                    var n = e[t];
                    return o(n) ? void 0 : r(n)
                }
            },
            647: (e, t, n) => {
                var r = n(1702),
                    o = n(7908),
                    i = Math.floor,
                    a = r("".charAt),
                    s = r("".replace),
                    c = r("".slice),
                    l = /\$([$&'`]|\d{1,2}|<[^>]*>)/g,
                    u = /\$([$&'`]|\d{1,2})/g;
                e.exports = function(e, t, n, r, d, p) {
                    var f = n + e.length,
                        A = r.length,
                        m = u;
                    return void 0 !== d && (d = o(d), m = l), s(p, m, (function(o, s) {
                        var l;
                        switch (a(s, 0)) {
                            case "$":
                                return "$";
                            case "&":
                                return e;
                            case "`":
                                return c(t, 0, n);
                            case "'":
                                return c(t, f);
                            case "<":
                                l = d[c(s, 1, -1)];
                                break;
                            default:
                                var u = +s;
                                if (0 === u) return o;
                                if (u > A) {
                                    var p = i(u / 10);
                                    return 0 === p ? o : p <= A ? void 0 === r[p - 1] ? a(s, 1) : r[p - 1] + a(s, 1) : o
                                }
                                l = r[u - 1]
                        }
                        return void 0 === l ? "" : l
                    }))
                }
            },
            7854: (e, t, n) => {
                var r = function(e) {
                    return e && e.Math == Math && e
                };
                e.exports = r("object" == typeof globalThis && globalThis) || r("object" == typeof window && window) || r("object" == typeof self && self) || r("object" == typeof n.g && n.g) || function() {
                    return this
                }() || Function("return this")()
            },
            2597: (e, t, n) => {
                var r = n(1702),
                    o = n(7908),
                    i = r({}.hasOwnProperty);
                e.exports = Object.hasOwn || function(e, t) {
                    return i(o(e), t)
                }
            },
            3501: e => {
                e.exports = {}
            },
            490: (e, t, n) => {
                var r = n(5005);
                e.exports = r("document", "documentElement")
            },
            4664: (e, t, n) => {
                var r = n(9781),
                    o = n(7293),
                    i = n(317);
                e.exports = !r && !o((function() {
                    return 7 != Object.defineProperty(i("div"), "a", {
                        get: function() {
                            return 7
                        }
                    }).a
                }))
            },
            8361: (e, t, n) => {
                var r = n(1702),
                    o = n(7293),
                    i = n(4326),
                    a = Object,
                    s = r("".split);
                e.exports = o((function() {
                    return !a("z").propertyIsEnumerable(0)
                })) ? function(e) {
                    return "String" == i(e) ? s(e, "") : a(e)
                } : a
            },
            2788: (e, t, n) => {
                var r = n(1702),
                    o = n(614),
                    i = n(5465),
                    a = r(Function.toString);
                o(i.inspectSource) || (i.inspectSource = function(e) {
                    return a(e)
                }), e.exports = i.inspectSource
            },
            9909: (e, t, n) => {
                var r, o, i, a = n(4811),
                    s = n(7854),
                    c = n(111),
                    l = n(8880),
                    u = n(2597),
                    d = n(5465),
                    p = n(6200),
                    f = n(3501),
                    A = "Object already initialized",
                    m = s.TypeError,
                    h = s.WeakMap;
                if (a || d.state) {
                    var g = d.state || (d.state = new h);
                    g.get = g.get, g.has = g.has, g.set = g.set, r = function(e, t) {
                        if (g.has(e)) throw m(A);
                        return t.facade = e, g.set(e, t), t
                    }, o = function(e) {
                        return g.get(e) || {}
                    }, i = function(e) {
                        return g.has(e)
                    }
                } else {
                    var v = p("state");
                    f[v] = !0, r = function(e, t) {
                        if (u(e, v)) throw m(A);
                        return t.facade = e, l(e, v, t), t
                    }, o = function(e) {
                        return u(e, v) ? e[v] : {}
                    }, i = function(e) {
                        return u(e, v)
                    }
                }
                e.exports = {
                    set: r,
                    get: o,
                    has: i,
                    enforce: function(e) {
                        return i(e) ? o(e) : r(e, {})
                    },
                    getterFor: function(e) {
                        return function(t) {
                            var n;
                            if (!c(t) || (n = o(t)).type !== e) throw m("Incompatible receiver, " + e + " required");
                            return n
                        }
                    }
                }
            },
            3157: (e, t, n) => {
                var r = n(4326);
                e.exports = Array.isArray || function(e) {
                    return "Array" == r(e)
                }
            },
            614: (e, t, n) => {
                var r = n(4154),
                    o = r.all;
                e.exports = r.IS_HTMLDDA ? function(e) {
                    return "function" == typeof e || e === o
                } : function(e) {
                    return "function" == typeof e
                }
            },
            4411: (e, t, n) => {
                var r = n(1702),
                    o = n(7293),
                    i = n(614),
                    a = n(648),
                    s = n(5005),
                    c = n(2788),
                    l = function() {},
                    u = [],
                    d = s("Reflect", "construct"),
                    p = /^\s*(?:class|function)\b/,
                    f = r(p.exec),
                    A = !p.exec(l),
                    m = function(e) {
                        if (!i(e)) return !1;
                        try {
                            return d(l, u, e), !0
                        } catch (e) {
                            return !1
                        }
                    },
                    h = function(e) {
                        if (!i(e)) return !1;
                        switch (a(e)) {
                            case "AsyncFunction":
                            case "GeneratorFunction":
                            case "AsyncGeneratorFunction":
                                return !1
                        }
                        try {
                            return A || !!f(p, c(e))
                        } catch (e) {
                            return !0
                        }
                    };
                h.sham = !0, e.exports = !d || o((function() {
                    var e;
                    return m(m.call) || !m(Object) || !m((function() {
                        e = !0
                    })) || e
                })) ? h : m
            },
            4705: (e, t, n) => {
                var r = n(7293),
                    o = n(614),
                    i = /#|\.prototype\./,
                    a = function(e, t) {
                        var n = c[s(e)];
                        return n == u || n != l && (o(t) ? r(t) : !!t)
                    },
                    s = a.normalize = function(e) {
                        return String(e).replace(i, ".").toLowerCase()
                    },
                    c = a.data = {},
                    l = a.NATIVE = "N",
                    u = a.POLYFILL = "P";
                e.exports = a
            },
            8554: e => {
                e.exports = function(e) {
                    return null == e
                }
            },
            111: (e, t, n) => {
                var r = n(614),
                    o = n(4154),
                    i = o.all;
                e.exports = o.IS_HTMLDDA ? function(e) {
                    return "object" == typeof e ? null !== e : r(e) || e === i
                } : function(e) {
                    return "object" == typeof e ? null !== e : r(e)
                }
            },
            1913: e => {
                e.exports = !1
            },
            7850: (e, t, n) => {
                var r = n(111),
                    o = n(4326),
                    i = n(5112)("match");
                e.exports = function(e) {
                    var t;
                    return r(e) && (void 0 !== (t = e[i]) ? !!t : "RegExp" == o(e))
                }
            },
            2190: (e, t, n) => {
                var r = n(5005),
                    o = n(614),
                    i = n(7976),
                    a = n(3307),
                    s = Object;
                e.exports = a ? function(e) {
                    return "symbol" == typeof e
                } : function(e) {
                    var t = r("Symbol");
                    return o(t) && i(t.prototype, s(e))
                }
            },
            6244: (e, t, n) => {
                var r = n(7466);
                e.exports = function(e) {
                    return r(e.length)
                }
            },
            6339: (e, t, n) => {
                var r = n(7293),
                    o = n(614),
                    i = n(2597),
                    a = n(9781),
                    s = n(6530).CONFIGURABLE,
                    c = n(2788),
                    l = n(9909),
                    u = l.enforce,
                    d = l.get,
                    p = Object.defineProperty,
                    f = a && !r((function() {
                        return 8 !== p((function() {}), "length", {
                            value: 8
                        }).length
                    })),
                    A = String(String).split("String"),
                    m = e.exports = function(e, t, n) {
                        "Symbol(" === String(t).slice(0, 7) && (t = "[" + String(t).replace(/^Symbol\(([^)]*)\)/, "$1") + "]"), n && n.getter && (t = "get " + t), n && n.setter && (t = "set " + t), (!i(e, "name") || s && e.name !== t) && (a ? p(e, "name", {
                            value: t,
                            configurable: !0
                        }) : e.name = t), f && n && i(n, "arity") && e.length !== n.arity && p(e, "length", {
                            value: n.arity
                        });
                        try {
                            n && i(n, "constructor") && n.constructor ? a && p(e, "prototype", {
                                writable: !1
                            }) : e.prototype && (e.prototype = void 0)
                        } catch (e) {}
                        var r = u(e);
                        return i(r, "source") || (r.source = A.join("string" == typeof t ? t : "")), e
                    };
                Function.prototype.toString = m((function() {
                    return o(this) && d(this).source || c(this)
                }), "toString")
            },
            4758: e => {
                var t = Math.ceil,
                    n = Math.floor;
                e.exports = Math.trunc || function(e) {
                    var r = +e;
                    return (r > 0 ? n : t)(r)
                }
            },
            1574: (e, t, n) => {
                "use strict";
                var r = n(9781),
                    o = n(1702),
                    i = n(6916),
                    a = n(7293),
                    s = n(1956),
                    c = n(5181),
                    l = n(5296),
                    u = n(7908),
                    d = n(8361),
                    p = Object.assign,
                    f = Object.defineProperty,
                    A = o([].concat);
                e.exports = !p || a((function() {
                    if (r && 1 !== p({
                            b: 1
                        }, p(f({}, "a", {
                            enumerable: !0,
                            get: function() {
                                f(this, "b", {
                                    value: 3,
                                    enumerable: !1
                                })
                            }
                        }), {
                            b: 2
                        })).b) return !0;
                    var e = {},
                        t = {},
                        n = Symbol(),
                        o = "abcdefghijklmnopqrst";
                    return e[n] = 7, o.split("").forEach((function(e) {
                        t[e] = e
                    })), 7 != p({}, e)[n] || s(p({}, t)).join("") != o
                })) ? function(e, t) {
                    for (var n = u(e), o = arguments.length, a = 1, p = c.f, f = l.f; o > a;)
                        for (var m, h = d(arguments[a++]), g = p ? A(s(h), p(h)) : s(h), v = g.length, b = 0; v > b;) m = g[b++], r && !i(f, h, m) || (n[m] = h[m]);
                    return n
                } : p
            },
            30: (e, t, n) => {
                var r, o = n(9670),
                    i = n(6048),
                    a = n(748),
                    s = n(3501),
                    c = n(490),
                    l = n(317),
                    u = n(6200),
                    d = u("IE_PROTO"),
                    p = function() {},
                    f = function(e) {
                        return "<script>" + e + "</" + "script>"
                    },
                    A = function(e) {
                        e.write(f("")), e.close();
                        var t = e.parentWindow.Object;
                        return e = null, t
                    },
                    m = function() {
                        try {
                            r = new ActiveXObject("htmlfile")
                        } catch (e) {}
                        var e, t;
                        m = "undefined" != typeof document ? document.domain && r ? A(r) : ((t = l("iframe")).style.display = "none", c.appendChild(t), t.src = String("javascript:"), (e = t.contentWindow.document).open(), e.write(f("document.F=Object")), e.close(), e.F) : A(r);
                        for (var n = a.length; n--;) delete m.prototype[a[n]];
                        return m()
                    };
                s[d] = !0, e.exports = Object.create || function(e, t) {
                    var n;
                    return null !== e ? (p.prototype = o(e), n = new p, p.prototype = null, n[d] = e) : n = m(), void 0 === t ? n : i.f(n, t)
                }
            },
            6048: (e, t, n) => {
                var r = n(9781),
                    o = n(3353),
                    i = n(3070),
                    a = n(9670),
                    s = n(5656),
                    c = n(1956);
                t.f = r && !o ? Object.defineProperties : function(e, t) {
                    a(e);
                    for (var n, r = s(t), o = c(t), l = o.length, u = 0; l > u;) i.f(e, n = o[u++], r[n]);
                    return e
                }
            },
            3070: (e, t, n) => {
                var r = n(9781),
                    o = n(4664),
                    i = n(3353),
                    a = n(9670),
                    s = n(4948),
                    c = TypeError,
                    l = Object.defineProperty,
                    u = Object.getOwnPropertyDescriptor,
                    d = "enumerable",
                    p = "configurable",
                    f = "writable";
                t.f = r ? i ? function(e, t, n) {
                    if (a(e), t = s(t), a(n), "function" == typeof e && "prototype" === t && "value" in n && f in n && !n.writable) {
                        var r = u(e, t);
                        r && r.writable && (e[t] = n.value, n = {
                            configurable: p in n ? n.configurable : r.configurable,
                            enumerable: d in n ? n.enumerable : r.enumerable,
                            writable: !1
                        })
                    }
                    return l(e, t, n)
                } : l : function(e, t, n) {
                    if (a(e), t = s(t), a(n), o) try {
                        return l(e, t, n)
                    } catch (e) {}
                    if ("get" in n || "set" in n) throw c("Accessors not supported");
                    return "value" in n && (e[t] = n.value), e
                }
            },
            1236: (e, t, n) => {
                var r = n(9781),
                    o = n(6916),
                    i = n(5296),
                    a = n(9114),
                    s = n(5656),
                    c = n(4948),
                    l = n(2597),
                    u = n(4664),
                    d = Object.getOwnPropertyDescriptor;
                t.f = r ? d : function(e, t) {
                    if (e = s(e), t = c(t), u) try {
                        return d(e, t)
                    } catch (e) {}
                    if (l(e, t)) return a(!o(i.f, e, t), e[t])
                }
            },
            8006: (e, t, n) => {
                var r = n(6324),
                    o = n(748).concat("length", "prototype");
                t.f = Object.getOwnPropertyNames || function(e) {
                    return r(e, o)
                }
            },
            5181: (e, t) => {
                t.f = Object.getOwnPropertySymbols
            },
            7976: (e, t, n) => {
                var r = n(1702);
                e.exports = r({}.isPrototypeOf)
            },
            6324: (e, t, n) => {
                var r = n(1702),
                    o = n(2597),
                    i = n(5656),
                    a = n(1318).indexOf,
                    s = n(3501),
                    c = r([].push);
                e.exports = function(e, t) {
                    var n, r = i(e),
                        l = 0,
                        u = [];
                    for (n in r) !o(s, n) && o(r, n) && c(u, n);
                    for (; t.length > l;) o(r, n = t[l++]) && (~a(u, n) || c(u, n));
                    return u
                }
            },
            1956: (e, t, n) => {
                var r = n(6324),
                    o = n(748);
                e.exports = Object.keys || function(e) {
                    return r(e, o)
                }
            },
            5296: (e, t) => {
                "use strict";
                var n = {}.propertyIsEnumerable,
                    r = Object.getOwnPropertyDescriptor,
                    o = r && !n.call({
                        1: 2
                    }, 1);
                t.f = o ? function(e) {
                    var t = r(this, e);
                    return !!t && t.enumerable
                } : n
            },
            288: (e, t, n) => {
                "use strict";
                var r = n(1694),
                    o = n(648);
                e.exports = r ? {}.toString : function() {
                    return "[object " + o(this) + "]"
                }
            },
            2140: (e, t, n) => {
                var r = n(6916),
                    o = n(614),
                    i = n(111),
                    a = TypeError;
                e.exports = function(e, t) {
                    var n, s;
                    if ("string" === t && o(n = e.toString) && !i(s = r(n, e))) return s;
                    if (o(n = e.valueOf) && !i(s = r(n, e))) return s;
                    if ("string" !== t && o(n = e.toString) && !i(s = r(n, e))) return s;
                    throw a("Can't convert object to primitive value")
                }
            },
            3887: (e, t, n) => {
                var r = n(5005),
                    o = n(1702),
                    i = n(8006),
                    a = n(5181),
                    s = n(9670),
                    c = o([].concat);
                e.exports = r("Reflect", "ownKeys") || function(e) {
                    var t = i.f(s(e)),
                        n = a.f;
                    return n ? c(t, n(e)) : t
                }
            },
            7651: (e, t, n) => {
                var r = n(6916),
                    o = n(9670),
                    i = n(614),
                    a = n(4326),
                    s = n(2261),
                    c = TypeError;
                e.exports = function(e, t) {
                    var n = e.exec;
                    if (i(n)) {
                        var l = r(n, e, t);
                        return null !== l && o(l), l
                    }
                    if ("RegExp" === a(e)) return r(s, e, t);
                    throw c("RegExp#exec called on incompatible receiver")
                }
            },
            2261: (e, t, n) => {
                "use strict";
                var r, o, i = n(6916),
                    a = n(1702),
                    s = n(1340),
                    c = n(7066),
                    l = n(2999),
                    u = n(2309),
                    d = n(30),
                    p = n(9909).get,
                    f = n(9441),
                    A = n(7168),
                    m = u("native-string-replace", String.prototype.replace),
                    h = RegExp.prototype.exec,
                    g = h,
                    v = a("".charAt),
                    b = a("".indexOf),
                    C = a("".replace),
                    y = a("".slice),
                    x = (o = /b*/g, i(h, r = /a/, "a"), i(h, o, "a"), 0 !== r.lastIndex || 0 !== o.lastIndex),
                    w = l.BROKEN_CARET,
                    E = void 0 !== /()??/.exec("")[1];
                (x || E || w || f || A) && (g = function(e) {
                    var t, n, r, o, a, l, u, f = this,
                        A = p(f),
                        O = s(e),
                        I = A.raw;
                    if (I) return I.lastIndex = f.lastIndex, t = i(g, I, O), f.lastIndex = I.lastIndex, t;
                    var S = A.groups,
                        R = w && f.sticky,
                        T = i(c, f),
                        N = f.source,
                        k = 0,
                        L = O;
                    if (R && (T = C(T, "y", ""), -1 === b(T, "g") && (T += "g"), L = y(O, f.lastIndex), f.lastIndex > 0 && (!f.multiline || f.multiline && "\n" !== v(O, f.lastIndex - 1)) && (N = "(?: " + N + ")", L = " " + L, k++), n = new RegExp("^(?:" + N + ")", T)), E && (n = new RegExp("^" + N + "$(?!\\s)", T)), x && (r = f.lastIndex), o = i(h, R ? n : f, L), R ? o ? (o.input = y(o.input, k), o[0] = y(o[0], k), o.index = f.lastIndex, f.lastIndex += o[0].length) : f.lastIndex = 0 : x && o && (f.lastIndex = f.global ? o.index + o[0].length : r), E && o && o.length > 1 && i(m, o[0], n, (function() {
                            for (a = 1; a < arguments.length - 2; a++) void 0 === arguments[a] && (o[a] = void 0)
                        })), o && S)
                        for (o.groups = l = d(null), a = 0; a < S.length; a++) l[(u = S[a])[0]] = o[u[1]];
                    return o
                }), e.exports = g
            },
            7066: (e, t, n) => {
                "use strict";
                var r = n(9670);
                e.exports = function() {
                    var e = r(this),
                        t = "";
                    return e.hasIndices && (t += "d"), e.global && (t += "g"), e.ignoreCase && (t += "i"), e.multiline && (t += "m"), e.dotAll && (t += "s"), e.unicode && (t += "u"), e.unicodeSets && (t += "v"), e.sticky && (t += "y"), t
                }
            },
            4706: (e, t, n) => {
                var r = n(6916),
                    o = n(2597),
                    i = n(7976),
                    a = n(7066),
                    s = RegExp.prototype;
                e.exports = function(e) {
                    var t = e.flags;
                    return void 0 !== t || "flags" in s || o(e, "flags") || !i(s, e) ? t : r(a, e)
                }
            },
            2999: (e, t, n) => {
                var r = n(7293),
                    o = n(7854).RegExp,
                    i = r((function() {
                        var e = o("a", "y");
                        return e.lastIndex = 2, null != e.exec("abcd")
                    })),
                    a = i || r((function() {
                        return !o("a", "y").sticky
                    })),
                    s = i || r((function() {
                        var e = o("^r", "gy");
                        return e.lastIndex = 2, null != e.exec("str")
                    }));
                e.exports = {
                    BROKEN_CARET: s,
                    MISSED_STICKY: a,
                    UNSUPPORTED_Y: i
                }
            },
            9441: (e, t, n) => {
                var r = n(7293),
                    o = n(7854).RegExp;
                e.exports = r((function() {
                    var e = o(".", "s");
                    return !(e.dotAll && e.exec("\n") && "s" === e.flags)
                }))
            },
            7168: (e, t, n) => {
                var r = n(7293),
                    o = n(7854).RegExp;
                e.exports = r((function() {
                    var e = o("(?<a>b)", "g");
                    return "b" !== e.exec("b").groups.a || "bc" !== "b".replace(e, "$<a>c")
                }))
            },
            4488: (e, t, n) => {
                var r = n(8554),
                    o = TypeError;
                e.exports = function(e) {
                    if (r(e)) throw o("Can't call method on " + e);
                    return e
                }
            },
            6200: (e, t, n) => {
                var r = n(2309),
                    o = n(9711),
                    i = r("keys");
                e.exports = function(e) {
                    return i[e] || (i[e] = o(e))
                }
            },
            5465: (e, t, n) => {
                var r = n(7854),
                    o = n(3072),
                    i = "__core-js_shared__",
                    a = r[i] || o(i, {});
                e.exports = a
            },
            2309: (e, t, n) => {
                var r = n(1913),
                    o = n(5465);
                (e.exports = function(e, t) {
                    return o[e] || (o[e] = void 0 !== t ? t : {})
                })("versions", []).push({
                    version: "3.25.5",
                    mode: r ? "pure" : "global",
                    copyright: "© 2014-2022 Denis Pushkarev (zloirock.ru)",
                    license: "https://github.com/zloirock/core-js/blob/v3.25.5/LICENSE",
                    source: "https://github.com/zloirock/core-js"
                })
            },
            6707: (e, t, n) => {
                var r = n(9670),
                    o = n(9483),
                    i = n(8554),
                    a = n(5112)("species");
                e.exports = function(e, t) {
                    var n, s = r(e).constructor;
                    return void 0 === s || i(n = r(s)[a]) ? t : o(n)
                }
            },
            8710: (e, t, n) => {
                var r = n(1702),
                    o = n(9303),
                    i = n(1340),
                    a = n(4488),
                    s = r("".charAt),
                    c = r("".charCodeAt),
                    l = r("".slice),
                    u = function(e) {
                        return function(t, n) {
                            var r, u, d = i(a(t)),
                                p = o(n),
                                f = d.length;
                            return p < 0 || p >= f ? e ? "" : void 0 : (r = c(d, p)) < 55296 || r > 56319 || p + 1 === f || (u = c(d, p + 1)) < 56320 || u > 57343 ? e ? s(d, p) : r : e ? l(d, p, p + 2) : u - 56320 + (r - 55296 << 10) + 65536
                        }
                    };
                e.exports = {
                    codeAt: u(!1),
                    charAt: u(!0)
                }
            },
            6293: (e, t, n) => {
                var r = n(7392),
                    o = n(7293);
                e.exports = !!Object.getOwnPropertySymbols && !o((function() {
                    var e = Symbol();
                    return !String(e) || !(Object(e) instanceof Symbol) || !Symbol.sham && r && r < 41
                }))
            },
            1400: (e, t, n) => {
                var r = n(9303),
                    o = Math.max,
                    i = Math.min;
                e.exports = function(e, t) {
                    var n = r(e);
                    return n < 0 ? o(n + t, 0) : i(n, t)
                }
            },
            5656: (e, t, n) => {
                var r = n(8361),
                    o = n(4488);
                e.exports = function(e) {
                    return r(o(e))
                }
            },
            9303: (e, t, n) => {
                var r = n(4758);
                e.exports = function(e) {
                    var t = +e;
                    return t != t || 0 === t ? 0 : r(t)
                }
            },
            7466: (e, t, n) => {
                var r = n(9303),
                    o = Math.min;
                e.exports = function(e) {
                    return e > 0 ? o(r(e), 9007199254740991) : 0
                }
            },
            7908: (e, t, n) => {
                var r = n(4488),
                    o = Object;
                e.exports = function(e) {
                    return o(r(e))
                }
            },
            7593: (e, t, n) => {
                var r = n(6916),
                    o = n(111),
                    i = n(2190),
                    a = n(8173),
                    s = n(2140),
                    c = n(5112),
                    l = TypeError,
                    u = c("toPrimitive");
                e.exports = function(e, t) {
                    if (!o(e) || i(e)) return e;
                    var n, c = a(e, u);
                    if (c) {
                        if (void 0 === t && (t = "default"), n = r(c, e, t), !o(n) || i(n)) return n;
                        throw l("Can't convert object to primitive value")
                    }
                    return void 0 === t && (t = "number"), s(e, t)
                }
            },
            4948: (e, t, n) => {
                var r = n(7593),
                    o = n(2190);
                e.exports = function(e) {
                    var t = r(e, "string");
                    return o(t) ? t : t + ""
                }
            },
            1694: (e, t, n) => {
                var r = {};
                r[n(5112)("toStringTag")] = "z", e.exports = "[object z]" === String(r)
            },
            1340: (e, t, n) => {
                var r = n(648),
                    o = String;
                e.exports = function(e) {
                    if ("Symbol" === r(e)) throw TypeError("Cannot convert a Symbol value to a string");
                    return o(e)
                }
            },
            6330: e => {
                var t = String;
                e.exports = function(e) {
                    try {
                        return t(e)
                    } catch (e) {
                        return "Object"
                    }
                }
            },
            9711: (e, t, n) => {
                var r = n(1702),
                    o = 0,
                    i = Math.random(),
                    a = r(1..toString);
                e.exports = function(e) {
                    return "Symbol(" + (void 0 === e ? "" : e) + ")_" + a(++o + i, 36)
                }
            },
            3307: (e, t, n) => {
                var r = n(6293);
                e.exports = r && !Symbol.sham && "symbol" == typeof Symbol.iterator
            },
            3353: (e, t, n) => {
                var r = n(9781),
                    o = n(7293);
                e.exports = r && o((function() {
                    return 42 != Object.defineProperty((function() {}), "prototype", {
                        value: 42,
                        writable: !1
                    }).prototype
                }))
            },
            4811: (e, t, n) => {
                var r = n(7854),
                    o = n(614),
                    i = r.WeakMap;
                e.exports = o(i) && /native code/.test(String(i))
            },
            5112: (e, t, n) => {
                var r = n(7854),
                    o = n(2309),
                    i = n(2597),
                    a = n(9711),
                    s = n(6293),
                    c = n(3307),
                    l = o("wks"),
                    u = r.Symbol,
                    d = u && u.for,
                    p = c ? u : u && u.withoutSetter || a;
                e.exports = function(e) {
                    if (!i(l, e) || !s && "string" != typeof l[e]) {
                        var t = "Symbol." + e;
                        s && i(u, e) ? l[e] = u[e] : l[e] = c && d ? d(t) : p(t)
                    }
                    return l[e]
                }
            },
            2222: (e, t, n) => {
                "use strict";
                var r = n(2109),
                    o = n(7293),
                    i = n(3157),
                    a = n(111),
                    s = n(7908),
                    c = n(6244),
                    l = n(7207),
                    u = n(6135),
                    d = n(5417),
                    p = n(1194),
                    f = n(5112),
                    A = n(7392),
                    m = f("isConcatSpreadable"),
                    h = A >= 51 || !o((function() {
                        var e = [];
                        return e[m] = !1, e.concat()[0] !== e
                    })),
                    g = p("concat"),
                    v = function(e) {
                        if (!a(e)) return !1;
                        var t = e[m];
                        return void 0 !== t ? !!t : i(e)
                    };
                r({
                    target: "Array",
                    proto: !0,
                    arity: 1,
                    forced: !h || !g
                }, {
                    concat: function(e) {
                        var t, n, r, o, i, a = s(this),
                            p = d(a, 0),
                            f = 0;
                        for (t = -1, r = arguments.length; t < r; t++)
                            if (v(i = -1 === t ? a : arguments[t]))
                                for (o = c(i), l(f + o), n = 0; n < o; n++, f++) n in i && u(p, f, i[n]);
                            else l(f + 1), u(p, f++, i);
                        return p.length = f, p
                    }
                })
            },
            7327: (e, t, n) => {
                "use strict";
                var r = n(2109),
                    o = n(2092).filter;
                r({
                    target: "Array",
                    proto: !0,
                    forced: !n(1194)("filter")
                }, {
                    filter: function(e) {
                        return o(this, e, arguments.length > 1 ? arguments[1] : void 0)
                    }
                })
            },
            2772: (e, t, n) => {
                "use strict";
                var r = n(2109),
                    o = n(1702),
                    i = n(1318).indexOf,
                    a = n(9341),
                    s = o([].indexOf),
                    c = !!s && 1 / s([1], 1, -0) < 0,
                    l = a("indexOf");
                r({
                    target: "Array",
                    proto: !0,
                    forced: c || !l
                }, {
                    indexOf: function(e) {
                        var t = arguments.length > 1 ? arguments[1] : void 0;
                        return c ? s(this, e, t) || 0 : i(this, e, t)
                    }
                })
            },
            1249: (e, t, n) => {
                "use strict";
                var r = n(2109),
                    o = n(2092).map;
                r({
                    target: "Array",
                    proto: !0,
                    forced: !n(1194)("map")
                }, {
                    map: function(e) {
                        return o(this, e, arguments.length > 1 ? arguments[1] : void 0)
                    }
                })
            },
            5827: (e, t, n) => {
                "use strict";
                var r = n(2109),
                    o = n(3671).left,
                    i = n(9341),
                    a = n(7392),
                    s = n(5268);
                r({
                    target: "Array",
                    proto: !0,
                    forced: !i("reduce") || !s && a > 79 && a < 83
                }, {
                    reduce: function(e) {
                        var t = arguments.length;
                        return o(this, e, t, t > 1 ? arguments[1] : void 0)
                    }
                })
            },
            9601: (e, t, n) => {
                var r = n(2109),
                    o = n(1574);
                r({
                    target: "Object",
                    stat: !0,
                    arity: 2,
                    forced: Object.assign !== o
                }, {
                    assign: o
                })
            },
            9070: (e, t, n) => {
                var r = n(2109),
                    o = n(9781),
                    i = n(3070).f;
                r({
                    target: "Object",
                    stat: !0,
                    forced: Object.defineProperty !== i,
                    sham: !o
                }, {
                    defineProperty: i
                })
            },
            1539: (e, t, n) => {
                var r = n(1694),
                    o = n(8052),
                    i = n(288);
                r || o(Object.prototype, "toString", i, {
                    unsafe: !0
                })
            },
            4916: (e, t, n) => {
                "use strict";
                var r = n(2109),
                    o = n(2261);
                r({
                    target: "RegExp",
                    proto: !0,
                    forced: /./.exec !== o
                }, {
                    exec: o
                })
            },
            9714: (e, t, n) => {
                "use strict";
                var r = n(6530).PROPER,
                    o = n(8052),
                    i = n(9670),
                    a = n(1340),
                    s = n(7293),
                    c = n(4706),
                    l = "toString",
                    u = RegExp.prototype.toString,
                    d = s((function() {
                        return "/a/b" != u.call({
                            source: "a",
                            flags: "b"
                        })
                    })),
                    p = r && u.name != l;
                (d || p) && o(RegExp.prototype, l, (function() {
                    var e = i(this);
                    return "/" + a(e.source) + "/" + a(c(e))
                }), {
                    unsafe: !0
                })
            },
            5306: (e, t, n) => {
                "use strict";
                var r = n(2104),
                    o = n(6916),
                    i = n(1702),
                    a = n(7007),
                    s = n(7293),
                    c = n(9670),
                    l = n(614),
                    u = n(8554),
                    d = n(9303),
                    p = n(7466),
                    f = n(1340),
                    A = n(4488),
                    m = n(1530),
                    h = n(8173),
                    g = n(647),
                    v = n(7651),
                    b = n(5112)("replace"),
                    C = Math.max,
                    y = Math.min,
                    x = i([].concat),
                    w = i([].push),
                    E = i("".indexOf),
                    O = i("".slice),
                    I = "$0" === "a".replace(/./, "$0"),
                    S = !!/./ [b] && "" === /./ [b]("a", "$0");
                a("replace", (function(e, t, n) {
                    var i = S ? "$" : "$0";
                    return [function(e, n) {
                        var r = A(this),
                            i = u(e) ? void 0 : h(e, b);
                        return i ? o(i, e, r, n) : o(t, f(r), e, n)
                    }, function(e, o) {
                        var a = c(this),
                            s = f(e);
                        if ("string" == typeof o && -1 === E(o, i) && -1 === E(o, "$<")) {
                            var u = n(t, a, s, o);
                            if (u.done) return u.value
                        }
                        var A = l(o);
                        A || (o = f(o));
                        var h = a.global;
                        if (h) {
                            var b = a.unicode;
                            a.lastIndex = 0
                        }
                        for (var I = [];;) {
                            var S = v(a, s);
                            if (null === S) break;
                            if (w(I, S), !h) break;
                            "" === f(S[0]) && (a.lastIndex = m(s, p(a.lastIndex), b))
                        }
                        for (var R, T = "", N = 0, k = 0; k < I.length; k++) {
                            for (var L = f((S = I[k])[0]), _ = C(y(d(S.index), s.length), 0), B = [], D = 1; D < S.length; D++) w(B, void 0 === (R = S[D]) ? R : String(R));
                            var P = S.groups;
                            if (A) {
                                var M = x([L], B, _, s);
                                void 0 !== P && w(M, P);
                                var U = f(r(o, void 0, M))
                            } else U = g(L, s, _, B, P, o);
                            _ >= N && (T += O(s, N, _) + U, N = _ + L.length)
                        }
                        return T + O(s, N)
                    }]
                }), !!s((function() {
                    var e = /./;
                    return e.exec = function() {
                        var e = [];
                        return e.groups = {
                            a: "7"
                        }, e
                    }, "7" !== "".replace(e, "$<a>")
                })) || !I || S)
            },
            3123: (e, t, n) => {
                "use strict";
                var r = n(2104),
                    o = n(6916),
                    i = n(1702),
                    a = n(7007),
                    s = n(9670),
                    c = n(8554),
                    l = n(7850),
                    u = n(4488),
                    d = n(6707),
                    p = n(1530),
                    f = n(7466),
                    A = n(1340),
                    m = n(8173),
                    h = n(1589),
                    g = n(7651),
                    v = n(2261),
                    b = n(2999),
                    C = n(7293),
                    y = b.UNSUPPORTED_Y,
                    x = 4294967295,
                    w = Math.min,
                    E = [].push,
                    O = i(/./.exec),
                    I = i(E),
                    S = i("".slice);
                a("split", (function(e, t, n) {
                    var i;
                    return i = "c" == "abbc".split(/(b)*/)[1] || 4 != "test".split(/(?:)/, -1).length || 2 != "ab".split(/(?:ab)*/).length || 4 != ".".split(/(.?)(.?)/).length || ".".split(/()()/).length > 1 || "".split(/.?/).length ? function(e, n) {
                        var i = A(u(this)),
                            a = void 0 === n ? x : n >>> 0;
                        if (0 === a) return [];
                        if (void 0 === e) return [i];
                        if (!l(e)) return o(t, i, e, a);
                        for (var s, c, d, p = [], f = (e.ignoreCase ? "i" : "") + (e.multiline ? "m" : "") + (e.unicode ? "u" : "") + (e.sticky ? "y" : ""), m = 0, g = new RegExp(e.source, f + "g");
                            (s = o(v, g, i)) && !((c = g.lastIndex) > m && (I(p, S(i, m, s.index)), s.length > 1 && s.index < i.length && r(E, p, h(s, 1)), d = s[0].length, m = c, p.length >= a));) g.lastIndex === s.index && g.lastIndex++;
                        return m === i.length ? !d && O(g, "") || I(p, "") : I(p, S(i, m)), p.length > a ? h(p, 0, a) : p
                    } : "0".split(void 0, 0).length ? function(e, n) {
                        return void 0 === e && 0 === n ? [] : o(t, this, e, n)
                    } : t, [function(t, n) {
                        var r = u(this),
                            a = c(t) ? void 0 : m(t, e);
                        return a ? o(a, t, r, n) : o(i, A(r), t, n)
                    }, function(e, r) {
                        var o = s(this),
                            a = A(e),
                            c = n(i, o, a, r, i !== t);
                        if (c.done) return c.value;
                        var l = d(o, RegExp),
                            u = o.unicode,
                            m = (o.ignoreCase ? "i" : "") + (o.multiline ? "m" : "") + (o.unicode ? "u" : "") + (y ? "g" : "y"),
                            h = new l(y ? "^(?:" + o.source + ")" : o, m),
                            v = void 0 === r ? x : r >>> 0;
                        if (0 === v) return [];
                        if (0 === a.length) return null === g(h, a) ? [a] : [];
                        for (var b = 0, C = 0, E = []; C < a.length;) {
                            h.lastIndex = y ? 0 : C;
                            var O, R = g(h, y ? S(a, C) : a);
                            if (null === R || (O = w(f(h.lastIndex + (y ? C : 0)), a.length)) === b) C = p(a, C, u);
                            else {
                                if (I(E, S(a, b, C)), E.length === v) return E;
                                for (var T = 1; T <= R.length - 1; T++)
                                    if (I(E, R[T]), E.length === v) return E;
                                C = b = O
                            }
                        }
                        return I(E, S(a, b)), E
                    }]
                }), !!C((function() {
                    var e = /(?:)/,
                        t = e.exec;
                    e.exec = function() {
                        return t.apply(this, arguments)
                    };
                    var n = "ab".split(e);
                    return 2 !== n.length || "a" !== n[0] || "b" !== n[1]
                })), y)
            },
            3175: (e, t, n) => {
                "use strict";
                n.d(t, {
                    Z: () => s
                });
                var r = n(7537),
                    o = n.n(r),
                    i = n(3645),
                    a = n.n(i)()(o());
                a.push([e.id, '#editor{box-shadow:none !important}#editor ::-webkit-scrollbar-thumb{background-color:#fff}body{position:fixed;width:100%;height:100%}.documentslist{padding:5px}.documentslist .document,.documentslist .progress,.documentslist .add-document{display:inline-block;height:200px;width:200px;float:left;margin:14px;vertical-align:top}.documentslist .progress div{margin-top:144px;text-align:center}.documentslist .document:hover,.documentslist .document a:focus{background-color:#ddd}.documentslist .session-active{position:relative;margin-left:128px;margin-top:128px;width:32px}.document a{display:block;position:relative;height:200px;width:200px;background-repeat:no-repeat;background-size:200px}.document a:hover{border:1px solid #818181}.document label{background:rgba(255,255,255,.7);position:absolute;bottom:0px;width:100%;font-weight:normal;text-overflow:ellipsis;overflow:hidden;text-align:center;padding:0 8px;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;white-space:nowrap}.claro #header{text-align:left;position:absolute;width:100%;padding:0;z-index:500 !important}#header #dropdown{right:auto;top:45px}#header .padded{margin-right:12px}#document-title{min-width:300px;padding:7px;font-weight:normal;color:#fff}#ocToolbar .filename{padding:5px 6px;min-width:300px;margin-top:0}#odf-close{position:absolute;right:0;float:right;padding:18px;background-color:rgba(0,0,0,0);border:none;opacity:.5}#odf-close.icon-close{height:23px;width:23px}#odf-invite{margin-top:0;margin-left:3px;float:left;background-position:5px center;padding-left:24px}#mainContainer{position:absolute;width:100%;z-index:500;top:0px;bottom:0}#loadingContainer.icon-loading{position:absolute;width:100%;height:100%;z-index:600;background-color:var(--color-main-background)}#proxyLoadingContainer{position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);background-color:var(--color-main-background)}#proxyLoadingMessage{position:relative;margin-top:10px}#revViewerContainer{position:absolute;width:100%;z-index:600;background-color:#ddd !important;top:0px;bottom:0}#revViewer{position:relative;height:100%}#revPanelContainer{position:fixed;width:250px;z-index:600;background-color:#efefef !important;right:0;top:0px;bottom:0;box-sizing:border-box;overflow-x:hidden;overflow-y:auto}#revViewerContainer .closeButton{position:absolute;right:2px;top:5px;width:20px;height:24px;z-index:1;border:none}.loleaflet-font{font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol" !important}#documents-overlay,#documents-overlay-below{position:fixed;top:0px;left:0;width:100%;height:100%;filter:alpha(opacity=60);opacity:.6;z-index:1000;background-color:#fff}#documents-overlay-below{right:72px;top:0px;filter:alpha(opacity=100);opacity:1;background:#fff;z-index:999}#file_upload_start{display:block;position:relative;left:0;top:0;width:200px;height:100px;margin-bottom:-110px;padding:0;cursor:pointer;overflow:hidden;font-size:1em;-ms-filter:"progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";filter:alpha(opacity=0);opacity:0;z-index:20}#saving-document{float:right;display:none}#warning-connection-lost{position:relative;z-index:2000;height:19px;margin-top:-2px;padding:13px 0;text-align:center;color:#fff;background-color:#ce7070;font-size:16px;font-weight:bold}#warning-connection-lost img{position:absolute;top:12px;right:10px;height:20px}#connection-lost{right:5px;background:#fff;width:95%;position:absolute;top:87px}#mainContainer #collaboration{float:right;position:relative;z-index:1;width:70px;padding:5px}#members{left:auto !important;right:0px;top:4px !important;padding-top:47px !important;background-color:#ddd !important;z-index:540}.webodfeditor-memberListButton{background-color:rgba(0,0,0,0) !important;box-shadow:none !important;border:none !important}.webodfeditor-memberListButton span{display:block;border-radius:3px;margin:auto}.webodfeditor-memberListButton img{border:0 none !important}.webodfeditor-memberListButton input{width:46px}#memberList .webodfeditor-memberListLabel{color:#555 !important;border-radius:3px !important;padding:0 !important;margin-bottom:10px;font-size:10px !important;text-align:center}#ocToolbar,#ocToolbarInside{border-bottom:none !important;background:none !important;box-shadow:none !important}#toolbar{position:static !important;min-height:29px !important;border-bottom:none !important;border-radius:2px;margin:6px 30px 0 0 !important;padding:0 !important;box-shadow:none !important;background:#f5f5f5 !important}#ocToolbar .dijitToolbar{float:left}#toolbar>.dijit{margin-top:2px !important;margin-left:3px}#toolbar>span.dijit{margin-left:0}#toolbar>.dijitComboBox{margin:3px 5px 0 3px !important}#toolbar>.dijitComboBox .dijitInputInner{vertical-align:middle;line-height:1.7em}#container{top:39px !important}#canvas>div{box-shadow:none !important}cursor>div{padding-bottom:0 !important}editinfo>div.editInfoMarker{width:4px;border-radius:0;box-shadow:0 0 0 #fff;background-clip:content-box;padding:0 5px}.dijitToolbar{min-height:31px;line-height:1em}.dijitToolbar .dijitDropDownButton{padding-top:2px}.dijitSpinner .dijitSpinnerButtonContainer .dijitArrowButton{margin-top:-1px}.claro .dijitComboBox .dijitInputInner{padding:0 1px !important}.claro .dijitTextBox .dijitInputInner,.claro .dijitSpinner .dijitSpinnerButtonInner{margin:0}.dojoTabular{border-collapse:collapse;border-spacing:0;border:1px solid #ccc;margin:0 1.5em}.dojoTabular th{text-align:center;font-weight:bold}.dojoTabular thead,.dojoTabular tfoot{background-color:#efefef;border:1px solid #ccc;border-width:1px 0}.dojoTabular th,.dojoTabular td{padding:.25em .5em}document p{cursor:auto}.oc-dialog .fileexists{-webkit-touch-callout:none;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.oc-dialog .fileexists .conflict .filename,.oc-dialog .fileexists .conflict .mtime,.oc-dialog .fileexists .conflict .size{-webkit-touch-callout:initial;-webkit-user-select:initial;-khtml-user-select:initial;-moz-user-select:initial;-ms-user-select:initial;user-select:initial}.oc-dialog .fileexists .conflict .message{color:#e9322d}.oc-dialog .fileexists table{width:100%}.oc-dialog .fileexists th{padding-left:0;padding-right:0}.oc-dialog .fileexists th input[type=checkbox]{margin-right:3px}.oc-dialog .fileexists th:first-child{width:230px}.oc-dialog .fileexists th label{font-weight:normal;color:#000}.oc-dialog .fileexists th .count{margin-left:3px}.oc-dialog .fileexists .conflicts .template{display:none}.oc-dialog .fileexists .conflict{width:100%;height:85px}.oc-dialog .fileexists .conflict .filename{color:#777;word-break:break-all;clear:left}.oc-dialog .fileexists .icon{width:64px;height:64px;margin:0px 5px 5px 5px;background-repeat:no-repeat;background-size:64px 64px;float:left}.oc-dialog .fileexists .replacement{float:left;width:230px}.oc-dialog .fileexists .original{float:left;width:230px}.oc-dialog .fileexists .conflicts{overflow-y:scroll;max-height:225px}.oc-dialog .fileexists .conflict input[type=checkbox]{float:left}.oc-dialog .fileexists #allfileslabel{float:right}.oc-dialog .fileexists #allfiles{vertical-align:bottom;position:relative;top:-3px}.oc-dialog .fileexists #allfiles+span{vertical-align:bottom}.oc-dialog .oc-dialog-buttonrow{width:100%;text-align:right}.oc-dialog .oc-dialog-buttonrow .cancel{float:left}#documents-content{margin:0px auto}', "", {
                    version: 3,
                    sources: ["webpack://./css/document.scss"],
                    names: [],
                    mappings: "AAAA,QACC,0BAAA,CAGD,kCACC,qBAAA,CAGD,KACC,cAAA,CACA,UAAA,CACA,WAAA,CAGD,eAAA,WAAA,CAEA,+EAGC,oBAAA,CACA,YAAA,CACA,WAAA,CACA,UAAA,CACA,WAAA,CACA,kBAAA,CAGD,6BACC,gBAAA,CACA,iBAAA,CAGD,gEAEC,qBAAA,CAGD,+BACC,iBAAA,CACA,iBAAA,CACA,gBAAA,CACA,UAAA,CAGD,YACC,aAAA,CACA,iBAAA,CACA,YAAA,CACA,WAAA,CACA,2BAAA,CACA,qBAAA,CAGD,kBACC,wBAAA,CAGD,gBACC,+BAAA,CACA,iBAAA,CACA,UAAA,CACA,UAAA,CACA,kBAAA,CACA,sBAAA,CACA,eAAA,CACA,iBAAA,CACA,aAAA,CACA,6BAAA,CACA,0BAAA,CACA,qBAAA,CACA,kBAAA,CAGD,eACC,eAAA,CACA,iBAAA,CACA,UAAA,CACA,SAAA,CACA,sBAAA,CAGD,kBACC,UAAA,CACA,QAAA,CAGD,gBACC,iBAAA,CAGD,gBACC,eAAA,CACA,WAAA,CACA,kBAAA,CACA,UAAA,CAGD,qBACC,eAAA,CACA,eAAA,CACA,YAAA,CAGD,WACC,iBAAA,CACA,OAAA,CACA,WAAA,CACA,YAAA,CACA,8BAAA,CACA,WAAA,CACA,UAAA,CAGD,sBACC,WAAA,CACA,UAAA,CAGD,YACC,YAAA,CACA,eAAA,CACA,UAAA,CACA,8BAAA,CACA,iBAAA,CAGD,eACC,iBAAA,CACA,UAAA,CACA,WAAA,CACA,OAAA,CACA,QAAA,CAGD,+BACC,iBAAA,CACA,UAAA,CACA,WAAA,CACA,WAAA,CACA,6CAAA,CAGD,uBACC,iBAAA,CACA,OAAA,CACA,QAAA,CACA,+BAAA,CACA,6CAAA,CAGD,qBACC,iBAAA,CACA,eAAA,CAGD,oBACC,iBAAA,CACA,UAAA,CACA,WAAA,CACA,gCAAA,CACA,OAAA,CACA,QAAA,CAGD,WACC,iBAAA,CACA,WAAA,CAGD,mBACC,cAAA,CACA,WAAA,CACA,WAAA,CACA,mCAAA,CACA,OAAA,CACA,OAAA,CACA,QAAA,CACA,qBAAA,CACA,iBAAA,CACA,eAAA,CAKD,iCACC,iBAAA,CACA,SAAA,CACA,OAAA,CACA,UAAA,CACA,WAAA,CACA,SAAA,CACA,WAAA,CAGD,gBACC,+LAAA,CAGD,4CACC,cAAA,CACA,OAAA,CACA,MAAA,CACA,UAAA,CACA,WAAA,CACA,wBAAA,CACA,UAAA,CACA,YAAA,CACA,qBAAA,CAGD,yBACC,UAAA,CACA,OAAA,CACA,yBAAA,CACA,SAAA,CACA,eAAA,CACA,WAAA,CAGD,mBACC,aAAA,CACA,iBAAA,CACA,MAAA,CAAA,KAAA,CAAA,WAAA,CAAA,YAAA,CACA,oBAAA,CAAA,SAAA,CACA,cAAA,CAAA,eAAA,CACA,aAAA,CACA,+DAAA,CAAA,uBAAA,CAAA,SAAA,CACA,UAAA,CAGD,iBACC,WAAA,CACA,YAAA,CAGD,yBACC,iBAAA,CACA,YAAA,CACA,WAAA,CACA,eAAA,CACA,cAAA,CACA,iBAAA,CACA,UAAA,CACA,wBAAA,CACA,cAAA,CACA,gBAAA,CAGD,6BACC,iBAAA,CACA,QAAA,CACA,UAAA,CACA,WAAA,CAGD,iBACC,SAAA,CACA,eAAA,CACA,SAAA,CACA,iBAAA,CACA,QAAA,CAID,8BACC,WAAA,CAAA,iBAAA,CAAA,SAAA,CACA,UAAA,CAAA,WAAA,CAGD,SACC,oBAAA,CACA,SAAA,CACA,kBAAA,CACA,2BAAA,CACA,gCAAA,CACA,WAAA,CAGD,+BACC,yCAAA,CACA,0BAAA,CACA,sBAAA,CAGD,oCACC,aAAA,CACA,iBAAA,CACA,WAAA,CAGD,mCACC,wBAAA,CAGD,qCACC,UAAA,CAGD,0CACC,qBAAA,CACA,4BAAA,CACA,oBAAA,CACA,kBAAA,CACA,yBAAA,CACA,iBAAA,CAGD,4BACC,6BAAA,CACA,0BAAA,CACA,0BAAA,CAGD,SACC,0BAAA,CACA,0BAAA,CACA,6BAAA,CACA,iBAAA,CACA,8BAAA,CACA,oBAAA,CACA,0BAAA,CACA,6BAAA,CAGD,yBACC,UAAA,CAGD,gBACC,yBAAA,CACA,eAAA,CAGD,oBACC,aAAA,CAGD,wBACC,+BAAA,CAGD,yCACC,qBAAA,CACA,iBAAA,CAGD,WACC,mBAAA,CAGD,YACC,0BAAA,CAGD,WACC,2BAAA,CAGD,4BACC,SAAA,CACA,eAAA,CACA,qBAAA,CACA,2BAAA,CACA,aAAA,CAGD,cACC,eAAA,CACA,eAAA,CAGD,mCACC,eAAA,CAGD,6DACC,eAAA,CAGD,uCACC,wBAAA,CAGD,oFAEC,QAAA,CAID,aAAA,wBAAA,CAAA,gBAAA,CAAA,qBAAA,CAAA,cAAA,CAEA,gBAAA,iBAAA,CAAA,gBAAA,CAEA,sCAAA,wBAAA,CAAA,qBAAA,CAAA,kBAAA,CAEA,gCAAA,kBAAA,CAEA,WACC,WAAA,CAGD,uBACC,0BAAA,CACA,wBAAA,CACA,uBAAA,CACA,qBAAA,CACA,oBAAA,CACA,gBAAA,CAGD,0HAGC,6BAAA,CACA,2BAAA,CACA,0BAAA,CACA,wBAAA,CACA,uBAAA,CACA,mBAAA,CAGD,0CACC,aAAA,CAGD,6BACC,UAAA,CAGD,0BACC,cAAA,CACA,eAAA,CAGD,+CACC,gBAAA,CAGD,sCACC,WAAA,CAGD,gCACC,kBAAA,CACA,UAAA,CAGD,iCACC,eAAA,CAGD,4CACC,YAAA,CAGD,iCACC,UAAA,CACA,WAAA,CAGD,2CACC,UAAA,CACA,oBAAA,CACA,UAAA,CAGD,6BACC,UAAA,CACA,WAAA,CACA,sBAAA,CACA,2BAAA,CACA,yBAAA,CACA,UAAA,CAGD,oCACC,UAAA,CACA,WAAA,CAGD,iCACC,UAAA,CACA,WAAA,CAGD,kCACC,iBAAA,CACA,gBAAA,CAGD,sDACC,UAAA,CAGD,sCACC,WAAA,CAGD,iCACC,qBAAA,CACA,iBAAA,CACA,QAAA,CAGD,sCACC,qBAAA,CAGD,gCACC,UAAA,CACA,gBAAA,CAGD,wCACC,UAAA,CAGD,mBACC,eAAA",
                    sourcesContent: ["#editor {\n\tbox-shadow: none !important;\n}\n\n#editor ::-webkit-scrollbar-thumb {\n\tbackground-color: #fff;\n}\n\nbody {\n\tposition: fixed;\n\twidth: 100%;\n\theight: 100%;\n}\n\n.documentslist { padding:5px; }\n\n.documentslist .document,\n.documentslist .progress,\n.documentslist .add-document{\n\tdisplay: inline-block;\n\theight: 200px;\n\twidth: 200px;\n\tfloat: left;\n\tmargin: 14px;\n\tvertical-align: top;\n}\n\n.documentslist .progress div{\n\tmargin-top: 144px;\n\ttext-align: center;\n}\n\n.documentslist .document:hover,\n.documentslist .document a:focus {\n\tbackground-color: #ddd;\n}\n\n.documentslist .session-active {\n\tposition: relative;\n\tmargin-left: 128px;\n\tmargin-top: 128px;\n\twidth: 32px;\n}\n\n.document a {\n\tdisplay: block;\n\tposition: relative;\n\theight: 200px;\n\twidth: 200px;\n\tbackground-repeat: no-repeat;\n\tbackground-size: 200px;\n}\n\n.document a:hover {\n\tborder: 1px solid #818181;\n}\n\n.document label {\n\tbackground: rgba(255, 255, 255, 0.7);\n\tposition: absolute;\n\tbottom: 0px;\n\twidth: 100%;\n\tfont-weight: normal;\n\ttext-overflow: ellipsis;\n\toverflow: hidden;\n\ttext-align: center;\n\tpadding: 0 8px;\n\t-webkit-box-sizing: border-box;\n\t-moz-box-sizing: border-box;\n\tbox-sizing: border-box;\n\twhite-space: nowrap;\n}\n\n.claro #header{\n\ttext-align: left;\n\tposition: absolute;\n\twidth: 100%;\n\tpadding:0;\n\tz-index: 500 !important;\n}\n\n#header #dropdown{\n\tright: auto;\n\ttop: 45px;\n}\n\n#header .padded{\n\tmargin-right:12px;\n}\n\n#document-title {\n\tmin-width:300px;\n\tpadding: 7px;\n\tfont-weight: normal;\n\tcolor: #FFF;\n}\n\n#ocToolbar .filename{\n\tpadding: 5px 6px;\n\tmin-width: 300px;\n\tmargin-top: 0;\n}\n\n#odf-close{\n\tposition: absolute;\n\tright: 0;\n\tfloat: right;\n\tpadding: 18px;\n\tbackground-color: transparent;\n\tborder: none;\n\topacity: .5;\n}\n\n#odf-close.icon-close {\n\theight: 23px;\n\twidth: 23px;\n}\n\n#odf-invite{\n\tmargin-top: 0;\n\tmargin-left: 3px;\n\tfloat: left;\n\tbackground-position: 5px center;\n\tpadding-left: 24px;\n}\n\n#mainContainer{\n\tposition: absolute;\n\twidth:100%;\n\tz-index: 500;\n\ttop: 0px;\n\tbottom: 0;\n}\n\n#loadingContainer.icon-loading {\n\tposition: absolute;\n\twidth: 100%;\n\theight: 100%;\n\tz-index: 600;\n\tbackground-color: var(--color-main-background);\n}\n\n#proxyLoadingContainer {\n\tposition: absolute;\n\ttop: 50%;\n\tleft: 50%;\n\ttransform: translate(-50%, -50%);\n\tbackground-color: var(--color-main-background);\n}\n\n#proxyLoadingMessage {\n\tposition: relative;\n\tmargin-top: 10px;\n}\n\n#revViewerContainer{\n\tposition: absolute;\n\twidth: 100%;\n\tz-index: 600;\n\tbackground-color: #ddd !important;\n\ttop: 0px;\n\tbottom: 0;\n}\n\n#revViewer{\n\tposition: relative;\n\theight: 100%;\n}\n\n#revPanelContainer{\n\tposition: fixed;\n\twidth: 250px;\n\tz-index: 600;\n\tbackground-color: #efefef !important;\n\tright: 0;\n\ttop: 0px;\n\tbottom: 0;\n\tbox-sizing: border-box;\n\toverflow-x: hidden;\n\toverflow-y: auto;\n}\n\n\n/* For close button image */\n#revViewerContainer .closeButton {\n\tposition: absolute;\n\tright: 2px;\n\ttop: 5px;\n\twidth: 20px;\n\theight: 24px;\n\tz-index: 1;\n\tborder: none;\n}\n\n.loleaflet-font{\n\tfont-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol' !important;\n}\n\n#documents-overlay, #documents-overlay-below{\n\tposition: fixed;\n\ttop: 0px;\n\tleft: 0;\n\twidth: 100%;\n\theight: 100%;\n\tfilter:alpha(opacity=60);\n\topacity: .6;\n\tz-index: 1000;\n\tbackground-color: #fff;\n}\n\n#documents-overlay-below{\n\tright: 72px;\n\ttop: 0px;\n\tfilter:alpha(opacity=100);\n\topacity: 1;\n\tbackground:#fff;\n\tz-index: 999;\n}\n\n#file_upload_start{\n\tdisplay: block;\n\tposition:relative;\n\tleft:0; top:0; width:200px; height:100px;\n\tmargin-bottom: -110px;padding:0;\n\tcursor:pointer; overflow:hidden;\n\tfont-size:1em;\n\t-ms-filter:'progid:DXImageTransform.Microsoft.Alpha(Opacity=0)'; filter:alpha(opacity=0); opacity:0;\n\tz-index:20;\n}\n\n#saving-document{\n\tfloat:right;\n\tdisplay:none;\n}\n\n#warning-connection-lost{\n\tposition: relative;\n\tz-index: 2000;\n\theight: 19px;\n\tmargin-top: -2px;\n\tpadding: 13px 0;\n\ttext-align: center;\n\tcolor: #ffffff;\n\tbackground-color: #CE7070;\n\tfont-size: 16px;\n\tfont-weight: bold;\n}\n\n#warning-connection-lost img {\n\tposition: absolute;\n\ttop: 12px;\n\tright: 10px;\n\theight: 20px;\n}\n\n#connection-lost{\n\tright: 5px;\n\tbackground: #fff;\n\twidth: 95%;\n\tposition: absolute;\n\ttop: 87px;\n}\n\n/* override WebODF styling here */\n#mainContainer #collaboration{\n\tfloat:right;position: relative;z-index: 1;\n\twidth: 70px;padding:5px;\n}\n\n#members {\n\tleft: auto !important;\n\tright:0px;\n\ttop: 4px !important;\n\tpadding-top: 47px !important;\n\tbackground-color: #ddd !important;\n\tz-index: 540;\n}\n\n.webodfeditor-memberListButton {\n\tbackground-color: transparent !important;\n\tbox-shadow: none !important;\n\tborder: none !important;\n}\n\n.webodfeditor-memberListButton span {\n\tdisplay: block;\n\tborder-radius: 3px;\n\tmargin: auto;\n}\n\n.webodfeditor-memberListButton img{\n\tborder: 0 none !important;\n}\n\n.webodfeditor-memberListButton input{\n\twidth:46px;\n}\n\n#memberList .webodfeditor-memberListLabel {\n\tcolor: #555 !important;\n\tborder-radius: 3px !important;\n\tpadding: 0 !important;\n\tmargin-bottom: 10px;\n\tfont-size: 10px !important;\n\ttext-align:center;\n}\n\n#ocToolbar, #ocToolbarInside{\n\tborder-bottom: none !important;\n\tbackground:  none !important;\n\tbox-shadow: none !important;\n}\n\n#toolbar {\n\tposition:static !important;\n\tmin-height: 29px !important;\n\tborder-bottom: none !important;\n\tborder-radius: 2px;\n\tmargin: 6px 30px 0 0 !important;\n\tpadding: 0 !important;\n\tbox-shadow: none !important;\n\tbackground: #F5F5F5 !important;\n}\n\n#ocToolbar .dijitToolbar{\n\tfloat:left;\n}\n\n#toolbar > .dijit{\n\tmargin-top: 2px !important;\n\tmargin-left:3px;\n}\n\n#toolbar > span.dijit{\n\tmargin-left: 0;\n}\n\n#toolbar > .dijitComboBox{\n\tmargin: 3px 5px 0 3px !important;\n}\n\n#toolbar > .dijitComboBox .dijitInputInner{\n\tvertical-align: middle;\n\tline-height: 1.7em;\n}\n\n#container {\n\ttop: 39px !important;\n}\n\n#canvas > div {\n\tbox-shadow: none !important;\n}\n\ncursor > div {\n\tpadding-bottom: 0 !important;\n}\n\neditinfo > div.editInfoMarker {\n\twidth: 4px;\n\tborder-radius: 0;\n\tbox-shadow: 0 0 0 #fff;\n\tbackground-clip:content-box;\n\tpadding: 0 5px;\n}\n\n.dijitToolbar{\n\tmin-height: 31px;\n\tline-height: 1em;\n}\n\n.dijitToolbar .dijitDropDownButton {\n\tpadding-top: 2px;\n}\n\n.dijitSpinner .dijitSpinnerButtonContainer .dijitArrowButton {\n\tmargin-top: -1px;\n}\n\n.claro .dijitComboBox .dijitInputInner{\n\tpadding:0 1px !important;\n}\n\n.claro .dijitTextBox .dijitInputInner,\n.claro .dijitSpinner .dijitSpinnerButtonInner {\n\tmargin: 0;\n}\n\n/* part of dojo.css */\n.dojoTabular {border-collapse: collapse; border-spacing: 0; border: 1px solid #ccc; margin: 0 1.5em;}\n\n.dojoTabular th {text-align: center; font-weight: bold;}\n\n.dojoTabular thead,.dojoTabular tfoot {background-color: #efefef; border: 1px solid #ccc; border-width: 1px 0;}\n\n.dojoTabular th,.dojoTabular td {padding: 0.25em 0.5em;}\n\ndocument p{\n\tcursor:auto;\n}\n\n.oc-dialog .fileexists {\n\t-webkit-touch-callout: none;\n\t-webkit-user-select: none;\n\t-khtml-user-select: none;\n\t-moz-user-select: none;\n\t-ms-user-select: none;\n\tuser-select: none;\n}\n\n.oc-dialog .fileexists .conflict .filename,\n.oc-dialog .fileexists .conflict .mtime,\n.oc-dialog .fileexists .conflict .size {\n\t-webkit-touch-callout: initial;\n\t-webkit-user-select: initial;\n\t-khtml-user-select: initial;\n\t-moz-user-select: initial;\n\t-ms-user-select: initial;\n\tuser-select: initial;\n}\n\n.oc-dialog .fileexists .conflict .message {\n\tcolor: #e9322d;\n}\n\n.oc-dialog .fileexists table {\n\twidth: 100%;\n}\n\n.oc-dialog .fileexists th {\n\tpadding-left: 0;\n\tpadding-right: 0;\n}\n\n.oc-dialog .fileexists th input[type='checkbox'] {\n\tmargin-right: 3px;\n}\n\n.oc-dialog .fileexists th:first-child {\n\twidth: 230px;\n}\n\n.oc-dialog .fileexists th label {\n\tfont-weight: normal;\n\tcolor:black;\n}\n\n.oc-dialog .fileexists th .count {\n\tmargin-left: 3px;\n}\n\n.oc-dialog .fileexists .conflicts .template {\n\tdisplay: none;\n}\n\n.oc-dialog .fileexists .conflict {\n\twidth: 100%;\n\theight: 85px;\n}\n\n.oc-dialog .fileexists .conflict .filename {\n\tcolor:#777;\n\tword-break: break-all;\n\tclear: left;\n}\n\n.oc-dialog .fileexists .icon {\n\twidth: 64px;\n\theight: 64px;\n\tmargin: 0px 5px 5px 5px;\n\tbackground-repeat: no-repeat;\n\tbackground-size: 64px 64px;\n\tfloat: left;\n}\n\n.oc-dialog .fileexists .replacement {\n\tfloat: left;\n\twidth: 230px;\n}\n\n.oc-dialog .fileexists .original {\n\tfloat: left;\n\twidth: 230px;\n}\n\n.oc-dialog .fileexists .conflicts {\n\toverflow-y:scroll;\n\tmax-height: 225px;\n}\n\n.oc-dialog .fileexists .conflict input[type='checkbox'] {\n\tfloat: left;\n}\n\n.oc-dialog .fileexists #allfileslabel {\n\tfloat:right;\n}\n\n.oc-dialog .fileexists #allfiles {\n\tvertical-align: bottom;\n\tposition: relative;\n\ttop: -3px;\n}\n\n.oc-dialog .fileexists #allfiles + span{\n\tvertical-align: bottom;\n}\n\n.oc-dialog .oc-dialog-buttonrow {\n\twidth:100%;\n\ttext-align:right;\n}\n\n.oc-dialog .oc-dialog-buttonrow .cancel {\n\tfloat:left;\n}\n\n#documents-content {\n\tmargin: 0px auto;\n}\n"],
                    sourceRoot: ""
                }]);
                const s = a
            },
            3645: e => {
                "use strict";
                e.exports = function(e) {
                    var t = [];
                    return t.toString = function() {
                        return this.map((function(t) {
                            var n = "",
                                r = void 0 !== t[5];
                            return t[4] && (n += "@supports (".concat(t[4], ") {")), t[2] && (n += "@media ".concat(t[2], " {")), r && (n += "@layer".concat(t[5].length > 0 ? " ".concat(t[5]) : "", " {")), n += e(t), r && (n += "}"), t[2] && (n += "}"), t[4] && (n += "}"), n
                        })).join("")
                    }, t.i = function(e, n, r, o, i) {
                        "string" == typeof e && (e = [
                            [null, e, void 0]
                        ]);
                        var a = {};
                        if (r)
                            for (var s = 0; s < this.length; s++) {
                                var c = this[s][0];
                                null != c && (a[c] = !0)
                            }
                        for (var l = 0; l < e.length; l++) {
                            var u = [].concat(e[l]);
                            r && a[u[0]] || (void 0 !== i && (void 0 === u[5] || (u[1] = "@layer".concat(u[5].length > 0 ? " ".concat(u[5]) : "", " {").concat(u[1], "}")), u[5] = i), n && (u[2] ? (u[1] = "@media ".concat(u[2], " {").concat(u[1], "}"), u[2] = n) : u[2] = n), o && (u[4] ? (u[1] = "@supports (".concat(u[4], ") {").concat(u[1], "}"), u[4] = o) : u[4] = "".concat(o)), t.push(u))
                        }
                    }, t
                }
            },
            7537: e => {
                "use strict";
                e.exports = function(e) {
                    var t = e[1],
                        n = e[3];
                    if (!n) return t;
                    if ("function" == typeof btoa) {
                        var r = btoa(unescape(encodeURIComponent(JSON.stringify(n)))),
                            o = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(r),
                            i = "/*# ".concat(o, " */"),
                            a = n.sources.map((function(e) {
                                return "/*# sourceURL=".concat(n.sourceRoot || "").concat(e, " */")
                            }));
                        return [t].concat(a).concat([i]).join("\n")
                    }
                    return [t].join("\n")
                }
            },
            7856: function(e) {
                e.exports = function() {
                    "use strict";

                    function e(t) {
                        return e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                            return typeof e
                        } : function(e) {
                            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                        }, e(t)
                    }

                    function t(e, n) {
                        return t = Object.setPrototypeOf || function(e, t) {
                            return e.__proto__ = t, e
                        }, t(e, n)
                    }

                    function n() {
                        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                        if (Reflect.construct.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                        } catch (e) {
                            return !1
                        }
                    }

                    function r(e, o, i) {
                        return r = n() ? Reflect.construct : function(e, n, r) {
                            var o = [null];
                            o.push.apply(o, n);
                            var i = new(Function.bind.apply(e, o));
                            return r && t(i, r.prototype), i
                        }, r.apply(null, arguments)
                    }

                    function o(e) {
                        return i(e) || a(e) || s(e) || l()
                    }

                    function i(e) {
                        if (Array.isArray(e)) return c(e)
                    }

                    function a(e) {
                        if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                    }

                    function s(e, t) {
                        if (e) {
                            if ("string" == typeof e) return c(e, t);
                            var n = Object.prototype.toString.call(e).slice(8, -1);
                            return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? c(e, t) : void 0
                        }
                    }

                    function c(e, t) {
                        (null == t || t > e.length) && (t = e.length);
                        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                        return r
                    }

                    function l() {
                        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }
                    var u = Object.hasOwnProperty,
                        d = Object.setPrototypeOf,
                        p = Object.isFrozen,
                        f = Object.getPrototypeOf,
                        A = Object.getOwnPropertyDescriptor,
                        m = Object.freeze,
                        h = Object.seal,
                        g = Object.create,
                        v = "undefined" != typeof Reflect && Reflect,
                        b = v.apply,
                        C = v.construct;
                    b || (b = function(e, t, n) {
                        return e.apply(t, n)
                    }), m || (m = function(e) {
                        return e
                    }), h || (h = function(e) {
                        return e
                    }), C || (C = function(e, t) {
                        return r(e, o(t))
                    });
                    var y = L(Array.prototype.forEach),
                        x = L(Array.prototype.pop),
                        w = L(Array.prototype.push),
                        E = L(String.prototype.toLowerCase),
                        O = L(String.prototype.toString),
                        I = L(String.prototype.match),
                        S = L(String.prototype.replace),
                        R = L(String.prototype.indexOf),
                        T = L(String.prototype.trim),
                        N = L(RegExp.prototype.test),
                        k = _(TypeError);

                    function L(e) {
                        return function(t) {
                            for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++) r[o - 1] = arguments[o];
                            return b(e, t, r)
                        }
                    }

                    function _(e) {
                        return function() {
                            for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                            return C(e, n)
                        }
                    }

                    function B(e, t, n) {
                        n = n || E, d && d(e, null);
                        for (var r = t.length; r--;) {
                            var o = t[r];
                            if ("string" == typeof o) {
                                var i = n(o);
                                i !== o && (p(t) || (t[r] = i), o = i)
                            }
                            e[o] = !0
                        }
                        return e
                    }

                    function D(e) {
                        var t, n = g(null);
                        for (t in e) !0 === b(u, e, [t]) && (n[t] = e[t]);
                        return n
                    }

                    function P(e, t) {
                        for (; null !== e;) {
                            var n = A(e, t);
                            if (n) {
                                if (n.get) return L(n.get);
                                if ("function" == typeof n.value) return L(n.value)
                            }
                            e = f(e)
                        }

                        function r(e) {
                            return console.warn("fallback value for", e), null
                        }
                        return r
                    }
                    var M = m(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]),
                        U = m(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]),
                        j = m(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]),
                        $ = m(["animate", "color-profile", "cursor", "discard", "fedropshadow", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]),
                        F = m(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover"]),
                        G = m(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]),
                        H = m(["#text"]),
                        z = m(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "xmlns", "slot"]),
                        W = m(["accent-height", "accumulate", "additive", "alignment-baseline", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]),
                        V = m(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]),
                        q = m(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]),
                        X = h(/\{\{[\w\W]*|[\w\W]*\}\}/gm),
                        Y = h(/<%[\w\W]*|[\w\W]*%>/gm),
                        J = h(/\${[\w\W]*}/gm),
                        K = h(/^data-[\-\w.\u00B7-\uFFFF]/),
                        Q = h(/^aria-[\-\w]+$/),
                        Z = h(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),
                        ee = h(/^(?:\w+script|data):/i),
                        te = h(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),
                        ne = h(/^html$/i),
                        re = function() {
                            return "undefined" == typeof window ? null : window
                        },
                        oe = function(t, n) {
                            if ("object" !== e(t) || "function" != typeof t.createPolicy) return null;
                            var r = null,
                                o = "data-tt-policy-suffix";
                            n.currentScript && n.currentScript.hasAttribute(o) && (r = n.currentScript.getAttribute(o));
                            var i = "dompurify" + (r ? "#" + r : "");
                            try {
                                return t.createPolicy(i, {
                                    createHTML: function(e) {
                                        return e
                                    },
                                    createScriptURL: function(e) {
                                        return e
                                    }
                                })
                            } catch (e) {
                                return console.warn("TrustedTypes policy " + i + " could not be created."), null
                            }
                        };

                    function ie() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : re(),
                            n = function(e) {
                                return ie(e)
                            };
                        if (n.version = "2.4.3", n.removed = [], !t || !t.document || 9 !== t.document.nodeType) return n.isSupported = !1, n;
                        var r = t.document,
                            i = t.document,
                            a = t.DocumentFragment,
                            s = t.HTMLTemplateElement,
                            c = t.Node,
                            l = t.Element,
                            u = t.NodeFilter,
                            d = t.NamedNodeMap,
                            p = void 0 === d ? t.NamedNodeMap || t.MozNamedAttrMap : d,
                            f = t.HTMLFormElement,
                            A = t.DOMParser,
                            h = t.trustedTypes,
                            g = l.prototype,
                            v = P(g, "cloneNode"),
                            b = P(g, "nextSibling"),
                            C = P(g, "childNodes"),
                            L = P(g, "parentNode");
                        if ("function" == typeof s) {
                            var _ = i.createElement("template");
                            _.content && _.content.ownerDocument && (i = _.content.ownerDocument)
                        }
                        var ae = oe(h, r),
                            se = ae ? ae.createHTML("") : "",
                            ce = i,
                            le = ce.implementation,
                            ue = ce.createNodeIterator,
                            de = ce.createDocumentFragment,
                            pe = ce.getElementsByTagName,
                            fe = r.importNode,
                            Ae = {};
                        try {
                            Ae = D(i).documentMode ? i.documentMode : {}
                        } catch (e) {}
                        var me = {};
                        n.isSupported = "function" == typeof L && le && void 0 !== le.createHTMLDocument && 9 !== Ae;
                        var he, ge, ve = X,
                            be = Y,
                            Ce = J,
                            ye = K,
                            xe = Q,
                            we = ee,
                            Ee = te,
                            Oe = Z,
                            Ie = null,
                            Se = B({}, [].concat(o(M), o(U), o(j), o(F), o(H))),
                            Re = null,
                            Te = B({}, [].concat(o(z), o(W), o(V), o(q))),
                            Ne = Object.seal(Object.create(null, {
                                tagNameCheck: {
                                    writable: !0,
                                    configurable: !1,
                                    enumerable: !0,
                                    value: null
                                },
                                attributeNameCheck: {
                                    writable: !0,
                                    configurable: !1,
                                    enumerable: !0,
                                    value: null
                                },
                                allowCustomizedBuiltInElements: {
                                    writable: !0,
                                    configurable: !1,
                                    enumerable: !0,
                                    value: !1
                                }
                            })),
                            ke = null,
                            Le = null,
                            _e = !0,
                            Be = !0,
                            De = !1,
                            Pe = !1,
                            Me = !1,
                            Ue = !1,
                            je = !1,
                            $e = !1,
                            Fe = !1,
                            Ge = !1,
                            He = !0,
                            ze = !1,
                            We = "user-content-",
                            Ve = !0,
                            qe = !1,
                            Xe = {},
                            Ye = null,
                            Je = B({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]),
                            Ke = null,
                            Qe = B({}, ["audio", "video", "img", "source", "image", "track"]),
                            Ze = null,
                            et = B({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]),
                            tt = "http://www.w3.org/1998/Math/MathML",
                            nt = "http://www.w3.org/2000/svg",
                            rt = "http://www.w3.org/1999/xhtml",
                            ot = rt,
                            it = !1,
                            at = null,
                            st = B({}, [tt, nt, rt], O),
                            ct = ["application/xhtml+xml", "text/html"],
                            lt = "text/html",
                            ut = null,
                            dt = i.createElement("form"),
                            pt = function(e) {
                                return e instanceof RegExp || e instanceof Function
                            },
                            ft = function(t) {
                                ut && ut === t || (t && "object" === e(t) || (t = {}), t = D(t), he = he = -1 === ct.indexOf(t.PARSER_MEDIA_TYPE) ? lt : t.PARSER_MEDIA_TYPE, ge = "application/xhtml+xml" === he ? O : E, Ie = "ALLOWED_TAGS" in t ? B({}, t.ALLOWED_TAGS, ge) : Se, Re = "ALLOWED_ATTR" in t ? B({}, t.ALLOWED_ATTR, ge) : Te, at = "ALLOWED_NAMESPACES" in t ? B({}, t.ALLOWED_NAMESPACES, O) : st, Ze = "ADD_URI_SAFE_ATTR" in t ? B(D(et), t.ADD_URI_SAFE_ATTR, ge) : et, Ke = "ADD_DATA_URI_TAGS" in t ? B(D(Qe), t.ADD_DATA_URI_TAGS, ge) : Qe, Ye = "FORBID_CONTENTS" in t ? B({}, t.FORBID_CONTENTS, ge) : Je, ke = "FORBID_TAGS" in t ? B({}, t.FORBID_TAGS, ge) : {}, Le = "FORBID_ATTR" in t ? B({}, t.FORBID_ATTR, ge) : {}, Xe = "USE_PROFILES" in t && t.USE_PROFILES, _e = !1 !== t.ALLOW_ARIA_ATTR, Be = !1 !== t.ALLOW_DATA_ATTR, De = t.ALLOW_UNKNOWN_PROTOCOLS || !1, Pe = t.SAFE_FOR_TEMPLATES || !1, Me = t.WHOLE_DOCUMENT || !1, $e = t.RETURN_DOM || !1, Fe = t.RETURN_DOM_FRAGMENT || !1, Ge = t.RETURN_TRUSTED_TYPE || !1, je = t.FORCE_BODY || !1, He = !1 !== t.SANITIZE_DOM, ze = t.SANITIZE_NAMED_PROPS || !1, Ve = !1 !== t.KEEP_CONTENT, qe = t.IN_PLACE || !1, Oe = t.ALLOWED_URI_REGEXP || Oe, ot = t.NAMESPACE || rt, t.CUSTOM_ELEMENT_HANDLING && pt(t.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (Ne.tagNameCheck = t.CUSTOM_ELEMENT_HANDLING.tagNameCheck), t.CUSTOM_ELEMENT_HANDLING && pt(t.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (Ne.attributeNameCheck = t.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), t.CUSTOM_ELEMENT_HANDLING && "boolean" == typeof t.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements && (Ne.allowCustomizedBuiltInElements = t.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), Pe && (Be = !1), Fe && ($e = !0), Xe && (Ie = B({}, o(H)), Re = [], !0 === Xe.html && (B(Ie, M), B(Re, z)), !0 === Xe.svg && (B(Ie, U), B(Re, W), B(Re, q)), !0 === Xe.svgFilters && (B(Ie, j), B(Re, W), B(Re, q)), !0 === Xe.mathMl && (B(Ie, F), B(Re, V), B(Re, q))), t.ADD_TAGS && (Ie === Se && (Ie = D(Ie)), B(Ie, t.ADD_TAGS, ge)), t.ADD_ATTR && (Re === Te && (Re = D(Re)), B(Re, t.ADD_ATTR, ge)), t.ADD_URI_SAFE_ATTR && B(Ze, t.ADD_URI_SAFE_ATTR, ge), t.FORBID_CONTENTS && (Ye === Je && (Ye = D(Ye)), B(Ye, t.FORBID_CONTENTS, ge)), Ve && (Ie["#text"] = !0), Me && B(Ie, ["html", "head", "body"]), Ie.table && (B(Ie, ["tbody"]), delete ke.tbody), m && m(t), ut = t)
                            },
                            At = B({}, ["mi", "mo", "mn", "ms", "mtext"]),
                            mt = B({}, ["foreignobject", "desc", "title", "annotation-xml"]),
                            ht = B({}, ["title", "style", "font", "a", "script"]),
                            gt = B({}, U);
                        B(gt, j), B(gt, $);
                        var vt = B({}, F);
                        B(vt, G);
                        var bt = function(e) {
                                var t = L(e);
                                t && t.tagName || (t = {
                                    namespaceURI: ot,
                                    tagName: "template"
                                });
                                var n = E(e.tagName),
                                    r = E(t.tagName);
                                return !!at[e.namespaceURI] && (e.namespaceURI === nt ? t.namespaceURI === rt ? "svg" === n : t.namespaceURI === tt ? "svg" === n && ("annotation-xml" === r || At[r]) : Boolean(gt[n]) : e.namespaceURI === tt ? t.namespaceURI === rt ? "math" === n : t.namespaceURI === nt ? "math" === n && mt[r] : Boolean(vt[n]) : e.namespaceURI === rt ? !(t.namespaceURI === nt && !mt[r]) && !(t.namespaceURI === tt && !At[r]) && !vt[n] && (ht[n] || !gt[n]) : !("application/xhtml+xml" !== he || !at[e.namespaceURI]))
                            },
                            Ct = function(e) {
                                w(n.removed, {
                                    element: e
                                });
                                try {
                                    e.parentNode.removeChild(e)
                                } catch (t) {
                                    try {
                                        e.outerHTML = se
                                    } catch (t) {
                                        e.remove()
                                    }
                                }
                            },
                            yt = function(e, t) {
                                try {
                                    w(n.removed, {
                                        attribute: t.getAttributeNode(e),
                                        from: t
                                    })
                                } catch (e) {
                                    w(n.removed, {
                                        attribute: null,
                                        from: t
                                    })
                                }
                                if (t.removeAttribute(e), "is" === e && !Re[e])
                                    if ($e || Fe) try {
                                        Ct(t)
                                    } catch (e) {} else try {
                                        t.setAttribute(e, "")
                                    } catch (e) {}
                            },
                            xt = function(e) {
                                var t, n;
                                if (je) e = "<remove></remove>" + e;
                                else {
                                    var r = I(e, /^[\r\n\t ]+/);
                                    n = r && r[0]
                                }
                                "application/xhtml+xml" === he && ot === rt && (e = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + e + "</body></html>");
                                var o = ae ? ae.createHTML(e) : e;
                                if (ot === rt) try {
                                    t = (new A).parseFromString(o, he)
                                } catch (e) {}
                                if (!t || !t.documentElement) {
                                    t = le.createDocument(ot, "template", null);
                                    try {
                                        t.documentElement.innerHTML = it ? se : o
                                    } catch (e) {}
                                }
                                var a = t.body || t.documentElement;
                                return e && n && a.insertBefore(i.createTextNode(n), a.childNodes[0] || null), ot === rt ? pe.call(t, Me ? "html" : "body")[0] : Me ? t.documentElement : a
                            },
                            wt = function(e) {
                                return ue.call(e.ownerDocument || e, e, u.SHOW_ELEMENT | u.SHOW_COMMENT | u.SHOW_TEXT, null, !1)
                            },
                            Et = function(e) {
                                return e instanceof f && ("string" != typeof e.nodeName || "string" != typeof e.textContent || "function" != typeof e.removeChild || !(e.attributes instanceof p) || "function" != typeof e.removeAttribute || "function" != typeof e.setAttribute || "string" != typeof e.namespaceURI || "function" != typeof e.insertBefore || "function" != typeof e.hasChildNodes)
                            },
                            Ot = function(t) {
                                return "object" === e(c) ? t instanceof c : t && "object" === e(t) && "number" == typeof t.nodeType && "string" == typeof t.nodeName
                            },
                            It = function(e, t, r) {
                                me[e] && y(me[e], (function(e) {
                                    e.call(n, t, r, ut)
                                }))
                            },
                            St = function(e) {
                                var t;
                                if (It("beforeSanitizeElements", e, null), Et(e)) return Ct(e), !0;
                                if (N(/[\u0080-\uFFFF]/, e.nodeName)) return Ct(e), !0;
                                var r = ge(e.nodeName);
                                if (It("uponSanitizeElement", e, {
                                        tagName: r,
                                        allowedTags: Ie
                                    }), e.hasChildNodes() && !Ot(e.firstElementChild) && (!Ot(e.content) || !Ot(e.content.firstElementChild)) && N(/<[/\w]/g, e.innerHTML) && N(/<[/\w]/g, e.textContent)) return Ct(e), !0;
                                if ("select" === r && N(/<template/i, e.innerHTML)) return Ct(e), !0;
                                if (!Ie[r] || ke[r]) {
                                    if (!ke[r] && Tt(r)) {
                                        if (Ne.tagNameCheck instanceof RegExp && N(Ne.tagNameCheck, r)) return !1;
                                        if (Ne.tagNameCheck instanceof Function && Ne.tagNameCheck(r)) return !1
                                    }
                                    if (Ve && !Ye[r]) {
                                        var o = L(e) || e.parentNode,
                                            i = C(e) || e.childNodes;
                                        if (i && o)
                                            for (var a = i.length - 1; a >= 0; --a) o.insertBefore(v(i[a], !0), b(e))
                                    }
                                    return Ct(e), !0
                                }
                                return e instanceof l && !bt(e) ? (Ct(e), !0) : "noscript" !== r && "noembed" !== r || !N(/<\/no(script|embed)/i, e.innerHTML) ? (Pe && 3 === e.nodeType && (t = e.textContent, t = S(t, ve, " "), t = S(t, be, " "), t = S(t, Ce, " "), e.textContent !== t && (w(n.removed, {
                                    element: e.cloneNode()
                                }), e.textContent = t)), It("afterSanitizeElements", e, null), !1) : (Ct(e), !0)
                            },
                            Rt = function(e, t, n) {
                                if (He && ("id" === t || "name" === t) && (n in i || n in dt)) return !1;
                                if (Be && !Le[t] && N(ye, t));
                                else if (_e && N(xe, t));
                                else if (!Re[t] || Le[t]) {
                                    if (!(Tt(e) && (Ne.tagNameCheck instanceof RegExp && N(Ne.tagNameCheck, e) || Ne.tagNameCheck instanceof Function && Ne.tagNameCheck(e)) && (Ne.attributeNameCheck instanceof RegExp && N(Ne.attributeNameCheck, t) || Ne.attributeNameCheck instanceof Function && Ne.attributeNameCheck(t)) || "is" === t && Ne.allowCustomizedBuiltInElements && (Ne.tagNameCheck instanceof RegExp && N(Ne.tagNameCheck, n) || Ne.tagNameCheck instanceof Function && Ne.tagNameCheck(n)))) return !1
                                } else if (Ze[t]);
                                else if (N(Oe, S(n, Ee, "")));
                                else if ("src" !== t && "xlink:href" !== t && "href" !== t || "script" === e || 0 !== R(n, "data:") || !Ke[e])
                                    if (De && !N(we, S(n, Ee, "")));
                                    else if (n) return !1;
                                return !0
                            },
                            Tt = function(e) {
                                return e.indexOf("-") > 0
                            },
                            Nt = function(t) {
                                var r, o, i, a;
                                It("beforeSanitizeAttributes", t, null);
                                var s = t.attributes;
                                if (s) {
                                    var c = {
                                        attrName: "",
                                        attrValue: "",
                                        keepAttr: !0,
                                        allowedAttributes: Re
                                    };
                                    for (a = s.length; a--;) {
                                        var l = r = s[a],
                                            u = l.name,
                                            d = l.namespaceURI;
                                        if (o = "value" === u ? r.value : T(r.value), i = ge(u), c.attrName = i, c.attrValue = o, c.keepAttr = !0, c.forceKeepAttr = void 0, It("uponSanitizeAttribute", t, c), o = c.attrValue, !c.forceKeepAttr && (yt(u, t), c.keepAttr))
                                            if (N(/\/>/i, o)) yt(u, t);
                                            else {
                                                Pe && (o = S(o, ve, " "), o = S(o, be, " "), o = S(o, Ce, " "));
                                                var p = ge(t.nodeName);
                                                if (Rt(p, i, o)) {
                                                    if (!ze || "id" !== i && "name" !== i || (yt(u, t), o = We + o), ae && "object" === e(h) && "function" == typeof h.getAttributeType)
                                                        if (d);
                                                        else switch (h.getAttributeType(p, i)) {
                                                            case "TrustedHTML":
                                                                o = ae.createHTML(o);
                                                                break;
                                                            case "TrustedScriptURL":
                                                                o = ae.createScriptURL(o)
                                                        }
                                                    try {
                                                        d ? t.setAttributeNS(d, u, o) : t.setAttribute(u, o), x(n.removed)
                                                    } catch (e) {}
                                                }
                                            }
                                    }
                                    It("afterSanitizeAttributes", t, null)
                                }
                            },
                            kt = function e(t) {
                                var n, r = wt(t);
                                for (It("beforeSanitizeShadowDOM", t, null); n = r.nextNode();) It("uponSanitizeShadowNode", n, null), St(n) || (n.content instanceof a && e(n.content), Nt(n));
                                It("afterSanitizeShadowDOM", t, null)
                            };
                        return n.sanitize = function(o) {
                            var i, s, l, u, d, p = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                            if ((it = !o) && (o = "\x3c!--\x3e"), "string" != typeof o && !Ot(o)) {
                                if ("function" != typeof o.toString) throw k("toString is not a function");
                                if ("string" != typeof(o = o.toString())) throw k("dirty is not a string, aborting")
                            }
                            if (!n.isSupported) {
                                if ("object" === e(t.toStaticHTML) || "function" == typeof t.toStaticHTML) {
                                    if ("string" == typeof o) return t.toStaticHTML(o);
                                    if (Ot(o)) return t.toStaticHTML(o.outerHTML)
                                }
                                return o
                            }
                            if (Ue || ft(p), n.removed = [], "string" == typeof o && (qe = !1), qe) {
                                if (o.nodeName) {
                                    var f = ge(o.nodeName);
                                    if (!Ie[f] || ke[f]) throw k("root node is forbidden and cannot be sanitized in-place")
                                }
                            } else if (o instanceof c) 1 === (s = (i = xt("\x3c!----\x3e")).ownerDocument.importNode(o, !0)).nodeType && "BODY" === s.nodeName || "HTML" === s.nodeName ? i = s : i.appendChild(s);
                            else {
                                if (!$e && !Pe && !Me && -1 === o.indexOf("<")) return ae && Ge ? ae.createHTML(o) : o;
                                if (!(i = xt(o))) return $e ? null : Ge ? se : ""
                            }
                            i && je && Ct(i.firstChild);
                            for (var A = wt(qe ? o : i); l = A.nextNode();) 3 === l.nodeType && l === u || St(l) || (l.content instanceof a && kt(l.content), Nt(l), u = l);
                            if (u = null, qe) return o;
                            if ($e) {
                                if (Fe)
                                    for (d = de.call(i.ownerDocument); i.firstChild;) d.appendChild(i.firstChild);
                                else d = i;
                                return Re.shadowroot && (d = fe.call(r, d, !0)), d
                            }
                            var m = Me ? i.outerHTML : i.innerHTML;
                            return Me && Ie["!doctype"] && i.ownerDocument && i.ownerDocument.doctype && i.ownerDocument.doctype.name && N(ne, i.ownerDocument.doctype.name) && (m = "<!DOCTYPE " + i.ownerDocument.doctype.name + ">\n" + m), Pe && (m = S(m, ve, " "), m = S(m, be, " "), m = S(m, Ce, " ")), ae && Ge ? ae.createHTML(m) : m
                        }, n.setConfig = function(e) {
                            ft(e), Ue = !0
                        }, n.clearConfig = function() {
                            ut = null, Ue = !1
                        }, n.isValidAttribute = function(e, t, n) {
                            ut || ft({});
                            var r = ge(e),
                                o = ge(t);
                            return Rt(r, o, n)
                        }, n.addHook = function(e, t) {
                            "function" == typeof t && (me[e] = me[e] || [], w(me[e], t))
                        }, n.removeHook = function(e) {
                            if (me[e]) return x(me[e])
                        }, n.removeHooks = function(e) {
                            me[e] && (me[e] = [])
                        }, n.removeAllHooks = function() {
                            me = {}
                        }, n
                    }
                    return ie()
                }()
            },
            5573: e => {
                "use strict";
                var t = /["'&<>]/;
                e.exports = function(e) {
                    var n, r = "" + e,
                        o = t.exec(r);
                    if (!o) return r;
                    var i = "",
                        a = 0,
                        s = 0;
                    for (a = o.index; a < r.length; a++) {
                        switch (r.charCodeAt(a)) {
                            case 34:
                                n = "&quot;";
                                break;
                            case 38:
                                n = "&amp;";
                                break;
                            case 39:
                                n = "&#39;";
                                break;
                            case 60:
                                n = "&lt;";
                                break;
                            case 62:
                                n = "&gt;";
                                break;
                            default:
                                continue
                        }
                        s !== a && (i += r.substring(s, a)), s = a + 1, i += n
                    }
                    return s !== a ? i + r.substring(s, a) : i
                }
            },
            4155: e => {
                var t, n, r = e.exports = {};

                function o() {
                    throw new Error("setTimeout has not been defined")
                }

                function i() {
                    throw new Error("clearTimeout has not been defined")
                }

                function a(e) {
                    if (t === setTimeout) return setTimeout(e, 0);
                    if ((t === o || !t) && setTimeout) return t = setTimeout, setTimeout(e, 0);
                    try {
                        return t(e, 0)
                    } catch (n) {
                        try {
                            return t.call(null, e, 0)
                        } catch (n) {
                            return t.call(this, e, 0)
                        }
                    }
                }! function() {
                    try {
                        t = "function" == typeof setTimeout ? setTimeout : o
                    } catch (e) {
                        t = o
                    }
                    try {
                        n = "function" == typeof clearTimeout ? clearTimeout : i
                    } catch (e) {
                        n = i
                    }
                }();
                var s, c = [],
                    l = !1,
                    u = -1;

                function d() {
                    l && s && (l = !1, s.length ? c = s.concat(c) : u = -1, c.length && p())
                }

                function p() {
                    if (!l) {
                        var e = a(d);
                        l = !0;
                        for (var t = c.length; t;) {
                            for (s = c, c = []; ++u < t;) s && s[u].run();
                            u = -1, t = c.length
                        }
                        s = null, l = !1,
                            function(e) {
                                if (n === clearTimeout) return clearTimeout(e);
                                if ((n === i || !n) && clearTimeout) return n = clearTimeout, clearTimeout(e);
                                try {
                                    n(e)
                                } catch (t) {
                                    try {
                                        return n.call(null, e)
                                    } catch (t) {
                                        return n.call(this, e)
                                    }
                                }
                            }(e)
                    }
                }

                function f(e, t) {
                    this.fun = e, this.array = t
                }

                function A() {}
                r.nextTick = function(e) {
                    var t = new Array(arguments.length - 1);
                    if (arguments.length > 1)
                        for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
                    c.push(new f(e, t)), 1 !== c.length || l || a(p)
                }, f.prototype.run = function() {
                    this.fun.apply(null, this.array)
                }, r.title = "browser", r.browser = !0, r.env = {}, r.argv = [], r.version = "", r.versions = {}, r.on = A, r.addListener = A, r.once = A, r.off = A, r.removeListener = A, r.removeAllListeners = A, r.emit = A, r.prependListener = A, r.prependOnceListener = A, r.listeners = function(e) {
                    return []
                }, r.binding = function(e) {
                    throw new Error("process.binding is not supported")
                }, r.cwd = function() {
                    return "/"
                }, r.chdir = function(e) {
                    throw new Error("process.chdir is not supported")
                }, r.umask = function() {
                    return 0
                }
            },
            3379: e => {
                "use strict";
                var t = [];

                function n(e) {
                    for (var n = -1, r = 0; r < t.length; r++)
                        if (t[r].identifier === e) {
                            n = r;
                            break
                        } return n
                }

                function r(e, r) {
                    for (var i = {}, a = [], s = 0; s < e.length; s++) {
                        var c = e[s],
                            l = r.base ? c[0] + r.base : c[0],
                            u = i[l] || 0,
                            d = "".concat(l, " ").concat(u);
                        i[l] = u + 1;
                        var p = n(d),
                            f = {
                                css: c[1],
                                media: c[2],
                                sourceMap: c[3],
                                supports: c[4],
                                layer: c[5]
                            };
                        if (-1 !== p) t[p].references++, t[p].updater(f);
                        else {
                            var A = o(f, r);
                            r.byIndex = s, t.splice(s, 0, {
                                identifier: d,
                                updater: A,
                                references: 1
                            })
                        }
                        a.push(d)
                    }
                    return a
                }

                function o(e, t) {
                    var n = t.domAPI(t);
                    n.update(e);
                    return function(t) {
                        if (t) {
                            if (t.css === e.css && t.media === e.media && t.sourceMap === e.sourceMap && t.supports === e.supports && t.layer === e.layer) return;
                            n.update(e = t)
                        } else n.remove()
                    }
                }
                e.exports = function(e, o) {
                    var i = r(e = e || [], o = o || {});
                    return function(e) {
                        e = e || [];
                        for (var a = 0; a < i.length; a++) {
                            var s = n(i[a]);
                            t[s].references--
                        }
                        for (var c = r(e, o), l = 0; l < i.length; l++) {
                            var u = n(i[l]);
                            0 === t[u].references && (t[u].updater(), t.splice(u, 1))
                        }
                        i = c
                    }
                }
            },
            569: e => {
                "use strict";
                var t = {};
                e.exports = function(e, n) {
                    var r = function(e) {
                        if (void 0 === t[e]) {
                            var n = document.querySelector(e);
                            if (window.HTMLIFrameElement && n instanceof window.HTMLIFrameElement) try {
                                n = n.contentDocument.head
                            } catch (e) {
                                n = null
                            }
                            t[e] = n
                        }
                        return t[e]
                    }(e);
                    if (!r) throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
                    r.appendChild(n)
                }
            },
            9216: e => {
                "use strict";
                e.exports = function(e) {
                    var t = document.createElement("style");
                    return e.setAttributes(t, e.attributes), e.insert(t, e.options), t
                }
            },
            3565: (e, t, n) => {
                "use strict";
                e.exports = function(e) {
                    var t = n.nc;
                    t && e.setAttribute("nonce", t)
                }
            },
            7795: e => {
                "use strict";
                e.exports = function(e) {
                    var t = e.insertStyleElement(e);
                    return {
                        update: function(n) {
                            ! function(e, t, n) {
                                var r = "";
                                n.supports && (r += "@supports (".concat(n.supports, ") {")), n.media && (r += "@media ".concat(n.media, " {"));
                                var o = void 0 !== n.layer;
                                o && (r += "@layer".concat(n.layer.length > 0 ? " ".concat(n.layer) : "", " {")), r += n.css, o && (r += "}"), n.media && (r += "}"), n.supports && (r += "}");
                                var i = n.sourceMap;
                                i && "undefined" != typeof btoa && (r += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i)))), " */")), t.styleTagTransform(r, e, t.options)
                            }(t, e, n)
                        },
                        remove: function() {
                            ! function(e) {
                                if (null === e.parentNode) return !1;
                                e.parentNode.removeChild(e)
                            }(t)
                        }
                    }
                }
            },
            4589: e => {
                "use strict";
                e.exports = function(e, t) {
                    if (t.styleSheet) t.styleSheet.cssText = e;
                    else {
                        for (; t.firstChild;) t.removeChild(t.firstChild);
                        t.appendChild(document.createTextNode(e))
                    }
                }
            }
        },
        n = {};

    function r(t) {
        var o = n[t];
        if (void 0 !== o) return o.exports;
        var i = n[t] = {
            id: t,
            exports: {}
        };
        return e[t].call(i.exports, i, i.exports, r), i.exports
    }
    r.n = e => {
        var t = e && e.__esModule ? () => e.default : () => e;
        return r.d(t, {
            a: t
        }), t
    }, r.d = (e, t) => {
        for (var n in t) r.o(t, n) && !r.o(e, n) && Object.defineProperty(e, n, {
            enumerable: !0,
            get: t[n]
        })
    }, r.g = function() {
        if ("object" == typeof globalThis) return globalThis;
        try {
            return this || new Function("return this")()
        } catch (e) {
            if ("object" == typeof window) return window
        }
    }(), r.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), r.nc = void 0, (() => {
        "use strict";
        var e = r(7907),
            n = r.n(e),
            o = r(2426),
            i = r.n(o);

        function a(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function s(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }

        function c(e, t, n) {
            return t && s(e.prototype, t), n && s(e, n), Object.defineProperty(e, "prototype", {
                writable: !1
            }), e
        }

        function l(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }
        var u = function() {
                function e(t) {
                    a(this, e), l(this, "bus", void 0), "function" == typeof t.getVersion && n()(t.getVersion()) ? i()(t.getVersion()) !== i()(this.getVersion()) && console.warn("Proxying an event bus of version " + t.getVersion() + " with " + this.getVersion()) : console.warn("Proxying an event bus with an unknown or invalid version"), this.bus = t
                }
                return c(e, [{
                    key: "getVersion",
                    value: function() {
                        return "3.0.2"
                    }
                }, {
                    key: "subscribe",
                    value: function(e, t) {
                        this.bus.subscribe(e, t)
                    }
                }, {
                    key: "unsubscribe",
                    value: function(e, t) {
                        this.bus.unsubscribe(e, t)
                    }
                }, {
                    key: "emit",
                    value: function(e, t) {
                        this.bus.emit(e, t)
                    }
                }]), e
            }(),
            d = function() {
                function e() {
                    a(this, e), l(this, "handlers", new Map)
                }
                return c(e, [{
                    key: "getVersion",
                    value: function() {
                        return "3.0.2"
                    }
                }, {
                    key: "subscribe",
                    value: function(e, t) {
                        this.handlers.set(e, (this.handlers.get(e) || []).concat(t))
                    }
                }, {
                    key: "unsubscribe",
                    value: function(e, t) {
                        this.handlers.set(e, (this.handlers.get(e) || []).filter((function(e) {
                            return e != t
                        })))
                    }
                }, {
                    key: "emit",
                    value: function(e, t) {
                        (this.handlers.get(e) || []).forEach((function(e) {
                            try {
                                e(t)
                            } catch (e) {
                                console.error("could not invoke event listener", e)
                            }
                        }))
                    }
                }]), e
            }();
        var p = (void 0 !== window.OC && window.OC._eventBus && void 0 === window._nc_event_bus && (console.warn("found old event bus instance at OC._eventBus. Update your version!"), window._nc_event_bus = window.OC._eventBus), void 0 !== window._nc_event_bus ? new u(window._nc_event_bus) : window._nc_event_bus = new d);

        function f(e, t) {
            p.emit(e, t)
        }
        var A = r(5358),
            m = r(9753);
        const h = document.getElementsByTagName("head")[0];
        let g = h ? h.getAttribute("data-requesttoken") : null;
        const v = [];

        function b() {
            return g
        }
        var C, y;
        C = "csrf-token-update", y = e => {
            g = e.token, v.forEach((t => {
                try {
                    t(e.token)
                } catch (e) {
                    console.error("error updating CSRF token observer", e)
                }
            }))
        }, p.subscribe(C, y);
        const x = (e, t) => e ? e.getAttribute(t) : null,
            w = document.getElementsByTagName("head")[0],
            E = x(w, "data-user"),
            O = x(w, "data-user-displayname"),
            I = "undefined" != typeof OC && OC.isUserAdmin();

        function S() {
            return null === E ? null : {
                uid: E,
                displayName: O,
                isAdmin: I
            }
        }

        function R(e, t, n) {
            const r = document.querySelector(`#initial-state-${e}-${t}`);
            if (null === r) {
                if (void 0 !== n) return n;
                throw new Error(`Could not find initial state ${t} of ${e}`)
            }
            try {
                return JSON.parse(atob(r.value))
            } catch (n) {
                throw new Error(`Could not parse initial state ${t} of ${e}`)
            }
        }
        const T = new(function() {
            function e() {
                this.values = R("richdocuments", "document", {})
            }
            return e.prototype.update = function(e, t) {
                this.values[e] = t
            }, e.prototype.get = function(e) {
                return this.values[e]
            }, e
        }());
        var N = r(9669),
            k = r.n(N);
        const L = Symbol("csrf-retry"),
            B = Symbol("retryDelay"),
            D = k().create({
                headers: {
                    requesttoken: b() ?? ""
                }
            }),
            P = Object.assign(D, {
                CancelToken: k().CancelToken,
                isCancel: k().isCancel
            });
        var M;
        P.interceptors.response.use((e => e), (e => async t => {
            const {
                config: n,
                response: r,
                request: o
            } = t, i = o?.responseURL, a = r?.status;
            if (412 === a && "CSRF check failed" === r?.data?.message && void 0 === n[L]) {
                console.warn(`Request to ${i} failed because of a CSRF mismatch. Fetching a new token`);
                const {
                    data: {
                        token: t
                    }
                } = await e.get((0, m.generateUrl)("/csrftoken"));
                return console.debug(`New request token ${t} fetched`), e.defaults.headers.requesttoken = t, e({
                    ...n,
                    headers: {
                        ...n.headers,
                        requesttoken: t
                    },
                    [L]: !0
                })
            }
            return Promise.reject(t)
        })(P)), P.interceptors.response.use((e => e), (e => async t => {
            const {
                config: n,
                response: r,
                request: o
            } = t, i = o?.responseURL, a = r?.status, s = r?.headers;
            if (503 === a && "1" === s["x-nextcloud-maintenance-mode"] && n.retryIfMaintenanceMode && (!n[B] || n[B] <= 32)) {
                const t = 2 * (n[B] ?? 1);
                return console.warn(`Request to ${i} failed because of maintenance mode. Retrying in ${t}s`), await new Promise(((e, n) => {
                    setTimeout(e, 1e3 * t)
                })), e({
                    ...n,
                    [B]: t
                })
            }
            return Promise.reject(t)
        })(P)), P.interceptors.response.use((e => e), (async e => {
            const {
                config: t,
                response: n,
                request: r
            } = e, o = r?.responseURL, i = n?.status;
            return 401 === i && "Current user is not logged in" === n?.data?.message && t.reloadExpiredSession && window?.location && (console.error(`Request to ${o} failed because the user session expired. Reloading the page …`), window.location.reload()), Promise.reject(e)
        })), M = e => D.defaults.headers.requesttoken = e, v.push(M);
        var U = function() {
                return T.get("direct")
            },
            j = function() {
                return window.RichDocumentsMobileInterface || window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.RichDocumentsMobileInterface
            },
            F = function(e, t) {
                console.debug("callMobileMessage", e, t);
                var n = e;
                void 0 !== t && (n = {
                    MessageName: e,
                    Values: t
                });
                var r = null;
                try {
                    r = JSON.stringify(t)
                } catch (e) {
                    r = null
                }
                window.RichDocumentsMobileInterface && "function" == typeof window.RichDocumentsMobileInterface[e] && (null == r ? window.RichDocumentsMobileInterface[e]() : window.RichDocumentsMobileInterface[e](r)), window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.RichDocumentsMobileInterface && window.webkit.messageHandlers.RichDocumentsMobileInterface.postMessage(n)
            };
        const G = U;
        var H = "",
            z = function() {
                var e;
                return (!G() || T.get("directGuest")) && (!S() || "" === (null === (e = S()) || void 0 === e ? void 0 : e.uid)) && !T.get("userId") && "" === function() {
                    if ("" === H) {
                        var e = "guestUser=",
                            t = document.cookie.split(";").map((function(e) {
                                try {
                                    return decodeURIComponent(e.trim())
                                } catch (t) {
                                    return e.trim()
                                }
                            })).find((function(t) {
                                return 0 === t.indexOf(e)
                            }));
                        H = t ? t.substring(e.length) : ""
                    }
                    return H
                }() && T.get("permissions") & OC.PERMISSION_UPDATE
            },
            W = function() {
                var e, t = null !== (e = R("richdocuments", "uiDefaults", {}).UIMode) && void 0 !== e ? e : "notebookbar",
                    n = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches,
                    r = "" === parent.document.body.dataset.themeDark || "" === parent.document.body.dataset.themeDarkHighcontrast,
                    o = "TextRuler=false;";
                return o += "TextSidebar=false;TextStatusbar=false;", o += "PresentationSidebar=false;PresentationStatusbar=false;", o += "SpreadsheetSidebar=false;SpreadsheetStatusbar=false;", o += "UIMode=" + t + ";", o += "UITheme=" + (("" === parent.document.body.dataset.themeDefault ? n : r) ? "dark" : "light") + ";", o += "SaveAsMode=group;"
            },
            V = function() {
                return R("richdocuments", "theme", "nextcloud")
            },
            q = function() {
                var e, t, n, r = {
                        "--color-primary-text": "--co-primary-text",
                        "--color-primary-element": "--co-primary-element:--co-text-accent",
                        "--color-primary-light": "--co-primary-light",
                        "--color-primary-element-light": "--co-primary-element-light",
                        "--color-error": "--co-color-error",
                        "--color-warning": "--co-color-warning",
                        "--color-success": "--co-color-success",
                        "--border-radius": "--co-border-radius",
                        "--border-radius-large": "--co-border-radius-large",
                        "--color-loading-light": "--co-loading-light",
                        "--color-loading-dark": "--co-loading-dark",
                        "--color-box-shadow": "--co-box-shadow",
                        "--color-border": "--co-border",
                        "--color-border-dark": "--co-border-dark",
                        "--border-radius-pill": "--co-border-radius-pill"
                    },
                    o = "",
                    i = null !== (e = document.getElementById("cool-var-source-light")) && void 0 !== e ? e : document.documentElement;
                try {
                    for (var a in r) {
                        var s = window.getComputedStyle(i).getPropertyValue(a);
                        if (s || (s = window.getComputedStyle(i).getPropertyValue(a + "-dark")), s)
                            for (var c = r[a].split(":"), l = 0; l < c.length; ++l) o += c[l] + "=" + s.trim() + ";"
                    }
                } catch (e) {}
                var u, d, p, f = null !== (t = document.getElementById("cool-var-source-light")) && void 0 !== t ? t : document.documentElement,
                    A = null !== (n = document.getElementById("cool-var-source-dark")) && void 0 !== n ? n : document.documentElement,
                    m = ["--color-main-background", "--color-main-background-rgb", "--color-main-background-translucent", "--color-main-background-blur", "--color-main-text", "--color-text-maxcontrast", "--color-box-shadow", "--color-box-shadow-rgb", "--default-font-size", "--border-radius", "--border-radius-large", "--border-radius-rounded", "--border-radius-pill", "--default-clickable-area", "--default-line-height", "--default-grid-baseline", "--color-primary", "--color-primary-default", "--color-primary-text", "--color-primary-hover", "--color-primary-light", "--color-primary-light-text", "--color-primary-light-hover", "--color-primary-element", "--color-primary-element-hover", "--color-primary-element-text", "--color-primary-element-light", "--color-primary-element-light-hover", "--color-primary-element-light-text", "--color-primary-element-text-dark", "--primary-invert-if-bright", "--background-invert-if-bright", "--background-invert-if-dark"];
                for (var h in m) {
                    var g = m[h],
                        v = window.getComputedStyle(f).getPropertyValue(g),
                        b = window.getComputedStyle(A).getPropertyValue(g);
                    o += g.replace("--", "--nc-light-") + "=" + v.trim() + ";", o += g.replace("--", "--nc-dark-") + "=" + b.trim() + ";", "--primary-invert-if-bright" === g && ("no" === v.trim() ? (o += "--nc-light-primary-invert-if-dark=invert(1);", o += "--nc-dark-primary-invert-if-dark=invert(1);") : (o += "--nc-light-primary-invert-if-dark=no;", o += "--nc-dark-primary-invert-if-dark=no;"))
                }
                R("richdocuments", "theming-customLogo", !1) && (o += null !== (u = ";--nc-custom-logo=" + (null === (d = window.OCA) || void 0 === d || null === (p = d.Theming) || void 0 === p ? void 0 : p.cacheBuster)) && void 0 !== u ? u : "0;");
                return o.replace(/["']/g, "\\'")
            },
            X = !1,
            Y = ["iPad Simulator", "iPhone Simulator", "iPod Simulator", "iPad", "iPhone", "iPod"].includes(navigator.platform) || navigator.userAgent.includes("Mac") && navigator.maxTouchPoints > 1,
            J = function() {
                Y && X && (document.documentElement.scrollTop = 0, document.scrollingElement.scrollTop = 0, function() {
                    var e, t = null !== (e = window.visualViewport.height) && void 0 !== e ? e : document.documentElement.clientHeight,
                        n = document.getElementById("richdocumentsframe");
                    n && (n.style.maxHeight = t + "px");
                    var r = document.querySelector(".office-viewer");
                    r && (r.style.height = t + "px")
                }())
            },
            K = function(e) {
                return e.preventDefault()
            };

        function Q(e) {
            return Q = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }, Q(e)
        }
        const Z = function() {
            function e(e) {
                var t = this;
                this.postMessageHandlers = [], this.targets = e, window.addEventListener("message", (function(e) {
                    t.handlePostMessage(e.data)
                }), !1)
            }
            return e.prototype.sendPostMessage = function(e, t, n) {
                void 0 === n && (n = "*"), ("function" == typeof this.targets[e] ? this.targets[e]() : this.targets[e]).postMessage(t, n), console.debug("PostMessageService.sendPostMessage", e, t)
            }, e.prototype.sendWOPIPostMessage = function(e, t, n) {
                void 0 === n && (n = {});
                var r = {
                    MessageId: t,
                    SendTime: Date.now(),
                    Values: n
                };
                this.sendPostMessage(e, JSON.stringify(r))
            }, e.parsePostMessage = function(e) {
                var t, n, r;
                try {
                    var o = JSON.parse(e);
                    t = o.MessageId, n = o.Values, r = !!o.Values.Deprecated
                } catch (n) {
                    t = e
                }
                return {
                    msgId: t,
                    args: n,
                    deprecated: r
                }
            }, e.prototype.registerPostMessageHandler = function(e) {
                this.postMessageHandlers.push(e)
            }, e.prototype.unregisterPostMessageHandler = function(e) {
                var t = this.postMessageHandlers.findIndex((function(t) {
                    return t === e
                }));
                delete this.postMessageHandlers[t]
            }, e.prototype.handlePostMessage = function(t) {
                var n = e.parsePostMessage(t);
                if (null != n) {
                    try {
                        var r = JSON.parse(t);
                        "object" === Q(r) && null !== r && f("richdocuments:wopi-post", r)
                    } catch (e) {}
                    this.postMessageHandlers.forEach((function(e) {
                        if (n.deprecated) console.debug("PostMessageService.handlePostMessage", "Ignoring deprecated post message", n.msgId);
                        else try {
                            e({
                                data: t,
                                parsed: n
                            })
                        } catch (e) {
                            console.error("Error during post message handler", n, e)
                        }
                    }))
                }
            }, e
        }();
        r(7856), r(5573);

        function ee() {
            return document.documentElement.dataset.locale || "en"
        }

        function te() {
            return document.documentElement.lang || "en"
        }
        var ne = function(e) {
                var t, n, r = e.fileId,
                    o = e.title,
                    i = e.readOnly,
                    a = e.closeButton,
                    s = e.revisionHistory,
                    c = e.target,
                    l = void 0 === c ? void 0 : c;
                s = s && (null === (t = window) || void 0 === t || null === (n = t.oc_appswebroots) || void 0 === n ? void 0 : n.files_versions);
                var u = window.location.protocol + "//" + window.location.host + (0, m.getRootUrl)() + "/index.php/apps/richdocuments/wopi/files/" + r;
                console.debug("[getWopiUrl] " + u);
                var d = encodeURIComponent(u);
                return T.get("urlsrc") + "WOPISrc=" + d + "&title=" + encodeURIComponent(o) + "&lang=" + function() {
                    var e = te().replace(/_/g, "-"),
                        t = ee();
                    "de-DE" === e && (e = "de"), "es-419" === e && (e = "es-MX"), "en-GB" === e && "en_AU" === t && (e = "en-AU");
                    var n = {
                        de: {
                            de_CH: "de-CH",
                            gsw: "de-CH",
                            gsw_CH: "de-CH"
                        },
                        fr: {
                            fr_CH: "fr-CH"
                        },
                        it: {
                            it_CH: "it-CH"
                        }
                    } [e];
                    return void 0 !== n && void 0 !== n[t] ? n[t] : e
                }() + (a ? "&closebutton=1" : "") + (s ? "&revisionhistory=1" : "") + (i ? "&permission=readonly" : "") + (l ? "&target=" + encodeURIComponent(l) : "")
            },
            re = function() {
                return window.location.host
            },
            oe = r(3379),
            ie = r.n(oe),
            ae = r(7795),
            se = r.n(ae),
            ce = r(569),
            le = r.n(ce),
            ue = r(3565),
            de = r.n(ue),
            pe = r(9216),
            fe = r.n(pe),
            Ae = r(4589),
            me = r.n(Ae),
            he = r(3175),
            ge = {};
        ge.styleTagTransform = me(), ge.setAttributes = de(), ge.insert = le().bind(null, "head"), ge.domAPI = se(), ge.insertStyleElement = fe();
        ie()(he.Z, ge);
        he.Z && he.Z.locals && he.Z.locals;

        function ve(e) {
            return ve = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }, ve(e)
        }

        function be() {
            be = function() {
                return e
            };
            var e = {},
                t = Object.prototype,
                n = t.hasOwnProperty,
                r = Object.defineProperty || function(e, t, n) {
                    e[t] = n.value
                },
                o = "function" == typeof Symbol ? Symbol : {},
                i = o.iterator || "@@iterator",
                a = o.asyncIterator || "@@asyncIterator",
                s = o.toStringTag || "@@toStringTag";

            function c(e, t, n) {
                return Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }), e[t]
            }
            try {
                c({}, "")
            } catch (e) {
                c = function(e, t, n) {
                    return e[t] = n
                }
            }

            function l(e, t, n, o) {
                var i = t && t.prototype instanceof p ? t : p,
                    a = Object.create(i.prototype),
                    s = new O(o || []);
                return r(a, "_invoke", {
                    value: y(e, n, s)
                }), a
            }

            function u(e, t, n) {
                try {
                    return {
                        type: "normal",
                        arg: e.call(t, n)
                    }
                } catch (e) {
                    return {
                        type: "throw",
                        arg: e
                    }
                }
            }
            e.wrap = l;
            var d = {};

            function p() {}

            function f() {}

            function A() {}
            var m = {};
            c(m, i, (function() {
                return this
            }));
            var h = Object.getPrototypeOf,
                g = h && h(h(I([])));
            g && g !== t && n.call(g, i) && (m = g);
            var v = A.prototype = p.prototype = Object.create(m);

            function b(e) {
                ["next", "throw", "return"].forEach((function(t) {
                    c(e, t, (function(e) {
                        return this._invoke(t, e)
                    }))
                }))
            }

            function C(e, t) {
                function o(r, i, a, s) {
                    var c = u(e[r], e, i);
                    if ("throw" !== c.type) {
                        var l = c.arg,
                            d = l.value;
                        return d && "object" == ve(d) && n.call(d, "__await") ? t.resolve(d.__await).then((function(e) {
                            o("next", e, a, s)
                        }), (function(e) {
                            o("throw", e, a, s)
                        })) : t.resolve(d).then((function(e) {
                            l.value = e, a(l)
                        }), (function(e) {
                            return o("throw", e, a, s)
                        }))
                    }
                    s(c.arg)
                }
                var i;
                r(this, "_invoke", {
                    value: function(e, n) {
                        function r() {
                            return new t((function(t, r) {
                                o(e, n, t, r)
                            }))
                        }
                        return i = i ? i.then(r, r) : r()
                    }
                })
            }

            function y(e, t, n) {
                var r = "suspendedStart";
                return function(o, i) {
                    if ("executing" === r) throw new Error("Generator is already running");
                    if ("completed" === r) {
                        if ("throw" === o) throw i;
                        return S()
                    }
                    for (n.method = o, n.arg = i;;) {
                        var a = n.delegate;
                        if (a) {
                            var s = x(a, n);
                            if (s) {
                                if (s === d) continue;
                                return s
                            }
                        }
                        if ("next" === n.method) n.sent = n._sent = n.arg;
                        else if ("throw" === n.method) {
                            if ("suspendedStart" === r) throw r = "completed", n.arg;
                            n.dispatchException(n.arg)
                        } else "return" === n.method && n.abrupt("return", n.arg);
                        r = "executing";
                        var c = u(e, t, n);
                        if ("normal" === c.type) {
                            if (r = n.done ? "completed" : "suspendedYield", c.arg === d) continue;
                            return {
                                value: c.arg,
                                done: n.done
                            }
                        }
                        "throw" === c.type && (r = "completed", n.method = "throw", n.arg = c.arg)
                    }
                }
            }

            function x(e, t) {
                var n = e.iterator[t.method];
                if (void 0 === n) {
                    if (t.delegate = null, "throw" === t.method) {
                        if (e.iterator.return && (t.method = "return", t.arg = void 0, x(e, t), "throw" === t.method)) return d;
                        t.method = "throw", t.arg = new TypeError("The iterator does not provide a 'throw' method")
                    }
                    return d
                }
                var r = u(n, e.iterator, t.arg);
                if ("throw" === r.type) return t.method = "throw", t.arg = r.arg, t.delegate = null, d;
                var o = r.arg;
                return o ? o.done ? (t[e.resultName] = o.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = void 0), t.delegate = null, d) : o : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, d)
            }

            function w(e) {
                var t = {
                    tryLoc: e[0]
                };
                1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
            }

            function E(e) {
                var t = e.completion || {};
                t.type = "normal", delete t.arg, e.completion = t
            }

            function O(e) {
                this.tryEntries = [{
                    tryLoc: "root"
                }], e.forEach(w, this), this.reset(!0)
            }

            function I(e) {
                if (e) {
                    var t = e[i];
                    if (t) return t.call(e);
                    if ("function" == typeof e.next) return e;
                    if (!isNaN(e.length)) {
                        var r = -1,
                            o = function t() {
                                for (; ++r < e.length;)
                                    if (n.call(e, r)) return t.value = e[r], t.done = !1, t;
                                return t.value = void 0, t.done = !0, t
                            };
                        return o.next = o
                    }
                }
                return {
                    next: S
                }
            }

            function S() {
                return {
                    value: void 0,
                    done: !0
                }
            }
            return f.prototype = A, r(v, "constructor", {
                value: A,
                configurable: !0
            }), r(A, "constructor", {
                value: f,
                configurable: !0
            }), f.displayName = c(A, s, "GeneratorFunction"), e.isGeneratorFunction = function(e) {
                var t = "function" == typeof e && e.constructor;
                return !!t && (t === f || "GeneratorFunction" === (t.displayName || t.name))
            }, e.mark = function(e) {
                return Object.setPrototypeOf ? Object.setPrototypeOf(e, A) : (e.__proto__ = A, c(e, s, "GeneratorFunction")), e.prototype = Object.create(v), e
            }, e.awrap = function(e) {
                return {
                    __await: e
                }
            }, b(C.prototype), c(C.prototype, a, (function() {
                return this
            })), e.AsyncIterator = C, e.async = function(t, n, r, o, i) {
                void 0 === i && (i = Promise);
                var a = new C(l(t, n, r, o), i);
                return e.isGeneratorFunction(n) ? a : a.next().then((function(e) {
                    return e.done ? e.value : a.next()
                }))
            }, b(v), c(v, s, "Generator"), c(v, i, (function() {
                return this
            })), c(v, "toString", (function() {
                return "[object Generator]"
            })), e.keys = function(e) {
                var t = Object(e),
                    n = [];
                for (var r in t) n.push(r);
                return n.reverse(),
                    function e() {
                        for (; n.length;) {
                            var r = n.pop();
                            if (r in t) return e.value = r, e.done = !1, e
                        }
                        return e.done = !0, e
                    }
            }, e.values = I, O.prototype = {
                constructor: O,
                reset: function(e) {
                    if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(E), !e)
                        for (var t in this) "t" === t.charAt(0) && n.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = void 0)
                },
                stop: function() {
                    this.done = !0;
                    var e = this.tryEntries[0].completion;
                    if ("throw" === e.type) throw e.arg;
                    return this.rval
                },
                dispatchException: function(e) {
                    if (this.done) throw e;
                    var t = this;

                    function r(n, r) {
                        return a.type = "throw", a.arg = e, t.next = n, r && (t.method = "next", t.arg = void 0), !!r
                    }
                    for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                        var i = this.tryEntries[o],
                            a = i.completion;
                        if ("root" === i.tryLoc) return r("end");
                        if (i.tryLoc <= this.prev) {
                            var s = n.call(i, "catchLoc"),
                                c = n.call(i, "finallyLoc");
                            if (s && c) {
                                if (this.prev < i.catchLoc) return r(i.catchLoc, !0);
                                if (this.prev < i.finallyLoc) return r(i.finallyLoc)
                            } else if (s) {
                                if (this.prev < i.catchLoc) return r(i.catchLoc, !0)
                            } else {
                                if (!c) throw new Error("try statement without catch or finally");
                                if (this.prev < i.finallyLoc) return r(i.finallyLoc)
                            }
                        }
                    }
                },
                abrupt: function(e, t) {
                    for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                        var o = this.tryEntries[r];
                        if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                            var i = o;
                            break
                        }
                    }
                    i && ("break" === e || "continue" === e) && i.tryLoc <= t && t <= i.finallyLoc && (i = null);
                    var a = i ? i.completion : {};
                    return a.type = e, a.arg = t, i ? (this.method = "next", this.next = i.finallyLoc, d) : this.complete(a)
                },
                complete: function(e, t) {
                    if ("throw" === e.type) throw e.arg;
                    return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), d
                },
                finish: function(e) {
                    for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                        var n = this.tryEntries[t];
                        if (n.finallyLoc === e) return this.complete(n.completion, n.afterLoc), E(n), d
                    }
                },
                catch: function(e) {
                    for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                        var n = this.tryEntries[t];
                        if (n.tryLoc === e) {
                            var r = n.completion;
                            if ("throw" === r.type) {
                                var o = r.arg;
                                E(n)
                            }
                            return o
                        }
                    }
                    throw new Error("illegal catch attempt")
                },
                delegateYield: function(e, t, n) {
                    return this.delegate = {
                        iterator: I(e),
                        resultName: t,
                        nextLoc: n
                    }, "next" === this.method && (this.arg = void 0), d
                }
            }, e
        }

        function Ce(e, t, n, r, o, i, a) {
            try {
                var s = e[i](a),
                    c = s.value
            } catch (e) {
                return void n(e)
            }
            s.done ? t(c) : Promise.resolve(c).then(r, o)
        }
        var ye, xe, we = new Z({
            parent: window.parent,
            loolframe: function() {
                return document.getElementById("loleafletframe").contentWindow
            }
        });
        U() && !X && Y && (X = !0, (null === (ye = window) || void 0 === ye || null === (xe = ye.visualViewport) || void 0 === xe ? void 0 : xe.addEventListener("resize", J)) || window.addEventListener("resize", J), document.addEventListener("touchstart", K, !1), document.addEventListener("touchmove", K, !1), setInterval(J, 200));
        var Ee = !1,
            Oe = function e() {
                Ee = !0;
                var n = T.get("urlsrc").slice(0, T.get("urlsrc").indexOf("proxy.php") + "proxy.php".length);
                $.get(n + "?status").done((function(n) {
                    if (n && n.status && "OK" !== n.status) {
                        if ("starting" === n.status || "stopped" === n.status) document.getElementById("proxyLoadingIcon").classList.add("icon-loading-small"), document.getElementById("proxyLoadingMessage").textContent = t("richdocuments", "Built-in CODE Server is starting up shortly, please wait.");
                        else if ("restarting" === n.status) document.getElementById("proxyLoadingIcon").classList.add("icon-loading-small"), document.getElementById("proxyLoadingMessage").textContent = t("richdocuments", "Built-in CODE Server is restarting, please wait.");
                        else if ("error" === n.status) return void("appimage_missing" === n.error ? document.getElementById("proxyLoadingMessage").textContent = t("richdocuments", "Error: Cannot find the AppImage, please reinstall the Collabora Online Built-in server.") : "chmod_failed" === n.error || "appimage_not_executable" === n.error ? document.getElementById("proxyLoadingMessage").textContent = t("richdocuments", "Error: Unable to make the AppImage executable, please setup a standalone server.") : "exec_disabled" === n.error ? document.getElementById("proxyLoadingMessage").textContent = t("richdocuments", "Error: Exec disabled in PHP, please enable it, or setup a standalone server.") : "not_linux" === n.error || "not_x86_64" === n.error || "not_aarch64" === n.error ? document.getElementById("proxyLoadingMessage").textContent = t("richdocuments", "Error: Not running on x86-64 or ARM64 (aarch64) Linux, please setup a standalone server.") : "no_fontconfig" === n.error ? document.getElementById("proxyLoadingMessage").textContent = t("richdocuments", "Error: The fontconfig library is not installed on your server, please install it or setup a standalone server.") : "no_glibc" === n.error ? document.getElementById("proxyLoadingMessage").textContent = t("richdocuments", "Error: Not running on glibc-based Linux, please setup a standalone server.") : document.getElementById("proxyLoadingMessage").textContent = t("richdocuments", "Error: Cannot start the Collabora Online Built-in server, please setup a standalone one."));
                        setTimeout((function() {
                            e()
                        }), 100)
                    } else Ee = !1
                }))
            },
            Ie = function e() {
                Ee ? setTimeout((function() {
                    e()
                }), 100) : (document.getElementById("loadingContainer").classList.remove("icon-loading"), document.getElementById("proxyLoadingIcon").classList.remove("icon-loading-small"), document.getElementById("proxyLoadingMessage").textContent = "")
            };
        (OC.appswebroots.richdocumentscode || OC.appswebroots.richdocumentscode_arm64) && T.get("urlsrc").indexOf("proxy.php") >= 0 ? Oe() : document.getElementById("loadingContainer").classList.add("icon-loading"), $.widget("oc.guestNamePicker", {
            _create: function() {
                Ie();
                var e = document.createElement("div");
                e.setAttribute("style", "margin: 0 auto; margin-top: 100px; text-align: center;"), e.innerHTML = t("richdocuments", "Please choose your nickname to continue as guest user.");
                var n = document.createElement("div");
                n.setAttribute("style", "margin: 0 auto; width: 250px; display: flex;");
                var r = '<input type="text" placeholder="' + t("richdocuments", "Nickname") + '" id="nickname" style="flex-grow: 1; border-right:none; border-top-right-radius: 0; border-bottom-right-radius: 0">',
                    o = '<input style="border-left:none; border-top-left-radius: 0; border-bottom-left-radius: 0; margin-left: -3px" type="button" id="btn" type="button" value="' + t("richdocuments", "Set") + '">';
                n.innerHTML = r + o, $("#documents-content").prepend(n), $("#documents-content").prepend(e);
                var i = function() {
                    var t = $("#nickname").val();
                    n.remove(), e.innerText = "", e.classList.add("icon-loading"),
                        function(e) {
                            "" !== e && (document.cookie = "guestUser=" + encodeURIComponent(e) + "; path=/", H = e);
                            var t = encodeURIComponent(T.get("token"));
                            return P.post((0, m.generateOcsUrl)("apps/richdocuments/api/v1/wopi/guestname", 2), {
                                access_token: t,
                                guestName: H
                            })
                        }(t).then((function() {
                            $("#documents-content").remove(), Se.initSession()
                        }))
                };
                $("#nickname").keyup((function(e) {
                    13 === e.which && i()
                })), $("#btn").click((function() {
                    return i()
                }))
            }
        });
        var Se = {
            isEditorMode: !1,
            isViewerMode: !1,
            isFrameReady: !1,
            isPublic: !1,
            ready: !1,
            fileName: null,
            baseName: null,
            canShare: !1,
            canEdit: !1,
            renderComplete: !1,
            $deferredVersionRestoreAck: null,
            wopiClientFeatures: null,
            users: [],
            _generateDocKey: function(e) {
                var t = T.get("canonical_webroot"),
                    n = (0, m.getRootUrl)() + "/index.php/apps/richdocuments/wopi/files/" + e;
                return t && (t.startsWith("/") || (t = "/" + t), T.update("canonical_webroot", t), n = n.replace((0, m.getRootUrl)(), t)), n
            },
            UI: {
                container: '<div id="mainContainer" class="claro"></div>',
                viewContainer: '<div id="revViewerContainer" class="claro"><div id="revViewer"></div></div>',
                showViewer: function(e, t) {
                    Se.isViewerMode && ($("#revViewer").remove(), $("#revViewerContainer").prepend($('<div id="revViewer">')));
                    var n = '<form id="loleafletform_viewer" name="loleafletform_viewer" target="loleafletframe_viewer" action="' + ne({
                            fileId: e,
                            title: t,
                            readOnly: !0,
                            closeButton: !Se.hideCloseButton
                        }) + '" method="post"><input name="access_token" value="' + encodeURIComponent(Se.token) + '" type="hidden"/><input name="access_token_ttl" value="' + encodeURIComponent(Se.tokenTtl) + '" type="hidden"/><input name="ui_defaults" value="' + W() + '" type="hidden"/><input name="css_variables" value="' + q() + '" type="hidden"/><input name="theme" value="' + V() + '" type="hidden"/><input name="buy_product" value="https://nextcloud.com/pricing" type="hidden"/></form>',
                        r = '<iframe data-cy="coolframe" id="loleafletframe" name="loleafletframe_viewer" allowfullscreen nonce="' + btoa(b()) + '" style="width:100%;height:100%;position:absolute;"/>';
                    $("#revViewer").append(n), $("#revViewer").append(r), $("#loleafletframe_viewer").focus(), $("#loleafletform_viewer").submit(), Se.isViewerMode = !0, $("#revViewerContainer .closeButton").click((function(e) {
                        e.preventDefault(), Se.onCloseViewer()
                    }))
                },
                loadRevViewerContainer: function() {
                    if (!$("revViewerContainer").length) {
                        $(document.body).prepend(Se.UI.viewContainer);
                        var e = $('<button class="icon-close closeButton" title="' + t("richdocuments", "Close version preview") + '"/>');
                        $("#revViewerContainer").prepend(e)
                    }
                },
                showEditor: function(e, n, r) {
                    if (!Se.renderComplete) return setTimeout((function() {
                        Se.UI.showEditor(e, n, r)
                    }), 10), void console.debug("Waiting for page to render…");
                    U() || (OC.Util.History.addOnPopStateHandler(_.bind(Se.onClose)), OC.Util.History.pushState()), we.sendPostMessage("parent", "loading"), Ie(), $(document.body).addClass("claro"), $(document.body).prepend(Se.UI.container);
                    var o = '<form id="loleafletform" name="loleafletform" target="loleafletframe" action="' + ne({
                            fileId: n,
                            title: e,
                            readOnly: !1,
                            closeButton: !Se.hideCloseButton,
                            revisionHistory: !Se.isPublic,
                            target: T.get("target")
                        }) + '" method="post"><input name="access_token" value="' + encodeURIComponent(Se.token) + '" type="hidden"/><input name="access_token_ttl" value="' + encodeURIComponent(Se.tokenTtl) + '" type="hidden"/><input name="ui_defaults" value="' + W() + '" type="hidden"/><input name="css_variables" value="' + q() + '" type="hidden"/><input name="theme" value="' + V() + '" type="hidden"/><input name="buy_product" value="https://nextcloud.com/pricing" type="hidden"/></form>',
                        i = '<iframe data-cy="coolframe" id="loleafletframe" name="loleafletframe" nonce="' + btoa(b()) + '" scrolling="no" allowfullscreen style="width:100%;height:100%;position:absolute;" />';
                    $("#mainContainer").append(o), $("#mainContainer").append(i), $("#loleafletframe").focus(), Se.registerAutoLogout($("#loleafletframe")[0]), f("richdocuments:wopi-load:started", {
                        wopiFileId: n
                    }), $("#loleafletframe").ready((function() {
                        var e = function e(r) {
                            var o = r.parsed,
                                i = r.data;
                            console.debug("[document] editorInitListener: Received post message ", o);
                            var a = o.msgId,
                                s = o.args;
                            if ("Action_Load_Resp" === a) {
                                var c;
                                if (!o.args.success) f("richdocuments:wopi-load:failed", {
                                    reason: "collabora",
                                    collaboraResponse: null == o || null === (c = o.args) || void 0 === c ? void 0 : c.errorMsg,
                                    wopiFileId: n
                                });
                                U() || we.sendPostMessage("parent", i)
                            }
                            if ("App_LoadingStatus" === a) switch (U() || we.sendPostMessage("parent", i), s.Status) {
                                case "Frame_Ready":
                                    Se.isFrameReady = !0, Se.wopiClientFeatures = s.Features, F("documentLoaded");
                                    break;
                                case "Document_Loaded":
                                    we.unregisterPostMessageHandler(e), U() && (we.sendWOPIPostMessage("loolframe", "Hide_Button", {
                                        id: "fullscreen"
                                    }), we.sendWOPIPostMessage("loolframe", "Hide_Menu_Item", {
                                        id: "fullscreen"
                                    })), T.get("permissions") & OC.PERMISSION_SHARE || we.sendWOPIPostMessage("loolframe", "Hide_Menu_Item", {
                                        id: "shareas"
                                    }), null === T.get("userId") && we.sendWOPIPostMessage("loolframe", "Hide_Menu_Item", {
                                        id: "insertgraphicremote"
                                    }), null === T.get("userId") || T.get("isPublicShare") || we.sendWOPIPostMessage("loolframe", "Insert_Button", {
                                        id: "Open_Local_Editor",
                                        imgurl: window.location.protocol + "//" + re() + (0, m.imagePath)("richdocuments", "launch.svg"),
                                        mobile: !1,
                                        tablet: !1,
                                        label: t("richdocuments", "Open in local editor"),
                                        hint: t("richdocuments", "Open in local editor"),
                                        insertBefore: "print"
                                    }), f("richdocuments:wopi-load:succeeded", {
                                        wopiFileId: n
                                    });
                                    break;
                                case "Failed":
                                    Se.isFrameReady = !0, f("richdocuments:wopi-load:failed", {
                                        reason: "collabora",
                                        collaboraResponse: "App_LoadingStatus Failed",
                                        wopiFileId: n
                                    })
                            }
                        };
                        we.registerPostMessageHandler(e), setTimeout((function() {
                            if (!Se.isFrameReady) {
                                var t = {
                                    MessageId: "App_LoadingStatus",
                                    Values: {
                                        Status: "Timeout"
                                    }
                                };
                                e({
                                    data: JSON.stringify(t),
                                    parsed: t
                                })
                            }
                        }), 45e3)
                    })), $("#loleafletframe").load((function() {
                        var e = ["Action_FollowUser", "Host_VersionRestore", "Action_RemoveView", "Action_InsertLink", "Action_Paste", "Action_GetLinkPreview_Resp"];
                        we.registerPostMessageHandler((function(n) {
                            var r = n.parsed,
                                o = n.data;
                            console.debug("[document] Received post message ", r);
                            var i = r.msgId,
                                a = r.args;
                            if (!r.deprecated) {
                                if (Se.isViewerMode) {
                                    var s = a.fileId,
                                        c = a.title,
                                        l = a.version;
                                    switch (r.msgId) {
                                        case "Action_loadRevViewer":
                                            Se.UI.loadRevViewerContainer(), s && (s += "_" + T.get("instanceId"), l && (s += "_".concat(l), c += "_".concat(l)), Se.UI.showViewer(s, c));
                                            break;
                                        case "Host_VersionRestore":
                                            if (!Se.wopiClientFeatures || !Se.wopiClientFeatures.VersionStates) return void console.error("No version support");
                                            Se.onCloseViewer();
                                            break;
                                        case "App_VersionRestore":
                                        case "UI_Share":
                                            break;
                                        default:
                                            return
                                    }
                                }
                                if (U() || -1 !== e.indexOf(i) || we.sendPostMessage("parent", o), e.indexOf(i) >= 0) return we.sendPostMessage("loolframe", o);
                                if (j()) {
                                    if ("Download_As" === i) return F("downloadAs", a);
                                    if ("File_Rename" === i) return F("fileRename", a);
                                    if ("UI_Paste" === i) return void F("paste");
                                    if ("UI_Close" === i ? F("close") : "UI_InsertGraphic" === i ? F("insertGraphic") : "UI_Share" === i ? F("share") : "UI_Hyperlink" === i && F("hyperlink", a), "UI_SaveAs" !== i) return
                                }
                                switch (r.msgId) {
                                    case "UI_Close":
                                    case "close":
                                        Se.onClose();
                                        break;
                                    case "postAsset":
                                        Se.postAsset(a.FileName, a.Url);
                                        break;
                                    case "UI_FileVersions":
                                    case "rev-history":
                                        Se.UI.loadRevViewerContainer(), Se.UI.showViewer(Se.fileId, Se.title);
                                        break;
                                    case "RD_Version_Restored":
                                        $("#loleafletform_viewer").submit();
                                        break;
                                    case "File_Rename":
                                        Se.fileName = a.NewName;
                                        break;
                                    case "Clicked_Button":
                                        "Open_Local_Editor" === r.args.Id ? Se.UI.initiateOpenLocally() : console.debug("[document] Unhandled `Clicked_Button` post message", r);
                                        break;
                                    case "Views_List":
                                        Se.users = [], r.args.forEach((function(e) {
                                            e.UserId.startsWith("Guest-") || Se.users.push({
                                                id: e.UserId,
                                                label: e.UserName
                                            })
                                        }));
                                        break;
                                    case "Get_Views_Resp":
                                        Se.openingLocally && (Se.UI.removeViews(r.args), Se.unlockFile().catch((function(e) {})).then((function() {
                                            Se.openLocally()
                                        })));
                                        break;
                                    case "UI_Mention":
                                        Se.sendUserList(r.args.text);
                                        break;
                                    default:
                                        console.debug("[document] Unhandled post message", r)
                                }
                                "UI_SaveAs" === i ? OC.dialogs.prompt(t("richdocuments", "Please enter the filename to store the document as."), t("richdocuments", "Save As"), (function(e, t) {
                                    !0 === e && t && we.sendWOPIPostMessage("loolframe", "Action_SaveAs", {
                                        Filename: t,
                                        Notify: !0
                                    })
                                }), !0, t("richdocuments", "New filename"), !1).then((function() {
                                    var e = $(".oc-dialog:visible"),
                                        n = e.find(".oc-dialog-buttonrow button");
                                    n.eq(0).text(t("richdocuments", "Cancel")), n.eq(1).text(t("richdocuments", "Save"));
                                    var r = e.find("input")[0];
                                    r.style.minWidth = "250px", r.style.maxWidth = "400px", r.value = a.format ? Se.fileName.substring(0, Se.fileName.lastIndexOf(".") + 1) + a.format : Se.fileName, r.selectionStart = 0, r.selectionEnd = Se.fileName.lastIndexOf(".")
                                })) : "Action_Save_Resp" === i && a.success && a.fileName && (Se.fileName = a.fileName)
                            }
                        })), we.sendWOPIPostMessage("loolframe", "Host_PostmessageReady", {}), j() && we.sendWOPIPostMessage("loolframe", "Disable_Default_UIAction", {
                            action: "UI_Hyperlink",
                            disable: !0
                        })
                    })), $("#loleafletform").submit()
                },
                hideEditor: function() {
                    $("#mainContainer").fadeOut("fast", (function() {
                        $("#mainContainer").remove(), $("#content-wrapper").fadeIn("fast"), $(document.body).removeClass("claro")
                    }))
                },
                initiateOpenLocally: function() {
                    OC.dialogs.confirmDestructive(t("richdocuments", "When opening a file locally, the document will close for all users currently viewing the document."), t("richdocuments", "Open file locally"), {
                        type: OC.dialogs.YES_NO_BUTTONS,
                        confirm: t("richdocuments", "Open locally"),
                        confirmClasses: "error",
                        cancel: t("richdocuments", "Continue editing online")
                    }, (function(e) {
                        e && (Se.openingLocally = !0, we.sendWOPIPostMessage("loolframe", "Get_Views"))
                    }))
                },
                removeViews: function(e) {
                    we.sendWOPIPostMessage("loolframe", "Action_Save", {
                        DontTerminateEdit: !1,
                        DontSaveIfUnmodified: !1,
                        Notify: !1
                    }), e.forEach((function(e) {
                        we.sendWOPIPostMessage("loolframe", "Action_RemoveView", {
                            ViewId: Number(e.ViewId)
                        })
                    }))
                }
            },
            unlockFile: function() {
                var e = (0, m.getRootUrl)() + "/index.php/apps/richdocuments/wopi/files/" + Se.fileId;
                return P.post(e, {
                    access_token: Se.token
                }, {
                    headers: {
                        "X-WOPI-Override": "UNLOCK"
                    }
                })
            },
            openLocally: function() {
                var e = this;
                Se.openingLocally && (Se.openingLocally = !1, P.post(OC.linkToOCS("apps/files/api/v1", 2) + "openlocaleditor?format=json", {
                    path: Se.fullPath
                }).then((function(t) {
                    var n = "nc://open/" + T.get("userId") + "@" + re() + (0, A.Ec)(Se.fullPath) + "?token=" + t.data.ocs.data.token;
                    e.showOpenLocalConfirmation(n, window.top), window.location.href = n
                })))
            },
            showOpenLocalConfirmation: function(e, n) {
                var r = this;
                n.OC.dialogs.confirmDestructive(t("richdocuments", "If the file does not open in your local editor, make sure the Nextcloud desktop app is installed and open and try again."), t("richdocuments", "Opening file locally …"), {
                    type: OC.dialogs.YES_NO_BUTTONS,
                    confirm: t("richdocuments", "Try again"),
                    cancel: t("richdocuments", "Close")
                }, (function(t) {
                    t && (n.location = e, r.showOpenLocalConfirmation(e, n))
                }))
            },
            sendUserList: function(e) {
                return (t = be().mark((function t() {
                    var n, r, o;
                    return be().wrap((function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                if (n = Se.users, null === T.get("userId")) {
                                    t.next = 11;
                                    break
                                }
                                return t.prev = 2, t.next = 5, P.get((0, m.generateOcsUrl)("core/autocomplete/get"), {
                                    params: {
                                        search: e
                                    }
                                });
                            case 5:
                                r = t.sent, n = r.data.ocs.data, t.next = 11;
                                break;
                            case 9:
                                t.prev = 9, t.t0 = t.catch(2);
                            case 11:
                                o = n.map((function(e) {
                                    var t = window.location.protocol + "//" + re() + "/index.php/u/" + e.id;
                                    return {
                                        username: e.label,
                                        profile: t
                                    }
                                })), we.sendWOPIPostMessage("loolframe", "Action_Mention", {
                                    list: o
                                });
                            case 13:
                            case "end":
                                return t.stop()
                        }
                    }), t, null, [
                        [2, 9]
                    ])
                })), function() {
                    var e = this,
                        n = arguments;
                    return new Promise((function(r, o) {
                        var i = t.apply(e, n);

                        function a(e) {
                            Ce(i, r, o, a, s, "next", e)
                        }

                        function s(e) {
                            Ce(i, r, o, a, s, "throw", e)
                        }
                        a(void 0)
                    }))
                })();
                var t
            },
            onStartup: function() {
                var e = (function(e) {
                    var t = new RegExp("[?&]" + e + "=([^&#]*)").exec(window.location.href);
                    return null === t ? null : decodeURI(t[1]) || ""
                }("fileId") || "").replace(/^\W*/, "");
                e && Number.isInteger(Number(e)) && 0 === $("#nickname").length && (Se.isEditorMode = !0, Se.originalFileId = e), Se.ready = !0
            },
            initSession: function() {
                we.sendPostMessage("parent", "loading"), Se.urlsrc = T.get("urlsrc"), Se.fullPath = T.get("path"), Se.token = T.get("token"), Se.tokenTtl = 1e3 * T.get("token_ttl"), Se.fileId = T.get("fileId"), Se.fileName = T.get("title"), Se.canEdit = Boolean(T.get("permissions") & OC.PERMISSION_UPDATE), Se.canShare = void 0 !== OC.Share && T.get("permissions") & OC.PERMISSION_SHARE, Se.isPublic = !T.get("userId"), Se.hideCloseButton = T.get("hideCloseButton"), $("footer,nav").hide(), $("#content-wrapper").fadeOut("fast").promise().done((function() {
                    Se.loadDocument(Se.fileName, Se.fileId)
                }))
            },
            loadDocument: function(e, t) {
                Se.UI.showEditor(e, t, "write")
            },
            onEditorShutdown: function(e) {
                OC.Notification.show(e), $(window).off("beforeunload"), $(window).off("unload"), Se.isEditorMode ? Se.isEditorMode = !1 : setTimeout(OC.Notification.hide, 7e3), Se.UI.hideEditor(), $("footer,nav").show()
            },
            onClose: function() {
                Se.isEditorMode = !1, $(window).off("beforeunload"), $(window).off("unload"), $("footer,nav").show(), Se.UI.hideEditor(), Se.openLocally(), we.sendPostMessage("parent", "close", "*")
            },
            onCloseViewer: function() {
                $("#revisionsContainer *").off(), $("#revPanelContainer").remove(), $("#revViewerContainer").remove(), Se.isViewerMode = !1, $("#loleafletframe").focus()
            },
            close: function() {
                Se.onClose()
            },
            postAsset: function(e, t) {
                we.sendWOPIPostMessage("loolframe", "Action_InsertGraphic", {
                    filename: e,
                    url: t
                })
            },
            postGrabFocus: function() {
                we.sendWOPIPostMessage("loolframe", "Grab_Focus")
            },
            registerAutoLogout: function(e) {
                R("core", "config").auto_logout && (e.addEventListener("mousemove", (function(e) {
                    localStorage.setItem("lastActive", Date.now())
                })), e.addEventListener("touchstart", (function(e) {
                    localStorage.setItem("lastActive", Date.now())
                })))
            }
        };
        $(document).ready((function() {
            OCA.RichDocuments || (OCA.RichDocuments = {}), OC.Share || (OC.Share = {}), OCA.RichDocuments.documentsMain = Se, z() ? (we.sendPostMessage("parent", "NC_ShowNamePicker"), $("#documents-content").guestNamePicker()) : Se.initSession(), Se.renderComplete = !0, document.querySelector("meta[name=viewport]").setAttribute("content", "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"), Se.onStartup(), window.documentsMain = Se
        }))
    })()
})();
//# sourceMappingURL=richdocuments-document.js.map?v=d833f1348bf8ce6fc25f