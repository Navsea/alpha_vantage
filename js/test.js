"use strict";
(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([
  [3807],
  {
    77799: function (e, t, n) {
      n.r(t);
      var r = n(34095),
        i = n(87138),
        o = n(17241);
      function s(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function c(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? s(Object(n), !0).forEach(function (t) {
                (0, r.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : s(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      function a(e, t) {
        return (0, o.jsxs)(
          "svg",
          c(
            c(
              {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 1200 800",
                ref: t,
              },
              e
            ),
            {},
            {
              children: [
                (0, o.jsx)("path", { fill: "#E30A17", d: "M0 0h1200v800H0z" }),
                (0, o.jsx)("circle", {
                  cx: 425,
                  cy: 400,
                  r: 200,
                  fill: "#fff",
                }),
                (0, o.jsx)("circle", {
                  cx: 475,
                  cy: 400,
                  r: 160,
                  fill: "#e30a17",
                }),
                (0, o.jsx)("path", {
                  fill: "#fff",
                  d: "M583.334 400l180.901 58.779-111.804-153.885v190.212l111.804-153.885z",
                }),
              ],
            }
          )
        );
      }
      var l = i.forwardRef(a);
      t.default = l;
    },
    47039: function (e, t, n) {
      n.r(t);
      var r = n(34095),
        i = n(87138),
        o = n(17241);
      function s(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function c(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? s(Object(n), !0).forEach(function (t) {
                (0, r.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : s(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      function a(e, t) {
        return (0, o.jsxs)(
          "svg",
          c(
            c(
              {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 72 48",
                ref: t,
              },
              e
            ),
            {},
            {
              children: [
                (0, o.jsx)("path", { d: "M0 48V0h72z", fill: "#1eb53a" }),
                (0, o.jsx)("path", { d: "M0 48h72V0z", fill: "#00a3dd" }),
                (0, o.jsx)("path", {
                  d: "M0 48L72 0",
                  stroke: "#fcd116",
                  strokeWidth: 19,
                }),
                (0, o.jsx)("path", {
                  d: "M0 48L72 0",
                  stroke: "#000",
                  strokeWidth: 13,
                }),
              ],
            }
          )
        );
      }
      var l = i.forwardRef(a);
      t.default = l;
    },
    81887: function (e, t, n) {
      n.r(t);
      var r = n(98673),
        i = n(87138),
        o = n(88737),
        s = n(31968),
        c = n(9152),
        a = n(80142),
        l = n(17241),
        u = (0, c.ZP)(
          {
            resolved: {},
            chunkName: function () {
              return "components-OurPlans-components-PlansModal-PlansModal";
            },
            isReady: function (e) {
              var t = this.resolve(e);
              return !0 === this.resolved[t] && !!n.m[t];
            },
            importAsync: function () {
              return n.e(8726).then(n.bind(n, 78145));
            },
            requireAsync: function (e) {
              var t = this,
                n = this.resolve(e);
              return (
                (this.resolved[n] = !1),
                this.importAsync(e).then(function (e) {
                  return (t.resolved[n] = !0), e;
                })
              );
            },
            requireSync: function e(t) {
              var r = this.resolve(t);
              return n(r);
            },
            resolve: function e() {
              return 78145;
            },
          },
          { ssr: !1 }
        ),
        d = (0, s.ZP)({
          type: "track",
          action: "shown",
          modifier: "plansModal",
          page: "trialExpired",
        })(u),
        p = function () {
          var e = (0, a.E2)().data,
            t = (0, o.ZP)(),
            n = t.data,
            s = t.mutate,
            c = t.isFetched,
            u = (0, i.useState)(!1),
            p = (0, r.Z)(u, 2),
            f = p[0],
            h = p[1];
          (0, i.useEffect)(
            function () {
              c &&
                !0 !== n.hasSeenTrialEndModal &&
                "free" === e.planType &&
                "trialing" !== n.billing.status &&
                h(!0);
            },
            [c, e, n]
          );
          var m = (0, i.useCallback)(
            function () {
              s({ settings: { has_seen_trial_end_modal: !0 } });
            },
            [s]
          );
          return (0, l.jsx)(l.Fragment, {
            children:
              f &&
              (0, l.jsxs)(d, {
                onClose: function () {
                  return h(!1);
                },
                onAction: m,
                children: [
                  (0, l.jsxs)("p", {
                    "data-cy-id": "plan-restriction",
                    children: [
                      "Premium Trial expired.",
                      " Youâ€™re now on our Free Plan.",
                    ],
                  }),
                  (0, l.jsx)("h2", {
                    children:
                      "Select the plan that best suits your needs to continue.",
                  }),
                ],
              }),
          });
        };
      t.default = p;
    },
    71930: function (e, t, n) {
      n.d(t, {
        T: function () {
          return v;
        },
      });
      var r = n(98673),
        i = n(87138),
        o = n(67333),
        s = n(26290),
        c = n(95941),
        a = n(20976),
        l = n(31968),
        u = n(80142),
        d = n(34205),
        p = n(9152),
        f = n(88737),
        h = n(17241),
        m = (0, p.ZP)({
          resolved: {},
          chunkName: function () {
            return "components-OurPlans-components-PlansModal-PlansModal";
          },
          isReady: function (e) {
            var t = this.resolve(e);
            return !0 === this.resolved[t] && !!n.m[t];
          },
          importAsync: function () {
            return n.e(8726).then(n.bind(n, 78145));
          },
          requireAsync: function (e) {
            var t = this,
              n = this.resolve(e);
            return (
              (this.resolved[n] = !1),
              this.importAsync(e).then(function (e) {
                return (t.resolved[n] = !0), e;
              })
            );
          },
          requireSync: function e(t) {
            var r = this.resolve(t);
            return n(r);
          },
          resolve: function e() {
            return 78145;
          },
        });
      function v(e) {
        var t = e.scrollLimitExceed,
          n = e.selected,
          p = e.pageState,
          v = (0, i.useState)("none"),
          y = (0, r.Z)(v, 2),
          w = y[0],
          b = y[1],
          j = (0, c.D4)().mutateCompanyView,
          g = (0, a.yF)(),
          x = (0, l.rS)().trackEvent,
          O = (0, c.j1)("success" === g.status ? g.companyId : void 0),
          P = (0, u.E2)().data,
          L = (0, f.ZP)().data;
        return (
          (0, i.useEffect)(
            function () {
              var e =
                "free" === P.planType || "trialing" === L.billing.status
                  ? t
                  : t && "summary" !== n;
              "restricted" === p && e && !O.visited
                ? "plansLimit" !== w && b("plansLimit")
                : "premium" !== P.planType ||
                  "normal" !== p ||
                  !t ||
                  "summary" === n ||
                  O.restricted ||
                  O.visited ||
                  "trialing" === L.billing.status
                ? ("plansLimit" !== w && "viewLimit" !== w) ||
                  (!O.visited && t && "summary" !== n) ||
                  b("none")
                : ("success" === g.status &&
                    "viewLimit" !== w &&
                    x({
                      type: "track",
                      subject: "page",
                      action: "show",
                      modifier: "viewLimitModal",
                      companyId: g.companyId,
                      uniqueSymbol: g.uniqueSymbol,
                    }),
                  "viewLimit" !== w && b("viewLimit"));
            },
            [
              x,
              w,
              p,
              t,
              P.planType,
              O.restricted,
              O.visited,
              n,
              g,
              L.billing.status,
            ]
          ),
          (0, h.jsx)(d.Z, {
            conditions: {
              showPlansModal: "plansLimit" === w,
              showLimitModal: "viewLimit" === w,
            },
            children: {
              showPlansModal: function () {
                return (0, h.jsxs)(m, {
                  children: [
                    P &&
                      (0, h.jsx)("p", {
                        "data-cy-id": "plan-restriction",
                        children: ""
                          .concat(P.viewCompanyReports, " / ")
                          .concat(P.viewCompanyReports, " reports viewed."),
                      }),
                    (0, h.jsx)("h2", {
                      children: "Upgrade to unlock your limits.",
                    }),
                  ],
                });
              },
              showLimitModal: function () {
                return (0, h.jsxs)(h.Fragment, {
                  children: [
                    (0, h.jsx)(s.a, {
                      blurAmount: 20,
                      filterId: "company-report",
                    }),
                    (0, h.jsx)(o.P, {}),
                    (0, h.jsxs)(o.v, {
                      children: [
                        (0, h.jsx)(s.B, {
                          "data-cy-id": "view-limit-modal",
                          styleType: "louderLarge",
                          onClick: function () {
                            j("success" === g.status ? g.companyId : void 0),
                              "success" === g.status &&
                                x({
                                  type: "track",
                                  subject: "page",
                                  action: "click",
                                  modifier: "viewLimitModal",
                                  companyId: g.companyId,
                                  uniqueSymbol: g.uniqueSymbol,
                                });
                          },
                          children: "View Full Report",
                        }),
                        "success" === O.status &&
                          (0, h.jsxs)("p", {
                            "data-cy-id": "plan-restriction",
                            children: [
                              "You have viewed",
                              " ",
                              (0, h.jsx)("span", { children: O.views }),
                              " / ".concat(
                                O.limit,
                                " full reports over 30 days"
                              ),
                            ],
                          }),
                      ],
                    }),
                  ],
                });
              },
            },
          })
        );
      }
    },
    63291: function (e, t, n) {
      n.r(t),
        n.d(t, {
          ViewLimitModal: function () {
            return r.T;
          },
        });
      var r = n(71930);
    },
    67333: function (e, t, n) {
      n.d(t, {
        P: function () {
          return i;
        },
        v: function () {
          return o;
        },
      });
      var r = n(34146),
        i = (0, r.ZP)("div").withConfig({ componentId: "sc-1x30e62-0" })([
          "position:fixed;top:0;height:100%;width:100%;background:linear-gradient( 180deg,rgba(21,27,36,0) 0%,rgba(21,27,36,0.9) 69.75%,#151b24 100% );z-index:1;",
        ]),
        o = (0, r.ZP)("div").withConfig({ componentId: "sc-1x30e62-1" })(
          [
            "z-index:1;text-align:center;position:sticky;bottom:100px;color:white;> button{margin:",
            "px 0;}> p{",
            " > span{color:",
            ";}}",
          ],
          function (e) {
            return e.theme.x3spacePx;
          },
          function (e) {
            return e.theme.typography.tiny;
          },
          function (e) {
            return e.theme.color.warning;
          }
        );
    },
  },
]);
//# sourceMappingURL=assets-images-markets-tr-svg.modern.92e29cbc.js.map
