// Generated by BUCKLESCRIPT VERSION 5.0.4, PLEASE EDIT WITH CARE
'use strict';

var Css = require("bs-css/src/Css.js");
var React = require("react");
var LoadingSvg = require("./images/loading.svg");

var loadingSvg = LoadingSvg;

var container = Css.style(/* :: */[
      Css.position(Css.fixed),
      /* :: */[
        Css.display(Css.flexBox),
        /* :: */[
          Css.alignItems(Css.center),
          /* :: */[
            Css.justifyContent(Css.center),
            /* :: */[
              Css.backgroundColor(Css.rgba(0, 0, 0, 0.3)),
              /* :: */[
                Css.top(Css.px(0)),
                /* :: */[
                  Css.left(Css.px(0)),
                  /* :: */[
                    Css.width(Css.pct(100)),
                    /* :: */[
                      Css.height(Css.vh(100)),
                      /* :: */[
                        Css.zIndex(100),
                        /* [] */0
                      ]
                    ]
                  ]
                ]
              ]
            ]
          ]
        ]
      ]
    ]);

var Styles = /* module */[/* container */container];

function Loader(Props) {
  return React.createElement("div", {
              className: container
            }, React.createElement("img", {
                  src: loadingSvg
                }));
}

var make = Loader;

exports.loadingSvg = loadingSvg;
exports.Styles = Styles;
exports.make = make;
/* loadingSvg Not a pure module */
