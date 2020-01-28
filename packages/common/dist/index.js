"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var mobx_react_lite_1 = require("mobx-react-lite");
var Router_1 = require("./Router");
var MainStore_1 = require("./store/MainStore");
var CustomStyle_1 = require("./static/CustomStyle");
var Navbar_1 = require("./components/main/Navbar");
var Header_1 = require("./components/main/Header");
exports.App = mobx_react_lite_1.observer(function () {
    var mainStore = react_1.useContext(MainStore_1.mainStoreContext);
    mainStore.screenWidth = react_native_1.Dimensions.get('screen').width;
    mainStore.screenHeight = react_native_1.Dimensions.get('screen').height;
    mainStore.scrollviewHeight = mainStore.screenHeight - mainStore.footerHeight - mainStore.headerHeight;
    console.log(mainStore);
    return (react_1.default.createElement(react_native_1.View, { style: { height: mainStore.screenHeight, flex: 1 } },
        react_1.default.createElement(Header_1.Header, null),
        react_1.default.createElement(react_native_1.ScrollView, { style: { height: mainStore.scrollviewHeight, marginTop: mainStore.headerHeight, marginBottom: mainStore.footerHeight }, contentContainerStyle: { flex: 1, flexDirection: 'column', alignItems: 'stretch' } },
            react_1.default.createElement(Router_1.Router, null),
            react_1.default.createElement(react_native_1.View, { style: { backgroundColor: '#e4e4e5', flexGrow: 1, minHeight: 110 } })),
        react_1.default.createElement(Navbar_1.Navbar, null)));
});
// define new style here to override CustomStyle stylesheet.
var localStyle = react_native_1.StyleSheet.create({
    background: {
        position: 'absolute',
        backgroundColor: '#efefef',
    },
    sectionContainer: {
        marginTop: 0,
    },
    navButton: {
        alignItems: "center",
        justifyContent: "center",
        flex: 1,
        flexDirection: "column"
    },
    navButtonImage: {
        tintColor: '#ffffff',
        height: 30,
        width: 30,
        resizeMode: 'cover',
        overflow: 'hidden'
    },
    navButtonText: {
        fontWeight: '300',
        fontSize: 8,
        color: '#ffffff'
    }
});
var styles = __assign(__assign({}, CustomStyle_1.CustomStyle), localStyle);
