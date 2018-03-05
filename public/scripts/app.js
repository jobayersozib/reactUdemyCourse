"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IndecisionApp = function (_React$Component) {
    _inherits(IndecisionApp, _React$Component);

    function IndecisionApp(props) {
        _classCallCheck(this, IndecisionApp);

        var _this = _possibleConstructorReturn(this, (IndecisionApp.__proto__ || Object.getPrototypeOf(IndecisionApp)).call(this, props));

        _this.state = {
            options: ["Option one", "Option two", "Option three", "Option four", "Option five", "Option six"]

        };
        _this.handleAddOptionEvent = _this.handleAddOptionEvent.bind(_this);
        return _this;
    }

    _createClass(IndecisionApp, [{
        key: "handleAddOptionEvent",
        value: function handleAddOptionEvent(e) {
            e.preventDefault();
            var value = e.target.elements[0].value;
            this.setState(function (pre) {
                options: pre.options.push(value);
            });
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(Header, null),
                React.createElement("hr", null),
                React.createElement(Action, { data: this.state.options, visibility: this.state.options.length > 0 ? true : false }),
                React.createElement(Options, null),
                React.createElement(Option, { data: this.state.options }),
                React.createElement(Addoption, { handler: this.handleAddOptionEvent })
            );
        }
    }]);

    return IndecisionApp;
}(React.Component);

var Header = function (_React$Component2) {
    _inherits(Header, _React$Component2);

    function Header() {
        _classCallCheck(this, Header);

        return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
    }

    _createClass(Header, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "h1",
                    null,
                    "Indecision"
                ),
                React.createElement(
                    "h2",
                    null,
                    "Put your life in the hands of a computer"
                )
            );
        }
    }]);

    return Header;
}(React.Component);

var Action = function (_React$Component3) {
    _inherits(Action, _React$Component3);

    function Action(props) {
        _classCallCheck(this, Action);

        var _this3 = _possibleConstructorReturn(this, (Action.__proto__ || Object.getPrototypeOf(Action)).call(this, props));

        _this3.handlePick = _this3.handlePick.bind(_this3);
        return _this3;
    }

    _createClass(Action, [{
        key: "handlePick",
        value: function handlePick() {
            console.log(this.props.data[this.props.data.length - 1]);
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "button",
                    { disabled: this.props.visibility ? "" : "disabled", onClick: this.handlePick },
                    "What should i do ?",
                    this.props.visibility
                )
            );
        }
    }]);

    return Action;
}(React.Component);

var Options = function (_React$Component4) {
    _inherits(Options, _React$Component4);

    function Options() {
        _classCallCheck(this, Options);

        return _possibleConstructorReturn(this, (Options.__proto__ || Object.getPrototypeOf(Options)).apply(this, arguments));
    }

    _createClass(Options, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "h3",
                    null,
                    "Options below"
                ),
                React.createElement("hr", null)
            );
        }
    }]);

    return Options;
}(React.Component);

var Option = function (_React$Component5) {
    _inherits(Option, _React$Component5);

    function Option(props) {
        _classCallCheck(this, Option);

        var _this5 = _possibleConstructorReturn(this, (Option.__proto__ || Object.getPrototypeOf(Option)).call(this, props));

        _this5.handleRemoveAll = _this5.handleRemoveAll.bind(_this5);
        //console.log(this.props);
        return _this5;
    }

    _createClass(Option, [{
        key: "handleRemoveAll",
        value: function handleRemoveAll(e) {
            e.preventDefault();
            console.log(e.target.textContent);
        }
    }, {
        key: "render",
        value: function render() {
            var _this6 = this;

            return React.createElement(
                "div",
                null,
                React.createElement(
                    "ul",
                    null,
                    this.props.data.map(function (x) {
                        return React.createElement(
                            "li",
                            { onClick: _this6.handleRemoveAll, key: x.toString() },
                            x
                        );
                    })
                ),
                React.createElement(
                    "button",
                    { onClick: this.handleRemoveAll },
                    "Remove all"
                )
            );
        }
    }]);

    return Option;
}(React.Component);

var Addoption = function (_React$Component6) {
    _inherits(Addoption, _React$Component6);

    function Addoption(props) {
        _classCallCheck(this, Addoption);

        var _this7 = _possibleConstructorReturn(this, (Addoption.__proto__ || Object.getPrototypeOf(Addoption)).call(this, props));

        _this7.handleAddOption = _this7.handleAddOption.bind(_this7);

        return _this7;
    }

    _createClass(Addoption, [{
        key: "handleAddOption",
        value: function handleAddOption(e) {
            e.preventDefault();
            if (e.target.elements.addOption.value.length > 0) {
                alert(e.target.elements.addOption.value);
            }
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "form",
                    { id: "add-action", onSubmit: this.props.handler },
                    React.createElement("input", { type: "text", name: "addOption", placeholder: "Enter your option" }),
                    React.createElement(
                        "button",
                        null,
                        "Add action"
                    )
                )
            );
        }
    }]);

    return Addoption;
}(React.Component);

ReactDOM.render(React.createElement(IndecisionApp, null), document.getElementById("app"));
