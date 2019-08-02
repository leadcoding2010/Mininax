// Generated by BUCKLESCRIPT VERSION 5.0.4, PLEASE EDIT WITH CARE
'use strict';

var React = require("react");
var Styles1$ReactHooksTemplate = require("./Styles1.bs.js");
var ItemDisplay$ReactHooksTemplate = require("./ItemDisplay.bs.js");
var ContextProvider$ReactHooksTemplate = require("./ContextProvider.bs.js");

function Account(Props) {
  var items = Props.items;
  var goToDetail = Props.goToDetail;
  var theme = React.useContext(ContextProvider$ReactHooksTemplate.themeContext);
  var changeLevel = function (level) {
    return /* () */0;
  };
  return React.createElement("div", {
              className: Styles1$ReactHooksTemplate.container(theme)
            }, React.createElement("div", {
                  className: Styles1$ReactHooksTemplate.title(theme)
                }, "Account"), React.createElement(ItemDisplay$ReactHooksTemplate.make, {
                  entity: "account",
                  items: items,
                  changeLevel: changeLevel,
                  goToDetail: goToDetail
                }), React.createElement("div", {
                  className: Styles1$ReactHooksTemplate.accountBtn(theme)
                }, "All sent transactions"), React.createElement("div", {
                  className: Styles1$ReactHooksTemplate.accountBtn(theme)
                }, "All received transactions"), React.createElement("div", {
                  className: Styles1$ReactHooksTemplate.accountBtn(theme)
                }, "All reveals, delegations and originations"), React.createElement("div", {
                  className: Styles1$ReactHooksTemplate.accountBtn(theme)
                }, "All endorsements"), React.createElement("div", {
                  className: Styles1$ReactHooksTemplate.accountBtn(theme)
                }, "All baked blocks"), React.createElement("div", {
                  className: Styles1$ReactHooksTemplate.accountBtn(theme)
                }, "All deposits and rewards"));
}

var make = Account;

exports.make = make;
/* react Not a pure module */
