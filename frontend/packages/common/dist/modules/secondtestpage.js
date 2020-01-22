"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var react_native_1 = require("react-native");
exports.SecondTestPage = function (_a) {
    var page = _a.page, setPage = _a.setPage;
    var pagetitle = "page " + page;
    return (React.createElement(react_native_1.View, null,
        React.createElement(react_native_1.Text, null, "SECOND test page"),
        React.createElement(react_native_1.Button, { title: pagetitle, onPress: function () {
                setPage(page === 0 ? 1 : 0);
            } })));
};
