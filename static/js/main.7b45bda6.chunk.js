(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,function(module,__webpack_exports__,__webpack_require__){"use strict";var C_wamp64_www_projects_freeCodeCamp_javascript_calculator_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(2),C_wamp64_www_projects_freeCodeCamp_javascript_calculator_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(3),C_wamp64_www_projects_freeCodeCamp_javascript_calculator_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(5),C_wamp64_www_projects_freeCodeCamp_javascript_calculator_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(4),C_wamp64_www_projects_freeCodeCamp_javascript_calculator_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(1),C_wamp64_www_projects_freeCodeCamp_javascript_calculator_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(6),react__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__),_App_css__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(20),_App_css__WEBPACK_IMPORTED_MODULE_7___default=__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_7__),_components_Buttons__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(10),_components_Output__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(11),_components_Formula__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__(12),isOperator=/[x\/+\u2011]/,endsWithOperator=/[x+\u2011\/]$/,App=function(_React$Component){function App(e){var t;return Object(C_wamp64_www_projects_freeCodeCamp_javascript_calculator_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.a)(this,App),(t=Object(C_wamp64_www_projects_freeCodeCamp_javascript_calculator_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__.a)(this,Object(C_wamp64_www_projects_freeCodeCamp_javascript_calculator_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__.a)(App).call(this,e))).state={currentVal:"0",prevVal:"0",formula:"",currentSign:"pos",lastClicked:""},t.maxDigitWarning=t.maxDigitWarning.bind(Object(C_wamp64_www_projects_freeCodeCamp_javascript_calculator_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__.a)(t)),t.handleOperators=t.handleOperators.bind(Object(C_wamp64_www_projects_freeCodeCamp_javascript_calculator_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__.a)(t)),t.handleEvaluate=t.handleEvaluate.bind(Object(C_wamp64_www_projects_freeCodeCamp_javascript_calculator_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__.a)(t)),t.initialize=t.initialize.bind(Object(C_wamp64_www_projects_freeCodeCamp_javascript_calculator_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__.a)(t)),t.handleDecimal=t.handleDecimal.bind(Object(C_wamp64_www_projects_freeCodeCamp_javascript_calculator_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__.a)(t)),t.handleNumbers=t.handleNumbers.bind(Object(C_wamp64_www_projects_freeCodeCamp_javascript_calculator_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__.a)(t)),t}return Object(C_wamp64_www_projects_freeCodeCamp_javascript_calculator_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__.a)(App,_React$Component),Object(C_wamp64_www_projects_freeCodeCamp_javascript_calculator_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__.a)(App,[{key:"maxDigitWarning",value:function(){var e=this;this.setState({currentVal:"Digit Limit Met",prevVal:this.state.currentVal}),setTimeout(function(){return e.setState({currentVal:e.state.prevVal})},1e3)}},{key:"handleEvaluate",value:function handleEvaluate(){if(!this.state.currentVal.includes("Limit")){var expression=this.state.formula;endsWithOperator.test(expression)&&(expression=expression.slice(0,-1)),expression=expression.replace(/x/g,"*").replace(/\u2011/g,"-");var answer=Math.round(1e12*eval(expression))/1e12;this.setState({currentVal:answer.toString(),formula:expression.replace(/\*/g,"\u22c5").replace(/-/g,"\u2011")+"="+answer,prevVal:answer,evaluated:!0})}}},{key:"handleOperators",value:function(e){this.state.currentVal.includes("Limit")||(this.setState({currentVal:e.target.value,evaluated:!1}),this.state.formula.includes("=")?this.setState({formula:this.state.prevVal+e.target.value}):this.setState({prevVal:isOperator.test(this.state.currentVal)?this.state.prevVal:this.state.formula,formula:isOperator.test(this.state.currentVal)?this.state.prevVal+=e.target.value:this.state.formula+=e.target.value}))}},{key:"handleNumbers",value:function(e){this.state.currentVal.includes("Limit")||(this.setState({evaluated:!1}),this.state.currentVal.length>21?this.maxDigitWarning():!0===this.state.evaluated?this.setState({currentVal:e.target.value,formula:"0"!==e.target.value?e.target.value:""}):this.setState({currentVal:"0"===this.state.currentVal||isOperator.test(this.state.currentVal)?e.target.value:this.state.currentVal+e.target.value,formula:"0"===this.state.currentVal&&"0"===e.target.value?this.state.formula:/([^.0-9]0)$/.test(this.state.formula)?this.state.formula.slice(0,-1)+e.target.value:this.state.formula+e.target.value}))}},{key:"handleDecimal",value:function(){!0===this.state.evaluated?this.setState({currentVal:"0.",formula:"0.",evaluated:!1}):this.state.currentVal.includes(".")||this.state.currentVal.includes("Limit")||(this.setState({evaluated:!1}),this.state.currentVal.length>21?this.maxDigitWarning():endsWithOperator.test(this.state.formula)||"0"===this.state.currentVal&&""===this.state.formula?this.setState({currentVal:"0.",formula:this.state.formula+"0."}):this.setState({currentVal:this.state.formula.match(/(-?\d+\.?\d*)$/)[0]+".",formula:this.state.formula+"."}))}},{key:"initialize",value:function(){this.setState({currentVal:"0",prevVal:"0",formula:"",currentSign:"pos",lastClicked:""})}},{key:"render",value:function(){return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div",{className:"calculator"},react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_Formula__WEBPACK_IMPORTED_MODULE_10__.a,{formula:this.state.formula.replace(/x/g,"\u22c5")}),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_Output__WEBPACK_IMPORTED_MODULE_9__.a,{currentValue:this.state.currentVal}),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_Buttons__WEBPACK_IMPORTED_MODULE_8__.a,{evaluate:this.handleEvaluate,operators:this.handleOperators,initialize:this.initialize,decimal:this.handleDecimal,numbers:this.handleNumbers})))}}]),App}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);__webpack_exports__.a=App},function(e,t,a){"use strict";var _=a(2),r=a(3),s=a(5),l=a(4),i=a(6),n=a(0),u=a.n(n),o={background:"#ac3939",borderRadius:"5px 0px 0px 0px"},c={background:"#666666",borderRadius:"0px 5px 0px 0px"},p={borderRadius:"0px 0px 0px 5px"},m={background:"#666666"},d={background:"#004466",position:"absolute",height:130,bottom:20,borderRadius:"0px 0px 5px 0px"},h=function(e){function t(){return Object(_.a)(this,t),Object(s.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return u.a.createElement("div",null,u.a.createElement("button",{id:"clear",value:"AC",onClick:this.props.initialize,className:"jumbo",style:o},"AC"),u.a.createElement("button",{id:"divide",value:"/",onClick:this.props.operators,style:m},"/"),u.a.createElement("button",{id:"multiply",value:"x",onClick:this.props.operators,style:c},"x"),u.a.createElement("button",{id:"seven",value:"7",onClick:this.props.numbers},"7"),u.a.createElement("button",{id:"eight",value:"8",onClick:this.props.numbers},"8"),u.a.createElement("button",{id:"nine",value:"9",onClick:this.props.numbers},"9"),u.a.createElement("button",{id:"subtract",value:"\u2011",onClick:this.props.operators,style:m},"-"),u.a.createElement("button",{id:"four",value:"4",onClick:this.props.numbers},"4"),u.a.createElement("button",{id:"five",value:"5",onClick:this.props.numbers},"5"),u.a.createElement("button",{id:"six",value:"6",onClick:this.props.numbers},"6"),u.a.createElement("button",{id:"add",value:"+",onClick:this.props.operators,style:m},"+"),u.a.createElement("button",{id:"one",value:"1",onClick:this.props.numbers},"1"),u.a.createElement("button",{id:"two",value:"2",onClick:this.props.numbers},"2"),u.a.createElement("button",{id:"three",value:"3",onClick:this.props.numbers},"3"),u.a.createElement("button",{id:"zero",value:"0",onClick:this.props.numbers,className:"jumbo",style:p},"0"),u.a.createElement("button",{id:"decimal",value:".",onClick:this.props.decimal},"."),u.a.createElement("button",{id:"equals",value:"=",onClick:this.props.evaluate,style:d},"="))}}]),t}(u.a.Component);t.a=h},function(e,t,a){"use strict";var _=a(2),r=a(3),s=a(5),l=a(4),i=a(6),n=a(0),u=a.n(n),o=function(e){function t(){return Object(_.a)(this,t),Object(s.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return u.a.createElement("div",{id:"display",className:"outputScreen"},this.props.currentValue)}}]),t}(u.a.Component);t.a=o},function(e,t,a){"use strict";var _=a(2),r=a(3),s=a(5),l=a(4),i=a(6),n=a(0),u=a.n(n),o=function(e){function t(){return Object(_.a)(this,t),Object(s.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return u.a.createElement("div",{className:"formulaScreen"},this.props.formula)}}]),t}(u.a.Component);t.a=o},function(e,t,a){e.exports=a(14)},function(e,t,a){"use strict";a.r(t);var _=a(0),r=a.n(_),s=a(8),l=a.n(s),i=a(9);l.a.render(r.a.createElement(i.a,null),document.getElementById("root"))},,,,,,function(e,t,a){}],[[13,1,2]]]);
//# sourceMappingURL=main.7b45bda6.chunk.js.map