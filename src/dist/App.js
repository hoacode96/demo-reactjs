"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var SlideShow_1 = require("./Demo/SlideShow");
function App() {
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement(react_router_dom_1.BrowserRouter, null,
            react_1["default"].createElement("div", null,
                react_1["default"].createElement("ul", null,
                    react_1["default"].createElement("li", null,
                        react_1["default"].createElement(react_router_dom_1.Link, { to: "/home" }, "Home")),
                    react_1["default"].createElement("li", null,
                        react_1["default"].createElement(react_router_dom_1.Link, { to: "/slide" }, "Slide")),
                    react_1["default"].createElement("li", null))),
            react_1["default"].createElement(react_router_dom_1.Switch, null,
                react_1["default"].createElement(react_router_dom_1.Route, { path: "/slide" },
                    react_1["default"].createElement(SlideShow_1["default"], null))))));
}
exports["default"] = App;
