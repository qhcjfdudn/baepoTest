"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var react_native_1 = require("react-native");
var axios_1 = __importDefault(require("axios"));
var loginForm_1 = __importDefault(require("./components/auth/loginForm"));
function getHello() {
    axios_1.default.get('http://70.12.247.106:8001/hello')
        .then(function (response) {
        console.log(response);
    })
        .catch(function (error) {
        console.log(error);
    });
}
exports.App = function () {
    var _a = react_1.useState(0), count = _a[0], setCount = _a[1];
    return (react_1.default.createElement(react_native_1.View, { style: styles.sectionContainer },
        react_1.default.createElement(react_native_1.Text, { style: styles.sectionTitle }, "Step One"),
        react_1.default.createElement(react_native_1.Text, { style: styles.sectionDescription },
            "Edit ",
            react_1.default.createElement(react_native_1.Text, { style: styles.highlight }, "App.tsx"),
            " to change this screen and then come back to see your edits."),
        react_1.default.createElement(react_native_1.Text, { style: styles.sectionDescription }, count),
        react_1.default.createElement(react_native_1.Button, { title: "increment", onPress: function () { return setCount(count + 1); } }),
        react_1.default.createElement(react_native_1.Button, { onPress: getHello, title: "getHello" }),
        react_1.default.createElement(loginForm_1.default, null)));
};
var styles = react_native_1.StyleSheet.create({
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
    },
    sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
    },
    highlight: {
        fontWeight: '700',
    },
});
