/*! For license information please see settings-vue-settings-personal-info.js.LICENSE.txt */
(() => {
    var e, a = {
            81567: (e, a, n) => {
                "use strict";
                var i = n(20144),
                    o = n(45994),
                    s = n(79954),
                    r = n(31352),
                    l = (n(36144), n(4820)),
                    d = n(79753),
                    c = n(64024),
                    p = n(78595),
                    A = n(75925),
                    u = n.n(A),
                    m = n(10861),
                    h = n.n(m),
                    g = n(17652),
                    v = (n(74063), n(75762)),
                    C = n(34829),
                    f = n(57612),
                    y = n(61149),
                    b = n(12945),
                    x = n.n(b),
                    E = n(45400);
                const _ = {
                    name: "FederationControlAction",
                    components: {
                        NcActionButton: n.n(E)()
                    },
                    props: {
                        activeScope: {
                            type: String,
                            required: !0
                        },
                        displayName: {
                            type: String,
                            required: !0
                        },
                        handleScopeChange: {
                            type: Function,
                            default: () => {}
                        },
                        iconClass: {
                            type: String,
                            required: !0
                        },
                        isSupportedScope: {
                            type: Boolean,
                            required: !0
                        },
                        name: {
                            type: String,
                            required: !0
                        },
                        tooltipDisabled: {
                            type: String,
                            default: ""
                        },
                        tooltip: {
                            type: String,
                            required: !0
                        }
                    },
                    methods: {
                        updateScope() {
                            this.handleScopeChange(this.name)
                        }
                    }
                };
                var w = n(93379),
                    I = n.n(w),
                    S = n(7795),
                    P = n.n(S),
                    L = n(90569),
                    j = n.n(L),
                    B = n(3565),
                    k = n.n(B),
                    D = n(19216),
                    O = n.n(D),
                    N = n(44589),
                    R = n.n(N),
                    T = n(30253),
                    Z = {};
                Z.styleTagTransform = R(), Z.setAttributes = k(), Z.insert = j().bind(null, "head"), Z.domAPI = P(), Z.insertStyleElement = O(), I()(T.Z, Z), T.Z && T.Z.locals && T.Z.locals;
                var M = n(51900);
                const U = (0, M.Z)(_, (function() {
                        var t = this;
                        return (0, t._self._c)("NcActionButton", {
                            staticClass: "federation-actions__btn",
                            class: {
                                "federation-actions__btn--active": t.activeScope === t.name
                            },
                            attrs: {
                                "aria-label": t.isSupportedScope ? t.tooltip : t.tooltipDisabled,
                                "close-after-click": !0,
                                disabled: !t.isSupportedScope,
                                icon: t.iconClass,
                                title: t.displayName
                            },
                            on: {
                                click: function(e) {
                                    return e.stopPropagation(), e.preventDefault(), t.updateScope.apply(null, arguments)
                                }
                            }
                        }, [t._v("\n\t" + t._s(t.isSupportedScope ? t.tooltip : t.tooltipDisabled) + "\n")])
                    }), [], !1, null, "2ef553c8", null).exports,
                    F = Object.freeze({
                        ADDRESS: "address",
                        AVATAR: "avatar",
                        BIOGRAPHY: "biography",
                        DISPLAYNAME: "displayname",
                        EMAIL_COLLECTION: "additional_mail",
                        EMAIL: "email",
                        HEADLINE: "headline",
                        NOTIFICATION_EMAIL: "notify_email",
                        FEDIVERSE: "fediverse",
                        ORGANISATION: "organisation",
                        PHONE: "phone",
                        PROFILE_ENABLED: "profile_enabled",
                        ROLE: "role",
                        TWITTER: "twitter",
                        WEBSITE: "website"
                    }),
                    z = Object.freeze({
                        ADDRESS: (0, r.Iu)("settings", "Location"),
                        AVATAR: (0, r.Iu)("settings", "Profile picture"),
                        BIOGRAPHY: (0, r.Iu)("settings", "About"),
                        DISPLAYNAME: (0, r.Iu)("settings", "Full name"),
                        EMAIL_COLLECTION: (0, r.Iu)("settings", "Additional email"),
                        EMAIL: (0, r.Iu)("settings", "Email"),
                        HEADLINE: (0, r.Iu)("settings", "Headline"),
                        ORGANISATION: (0, r.Iu)("settings", "Organisation"),
                        PHONE: (0, r.Iu)("settings", "Phone number"),
                        PROFILE_ENABLED: (0, r.Iu)("settings", "Profile"),
                        ROLE: (0, r.Iu)("settings", "Role"),
                        TWITTER: (0, r.Iu)("settings", "Twitter"),
                        FEDIVERSE: (0, r.Iu)("settings", "Fediverse (e.g. Mastodon)"),
                        WEBSITE: (0, r.Iu)("settings", "Website")
                    }),
                    V = Object.freeze({
                        [F.ADDRESS]: z.ADDRESS,
                        [F.AVATAR]: z.AVATAR,
                        [F.BIOGRAPHY]: z.BIOGRAPHY,
                        [F.DISPLAYNAME]: z.DISPLAYNAME,
                        [F.EMAIL_COLLECTION]: z.EMAIL_COLLECTION,
                        [F.EMAIL]: z.EMAIL,
                        [F.HEADLINE]: z.HEADLINE,
                        [F.ORGANISATION]: z.ORGANISATION,
                        [F.PHONE]: z.PHONE,
                        [F.PROFILE_ENABLED]: z.PROFILE_ENABLED,
                        [F.ROLE]: z.ROLE,
                        [F.TWITTER]: z.TWITTER,
                        [F.FEDIVERSE]: z.FEDIVERSE,
                        [F.WEBSITE]: z.WEBSITE
                    }),
                    H = Object.freeze({
                        PROFILE_VISIBILITY: (0, r.Iu)("settings", "Profile visibility")
                    }),
                    G = Object.freeze({
                        [z.ADDRESS]: F.ADDRESS,
                        [z.AVATAR]: F.AVATAR,
                        [z.BIOGRAPHY]: F.BIOGRAPHY,
                        [z.DISPLAYNAME]: F.DISPLAYNAME,
                        [z.EMAIL_COLLECTION]: F.EMAIL_COLLECTION,
                        [z.EMAIL]: F.EMAIL,
                        [z.HEADLINE]: F.HEADLINE,
                        [z.ORGANISATION]: F.ORGANISATION,
                        [z.PHONE]: F.PHONE,
                        [z.PROFILE_ENABLED]: F.PROFILE_ENABLED,
                        [z.ROLE]: F.ROLE,
                        [z.TWITTER]: F.TWITTER,
                        [z.FEDIVERSE]: F.FEDIVERSE,
                        [z.WEBSITE]: F.WEBSITE
                    }),
                    q = Object.freeze({
                        LANGUAGE: "language",
                        LOCALE: "locale"
                    }),
                    Y = Object.freeze({
                        LANGUAGE: (0, r.Iu)("settings", "Language"),
                        LOCALE: (0, r.Iu)("settings", "Locale")
                    }),
                    $ = Object.freeze({
                        PRIVATE: "v2-private",
                        LOCAL: "v2-local",
                        FEDERATED: "v2-federated",
                        PUBLISHED: "v2-published"
                    }),
                    W = Object.freeze({
                        [z.ADDRESS]: [$.LOCAL, $.PRIVATE],
                        [z.AVATAR]: [$.LOCAL, $.PRIVATE],
                        [z.BIOGRAPHY]: [$.LOCAL, $.PRIVATE],
                        [z.DISPLAYNAME]: [$.LOCAL],
                        [z.EMAIL_COLLECTION]: [$.LOCAL],
                        [z.EMAIL]: [$.LOCAL],
                        [z.HEADLINE]: [$.LOCAL, $.PRIVATE],
                        [z.ORGANISATION]: [$.LOCAL, $.PRIVATE],
                        [z.PHONE]: [$.LOCAL, $.PRIVATE],
                        [z.PROFILE_ENABLED]: [$.LOCAL, $.PRIVATE],
                        [z.ROLE]: [$.LOCAL, $.PRIVATE],
                        [z.TWITTER]: [$.LOCAL, $.PRIVATE],
                        [z.FEDIVERSE]: [$.LOCAL, $.PRIVATE],
                        [z.WEBSITE]: [$.LOCAL, $.PRIVATE]
                    }),
                    K = Object.freeze([z.BIOGRAPHY, z.HEADLINE, z.ORGANISATION, z.ROLE]),
                    Q = "Scope",
                    J = Object.freeze({
                        [$.PRIVATE]: {
                            name: $.PRIVATE,
                            displayName: (0, r.Iu)("settings", "Private"),
                            tooltip: (0, r.Iu)("settings", "Only visible to people matched via phone number integration through Talk on mobile"),
                            tooltipDisabled: (0, r.Iu)("settings", "Not available as this property is required for core functionality including file sharing and calendar invitations"),
                            iconClass: "icon-phone"
                        },
                        [$.LOCAL]: {
                            name: $.LOCAL,
                            displayName: (0, r.Iu)("settings", "Local"),
                            tooltip: (0, r.Iu)("settings", "Only visible to people on this instance and guests"),
                            iconClass: "icon-password"
                        },
                        [$.FEDERATED]: {
                            name: $.FEDERATED,
                            displayName: (0, r.Iu)("settings", "Federated"),
                            tooltip: (0, r.Iu)("settings", "Only synchronize to trusted servers"),
                            tooltipDisabled: (0, r.Iu)("settings", "Not available as federation has been disabled for your account, contact your system administrator if you have any questions"),
                            iconClass: "icon-contacts-dark"
                        },
                        [$.PUBLISHED]: {
                            name: $.PUBLISHED,
                            displayName: (0, r.Iu)("settings", "Published"),
                            tooltip: (0, r.Iu)("settings", "Synchronize to trusted servers and the global and public address book"),
                            tooltipDisabled: (0, r.Iu)("settings", "Not available as publishing user specific data to the lookup server is not allowed, contact your system administrator if you have any questions"),
                            iconClass: "icon-link"
                        }
                    }),
                    X = $.LOCAL,
                    tt = Object.freeze({
                        NOT_VERIFIED: 0,
                        VERIFICATION_IN_PROGRESS: 1,
                        VERIFIED: 2
                    }),
                    et = /^(?!(?:(?:\x22?\x5C[\x00-\x7E]\x22?)|(?:\x22?[^\x5C\x22]\x22?)){255,})(?!(?:(?:\x22?\x5C[\x00-\x7E]\x22?)|(?:\x22?[^\x5C\x22]\x22?)){65,}@)(?:(?:[\x21\x23-\x27\x2A\x2B\x2D\x2F-\x39\x3D\x3F\x5E-\x7E]+)|(?:\x22(?:[\x01-\x08\x0B\x0C\x0E-\x1F\x21\x23-\x5B\x5D-\x7F]|(?:\x5C[\x00-\x7F]))*\x22))(?:\.(?:(?:[\x21\x23-\x27\x2A\x2B\x2D\x2F-\x39\x3D\x3F\x5E-\x7E]+)|(?:\x22(?:[\x01-\x08\x0B\x0C\x0E-\x1F\x21\x23-\x5B\x5D-\x7F]|(?:\x5C[\x00-\x7F]))*\x22)))*@(?:(?:(?!.*[^.]{64,})(?:(?:(?:xn--)?[a-z0-9]+(?:-+[a-z0-9]+)*\.){1,126}){1,}(?:(?:[a-z][a-z0-9]*)|(?:(?:xn--)[a-z0-9]+))(?:-+[a-z0-9]+)*)|(?:\[(?:(?:IPv6:(?:(?:[a-f0-9]{1,4}(?::[a-f0-9]{1,4}){7})|(?:(?!(?:.*[a-f0-9][:\]]){7,})(?:[a-f0-9]{1,4}(?::[a-f0-9]{1,4}){0,5})?::(?:[a-f0-9]{1,4}(?::[a-f0-9]{1,4}){0,5})?)))|(?:(?:IPv6:(?:(?:[a-f0-9]{1,4}(?::[a-f0-9]{1,4}){5}:)|(?:(?!(?:.*[a-f0-9]:){5,})(?:[a-f0-9]{1,4}(?::[a-f0-9]{1,4}){0,3})?::(?:[a-f0-9]{1,4}(?::[a-f0-9]{1,4}){0,3}:)?)))?(?:(?:25[0-5])|(?:2[0-4][0-9])|(?:1[0-9]{2})|(?:[1-9]?[0-9]))(?:\.(?:(?:25[0-5])|(?:2[0-4][0-9])|(?:1[0-9]{2})|(?:[1-9]?[0-9]))){3}))\]))$/i;
                var at = n(10128);
                n(65509);
                const nt = async (t, e) => {
                    "boolean" == typeof e && (e = e ? "1" : "0");
                    const a = (0, o.ts)().uid,
                        n = (0, d.generateOcsUrl)("cloud/users/{userId}", {
                            userId: a
                        });
                    return await (0, at.confirmPassword)(), (await l.default.put(n, {
                        key: t,
                        value: e
                    })).data
                }, it = (0, n(17499).IY)().setApp("settings").detectUser().build(), ot = (t, e) => {
                    var a;
                    let n = "";
                    e && (n += e), 429 === (null === (a = t.response) || void 0 === a ? void 0 : a.status) && (n && (n += "\n"), n += (0, r.Iu)("settings", "There were too many requests from your network. Retry later or contact your administrator if this is an error.")), (0, c.x2)(n), it.error(n || (0, r.Iu)("Error"), t)
                }, {
                    federationEnabled: st,
                    lookupServerUploadEnabled: rt
                } = (0, s.j)("settings", "accountParameters", {}), lt = {
                    name: "FederationControl",
                    components: {
                        NcActions: x(),
                        FederationControlAction: U
                    },
                    props: {
                        readable: {
                            type: String,
                            required: !0,
                            validator: t => Object.values(z).includes(t) || Object.values(Y).includes(t) || t === H.PROFILE_VISIBILITY
                        },
                        additional: {
                            type: Boolean,
                            default: !1
                        },
                        additionalValue: {
                            type: String,
                            default: ""
                        },
                        disabled: {
                            type: Boolean,
                            default: !1
                        },
                        handleAdditionalScopeChange: {
                            type: Function,
                            default: null
                        },
                        scope: {
                            type: String,
                            required: !0
                        }
                    },
                    data() {
                        return {
                            readableLowerCase: this.readable.toLocaleLowerCase(),
                            initialScope: this.scope
                        }
                    },
                    computed: {
                        ariaLabel() {
                            return t("settings", "Change scope level of {property}, current scope is {scope}", {
                                property: this.readableLowerCase,
                                scope: this.scopeDisplayNameLowerCase
                            })
                        },
                        scopeDisplayNameLowerCase() {
                            return J[this.scope].displayName.toLocaleLowerCase()
                        },
                        scopeIcon() {
                            return J[this.scope].iconClass
                        },
                        federationScopes: () => Object.values(J),
                        supportedScopes() {
                            const t = W[this.readable];
                            return K.includes(this.readable) || (st && t.push($.FEDERATED), rt && t.push($.PUBLISHED)), t
                        }
                    },
                    methods: {
                        async changeScope(t) {
                            this.$emit("update:scope", t), this.additional ? await this.updateAdditionalScope(t) : await this.updatePrimaryScope(t)
                        },
                        async updatePrimaryScope(e) {
                            try {
                                var a, n;
                                const t = await (async (t, e) => {
                                    const a = (0, o.ts)().uid,
                                        n = (0, d.generateOcsUrl)("cloud/users/{userId}", {
                                            userId: a
                                        });
                                    return await (0, at.confirmPassword)(), (await l.default.put(n, {
                                        key: "".concat(t).concat(Q),
                                        value: e
                                    })).data
                                })(G[this.readable], e);
                                this.handleResponse({
                                    scope: e,
                                    status: null === (a = t.ocs) || void 0 === a || null === (n = a.meta) || void 0 === n ? void 0 : n.status
                                })
                            } catch (e) {
                                this.handleResponse({
                                    errorMessage: t("settings", "Unable to update federation scope of the primary {property}", {
                                        property: this.readableLowerCase
                                    }),
                                    error: e
                                })
                            }
                        },
                        async updateAdditionalScope(e) {
                            try {
                                var a, n;
                                const t = await this.handleAdditionalScopeChange(this.additionalValue, e);
                                this.handleResponse({
                                    scope: e,
                                    status: null === (a = t.ocs) || void 0 === a || null === (n = a.meta) || void 0 === n ? void 0 : n.status
                                })
                            } catch (e) {
                                this.handleResponse({
                                    errorMessage: t("settings", "Unable to update federation scope of additional {property}", {
                                        property: this.readableLowerCase
                                    }),
                                    error: e
                                })
                            }
                        },
                        handleResponse(t) {
                            let {
                                scope: e,
                                status: a,
                                errorMessage: n,
                                error: i
                            } = t;
                            "ok" === a ? this.initialScope = e : (this.$emit("update:scope", this.initialScope), ot(i, n))
                        }
                    }
                }, dt = lt;
                var ct = n(14036),
                    pt = {};
                pt.styleTagTransform = R(), pt.setAttributes = k(), pt.insert = j().bind(null, "head"), pt.domAPI = P(), pt.insertStyleElement = O(), I()(ct.Z, pt), ct.Z && ct.Z.locals && ct.Z.locals;
                const At = (0, M.Z)(dt, (function() {
                        var t = this,
                            e = t._self._c;
                        return e("NcActions", {
                            class: {
                                "federation-actions": !t.additional,
                                "federation-actions--additional": t.additional
                            },
                            attrs: {
                                "aria-label": t.ariaLabel,
                                "default-icon": t.scopeIcon,
                                disabled: t.disabled
                            }
                        }, t._l(t.federationScopes, (function(a) {
                            return e("FederationControlAction", {
                                key: a.name,
                                attrs: {
                                    "active-scope": t.scope,
                                    "display-name": a.displayName,
                                    "handle-scope-change": t.changeScope,
                                    "icon-class": a.iconClass,
                                    "is-supported-scope": t.supportedScopes.includes(a.name),
                                    name: a.name,
                                    "tooltip-disabled": a.tooltipDisabled,
                                    tooltip: a.tooltip,
                                    "aria-label": a.tooltip
                                }
                            })
                        })), 1)
                    }), [], !1, null, "4ea07669", null).exports,
                    ut = {
                        name: "HeaderBar",
                        components: {
                            FederationControl: At,
                            NcButton: h(),
                            Plus: y.Z
                        },
                        props: {
                            scope: {
                                type: String,
                                default: null
                            },
                            readable: {
                                type: String,
                                required: !0
                            },
                            inputId: {
                                type: String,
                                default: null
                            },
                            isEditable: {
                                type: Boolean,
                                default: !0
                            },
                            isMultiValueSupported: {
                                type: Boolean,
                                default: !1
                            },
                            isValidSection: {
                                type: Boolean,
                                default: !0
                            },
                            isHeading: {
                                type: Boolean,
                                default: !1
                            }
                        },
                        data() {
                            return {
                                localScope: this.scope
                            }
                        },
                        computed: {
                            isProfileProperty() {
                                return this.readable === z.PROFILE_ENABLED
                            },
                            isSettingProperty() {
                                return !Object.values(z).includes(this.readable) && !Object.values(H).includes(this.readable)
                            }
                        },
                        methods: {
                            onAddAdditional() {
                                this.$emit("add-additional")
                            },
                            onScopeChange(t) {
                                this.$emit("update:scope", t)
                            }
                        }
                    };
                var mt = n(90564),
                    ht = {};
                ht.styleTagTransform = R(), ht.setAttributes = k(), ht.insert = j().bind(null, "head"), ht.domAPI = P(), ht.insertStyleElement = O(), I()(mt.Z, ht), mt.Z && mt.Z.locals && mt.Z.locals;
                const gt = (0, M.Z)(ut, (function() {
                        var t = this,
                            e = t._self._c;
                        return e(t.isHeading ? "h3" : "div", {
                            tag: "component",
                            staticClass: "headerbar-label",
                            class: {
                                "setting-property": t.isSettingProperty,
                                "profile-property": t.isProfileProperty
                            }
                        }, [t.isHeading ? e("span", [t._v("\n\t\t" + t._s(t.readable) + "\n\t")]) : e("label", {
                            attrs: {
                                for: t.inputId
                            }
                        }, [t._v("\n\t\t" + t._s(t.readable) + "\n\t")]), t._v(" "), t.scope ? [e("FederationControl", {
                            staticClass: "federation-control",
                            attrs: {
                                readable: t.readable,
                                scope: t.localScope
                            },
                            on: {
                                "update:scope": [function(e) {
                                    t.localScope = e
                                }, t.onScopeChange]
                            }
                        })] : t._e(), t._v(" "), t.isEditable && t.isMultiValueSupported ? [e("NcButton", {
                            attrs: {
                                type: "tertiary",
                                disabled: !t.isValidSection,
                                "aria-label": t.t("settings", "Add additional email")
                            },
                            on: {
                                click: function(e) {
                                    return e.stopPropagation(), e.preventDefault(), t.onAddAdditional.apply(null, arguments)
                                }
                            },
                            scopedSlots: t._u([{
                                key: "icon",
                                fn: function() {
                                    return [e("Plus", {
                                        attrs: {
                                            size: 20
                                        }
                                    })]
                                },
                                proxy: !0
                            }], null, !1, 32235154)
                        }, [t._v("\n\t\t\t" + t._s(t.t("settings", "Add")) + "\n\t\t")])] : t._e()], 2)
                    }), [], !1, null, "b43fcc0c", null).exports,
                    {
                        avatar: vt
                    } = (0, s.j)("settings", "personalInfoParameters", {}),
                    {
                        avatarChangeSupported: Ct
                    } = (0, s.j)("settings", "accountParameters", {}),
                    ft = ["image/png", "image/jpeg"],
                    yt = (0, c.fn)(t("settings", "Choose your profile picture")).setMultiSelect(!1).setMimeTypeFilter(ft).setModal(!0).setType(1).allowDirectories(!1).build(),
                    bt = {
                        name: "AvatarSection",
                        components: {
                            Delete: f.Z,
                            Folder: C.default,
                            HeaderBar: gt,
                            NcAvatar: u(),
                            NcButton: h(),
                            Upload: v.Z,
                            VueCropper: g.Z
                        },
                        data: () => ({
                            avatar: {
                                ...vt,
                                readable: V[vt.name]
                            },
                            avatarChangeSupported: Ct,
                            showCropper: !1,
                            loading: !1,
                            userId: (0, o.ts)().uid,
                            displayName: (0, o.ts)().displayName,
                            version: oc_userconfig.avatar.version,
                            isGenerated: oc_userconfig.avatar.generated,
                            validMimeTypes: ft,
                            cropperOptions: {
                                aspectRatio: 1,
                                viewMode: 1,
                                guides: !1,
                                center: !1,
                                highlight: !1,
                                autoCropArea: 1,
                                minContainerWidth: 300,
                                minContainerHeight: 300
                            }
                        }),
                        computed: {
                            inputId() {
                                return "account-property-".concat(this.avatar.name)
                            }
                        },
                        created() {
                            (0, p.Ld)("settings:display-name:updated", this.handleDisplayNameUpdate)
                        },
                        beforeDestroy() {
                            (0, p.r1)("settings:display-name:updated", this.handleDisplayNameUpdate)
                        },
                        methods: {
                            activateLocalFilePicker() {
                                this.$refs.input.value = null, this.$refs.input.click()
                            },
                            onChange(e) {
                                this.loading = !0;
                                const a = e.target.files[0];
                                if (!this.validMimeTypes.includes(a.type)) return (0, c.x2)(t("settings", "Please select a valid png or jpg file")), void this.cancel();
                                const n = new FileReader;
                                n.onload = t => {
                                    this.$refs.cropper.replace(t.target.result), this.showCropper = !0
                                }, n.readAsDataURL(a)
                            },
                            async openFilePicker() {
                                const e = await yt.pick();
                                this.loading = !0;
                                try {
                                    const {
                                        data: t
                                    } = await l.default.post((0, d.generateUrl)("/avatar"), {
                                        path: e
                                    });
                                    if ("success" === t.status) this.handleAvatarUpdate(!1);
                                    else if ("notsquare" === t.data) {
                                        const t = (0, d.generateUrl)("/avatar/tmp") + "?requesttoken=" + encodeURIComponent(OC.requestToken) + "#" + Math.floor(1e3 * Math.random());
                                        this.$refs.cropper.replace(t), this.showCropper = !0
                                    } else(0, c.x2)(t.data.message), this.cancel()
                                } catch (e) {
                                    (0, c.x2)(t("settings", "Error setting profile picture")), this.cancel()
                                }
                            },
                            saveAvatar() {
                                this.showCropper = !1, this.loading = !0;
                                const e = this.$refs.cropper.getCroppedCanvas(),
                                    a = e.width > 512 ? 512 / e.width : 1;
                                this.$refs.cropper.scale(a, a).getCroppedCanvas().toBlob((async e => {
                                    if (null === e) return (0, c.x2)(t("settings", "Error cropping profile picture")), void this.cancel();
                                    const a = new FormData;
                                    a.append("files[]", e);
                                    try {
                                        await l.default.post((0, d.generateUrl)("/avatar"), a), this.handleAvatarUpdate(!1)
                                    } catch (e) {
                                        (0, c.x2)(t("settings", "Error saving profile picture")), this.handleAvatarUpdate(this.isGenerated)
                                    }
                                }))
                            },
                            async removeAvatar() {
                                this.loading = !0;
                                try {
                                    await l.default.delete((0, d.generateUrl)("/avatar")), this.handleAvatarUpdate(!0)
                                } catch (e) {
                                    (0, c.x2)(t("settings", "Error removing profile picture")), this.handleAvatarUpdate(this.isGenerated)
                                }
                            },
                            cancel() {
                                this.showCropper = !1, this.loading = !1
                            },
                            handleAvatarUpdate(t) {
                                this.version = oc_userconfig.avatar.version = Date.now(), this.isGenerated = oc_userconfig.avatar.generated = t, this.loading = !1, (0, p.j8)("settings:avatar:updated", oc_userconfig.avatar.version)
                            },
                            handleDisplayNameUpdate() {
                                this.version = oc_userconfig.avatar.version
                            }
                        }
                    };
                var xt = n(31246),
                    Et = {};
                Et.styleTagTransform = R(), Et.setAttributes = k(), Et.insert = j().bind(null, "head"), Et.domAPI = P(), Et.insertStyleElement = O(), I()(xt.Z, Et), xt.Z && xt.Z.locals && xt.Z.locals;
                const _t = (0, M.Z)(bt, (function() {
                    var t = this,
                        e = t._self._c;
                    return e("section", {
                        attrs: {
                            id: "vue-avatar-section"
                        }
                    }, [e("h3", {
                        staticClass: "hidden-visually"
                    }, [t._v(" " + t._s(t.t("settings", "Your profile information")) + " ")]), t._v(" "), e("HeaderBar", {
                        attrs: {
                            "input-id": t.avatarChangeSupported ? t.inputId : null,
                            readable: t.avatar.readable,
                            scope: t.avatar.scope
                        },
                        on: {
                            "update:scope": function(e) {
                                return t.$set(t.avatar, "scope", e)
                            }
                        }
                    }), t._v(" "), t.showCropper ? t._e() : e("div", {
                        staticClass: "avatar__container"
                    }, [e("div", {
                        staticClass: "avatar__preview"
                    }, [t.loading ? e("div", {
                        staticClass: "icon-loading"
                    }) : e("NcAvatar", {
                        key: t.version,
                        attrs: {
                            user: t.userId,
                            "aria-label": t.t("settings", "Your profile picture"),
                            "disabled-menu": !0,
                            "disabled-tooltip": !0,
                            "show-user-status": !1,
                            size: 180
                        }
                    })], 1), t._v(" "), t.avatarChangeSupported ? [e("div", {
                        staticClass: "avatar__buttons"
                    }, [e("NcButton", {
                        attrs: {
                            "aria-label": t.t("settings", "Upload profile picture")
                        },
                        on: {
                            click: t.activateLocalFilePicker
                        },
                        scopedSlots: t._u([{
                            key: "icon",
                            fn: function() {
                                return [e("Upload", {
                                    attrs: {
                                        size: 20
                                    }
                                })]
                            },
                            proxy: !0
                        }], null, !1, 1329850251)
                    }), t._v(" "), e("NcButton", {
                        attrs: {
                            "aria-label": t.t("settings", "Choose profile picture from Files")
                        },
                        on: {
                            click: t.openFilePicker
                        },
                        scopedSlots: t._u([{
                            key: "icon",
                            fn: function() {
                                return [e("Folder", {
                                    attrs: {
                                        size: 20
                                    }
                                })]
                            },
                            proxy: !0
                        }], null, !1, 4270628382)
                    }), t._v(" "), t.isGenerated ? t._e() : e("NcButton", {
                        attrs: {
                            "aria-label": t.t("settings", "Remove profile picture")
                        },
                        on: {
                            click: t.removeAvatar
                        },
                        scopedSlots: t._u([{
                            key: "icon",
                            fn: function() {
                                return [e("Delete", {
                                    attrs: {
                                        size: 20
                                    }
                                })]
                            },
                            proxy: !0
                        }], null, !1, 2705356561)
                    })], 1), t._v(" "), e("span", [t._v(t._s(t.t("settings", "The file must be a PNG or JPG")))]), t._v(" "), e("input", {
                        ref: "input",
                        attrs: {
                            id: t.inputId,
                            type: "file",
                            accept: t.validMimeTypes.join(",")
                        },
                        on: {
                            change: t.onChange
                        }
                    })] : e("span", [t._v("\n\t\t\t" + t._s(t.t("settings", "Picture provided by original account")) + "\n\t\t")])], 2), t._v(" "), e("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: t.showCropper,
                            expression: "showCropper"
                        }],
                        staticClass: "avatar__container"
                    }, [e("VueCropper", t._b({
                        ref: "cropper",
                        staticClass: "avatar__cropper"
                    }, "VueCropper", t.cropperOptions, !1)), t._v(" "), e("div", {
                        staticClass: "avatar__cropper-buttons"
                    }, [e("NcButton", {
                        on: {
                            click: t.cancel
                        }
                    }, [t._v("\n\t\t\t\t" + t._s(t.t("settings", "Cancel")) + "\n\t\t\t")]), t._v(" "), e("NcButton", {
                        attrs: {
                            type: "primary"
                        },
                        on: {
                            click: t.saveAvatar
                        }
                    }, [t._v("\n\t\t\t\t" + t._s(t.t("settings", "Set as profile picture")) + "\n\t\t\t")])], 1), t._v(" "), e("span", [t._v(t._s(t.t("settings", "Please note that it can take up to 24 hours for your profile picture to be updated everywhere.")))])], 1)], 1)
                }), [], !1, null, "022fd5d4", null).exports;
                var wt = n(48959),
                    It = n.n(wt),
                    St = n(86158),
                    Pt = n(34046);
                const {
                    groups: Lt,
                    quota: jt,
                    totalSpace: Bt,
                    usage: kt,
                    usageRelative: Dt
                } = (0, s.j)("settings", "personalInfoParameters", {}), Ot = {
                    name: "DetailsSection",
                    components: {
                        Account: St.Z,
                        CircleSlice: Pt.Z,
                        HeaderBar: gt,
                        NcProgressBar: It()
                    },
                    computed: {
                        quotaText: () => -3 === jt ? t("settings", "You are using <strong>{usage}</strong>", {
                            usage: kt
                        }) : t("settings", "You are using <strong>{usage}</strong> of <strong>{totalSpace}</strong> (<strong>{usageRelative}%</strong>)", {
                            usage: kt,
                            totalSpace: Bt,
                            usageRelative: Dt
                        })
                    },
                    data: () => ({
                        groups: Lt,
                        usageRelative: Dt
                    })
                };
                var Nt = n(18118),
                    Rt = {};
                Rt.styleTagTransform = R(), Rt.setAttributes = k(), Rt.insert = j().bind(null, "head"), Rt.domAPI = P(), Rt.insertStyleElement = O(), I()(Nt.Z, Rt), Nt.Z && Nt.Z.locals && Nt.Z.locals;
                const Tt = (0, M.Z)(Ot, (function() {
                    var t = this,
                        e = t._self._c;
                    return e("section", [e("HeaderBar", {
                        attrs: {
                            "is-heading": !0,
                            readable: t.t("settings", "Details")
                        }
                    }), t._v(" "), e("div", {
                        staticClass: "details"
                    }, [e("div", {
                        staticClass: "details__groups"
                    }, [e("Account", {
                        attrs: {
                            size: 20
                        }
                    }), t._v(" "), e("div", {
                        staticClass: "details__groups-info"
                    }, [e("p", [t._v(t._s(t.t("settings", "You are a member of the following groups:")))]), t._v(" "), e("p", {
                        staticClass: "details__groups-list"
                    }, [t._v(t._s(t.groups.join(", ")))])])], 1), t._v(" "), e("div", {
                        staticClass: "details__quota"
                    }, [e("CircleSlice", {
                        attrs: {
                            size: 20
                        }
                    }), t._v(" "), e("div", {
                        staticClass: "details__quota-info"
                    }, [e("p", {
                        staticClass: "details__quota-text",
                        domProps: {
                            innerHTML: t._s(t.quotaText)
                        }
                    }), t._v(" "), e("NcProgressBar", {
                        attrs: {
                            size: "medium",
                            value: t.usageRelative,
                            error: t.usageRelative > 80
                        }
                    })], 1)], 1)])], 1)
                }), [], !1, null, "1ab46e68", null).exports;
                var Zt = n(20296),
                    Mt = n.n(Zt),
                    Ut = n(94603),
                    Ft = n(31974),
                    zt = n(80419);
                const Vt = {
                    name: "AccountPropertySection",
                    components: {
                        AlertCircle: Ut.default,
                        AlertOctagon: Ft.Z,
                        Check: zt.default,
                        HeaderBar: gt
                    },
                    props: {
                        name: {
                            type: String,
                            required: !0
                        },
                        value: {
                            type: String,
                            required: !0
                        },
                        scope: {
                            type: String,
                            required: !0
                        },
                        readable: {
                            type: String,
                            required: !0
                        },
                        placeholder: {
                            type: String,
                            required: !0
                        },
                        type: {
                            type: String,
                            default: "text"
                        },
                        isEditable: {
                            type: Boolean,
                            default: !0
                        },
                        multiLine: {
                            type: Boolean,
                            default: !1
                        },
                        onValidate: {
                            type: Function,
                            default: null
                        },
                        onSave: {
                            type: Function,
                            default: null
                        },
                        autocomplete: {
                            type: String,
                            default: null
                        }
                    },
                    data() {
                        return {
                            initialValue: this.value,
                            helperText: null,
                            showCheckmarkIcon: !1,
                            showErrorIcon: !1
                        }
                    },
                    computed: {
                        inputId() {
                            return "account-property-".concat(this.name)
                        }
                    },
                    methods: {
                        onPropertyChange(t) {
                            this.$emit("update:value", t.target.value), this.debouncePropertyChange(t.target.value.trim())
                        },
                        debouncePropertyChange: Mt()((async function(t) {
                            this.helperText = null, this.$refs.input && this.$refs.input.validationMessage ? this.helperText = this.$refs.input.validationMessage : this.onValidate && !this.onValidate(t) || await this.updateProperty(t)
                        }), 500),
                        async updateProperty(e) {
                            try {
                                var a, n;
                                const t = await nt(this.name, e);
                                this.handleResponse({
                                    value: e,
                                    status: null === (a = t.ocs) || void 0 === a || null === (n = a.meta) || void 0 === n ? void 0 : n.status
                                })
                            } catch (e) {
                                this.handleResponse({
                                    errorMessage: t("settings", "Unable to update {property}", {
                                        property: this.readable.toLocaleLowerCase()
                                    }),
                                    error: e
                                })
                            }
                        },
                        handleResponse(t) {
                            let {
                                value: e,
                                status: a,
                                errorMessage: n,
                                error: i
                            } = t;
                            "ok" === a ? (this.initialValue = e, this.onSave && this.onSave(e), this.showCheckmarkIcon = !0, setTimeout((() => {
                                this.showCheckmarkIcon = !1
                            }), 2e3)) : (this.$emit("update:value", this.initialValue), ot(i, n), this.showErrorIcon = !0, setTimeout((() => {
                                this.showErrorIcon = !1
                            }), 2e3))
                        }
                    }
                };
                var Ht = n(49237),
                    Gt = {};
                Gt.styleTagTransform = R(), Gt.setAttributes = k(), Gt.insert = j().bind(null, "head"), Gt.domAPI = P(), Gt.insertStyleElement = O(), I()(Ht.Z, Gt), Ht.Z && Ht.Z.locals && Ht.Z.locals;
                const qt = (0, M.Z)(Vt, (function() {
                        var t = this,
                            e = t._self._c;
                        return e("section", [e("HeaderBar", {
                            attrs: {
                                scope: t.scope,
                                readable: t.readable,
                                "input-id": t.inputId,
                                "is-editable": t.isEditable
                            },
                            on: {
                                "update:scope": function(e) {
                                    t.scope = e
                                },
                                "update:readable": function(e) {
                                    t.readable = e
                                }
                            }
                        }), t._v(" "), t.isEditable ? e("div", {
                            staticClass: "property"
                        }, [t.multiLine ? e("textarea", {
                            attrs: {
                                id: t.inputId,
                                placeholder: t.placeholder,
                                rows: "8",
                                autocapitalize: "none",
                                autocomplete: "off",
                                autocorrect: "off"
                            },
                            domProps: {
                                value: t.value
                            },
                            on: {
                                input: t.onPropertyChange
                            }
                        }) : e("input", {
                            ref: "input",
                            attrs: {
                                id: t.inputId,
                                placeholder: t.placeholder,
                                type: t.type,
                                "aria-describedby": t.helperText ? "".concat(t.name, "-helper-text") : "",
                                autocapitalize: "none",
                                autocorrect: "off",
                                autocomplete: t.autocomplete
                            },
                            domProps: {
                                value: t.value
                            },
                            on: {
                                input: t.onPropertyChange
                            }
                        }), t._v(" "), e("div", {
                            staticClass: "property__actions-container"
                        }, [e("transition", {
                            attrs: {
                                name: "fade"
                            }
                        }, [t.showCheckmarkIcon ? e("Check", {
                            attrs: {
                                size: 20
                            }
                        }) : t.showErrorIcon ? e("AlertOctagon", {
                            attrs: {
                                size: 20
                            }
                        }) : t._e()], 1)], 1)]) : e("span", [t._v("\n\t\t" + t._s(t.value || t.t("settings", "No {property} set", {
                            property: t.readable.toLocaleLowerCase()
                        })) + "\n\t")]), t._v(" "), t.helperText ? e("p", {
                            staticClass: "property__helper-text-message property__helper-text-message--error",
                            attrs: {
                                id: "".concat(t.name, "-helper-text")
                            }
                        }, [e("AlertCircle", {
                            staticClass: "property__helper-text-message__icon",
                            attrs: {
                                size: 18
                            }
                        }), t._v("\n\t\t" + t._s(t.helperText) + "\n\t")], 1) : t._e()], 1)
                    }), [], !1, null, "400ac7dc", null).exports,
                    {
                        displayName: Yt
                    } = (0, s.j)("settings", "personalInfoParameters", {}),
                    {
                        displayNameChangeSupported: $t
                    } = (0, s.j)("settings", "accountParameters", {}),
                    Wt = {
                        name: "DisplayNameSection",
                        components: {
                            AccountPropertySection: qt
                        },
                        data: () => ({
                            displayName: {
                                ...Yt,
                                readable: V[Yt.name]
                            },
                            displayNameChangeSupported: $t
                        }),
                        methods: {
                            onValidate: t => "" !== t,
                            onSave(t) {
                                oc_userconfig.avatar.generated && (oc_userconfig.avatar.version = Date.now()), (0, p.j8)("settings:display-name:updated", t)
                            }
                        }
                    },
                    Kt = (0, M.Z)(Wt, (function() {
                        var t = this;
                        return (0, t._self._c)("AccountPropertySection", t._b({
                            attrs: {
                                placeholder: t.t("settings", "Your full name"),
                                autocomplete: "username",
                                "is-editable": t.displayNameChangeSupported,
                                "on-validate": t.onValidate,
                                "on-save": t.onSave
                            }
                        }, "AccountPropertySection", t.displayName, !1, !0))
                    }), [], !1, null, null, null).exports;
                var Qt = n(15961);
                const Jt = async t => {
                    const e = (0, o.ts)().uid,
                        a = (0, d.generateOcsUrl)("cloud/users/{userId}", {
                            userId: e
                        });
                    return await (0, at.confirmPassword)(), (await l.default.put(a, {
                        key: F.EMAIL,
                        value: t
                    })).data
                }, Xt = async t => {
                    const e = (0, o.ts)().uid,
                        a = (0, d.generateOcsUrl)("cloud/users/{userId}/{collection}", {
                            userId: e,
                            collection: F.EMAIL_COLLECTION
                        });
                    return await (0, at.confirmPassword)(), (await l.default.put(a, {
                        key: t,
                        value: ""
                    })).data
                }, te = async t => {
                    const e = (0, o.ts)().uid,
                        a = (0, d.generateOcsUrl)("cloud/users/{userId}", {
                            userId: e
                        });
                    return await (0, at.confirmPassword)(), (await l.default.put(a, {
                        key: "".concat(F.EMAIL).concat(Q),
                        value: t
                    })).data
                }, ee = async (t, e) => {
                    const a = (0, o.ts)().uid,
                        n = (0, d.generateOcsUrl)("cloud/users/{userId}/{collectionScope}", {
                            userId: a,
                            collectionScope: "".concat(F.EMAIL_COLLECTION).concat(Q)
                        });
                    return await (0, at.confirmPassword)(), (await l.default.put(n, {
                        key: t,
                        value: e
                    })).data
                };

                function ae(t) {
                    return "string" == typeof t && et.test(t) && "\n" !== t.slice(-1) && t.length <= 320 && encodeURIComponent(t).replace(/%../g, "x").length <= 320
                }
                const ne = {
                        name: "Email",
                        components: {
                            NcActions: Qt.O3,
                            NcActionButton: Qt.Js,
                            AlertCircle: Ut.default,
                            AlertOctagon: Ft.Z,
                            Check: zt.default,
                            FederationControl: At
                        },
                        props: {
                            email: {
                                type: String,
                                required: !0
                            },
                            index: {
                                type: Number,
                                default: 0
                            },
                            primary: {
                                type: Boolean,
                                default: !1
                            },
                            scope: {
                                type: String,
                                required: !0
                            },
                            activeNotificationEmail: {
                                type: String,
                                default: ""
                            },
                            localVerificationState: {
                                type: Number,
                                default: tt.NOT_VERIFIED
                            }
                        },
                        data() {
                            return {
                                propertyReadable: z.EMAIL,
                                initialEmail: this.email,
                                localScope: this.scope,
                                saveAdditionalEmailScope: ee,
                                helperText: null,
                                showCheckmarkIcon: !1,
                                showErrorIcon: !1
                            }
                        },
                        computed: {
                            deleteDisabled() {
                                return this.primary ? "" === this.email || this.initialEmail !== this.email : "" !== this.initialEmail && this.initialEmail !== this.email
                            },
                            deleteEmailLabel() {
                                return this.primary ? t("settings", "Remove primary email") : t("settings", "Delete email")
                            },
                            setNotificationMailDisabled() {
                                return !this.primary && this.localVerificationState !== tt.VERIFIED
                            },
                            setNotificationMailLabel() {
                                return this.isNotificationEmail ? t("settings", "Unset as primary email") : this.primary || this.localVerificationState === tt.VERIFIED ? t("settings", "Set as primary email") : t("settings", "This address is not confirmed")
                            },
                            federationDisabled() {
                                return !this.initialEmail
                            },
                            inputId() {
                                return this.primary ? "email" : "email-".concat(this.index)
                            },
                            inputPlaceholder() {
                                return this.primary ? t("settings", "Your email address") : t("settings", "Additional email address {index}", {
                                    index: this.index + 1
                                })
                            },
                            isNotificationEmail() {
                                return this.email && this.email === this.activeNotificationEmail || this.primary && "" === this.activeNotificationEmail
                            }
                        },
                        mounted() {
                            this.primary || "" !== this.initialEmail || this.$nextTick((() => {
                                var t;
                                return null === (t = this.$refs.email) || void 0 === t ? void 0 : t.focus()
                            }))
                        },
                        methods: {
                            onEmailChange(t) {
                                this.$emit("update:email", t.target.value), this.debounceEmailChange(t.target.value.trim())
                            },
                            debounceEmailChange: Mt()((async function(t) {
                                var e;
                                this.helperText = null, null !== (e = this.$refs.email) && void 0 !== e && e.validationMessage ? this.helperText = this.$refs.email.validationMessage : (ae(t) || "" === t) && (this.primary ? await this.updatePrimaryEmail(t) : t && ("" === this.initialEmail ? await this.addAdditionalEmail(t) : await this.updateAdditionalEmail(t)))
                            }), 500),
                            async deleteEmail() {
                                this.primary ? (this.$emit("update:email", ""), await this.updatePrimaryEmail("")) : await this.deleteAdditionalEmail()
                            },
                            async updatePrimaryEmail(e) {
                                try {
                                    var a, n;
                                    const t = await Jt(e);
                                    this.handleResponse({
                                        email: e,
                                        status: null === (a = t.ocs) || void 0 === a || null === (n = a.meta) || void 0 === n ? void 0 : n.status
                                    })
                                } catch (a) {
                                    "" === e ? this.handleResponse({
                                        errorMessage: t("settings", "Unable to delete primary email address"),
                                        error: a
                                    }) : this.handleResponse({
                                        errorMessage: t("settings", "Unable to update primary email address"),
                                        error: a
                                    })
                                }
                            },
                            async addAdditionalEmail(e) {
                                try {
                                    var a, n;
                                    const t = await (async t => {
                                        const e = (0, o.ts)().uid,
                                            a = (0, d.generateOcsUrl)("cloud/users/{userId}", {
                                                userId: e
                                            });
                                        return await (0, at.confirmPassword)(), (await l.default.put(a, {
                                            key: F.EMAIL_COLLECTION,
                                            value: t
                                        })).data
                                    })(e);
                                    this.handleResponse({
                                        email: e,
                                        status: null === (a = t.ocs) || void 0 === a || null === (n = a.meta) || void 0 === n ? void 0 : n.status
                                    })
                                } catch (e) {
                                    this.handleResponse({
                                        errorMessage: t("settings", "Unable to add additional email address"),
                                        error: e
                                    })
                                }
                            },
                            async setNotificationMail() {
                                try {
                                    var t, e;
                                    const a = this.primary || this.isNotificationEmail ? "" : this.initialEmail,
                                        n = await (async t => {
                                            const e = (0, o.ts)().uid,
                                                a = (0, d.generateOcsUrl)("cloud/users/{userId}", {
                                                    userId: e
                                                });
                                            return await (0, at.confirmPassword)(), (await l.default.put(a, {
                                                key: F.NOTIFICATION_EMAIL,
                                                value: t
                                            })).data
                                        })(a);
                                    this.handleResponse({
                                        notificationEmail: a,
                                        status: null === (t = n.ocs) || void 0 === t || null === (e = t.meta) || void 0 === e ? void 0 : e.status
                                    })
                                } catch (t) {
                                    this.handleResponse({
                                        errorMessage: "Unable to choose this email for notifications",
                                        error: t
                                    })
                                }
                            },
                            async updateAdditionalEmail(e) {
                                try {
                                    var a, n;
                                    const t = await (async (t, e) => {
                                        const a = (0, o.ts)().uid,
                                            n = (0, d.generateOcsUrl)("cloud/users/{userId}/{collection}", {
                                                userId: a,
                                                collection: F.EMAIL_COLLECTION
                                            });
                                        return await (0, at.confirmPassword)(), (await l.default.put(n, {
                                            key: t,
                                            value: e
                                        })).data
                                    })(this.initialEmail, e);
                                    this.handleResponse({
                                        email: e,
                                        status: null === (a = t.ocs) || void 0 === a || null === (n = a.meta) || void 0 === n ? void 0 : n.status
                                    })
                                } catch (e) {
                                    this.handleResponse({
                                        errorMessage: t("settings", "Unable to update additional email address"),
                                        error: e
                                    })
                                }
                            },
                            async deleteAdditionalEmail() {
                                try {
                                    var e, a;
                                    const t = await Xt(this.initialEmail);
                                    this.handleDeleteAdditionalEmail(null === (e = t.ocs) || void 0 === e || null === (a = e.meta) || void 0 === a ? void 0 : a.status)
                                } catch (e) {
                                    this.handleResponse({
                                        errorMessage: t("settings", "Unable to delete additional email address"),
                                        error: e
                                    })
                                }
                            },
                            handleDeleteAdditionalEmail(e) {
                                "ok" === e ? this.$emit("delete-additional-email") : this.handleResponse({
                                    errorMessage: t("settings", "Unable to delete additional email address")
                                })
                            },
                            handleResponse(t) {
                                let {
                                    email: e,
                                    notificationEmail: a,
                                    status: n,
                                    errorMessage: i,
                                    error: o
                                } = t;
                                "ok" === n ? (e ? this.initialEmail = e : void 0 !== a && this.$emit("update:notification-email", a), this.showCheckmarkIcon = !0, setTimeout((() => {
                                    this.showCheckmarkIcon = !1
                                }), 2e3)) : (ot(o, i), this.showErrorIcon = !0, setTimeout((() => {
                                    this.showErrorIcon = !1
                                }), 2e3))
                            },
                            onScopeChange(t) {
                                this.$emit("update:scope", t)
                            }
                        }
                    },
                    ie = ne;
                var oe = n(21395),
                    se = {};
                se.styleTagTransform = R(), se.setAttributes = k(), se.insert = j().bind(null, "head"), se.domAPI = P(), se.insertStyleElement = O(), I()(oe.Z, se), oe.Z && oe.Z.locals && oe.Z.locals;
                const re = (0, M.Z)(ie, (function() {
                        var t = this,
                            e = t._self._c;
                        return e("div", [e("div", {
                            staticClass: "email"
                        }, [e("input", {
                            ref: "email",
                            attrs: {
                                id: t.inputId,
                                type: "email",
                                autocomplete: "email",
                                placeholder: t.inputPlaceholder,
                                "aria-describedby": t.helperText ? "".concat(t.inputId, "-helper-text") : "",
                                autocapitalize: "none",
                                autocorrect: "off"
                            },
                            domProps: {
                                value: t.email
                            },
                            on: {
                                input: t.onEmailChange
                            }
                        }), t._v(" "), e("div", {
                            staticClass: "email__actions-container"
                        }, [e("transition", {
                            attrs: {
                                name: "fade"
                            }
                        }, [t.showCheckmarkIcon ? e("Check", {
                            attrs: {
                                size: 20
                            }
                        }) : t.showErrorIcon ? e("AlertOctagon", {
                            attrs: {
                                size: 20
                            }
                        }) : t._e()], 1), t._v(" "), t.primary ? t._e() : [e("FederationControl", {
                            attrs: {
                                readable: t.propertyReadable,
                                additional: !0,
                                "additional-value": t.email,
                                disabled: t.federationDisabled,
                                "handle-additional-scope-change": t.saveAdditionalEmailScope,
                                scope: t.localScope
                            },
                            on: {
                                "update:scope": [function(e) {
                                    t.localScope = e
                                }, t.onScopeChange]
                            }
                        })], t._v(" "), e("NcActions", {
                            staticClass: "email__actions",
                            attrs: {
                                "aria-label": t.t("settings", "Email options"),
                                "force-menu": !0
                            }
                        }, [e("NcActionButton", {
                            attrs: {
                                "aria-label": t.deleteEmailLabel,
                                "close-after-click": !0,
                                disabled: t.deleteDisabled,
                                icon: "icon-delete"
                            },
                            on: {
                                click: function(e) {
                                    return e.stopPropagation(), e.preventDefault(), t.deleteEmail.apply(null, arguments)
                                }
                            }
                        }, [t._v("\n\t\t\t\t\t" + t._s(t.deleteEmailLabel) + "\n\t\t\t\t")]), t._v(" "), t.primary && t.isNotificationEmail ? t._e() : e("NcActionButton", {
                            attrs: {
                                "aria-label": t.setNotificationMailLabel,
                                "close-after-click": !0,
                                disabled: t.setNotificationMailDisabled,
                                icon: "icon-favorite"
                            },
                            on: {
                                click: function(e) {
                                    return e.stopPropagation(), e.preventDefault(), t.setNotificationMail.apply(null, arguments)
                                }
                            }
                        }, [t._v("\n\t\t\t\t\t" + t._s(t.setNotificationMailLabel) + "\n\t\t\t\t")])], 1)], 2)]), t._v(" "), t.helperText ? e("p", {
                            staticClass: "email__helper-text-message email__helper-text-message--error",
                            attrs: {
                                id: "".concat(t.inputId, "-helper-text")
                            }
                        }, [e("AlertCircle", {
                            staticClass: "email__helper-text-message__icon",
                            attrs: {
                                size: 18
                            }
                        }), t._v("\n\t\t" + t._s(t.helperText) + "\n\t")], 1) : t._e(), t._v(" "), t.isNotificationEmail ? e("em", [t._v("\n\t\t" + t._s(t.t("settings", "Primary email for password reset and notifications")) + "\n\t")]) : t._e()])
                    }), [], !1, null, "3b4a1ecf", null).exports,
                    {
                        emailMap: {
                            additionalEmails: le,
                            primaryEmail: de,
                            notificationEmail: ce
                        }
                    } = (0, s.j)("settings", "personalInfoParameters", {}),
                    {
                        displayNameChangeSupported: pe
                    } = (0, s.j)("settings", "accountParameters", {}),
                    Ae = {
                        name: "EmailSection",
                        components: {
                            HeaderBar: gt,
                            Email: re
                        },
                        data() {
                            return {
                                accountProperty: z.EMAIL,
                                additionalEmails: le.map((t => ({
                                    ...t,
                                    key: this.generateUniqueKey()
                                }))),
                                displayNameChangeSupported: pe,
                                primaryEmail: {
                                    ...de,
                                    readable: V[de.name]
                                },
                                savePrimaryEmailScope: te,
                                notificationEmail: ce
                            }
                        },
                        computed: {
                            firstAdditionalEmail() {
                                return this.additionalEmails.length ? this.additionalEmails[0].value : null
                            },
                            inputId() {
                                return "account-property-".concat(this.primaryEmail.name)
                            },
                            isValidSection() {
                                return ae(this.primaryEmail.value) && this.additionalEmails.map((t => {
                                    let {
                                        value: e
                                    } = t;
                                    return e
                                })).every(ae)
                            },
                            primaryEmailValue: {
                                get() {
                                    return this.primaryEmail.value
                                },
                                set(t) {
                                    this.primaryEmail.value = t
                                }
                            }
                        },
                        methods: {
                            onAddAdditionalEmail() {
                                this.isValidSection && this.additionalEmails.push({
                                    value: "",
                                    scope: X,
                                    key: this.generateUniqueKey()
                                })
                            },
                            onDeleteAdditionalEmail(t) {
                                this.$delete(this.additionalEmails, t)
                            },
                            async onUpdateEmail() {
                                if ("" === this.primaryEmailValue && this.firstAdditionalEmail) {
                                    const t = this.firstAdditionalEmail;
                                    await this.deleteFirstAdditionalEmail(), this.primaryEmailValue = t, await this.updatePrimaryEmail()
                                }
                            },
                            async onUpdateNotificationEmail(t) {
                                this.notificationEmail = t
                            },
                            async updatePrimaryEmail() {
                                try {
                                    var e, a;
                                    const t = await Jt(this.primaryEmailValue);
                                    this.handleResponse(null === (e = t.ocs) || void 0 === e || null === (a = e.meta) || void 0 === a ? void 0 : a.status)
                                } catch (e) {
                                    this.handleResponse("error", t("settings", "Unable to update primary email address"), e)
                                }
                            },
                            async deleteFirstAdditionalEmail() {
                                try {
                                    var e, a;
                                    const t = await Xt(this.firstAdditionalEmail);
                                    this.handleDeleteFirstAdditionalEmail(null === (e = t.ocs) || void 0 === e || null === (a = e.meta) || void 0 === a ? void 0 : a.status)
                                } catch (e) {
                                    this.handleResponse("error", t("settings", "Unable to delete additional email address"), e)
                                }
                            },
                            handleDeleteFirstAdditionalEmail(e) {
                                "ok" === e ? this.$delete(this.additionalEmails, 0) : this.handleResponse("error", t("settings", "Unable to delete additional email address"), {})
                            },
                            handleResponse(t, e, a) {
                                "ok" !== t && ot(a, e)
                            },
                            generateUniqueKey: () => Math.random().toString(36).substring(2)
                        }
                    };
                var ue = n(73070),
                    me = {};
                me.styleTagTransform = R(), me.setAttributes = k(), me.insert = j().bind(null, "head"), me.domAPI = P(), me.insertStyleElement = O(), I()(ue.Z, me), ue.Z && ue.Z.locals && ue.Z.locals;
                const he = (0, M.Z)(Ae, (function() {
                    var t = this,
                        e = t._self._c;
                    return e("section", [e("HeaderBar", {
                        attrs: {
                            "input-id": t.inputId,
                            readable: t.primaryEmail.readable,
                            "handle-scope-change": t.savePrimaryEmailScope,
                            "is-editable": !0,
                            "is-multi-value-supported": !0,
                            "is-valid-section": t.isValidSection,
                            scope: t.primaryEmail.scope
                        },
                        on: {
                            "update:scope": function(e) {
                                return t.$set(t.primaryEmail, "scope", e)
                            },
                            "add-additional": t.onAddAdditionalEmail
                        }
                    }), t._v(" "), t.displayNameChangeSupported ? [e("Email", {
                        attrs: {
                            primary: !0,
                            scope: t.primaryEmail.scope,
                            email: t.primaryEmail.value,
                            "active-notification-email": t.notificationEmail
                        },
                        on: {
                            "update:scope": function(e) {
                                return t.$set(t.primaryEmail, "scope", e)
                            },
                            "update:email": [function(e) {
                                return t.$set(t.primaryEmail, "value", e)
                            }, t.onUpdateEmail],
                            "update:activeNotificationEmail": function(e) {
                                t.notificationEmail = e
                            },
                            "update:active-notification-email": function(e) {
                                t.notificationEmail = e
                            },
                            "update:notification-email": t.onUpdateNotificationEmail
                        }
                    })] : e("span", [t._v("\n\t\t" + t._s(t.primaryEmail.value || t.t("settings", "No email address set")) + "\n\t")]), t._v(" "), t.additionalEmails.length ? [e("em", {
                        staticClass: "additional-emails-label"
                    }, [t._v(t._s(t.t("settings", "Additional emails")))]), t._v(" "), t._l(t.additionalEmails, (function(a, n) {
                        return e("Email", {
                            key: a.key,
                            attrs: {
                                index: n,
                                scope: a.scope,
                                email: a.value,
                                "local-verification-state": parseInt(a.locallyVerified, 10),
                                "active-notification-email": t.notificationEmail
                            },
                            on: {
                                "update:scope": function(e) {
                                    return t.$set(a, "scope", e)
                                },
                                "update:email": [function(e) {
                                    return t.$set(a, "value", e)
                                }, t.onUpdateEmail],
                                "update:activeNotificationEmail": function(e) {
                                    t.notificationEmail = e
                                },
                                "update:active-notification-email": function(e) {
                                    t.notificationEmail = e
                                },
                                "update:notification-email": t.onUpdateNotificationEmail,
                                "delete-additional-email": function(e) {
                                    return t.onDeleteAdditionalEmail(n)
                                }
                            }
                        })
                    }))] : t._e()], 2)
                }), [], !1, null, "46c7eb7e", null).exports;
                var ge = n(45004);
                const {
                    defaultPhoneRegion: ve,
                    phone: Ce
                } = (0, s.j)("settings", "personalInfoParameters", {}), fe = {
                    name: "PhoneSection",
                    components: {
                        AccountPropertySection: qt
                    },
                    data: () => ({
                        phone: {
                            ...Ce,
                            readable: V[Ce.name]
                        }
                    }),
                    methods: {
                        onValidate: t => ve ? (0, ge.y)(t, ve) : (0, ge.y)(t)
                    }
                }, ye = (0, M.Z)(fe, (function() {
                    var t = this;
                    return (0, t._self._c)("AccountPropertySection", t._b({
                        attrs: {
                            placeholder: t.t("settings", "Your phone number"),
                            autocomplete: "tel",
                            type: "tel",
                            "on-validate": t.onValidate
                        }
                    }, "AccountPropertySection", t.phone, !1, !0))
                }), [], !1, null, null, null).exports, {
                    location: be
                } = (0, s.j)("settings", "personalInfoParameters", {}), xe = {
                    name: "LocationSection",
                    components: {
                        AccountPropertySection: qt
                    },
                    data: () => ({
                        location: {
                            ...be,
                            readable: V[be.name]
                        }
                    })
                }, Ee = (0, M.Z)(xe, (function() {
                    var t = this;
                    return (0, t._self._c)("AccountPropertySection", t._b({
                        attrs: {
                            autocomplete: "address-level1",
                            placeholder: t.t("settings", "Your city")
                        }
                    }, "AccountPropertySection", t.location, !1, !0))
                }), [], !1, null, null, null).exports, {
                    website: _e
                } = (0, s.j)("settings", "personalInfoParameters", {}), we = {
                    name: "WebsiteSection",
                    components: {
                        AccountPropertySection: qt
                    },
                    data: () => ({
                        website: {
                            ..._e,
                            readable: V[_e.name]
                        }
                    }),
                    methods: {
                        onValidate: t => function(t) {
                            try {
                                return new URL(t), !0
                            } catch (t) {
                                return !1
                            }
                        }(t)
                    }
                }, Ie = (0, M.Z)(we, (function() {
                    var t = this;
                    return (0, t._self._c)("AccountPropertySection", t._b({
                        attrs: {
                            placeholder: t.t("settings", "Your website"),
                            autocomplete: "url",
                            type: "url",
                            "on-validate": t.onValidate
                        }
                    }, "AccountPropertySection", t.website, !1, !0))
                }), [], !1, null, null, null).exports, {
                    twitter: Se
                } = (0, s.j)("settings", "personalInfoParameters", {}), Pe = {
                    name: "TwitterSection",
                    components: {
                        AccountPropertySection: qt
                    },
                    data: () => ({
                        twitter: {
                            ...Se,
                            readable: V[Se.name]
                        }
                    })
                }, Le = (0, M.Z)(Pe, (function() {
                    var t = this;
                    return (0, t._self._c)("AccountPropertySection", t._b({
                        attrs: {
                            placeholder: t.t("settings", "Your Twitter handle")
                        }
                    }, "AccountPropertySection", t.twitter, !1, !0))
                }), [], !1, null, null, null).exports, {
                    fediverse: je
                } = (0, s.j)("settings", "personalInfoParameters", {}), Be = {
                    name: "FediverseSection",
                    components: {
                        AccountPropertySection: qt
                    },
                    data: () => ({
                        fediverse: {
                            ...je,
                            readable: V[je.name]
                        }
                    })
                }, ke = (0, M.Z)(Be, (function() {
                    var t = this;
                    return (0, t._self._c)("AccountPropertySection", t._b({
                        attrs: {
                            placeholder: t.t("settings", "Your handle")
                        }
                    }, "AccountPropertySection", t.fediverse, !1, !0))
                }), [], !1, null, null, null).exports, De = {
                    name: "Language",
                    props: {
                        inputId: {
                            type: String,
                            default: null
                        },
                        commonLanguages: {
                            type: Array,
                            required: !0
                        },
                        otherLanguages: {
                            type: Array,
                            required: !0
                        },
                        language: {
                            type: Object,
                            required: !0
                        }
                    },
                    data() {
                        return {
                            initialLanguage: this.language
                        }
                    },
                    computed: {
                        allLanguages() {
                            return Object.freeze([...this.commonLanguages, ...this.otherLanguages].reduce(((t, e) => {
                                let {
                                    code: a,
                                    name: n
                                } = e;
                                return {
                                    ...t,
                                    [a]: n
                                }
                            }), {}))
                        }
                    },
                    methods: {
                        async onLanguageChange(t) {
                            const e = this.constructLanguage(t.target.value);
                            var a;
                            this.$emit("update:language", e), "" !== (a = e).code && "" !== a.name && void 0 !== a.name && await this.updateLanguage(e)
                        },
                        async updateLanguage(e) {
                            try {
                                var a, n;
                                const t = await nt(q.LANGUAGE, e.code);
                                this.handleResponse({
                                    language: e,
                                    status: null === (a = t.ocs) || void 0 === a || null === (n = a.meta) || void 0 === n ? void 0 : n.status
                                }), this.reloadPage()
                            } catch (e) {
                                this.handleResponse({
                                    errorMessage: t("settings", "Unable to update language"),
                                    error: e
                                })
                            }
                        },
                        constructLanguage(t) {
                            return {
                                code: t,
                                name: this.allLanguages[t]
                            }
                        },
                        handleResponse(t) {
                            let {
                                language: e,
                                status: a,
                                errorMessage: n,
                                error: i
                            } = t;
                            "ok" === a ? this.initialLanguage = e : ot(i, n)
                        },
                        reloadPage() {
                            location.reload()
                        }
                    }
                };
                var Oe = n(42569),
                    Ne = {};
                Ne.styleTagTransform = R(), Ne.setAttributes = k(), Ne.insert = j().bind(null, "head"), Ne.domAPI = P(), Ne.insertStyleElement = O(), I()(Oe.Z, Ne), Oe.Z && Oe.Z.locals && Oe.Z.locals;
                const Re = (0, M.Z)(De, (function() {
                        var t = this,
                            e = t._self._c;
                        return e("div", {
                            staticClass: "language"
                        }, [e("select", {
                            attrs: {
                                id: t.inputId,
                                placeholder: t.t("settings", "Language")
                            },
                            on: {
                                change: t.onLanguageChange
                            }
                        }, [t._l(t.commonLanguages, (function(a) {
                            return e("option", {
                                key: a.code,
                                domProps: {
                                    selected: t.language.code === a.code,
                                    value: a.code
                                }
                            }, [t._v("\n\t\t\t" + t._s(a.name) + "\n\t\t")])
                        })), t._v(" "), e("option", {
                            attrs: {
                                disabled: ""
                            }
                        }, [t._v("\n\t\t\t──────────\n\t\t")]), t._v(" "), t._l(t.otherLanguages, (function(a) {
                            return e("option", {
                                key: a.code,
                                domProps: {
                                    selected: t.language.code === a.code,
                                    value: a.code
                                }
                            }, [t._v("\n\t\t\t" + t._s(a.name) + "\n\t\t")])
                        }))], 2), t._v(" "), e("a", {
                            attrs: {
                                href: "https://www.transifex.com/nextcloud/nextcloud/",
                                target: "_blank",
                                rel: "noreferrer noopener"
                            }
                        }, [e("em", [t._v(t._s(t.t("settings", "Help translate")))])])])
                    }), [], !1, null, "5c847b3a", null).exports,
                    {
                        languageMap: {
                            activeLanguage: Te,
                            commonLanguages: Ze,
                            otherLanguages: Me
                        }
                    } = (0, s.j)("settings", "personalInfoParameters", {}),
                    Ue = {
                        name: "LanguageSection",
                        components: {
                            Language: Re,
                            HeaderBar: gt
                        },
                        data: () => ({
                            propertyReadable: Y.LANGUAGE,
                            commonLanguages: Ze,
                            otherLanguages: Me,
                            language: Te
                        }),
                        computed: {
                            inputId: () => "account-setting-".concat(q.LANGUAGE),
                            isEditable() {
                                return Boolean(this.language)
                            }
                        }
                    };
                var Fe = n(12531),
                    ze = {};
                ze.styleTagTransform = R(), ze.setAttributes = k(), ze.insert = j().bind(null, "head"), ze.domAPI = P(), ze.insertStyleElement = O(), I()(Fe.Z, ze), Fe.Z && Fe.Z.locals && Fe.Z.locals;
                const Ve = (0, M.Z)(Ue, (function() {
                    var t = this,
                        e = t._self._c;
                    return e("section", [e("HeaderBar", {
                        attrs: {
                            "input-id": t.inputId,
                            readable: t.propertyReadable
                        }
                    }), t._v(" "), t.isEditable ? [e("Language", {
                        attrs: {
                            "input-id": t.inputId,
                            "common-languages": t.commonLanguages,
                            "other-languages": t.otherLanguages,
                            language: t.language
                        },
                        on: {
                            "update:language": function(e) {
                                t.language = e
                            }
                        }
                    })] : e("span", [t._v("\n\t\t" + t._s(t.t("settings", "No language set")) + "\n\t")])], 2)
                }), [], !1, null, "92685b76", null).exports;
                var He = n(80351),
                    Ge = n.n(He);
                const qe = {
                    name: "Locale",
                    components: {
                        Web: n(97859).default
                    },
                    props: {
                        inputId: {
                            type: String,
                            default: null
                        },
                        locale: {
                            type: Object,
                            required: !0
                        },
                        localesForLanguage: {
                            type: Array,
                            required: !0
                        },
                        otherLocales: {
                            type: Array,
                            required: !0
                        }
                    },
                    data() {
                        return {
                            initialLocale: this.locale,
                            example: {
                                date: Ge()().format("L"),
                                time: Ge()().format("LTS"),
                                firstDayOfWeek: window.dayNames[window.firstDay]
                            }
                        }
                    },
                    computed: {
                        allLocales() {
                            return Object.freeze([...this.localesForLanguage, ...this.otherLocales].reduce(((t, e) => {
                                let {
                                    code: a,
                                    name: n
                                } = e;
                                return {
                                    ...t,
                                    [a]: n
                                }
                            }), {}))
                        }
                    },
                    created() {
                        setInterval(this.refreshExample, 1e3)
                    },
                    methods: {
                        async onLocaleChange(t) {
                            const e = this.constructLocale(t.target.value);
                            var a;
                            this.$emit("update:locale", e), "" !== (a = e).code && "" !== a.name && void 0 !== a.name && await this.updateLocale(e)
                        },
                        async updateLocale(e) {
                            try {
                                var a, n;
                                const t = await nt(q.LOCALE, e.code);
                                this.handleResponse({
                                    locale: e,
                                    status: null === (a = t.ocs) || void 0 === a || null === (n = a.meta) || void 0 === n ? void 0 : n.status
                                }), this.reloadPage()
                            } catch (e) {
                                this.handleResponse({
                                    errorMessage: t("settings", "Unable to update locale"),
                                    error: e
                                })
                            }
                        },
                        constructLocale(t) {
                            return {
                                code: t,
                                name: this.allLocales[t]
                            }
                        },
                        handleResponse(t) {
                            let {
                                locale: e,
                                status: a,
                                errorMessage: n,
                                error: i
                            } = t;
                            "ok" === a ? this.initialLocale = e : (this.$emit("update:locale", this.initialLocale), ot(i, n))
                        },
                        refreshExample() {
                            this.example = {
                                date: Ge()().format("L"),
                                time: Ge()().format("LTS"),
                                firstDayOfWeek: window.dayNames[window.firstDay]
                            }
                        },
                        reloadPage() {
                            location.reload()
                        }
                    }
                };
                var Ye = n(87229),
                    $e = {};
                $e.styleTagTransform = R(), $e.setAttributes = k(), $e.insert = j().bind(null, "head"), $e.domAPI = P(), $e.insertStyleElement = O(), I()(Ye.Z, $e), Ye.Z && Ye.Z.locals && Ye.Z.locals;
                const We = (0, M.Z)(qe, (function() {
                        var t = this,
                            e = t._self._c;
                        return e("div", {
                            staticClass: "locale"
                        }, [e("select", {
                            attrs: {
                                id: t.inputId,
                                placeholder: t.t("settings", "Locale")
                            },
                            on: {
                                change: t.onLocaleChange
                            }
                        }, [t._l(t.localesForLanguage, (function(a) {
                            return e("option", {
                                key: a.code,
                                domProps: {
                                    selected: t.locale.code === a.code,
                                    value: a.code
                                }
                            }, [t._v("\n\t\t\t" + t._s(a.name) + "\n\t\t")])
                        })), t._v(" "), e("option", {
                            attrs: {
                                disabled: ""
                            }
                        }, [t._v("\n\t\t\t──────────\n\t\t")]), t._v(" "), t._l(t.otherLocales, (function(a) {
                            return e("option", {
                                key: a.code,
                                domProps: {
                                    selected: t.locale.code === a.code,
                                    value: a.code
                                }
                            }, [t._v("\n\t\t\t" + t._s(a.name) + "\n\t\t")])
                        }))], 2), t._v(" "), e("div", {
                            staticClass: "example"
                        }, [e("Web", {
                            attrs: {
                                size: 20
                            }
                        }), t._v(" "), e("div", {
                            staticClass: "example__text"
                        }, [e("p", [e("span", [t._v(t._s(t.example.date))]), t._v(" "), e("span", [t._v(t._s(t.example.time))])]), t._v(" "), e("p", [t._v("\n\t\t\t\t" + t._s(t.t("settings", "Week starts on {firstDayOfWeek}", {
                            firstDayOfWeek: this.example.firstDayOfWeek
                        })) + "\n\t\t\t")])])], 1)])
                    }), [], !1, null, "1ac456dc", null).exports,
                    {
                        localeMap: {
                            activeLocale: Ke,
                            localesForLanguage: Qe,
                            otherLocales: Je
                        }
                    } = (0, s.j)("settings", "personalInfoParameters", {}),
                    Xe = {
                        name: "LocaleSection",
                        components: {
                            Locale: We,
                            HeaderBar: gt
                        },
                        data: () => ({
                            propertyReadable: Y.LOCALE,
                            localesForLanguage: Qe,
                            otherLocales: Je,
                            locale: Ke
                        }),
                        computed: {
                            inputId: () => "account-setting-".concat(q.LOCALE),
                            isEditable() {
                                return Boolean(this.locale)
                            }
                        }
                    };
                var ta = n(682),
                    ea = {};
                ea.styleTagTransform = R(), ea.setAttributes = k(), ea.insert = j().bind(null, "head"), ea.domAPI = P(), ea.insertStyleElement = O(), I()(ta.Z, ea), ta.Z && ta.Z.locals && ta.Z.locals;
                const aa = (0, M.Z)(Xe, (function() {
                        var t = this,
                            e = t._self._c;
                        return e("section", [e("HeaderBar", {
                            attrs: {
                                "input-id": t.inputId,
                                readable: t.propertyReadable
                            }
                        }), t._v(" "), t.isEditable ? [e("Locale", {
                            attrs: {
                                "input-id": t.inputId,
                                "locales-for-language": t.localesForLanguage,
                                "other-locales": t.otherLocales,
                                locale: t.locale
                            },
                            on: {
                                "update:locale": function(e) {
                                    t.locale = e
                                }
                            }
                        })] : e("span", [t._v("\n\t\t" + t._s(t.t("settings", "No locale set")) + "\n\t")])], 2)
                    }), [], !1, null, "84fca724", null).exports,
                    na = {
                        name: "EditProfileAnchorLink",
                        components: {
                            ChevronDownIcon: n(41622).default
                        },
                        props: {
                            profileEnabled: {
                                type: Boolean,
                                required: !0
                            }
                        },
                        computed: {
                            disabled() {
                                return !this.profileEnabled
                            }
                        }
                    };
                var ia = n(15043),
                    oa = {};
                oa.styleTagTransform = R(), oa.setAttributes = k(), oa.insert = j().bind(null, "head"), oa.domAPI = P(), oa.insertStyleElement = O(), I()(ia.Z, oa), ia.Z && ia.Z.locals && ia.Z.locals;
                var sa = n(9142),
                    ra = {};
                ra.styleTagTransform = R(), ra.setAttributes = k(), ra.insert = j().bind(null, "head"), ra.domAPI = P(), ra.insertStyleElement = O(), I()(sa.Z, ra), sa.Z && sa.Z.locals && sa.Z.locals;
                const la = (0, M.Z)(na, (function() {
                    var t = this,
                        e = t._self._c;
                    return e("a", t._g({
                        class: {
                            disabled: t.disabled
                        },
                        attrs: {
                            href: "#profile-visibility"
                        }
                    }, t.$listeners), [e("ChevronDownIcon", {
                        staticClass: "anchor-icon",
                        attrs: {
                            size: 22
                        }
                    }), t._v("\n\t" + t._s(t.t("settings", "Edit your Profile visibility")) + "\n")], 1)
                }), [], !1, null, "7539c74a", null).exports;
                var da = n(20571);
                const ca = {
                        name: "ProfileCheckbox",
                        components: {
                            NcCheckboxRadioSwitch: n.n(da)()
                        },
                        props: {
                            profileEnabled: {
                                type: Boolean,
                                required: !0
                            }
                        },
                        data() {
                            return {
                                isProfileEnabled: this.profileEnabled,
                                loading: !1
                            }
                        },
                        methods: {
                            async saveEnableProfile() {
                                this.loading = !0;
                                try {
                                    var e, a;
                                    const t = await nt(F.PROFILE_ENABLED, this.isProfileEnabled);
                                    this.handleResponse({
                                        isProfileEnabled: this.isProfileEnabled,
                                        status: null === (e = t.ocs) || void 0 === e || null === (a = e.meta) || void 0 === a ? void 0 : a.status
                                    })
                                } catch (e) {
                                    this.handleResponse({
                                        errorMessage: t("settings", "Unable to update profile enabled state"),
                                        error: e
                                    })
                                }
                            },
                            handleResponse(t) {
                                let {
                                    isProfileEnabled: e,
                                    status: a,
                                    errorMessage: n,
                                    error: i
                                } = t;
                                "ok" === a ? (0, p.j8)("settings:profile-enabled:updated", e) : ot(i, n), this.loading = !1
                            }
                        }
                    },
                    pa = (0, M.Z)(ca, (function() {
                        var t = this,
                            e = t._self._c;
                        return e("div", {
                            staticClass: "checkbox-container"
                        }, [e("NcCheckboxRadioSwitch", {
                            attrs: {
                                type: "switch",
                                checked: t.isProfileEnabled,
                                loading: t.loading
                            },
                            on: {
                                "update:checked": [function(e) {
                                    t.isProfileEnabled = e
                                }, t.saveEnableProfile]
                            }
                        }, [t._v("\n\t\t" + t._s(t.t("settings", "Enable Profile")) + "\n\t")])], 1)
                    }), [], !1, null, null, null).exports,
                    Aa = {
                        name: "ProfilePreviewCard",
                        components: {
                            NcAvatar: u()
                        },
                        props: {
                            displayName: {
                                type: String,
                                required: !0
                            },
                            organisation: {
                                type: String,
                                required: !0
                            },
                            profileEnabled: {
                                type: Boolean,
                                required: !0
                            },
                            userId: {
                                type: String,
                                required: !0
                            }
                        },
                        computed: {
                            disabled() {
                                return !this.profileEnabled
                            },
                            profilePageLink() {
                                return this.profileEnabled ? (0, d.generateUrl)("/u/{userId}", {
                                    userId: (0, o.ts)().uid
                                }) : null
                            }
                        }
                    };
                var ua = n(5348),
                    ma = {};
                ma.styleTagTransform = R(), ma.setAttributes = k(), ma.insert = j().bind(null, "head"), ma.domAPI = P(), ma.insertStyleElement = O(), I()(ua.Z, ma), ua.Z && ua.Z.locals && ua.Z.locals;
                const ha = (0, M.Z)(Aa, (function() {
                        var t = this,
                            e = t._self._c;
                        return e("a", {
                            staticClass: "preview-card",
                            class: {
                                disabled: t.disabled
                            },
                            attrs: {
                                href: t.profilePageLink
                            }
                        }, [e("NcAvatar", {
                            staticClass: "preview-card__avatar",
                            attrs: {
                                user: t.userId,
                                size: 48,
                                "show-user-status": !0,
                                "show-user-status-compact": !1,
                                "disable-menu": !0,
                                "disable-tooltip": !0
                            }
                        }), t._v(" "), e("div", {
                            staticClass: "preview-card__header"
                        }, [e("span", [t._v(t._s(t.displayName))])]), t._v(" "), e("div", {
                            staticClass: "preview-card__footer"
                        }, [e("span", [t._v(t._s(t.organisation))])])], 1)
                    }), [], !1, null, "05581203", null).exports,
                    {
                        organisation: {
                            value: ga
                        },
                        displayName: {
                            value: va
                        },
                        profileEnabled: Ca,
                        userId: fa
                    } = (0, s.j)("settings", "personalInfoParameters", {}),
                    ya = {
                        name: "ProfileSection",
                        components: {
                            EditProfileAnchorLink: la,
                            HeaderBar: gt,
                            ProfileCheckbox: pa,
                            ProfilePreviewCard: ha
                        },
                        data: () => ({
                            propertyReadable: z.PROFILE_ENABLED,
                            organisation: ga,
                            displayName: va,
                            profileEnabled: Ca,
                            userId: fa
                        }),
                        mounted() {
                            (0, p.Ld)("settings:display-name:updated", this.handleDisplayNameUpdate), (0, p.Ld)("settings:organisation:updated", this.handleOrganisationUpdate)
                        },
                        beforeDestroy() {
                            (0, p.r1)("settings:display-name:updated", this.handleDisplayNameUpdate), (0, p.r1)("settings:organisation:updated", this.handleOrganisationUpdate)
                        },
                        methods: {
                            handleDisplayNameUpdate(t) {
                                this.displayName = t
                            },
                            handleOrganisationUpdate(t) {
                                this.organisation = t
                            }
                        }
                    },
                    ba = ya;
                var xa = n(90552),
                    Ea = {};
                Ea.styleTagTransform = R(), Ea.setAttributes = k(), Ea.insert = j().bind(null, "head"), Ea.domAPI = P(), Ea.insertStyleElement = O(), I()(xa.Z, Ea), xa.Z && xa.Z.locals && xa.Z.locals;
                const _a = (0, M.Z)(ba, (function() {
                        var t = this,
                            e = t._self._c;
                        return e("section", [e("HeaderBar", {
                            attrs: {
                                readable: t.propertyReadable
                            }
                        }), t._v(" "), e("ProfileCheckbox", {
                            attrs: {
                                "profile-enabled": t.profileEnabled
                            },
                            on: {
                                "update:profileEnabled": function(e) {
                                    t.profileEnabled = e
                                },
                                "update:profile-enabled": function(e) {
                                    t.profileEnabled = e
                                }
                            }
                        }), t._v(" "), e("ProfilePreviewCard", {
                            attrs: {
                                organisation: t.organisation,
                                "display-name": t.displayName,
                                "profile-enabled": t.profileEnabled,
                                "user-id": t.userId
                            }
                        }), t._v(" "), e("EditProfileAnchorLink", {
                            attrs: {
                                "profile-enabled": t.profileEnabled
                            }
                        })], 1)
                    }), [], !1, null, "cf64d964", null).exports,
                    {
                        organisation: wa
                    } = (0, s.j)("settings", "personalInfoParameters", {}),
                    Ia = {
                        name: "OrganisationSection",
                        components: {
                            AccountPropertySection: qt
                        },
                        data: () => ({
                            organisation: {
                                ...wa,
                                readable: V[wa.name]
                            }
                        })
                    },
                    Sa = (0, M.Z)(Ia, (function() {
                        var t = this;
                        return (0, t._self._c)("AccountPropertySection", t._b({
                            attrs: {
                                autocomplete: "organization",
                                placeholder: t.t("settings", "Your organisation")
                            }
                        }, "AccountPropertySection", t.organisation, !1, !0))
                    }), [], !1, null, null, null).exports,
                    {
                        role: Pa
                    } = (0, s.j)("settings", "personalInfoParameters", {}),
                    La = {
                        name: "RoleSection",
                        components: {
                            AccountPropertySection: qt
                        },
                        data: () => ({
                            role: {
                                ...Pa,
                                readable: V[Pa.name]
                            }
                        })
                    },
                    ja = (0, M.Z)(La, (function() {
                        var t = this;
                        return (0, t._self._c)("AccountPropertySection", t._b({
                            attrs: {
                                autocomplete: "organization-title",
                                placeholder: t.t("settings", "Your role")
                            }
                        }, "AccountPropertySection", t.role, !1, !0))
                    }), [], !1, null, null, null).exports,
                    {
                        headline: Ba
                    } = (0, s.j)("settings", "personalInfoParameters", {}),
                    ka = {
                        name: "HeadlineSection",
                        components: {
                            AccountPropertySection: qt
                        },
                        data: () => ({
                            headline: {
                                ...Ba,
                                readable: V[Ba.name]
                            }
                        })
                    },
                    Da = (0, M.Z)(ka, (function() {
                        var t = this;
                        return (0, t._self._c)("AccountPropertySection", t._b({
                            attrs: {
                                placeholder: t.t("settings", "Your headline")
                            }
                        }, "AccountPropertySection", t.headline, !1, !0))
                    }), [], !1, null, null, null).exports,
                    {
                        biography: Oa
                    } = (0, s.j)("settings", "personalInfoParameters", {}),
                    Na = {
                        name: "BiographySection",
                        components: {
                            AccountPropertySection: qt
                        },
                        data: () => ({
                            biography: {
                                ...Oa,
                                readable: V[Oa.name]
                            }
                        })
                    },
                    Ra = (0, M.Z)(Na, (function() {
                        var t = this;
                        return (0, t._self._c)("AccountPropertySection", t._b({
                            attrs: {
                                placeholder: t.t("settings", "Your biography"),
                                "multi-line": !0
                            }
                        }, "AccountPropertySection", t.biography, !1, !0))
                    }), [], !1, null, null, null).exports;
                var Ta = n(36456),
                    Za = n.n(Ta);
                const Ma = Object.freeze({
                        SHOW: "show",
                        SHOW_USERS_ONLY: "show_users_only",
                        HIDE: "hide"
                    }),
                    Ua = Object.freeze({
                        [Ma.SHOW]: {
                            name: Ma.SHOW,
                            label: t("settings", "Show to everyone")
                        },
                        [Ma.SHOW_USERS_ONLY]: {
                            name: Ma.SHOW_USERS_ONLY,
                            label: t("settings", "Show to logged in users only")
                        },
                        [Ma.HIDE]: {
                            name: Ma.HIDE,
                            label: t("settings", "Hide")
                        }
                    }),
                    {
                        profileEnabled: Fa
                    } = (0, s.j)("settings", "personalInfoParameters", !1),
                    za = {
                        name: "VisibilityDropdown",
                        components: {
                            NcSelect: Za()
                        },
                        props: {
                            paramId: {
                                type: String,
                                required: !0
                            },
                            displayId: {
                                type: String,
                                required: !0
                            },
                            visibility: {
                                type: String,
                                required: !0
                            }
                        },
                        data() {
                            return {
                                initialVisibility: this.visibility,
                                profileEnabled: Fa
                            }
                        },
                        computed: {
                            disabled() {
                                return !this.profileEnabled
                            },
                            inputId() {
                                return "profile-visibility-".concat(this.paramId)
                            },
                            visibilityObject() {
                                return Ua[this.visibility]
                            },
                            visibilityOptions: () => Object.values(Ua)
                        },
                        mounted() {
                            (0, p.Ld)("settings:profile-enabled:updated", this.handleProfileEnabledUpdate)
                        },
                        beforeDestroy() {
                            (0, p.r1)("settings:profile-enabled:updated", this.handleProfileEnabledUpdate)
                        },
                        methods: {
                            async onVisibilityChange(t) {
                                if (null !== t) {
                                    const {
                                        name: e
                                    } = t;
                                    this.$emit("update:visibility", e), "" !== e && await this.updateVisibility(e)
                                }
                            },
                            async updateVisibility(e) {
                                try {
                                    var a, n;
                                    const t = await (async (t, e) => {
                                        const a = (0, o.ts)().uid,
                                            n = (0, d.generateOcsUrl)("/profile/{userId}", {
                                                userId: a
                                            });
                                        return await (0, at.confirmPassword)(), (await l.default.put(n, {
                                            paramId: t,
                                            visibility: e
                                        })).data
                                    })(this.paramId, e);
                                    this.handleResponse({
                                        visibility: e,
                                        status: null === (a = t.ocs) || void 0 === a || null === (n = a.meta) || void 0 === n ? void 0 : n.status
                                    })
                                } catch (e) {
                                    this.handleResponse({
                                        errorMessage: t("settings", "Unable to update visibility of {displayId}", {
                                            displayId: this.displayId
                                        }),
                                        error: e
                                    })
                                }
                            },
                            handleResponse(t) {
                                let {
                                    visibility: e,
                                    status: a,
                                    errorMessage: n,
                                    error: i
                                } = t;
                                "ok" === a ? this.initialVisibility = e : ot(i, n)
                            },
                            handleProfileEnabledUpdate(t) {
                                this.profileEnabled = t
                            }
                        }
                    },
                    Va = za;
                var Ha = n(63019),
                    Ga = {};
                Ga.styleTagTransform = R(), Ga.setAttributes = k(), Ga.insert = j().bind(null, "head"), Ga.domAPI = P(), Ga.insertStyleElement = O(), I()(Ha.Z, Ga), Ha.Z && Ha.Z.locals && Ha.Z.locals;
                const qa = (0, M.Z)(Va, (function() {
                        var t = this,
                            e = t._self._c;
                        return e("div", {
                            staticClass: "visibility-container",
                            class: {
                                disabled: t.disabled
                            }
                        }, [e("label", {
                            attrs: {
                                for: t.inputId
                            }
                        }, [t._v("\n\t\t" + t._s(t.displayId) + "\n\t")]), t._v(" "), e("NcSelect", {
                            staticClass: "visibility-container__select",
                            attrs: {
                                "input-id": t.inputId,
                                clearable: !1,
                                options: t.visibilityOptions,
                                value: t.visibilityObject
                            },
                            on: {
                                "option:selected": t.onVisibilityChange
                            }
                        })], 1)
                    }), [], !1, null, "b13d20da", null).exports,
                    {
                        profileConfig: Ya
                    } = (0, s.j)("settings", "profileParameters", {}),
                    {
                        profileEnabled: $a
                    } = (0, s.j)("settings", "personalInfoParameters", !1),
                    Wa = (t, e) => t.appId === e.appId || "core" !== t.appId && "core" !== e.appId ? t.displayId.localeCompare(e.displayId) : "core" === t.appId ? 1 : -1,
                    Ka = {
                        name: "ProfileVisibilitySection",
                        components: {
                            HeaderBar: gt,
                            VisibilityDropdown: qa
                        },
                        data: () => ({
                            heading: H.PROFILE_VISIBILITY,
                            profileEnabled: $a,
                            visibilityParams: Object.entries(Ya).map((t => {
                                let [e, {
                                    appId: a,
                                    displayId: n,
                                    visibility: i
                                }] = t;
                                return {
                                    id: e,
                                    appId: a,
                                    displayId: n,
                                    visibility: i
                                }
                            })).sort(Wa),
                            marginLeft: window.matchMedia("(min-width: 1600px)").matches ? window.getComputedStyle(document.getElementById("vue-avatar-section")).getPropertyValue("width").trim() : "0px"
                        }),
                        computed: {
                            disabled() {
                                return !this.profileEnabled
                            },
                            rows() {
                                return Math.ceil(this.visibilityParams.length / 2)
                            }
                        },
                        mounted() {
                            (0, p.Ld)("settings:profile-enabled:updated", this.handleProfileEnabledUpdate), window.onresize = () => {
                                this.marginLeft = window.matchMedia("(min-width: 1600px)").matches ? window.getComputedStyle(document.getElementById("vue-avatar-section")).getPropertyValue("width").trim() : "0px"
                            }
                        },
                        beforeDestroy() {
                            (0, p.r1)("settings:profile-enabled:updated", this.handleProfileEnabledUpdate)
                        },
                        methods: {
                            handleProfileEnabledUpdate(t) {
                                this.profileEnabled = t
                            }
                        }
                    },
                    Qa = Ka;
                var Ja = n(45386),
                    Xa = {};
                Xa.styleTagTransform = R(), Xa.setAttributes = k(), Xa.insert = j().bind(null, "head"), Xa.domAPI = P(), Xa.insertStyleElement = O(), I()(Ja.Z, Xa), Ja.Z && Ja.Z.locals && Ja.Z.locals;
                const tn = (0, M.Z)(Qa, (function() {
                    var t = this,
                        e = t._self._c;
                    return e("section", {
                        style: {
                            marginLeft: t.marginLeft
                        },
                        attrs: {
                            id: "profile-visibility"
                        }
                    }, [e("HeaderBar", {
                        attrs: {
                            "is-heading": !0,
                            readable: t.heading
                        }
                    }), t._v(" "), e("em", {
                        class: {
                            disabled: t.disabled
                        }
                    }, [t._v("\n\t\t" + t._s(t.t("settings", 'The more restrictive setting of either visibility or scope is respected on your Profile. For example, if visibility is set to "Show to everyone" and scope is set to "Private", "Private" is respected.')) + "\n\t")]), t._v(" "), e("div", {
                        staticClass: "visibility-dropdowns",
                        style: {
                            gridTemplateRows: "repeat(".concat(t.rows, ", 44px)")
                        }
                    }, t._l(t.visibilityParams, (function(a) {
                        return e("VisibilityDropdown", {
                            key: a.id,
                            attrs: {
                                "param-id": a.id,
                                "display-id": a.displayId,
                                visibility: a.visibility
                            },
                            on: {
                                "update:visibility": function(e) {
                                    return t.$set(a, "visibility", e)
                                }
                            }
                        })
                    })), 1)], 1)
                }), [], !1, null, "a07dbf96", null).exports;
                n.nc = btoa((0, o.IH)());
                const en = (0, s.j)("settings", "profileEnabledGlobally", !0);
                i.default.mixin({
                    methods: {
                        t: r.Iu
                    }
                });
                const an = i.default.extend(_t),
                    nn = i.default.extend(Tt),
                    on = i.default.extend(Kt),
                    sn = i.default.extend(he),
                    rn = i.default.extend(ye),
                    ln = i.default.extend(Ee),
                    dn = i.default.extend(Ie),
                    cn = i.default.extend(Le),
                    pn = i.default.extend(ke),
                    An = i.default.extend(Ve),
                    un = i.default.extend(aa);
                if ((new an).$mount("#vue-avatar-section"), (new nn).$mount("#vue-details-section"), (new on).$mount("#vue-displayname-section"), (new sn).$mount("#vue-email-section"), (new rn).$mount("#vue-phone-section"), (new ln).$mount("#vue-location-section"), (new dn).$mount("#vue-website-section"), (new cn).$mount("#vue-twitter-section"), (new pn).$mount("#vue-fediverse-section"), (new An).$mount("#vue-language-section"), (new un).$mount("#vue-locale-section"), en) {
                    const t = i.default.extend(_a),
                        e = i.default.extend(Sa),
                        a = i.default.extend(ja),
                        n = i.default.extend(Da),
                        o = i.default.extend(Ra),
                        s = i.default.extend(tn);
                    (new t).$mount("#vue-profile-section"), (new e).$mount("#vue-organisation-section"), (new a).$mount("#vue-role-section"), (new n).$mount("#vue-headline-section"), (new o).$mount("#vue-biography-section"), (new s).$mount("#vue-profile-visibility-section")
                }
            },
            31246: (t, e, a) => {
                "use strict";
                a.d(e, {
                    Z: () => r
                });
                var n = a(87537),
                    i = a.n(n),
                    o = a(23645),
                    s = a.n(o)()(i());
                s.push([t.id, "section[data-v-022fd5d4]{grid-row:1/3}.avatar__container[data-v-022fd5d4]{margin:0 auto;display:flex;flex-direction:column;justify-content:center;align-items:center;gap:16px 0;width:300px}.avatar__container span[data-v-022fd5d4]{color:var(--color-text-lighter)}.avatar__preview[data-v-022fd5d4]{display:flex;justify-content:center;align-items:center;width:180px;height:180px}.avatar__buttons[data-v-022fd5d4]{display:flex;gap:0 10px}.avatar__cropper[data-v-022fd5d4]{width:300px;height:300px;overflow:hidden}.avatar__cropper-buttons[data-v-022fd5d4]{width:100%;display:flex;justify-content:space-between}.avatar__cropper[data-v-022fd5d4] .cropper-view-box{border-radius:50%}input[type=file][data-v-022fd5d4]{display:none}", "", {
                    version: 3,
                    sources: ["webpack://./apps/settings/src/components/PersonalInfo/AvatarSection.vue"],
                    names: [],
                    mappings: "AACA,yBACC,YAAA,CAGA,oCACC,aAAA,CACA,YAAA,CACA,qBAAA,CACA,sBAAA,CACA,kBAAA,CACA,UAAA,CACA,WAAA,CAEA,yCACC,+BAAA,CAIF,kCACC,YAAA,CACA,sBAAA,CACA,kBAAA,CACA,WAAA,CACA,YAAA,CAGD,kCACC,YAAA,CACA,UAAA,CAGD,kCACC,WAAA,CACA,YAAA,CACA,eAAA,CAEA,0CACC,UAAA,CACA,YAAA,CACA,6BAAA,CAGD,oDACC,iBAAA,CAKH,kCACC,YAAA",
                    sourcesContent: ['\nsection {\n\tgrid-row: 1/3;\n}\n.avatar {\n\t&__container {\n\t\tmargin: 0 auto;\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t\tjustify-content: center;\n\t\talign-items: center;\n\t\tgap: 16px 0;\n\t\twidth: 300px;\n\n\t\tspan {\n\t\t\tcolor: var(--color-text-lighter);\n\t\t}\n\t}\n\n\t&__preview {\n\t\tdisplay: flex;\n\t\tjustify-content: center;\n\t\talign-items: center;\n\t\twidth: 180px;\n\t\theight: 180px;\n\t}\n\n\t&__buttons {\n\t\tdisplay: flex;\n\t\tgap: 0 10px;\n\t}\n\n\t&__cropper {\n\t\twidth: 300px;\n\t\theight: 300px;\n\t\toverflow: hidden;\n\n\t\t&-buttons {\n\t\t\twidth: 100%;\n\t\t\tdisplay: flex;\n\t\t\tjustify-content: space-between;\n\t\t}\n\n\t\t&::v-deep .cropper-view-box {\n\t\t\tborder-radius: 50%;\n\t\t}\n\t}\n}\n\ninput[type="file"] {\n\tdisplay: none;\n}\n'],
                    sourceRoot: ""
                }]);
                const r = s
            },
            18118: (t, e, a) => {
                "use strict";
                a.d(e, {
                    Z: () => r
                });
                var n = a(87537),
                    i = a.n(n),
                    o = a(23645),
                    s = a.n(o)()(i());
                s.push([t.id, ".details[data-v-1ab46e68]{display:flex;flex-direction:column;margin:10px 32px 10px 0;gap:16px 0;color:var(--color-text-lighter)}.details__groups[data-v-1ab46e68],.details__quota[data-v-1ab46e68]{display:flex;gap:0 10px}.details__groups-info[data-v-1ab46e68],.details__quota-info[data-v-1ab46e68]{display:flex;flex-direction:column;width:100%;gap:4px 0}.details__groups-list[data-v-1ab46e68],.details__quota-list[data-v-1ab46e68]{font-weight:bold}.details__groups[data-v-1ab46e68] .material-design-icon,.details__quota[data-v-1ab46e68] .material-design-icon{align-self:flex-start;margin-top:2px}", "", {
                    version: 3,
                    sources: ["webpack://./apps/settings/src/components/PersonalInfo/DetailsSection.vue"],
                    names: [],
                    mappings: "AACA,0BACC,YAAA,CACA,qBAAA,CACA,uBAAA,CACA,UAAA,CACA,+BAAA,CAEA,mEAEC,YAAA,CACA,UAAA,CAEA,6EACC,YAAA,CACA,qBAAA,CACA,UAAA,CACA,SAAA,CAGD,6EACC,gBAAA,CAGD,+GACC,qBAAA,CACA,cAAA",
                    sourcesContent: ["\n.details {\n\tdisplay: flex;\n\tflex-direction: column;\n\tmargin: 10px 32px 10px 0;\n\tgap: 16px 0;\n\tcolor: var(--color-text-lighter);\n\n\t&__groups,\n\t&__quota {\n\t\tdisplay: flex;\n\t\tgap: 0 10px;\n\n\t\t&-info {\n\t\t\tdisplay: flex;\n\t\t\tflex-direction: column;\n\t\t\twidth: 100%;\n\t\t\tgap: 4px 0;\n\t\t}\n\n\t\t&-list {\n\t\t\tfont-weight: bold;\n\t\t}\n\n\t\t&::v-deep .material-design-icon {\n\t\t\talign-self: flex-start;\n\t\t\tmargin-top: 2px;\n\t\t}\n\t}\n}\n"],
                    sourceRoot: ""
                }]);
                const r = s
            },
            21395: (t, e, a) => {
                "use strict";
                a.d(e, {
                    Z: () => r
                });
                var n = a(87537),
                    i = a.n(n),
                    o = a(23645),
                    s = a.n(o)()(i());
                s.push([t.id, ".email[data-v-3b4a1ecf]{display:grid;align-items:center}.email input[data-v-3b4a1ecf]{grid-area:1/1;width:100%}.email .email__actions-container[data-v-3b4a1ecf]{grid-area:1/1;justify-self:flex-end;height:30px;display:flex;gap:0 2px;margin-right:5px}.email .email__actions-container .email__actions[data-v-3b4a1ecf]{opacity:.4 !important}.email .email__actions-container .email__actions[data-v-3b4a1ecf]:hover,.email .email__actions-container .email__actions[data-v-3b4a1ecf]:focus,.email .email__actions-container .email__actions[data-v-3b4a1ecf]:active{opacity:.8 !important}.email .email__actions-container .email__actions[data-v-3b4a1ecf] button{height:30px !important;min-height:30px !important;width:30px !important;min-width:30px !important}.email__helper-text-message[data-v-3b4a1ecf]{padding:4px 0;display:flex;align-items:center}.email__helper-text-message__icon[data-v-3b4a1ecf]{margin-right:8px;align-self:start;margin-top:4px}.email__helper-text-message--error[data-v-3b4a1ecf]{color:var(--color-error)}.fade-enter[data-v-3b4a1ecf],.fade-leave-to[data-v-3b4a1ecf]{opacity:0}.fade-enter-active[data-v-3b4a1ecf]{transition:opacity 200ms ease-out}.fade-leave-active[data-v-3b4a1ecf]{transition:opacity 300ms ease-out}", "", {
                    version: 3,
                    sources: ["webpack://./apps/settings/src/components/PersonalInfo/EmailSection/Email.vue"],
                    names: [],
                    mappings: "AACA,wBACC,YAAA,CACA,kBAAA,CAEA,8BACC,aAAA,CACA,UAAA,CAGD,kDACC,aAAA,CACA,qBAAA,CACA,WAAA,CAEA,YAAA,CACA,SAAA,CACA,gBAAA,CAEA,kEACC,qBAAA,CAEA,yNAGC,qBAAA,CAGD,yEACC,sBAAA,CACA,0BAAA,CACA,qBAAA,CACA,yBAAA,CAKH,6CACC,aAAA,CACA,YAAA,CACA,kBAAA,CAEA,mDACC,gBAAA,CACA,gBAAA,CACA,cAAA,CAGD,oDACC,wBAAA,CAKH,6DAEC,SAAA,CAGD,oCACC,iCAAA,CAGD,oCACC,iCAAA",
                    sourcesContent: ["\n.email {\n\tdisplay: grid;\n\talign-items: center;\n\n\tinput {\n\t\tgrid-area: 1 / 1;\n\t\twidth: 100%;\n\t}\n\n\t.email__actions-container {\n\t\tgrid-area: 1 / 1;\n\t\tjustify-self: flex-end;\n\t\theight: 30px;\n\n\t\tdisplay: flex;\n\t\tgap: 0 2px;\n\t\tmargin-right: 5px;\n\n\t\t.email__actions {\n\t\t\topacity: 0.4 !important;\n\n\t\t\t&:hover,\n\t\t\t&:focus,\n\t\t\t&:active {\n\t\t\t\topacity: 0.8 !important;\n\t\t\t}\n\n\t\t\t&::v-deep button {\n\t\t\t\theight: 30px !important;\n\t\t\t\tmin-height: 30px !important;\n\t\t\t\twidth: 30px !important;\n\t\t\t\tmin-width: 30px !important;\n\t\t\t}\n\t\t}\n\t}\n\n\t&__helper-text-message {\n\t\tpadding: 4px 0;\n\t\tdisplay: flex;\n\t\talign-items: center;\n\n\t\t&__icon {\n\t\t\tmargin-right: 8px;\n\t\t\talign-self: start;\n\t\t\tmargin-top: 4px;\n\t\t}\n\n\t\t&--error {\n\t\t\tcolor: var(--color-error);\n\t\t}\n\t}\n}\n\n.fade-enter,\n.fade-leave-to {\n\topacity: 0;\n}\n\n.fade-enter-active {\n\ttransition: opacity 200ms ease-out;\n}\n\n.fade-leave-active {\n\ttransition: opacity 300ms ease-out;\n}\n"],
                    sourceRoot: ""
                }]);
                const r = s
            },
            73070: (t, e, a) => {
                "use strict";
                a.d(e, {
                    Z: () => r
                });
                var n = a(87537),
                    i = a.n(n),
                    o = a(23645),
                    s = a.n(o)()(i());
                s.push([t.id, "section[data-v-46c7eb7e]{padding:10px 10px}section[data-v-46c7eb7e] button:disabled{cursor:default}section .additional-emails-label[data-v-46c7eb7e]{display:block;margin-top:16px}", "", {
                    version: 3,
                    sources: ["webpack://./apps/settings/src/components/PersonalInfo/EmailSection/EmailSection.vue"],
                    names: [],
                    mappings: "AACA,yBACC,iBAAA,CAEA,yCACC,cAAA,CAGD,kDACC,aAAA,CACA,eAAA",
                    sourcesContent: ["\nsection {\n\tpadding: 10px 10px;\n\n\t&::v-deep button:disabled {\n\t\tcursor: default;\n\t}\n\n\t.additional-emails-label {\n\t\tdisplay: block;\n\t\tmargin-top: 16px;\n\t}\n}\n"],
                    sourceRoot: ""
                }]);
                const r = s
            },
            42569: (t, e, a) => {
                "use strict";
                a.d(e, {
                    Z: () => r
                });
                var n = a(87537),
                    i = a.n(n),
                    o = a(23645),
                    s = a.n(o)()(i());
                s.push([t.id, ".language[data-v-5c847b3a]{display:grid}.language select[data-v-5c847b3a]{width:100%}.language a[data-v-5c847b3a]{color:var(--color-main-text);text-decoration:none;width:max-content}", "", {
                    version: 3,
                    sources: ["webpack://./apps/settings/src/components/PersonalInfo/LanguageSection/Language.vue"],
                    names: [],
                    mappings: "AACA,2BACC,YAAA,CAEA,kCACC,UAAA,CAGD,6BACC,4BAAA,CACA,oBAAA,CACA,iBAAA",
                    sourcesContent: ["\n.language {\n\tdisplay: grid;\n\n\tselect {\n\t\twidth: 100%;\n\t}\n\n\ta {\n\t\tcolor: var(--color-main-text);\n\t\ttext-decoration: none;\n\t\twidth: max-content;\n\t}\n}\n"],
                    sourceRoot: ""
                }]);
                const r = s
            },
            12531: (t, e, a) => {
                "use strict";
                a.d(e, {
                    Z: () => r
                });
                var n = a(87537),
                    i = a.n(n),
                    o = a(23645),
                    s = a.n(o)()(i());
                s.push([t.id, "section[data-v-92685b76]{padding:10px 10px}section[data-v-92685b76] button:disabled{cursor:default}", "", {
                    version: 3,
                    sources: ["webpack://./apps/settings/src/components/PersonalInfo/LanguageSection/LanguageSection.vue"],
                    names: [],
                    mappings: "AACA,yBACC,iBAAA,CAEA,yCACC,cAAA",
                    sourcesContent: ["\nsection {\n\tpadding: 10px 10px;\n\n\t&::v-deep button:disabled {\n\t\tcursor: default;\n\t}\n}\n"],
                    sourceRoot: ""
                }]);
                const r = s
            },
            87229: (t, e, a) => {
                "use strict";
                a.d(e, {
                    Z: () => r
                });
                var n = a(87537),
                    i = a.n(n),
                    o = a(23645),
                    s = a.n(o)()(i());
                s.push([t.id, ".locale[data-v-1ac456dc]{display:grid}.locale select[data-v-1ac456dc]{width:100%}.example[data-v-1ac456dc]{margin:10px 0;display:flex;gap:0 10px;color:var(--color-text-lighter)}.example[data-v-1ac456dc] .material-design-icon{align-self:flex-start;margin-top:2px}", "", {
                    version: 3,
                    sources: ["webpack://./apps/settings/src/components/PersonalInfo/LocaleSection/Locale.vue"],
                    names: [],
                    mappings: "AACA,yBACC,YAAA,CAEA,gCACC,UAAA,CAIF,0BACC,aAAA,CACA,YAAA,CACA,UAAA,CACA,+BAAA,CAEA,gDACC,qBAAA,CACA,cAAA",
                    sourcesContent: ["\n.locale {\n\tdisplay: grid;\n\n\tselect {\n\t\twidth: 100%;\n\t}\n}\n\n.example {\n\tmargin: 10px 0;\n\tdisplay: flex;\n\tgap: 0 10px;\n\tcolor: var(--color-text-lighter);\n\n\t&::v-deep .material-design-icon {\n\t\talign-self: flex-start;\n\t\tmargin-top: 2px;\n\t}\n}\n"],
                    sourceRoot: ""
                }]);
                const r = s
            },
            682: (t, e, a) => {
                "use strict";
                a.d(e, {
                    Z: () => r
                });
                var n = a(87537),
                    i = a.n(n),
                    o = a(23645),
                    s = a.n(o)()(i());
                s.push([t.id, "section[data-v-84fca724]{padding:10px 10px}section[data-v-84fca724] button:disabled{cursor:default}", "", {
                    version: 3,
                    sources: ["webpack://./apps/settings/src/components/PersonalInfo/LocaleSection/LocaleSection.vue"],
                    names: [],
                    mappings: "AACA,yBACC,iBAAA,CAEA,yCACC,cAAA",
                    sourcesContent: ["\nsection {\n\tpadding: 10px 10px;\n\n\t&::v-deep button:disabled {\n\t\tcursor: default;\n\t}\n}\n"],
                    sourceRoot: ""
                }]);
                const r = s
            },
            15043: (t, e, a) => {
                "use strict";
                a.d(e, {
                    Z: () => r
                });
                var n = a(87537),
                    i = a.n(n),
                    o = a(23645),
                    s = a.n(o)()(i());
                s.push([t.id, "html{scroll-behavior:smooth}@media screen and (prefers-reduced-motion: reduce){html{scroll-behavior:auto}}", "", {
                    version: 3,
                    sources: ["webpack://./apps/settings/src/components/PersonalInfo/ProfileSection/EditProfileAnchorLink.vue"],
                    names: [],
                    mappings: "AACA,KACC,sBAAA,CAEA,mDAHD,KAIE,oBAAA,CAAA",
                    sourcesContent: ["\nhtml {\n\tscroll-behavior: smooth;\n\n\t@media screen and (prefers-reduced-motion: reduce) {\n\t\tscroll-behavior: auto;\n\t}\n}\n"],
                    sourceRoot: ""
                }]);
                const r = s
            },
            9142: (t, e, a) => {
                "use strict";
                a.d(e, {
                    Z: () => r
                });
                var n = a(87537),
                    i = a.n(n),
                    o = a(23645),
                    s = a.n(o)()(i());
                s.push([t.id, "a[data-v-7539c74a]{display:block;height:44px;width:290px;line-height:44px;padding:0 16px;margin:14px auto;border-radius:var(--border-radius-pill);color:var(--color-text-maxcontrast);background-color:rgba(0,0,0,0)}a .anchor-icon[data-v-7539c74a]{display:inline-block;vertical-align:middle;margin-top:6px;margin-right:8px}a[data-v-7539c74a]:hover,a[data-v-7539c74a]:focus,a[data-v-7539c74a]:active{color:var(--color-main-text);background-color:var(--color-background-dark)}a.disabled[data-v-7539c74a]{pointer-events:none}", "", {
                    version: 3,
                    sources: ["webpack://./apps/settings/src/components/PersonalInfo/ProfileSection/EditProfileAnchorLink.vue"],
                    names: [],
                    mappings: "AACA,mBACC,aAAA,CACA,WAAA,CACA,WAAA,CACA,gBAAA,CACA,cAAA,CACA,gBAAA,CACA,uCAAA,CACA,mCAAA,CACA,8BAAA,CAEA,gCACC,oBAAA,CACA,qBAAA,CACA,cAAA,CACA,gBAAA,CAGD,4EAGC,4BAAA,CACA,6CAAA,CAGD,4BACC,mBAAA",
                    sourcesContent: ["\na {\n\tdisplay: block;\n\theight: 44px;\n\twidth: 290px;\n\tline-height: 44px;\n\tpadding: 0 16px;\n\tmargin: 14px auto;\n\tborder-radius: var(--border-radius-pill);\n\tcolor: var(--color-text-maxcontrast);\n\tbackground-color: transparent;\n\n\t.anchor-icon {\n\t\tdisplay: inline-block;\n\t\tvertical-align: middle;\n\t\tmargin-top: 6px;\n\t\tmargin-right: 8px;\n\t}\n\n\t&:hover,\n\t&:focus,\n\t&:active {\n\t\tcolor: var(--color-main-text);\n\t\tbackground-color: var(--color-background-dark);\n\t}\n\n\t&.disabled {\n\t\tpointer-events: none;\n\t}\n}\n"],
                    sourceRoot: ""
                }]);
                const r = s
            },
            5348: (t, e, a) => {
                "use strict";
                a.d(e, {
                    Z: () => r
                });
                var n = a(87537),
                    i = a.n(n),
                    o = a(23645),
                    s = a.n(o)()(i());
                s.push([t.id, ".preview-card[data-v-05581203]{display:flex;flex-direction:column;position:relative;width:290px;height:116px;margin:14px auto;border-radius:var(--border-radius-large);background-color:var(--color-main-background);font-weight:bold;box-shadow:0 2px 9px var(--color-box-shadow)}.preview-card[data-v-05581203]:hover,.preview-card[data-v-05581203]:focus,.preview-card[data-v-05581203]:active{box-shadow:0 2px 12px var(--color-box-shadow)}.preview-card[data-v-05581203]:focus-visible{outline:var(--color-main-text) solid 1px;outline-offset:3px}.preview-card.disabled[data-v-05581203]{filter:grayscale(1);opacity:.5;cursor:default;box-shadow:0 0 3px var(--color-box-shadow)}.preview-card.disabled *[data-v-05581203],.preview-card.disabled[data-v-05581203] *{cursor:default}.preview-card__avatar[data-v-05581203]{position:absolute !important;top:40px;left:18px;z-index:1}.preview-card__avatar[data-v-05581203]:not(.avatardiv--unknown){box-shadow:0 0 0 3px var(--color-main-background) !important}.preview-card__header[data-v-05581203],.preview-card__footer[data-v-05581203]{position:relative;width:auto}.preview-card__header span[data-v-05581203],.preview-card__footer span[data-v-05581203]{position:absolute;left:78px;overflow:hidden;text-overflow:ellipsis;overflow-wrap:anywhere}@supports(-webkit-line-clamp: 2){.preview-card__header span[data-v-05581203],.preview-card__footer span[data-v-05581203]{display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical}}.preview-card__header[data-v-05581203]{height:70px;border-radius:var(--border-radius-large) var(--border-radius-large) 0 0;background-color:var(--color-primary-element);background-image:var(--gradient-primary-background)}.preview-card__header span[data-v-05581203]{bottom:0;color:var(--color-primary-element-text);font-size:18px;font-weight:bold;margin:0 4px 8px 0}.preview-card__footer[data-v-05581203]{height:46px}.preview-card__footer span[data-v-05581203]{top:0;color:var(--color-text-maxcontrast);font-size:14px;font-weight:normal;margin:4px 4px 0 0;line-height:1.3}", "", {
                    version: 3,
                    sources: ["webpack://./apps/settings/src/components/PersonalInfo/ProfileSection/ProfilePreviewCard.vue"],
                    names: [],
                    mappings: "AACA,+BACC,YAAA,CACA,qBAAA,CACA,iBAAA,CACA,WAAA,CACA,YAAA,CACA,gBAAA,CACA,wCAAA,CACA,6CAAA,CACA,gBAAA,CACA,4CAAA,CAEA,gHAGC,6CAAA,CAGD,6CACC,wCAAA,CACA,kBAAA,CAGD,wCACC,mBAAA,CACA,UAAA,CACA,cAAA,CACA,0CAAA,CAEA,oFAEC,cAAA,CAIF,uCAEC,4BAAA,CACA,QAAA,CACA,SAAA,CACA,SAAA,CAEA,gEACC,4DAAA,CAIF,8EAEC,iBAAA,CACA,UAAA,CAEA,wFACC,iBAAA,CACA,SAAA,CACA,eAAA,CACA,sBAAA,CACA,sBAAA,CAEA,iCAPD,wFAQE,mBAAA,CACA,oBAAA,CACA,2BAAA,CAAA,CAKH,uCACC,WAAA,CACA,uEAAA,CACA,6CAAA,CACA,mDAAA,CAEA,4CACC,QAAA,CACA,uCAAA,CACA,cAAA,CACA,gBAAA,CACA,kBAAA,CAIF,uCACC,WAAA,CAEA,4CACC,KAAA,CACA,mCAAA,CACA,cAAA,CACA,kBAAA,CACA,kBAAA,CACA,eAAA",
                    sourcesContent: ["\n.preview-card {\n\tdisplay: flex;\n\tflex-direction: column;\n\tposition: relative;\n\twidth: 290px;\n\theight: 116px;\n\tmargin: 14px auto;\n\tborder-radius: var(--border-radius-large);\n\tbackground-color: var(--color-main-background);\n\tfont-weight: bold;\n\tbox-shadow: 0 2px 9px var(--color-box-shadow);\n\n\t&:hover,\n\t&:focus,\n\t&:active {\n\t\tbox-shadow: 0 2px 12px var(--color-box-shadow);\n\t}\n\n\t&:focus-visible {\n\t\toutline: var(--color-main-text) solid 1px;\n\t\toutline-offset: 3px;\n\t}\n\n\t&.disabled {\n\t\tfilter: grayscale(1);\n\t\topacity: 0.5;\n\t\tcursor: default;\n\t\tbox-shadow: 0 0 3px var(--color-box-shadow);\n\n\t\t& *,\n\t\t&::v-deep * {\n\t\t\tcursor: default;\n\t\t}\n\t}\n\n\t&__avatar {\n\t\t// Override Avatar component position to fix positioning on rerender\n\t\tposition: absolute !important;\n\t\ttop: 40px;\n\t\tleft: 18px;\n\t\tz-index: 1;\n\n\t\t&:not(.avatardiv--unknown) {\n\t\t\tbox-shadow: 0 0 0 3px var(--color-main-background) !important;\n\t\t}\n\t}\n\n\t&__header,\n\t&__footer {\n\t\tposition: relative;\n\t\twidth: auto;\n\n\t\tspan {\n\t\t\tposition: absolute;\n\t\t\tleft: 78px;\n\t\t\toverflow: hidden;\n\t\t\ttext-overflow: ellipsis;\n\t\t\toverflow-wrap: anywhere;\n\n\t\t\t@supports (-webkit-line-clamp: 2) {\n\t\t\t\tdisplay: -webkit-box;\n\t\t\t\t-webkit-line-clamp: 2;\n\t\t\t\t-webkit-box-orient: vertical;\n\t\t\t}\n\t\t}\n\t}\n\n\t&__header {\n\t\theight: 70px;\n\t\tborder-radius: var(--border-radius-large) var(--border-radius-large) 0 0;\n\t\tbackground-color: var(--color-primary-element);\n\t\tbackground-image: var(--gradient-primary-background);\n\n\t\tspan {\n\t\t\tbottom: 0;\n\t\t\tcolor: var(--color-primary-element-text);\n\t\t\tfont-size: 18px;\n\t\t\tfont-weight: bold;\n\t\t\tmargin: 0 4px 8px 0;\n\t\t}\n\t}\n\n\t&__footer {\n\t\theight: 46px;\n\n\t\tspan {\n\t\t\ttop: 0;\n\t\t\tcolor: var(--color-text-maxcontrast);\n\t\t\tfont-size: 14px;\n\t\t\tfont-weight: normal;\n\t\t\tmargin: 4px 4px 0 0;\n\t\t\tline-height: 1.3;\n\t\t}\n\t}\n}\n"],
                    sourceRoot: ""
                }]);
                const r = s
            },
            90552: (t, e, a) => {
                "use strict";
                a.d(e, {
                    Z: () => r
                });
                var n = a(87537),
                    i = a.n(n),
                    o = a(23645),
                    s = a.n(o)()(i());
                s.push([t.id, "section[data-v-cf64d964]{padding:10px 10px}section[data-v-cf64d964] button:disabled{cursor:default}", "", {
                    version: 3,
                    sources: ["webpack://./apps/settings/src/components/PersonalInfo/ProfileSection/ProfileSection.vue"],
                    names: [],
                    mappings: "AACA,yBACC,iBAAA,CAEA,yCACC,cAAA",
                    sourcesContent: ["\nsection {\n\tpadding: 10px 10px;\n\n\t&::v-deep button:disabled {\n\t\tcursor: default;\n\t}\n}\n"],
                    sourceRoot: ""
                }]);
                const r = s
            },
            45386: (t, e, a) => {
                "use strict";
                a.d(e, {
                    Z: () => r
                });
                var n = a(87537),
                    i = a.n(n),
                    o = a(23645),
                    s = a.n(o)()(i());
                s.push([t.id, "section[data-v-a07dbf96]{padding:30px;max-width:900px;width:100%}section em[data-v-a07dbf96]{display:block;margin:16px 0}section em.disabled[data-v-a07dbf96]{filter:grayscale(1);opacity:.5;cursor:default;pointer-events:none}section em.disabled *[data-v-a07dbf96],section em.disabled[data-v-a07dbf96] *{cursor:default;pointer-events:none}section .visibility-dropdowns[data-v-a07dbf96]{display:grid;gap:10px 40px}@media(min-width: 1200px){section[data-v-a07dbf96]{width:940px}section .visibility-dropdowns[data-v-a07dbf96]{grid-auto-flow:column}}@media(max-width: 1200px){section[data-v-a07dbf96]{width:470px}}", "", {
                    version: 3,
                    sources: ["webpack://./apps/settings/src/components/PersonalInfo/ProfileVisibilitySection/ProfileVisibilitySection.vue"],
                    names: [],
                    mappings: "AACA,yBACC,YAAA,CACA,eAAA,CACA,UAAA,CAEA,4BACC,aAAA,CACA,aAAA,CAEA,qCACC,mBAAA,CACA,UAAA,CACA,cAAA,CACA,mBAAA,CAEA,8EAEC,cAAA,CACA,mBAAA,CAKH,+CACC,YAAA,CACA,aAAA,CAGD,0BA5BD,yBA6BE,WAAA,CAEA,+CACC,qBAAA,CAAA,CAIF,0BApCD,yBAqCE,WAAA,CAAA",
                    sourcesContent: ["\nsection {\n\tpadding: 30px;\n\tmax-width: 900px;\n\twidth: 100%;\n\n\tem {\n\t\tdisplay: block;\n\t\tmargin: 16px 0;\n\n\t\t&.disabled {\n\t\t\tfilter: grayscale(1);\n\t\t\topacity: 0.5;\n\t\t\tcursor: default;\n\t\t\tpointer-events: none;\n\n\t\t\t& *,\n\t\t\t&::v-deep * {\n\t\t\t\tcursor: default;\n\t\t\t\tpointer-events: none;\n\t\t\t}\n\t\t}\n\t}\n\n\t.visibility-dropdowns {\n\t\tdisplay: grid;\n\t\tgap: 10px 40px;\n\t}\n\n\t@media (min-width: 1200px) {\n\t\twidth: 940px;\n\n\t\t.visibility-dropdowns {\n\t\t\tgrid-auto-flow: column;\n\t\t}\n\t}\n\n\t@media (max-width: 1200px) {\n\t\twidth: 470px;\n\t}\n}\n"],
                    sourceRoot: ""
                }]);
                const r = s
            },
            63019: (t, e, a) => {
                "use strict";
                a.d(e, {
                    Z: () => r
                });
                var n = a(87537),
                    i = a.n(n),
                    o = a(23645),
                    s = a.n(o)()(i());
                s.push([t.id, ".visibility-container[data-v-b13d20da]{display:flex;width:max-content}.visibility-container.disabled[data-v-b13d20da]{filter:grayscale(1);opacity:.5;cursor:default;pointer-events:none}.visibility-container.disabled *[data-v-b13d20da],.visibility-container.disabled[data-v-b13d20da] *{cursor:default;pointer-events:none}.visibility-container label[data-v-b13d20da]{color:var(--color-text-lighter);width:150px;line-height:50px}.visibility-container__select[data-v-b13d20da]{width:270px;max-width:40vw}", "", {
                    version: 3,
                    sources: ["webpack://./apps/settings/src/components/PersonalInfo/ProfileVisibilitySection/VisibilityDropdown.vue"],
                    names: [],
                    mappings: "AACA,uCACC,YAAA,CACA,iBAAA,CAEA,gDACC,mBAAA,CACA,UAAA,CACA,cAAA,CACA,mBAAA,CAEA,oGAEC,cAAA,CACA,mBAAA,CAIF,6CACC,+BAAA,CACA,WAAA,CACA,gBAAA,CAGD,+CACC,WAAA,CACA,cAAA",
                    sourcesContent: ["\n.visibility-container {\n\tdisplay: flex;\n\twidth: max-content;\n\n\t&.disabled {\n\t\tfilter: grayscale(1);\n\t\topacity: 0.5;\n\t\tcursor: default;\n\t\tpointer-events: none;\n\n\t\t& *,\n\t\t&::v-deep * {\n\t\t\tcursor: default;\n\t\t\tpointer-events: none;\n\t\t}\n\t}\n\n\tlabel {\n\t\tcolor: var(--color-text-lighter);\n\t\twidth: 150px;\n\t\tline-height: 50px;\n\t}\n\n\t&__select {\n\t\twidth: 270px;\n\t\tmax-width: 40vw;\n\t}\n}\n"],
                    sourceRoot: ""
                }]);
                const r = s
            },
            49237: (t, e, a) => {
                "use strict";
                a.d(e, {
                    Z: () => r
                });
                var n = a(87537),
                    i = a.n(n),
                    o = a(23645),
                    s = a.n(o)()(i());
                s.push([t.id, "section[data-v-400ac7dc]{padding:10px 10px}section[data-v-400ac7dc] button:disabled{cursor:default}section .property[data-v-400ac7dc]{display:grid;align-items:center}section .property textarea[data-v-400ac7dc]{resize:vertical;grid-area:1/1;width:100%}section .property input[data-v-400ac7dc]{grid-area:1/1;width:100%}section .property .property__actions-container[data-v-400ac7dc]{grid-area:1/1;justify-self:flex-end;align-self:flex-end;height:30px;display:flex;gap:0 2px;margin-right:5px;margin-bottom:5px}section .property__helper-text-message[data-v-400ac7dc]{padding:4px 0;display:flex;align-items:center}section .property__helper-text-message__icon[data-v-400ac7dc]{margin-right:8px;align-self:start;margin-top:4px}section .property__helper-text-message--error[data-v-400ac7dc]{color:var(--color-error)}section .fade-enter[data-v-400ac7dc],section .fade-leave-to[data-v-400ac7dc]{opacity:0}section .fade-enter-active[data-v-400ac7dc]{transition:opacity 200ms ease-out}section .fade-leave-active[data-v-400ac7dc]{transition:opacity 300ms ease-out}", "", {
                    version: 3,
                    sources: ["webpack://./apps/settings/src/components/PersonalInfo/shared/AccountPropertySection.vue"],
                    names: [],
                    mappings: "AACA,yBACC,iBAAA,CAEA,yCACC,cAAA,CAGD,mCACC,YAAA,CACA,kBAAA,CAEA,4CACC,eAAA,CACA,aAAA,CACA,UAAA,CAGD,yCACC,aAAA,CACA,UAAA,CAGD,gEACC,aAAA,CACA,qBAAA,CACA,mBAAA,CACA,WAAA,CAEA,YAAA,CACA,SAAA,CACA,gBAAA,CACA,iBAAA,CAIF,wDACC,aAAA,CACA,YAAA,CACA,kBAAA,CAEA,8DACC,gBAAA,CACA,gBAAA,CACA,cAAA,CAGD,+DACC,wBAAA,CAIF,6EAEC,SAAA,CAGD,4CACC,iCAAA,CAGD,4CACC,iCAAA",
                    sourcesContent: ["\nsection {\n\tpadding: 10px 10px;\n\n\t&::v-deep button:disabled {\n\t\tcursor: default;\n\t}\n\n\t.property {\n\t\tdisplay: grid;\n\t\talign-items: center;\n\n\t\ttextarea {\n\t\t\tresize: vertical;\n\t\t\tgrid-area: 1 / 1;\n\t\t\twidth: 100%;\n\t\t}\n\n\t\tinput {\n\t\t\tgrid-area: 1 / 1;\n\t\t\twidth: 100%;\n\t\t}\n\n\t\t.property__actions-container {\n\t\t\tgrid-area: 1 / 1;\n\t\t\tjustify-self: flex-end;\n\t\t\talign-self: flex-end;\n\t\t\theight: 30px;\n\n\t\t\tdisplay: flex;\n\t\t\tgap: 0 2px;\n\t\t\tmargin-right: 5px;\n\t\t\tmargin-bottom: 5px;\n\t\t}\n\t}\n\n\t.property__helper-text-message {\n\t\tpadding: 4px 0;\n\t\tdisplay: flex;\n\t\talign-items: center;\n\n\t\t&__icon {\n\t\t\tmargin-right: 8px;\n\t\t\talign-self: start;\n\t\t\tmargin-top: 4px;\n\t\t}\n\n\t\t&--error {\n\t\t\tcolor: var(--color-error);\n\t\t}\n\t}\n\n\t.fade-enter,\n\t.fade-leave-to {\n\t\topacity: 0;\n\t}\n\n\t.fade-enter-active {\n\t\ttransition: opacity 200ms ease-out;\n\t}\n\n\t.fade-leave-active {\n\t\ttransition: opacity 300ms ease-out;\n\t}\n}\n"],
                    sourceRoot: ""
                }]);
                const r = s
            },
            14036: (t, e, a) => {
                "use strict";
                a.d(e, {
                    Z: () => r
                });
                var n = a(87537),
                    i = a.n(n),
                    o = a(23645),
                    s = a.n(o)()(i());
                s.push([t.id, ".federation-actions[data-v-4ea07669],.federation-actions--additional[data-v-4ea07669]{opacity:.4 !important}.federation-actions[data-v-4ea07669]:hover,.federation-actions[data-v-4ea07669]:focus,.federation-actions[data-v-4ea07669]:active,.federation-actions--additional[data-v-4ea07669]:hover,.federation-actions--additional[data-v-4ea07669]:focus,.federation-actions--additional[data-v-4ea07669]:active{opacity:.8 !important}.federation-actions--additional[data-v-4ea07669] button{padding-bottom:7px;height:30px !important;min-height:30px !important;width:30px !important;min-width:30px !important}", "", {
                    version: 3,
                    sources: ["webpack://./apps/settings/src/components/PersonalInfo/shared/FederationControl.vue"],
                    names: [],
                    mappings: "AACA,sFAEC,qBAAA,CAEA,wSAGC,qBAAA,CAKD,wDAEC,kBAAA,CACA,sBAAA,CACA,0BAAA,CACA,qBAAA,CACA,yBAAA",
                    sourcesContent: ["\n.federation-actions,\n.federation-actions--additional {\n\topacity: 0.4 !important;\n\n\t&:hover,\n\t&:focus,\n\t&:active {\n\t\topacity: 0.8 !important;\n\t}\n}\n\n.federation-actions--additional {\n\t&::v-deep button {\n\t\t// TODO remove this hack\n\t\tpadding-bottom: 7px;\n\t\theight: 30px !important;\n\t\tmin-height: 30px !important;\n\t\twidth: 30px !important;\n\t\tmin-width: 30px !important;\n\t}\n}\n"],
                    sourceRoot: ""
                }]);
                const r = s
            },
            30253: (t, e, a) => {
                "use strict";
                a.d(e, {
                    Z: () => r
                });
                var n = a(87537),
                    i = a.n(n),
                    o = a(23645),
                    s = a.n(o)()(i());
                s.push([t.id, ".federation-actions__btn[data-v-2ef553c8] p{width:150px !important;padding:8px 0 !important;color:var(--color-main-text) !important;font-size:12.8px !important;line-height:1.5em !important}.federation-actions__btn--active[data-v-2ef553c8]{background-color:var(--color-primary-element-light) !important;box-shadow:inset 2px 0 var(--color-primary-element) !important}", "", {
                    version: 3,
                    sources: ["webpack://./apps/settings/src/components/PersonalInfo/shared/FederationControlAction.vue"],
                    names: [],
                    mappings: "AAEC,4CACC,sBAAA,CACA,wBAAA,CACA,uCAAA,CACA,2BAAA,CACA,4BAAA,CAIF,kDACC,8DAAA,CACA,8DAAA",
                    sourcesContent: ["\n.federation-actions__btn {\n\t&::v-deep p {\n\t\twidth: 150px !important;\n\t\tpadding: 8px 0 !important;\n\t\tcolor: var(--color-main-text) !important;\n\t\tfont-size: 12.8px !important;\n\t\tline-height: 1.5em !important;\n\t}\n}\n\n.federation-actions__btn--active {\n\tbackground-color: var(--color-primary-element-light) !important;\n\tbox-shadow: inset 2px 0 var(--color-primary-element) !important;\n}\n"],
                    sourceRoot: ""
                }]);
                const r = s
            },
            90564: (t, e, a) => {
                "use strict";
                a.d(e, {
                    Z: () => r
                });
                var n = a(87537),
                    i = a.n(n),
                    o = a(23645),
                    s = a.n(o)()(i());
                s.push([t.id, ".headerbar-label[data-v-b43fcc0c]{font-weight:normal;display:inline-flex;width:100%;margin:12px 0 0 0;gap:8px;align-items:center;font-size:16px;color:var(--color-text-light)}.headerbar-label.profile-property[data-v-b43fcc0c]{height:38px}.headerbar-label.setting-property[data-v-b43fcc0c]{height:44px}.headerbar-label label[data-v-b43fcc0c]{cursor:pointer}.federation-control[data-v-b43fcc0c]{margin:0}.button-vue[data-v-b43fcc0c]{margin:0 0 0 auto !important}", "", {
                    version: 3,
                    sources: ["webpack://./apps/settings/src/components/PersonalInfo/shared/HeaderBar.vue"],
                    names: [],
                    mappings: "AACA,kCACC,kBAAA,CACA,mBAAA,CACA,UAAA,CACA,iBAAA,CACA,OAAA,CACA,kBAAA,CACA,cAAA,CACA,6BAAA,CAEA,mDACC,WAAA,CAGD,mDACC,WAAA,CAGD,wCACC,cAAA,CAIF,qCACC,QAAA,CAGD,6BACC,4BAAA",
                    sourcesContent: ["\n.headerbar-label {\n\tfont-weight: normal;\n\tdisplay: inline-flex;\n\twidth: 100%;\n\tmargin: 12px 0 0 0;\n\tgap: 8px;\n\talign-items: center;\n\tfont-size: 16px;\n\tcolor: var(--color-text-light);\n\n\t&.profile-property {\n\t\theight: 38px;\n\t}\n\n\t&.setting-property {\n\t\theight: 44px;\n\t}\n\n\tlabel {\n\t\tcursor: pointer;\n\t}\n}\n\n.federation-control {\n\tmargin: 0;\n}\n\n.button-vue  {\n\tmargin: 0 0 0 auto !important;\n}\n"],
                    sourceRoot: ""
                }]);
                const r = s
            },
            46700: (t, e, a) => {
                var n = {
                    "./af": 42786,
                    "./af.js": 42786,
                    "./ar": 30867,
                    "./ar-dz": 14130,
                    "./ar-dz.js": 14130,
                    "./ar-kw": 96135,
                    "./ar-kw.js": 96135,
                    "./ar-ly": 56440,
                    "./ar-ly.js": 56440,
                    "./ar-ma": 47702,
                    "./ar-ma.js": 47702,
                    "./ar-sa": 16040,
                    "./ar-sa.js": 16040,
                    "./ar-tn": 37100,
                    "./ar-tn.js": 37100,
                    "./ar.js": 30867,
                    "./az": 31083,
                    "./az.js": 31083,
                    "./be": 9808,
                    "./be.js": 9808,
                    "./bg": 68338,
                    "./bg.js": 68338,
                    "./bm": 67438,
                    "./bm.js": 67438,
                    "./bn": 8905,
                    "./bn-bd": 76225,
                    "./bn-bd.js": 76225,
                    "./bn.js": 8905,
                    "./bo": 11560,
                    "./bo.js": 11560,
                    "./br": 1278,
                    "./br.js": 1278,
                    "./bs": 80622,
                    "./bs.js": 80622,
                    "./ca": 2468,
                    "./ca.js": 2468,
                    "./cs": 5822,
                    "./cs.js": 5822,
                    "./cv": 50877,
                    "./cv.js": 50877,
                    "./cy": 47373,
                    "./cy.js": 47373,
                    "./da": 24780,
                    "./da.js": 24780,
                    "./de": 59740,
                    "./de-at": 60217,
                    "./de-at.js": 60217,
                    "./de-ch": 60894,
                    "./de-ch.js": 60894,
                    "./de.js": 59740,
                    "./dv": 5300,
                    "./dv.js": 5300,
                    "./el": 50837,
                    "./el.js": 50837,
                    "./en-au": 78348,
                    "./en-au.js": 78348,
                    "./en-ca": 77925,
                    "./en-ca.js": 77925,
                    "./en-gb": 22243,
                    "./en-gb.js": 22243,
                    "./en-ie": 46436,
                    "./en-ie.js": 46436,
                    "./en-il": 47207,
                    "./en-il.js": 47207,
                    "./en-in": 44175,
                    "./en-in.js": 44175,
                    "./en-nz": 76319,
                    "./en-nz.js": 76319,
                    "./en-sg": 31662,
                    "./en-sg.js": 31662,
                    "./eo": 92915,
                    "./eo.js": 92915,
                    "./es": 55655,
                    "./es-do": 55251,
                    "./es-do.js": 55251,
                    "./es-mx": 96112,
                    "./es-mx.js": 96112,
                    "./es-us": 71146,
                    "./es-us.js": 71146,
                    "./es.js": 55655,
                    "./et": 5603,
                    "./et.js": 5603,
                    "./eu": 77763,
                    "./eu.js": 77763,
                    "./fa": 76959,
                    "./fa.js": 76959,
                    "./fi": 11897,
                    "./fi.js": 11897,
                    "./fil": 42549,
                    "./fil.js": 42549,
                    "./fo": 94694,
                    "./fo.js": 94694,
                    "./fr": 94470,
                    "./fr-ca": 63049,
                    "./fr-ca.js": 63049,
                    "./fr-ch": 52330,
                    "./fr-ch.js": 52330,
                    "./fr.js": 94470,
                    "./fy": 5044,
                    "./fy.js": 5044,
                    "./ga": 29295,
                    "./ga.js": 29295,
                    "./gd": 2101,
                    "./gd.js": 2101,
                    "./gl": 38794,
                    "./gl.js": 38794,
                    "./gom-deva": 27884,
                    "./gom-deva.js": 27884,
                    "./gom-latn": 23168,
                    "./gom-latn.js": 23168,
                    "./gu": 95349,
                    "./gu.js": 95349,
                    "./he": 24206,
                    "./he.js": 24206,
                    "./hi": 30094,
                    "./hi.js": 30094,
                    "./hr": 30316,
                    "./hr.js": 30316,
                    "./hu": 22138,
                    "./hu.js": 22138,
                    "./hy-am": 11423,
                    "./hy-am.js": 11423,
                    "./id": 29218,
                    "./id.js": 29218,
                    "./is": 90135,
                    "./is.js": 90135,
                    "./it": 90626,
                    "./it-ch": 10150,
                    "./it-ch.js": 10150,
                    "./it.js": 90626,
                    "./ja": 39183,
                    "./ja.js": 39183,
                    "./jv": 24286,
                    "./jv.js": 24286,
                    "./ka": 12105,
                    "./ka.js": 12105,
                    "./kk": 47772,
                    "./kk.js": 47772,
                    "./km": 18758,
                    "./km.js": 18758,
                    "./kn": 79282,
                    "./kn.js": 79282,
                    "./ko": 33730,
                    "./ko.js": 33730,
                    "./ku": 1408,
                    "./ku.js": 1408,
                    "./ky": 33291,
                    "./ky.js": 33291,
                    "./lb": 36841,
                    "./lb.js": 36841,
                    "./lo": 55466,
                    "./lo.js": 55466,
                    "./lt": 57010,
                    "./lt.js": 57010,
                    "./lv": 37595,
                    "./lv.js": 37595,
                    "./me": 39861,
                    "./me.js": 39861,
                    "./mi": 35493,
                    "./mi.js": 35493,
                    "./mk": 95966,
                    "./mk.js": 95966,
                    "./ml": 87341,
                    "./ml.js": 87341,
                    "./mn": 5115,
                    "./mn.js": 5115,
                    "./mr": 10370,
                    "./mr.js": 10370,
                    "./ms": 9847,
                    "./ms-my": 41237,
                    "./ms-my.js": 41237,
                    "./ms.js": 9847,
                    "./mt": 72126,
                    "./mt.js": 72126,
                    "./my": 56165,
                    "./my.js": 56165,
                    "./nb": 64924,
                    "./nb.js": 64924,
                    "./ne": 16744,
                    "./ne.js": 16744,
                    "./nl": 93901,
                    "./nl-be": 59814,
                    "./nl-be.js": 59814,
                    "./nl.js": 93901,
                    "./nn": 83877,
                    "./nn.js": 83877,
                    "./oc-lnc": 92135,
                    "./oc-lnc.js": 92135,
                    "./pa-in": 15858,
                    "./pa-in.js": 15858,
                    "./pl": 64495,
                    "./pl.js": 64495,
                    "./pt": 89520,
                    "./pt-br": 57971,
                    "./pt-br.js": 57971,
                    "./pt.js": 89520,
                    "./ro": 96459,
                    "./ro.js": 96459,
                    "./ru": 21793,
                    "./ru.js": 21793,
                    "./sd": 40950,
                    "./sd.js": 40950,
                    "./se": 10490,
                    "./se.js": 10490,
                    "./si": 90124,
                    "./si.js": 90124,
                    "./sk": 64249,
                    "./sk.js": 64249,
                    "./sl": 14985,
                    "./sl.js": 14985,
                    "./sq": 51104,
                    "./sq.js": 51104,
                    "./sr": 49131,
                    "./sr-cyrl": 79915,
                    "./sr-cyrl.js": 79915,
                    "./sr.js": 49131,
                    "./ss": 85893,
                    "./ss.js": 85893,
                    "./sv": 98760,
                    "./sv.js": 98760,
                    "./sw": 91172,
                    "./sw.js": 91172,
                    "./ta": 27333,
                    "./ta.js": 27333,
                    "./te": 23110,
                    "./te.js": 23110,
                    "./tet": 52095,
                    "./tet.js": 52095,
                    "./tg": 27321,
                    "./tg.js": 27321,
                    "./th": 9041,
                    "./th.js": 9041,
                    "./tk": 19005,
                    "./tk.js": 19005,
                    "./tl-ph": 75768,
                    "./tl-ph.js": 75768,
                    "./tlh": 89444,
                    "./tlh.js": 89444,
                    "./tr": 72397,
                    "./tr.js": 72397,
                    "./tzl": 28254,
                    "./tzl.js": 28254,
                    "./tzm": 51106,
                    "./tzm-latn": 30699,
                    "./tzm-latn.js": 30699,
                    "./tzm.js": 51106,
                    "./ug-cn": 9288,
                    "./ug-cn.js": 9288,
                    "./uk": 67691,
                    "./uk.js": 67691,
                    "./ur": 13795,
                    "./ur.js": 13795,
                    "./uz": 6791,
                    "./uz-latn": 60588,
                    "./uz-latn.js": 60588,
                    "./uz.js": 6791,
                    "./vi": 65666,
                    "./vi.js": 65666,
                    "./x-pseudo": 14378,
                    "./x-pseudo.js": 14378,
                    "./yo": 75805,
                    "./yo.js": 75805,
                    "./zh-cn": 83839,
                    "./zh-cn.js": 83839,
                    "./zh-hk": 55726,
                    "./zh-hk.js": 55726,
                    "./zh-mo": 99807,
                    "./zh-mo.js": 99807,
                    "./zh-tw": 74152,
                    "./zh-tw.js": 74152
                };

                function i(t) {
                    var e = o(t);
                    return a(e)
                }

                function o(t) {
                    if (!a.o(n, t)) {
                        var e = new Error("Cannot find module '" + t + "'");
                        throw e.code = "MODULE_NOT_FOUND", e
                    }
                    return n[t]
                }
                i.keys = function() {
                    return Object.keys(n)
                }, i.resolve = o, t.exports = i, i.id = 46700
            },
            8738: t => {
                "use strict";
                t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAQMAAAAlPW0iAAAAA3NCSVQICAjb4U/gAAAABlBMVEXMzMz////TjRV2AAAACXBIWXMAAArrAAAK6wGCiw1aAAAAHHRFWHRTb2Z0d2FyZQBBZG9iZSBGaXJld29ya3MgQ1M26LyyjAAAABFJREFUCJlj+M/AgBVhF/0PAH6/D/HkDxOGAAAAAElFTkSuQmCC"
            },
            81490: t => {
                "use strict";
                t.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMTYiIHdpZHRoPSIxNiI+CiAgPHBhdGggZD0iTTE0IDEyLjNMMTIuMyAxNCA4IDkuNyAzLjcgMTQgMiAxMi4zIDYuMyA4IDIgMy43IDMuNyAyIDggNi4zIDEyLjMgMiAxNCAzLjcgOS43IDh6Ii8+Cjwvc3ZnPgo="
            },
            90888: t => {
                "use strict";
                t.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMTYiIHdpZHRoPSIxNiI+CiAgPHBhdGggZD0iTTE0IDEyLjNMMTIuMyAxNCA4IDkuNyAzLjcgMTQgMiAxMi4zIDYuMyA4IDIgMy43IDMuNyAyIDggNi4zIDEyLjMgMiAxNCAzLjcgOS43IDh6IiBzdHlsZT0iZmlsbC1vcGFjaXR5OjE7ZmlsbDojZmZmZmZmIi8+Cjwvc3ZnPgo="
            }
        },
        n = {};

    function i(t) {
        var e = n[t];
        if (void 0 !== e) return e.exports;
        var o = n[t] = {
            id: t,
            loaded: !1,
            exports: {}
        };
        return a[t].call(o.exports, o, o.exports, i), o.loaded = !0, o.exports
    }
    i.m = a, e = [], i.O = (t, a, n, o) => {
        if (!a) {
            var s = 1 / 0;
            for (c = 0; c < e.length; c++) {
                a = e[c][0], n = e[c][1], o = e[c][2];
                for (var r = !0, l = 0; l < a.length; l++)(!1 & o || s >= o) && Object.keys(i.O).every((t => i.O[t](a[l]))) ? a.splice(l--, 1) : (r = !1, o < s && (s = o));
                if (r) {
                    e.splice(c--, 1);
                    var d = n();
                    void 0 !== d && (t = d)
                }
            }
            return t
        }
        o = o || 0;
        for (var c = e.length; c > 0 && e[c - 1][2] > o; c--) e[c] = e[c - 1];
        e[c] = [a, n, o]
    }, i.n = t => {
        var e = t && t.__esModule ? () => t.default : () => t;
        return i.d(e, {
            a: e
        }), e
    }, i.d = (t, e) => {
        for (var a in e) i.o(e, a) && !i.o(t, a) && Object.defineProperty(t, a, {
            enumerable: !0,
            get: e[a]
        })
    }, i.g = function() {
        if ("object" == typeof globalThis) return globalThis;
        try {
            return this || new Function("return this")()
        } catch (t) {
            if ("object" == typeof window) return window
        }
    }(), i.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e), i.r = t => {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }, i.nmd = t => (t.paths = [], t.children || (t.children = []), t), i.j = 4418, (() => {
        i.b = document.baseURI || self.location.href;
        var t = {
            4418: 0
        };
        i.O.j = e => 0 === t[e];
        var e = (e, a) => {
                var n, o, s = a[0],
                    r = a[1],
                    l = a[2],
                    d = 0;
                if (s.some((e => 0 !== t[e]))) {
                    for (n in r) i.o(r, n) && (i.m[n] = r[n]);
                    if (l) var c = l(i)
                }
                for (e && e(a); d < s.length; d++) o = s[d], i.o(t, o) && t[o] && t[o][0](), t[o] = 0;
                return i.O(c)
            },
            a = self.webpackChunknextcloud = self.webpackChunknextcloud || [];
        a.forEach(e.bind(null, 0)), a.push = e.bind(null, a.push.bind(a))
    })(), i.nc = void 0;
    var o = i.O(void 0, [7874], (() => i(81567)));
    o = i.O(o)
})();
//# sourceMappingURL=settings-vue-settings-personal-info.js.map?v=d61d9eebfda12df6153f