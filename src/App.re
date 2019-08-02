open Type;
open Configs;
open Themes;

module Styles = {
  open Css;
  let container= index => style([
    width(pct(100.)),
    minHeight(vh(100.)),
    display(flexBox),
    flexDirection(column),
    backgroundColor(hex(themes[index].mainBgColor))
  ]);
  let header = style([padding4(~top=px(45), ~bottom=px(30), ~left=px(45), ~right=px(45))]);
  let headerTitle = style([
    fontFamily("'Arcade', sans-serif"),
    fontSize(px(60)),
    color(white),
    lineHeight(px(35)),
    letterSpacing(px(3)),
    cursor(`pointer),
    display(inlineBlock)
  ]);
  let mainContainer = style([
    padding4(~top=px(0), ~bottom=px(0), ~left=px(35), ~right=px(35)),
    flex(`num(1.)),
    marginBottom(px(40))
  ]);
};

let reducer = (state, action) =>
  switch (action) {
    | SetId(id) => {...state, id}
    | SetLoading => {...state, isLoading: true}
    | ChangeNetwork(config) => {...state, selectedConfig: config, isOpenNetworkSelector: false}
    | SetParams(entity, id) => {...state, entity, id}
    | SetError(error) => {...state, error, isError: true, isLoading: false}
    | RemoveError => {...state, error: "", isError: false, isLoading: false}
    | SetBlock(block) => {...state, block, isLoading: false}
    | SetAccount(account) => {...state, account, isLoading: false}
    | SetOperations(operation) => {...state, operation, isLoading: false}
    | OpenNetwork(status) => {...state, isOpenNetworkSelector: status}
  };

let isFirstLoad = ref(false);
let selectedConfig = ref(0);

[@react.component]
let make = () => {
  let url = ReasonReactRouter.useUrl();
  let footerRef = ref(None);
  let (state, dispatch) = React.useReducer(reducer, initState);

  let getBlock = (id: string, isRoute: bool) => {
    dispatch(SetLoading);
    Js.Promise.(
      ApiCall.getBlockThunk(id, configs[selectedConfig^])
      |> then_(result => {
          switch result {
          | ("Error", Some(error), _) => resolve(dispatch(SetError(error)))
          | ("Valid", _, Some(block)) => {
            switch isRoute {
              | true => {
                let url = Utils.makeUrl(configs[selectedConfig^].network, "blocks", id);
                ReasonReactRouter.push(url);
                resolve(dispatch(SetBlock(block)));
              }
              | false => resolve(dispatch(SetBlock(block)))
            };
          }
          | _ => resolve(dispatch(SetError(Utils.noAvaialbel)))
          };
      })
      |> catch(_err => resolve(dispatch(SetError(Utils.noAvaialbel))))
    );
    ();
  };

  let getOperation = (id: string, isRoute: bool) => {
    dispatch(SetLoading);
    Js.Promise.(
      ApiCall.getOperationThunk(id, configs[selectedConfig^])
      |> then_(result => {
          switch result {
          | ("Error", Some(error), _) => resolve(dispatch(SetError(error)))
          | ("Valid", _, Some(operations)) => {
            switch isRoute {
              | true => {
                let url = Utils.makeUrl(configs[selectedConfig^].network, "operations", id);
                ReasonReactRouter.push(url);
                resolve(dispatch(SetOperations(operations)));
              }
              | false => resolve(dispatch(SetOperations(operations)));
            };
          }
          | _ => resolve(dispatch(SetError(Utils.noAvaialbel)))
          };
      })
      |> catch(_err => resolve(dispatch(SetError(Utils.noAvaialbel))))
    );
    ();
  };

  let getAccount = (id: string, isRoute: bool) => {
    dispatch(SetLoading);
    Js.Promise.(
      ApiCall.getAccountThunk(id, configs[selectedConfig^])
      |> then_(result => {
          switch result {
          | ("Error", Some(error), _) => resolve(dispatch(SetError(error)))
          | ("Valid", _, Some(account)) => {
            switch isRoute {
              | true => {
                let url = Utils.makeUrl(configs[selectedConfig^].network, "accounts", id);
                ReasonReactRouter.push(url);
                resolve(dispatch(SetAccount(account)));
              }
              | false => resolve(dispatch(SetAccount(account)));
            };
          }
          | _ => resolve(dispatch(SetError(Utils.noAvaialbel)))
          };
      })
      |> catch(_err => resolve(dispatch(SetError(Utils.noAvaialbel))))
    );
    ();
  };

  let getHashByLevel = (level: int) => {
    dispatch(SetLoading);
    Js.Promise.(
      ApiCall.getBlockHashThunk(level, configs[selectedConfig^])
      |> then_(result =>
        switch (result) {
          | Some(head) => resolve(getBlock(head##hash, true))
          | None => resolve(dispatch(SetError(Utils.noAvaialbel)))
        }
      )
      |> catch(_err => resolve(dispatch(SetError(Utils.noAvaialbel))))
    );
    ();
  };

  let getMainPage = () => {
    dispatch(SetLoading);
    Js.Promise.(
      ApiCall.getBlockHeadThunk(configs[selectedConfig^])
      |> then_(result =>
        switch (result) {
          | Some(head) => resolve(getBlock(head##hash, false))
          | None => resolve(dispatch(SetError(Utils.noAvaialbel)))
        }
      )
      |> ignore
    );
  };

  let goToMainPage = () => {
    getMainPage();
    ReasonReactRouter.push("/");
  };

  let goToPage = (network: string, entity: string, id: string) => {
    let selectedIndex = configs |> Js.Array.findIndex(conf => conf.network === network);
    switch (selectedIndex) {
      | -1 => ReasonReactRouter.push("/")
      | _ => {
        dispatch(ChangeNetwork(selectedIndex));
        selectedConfig := selectedIndex;
        dispatch(SetParams(entity, id));
        switch entity {
          | "blocks" => getBlock(id, false)
          | "accounts" => getAccount(id, false)
          | "operations" => getOperation(id, false)
          | _ => goToMainPage()
        };
      }
    };
  };

  let setFooterRef = (ref) => {
    footerRef := Js.Nullable.toOption(ref);
  }

  let testRef = (_event) => {
    switch (footerRef^) {
      | Some(el) => {
        let elementObj = ReactDOMRe.domElementToObj(el);
        elementObj##focus();
      }
      | None => ignore()
    };
  };
  let onChangeId = (id) => {
    let newId = id |> Js.String.replaceByRe([%re "/ /g"], "");
    dispatch(SetId(newId));
  };

  let onSearchById = (id: string) => {
    let firstChar = id |> Js.String.slice(~from=0, ~to_=1) |> Js.String.toLowerCase;
    let twoChars = id |> Js.String.slice(~from=0, ~to_=2) |> Js.String.toLowerCase;
    let isNumber = id |> Utils.isNumber;
    switch (firstChar, twoChars, isNumber) {
      | ("b", _, _) => getBlock(id, true)
      | ("o", _, _) => getOperation(id, true)
      | (_, "tz", _) | (_, "kt", _) => getAccount(id, true)
      | (_, _, true) => getHashByLevel(id |> int_of_string)
      | _ => dispatch(SetError(Utils.invalidId))
    };
  };

  let onChangeNetwork = (index: int) => {
    if (state.selectedConfig !== index) {
      dispatch(ChangeNetwork(index));
      selectedConfig := index;
      goToMainPage();
    } else {
      dispatch(OpenNetwork(false));
    }
  };

  if (!isFirstLoad^) {
    isFirstLoad := true;
    switch (url.path) {
      | [network, entity, id] => goToPage(network, entity, id)
      | [] => getMainPage()
      | _ => goToMainPage()
    };
  };

  <ReactIntl.IntlProvider>
    <ContextProvider value={state.selectedConfig}>
      <div className=Styles.container(state.selectedConfig)>
        <div className=Styles.header onClick={testRef}>
          <div className=Styles.headerTitle>{ReasonReact.string("MININAX")}</div>
        </div>
        <div className=Styles.mainContainer>
          {switch (url.path) {
            | [_, "accounts", _] => <Account items=state.account goToDetail={onSearchById} />
            | [_, "operations", _] => <Operation items=state.operation goToDetail={onSearchById} />
            | _ => <Block items=state.block goToDetail={onSearchById} goToBlock={getHashByLevel} />
          }}
        </div>
        <Footer
          searhVal={state.id}
          network={configs[state.selectedConfig].displayName}
          setRef={setFooterRef}
          changeId={onChangeId}
          onSearch={_ => onSearchById(state.id)}
          onOpenNetworkSelector={_ => dispatch(OpenNetwork(true))}
        />
        {state.isLoading ? <Loader /> : ReasonReact.null}
        {state.isError ? <Error error={state.error} onTry={_ => dispatch(RemoveError)} /> : ReasonReact.null}
        {state.isOpenNetworkSelector ?
          (
            <NetworkSelector
              selectedIndex={state.selectedConfig}
              onChange={onChangeNetwork}
              onCancel={_ => dispatch(OpenNetwork(false))}
            />
          ):ReasonReact.null
        }
      </div>
    </ContextProvider>
  </ReactIntl.IntlProvider>
}
