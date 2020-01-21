import { Component } from "react";
declare class Inputs extends Component {
    state: {
        email: string;
        password: string;
        loginResult: string;
    };
    handleEmail: (text: string) => void;
    handlePassword: (text: string) => void;
    handleLogin: (email: string, pass: string) => void;
    render(): JSX.Element;
}
export default Inputs;
