"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var react_native_1 = require("react-native");
var testpage_1 = require("./modules/testpage");
var secondtestpage_1 = require("./modules/secondtestpage");
exports.Router = function () {
    var _a = react_1.useState(0), page = _a[0], setPage = _a[1];
    var rendering = page === 0 ? (react_1.default.createElement(testpage_1.TestPage, { page: page, setPage: setPage })) : (react_1.default.createElement(secondtestpage_1.SecondTestPage, { page: page, setPage: setPage }));
    return (react_1.default.createElement(react_native_1.View, null,
        react_1.default.createElement(react_native_1.Text, null, page),
        rendering));
};
