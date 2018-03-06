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
            options: []

        };
        _this.handleAddOptionEvent = _this.handleAddOptionEvent.bind(_this);
        _this.handleRemoveOption = _this.handleRemoveOption.bind(_this);
        return _this;
    }

    _createClass(IndecisionApp, [{
        key: "handleRemoveOption",
        value: function handleRemoveOption(e) {
            e.preventDefault();
            var tId = e.target.getAttribute("id");
            this.setState(function (pre) {
                options: delete pre.options[tId];
            });
            console.log(e.target.getAttribute("id"));
        }
    }, {
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
                React.createElement(Header, { title: "Title here", subTitle: "Put your life in the hands of a computer (sub)" }),
                React.createElement("hr", null),
                React.createElement(Action, { data: this.state.options, visibility: this.state.options.length > 0 ? true : false }),
                React.createElement(Options, null),
                React.createElement(Option, { data: this.state.options, handleRemove: this.handleRemoveOption }),
                React.createElement(Addoption, { handler: this.handleAddOptionEvent })
            );
        }
    }]);

    return IndecisionApp;
}(React.Component);

var Header = function Header(props) {
    return React.createElement(
        "div",
        null,
        React.createElement(
            "h1",
            null,
            props.title
        ),
        React.createElement(
            "h2",
            null,
            props.subTitle
        )
    );
};
Header.defaultProps = {
    title: "Indecision",
    subTitle: "Put your life in the hands of a computer"
    // class Header extends React.Component {
    //     render(){
    //         return(<div>
    //                 <h1>Indecision</h1>
    //                 <h2>Put your life in the hands of a computer</h2>
    //             </div>)
    //     }
    // }

};
var Action = function (_React$Component2) {
    _inherits(Action, _React$Component2);

    function Action(props) {
        _classCallCheck(this, Action);

        var _this2 = _possibleConstructorReturn(this, (Action.__proto__ || Object.getPrototypeOf(Action)).call(this, props));

        _this2.handlePick = _this2.handlePick.bind(_this2);
        return _this2;
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

var Options = function (_React$Component3) {
    _inherits(Options, _React$Component3);

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

var Option = function (_React$Component4) {
    _inherits(Option, _React$Component4);

    function Option(props) {
        _classCallCheck(this, Option);

        var _this4 = _possibleConstructorReturn(this, (Option.__proto__ || Object.getPrototypeOf(Option)).call(this, props));

        _this4.handleRemoveAll = _this4.handleRemoveAll.bind(_this4);
        //console.log(this.props);
        return _this4;
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
            var _this5 = this;

            return React.createElement(
                "div",
                null,
                React.createElement(
                    "ul",
                    null,
                    this.props.data.map(function (x, index) {
                        return React.createElement(
                            "li",
                            { onClick: _this5.handleRemoveAll, id: index, key: index },
                            x,
                            "-----",
                            React.createElement(
                                "a",
                                { id: index, onClick: _this5.props.handleRemove, href: "#" },
                                "Remove"
                            )
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

var Addoption = function (_React$Component5) {
    _inherits(Addoption, _React$Component5);

    function Addoption(props) {
        _classCallCheck(this, Addoption);

        var _this6 = _possibleConstructorReturn(this, (Addoption.__proto__ || Object.getPrototypeOf(Addoption)).call(this, props));

        _this6.handleAddOption = _this6.handleAddOption.bind(_this6);

        return _this6;
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

var User = function User(props) {
    return React.createElement(
        "div",
        null,
        React.createElement(
            "p",
            null,
            "Name: ",
            props.name
        ),
        React.createElement(
            "p",
            null,
            "Age: ",
            props.age
        )
    );
};

ReactDOM.render(React.createElement(IndecisionApp, null), document.getElementById("app"));
