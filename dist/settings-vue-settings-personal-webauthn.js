/*! For license information please see settings-vue-settings-personal-webauthn.js.LICENSE.txt */
(() => {
    "use strict";
    var e, n = {
            63174: (e, n, i) => {
                var s = i(20144),
                    r = i(79954),
                    a = i(10128),
                    o = (i(65509), i(66415)),
                    c = i.n(o);
                const d = (0, i(17499).IY)().setApp("settings").detectUser().build();
                var l = i(4820),
                    u = i(79753),
                    h = i(25108);
                const p = t => e => (d.debug(t), e),
                    g = Object.freeze({
                        READY: 1,
                        REGISTRATION: 2,
                        NAMING: 3,
                        PERSIST: 4
                    }),
                    v = {
                        name: "AddDevice",
                        props: {
                            httpWarning: Boolean,
                            isHttps: {
                                type: Boolean,
                                default: !1
                            },
                            isLocalhost: {
                                type: Boolean,
                                default: !1
                            }
                        },
                        data: () => ({
                            name: "",
                            credential: {},
                            RegistrationSteps: g,
                            step: g.READY
                        }),
                        methods: {
                            arrayToBase64String: t => btoa(String.fromCharCode(...t)),
                            start() {
                                return this.step = g.REGISTRATION, h.debug("Starting WebAuthn registration"), (0, a.confirmPassword)().then(this.getRegistrationData).then(this.register.bind(this)).then((() => {
                                    this.step = g.NAMING
                                })).catch((t => {
                                    h.error(t.name, t.message), this.step = g.READY
                                }))
                            },
                            getRegistrationData: () => (h.debug("Fetching webauthn registration data"), async function() {
                                const t = (0, u.generateUrl)("/settings/api/personal/webauthn/registration");
                                return (await l.default.get(t)).data
                            }().then((t => (h.debug(t), t.challenge = Uint8Array.from(function(t) {
                                const e = (t = t.replace(/-/g, "+").replace(/_/g, "/")).length % 4;
                                if (e) {
                                    if (1 === e) throw new Error("InvalidLengthError: Input base64url string is the wrong length to determine padding");
                                    t += new Array(5 - e).join("=")
                                }
                                return window.atob(t)
                            }(t.challenge), (t => t.charCodeAt(0))), t.user.id = Uint8Array.from(t.user.id, (t => t.charCodeAt(0))), t))).catch((e => {
                                throw h.error("Error getting webauthn registration data from server", e), new Error(t("settings", "Server error while trying to add WebAuthn device"))
                            }))),
                            register(t) {
                                return h.debug("starting webauthn registration"), navigator.credentials.create({
                                    publicKey: t
                                }).then((t => {
                                    this.credential = {
                                        id: t.id,
                                        type: t.type,
                                        rawId: this.arrayToBase64String(new Uint8Array(t.rawId)),
                                        response: {
                                            clientDataJSON: this.arrayToBase64String(new Uint8Array(t.response.clientDataJSON)),
                                            attestationObject: this.arrayToBase64String(new Uint8Array(t.response.attestationObject))
                                        }
                                    }
                                }))
                            },
                            submit() {
                                return this.step = g.PERSIST, (0, a.confirmPassword)().then(p("confirmed password")).then(this.saveRegistrationData).then(p("registration data saved")).then((() => this.reset())).then(p("app reset")).catch(h.error.bind(this))
                            },
                            async saveRegistrationData() {
                                try {
                                    const t = await async function(t, e) {
                                        const n = (0, u.generateUrl)("/settings/api/personal/webauthn/registration");
                                        return (await l.default.post(n, {
                                            name: t,
                                            data: e
                                        })).data
                                    }(this.name, JSON.stringify(this.credential));
                                    d.info("new device added", {
                                        device: t
                                    }), this.$emit("added", t)
                                } catch (e) {
                                    throw d.error("Error persisting webauthn registration", {
                                        error: e
                                    }), new Error(t("settings", "Server error while trying to complete WebAuthn device registration"))
                                }
                            },
                            reset() {
                                this.name = "", this.registrationData = {}, this.step = g.READY
                            }
                        }
                    };
                var A = i(93379),
                    b = i.n(A),
                    f = i(7795),
                    m = i.n(f),
                    w = i(90569),
                    y = i.n(w),
                    R = i(3565),
                    S = i.n(R),
                    C = i(19216),
                    N = i.n(C),
                    T = i(44589),
                    I = i.n(T),
                    D = i(9158),
                    P = {};
                P.styleTagTransform = I(), P.setAttributes = S(), P.insert = y().bind(null, "head"), P.domAPI = m(), P.insertStyleElement = N(), b()(D.Z, P), D.Z && D.Z.locals && D.Z.locals;
                var _ = i(51900);
                const E = (0, _.Z)(v, (function() {
                    var t = this,
                        e = t._self._c;
                    return t.isHttps || t.isLocalhost ? e("div", [t.step === t.RegistrationSteps.READY ? e("div", [e("button", {
                        on: {
                            click: t.start
                        }
                    }, [t._v("\n\t\t\t" + t._s(t.t("settings", "Add WebAuthn device")) + "\n\t\t")])]) : t.step === t.RegistrationSteps.REGISTRATION ? e("div", {
                        staticClass: "new-webauthn-device"
                    }, [e("span", {
                        staticClass: "icon-loading-small webauthn-loading"
                    }), t._v("\n\t\t" + t._s(t.t("settings", "Please authorize your WebAuthn device.")) + "\n\t")]) : t.step === t.RegistrationSteps.NAMING ? e("div", {
                        staticClass: "new-webauthn-device"
                    }, [e("span", {
                        staticClass: "icon-loading-small webauthn-loading"
                    }), t._v(" "), e("input", {
                        directives: [{
                            name: "model",
                            rawName: "v-model",
                            value: t.name,
                            expression: "name"
                        }],
                        attrs: {
                            type: "text",
                            placeholder: t.t("settings", "Name your device")
                        },
                        domProps: {
                            value: t.name
                        },
                        on: {
                            ":keyup": function(e) {
                                return !e.type.indexOf("key") && t._k(e.keyCode, "enter", 13, e.key, "Enter") ? null : t.submit.apply(null, arguments)
                            },
                            input: function(e) {
                                e.target.composing || (t.name = e.target.value)
                            }
                        }
                    }), t._v(" "), e("button", {
                        on: {
                            click: t.submit
                        }
                    }, [t._v("\n\t\t\t" + t._s(t.t("settings", "Add")) + "\n\t\t")])]) : t.step === t.RegistrationSteps.PERSIST ? e("div", {
                        staticClass: "new-webauthn-device"
                    }, [e("span", {
                        staticClass: "icon-loading-small webauthn-loading"
                    }), t._v("\n\t\t" + t._s(t.t("settings", "Adding your device …")) + "\n\t")]) : e("div", [t._v("\n\t\tInvalid registration step. This should not have happened.\n\t")])]) : e("div", [t._v("\n\t" + t._s(t.t("settings", "Passwordless authentication requires a secure connection.")) + "\n")])
                }), [], !1, null, "375c9cd6", null).exports;
                var O = i(12945),
                    x = i.n(O),
                    B = i(45400);
                const U = {
                    name: "Device",
                    components: {
                        NcActionButton: i.n(B)(),
                        NcActions: x()
                    },
                    props: {
                        name: {
                            type: String,
                            required: !0
                        }
                    }
                };
                var k = i(16617),
                    G = {};
                G.styleTagTransform = I(), G.setAttributes = S(), G.insert = y().bind(null, "head"), G.domAPI = m(), G.insertStyleElement = N(), b()(k.Z, G), k.Z && k.Z.locals && k.Z.locals;
                const L = (0, _.Z)(U, (function() {
                        var t = this,
                            e = t._self._c;
                        return e("div", {
                            staticClass: "webauthn-device"
                        }, [e("span", {
                            staticClass: "icon-webauthn-device"
                        }), t._v("\n\t" + t._s(t.name || t.t("settings", "Unnamed device")) + "\n\t"), e("NcActions", {
                            attrs: {
                                "force-menu": !0
                            }
                        }, [e("NcActionButton", {
                            attrs: {
                                icon: "icon-delete"
                            },
                            on: {
                                click: function(e) {
                                    return t.$emit("delete")
                                }
                            }
                        }, [t._v("\n\t\t\t" + t._s(t.t("settings", "Delete")) + "\n\t\t")])], 1)], 1)
                    }), [], !1, null, "46d7f170", null).exports,
                    W = c()("name"),
                    j = {
                        components: {
                            AddDevice: E,
                            Device: L
                        },
                        props: {
                            initialDevices: {
                                type: Array,
                                required: !0
                            },
                            isHttps: {
                                type: Boolean,
                                default: !1
                            },
                            isLocalhost: {
                                type: Boolean,
                                default: !1
                            },
                            hasPublicKeyCredential: {
                                type: Boolean,
                                default: !1
                            }
                        },
                        data() {
                            return {
                                devices: this.initialDevices
                            }
                        },
                        computed: {
                            sortedDevices() {
                                return W(this.devices)
                            }
                        },
                        methods: {
                            deviceAdded(t) {
                                d.debug("adding new device to the list ".concat(t.id)), this.devices.push(t)
                            },
                            async deleteDevice(t) {
                                d.info("deleting webauthn device ".concat(t)), await (0, a.confirmPassword)(), await async function(t) {
                                    const e = (0, u.generateUrl)("/settings/api/personal/webauthn/registration/".concat(t));
                                    await l.default.delete(e)
                                }(t), this.devices = this.devices.filter((e => e.id !== t)), d.info("webauthn device ".concat(t, " removed successfully"))
                            }
                        }
                    },
                    Y = (0, _.Z)(j, (function() {
                        var t = this,
                            e = t._self._c;
                        return e("div", {
                            staticClass: "section",
                            attrs: {
                                id: "security-webauthn"
                            }
                        }, 2)
                    }), [], !1, null, "2f7f7c59", null).exports;
                i.nc = btoa(OC.requestToken), s.default.prototype.t = t, new(s.default.extend(Y))({
                    propsData: {
                        initialDevices: (0, r.j)("settings", "webauthn-devices"),
                        isHttps: "https:" === window.location.protocol,
                        isLocalhost: "localhost" === window.location.hostname,
                        hasPublicKeyCredential: void 0 !== window.PublicKeyCredential
                    }
                }).$mount("#security-webauthn")
            },
            9158: (t, e, n) => {
                n.d(e, {
                    Z: () => o
                });
                var i = n(87537),
                    s = n.n(i),
                    r = n(23645),
                    a = n.n(r)()(s());
                a.push([t.id, "\n.webauthn-loading[data-v-375c9cd6] {\n\tdisplay: inline-block;\n\tvertical-align: sub;\n\tmargin-left: 2px;\n\tmargin-right: 2px;\n}\n.new-webauthn-device[data-v-375c9cd6] {\n\tline-height: 300%;\n}\n", "", {
                    version: 3,
                    sources: ["webpack://./apps/settings/src/components/WebAuthn/AddDevice.vue"],
                    names: [],
                    mappings: ";AA6NA;CACA,qBAAA;CACA,mBAAA;CACA,gBAAA;CACA,iBAAA;AACA;AAEA;CACA,iBAAA;AACA",
                    sourcesContent: ["\x3c!--\n  - @copyright 2020, Roeland Jago Douma <roeland@famdouma.nl>\n  -\n  - @author Roeland Jago Douma <roeland@famdouma.nl>\n  -\n  - @license GNU AGPL version 3 or any later version\n  -\n  - This program is free software: you can redistribute it and/or modify\n  - it under the terms of the GNU Affero General Public License as\n  - published by the Free Software Foundation, either version 3 of the\n  - License, or (at your option) any later version.\n  -\n  - This program is distributed in the hope that it will be useful,\n  - but WITHOUT ANY WARRANTY; without even the implied warranty of\n  - MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the\n  - GNU Affero General Public License for more details.\n  -\n  - You should have received a copy of the GNU Affero General Public License\n  - along with this program.  If not, see <http://www.gnu.org/licenses/>.\n  --\x3e\n\n<template>\n\t<div v-if=\"!isHttps && !isLocalhost\">\n\t\t{{ t('settings', 'Passwordless authentication requires a secure connection.') }}\n\t</div>\n\t<div v-else>\n\t\t<div v-if=\"step === RegistrationSteps.READY\">\n\t\t\t<button @click=\"start\">\n\t\t\t\t{{ t('settings', 'Add WebAuthn device') }}\n\t\t\t</button>\n\t\t</div>\n\n\t\t<div v-else-if=\"step === RegistrationSteps.REGISTRATION\"\n\t\t\tclass=\"new-webauthn-device\">\n\t\t\t<span class=\"icon-loading-small webauthn-loading\" />\n\t\t\t{{ t('settings', 'Please authorize your WebAuthn device.') }}\n\t\t</div>\n\n\t\t<div v-else-if=\"step === RegistrationSteps.NAMING\"\n\t\t\tclass=\"new-webauthn-device\">\n\t\t\t<span class=\"icon-loading-small webauthn-loading\" />\n\t\t\t<input v-model=\"name\"\n\t\t\t\ttype=\"text\"\n\t\t\t\t:placeholder=\"t('settings', 'Name your device')\"\n\t\t\t\t@:keyup.enter=\"submit\">\n\t\t\t<button @click=\"submit\">\n\t\t\t\t{{ t('settings', 'Add') }}\n\t\t\t</button>\n\t\t</div>\n\n\t\t<div v-else-if=\"step === RegistrationSteps.PERSIST\"\n\t\t\tclass=\"new-webauthn-device\">\n\t\t\t<span class=\"icon-loading-small webauthn-loading\" />\n\t\t\t{{ t('settings', 'Adding your device …') }}\n\t\t</div>\n\n\t\t<div v-else>\n\t\t\tInvalid registration step. This should not have happened.\n\t\t</div>\n\t</div>\n</template>\n\n<script>\nimport { confirmPassword } from '@nextcloud/password-confirmation'\nimport '@nextcloud/password-confirmation/dist/style.css'\n\nimport logger from '../../logger.js'\nimport {\n\tstartRegistration,\n\tfinishRegistration,\n} from '../../service/WebAuthnRegistrationSerice.js'\n\nconst logAndPass = (text) => (data) => {\n\tlogger.debug(text)\n\treturn data\n}\n\nconst RegistrationSteps = Object.freeze({\n\tREADY: 1,\n\tREGISTRATION: 2,\n\tNAMING: 3,\n\tPERSIST: 4,\n})\n\nexport default {\n\tname: 'AddDevice',\n\tprops: {\n\t\thttpWarning: Boolean,\n\t\tisHttps: {\n\t\t\ttype: Boolean,\n\t\t\tdefault: false,\n\t\t},\n\t\tisLocalhost: {\n\t\t\ttype: Boolean,\n\t\t\tdefault: false,\n\t\t},\n\t},\n\tdata() {\n\t\treturn {\n\t\t\tname: '',\n\t\t\tcredential: {},\n\t\t\tRegistrationSteps,\n\t\t\tstep: RegistrationSteps.READY,\n\t\t}\n\t},\n\tmethods: {\n\t\tarrayToBase64String(a) {\n\t\t\treturn btoa(String.fromCharCode(...a))\n\t\t},\n\t\tstart() {\n\t\t\tthis.step = RegistrationSteps.REGISTRATION\n\t\t\tconsole.debug('Starting WebAuthn registration')\n\n\t\t\treturn confirmPassword()\n\t\t\t\t.then(this.getRegistrationData)\n\t\t\t\t.then(this.register.bind(this))\n\t\t\t\t.then(() => { this.step = RegistrationSteps.NAMING })\n\t\t\t\t.catch(err => {\n\t\t\t\t\tconsole.error(err.name, err.message)\n\t\t\t\t\tthis.step = RegistrationSteps.READY\n\t\t\t\t})\n\t\t},\n\n\t\tgetRegistrationData() {\n\t\t\tconsole.debug('Fetching webauthn registration data')\n\n\t\t\tconst base64urlDecode = function(input) {\n\t\t\t\t// Replace non-url compatible chars with base64 standard chars\n\t\t\t\tinput = input\n\t\t\t\t\t.replace(/-/g, '+')\n\t\t\t\t\t.replace(/_/g, '/')\n\n\t\t\t\t// Pad out with standard base64 required padding characters\n\t\t\t\tconst pad = input.length % 4\n\t\t\t\tif (pad) {\n\t\t\t\t\tif (pad === 1) {\n\t\t\t\t\t\tthrow new Error('InvalidLengthError: Input base64url string is the wrong length to determine padding')\n\t\t\t\t\t}\n\t\t\t\t\tinput += new Array(5 - pad).join('=')\n\t\t\t\t}\n\n\t\t\t\treturn window.atob(input)\n\t\t\t}\n\n\t\t\treturn startRegistration()\n\t\t\t\t.then(publicKey => {\n\t\t\t\t\tconsole.debug(publicKey)\n\t\t\t\t\tpublicKey.challenge = Uint8Array.from(base64urlDecode(publicKey.challenge), c => c.charCodeAt(0))\n\t\t\t\t\tpublicKey.user.id = Uint8Array.from(publicKey.user.id, c => c.charCodeAt(0))\n\t\t\t\t\treturn publicKey\n\t\t\t\t})\n\t\t\t\t.catch(err => {\n\t\t\t\t\tconsole.error('Error getting webauthn registration data from server', err)\n\t\t\t\t\tthrow new Error(t('settings', 'Server error while trying to add WebAuthn device'))\n\t\t\t\t})\n\t\t},\n\n\t\tregister(publicKey) {\n\t\t\tconsole.debug('starting webauthn registration')\n\n\t\t\treturn navigator.credentials.create({ publicKey })\n\t\t\t\t.then(data => {\n\t\t\t\t\tthis.credential = {\n\t\t\t\t\t\tid: data.id,\n\t\t\t\t\t\ttype: data.type,\n\t\t\t\t\t\trawId: this.arrayToBase64String(new Uint8Array(data.rawId)),\n\t\t\t\t\t\tresponse: {\n\t\t\t\t\t\t\tclientDataJSON: this.arrayToBase64String(new Uint8Array(data.response.clientDataJSON)),\n\t\t\t\t\t\t\tattestationObject: this.arrayToBase64String(new Uint8Array(data.response.attestationObject)),\n\t\t\t\t\t\t},\n\t\t\t\t\t}\n\t\t\t\t})\n\t\t},\n\n\t\tsubmit() {\n\t\t\tthis.step = RegistrationSteps.PERSIST\n\n\t\t\treturn confirmPassword()\n\t\t\t\t.then(logAndPass('confirmed password'))\n\t\t\t\t.then(this.saveRegistrationData)\n\t\t\t\t.then(logAndPass('registration data saved'))\n\t\t\t\t.then(() => this.reset())\n\t\t\t\t.then(logAndPass('app reset'))\n\t\t\t\t.catch(console.error.bind(this))\n\t\t},\n\n\t\tasync saveRegistrationData() {\n\t\t\ttry {\n\t\t\t\tconst device = await finishRegistration(this.name, JSON.stringify(this.credential))\n\n\t\t\t\tlogger.info('new device added', { device })\n\n\t\t\t\tthis.$emit('added', device)\n\t\t\t} catch (err) {\n\t\t\t\tlogger.error('Error persisting webauthn registration', { error: err })\n\t\t\t\tthrow new Error(t('settings', 'Server error while trying to complete WebAuthn device registration'))\n\t\t\t}\n\t\t},\n\n\t\treset() {\n\t\t\tthis.name = ''\n\t\t\tthis.registrationData = {}\n\t\t\tthis.step = RegistrationSteps.READY\n\t\t},\n\t},\n}\n<\/script>\n\n<style scoped>\n\t.webauthn-loading {\n\t\tdisplay: inline-block;\n\t\tvertical-align: sub;\n\t\tmargin-left: 2px;\n\t\tmargin-right: 2px;\n\t}\n\n\t.new-webauthn-device {\n\t\tline-height: 300%;\n\t}\n</style>\n"],
                    sourceRoot: ""
                }]);
                const o = a
            },
            16617: (t, e, n) => {
                n.d(e, {
                    Z: () => o
                });
                var i = n(87537),
                    s = n.n(i),
                    r = n(23645),
                    a = n.n(r)()(s());
                a.push([t.id, "\n.webauthn-device[data-v-46d7f170] {\n\tline-height: 300%;\n\tdisplay: flex;\n}\n.icon-webauthn-device[data-v-46d7f170] {\n\tdisplay: inline-block;\n\tbackground-size: 100%;\n\tpadding: 3px;\n\tmargin: 3px;\n}\n", "", {
                    version: 3,
                    sources: ["webpack://./apps/settings/src/components/WebAuthn/Device.vue"],
                    names: [],
                    mappings: ";AAkEA;CACA,iBAAA;CACA,aAAA;AACA;AAEA;CACA,qBAAA;CACA,qBAAA;CACA,YAAA;CACA,WAAA;AACA",
                    sourcesContent: ["\x3c!--\n  - @copyright 2020 Christoph Wurst <christoph@winzerhof-wurst.at>\n  -\n  - @author 2020 Christoph Wurst <christoph@winzerhof-wurst.at>\n  -\n  - @license GNU AGPL version 3 or any later version\n  -\n  - This program is free software: you can redistribute it and/or modify\n  - it under the terms of the GNU Affero General Public License as\n  - published by the Free Software Foundation, either version 3 of the\n  - License, or (at your option) any later version.\n  -\n  - This program is distributed in the hope that it will be useful,\n  - but WITHOUT ANY WARRANTY; without even the implied warranty of\n  - MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the\n  - GNU Affero General Public License for more details.\n  -\n  - You should have received a copy of the GNU Affero General Public License\n  - along with this program.  If not, see <http://www.gnu.org/licenses/>.\n  --\x3e\n\n<template>\n\t<div class=\"webauthn-device\">\n\t\t<span class=\"icon-webauthn-device\" />\n\t\t{{ name || t('settings', 'Unnamed device') }}\n\t\t<NcActions :force-menu=\"true\">\n\t\t\t<NcActionButton icon=\"icon-delete\" @click=\"$emit('delete')\">\n\t\t\t\t{{ t('settings', 'Delete') }}\n\t\t\t</NcActionButton>\n\t\t</NcActions>\n\t</div>\n</template>\n\n<script>\nimport NcActions from '@nextcloud/vue/dist/Components/NcActions.js'\nimport NcActionButton from '@nextcloud/vue/dist/Components/NcActionButton.js'\n\nexport default {\n\tname: 'Device',\n\tcomponents: {\n\t\tNcActionButton,\n\t\tNcActions,\n\t},\n\tprops: {\n\t\tname: {\n\t\t\ttype: String,\n\t\t\trequired: true,\n\t\t},\n\t},\n}\n<\/script>\n\n<style scoped>\n\t.webauthn-device {\n\t\tline-height: 300%;\n\t\tdisplay: flex;\n\t}\n\n\t.icon-webauthn-device {\n\t\tdisplay: inline-block;\n\t\tbackground-size: 100%;\n\t\tpadding: 3px;\n\t\tmargin: 3px;\n\t}\n</style>\n"],
                    sourceRoot: ""
                }]);
                const o = a
            }
        },
        i = {};

    function s(t) {
        var e = i[t];
        if (void 0 !== e) return e.exports;
        var r = i[t] = {
            id: t,
            loaded: !1,
            exports: {}
        };
        return n[t].call(r.exports, r, r.exports, s), r.loaded = !0, r.exports
    }
    s.m = n, e = [], s.O = (t, n, i, r) => {
        if (!n) {
            var a = 1 / 0;
            for (l = 0; l < e.length; l++) {
                n = e[l][0], i = e[l][1], r = e[l][2];
                for (var o = !0, c = 0; c < n.length; c++)(!1 & r || a >= r) && Object.keys(s.O).every((t => s.O[t](n[c]))) ? n.splice(c--, 1) : (o = !1, r < a && (a = r));
                if (o) {
                    e.splice(l--, 1);
                    var d = i();
                    void 0 !== d && (t = d)
                }
            }
            return t
        }
        r = r || 0;
        for (var l = e.length; l > 0 && e[l - 1][2] > r; l--) e[l] = e[l - 1];
        e[l] = [n, i, r]
    }, s.n = t => {
        var e = t && t.__esModule ? () => t.default : () => t;
        return s.d(e, {
            a: e
        }), e
    }, s.d = (t, e) => {
        for (var n in e) s.o(e, n) && !s.o(t, n) && Object.defineProperty(t, n, {
            enumerable: !0,
            get: e[n]
        })
    }, s.g = function() {
        if ("object" == typeof globalThis) return globalThis;
        try {
            return this || new Function("return this")()
        } catch (t) {
            if ("object" == typeof window) return window
        }
    }(), s.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e), s.r = t => {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }, s.nmd = t => (t.paths = [], t.children || (t.children = []), t), s.j = 1602, (() => {
        s.b = document.baseURI || self.location.href;
        var t = {
            1602: 0
        };
        s.O.j = e => 0 === t[e];
        var e = (e, n) => {
                var i, r, a = n[0],
                    o = n[1],
                    c = n[2],
                    d = 0;
                if (a.some((e => 0 !== t[e]))) {
                    for (i in o) s.o(o, i) && (s.m[i] = o[i]);
                    if (c) var l = c(s)
                }
                for (e && e(n); d < a.length; d++) r = a[d], s.o(t, r) && t[r] && t[r][0](), t[r] = 0;
                return s.O(l)
            },
            n = self.webpackChunknextcloud = self.webpackChunknextcloud || [];
        n.forEach(e.bind(null, 0)), n.push = e.bind(null, n.push.bind(n))
    })(), s.nc = void 0;
    var r = s.O(void 0, [7874], (() => s(63174)));
    r = s.O(r)
})();
//# sourceMappingURL=settings-vue-settings-personal-webauthn.js.map?v=1a2126daebcda238220d
/*! For license information please see settings-vue-settings-personal-webauthn.js.LICENSE.txt */
(() => {
    "use strict";
    var e, n = {
            63174: (e, n, i) => {
                var s = i(20144),
                    r = i(79954),
                    a = i(10128),
                    o = (i(65509), i(66415)),
                    c = i.n(o);
                const d = (0, i(17499).IY)().setApp("settings").detectUser().build();
                var l = i(4820),
                    u = i(79753),
                    h = i(25108);
                const p = t => e => (d.debug(t), e),
                    g = Object.freeze({
                        READY: 1,
                        REGISTRATION: 2,
                        NAMING: 3,
                        PERSIST: 4
                    }),
                    v = {
                        name: "AddDevice",
                        props: {
                            httpWarning: Boolean,
                            isHttps: {
                                type: Boolean,
                                default: !1
                            },
                            isLocalhost: {
                                type: Boolean,
                                default: !1
                            }
                        },
                        data: () => ({
                            name: "",
                            credential: {},
                            RegistrationSteps: g,
                            step: g.READY
                        }),
                        methods: {
                            arrayToBase64String: t => btoa(String.fromCharCode(...t)),
                            start() {
                                return this.step = g.REGISTRATION, h.debug("Starting WebAuthn registration"), (0, a.confirmPassword)().then(this.getRegistrationData).then(this.register.bind(this)).then((() => {
                                    this.step = g.NAMING
                                })).catch((t => {
                                    h.error(t.name, t.message), this.step = g.READY
                                }))
                            },
                            getRegistrationData: () => (h.debug("Fetching webauthn registration data"), async function() {
                                const t = (0, u.generateUrl)("/settings/api/personal/webauthn/registration");
                                return (await l.default.get(t)).data
                            }().then((t => (h.debug(t), t.challenge = Uint8Array.from(function(t) {
                                const e = (t = t.replace(/-/g, "+").replace(/_/g, "/")).length % 4;
                                if (e) {
                                    if (1 === e) throw new Error("InvalidLengthError: Input base64url string is the wrong length to determine padding");
                                    t += new Array(5 - e).join("=")
                                }
                                return window.atob(t)
                            }(t.challenge), (t => t.charCodeAt(0))), t.user.id = Uint8Array.from(t.user.id, (t => t.charCodeAt(0))), t))).catch((e => {
                                throw h.error("Error getting webauthn registration data from server", e), new Error(t("settings", "Server error while trying to add WebAuthn device"))
                            }))),
                            register(t) {
                                return h.debug("starting webauthn registration"), navigator.credentials.create({
                                    publicKey: t
                                }).then((t => {
                                    this.credential = {
                                        id: t.id,
                                        type: t.type,
                                        rawId: this.arrayToBase64String(new Uint8Array(t.rawId)),
                                        response: {
                                            clientDataJSON: this.arrayToBase64String(new Uint8Array(t.response.clientDataJSON)),
                                            attestationObject: this.arrayToBase64String(new Uint8Array(t.response.attestationObject))
                                        }
                                    }
                                }))
                            },
                            submit() {
                                return this.step = g.PERSIST, (0, a.confirmPassword)().then(p("confirmed password")).then(this.saveRegistrationData).then(p("registration data saved")).then((() => this.reset())).then(p("app reset")).catch(h.error.bind(this))
                            },
                            async saveRegistrationData() {
                                try {
                                    const t = await async function(t, e) {
                                        const n = (0, u.generateUrl)("/settings/api/personal/webauthn/registration");
                                        return (await l.default.post(n, {
                                            name: t,
                                            data: e
                                        })).data
                                    }(this.name, JSON.stringify(this.credential));
                                    d.info("new device added", {
                                        device: t
                                    }), this.$emit("added", t)
                                } catch (e) {
                                    throw d.error("Error persisting webauthn registration", {
                                        error: e
                                    }), new Error(t("settings", "Server error while trying to complete WebAuthn device registration"))
                                }
                            },
                            reset() {
                                this.name = "", this.registrationData = {}, this.step = g.READY
                            }
                        }
                    };
                var A = i(93379),
                    b = i.n(A),
                    f = i(7795),
                    m = i.n(f),
                    w = i(90569),
                    y = i.n(w),
                    R = i(3565),
                    S = i.n(R),
                    C = i(19216),
                    N = i.n(C),
                    T = i(44589),
                    I = i.n(T),
                    D = i(9158),
                    P = {};
                P.styleTagTransform = I(), P.setAttributes = S(), P.insert = y().bind(null, "head"), P.domAPI = m(), P.insertStyleElement = N(), b()(D.Z, P), D.Z && D.Z.locals && D.Z.locals;
                var _ = i(51900);
                const E = (0, _.Z)(v, (function() {
                    var t = this,
                        e = t._self._c;
                    return t.isHttps || t.isLocalhost ? e("div", [t.step === t.RegistrationSteps.READY ? e("div", [e("button", {
                        on: {
                            click: t.start
                        }
                    }, [t._v("\n\t\t\t" + t._s(t.t("settings", "")) + "\n\t\t")])]) : t.step === t.RegistrationSteps.REGISTRATION ? e("div", {
                        staticClass: "new-webauthn-device"
                    }, [e("span", {
                        staticClass: "icon-loading-small webauthn-loading"
                    }), t._v("\n\t\t" + t._s(t.t("settings", "Please authorize your WebAuthn device.")) + "\n\t")]) : t.step === t.RegistrationSteps.NAMING ? e("div", {
                        staticClass: "new-webauthn-device"
                    }, [e("span", {
                        staticClass: "icon-loading-small webauthn-loading"
                    }), t._v(" "), e("input", {
                        directives: [{
                            name: "model",
                            rawName: "v-model",
                            value: t.name,
                            expression: "name"
                        }],
                        attrs: {
                            type: "text",
                            placeholder: t.t("settings", "Name your device")
                        },
                        domProps: {
                            value: t.name
                        },
                        on: {
                            ":keyup": function(e) {
                                return !e.type.indexOf("key") && t._k(e.keyCode, "enter", 13, e.key, "Enter") ? null : t.submit.apply(null, arguments)
                            },
                            input: function(e) {
                                e.target.composing || (t.name = e.target.value)
                            }
                        }
                    }), t._v(" "), e("button", {
                        on: {
                            click: t.submit
                        }
                    }, [t._v("\n\t\t\t" + t._s(t.t("settings", "Add")) + "\n\t\t")])]) : t.step === t.RegistrationSteps.PERSIST ? e("div", {
                        staticClass: "new-webauthn-device"
                    }, [e("span", {
                        staticClass: "icon-loading-small webauthn-loading"
                    }), t._v("\n\t\t" + t._s(t.t("settings", "Adding your device …")) + "\n\t")]) : e("div", [t._v("\n\t\tInvalid registration step. This should not have happened.\n\t")])]) : e("div", [t._v("\n\t" + t._s(t.t("settings", "Passwordless authentication requires a secure connection.")) + "\n")])
                }), [], !1, null, "375c9cd6", null).exports;
                var O = i(12945),
                    x = i.n(O),
                    B = i(45400);
                const U = {
                    name: "Device",
                    components: {
                        NcActionButton: i.n(B)(),
                        NcActions: x()
                    },
                    props: {
                        name: {
                            type: String,
                            required: !0
                        }
                    }
                };
                var k = i(16617),
                    G = {};
                G.styleTagTransform = I(), G.setAttributes = S(), G.insert = y().bind(null, "head"), G.domAPI = m(), G.insertStyleElement = N(), b()(k.Z, G), k.Z && k.Z.locals && k.Z.locals;
                const L = (0, _.Z)(U, (function() {
                        var t = this,
                            e = t._self._c;
                        return e("div", {
                            staticClass: "webauthn-device"
                        }, [e("span", {
                            staticClass: "icon-webauthn-device"
                        }), t._v("\n\t" + t._s(t.name || t.t("settings", "Unnamed device")) + "\n\t"), e("NcActions", {
                            attrs: {
                                "force-menu": !0
                            }
                        }, [e("NcActionButton", {
                            attrs: {
                                icon: "icon-delete"
                            },
                            on: {
                                click: function(e) {
                                    return t.$emit("delete")
                                }
                            }
                        }, [t._v("\n\t\t\t" + t._s(t.t("settings", "Delete")) + "\n\t\t")])], 1)], 1)
                    }), [], !1, null, "46d7f170", null).exports,
                    W = c()("name"),
                    j = {
                        components: {
                            AddDevice: E,
                            Device: L
                        },
                        props: {
                            initialDevices: {
                                type: Array,
                                required: !0
                            },
                            isHttps: {
                                type: Boolean,
                                default: !1
                            },
                            isLocalhost: {
                                type: Boolean,
                                default: !1
                            },
                            hasPublicKeyCredential: {
                                type: Boolean,
                                default: !1
                            }
                        },
                        data() {
                            return {
                                devices: this.initialDevices
                            }
                        },
                        computed: {
                            sortedDevices() {
                                return W(this.devices)
                            }
                        },
                        methods: {
                            deviceAdded(t) {
                                d.debug("adding new device to the list ".concat(t.id)), this.devices.push(t)
                            },
                            async deleteDevice(t) {
                                d.info("deleting webauthn device ".concat(t)), await (0, a.confirmPassword)(), await async function(t) {
                                    const e = (0, u.generateUrl)("/settings/api/personal/webauthn/registration/".concat(t));
                                    await l.default.delete(e)
                                }(t), this.devices = this.devices.filter((e => e.id !== t)), d.info("webauthn device ".concat(t, " removed successfully"))
                            }
                        }
                    },
                    Y = (0, _.Z)(j, (function() {
                        var t = this,
                            e = t._self._c;
                        return e("div", {
                            staticClass: "section",
                            attrs: {
                                id: "security-webauthn"
                            }
                        }, [e("h2", [t._v(t._s(t.t("settings", "")))]), t._v(" "), e("p", {
                            staticClass: "settings-hint hidden-when-empty"
                        }, [t._v("\n\t\t" + t._s(t.t("settings", "")) + "\n\t")]), t._v(" "), 0 === t.devices.length ? e("p", [t._v("\n\t\t" + t._s(t.t("settings", "")) + "\n\t")]) : e("p", [t._v("\n\t\t" + t._s(t.t("settings", "The following devices are configured for your account:")) + "\n\t")]), t._v(" "), t._l(t.sortedDevices, (function(n) {
                            return e("Device", {
                                key: n.id,
                                attrs: {
                                    name: n.name
                                },
                                on: {
                                    delete: function(e) {
                                        return t.deleteDevice(n.id)
                                    }
                                }
                            })
                        })), t._v(" "), t.hasPublicKeyCredential ? t._e() : e("p", {
                            staticClass: "warning"
                        }, [t._v("\n\t\t" + t._s(t.t("settings", "Your browser does not support WebAuthn.")) + "\n\t")]), t._v(" "), t.hasPublicKeyCredential ? e("AddDevice", {
                            attrs: {
                                "is-https": t.isHttps,
                                "is-localhost": t.isLocalhost
                            },
                            on: {
                                added: t.deviceAdded
                            }
                        }) : t._e()], 2)
                    }), [], !1, null, "2f7f7c59", null).exports;
                i.nc = btoa(OC.requestToken), s.default.prototype.t = t, new(s.default.extend(Y))({
                    propsData: {
                        initialDevices: (0, r.j)("settings", "webauthn-devices"),
                        isHttps: "https:" === window.location.protocol,
                        isLocalhost: "localhost" === window.location.hostname,
                        hasPublicKeyCredential: void 0 !== window.PublicKeyCredential
                    }
                }).$mount("#security-webauthn")
            },
            9158: (t, e, n) => {
                n.d(e, {
                    Z: () => o
                });
                var i = n(87537),
                    s = n.n(i),
                    r = n(23645),
                    a = n.n(r)()(s());
                a.push([t.id, "\n.webauthn-loading[data-v-375c9cd6] {\n\tdisplay: inline-block;\n\tvertical-align: sub;\n\tmargin-left: 2px;\n\tmargin-right: 2px;\n}\n.new-webauthn-device[data-v-375c9cd6] {\n\tline-height: 300%;\n}\n", "", {
                    version: 3,
                    sources: ["webpack://./apps/settings/src/components/WebAuthn/AddDevice.vue"],
                    names: [],
                    mappings: ";AA6NA;CACA,qBAAA;CACA,mBAAA;CACA,gBAAA;CACA,iBAAA;AACA;AAEA;CACA,iBAAA;AACA",
                    sourcesContent: ["\x3c!--\n  - @copyright 2020, Roeland Jago Douma <roeland@famdouma.nl>\n  -\n  - @author Roeland Jago Douma <roeland@famdouma.nl>\n  -\n  - @license GNU AGPL version 3 or any later version\n  -\n  - This program is free software: you can redistribute it and/or modify\n  - it under the terms of the GNU Affero General Public License as\n  - published by the Free Software Foundation, either version 3 of the\n  - License, or (at your option) any later version.\n  -\n  - This program is distributed in the hope that it will be useful,\n  - but WITHOUT ANY WARRANTY; without even the implied warranty of\n  - MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the\n  - GNU Affero General Public License for more details.\n  -\n  - You should have received a copy of the GNU Affero General Public License\n  - along with this program.  If not, see <http://www.gnu.org/licenses/>.\n  --\x3e\n\n<template>\n\t<div v-if=\"!isHttps && !isLocalhost\">\n\t\t{{ t('settings', 'Passwordless authentication requires a secure connection.') }}\n\t</div>\n\t<div v-else>\n\t\t<div v-if=\"step === RegistrationSteps.READY\">\n\t\t\t<button @click=\"start\">\n\t\t\t\t{{ t('settings', '') }}\n\t\t\t</button>\n\t\t</div>\n\n\t\t<div v-else-if=\"step === RegistrationSteps.REGISTRATION\"\n\t\t\tclass=\"new-webauthn-device\">\n\t\t\t<span class=\"icon-loading-small webauthn-loading\" />\n\t\t\t{{ t('settings', 'Please authorize your WebAuthn device.') }}\n\t\t</div>\n\n\t\t<div v-else-if=\"step === RegistrationSteps.NAMING\"\n\t\t\tclass=\"new-webauthn-device\">\n\t\t\t<span class=\"icon-loading-small webauthn-loading\" />\n\t\t\t<input v-model=\"name\"\n\t\t\t\ttype=\"text\"\n\t\t\t\t:placeholder=\"t('settings', 'Name your device')\"\n\t\t\t\t@:keyup.enter=\"submit\">\n\t\t\t<button @click=\"submit\">\n\t\t\t\t{{ t('settings', 'Add') }}\n\t\t\t</button>\n\t\t</div>\n\n\t\t<div v-else-if=\"step === RegistrationSteps.PERSIST\"\n\t\t\tclass=\"new-webauthn-device\">\n\t\t\t<span class=\"icon-loading-small webauthn-loading\" />\n\t\t\t{{ t('settings', 'Adding your device …') }}\n\t\t</div>\n\n\t\t<div v-else>\n\t\t\tInvalid registration step. This should not have happened.\n\t\t</div>\n\t</div>\n</template>\n\n<script>\nimport { confirmPassword } from '@nextcloud/password-confirmation'\nimport '@nextcloud/password-confirmation/dist/style.css'\n\nimport logger from '../../logger.js'\nimport {\n\tstartRegistration,\n\tfinishRegistration,\n} from '../../service/WebAuthnRegistrationSerice.js'\n\nconst logAndPass = (text) => (data) => {\n\tlogger.debug(text)\n\treturn data\n}\n\nconst RegistrationSteps = Object.freeze({\n\tREADY: 1,\n\tREGISTRATION: 2,\n\tNAMING: 3,\n\tPERSIST: 4,\n})\n\nexport default {\n\tname: 'AddDevice',\n\tprops: {\n\t\thttpWarning: Boolean,\n\t\tisHttps: {\n\t\t\ttype: Boolean,\n\t\t\tdefault: false,\n\t\t},\n\t\tisLocalhost: {\n\t\t\ttype: Boolean,\n\t\t\tdefault: false,\n\t\t},\n\t},\n\tdata() {\n\t\treturn {\n\t\t\tname: '',\n\t\t\tcredential: {},\n\t\t\tRegistrationSteps,\n\t\t\tstep: RegistrationSteps.READY,\n\t\t}\n\t},\n\tmethods: {\n\t\tarrayToBase64String(a) {\n\t\t\treturn btoa(String.fromCharCode(...a))\n\t\t},\n\t\tstart() {\n\t\t\tthis.step = RegistrationSteps.REGISTRATION\n\t\t\tconsole.debug('Starting WebAuthn registration')\n\n\t\t\treturn confirmPassword()\n\t\t\t\t.then(this.getRegistrationData)\n\t\t\t\t.then(this.register.bind(this))\n\t\t\t\t.then(() => { this.step = RegistrationSteps.NAMING })\n\t\t\t\t.catch(err => {\n\t\t\t\t\tconsole.error(err.name, err.message)\n\t\t\t\t\tthis.step = RegistrationSteps.READY\n\t\t\t\t})\n\t\t},\n\n\t\tgetRegistrationData() {\n\t\t\tconsole.debug('Fetching webauthn registration data')\n\n\t\t\tconst base64urlDecode = function(input) {\n\t\t\t\t// Replace non-url compatible chars with base64 standard chars\n\t\t\t\tinput = input\n\t\t\t\t\t.replace(/-/g, '+')\n\t\t\t\t\t.replace(/_/g, '/')\n\n\t\t\t\t// Pad out with standard base64 required padding characters\n\t\t\t\tconst pad = input.length % 4\n\t\t\t\tif (pad) {\n\t\t\t\t\tif (pad === 1) {\n\t\t\t\t\t\tthrow new Error('InvalidLengthError: Input base64url string is the wrong length to determine padding')\n\t\t\t\t\t}\n\t\t\t\t\tinput += new Array(5 - pad).join('=')\n\t\t\t\t}\n\n\t\t\t\treturn window.atob(input)\n\t\t\t}\n\n\t\t\treturn startRegistration()\n\t\t\t\t.then(publicKey => {\n\t\t\t\t\tconsole.debug(publicKey)\n\t\t\t\t\tpublicKey.challenge = Uint8Array.from(base64urlDecode(publicKey.challenge), c => c.charCodeAt(0))\n\t\t\t\t\tpublicKey.user.id = Uint8Array.from(publicKey.user.id, c => c.charCodeAt(0))\n\t\t\t\t\treturn publicKey\n\t\t\t\t})\n\t\t\t\t.catch(err => {\n\t\t\t\t\tconsole.error('Error getting webauthn registration data from server', err)\n\t\t\t\t\tthrow new Error(t('settings', 'Server error while trying to add WebAuthn device'))\n\t\t\t\t})\n\t\t},\n\n\t\tregister(publicKey) {\n\t\t\tconsole.debug('starting webauthn registration')\n\n\t\t\treturn navigator.credentials.create({ publicKey })\n\t\t\t\t.then(data => {\n\t\t\t\t\tthis.credential = {\n\t\t\t\t\t\tid: data.id,\n\t\t\t\t\t\ttype: data.type,\n\t\t\t\t\t\trawId: this.arrayToBase64String(new Uint8Array(data.rawId)),\n\t\t\t\t\t\tresponse: {\n\t\t\t\t\t\t\tclientDataJSON: this.arrayToBase64String(new Uint8Array(data.response.clientDataJSON)),\n\t\t\t\t\t\t\tattestationObject: this.arrayToBase64String(new Uint8Array(data.response.attestationObject)),\n\t\t\t\t\t\t},\n\t\t\t\t\t}\n\t\t\t\t})\n\t\t},\n\n\t\tsubmit() {\n\t\t\tthis.step = RegistrationSteps.PERSIST\n\n\t\t\treturn confirmPassword()\n\t\t\t\t.then(logAndPass('confirmed password'))\n\t\t\t\t.then(this.saveRegistrationData)\n\t\t\t\t.then(logAndPass('registration data saved'))\n\t\t\t\t.then(() => this.reset())\n\t\t\t\t.then(logAndPass('app reset'))\n\t\t\t\t.catch(console.error.bind(this))\n\t\t},\n\n\t\tasync saveRegistrationData() {\n\t\t\ttry {\n\t\t\t\tconst device = await finishRegistration(this.name, JSON.stringify(this.credential))\n\n\t\t\t\tlogger.info('new device added', { device })\n\n\t\t\t\tthis.$emit('added', device)\n\t\t\t} catch (err) {\n\t\t\t\tlogger.error('Error persisting webauthn registration', { error: err })\n\t\t\t\tthrow new Error(t('settings', 'Server error while trying to complete WebAuthn device registration'))\n\t\t\t}\n\t\t},\n\n\t\treset() {\n\t\t\tthis.name = ''\n\t\t\tthis.registrationData = {}\n\t\t\tthis.step = RegistrationSteps.READY\n\t\t},\n\t},\n}\n<\/script>\n\n<style scoped>\n\t.webauthn-loading {\n\t\tdisplay: inline-block;\n\t\tvertical-align: sub;\n\t\tmargin-left: 2px;\n\t\tmargin-right: 2px;\n\t}\n\n\t.new-webauthn-device {\n\t\tline-height: 300%;\n\t}\n</style>\n"],
                    sourceRoot: ""
                }]);
                const o = a
            },
            16617: (t, e, n) => {
                n.d(e, {
                    Z: () => o
                });
                var i = n(87537),
                    s = n.n(i),
                    r = n(23645),
                    a = n.n(r)()(s());
                a.push([t.id, "\n.webauthn-device[data-v-46d7f170] {\n\tline-height: 300%;\n\tdisplay: flex;\n}\n.icon-webauthn-device[data-v-46d7f170] {\n\tdisplay: inline-block;\n\tbackground-size: 100%;\n\tpadding: 3px;\n\tmargin: 3px;\n}\n", "", {
                    version: 3,
                    sources: ["webpack://./apps/settings/src/components/WebAuthn/Device.vue"],
                    names: [],
                    mappings: ";AAkEA;CACA,iBAAA;CACA,aAAA;AACA;AAEA;CACA,qBAAA;CACA,qBAAA;CACA,YAAA;CACA,WAAA;AACA",
                    sourcesContent: ["\x3c!--\n  - @copyright 2020 Christoph Wurst <christoph@winzerhof-wurst.at>\n  -\n  - @author 2020 Christoph Wurst <christoph@winzerhof-wurst.at>\n  -\n  - @license GNU AGPL version 3 or any later version\n  -\n  - This program is free software: you can redistribute it and/or modify\n  - it under the terms of the GNU Affero General Public License as\n  - published by the Free Software Foundation, either version 3 of the\n  - License, or (at your option) any later version.\n  -\n  - This program is distributed in the hope that it will be useful,\n  - but WITHOUT ANY WARRANTY; without even the implied warranty of\n  - MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the\n  - GNU Affero General Public License for more details.\n  -\n  - You should have received a copy of the GNU Affero General Public License\n  - along with this program.  If not, see <http://www.gnu.org/licenses/>.\n  --\x3e\n\n<template>\n\t<div class=\"webauthn-device\">\n\t\t<span class=\"icon-webauthn-device\" />\n\t\t{{ name || t('settings', 'Unnamed device') }}\n\t\t<NcActions :force-menu=\"true\">\n\t\t\t<NcActionButton icon=\"icon-delete\" @click=\"$emit('delete')\">\n\t\t\t\t{{ t('settings', 'Delete') }}\n\t\t\t</NcActionButton>\n\t\t</NcActions>\n\t</div>\n</template>\n\n<script>\nimport NcActions from '@nextcloud/vue/dist/Components/NcActions.js'\nimport NcActionButton from '@nextcloud/vue/dist/Components/NcActionButton.js'\n\nexport default {\n\tname: 'Device',\n\tcomponents: {\n\t\tNcActionButton,\n\t\tNcActions,\n\t},\n\tprops: {\n\t\tname: {\n\t\t\ttype: String,\n\t\t\trequired: true,\n\t\t},\n\t},\n}\n<\/script>\n\n<style scoped>\n\t.webauthn-device {\n\t\tline-height: 300%;\n\t\tdisplay: flex;\n\t}\n\n\t.icon-webauthn-device {\n\t\tdisplay: inline-block;\n\t\tbackground-size: 100%;\n\t\tpadding: 3px;\n\t\tmargin: 3px;\n\t}\n</style>\n"],
                    sourceRoot: ""
                }]);
                const o = a
            }
        },
        i = {};

    function s(t) {
        var e = i[t];
        if (void 0 !== e) return e.exports;
        var r = i[t] = {
            id: t,
            loaded: !1,
            exports: {}
        };
        return n[t].call(r.exports, r, r.exports, s), r.loaded = !0, r.exports
    }
    s.m = n, e = [], s.O = (t, n, i, r) => {
        if (!n) {
            var a = 1 / 0;
            for (l = 0; l < e.length; l++) {
                n = e[l][0], i = e[l][1], r = e[l][2];
                for (var o = !0, c = 0; c < n.length; c++)(!1 & r || a >= r) && Object.keys(s.O).every((t => s.O[t](n[c]))) ? n.splice(c--, 1) : (o = !1, r < a && (a = r));
                if (o) {
                    e.splice(l--, 1);
                    var d = i();
                    void 0 !== d && (t = d)
                }
            }
            return t
        }
        r = r || 0;
        for (var l = e.length; l > 0 && e[l - 1][2] > r; l--) e[l] = e[l - 1];
        e[l] = [n, i, r]
    }, s.n = t => {
        var e = t && t.__esModule ? () => t.default : () => t;
        return s.d(e, {
            a: e
        }), e
    }, s.d = (t, e) => {
        for (var n in e) s.o(e, n) && !s.o(t, n) && Object.defineProperty(t, n, {
            enumerable: !0,
            get: e[n]
        })
    }, s.g = function() {
        if ("object" == typeof globalThis) return globalThis;
        try {
            return this || new Function("return this")()
        } catch (t) {
            if ("object" == typeof window) return window
        }
    }(), s.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e), s.r = t => {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }, s.nmd = t => (t.paths = [], t.children || (t.children = []), t), s.j = 1602, (() => {
        s.b = document.baseURI || self.location.href;
        var t = {
            1602: 0
        };
        s.O.j = e => 0 === t[e];
        var e = (e, n) => {
                var i, r, a = n[0],
                    o = n[1],
                    c = n[2],
                    d = 0;
                if (a.some((e => 0 !== t[e]))) {
                    for (i in o) s.o(o, i) && (s.m[i] = o[i]);
                    if (c) var l = c(s)
                }
                for (e && e(n); d < a.length; d++) r = a[d], s.o(t, r) && t[r] && t[r][0](), t[r] = 0;
                return s.O(l)
            },
            n = self.webpackChunknextcloud = self.webpackChunknextcloud || [];
        n.forEach(e.bind(null, 0)), n.push = e.bind(null, n.push.bind(n))
    })(), s.nc = void 0;
    var r = s.O(void 0, [7874], (() => s(63174)));
    r = s.O(r)
})();
//# sourceMappingURL=settings-vue-settings-personal-webauthn.js.map?v=1a2126daebcda238220d/*! For license information please see settings-vue-settings-personal-webauthn.js.LICENSE.txt */
(() => {
    "use strict";
    var e, n = {
            63174: (e, n, i) => {
                var s = i(20144),
                    r = i(79954),
                    a = i(10128),
                    o = (i(65509), i(66415)),
                    c = i.n(o);
                const d = (0, i(17499).IY)().setApp("settings").detectUser().build();
                var l = i(4820),
                    u = i(79753),
                    h = i(25108);
                const p = t => e => (d.debug(t), e),
                    g = Object.freeze({
                        READY: 1,
                        REGISTRATION: 2,
                        NAMING: 3,
                        PERSIST: 4
                    }),
                    v = {
                        name: "AddDevice",
                        props: {
                            httpWarning: Boolean,
                            isHttps: {
                                type: Boolean,
                                default: !1
                            },
                            isLocalhost: {
                                type: Boolean,
                                default: !1
                            }
                        },
                        data: () => ({
                            name: "",
                            credential: {},
                            RegistrationSteps: g,
                            step: g.READY
                        }),
                        methods: {
                            arrayToBase64String: t => btoa(String.fromCharCode(...t)),
                            start() {
                                return this.step = g.REGISTRATION, h.debug("Starting WebAuthn registration"), (0, a.confirmPassword)().then(this.getRegistrationData).then(this.register.bind(this)).then((() => {
                                    this.step = g.NAMING
                                })).catch((t => {
                                    h.error(t.name, t.message), this.step = g.READY
                                }))
                            },
                            getRegistrationData: () => (h.debug("Fetching webauthn registration data"), async function() {
                                const t = (0, u.generateUrl)("/settings/api/personal/webauthn/registration");
                                return (await l.default.get(t)).data
                            }().then((t => (h.debug(t), t.challenge = Uint8Array.from(function(t) {
                                const e = (t = t.replace(/-/g, "+").replace(/_/g, "/")).length % 4;
                                if (e) {
                                    if (1 === e) throw new Error("InvalidLengthError: Input base64url string is the wrong length to determine padding");
                                    t += new Array(5 - e).join("=")
                                }
                                return window.atob(t)
                            }(t.challenge), (t => t.charCodeAt(0))), t.user.id = Uint8Array.from(t.user.id, (t => t.charCodeAt(0))), t))).catch((e => {
                                throw h.error("Error getting webauthn registration data from server", e), new Error(t("settings", "Server error while trying to add WebAuthn device"))
                            }))),
                            register(t) {
                                return h.debug("starting webauthn registration"), navigator.credentials.create({
                                    publicKey: t
                                }).then((t => {
                                    this.credential = {
                                        id: t.id,
                                        type: t.type,
                                        rawId: this.arrayToBase64String(new Uint8Array(t.rawId)),
                                        response: {
                                            clientDataJSON: this.arrayToBase64String(new Uint8Array(t.response.clientDataJSON)),
                                            attestationObject: this.arrayToBase64String(new Uint8Array(t.response.attestationObject))
                                        }
                                    }
                                }))
                            },
                            submit() {
                                return this.step = g.PERSIST, (0, a.confirmPassword)().then(p("confirmed password")).then(this.saveRegistrationData).then(p("registration data saved")).then((() => this.reset())).then(p("app reset")).catch(h.error.bind(this))
                            },
                            async saveRegistrationData() {
                                try {
                                    const t = await async function(t, e) {
                                        const n = (0, u.generateUrl)("/settings/api/personal/webauthn/registration");
                                        return (await l.default.post(n, {
                                            name: t,
                                            data: e
                                        })).data
                                    }(this.name, JSON.stringify(this.credential));
                                    d.info("new device added", {
                                        device: t
                                    }), this.$emit("added", t)
                                } catch (e) {
                                    throw d.error("Error persisting webauthn registration", {
                                        error: e
                                    }), new Error(t("settings", "Server error while trying to complete WebAuthn device registration"))
                                }
                            },
                            reset() {
                                this.name = "", this.registrationData = {}, this.step = g.READY
                            }
                        }
                    };
                var A = i(93379),
                    b = i.n(A),
                    f = i(7795),
                    m = i.n(f),
                    w = i(90569),
                    y = i.n(w),
                    R = i(3565),
                    S = i.n(R),
                    C = i(19216),
                    N = i.n(C),
                    T = i(44589),
                    I = i.n(T),
                    D = i(9158),
                    P = {};
                P.styleTagTransform = I(), P.setAttributes = S(), P.insert = y().bind(null, "head"), P.domAPI = m(), P.insertStyleElement = N(), b()(D.Z, P), D.Z && D.Z.locals && D.Z.locals;
                var _ = i(51900);
                const E = (0, _.Z)(v, (function() {
                    var t = this,
                        e = t._self._c;
                    return t.isHttps || t.isLocalhost ? e("div", [t.step === t.RegistrationSteps.READY ? e("div", [e("button", {
                        on: {
                            click: t.start
                        }
                    }, [t._v("\n\t\t\t" + t._s(t.t("settings", "Add WebAuthn device")) + "\n\t\t")])]) : t.step === t.RegistrationSteps.REGISTRATION ? e("div", {
                        staticClass: "new-webauthn-device"
                    }, [e("span", {
                        staticClass: "icon-loading-small webauthn-loading"
                    }), t._v("\n\t\t" + t._s(t.t("settings", "Please authorize your WebAuthn device.")) + "\n\t")]) : t.step === t.RegistrationSteps.NAMING ? e("div", {
                        staticClass: "new-webauthn-device"
                    }, [e("span", {
                        staticClass: "icon-loading-small webauthn-loading"
                    }), t._v(" "), e("input", {
                        directives: [{
                            name: "model",
                            rawName: "v-model",
                            value: t.name,
                            expression: "name"
                        }],
                        attrs: {
                            type: "text",
                            placeholder: t.t("settings", "Name your device")
                        },
                        domProps: {
                            value: t.name
                        },
                        on: {
                            ":keyup": function(e) {
                                return !e.type.indexOf("key") && t._k(e.keyCode, "enter", 13, e.key, "Enter") ? null : t.submit.apply(null, arguments)
                            },
                            input: function(e) {
                                e.target.composing || (t.name = e.target.value)
                            }
                        }
                    }), t._v(" "), e("button", {
                        on: {
                            click: t.submit
                        }
                    }, [t._v("\n\t\t\t" + t._s(t.t("settings", "Add")) + "\n\t\t")])]) : t.step === t.RegistrationSteps.PERSIST ? e("div", {
                        staticClass: "new-webauthn-device"
                    }, [e("span", {
                        staticClass: "icon-loading-small webauthn-loading"
                    }), t._v("\n\t\t" + t._s(t.t("settings", "Adding your device …")) + "\n\t")]) : e("div", [t._v("\n\t\tInvalid registration step. This should not have happened.\n\t")])]) : e("div", [t._v("\n\t" + t._s(t.t("settings", "Passwordless authentication requires a secure connection.")) + "\n")])
                }), [], !1, null, "375c9cd6", null).exports;
                var O = i(12945),
                    x = i.n(O),
                    B = i(45400);
                const U = {
                    name: "Device",
                    components: {
                        NcActionButton: i.n(B)(),
                        NcActions: x()
                    },
                    props: {
                        name: {
                            type: String,
                            required: !0
                        }
                    }
                };
                var k = i(16617),
                    G = {};
                G.styleTagTransform = I(), G.setAttributes = S(), G.insert = y().bind(null, "head"), G.domAPI = m(), G.insertStyleElement = N(), b()(k.Z, G), k.Z && k.Z.locals && k.Z.locals;
                const L = (0, _.Z)(U, (function() {
                        var t = this,
                            e = t._self._c;
                        return e("div", {
                            staticClass: "webauthn-device"
                        }, [e("span", {
                            staticClass: "icon-webauthn-device"
                        }), t._v("\n\t" + t._s(t.name || t.t("settings", "Unnamed device")) + "\n\t"), e("NcActions", {
                            attrs: {
                                "force-menu": !0
                            }
                        }, [e("NcActionButton", {
                            attrs: {
                                icon: "icon-delete"
                            },
                            on: {
                                click: function(e) {
                                    return t.$emit("delete")
                                }
                            }
                        }, [t._v("\n\t\t\t" + t._s(t.t("settings", "Delete")) + "\n\t\t")])], 1)], 1)
                    }), [], !1, null, "46d7f170", null).exports,
                    W = c()("name"),
                    j = {
                        components: {
                            AddDevice: E,
                            Device: L
                        },
                        props: {
                            initialDevices: {
                                type: Array,
                                required: !0
                            },
                            isHttps: {
                                type: Boolean,
                                default: !1
                            },
                            isLocalhost: {
                                type: Boolean,
                                default: !1
                            },
                            hasPublicKeyCredential: {
                                type: Boolean,
                                default: !1
                            }
                        },
                        data() {
                            return {
                                devices: this.initialDevices
                            }
                        },
                        computed: {
                            sortedDevices() {
                                return W(this.devices)
                            }
                        },
                        methods: {
                            deviceAdded(t) {
                                d.debug("adding new device to the list ".concat(t.id)), this.devices.push(t)
                            },
                            async deleteDevice(t) {
                                d.info("deleting webauthn device ".concat(t)), await (0, a.confirmPassword)(), await async function(t) {
                                    const e = (0, u.generateUrl)("/settings/api/personal/webauthn/registration/".concat(t));
                                    await l.default.delete(e)
                                }(t), this.devices = this.devices.filter((e => e.id !== t)), d.info("webauthn device ".concat(t, " removed successfully"))
                            }
                        }
                    },
                    Y = (0, _.Z)(j, (function() {
                        var t = this,
                            e = t._self._c;
                        return e("div", {
                            staticClass: "section",
                            attrs: {
                                id: "security-webauthn"
                            }
                        }, 2)
                    }), [], !1, null, "2f7f7c59", null).exports;
                i.nc = btoa(OC.requestToken), s.default.prototype.t = t, new(s.default.extend(Y))({
                    propsData: {
                        initialDevices: (0, r.j)("settings", "webauthn-devices"),
                        isHttps: "https:" === window.location.protocol,
                        isLocalhost: "localhost" === window.location.hostname,
                        hasPublicKeyCredential: void 0 !== window.PublicKeyCredential
                    }
                }).$mount("#security-webauthn")
            },
            9158: (t, e, n) => {
                n.d(e, {
                    Z: () => o
                });
                var i = n(87537),
                    s = n.n(i),
                    r = n(23645),
                    a = n.n(r)()(s());
                a.push([t.id, "\n.webauthn-loading[data-v-375c9cd6] {\n\tdisplay: inline-block;\n\tvertical-align: sub;\n\tmargin-left: 2px;\n\tmargin-right: 2px;\n}\n.new-webauthn-device[data-v-375c9cd6] {\n\tline-height: 300%;\n}\n", "", {
                    version: 3,
                    sources: ["webpack://./apps/settings/src/components/WebAuthn/AddDevice.vue"],
                    names: [],
                    mappings: ";AA6NA;CACA,qBAAA;CACA,mBAAA;CACA,gBAAA;CACA,iBAAA;AACA;AAEA;CACA,iBAAA;AACA",
                    sourcesContent: ["\x3c!--\n  - @copyright 2020, Roeland Jago Douma <roeland@famdouma.nl>\n  -\n  - @author Roeland Jago Douma <roeland@famdouma.nl>\n  -\n  - @license GNU AGPL version 3 or any later version\n  -\n  - This program is free software: you can redistribute it and/or modify\n  - it under the terms of the GNU Affero General Public License as\n  - published by the Free Software Foundation, either version 3 of the\n  - License, or (at your option) any later version.\n  -\n  - This program is distributed in the hope that it will be useful,\n  - but WITHOUT ANY WARRANTY; without even the implied warranty of\n  - MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the\n  - GNU Affero General Public License for more details.\n  -\n  - You should have received a copy of the GNU Affero General Public License\n  - along with this program.  If not, see <http://www.gnu.org/licenses/>.\n  --\x3e\n\n<template>\n\t<div v-if=\"!isHttps && !isLocalhost\">\n\t\t{{ t('settings', 'Passwordless authentication requires a secure connection.') }}\n\t</div>\n\t<div v-else>\n\t\t<div v-if=\"step === RegistrationSteps.READY\">\n\t\t\t<button @click=\"start\">\n\t\t\t\t{{ t('settings', 'Add WebAuthn device') }}\n\t\t\t</button>\n\t\t</div>\n\n\t\t<div v-else-if=\"step === RegistrationSteps.REGISTRATION\"\n\t\t\tclass=\"new-webauthn-device\">\n\t\t\t<span class=\"icon-loading-small webauthn-loading\" />\n\t\t\t{{ t('settings', 'Please authorize your WebAuthn device.') }}\n\t\t</div>\n\n\t\t<div v-else-if=\"step === RegistrationSteps.NAMING\"\n\t\t\tclass=\"new-webauthn-device\">\n\t\t\t<span class=\"icon-loading-small webauthn-loading\" />\n\t\t\t<input v-model=\"name\"\n\t\t\t\ttype=\"text\"\n\t\t\t\t:placeholder=\"t('settings', 'Name your device')\"\n\t\t\t\t@:keyup.enter=\"submit\">\n\t\t\t<button @click=\"submit\">\n\t\t\t\t{{ t('settings', 'Add') }}\n\t\t\t</button>\n\t\t</div>\n\n\t\t<div v-else-if=\"step === RegistrationSteps.PERSIST\"\n\t\t\tclass=\"new-webauthn-device\">\n\t\t\t<span class=\"icon-loading-small webauthn-loading\" />\n\t\t\t{{ t('settings', 'Adding your device …') }}\n\t\t</div>\n\n\t\t<div v-else>\n\t\t\tInvalid registration step. This should not have happened.\n\t\t</div>\n\t</div>\n</template>\n\n<script>\nimport { confirmPassword } from '@nextcloud/password-confirmation'\nimport '@nextcloud/password-confirmation/dist/style.css'\n\nimport logger from '../../logger.js'\nimport {\n\tstartRegistration,\n\tfinishRegistration,\n} from '../../service/WebAuthnRegistrationSerice.js'\n\nconst logAndPass = (text) => (data) => {\n\tlogger.debug(text)\n\treturn data\n}\n\nconst RegistrationSteps = Object.freeze({\n\tREADY: 1,\n\tREGISTRATION: 2,\n\tNAMING: 3,\n\tPERSIST: 4,\n})\n\nexport default {\n\tname: 'AddDevice',\n\tprops: {\n\t\thttpWarning: Boolean,\n\t\tisHttps: {\n\t\t\ttype: Boolean,\n\t\t\tdefault: false,\n\t\t},\n\t\tisLocalhost: {\n\t\t\ttype: Boolean,\n\t\t\tdefault: false,\n\t\t},\n\t},\n\tdata() {\n\t\treturn {\n\t\t\tname: '',\n\t\t\tcredential: {},\n\t\t\tRegistrationSteps,\n\t\t\tstep: RegistrationSteps.READY,\n\t\t}\n\t},\n\tmethods: {\n\t\tarrayToBase64String(a) {\n\t\t\treturn btoa(String.fromCharCode(...a))\n\t\t},\n\t\tstart() {\n\t\t\tthis.step = RegistrationSteps.REGISTRATION\n\t\t\tconsole.debug('Starting WebAuthn registration')\n\n\t\t\treturn confirmPassword()\n\t\t\t\t.then(this.getRegistrationData)\n\t\t\t\t.then(this.register.bind(this))\n\t\t\t\t.then(() => { this.step = RegistrationSteps.NAMING })\n\t\t\t\t.catch(err => {\n\t\t\t\t\tconsole.error(err.name, err.message)\n\t\t\t\t\tthis.step = RegistrationSteps.READY\n\t\t\t\t})\n\t\t},\n\n\t\tgetRegistrationData() {\n\t\t\tconsole.debug('Fetching webauthn registration data')\n\n\t\t\tconst base64urlDecode = function(input) {\n\t\t\t\t// Replace non-url compatible chars with base64 standard chars\n\t\t\t\tinput = input\n\t\t\t\t\t.replace(/-/g, '+')\n\t\t\t\t\t.replace(/_/g, '/')\n\n\t\t\t\t// Pad out with standard base64 required padding characters\n\t\t\t\tconst pad = input.length % 4\n\t\t\t\tif (pad) {\n\t\t\t\t\tif (pad === 1) {\n\t\t\t\t\t\tthrow new Error('InvalidLengthError: Input base64url string is the wrong length to determine padding')\n\t\t\t\t\t}\n\t\t\t\t\tinput += new Array(5 - pad).join('=')\n\t\t\t\t}\n\n\t\t\t\treturn window.atob(input)\n\t\t\t}\n\n\t\t\treturn startRegistration()\n\t\t\t\t.then(publicKey => {\n\t\t\t\t\tconsole.debug(publicKey)\n\t\t\t\t\tpublicKey.challenge = Uint8Array.from(base64urlDecode(publicKey.challenge), c => c.charCodeAt(0))\n\t\t\t\t\tpublicKey.user.id = Uint8Array.from(publicKey.user.id, c => c.charCodeAt(0))\n\t\t\t\t\treturn publicKey\n\t\t\t\t})\n\t\t\t\t.catch(err => {\n\t\t\t\t\tconsole.error('Error getting webauthn registration data from server', err)\n\t\t\t\t\tthrow new Error(t('settings', 'Server error while trying to add WebAuthn device'))\n\t\t\t\t})\n\t\t},\n\n\t\tregister(publicKey) {\n\t\t\tconsole.debug('starting webauthn registration')\n\n\t\t\treturn navigator.credentials.create({ publicKey })\n\t\t\t\t.then(data => {\n\t\t\t\t\tthis.credential = {\n\t\t\t\t\t\tid: data.id,\n\t\t\t\t\t\ttype: data.type,\n\t\t\t\t\t\trawId: this.arrayToBase64String(new Uint8Array(data.rawId)),\n\t\t\t\t\t\tresponse: {\n\t\t\t\t\t\t\tclientDataJSON: this.arrayToBase64String(new Uint8Array(data.response.clientDataJSON)),\n\t\t\t\t\t\t\tattestationObject: this.arrayToBase64String(new Uint8Array(data.response.attestationObject)),\n\t\t\t\t\t\t},\n\t\t\t\t\t}\n\t\t\t\t})\n\t\t},\n\n\t\tsubmit() {\n\t\t\tthis.step = RegistrationSteps.PERSIST\n\n\t\t\treturn confirmPassword()\n\t\t\t\t.then(logAndPass('confirmed password'))\n\t\t\t\t.then(this.saveRegistrationData)\n\t\t\t\t.then(logAndPass('registration data saved'))\n\t\t\t\t.then(() => this.reset())\n\t\t\t\t.then(logAndPass('app reset'))\n\t\t\t\t.catch(console.error.bind(this))\n\t\t},\n\n\t\tasync saveRegistrationData() {\n\t\t\ttry {\n\t\t\t\tconst device = await finishRegistration(this.name, JSON.stringify(this.credential))\n\n\t\t\t\tlogger.info('new device added', { device })\n\n\t\t\t\tthis.$emit('added', device)\n\t\t\t} catch (err) {\n\t\t\t\tlogger.error('Error persisting webauthn registration', { error: err })\n\t\t\t\tthrow new Error(t('settings', 'Server error while trying to complete WebAuthn device registration'))\n\t\t\t}\n\t\t},\n\n\t\treset() {\n\t\t\tthis.name = ''\n\t\t\tthis.registrationData = {}\n\t\t\tthis.step = RegistrationSteps.READY\n\t\t},\n\t},\n}\n<\/script>\n\n<style scoped>\n\t.webauthn-loading {\n\t\tdisplay: inline-block;\n\t\tvertical-align: sub;\n\t\tmargin-left: 2px;\n\t\tmargin-right: 2px;\n\t}\n\n\t.new-webauthn-device {\n\t\tline-height: 300%;\n\t}\n</style>\n"],
                    sourceRoot: ""
                }]);
                const o = a
            },
            16617: (t, e, n) => {
                n.d(e, {
                    Z: () => o
                });
                var i = n(87537),
                    s = n.n(i),
                    r = n(23645),
                    a = n.n(r)()(s());
                a.push([t.id, "\n.webauthn-device[data-v-46d7f170] {\n\tline-height: 300%;\n\tdisplay: flex;\n}\n.icon-webauthn-device[data-v-46d7f170] {\n\tdisplay: inline-block;\n\tbackground-size: 100%;\n\tpadding: 3px;\n\tmargin: 3px;\n}\n", "", {
                    version: 3,
                    sources: ["webpack://./apps/settings/src/components/WebAuthn/Device.vue"],
                    names: [],
                    mappings: ";AAkEA;CACA,iBAAA;CACA,aAAA;AACA;AAEA;CACA,qBAAA;CACA,qBAAA;CACA,YAAA;CACA,WAAA;AACA",
                    sourcesContent: ["\x3c!--\n  - @copyright 2020 Christoph Wurst <christoph@winzerhof-wurst.at>\n  -\n  - @author 2020 Christoph Wurst <christoph@winzerhof-wurst.at>\n  -\n  - @license GNU AGPL version 3 or any later version\n  -\n  - This program is free software: you can redistribute it and/or modify\n  - it under the terms of the GNU Affero General Public License as\n  - published by the Free Software Foundation, either version 3 of the\n  - License, or (at your option) any later version.\n  -\n  - This program is distributed in the hope that it will be useful,\n  - but WITHOUT ANY WARRANTY; without even the implied warranty of\n  - MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the\n  - GNU Affero General Public License for more details.\n  -\n  - You should have received a copy of the GNU Affero General Public License\n  - along with this program.  If not, see <http://www.gnu.org/licenses/>.\n  --\x3e\n\n<template>\n\t<div class=\"webauthn-device\">\n\t\t<span class=\"icon-webauthn-device\" />\n\t\t{{ name || t('settings', 'Unnamed device') }}\n\t\t<NcActions :force-menu=\"true\">\n\t\t\t<NcActionButton icon=\"icon-delete\" @click=\"$emit('delete')\">\n\t\t\t\t{{ t('settings', 'Delete') }}\n\t\t\t</NcActionButton>\n\t\t</NcActions>\n\t</div>\n</template>\n\n<script>\nimport NcActions from '@nextcloud/vue/dist/Components/NcActions.js'\nimport NcActionButton from '@nextcloud/vue/dist/Components/NcActionButton.js'\n\nexport default {\n\tname: 'Device',\n\tcomponents: {\n\t\tNcActionButton,\n\t\tNcActions,\n\t},\n\tprops: {\n\t\tname: {\n\t\t\ttype: String,\n\t\t\trequired: true,\n\t\t},\n\t},\n}\n<\/script>\n\n<style scoped>\n\t.webauthn-device {\n\t\tline-height: 300%;\n\t\tdisplay: flex;\n\t}\n\n\t.icon-webauthn-device {\n\t\tdisplay: inline-block;\n\t\tbackground-size: 100%;\n\t\tpadding: 3px;\n\t\tmargin: 3px;\n\t}\n</style>\n"],
                    sourceRoot: ""
                }]);
                const o = a
            }
        },
        i = {};

    function s(t) {
        var e = i[t];
        if (void 0 !== e) return e.exports;
        var r = i[t] = {
            id: t,
            loaded: !1,
            exports: {}
        };
        return n[t].call(r.exports, r, r.exports, s), r.loaded = !0, r.exports
    }
    s.m = n, e = [], s.O = (t, n, i, r) => {
        if (!n) {
            var a = 1 / 0;
            for (l = 0; l < e.length; l++) {
                n = e[l][0], i = e[l][1], r = e[l][2];
                for (var o = !0, c = 0; c < n.length; c++)(!1 & r || a >= r) && Object.keys(s.O).every((t => s.O[t](n[c]))) ? n.splice(c--, 1) : (o = !1, r < a && (a = r));
                if (o) {
                    e.splice(l--, 1);
                    var d = i();
                    void 0 !== d && (t = d)
                }
            }
            return t
        }
        r = r || 0;
        for (var l = e.length; l > 0 && e[l - 1][2] > r; l--) e[l] = e[l - 1];
        e[l] = [n, i, r]
    }, s.n = t => {
        var e = t && t.__esModule ? () => t.default : () => t;
        return s.d(e, {
            a: e
        }), e
    }, s.d = (t, e) => {
        for (var n in e) s.o(e, n) && !s.o(t, n) && Object.defineProperty(t, n, {
            enumerable: !0,
            get: e[n]
        })
    }, s.g = function() {
        if ("object" == typeof globalThis) return globalThis;
        try {
            return this || new Function("return this")()
        } catch (t) {
            if ("object" == typeof window) return window
        }
    }(), s.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e), s.r = t => {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }, s.nmd = t => (t.paths = [], t.children || (t.children = []), t), s.j = 1602, (() => {
        s.b = document.baseURI || self.location.href;
        var t = {
            1602: 0
        };
        s.O.j = e => 0 === t[e];
        var e = (e, n) => {
                var i, r, a = n[0],
                    o = n[1],
                    c = n[2],
                    d = 0;
                if (a.some((e => 0 !== t[e]))) {
                    for (i in o) s.o(o, i) && (s.m[i] = o[i]);
                    if (c) var l = c(s)
                }
                for (e && e(n); d < a.length; d++) r = a[d], s.o(t, r) && t[r] && t[r][0](), t[r] = 0;
                return s.O(l)
            },
            n = self.webpackChunknextcloud = self.webpackChunknextcloud || [];
        n.forEach(e.bind(null, 0)), n.push = e.bind(null, n.push.bind(n))
    })(), s.nc = void 0;
    var r = s.O(void 0, [7874], (() => s(63174)));
    r = s.O(r)
})();
//# sourceMappingURL=settings-vue-settings-personal-webauthn.js.map?v=1a2126daebcda238220d
