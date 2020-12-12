"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var react_1 = require("react");
require("./SlideShow.css");
var Slide = /** @class */ (function (_super) {
    __extends(Slide, _super);
    function Slide(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            img: "https://i.picsum.photos/id/0/5616/3744.jpg?hmac=3GAAioiQziMGEtLbfrdbcoenXoWAW-zlyEAMkfEdBzQ",
            imgList: [
                {
                    src: "https://i.picsum.photos/id/0/5616/3744.jpg?hmac=3GAAioiQziMGEtLbfrdbcoenXoWAW-zlyEAMkfEdBzQ",
                    width: "300",
                    height: "300"
                },
                {
                    src: "https://i.picsum.photos/id/1001/5616/3744.jpg?hmac=38lkvX7tHXmlNbI0HzZbtkJ6_wpWyqvkX4Ty6vYElZE",
                    width: "300",
                    height: "300"
                },
                {
                    src: "https://i.picsum.photos/id/1010/5184/3456.jpg?hmac=7SE0MNAloXpJXDxio2nvoshUx9roGIJ_5pZej6qdxXs",
                    width: "300",
                    height: "300"
                },
                {
                    src: "https://i.picsum.photos/id/1005/5760/3840.jpg?hmac=2acSJCOwz9q_dKtDZdSB-OIK1HUcwBeXco_RMMTUgfY",
                    width: "300",
                    height: "300"
                },
                {
                    src: "https://i.picsum.photos/id/100/2500/1656.jpg?hmac=gWyN-7ZB32rkAjMhKXQgdHOIBRHyTSgzuOK6U0vXb1w",
                    width: "300",
                    height: "300"
                },
                {
                    src: "https://i.picsum.photos/id/102/4320/3240.jpg?hmac=ico2KysoswVG8E8r550V_afIWN963F6ygTVrqHeHeRc",
                    width: "300",
                    height: "300"
                },
            ]
        };
        return _this;
    }
    Slide.prototype.render = function () {
        return (react_1["default"].createElement("div", null,
            react_1["default"].createElement("img", { src: this.state.img, alt: "" })));
    };
    return Slide;
}(react_1["default"].Component));
exports["default"] = Slide;
