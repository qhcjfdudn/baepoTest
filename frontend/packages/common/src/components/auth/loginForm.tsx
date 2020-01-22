import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet
} from "react-native";
import axios from 'axios';
 
const proxy = "http://70.12.246.0:8001"

class Inputs extends Component {
  state = {
    email: "",
    password: "",
    loginResult: ""
  };
 
  handleEmail = (text: string) => {
    this.setState({ email: text });
  };
 
  handlePassword = (text: string) => {
    this.setState({ password: text });
  };
 
  handleLogin = (email: string, pass: string) => {
    console.log("email :" + email + "password :" + pass);
    // axios를 통해 서버에 데이터 보내기.
    axios({
        url: proxy + '/users/login/',
        method: 'post',
        data: {
            userEmail: email,
            userPassword: pass
        }
    }).then((response) => {
        console.log(response);
        this.setState({loginResult: response});
        console.log('loginResult : ' + this.state.loginResult)

        // session 로컬 스토리지에 저장하기
        localStorage.setItem(
            "userInfo",
            response.data
        )
    })
    .catch(function (error) {
        console.log(error);
    });
  };
 
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          underlineColorAndroid="transparent"
          placeholder="Email"
          placeholderTextColor="#9a73ef"
          autoCapitalize="none"
          onChangeText={this.handleEmail}
        />
        <TextInput
          style={styles.input}
          underlineColorAndroid="transparent"
          placeholder="Password"
          placeholderTextColor="#9a73ef"
          autoCapitalize="none"
          onChangeText={this.handlePassword}
        />
        <TouchableOpacity
          style={styles.submitButton}
          onPress={() => this.handleLogin(this.state.email, this.state.password)}
        >
          <Text style={styles.submitButtonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
 
export default Inputs;
 
const styles = StyleSheet.create({
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