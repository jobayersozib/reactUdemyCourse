"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// var template=(
//     <div>
//         <h1>This jsx from app.js</h1>
//         <p>Some info</p>
//     </div>
// ); 
// var Indecision={
//     title:"Title here update",
//     subTitle:"Subtitle here"
// }
// var templateTwo=(
//             <div>
//                 <h1>Title: {Indecision.title}</h1>
//                 {Indecision.subTitle && <p>Subtitle: {Indecision.subTitle}</p>}
//                 <p>{Indecision.options ? 'Some options' : 'No options'} </p>
//             </div>
// )
// var appRoot=document.getElementById("app");

// ReactDOM.render(templateTwo,appRoot);

// let count=0;


// const addOne=()=>{
//     count++;
//     renderCounter();
//  }

//  const renderCounter=()=>{
//     const templateTwo=(
//         <div>
//             <h1>Count: {count}</h1>
//             <button id="my-id" onClick={addOne} className="button">+1</button>
//         </div>
//     )
//     //console.log(templateTwo);
//     ReactDOM.render(templateTwo,document.getElementById("app"));
//  }

//  renderCounter();

var CounterToggle = function (_React$Component) {
    _inherits(CounterToggle, _React$Component);

    function CounterToggle() {
        _classCallCheck(this, CounterToggle);

        return _possibleConstructorReturn(this, (CounterToggle.__proto__ || Object.getPrototypeOf(CounterToggle)).apply(this, arguments));
    }

    _createClass(CounterToggle, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(Counter, null),
                React.createElement(Toggle, null)
            );
        }
    }]);

    return CounterToggle;
}(React.Component);

var Counter = function (_React$Component2) {
    _inherits(Counter, _React$Component2);

    function Counter(props) {
        _classCallCheck(this, Counter);

        var _this2 = _possibleConstructorReturn(this, (Counter.__proto__ || Object.getPrototypeOf(Counter)).call(this, props));

        _this2.handleAddOne = _this2.handleAddOne.bind(_this2);
        _this2.handleMinusOne = _this2.handleMinusOne.bind(_this2);
        _this2.handleReset = _this2.handleReset.bind(_this2);
        _this2.state = {
            count: 0
        };
        return _this2;
    }

    _createClass(Counter, [{
        key: "handleAddOne",
        value: function handleAddOne() {
            this.setState(function (preStates) {
                return {
                    count: preStates.count + 1
                };
            });
        }
    }, {
        key: "handleMinusOne",
        value: function handleMinusOne() {
            this.setState(function (preStates) {
                return {
                    count: preStates.count - 1
                };
            });
        }
    }, {
        key: "handleReset",
        value: function handleReset() {
            this.setState(function (preStates) {
                return {
                    count: 0
                };
            });
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "h1",
                    null,
                    "Count : ",
                    this.state.count
                ),
                React.createElement(
                    "button",
                    { onClick: this.handleAddOne },
                    "+1"
                ),
                React.createElement(
                    "button",
                    { onClick: this.handleMinusOne },
                    "-1"
                ),
                React.createElement(
                    "button",
                    { onClick: this.handleReset },
                    "reset"
                )
            );
        }
    }]);

    return Counter;
}(React.Component);

var Toggle = function (_React$Component3) {
    _inherits(Toggle, _React$Component3);

    function Toggle(props) {
        _classCallCheck(this, Toggle);

        var _this3 = _possibleConstructorReturn(this, (Toggle.__proto__ || Object.getPrototypeOf(Toggle)).call(this, props));

        _this3.handleToggle = _this3.handleToggle.bind(_this3);
        _this3.state = {
            display: "none"
        };
        return _this3;
    }

    _createClass(Toggle, [{
        key: "handleToggle",
        value: function handleToggle() {
            this.setState(function (preState) {
                var toggleValue = preState.display === "none" ? "show" : "none";

                return {
                    display: toggleValue
                };
            });
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "button",
                    { onClick: this.handleToggle },
                    "Click"
                ),
                this.state.display !== "none" && React.createElement(
                    "p",
                    null,
                    "Display details"
                )
            );
        }
    }]);

    return Toggle;
}(React.Component);

ReactDOM.render(React.createElement(CounterToggle, null), document.getElementById("app"));
