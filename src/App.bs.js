// Generated by BUCKLESCRIPT VERSION 5.0.4, PLEASE EDIT WITH CARE
'use strict';

var Css = require("bs-css/src/Css.js");
var Block = require("bs-platform/lib/js/block.js");
var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var Caml_array = require("bs-platform/lib/js/caml_array.js");
var ReactIntl = require("react-intl");
var Caml_format = require("bs-platform/lib/js/caml_format.js");
var Caml_option = require("bs-platform/lib/js/caml_option.js");
var ReasonReactRouter = require("reason-react/src/ReasonReactRouter.js");
var Type$ReactHooksTemplate = require("./Type.bs.js");
var Block$ReactHooksTemplate = require("./Block.bs.js");
var Error$ReactHooksTemplate = require("./Error.bs.js");
var Utils$ReactHooksTemplate = require("./Utils.bs.js");
var Footer$ReactHooksTemplate = require("./Footer.bs.js");
var Loader$ReactHooksTemplate = require("./Loader.bs.js");
var Themes$ReactHooksTemplate = require("./themes.bs.js");
var Account$ReactHooksTemplate = require("./Account.bs.js");
var ApiCall$ReactHooksTemplate = require("./ApiCall.bs.js");
var Configs$ReactHooksTemplate = require("./configs.bs.js");
var Operation$ReactHooksTemplate = require("./Operation.bs.js");
var ContextProvider$ReactHooksTemplate = require("./ContextProvider.bs.js");
var NetworkSelector$ReactHooksTemplate = require("./NetworkSelector.bs.js");

function container(index) {
  return Css.style(/* :: */[
              Css.width(Css.pct(100)),
              /* :: */[
                Css.minHeight(Css.vh(100)),
                /* :: */[
                  Css.display(Css.flexBox),
                  /* :: */[
                    Css.flexDirection(Css.column),
                    /* :: */[
                      Css.backgroundColor(Css.hex(Caml_array.caml_array_get(Themes$ReactHooksTemplate.themes, index)[/* mainBgColor */0])),
                      /* [] */0
                    ]
                  ]
                ]
              ]
            ]);
}

var header = Css.style(/* :: */[
      Css.padding4(Css.px(45), Css.px(45), Css.px(30), Css.px(45)),
      /* [] */0
    ]);

var headerTitle = Css.style(/* :: */[
      Css.fontFamily("'Arcade', sans-serif"),
      /* :: */[
        Css.fontSize(Css.px(60)),
        /* :: */[
          Css.color(Css.white),
          /* :: */[
            Css.lineHeight(Css.px(35)),
            /* :: */[
              Css.letterSpacing(Css.px(3)),
              /* :: */[
                Css.cursor(/* pointer */-786317123),
                /* :: */[
                  Css.display(Css.inlineBlock),
                  /* [] */0
                ]
              ]
            ]
          ]
        ]
      ]
    ]);

var mainContainer = Css.style(/* :: */[
      Css.padding4(Css.px(0), Css.px(35), Css.px(0), Css.px(35)),
      /* :: */[
        Css.flex(/* `num */[
              5496390,
              1
            ]),
        /* :: */[
          Css.marginBottom(Css.px(40)),
          /* [] */0
        ]
      ]
    ]);

var Styles = /* module */[
  /* container */container,
  /* header */header,
  /* headerTitle */headerTitle,
  /* mainContainer */mainContainer
];

function reducer(state, action) {
  if (typeof action === "number") {
    if (action === 0) {
      return /* record */[
              /* entity */state[/* entity */0],
              /* id */state[/* id */1],
              /* isLoading */true,
              /* selectedConfig */state[/* selectedConfig */3],
              /* isOpenNetworkSelector */state[/* isOpenNetworkSelector */4],
              /* isError */state[/* isError */5],
              /* error */state[/* error */6],
              /* block */state[/* block */7],
              /* account */state[/* account */8],
              /* operation */state[/* operation */9]
            ];
    } else {
      return /* record */[
              /* entity */state[/* entity */0],
              /* id */state[/* id */1],
              /* isLoading */false,
              /* selectedConfig */state[/* selectedConfig */3],
              /* isOpenNetworkSelector */state[/* isOpenNetworkSelector */4],
              /* isError */false,
              /* error */"",
              /* block */state[/* block */7],
              /* account */state[/* account */8],
              /* operation */state[/* operation */9]
            ];
    }
  } else {
    switch (action.tag | 0) {
      case 0 : 
          return /* record */[
                  /* entity */state[/* entity */0],
                  /* id */action[0],
                  /* isLoading */state[/* isLoading */2],
                  /* selectedConfig */state[/* selectedConfig */3],
                  /* isOpenNetworkSelector */state[/* isOpenNetworkSelector */4],
                  /* isError */state[/* isError */5],
                  /* error */state[/* error */6],
                  /* block */state[/* block */7],
                  /* account */state[/* account */8],
                  /* operation */state[/* operation */9]
                ];
      case 1 : 
          return /* record */[
                  /* entity */state[/* entity */0],
                  /* id */state[/* id */1],
                  /* isLoading */state[/* isLoading */2],
                  /* selectedConfig */action[0],
                  /* isOpenNetworkSelector */false,
                  /* isError */state[/* isError */5],
                  /* error */state[/* error */6],
                  /* block */state[/* block */7],
                  /* account */state[/* account */8],
                  /* operation */state[/* operation */9]
                ];
      case 2 : 
          return /* record */[
                  /* entity */action[0],
                  /* id */action[1],
                  /* isLoading */state[/* isLoading */2],
                  /* selectedConfig */state[/* selectedConfig */3],
                  /* isOpenNetworkSelector */state[/* isOpenNetworkSelector */4],
                  /* isError */state[/* isError */5],
                  /* error */state[/* error */6],
                  /* block */state[/* block */7],
                  /* account */state[/* account */8],
                  /* operation */state[/* operation */9]
                ];
      case 3 : 
          return /* record */[
                  /* entity */state[/* entity */0],
                  /* id */state[/* id */1],
                  /* isLoading */false,
                  /* selectedConfig */state[/* selectedConfig */3],
                  /* isOpenNetworkSelector */state[/* isOpenNetworkSelector */4],
                  /* isError */true,
                  /* error */action[0],
                  /* block */state[/* block */7],
                  /* account */state[/* account */8],
                  /* operation */state[/* operation */9]
                ];
      case 4 : 
          return /* record */[
                  /* entity */state[/* entity */0],
                  /* id */state[/* id */1],
                  /* isLoading */false,
                  /* selectedConfig */state[/* selectedConfig */3],
                  /* isOpenNetworkSelector */state[/* isOpenNetworkSelector */4],
                  /* isError */state[/* isError */5],
                  /* error */state[/* error */6],
                  /* block */action[0],
                  /* account */state[/* account */8],
                  /* operation */state[/* operation */9]
                ];
      case 5 : 
          return /* record */[
                  /* entity */state[/* entity */0],
                  /* id */state[/* id */1],
                  /* isLoading */false,
                  /* selectedConfig */state[/* selectedConfig */3],
                  /* isOpenNetworkSelector */state[/* isOpenNetworkSelector */4],
                  /* isError */state[/* isError */5],
                  /* error */state[/* error */6],
                  /* block */state[/* block */7],
                  /* account */action[0],
                  /* operation */state[/* operation */9]
                ];
      case 6 : 
          return /* record */[
                  /* entity */state[/* entity */0],
                  /* id */state[/* id */1],
                  /* isLoading */false,
                  /* selectedConfig */state[/* selectedConfig */3],
                  /* isOpenNetworkSelector */state[/* isOpenNetworkSelector */4],
                  /* isError */state[/* isError */5],
                  /* error */state[/* error */6],
                  /* block */state[/* block */7],
                  /* account */state[/* account */8],
                  /* operation */action[0]
                ];
      case 7 : 
          return /* record */[
                  /* entity */state[/* entity */0],
                  /* id */state[/* id */1],
                  /* isLoading */state[/* isLoading */2],
                  /* selectedConfig */state[/* selectedConfig */3],
                  /* isOpenNetworkSelector */action[0],
                  /* isError */state[/* isError */5],
                  /* error */state[/* error */6],
                  /* block */state[/* block */7],
                  /* account */state[/* account */8],
                  /* operation */state[/* operation */9]
                ];
      
    }
  }
}

var isFirstLoad = /* record */[/* contents */false];

var selectedConfig = /* record */[/* contents */0];

function App(Props) {
  var url = ReasonReactRouter.useUrl(undefined, /* () */0);
  var footerRef = /* record */[/* contents */undefined];
  var match = React.useReducer(reducer, Type$ReactHooksTemplate.initState);
  var dispatch = match[1];
  var state = match[0];
  var getBlock = function (id, isRoute) {
    Curry._1(dispatch, /* SetLoading */0);
    ApiCall$ReactHooksTemplate.getBlockThunk(id, Caml_array.caml_array_get(Configs$ReactHooksTemplate.configs, selectedConfig[0])).then((function (result) {
              switch (result[0]) {
                case "Error" : 
                    var match = result[1];
                    if (match !== undefined) {
                      return Promise.resolve(Curry._1(dispatch, /* SetError */Block.__(3, [match])));
                    } else {
                      return Promise.resolve(Curry._1(dispatch, /* SetError */Block.__(3, [Utils$ReactHooksTemplate.noAvaialbel])));
                    }
                case "Valid" : 
                    var match$1 = result[2];
                    if (match$1 !== undefined) {
                      var block = Caml_option.valFromOption(match$1);
                      if (isRoute) {
                        var url = Utils$ReactHooksTemplate.makeUrl(Caml_array.caml_array_get(Configs$ReactHooksTemplate.configs, selectedConfig[0])[/* network */3], "blocks", id);
                        ReasonReactRouter.push(url);
                        return Promise.resolve(Curry._1(dispatch, /* SetBlock */Block.__(4, [block])));
                      } else {
                        return Promise.resolve(Curry._1(dispatch, /* SetBlock */Block.__(4, [block])));
                      }
                    } else {
                      return Promise.resolve(Curry._1(dispatch, /* SetError */Block.__(3, [Utils$ReactHooksTemplate.noAvaialbel])));
                    }
                default:
                  return Promise.resolve(Curry._1(dispatch, /* SetError */Block.__(3, [Utils$ReactHooksTemplate.noAvaialbel])));
              }
            })).catch((function (_err) {
            return Promise.resolve(Curry._1(dispatch, /* SetError */Block.__(3, [Utils$ReactHooksTemplate.noAvaialbel])));
          }));
    return /* () */0;
  };
  var getOperation = function (id, isRoute) {
    Curry._1(dispatch, /* SetLoading */0);
    ApiCall$ReactHooksTemplate.getOperationThunk(id, Caml_array.caml_array_get(Configs$ReactHooksTemplate.configs, selectedConfig[0])).then((function (result) {
              switch (result[0]) {
                case "Error" : 
                    var match = result[1];
                    if (match !== undefined) {
                      return Promise.resolve(Curry._1(dispatch, /* SetError */Block.__(3, [match])));
                    } else {
                      return Promise.resolve(Curry._1(dispatch, /* SetError */Block.__(3, [Utils$ReactHooksTemplate.noAvaialbel])));
                    }
                case "Valid" : 
                    var match$1 = result[2];
                    if (match$1 !== undefined) {
                      var operations = match$1;
                      if (isRoute) {
                        var url = Utils$ReactHooksTemplate.makeUrl(Caml_array.caml_array_get(Configs$ReactHooksTemplate.configs, selectedConfig[0])[/* network */3], "operations", id);
                        ReasonReactRouter.push(url);
                        return Promise.resolve(Curry._1(dispatch, /* SetOperations */Block.__(6, [operations])));
                      } else {
                        return Promise.resolve(Curry._1(dispatch, /* SetOperations */Block.__(6, [operations])));
                      }
                    } else {
                      return Promise.resolve(Curry._1(dispatch, /* SetError */Block.__(3, [Utils$ReactHooksTemplate.noAvaialbel])));
                    }
                default:
                  return Promise.resolve(Curry._1(dispatch, /* SetError */Block.__(3, [Utils$ReactHooksTemplate.noAvaialbel])));
              }
            })).catch((function (_err) {
            return Promise.resolve(Curry._1(dispatch, /* SetError */Block.__(3, [Utils$ReactHooksTemplate.noAvaialbel])));
          }));
    return /* () */0;
  };
  var getAccount = function (id, isRoute) {
    Curry._1(dispatch, /* SetLoading */0);
    ApiCall$ReactHooksTemplate.getAccountThunk(id, Caml_array.caml_array_get(Configs$ReactHooksTemplate.configs, selectedConfig[0])).then((function (result) {
              switch (result[0]) {
                case "Error" : 
                    var match = result[1];
                    if (match !== undefined) {
                      return Promise.resolve(Curry._1(dispatch, /* SetError */Block.__(3, [match])));
                    } else {
                      return Promise.resolve(Curry._1(dispatch, /* SetError */Block.__(3, [Utils$ReactHooksTemplate.noAvaialbel])));
                    }
                case "Valid" : 
                    var match$1 = result[2];
                    if (match$1 !== undefined) {
                      var account = Caml_option.valFromOption(match$1);
                      if (isRoute) {
                        var url = Utils$ReactHooksTemplate.makeUrl(Caml_array.caml_array_get(Configs$ReactHooksTemplate.configs, selectedConfig[0])[/* network */3], "accounts", id);
                        ReasonReactRouter.push(url);
                        return Promise.resolve(Curry._1(dispatch, /* SetAccount */Block.__(5, [account])));
                      } else {
                        return Promise.resolve(Curry._1(dispatch, /* SetAccount */Block.__(5, [account])));
                      }
                    } else {
                      return Promise.resolve(Curry._1(dispatch, /* SetError */Block.__(3, [Utils$ReactHooksTemplate.noAvaialbel])));
                    }
                default:
                  return Promise.resolve(Curry._1(dispatch, /* SetError */Block.__(3, [Utils$ReactHooksTemplate.noAvaialbel])));
              }
            })).catch((function (_err) {
            return Promise.resolve(Curry._1(dispatch, /* SetError */Block.__(3, [Utils$ReactHooksTemplate.noAvaialbel])));
          }));
    return /* () */0;
  };
  var getHashByLevel = function (level) {
    Curry._1(dispatch, /* SetLoading */0);
    ApiCall$ReactHooksTemplate.getBlockHashThunk(level, Caml_array.caml_array_get(Configs$ReactHooksTemplate.configs, selectedConfig[0])).then((function (result) {
              if (result !== undefined) {
                return Promise.resolve(getBlock(Caml_option.valFromOption(result).hash, true));
              } else {
                return Promise.resolve(Curry._1(dispatch, /* SetError */Block.__(3, [Utils$ReactHooksTemplate.noAvaialbel])));
              }
            })).catch((function (_err) {
            return Promise.resolve(Curry._1(dispatch, /* SetError */Block.__(3, [Utils$ReactHooksTemplate.noAvaialbel])));
          }));
    return /* () */0;
  };
  var getMainPage = function (param) {
    Curry._1(dispatch, /* SetLoading */0);
    ApiCall$ReactHooksTemplate.getBlockHeadThunk(Caml_array.caml_array_get(Configs$ReactHooksTemplate.configs, selectedConfig[0])).then((function (result) {
            if (result !== undefined) {
              return Promise.resolve(getBlock(Caml_option.valFromOption(result).hash, false));
            } else {
              return Promise.resolve(Curry._1(dispatch, /* SetError */Block.__(3, [Utils$ReactHooksTemplate.noAvaialbel])));
            }
          }));
    return /* () */0;
  };
  var goToPage = function (network, entity, id) {
    var selectedIndex = Configs$ReactHooksTemplate.configs.findIndex((function (conf) {
            return conf[/* network */3] === network;
          }));
    if (selectedIndex !== -1) {
      Curry._1(dispatch, /* ChangeNetwork */Block.__(1, [selectedIndex]));
      selectedConfig[0] = selectedIndex;
      Curry._1(dispatch, /* SetParams */Block.__(2, [
              entity,
              id
            ]));
      switch (entity) {
        case "accounts" : 
            return getAccount(id, false);
        case "blocks" : 
            return getBlock(id, false);
        case "operations" : 
            return getOperation(id, false);
        default:
          getMainPage(/* () */0);
          return ReasonReactRouter.push("/");
      }
    } else {
      return ReasonReactRouter.push("/");
    }
  };
  var setFooterRef = function (ref) {
    footerRef[0] = (ref == null) ? undefined : Caml_option.some(ref);
    return /* () */0;
  };
  var testRef = function (_event) {
    var match = footerRef[0];
    if (match !== undefined) {
      return Caml_option.valFromOption(match).focus();
    } else {
      return /* () */0;
    }
  };
  var onChangeId = function (id) {
    var newId = id.replace((/ /g), "");
    return Curry._1(dispatch, /* SetId */Block.__(0, [newId]));
  };
  var onSearchById = function (id) {
    var firstChar = id.slice(0, 1).toLowerCase();
    var twoChars = id.slice(0, 2).toLowerCase();
    var isNumber = Utils$ReactHooksTemplate.isNumber(id);
    switch (firstChar) {
      case "b" : 
          return getBlock(id, true);
      case "o" : 
          return getOperation(id, true);
      default:
        switch (twoChars) {
          case "kt" : 
          case "tz" : 
              return getAccount(id, true);
          default:
            if (isNumber) {
              return getHashByLevel(Caml_format.caml_int_of_string(id));
            } else {
              return Curry._1(dispatch, /* SetError */Block.__(3, [Utils$ReactHooksTemplate.invalidId]));
            }
        }
    }
  };
  var onChangeNetwork = function (index) {
    if (state[/* selectedConfig */3] !== index) {
      Curry._1(dispatch, /* ChangeNetwork */Block.__(1, [index]));
      selectedConfig[0] = index;
      getMainPage(/* () */0);
      return ReasonReactRouter.push("/");
    } else {
      return Curry._1(dispatch, /* OpenNetwork */Block.__(7, [false]));
    }
  };
  if (!isFirstLoad[0]) {
    isFirstLoad[0] = true;
    var match$1 = url[/* path */0];
    if (match$1) {
      var match$2 = match$1[1];
      if (match$2) {
        var match$3 = match$2[1];
        if (match$3 && !match$3[1]) {
          goToPage(match$1[0], match$2[0], match$3[0]);
        } else {
          getMainPage(/* () */0);
          ReasonReactRouter.push("/");
        }
      } else {
        getMainPage(/* () */0);
        ReasonReactRouter.push("/");
      }
    } else {
      getMainPage(/* () */0);
    }
  }
  var match$4 = url[/* path */0];
  var tmp;
  var exit = 0;
  if (match$4) {
    var match$5 = match$4[1];
    if (match$5) {
      switch (match$5[0]) {
        case "accounts" : 
            var match$6 = match$5[1];
            if (match$6 && !match$6[1]) {
              tmp = React.createElement(Account$ReactHooksTemplate.make, {
                    items: state[/* account */8],
                    goToDetail: onSearchById
                  });
            } else {
              exit = 1;
            }
            break;
        case "operations" : 
            var match$7 = match$5[1];
            if (match$7 && !match$7[1]) {
              tmp = React.createElement(Operation$ReactHooksTemplate.make, {
                    items: state[/* operation */9],
                    goToDetail: onSearchById
                  });
            } else {
              exit = 1;
            }
            break;
        default:
          exit = 1;
      }
    } else {
      exit = 1;
    }
  } else {
    exit = 1;
  }
  if (exit === 1) {
    tmp = React.createElement(Block$ReactHooksTemplate.make, {
          items: state[/* block */7],
          goToBlock: getHashByLevel,
          goToDetail: onSearchById
        });
  }
  var match$8 = state[/* isLoading */2];
  var match$9 = state[/* isError */5];
  var match$10 = state[/* isOpenNetworkSelector */4];
  return React.createElement(ReactIntl.IntlProvider, {
              children: React.createElement(ContextProvider$ReactHooksTemplate.make, ContextProvider$ReactHooksTemplate.makeProps(state[/* selectedConfig */3], React.createElement("div", {
                            className: container(state[/* selectedConfig */3])
                          }, React.createElement("div", {
                                className: header,
                                onClick: testRef
                              }, React.createElement("div", {
                                    className: headerTitle
                                  }, "MININAX")), React.createElement("div", {
                                className: mainContainer
                              }, tmp), React.createElement(Footer$ReactHooksTemplate.make, {
                                searhVal: state[/* id */1],
                                network: Caml_array.caml_array_get(Configs$ReactHooksTemplate.configs, state[/* selectedConfig */3])[/* displayName */4],
                                setRef: setFooterRef,
                                changeId: onChangeId,
                                onSearch: (function (param) {
                                    return onSearchById(state[/* id */1]);
                                  }),
                                onOpenNetworkSelector: (function (param) {
                                    return Curry._1(dispatch, /* OpenNetwork */Block.__(7, [true]));
                                  })
                              }), match$8 ? React.createElement(Loader$ReactHooksTemplate.make, { }) : null, match$9 ? React.createElement(Error$ReactHooksTemplate.make, {
                                  error: state[/* error */6],
                                  onTry: (function (param) {
                                      return Curry._1(dispatch, /* RemoveError */1);
                                    })
                                }) : null, match$10 ? React.createElement(NetworkSelector$ReactHooksTemplate.make, {
                                  selectedIndex: state[/* selectedConfig */3],
                                  onChange: onChangeNetwork,
                                  onCancel: (function (param) {
                                      return Curry._1(dispatch, /* OpenNetwork */Block.__(7, [false]));
                                    })
                                }) : null), /* () */0))
            });
}

var make = App;

exports.Styles = Styles;
exports.reducer = reducer;
exports.isFirstLoad = isFirstLoad;
exports.selectedConfig = selectedConfig;
exports.make = make;
/* header Not a pure module */
