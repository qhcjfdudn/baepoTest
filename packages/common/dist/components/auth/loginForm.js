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
var proxy = "http://70.12.246.0:8001";
var Inputs = /** @class */ (function (_super) {
    __extends(Inputs, _super);
    function Inputs() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            email: "",
            password: "",
            loginResult: ""
        };
        _this.handleEmail = function (text) {
            _this.setState({ email: text });
        };
        _this.handlePassword = function (text) {
            _this.setState({ password: text });
        };
        _this.handleLogin = function (email, pass) {
            console.log("email :" + email + "password :" + pass);
            // axios를 통해 서버에 데이터 보내기.
            axios_1.default({
                url: proxy + '/users/login/',
                method: 'post',
                data: {
                    userEmail: email,
                    userPassword: pass
                }
            }).then(function (response) {
                console.log(response);
                _this.setState({ loginResult: response });
                console.log('loginResult : ' + _this.state.loginResult);
                localStorage.setItem("userInfo", response.data);
            })
                .catch(function (error) {
                console.log(error);
            });
        };
        return _this;
    }
    Inputs.prototype.render = function () {
        var _this = this;
        return (react_1.default.createElement(react_native_1.View, { style: styles.container },
            react_1.default.createElement(react_native_1.TextInput, { style: styles.input, underlineColorAndroid: "transparent", placeholder: "Email", placeholderTextColor: "#9a73ef", autoCapitalize: "none", onChangeText: this.handleEmail }),
            react_1.default.createElement(react_native_1.TextInput, { style: styles.input, underlineColorAndroid: "transparent", placeholder: "Password", placeholderTextColor: "#9a73ef", autoCapitalize: "none", onChangeText: this.handlePassword }),
            react_1.default.createElement(react_native_1.TouchableOpacity, { style: styles.submitButton, onPress: function () { return _this.handleLogin(_this.state.email, _this.state.password); } },
                react_1.default.createElement(react_native_1.Text, { style: styles.submitButtonText }, "Submit"))));
    };
    return Inputs;
}(react_1.Component));
exports.default = Inputs;
var styles = react_native_1.StyleSheet.create({
    container: {
        paddingTop: 23
    },
    input: {
        margin: 15,
        height: 40,
        borderColor: "#7a42f4",
        borderWidth: 1
    },
    submitButton: {
        backgroundColor: "#7a42f4",
        padding: 10,
        margin: 15,
        height: 40
    },
    submitButtonText: {
        color: "white"
    }
});
