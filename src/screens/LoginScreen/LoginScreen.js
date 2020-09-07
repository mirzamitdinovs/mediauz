import React, {useState} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from 'react-native';
import {bindActionCreators} from 'redux';
import * as Actions from '../../redux/actions';
import {connect} from 'react-redux';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import {styles} from './styles';
import AsyncStorage from '@react-native-community/async-storage';
import {FETCHURL} from '../../constants/Colors';
import Loader from '../../components/Loader/Loader';
import {langData} from '../screens.i18n';

class LoginScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      passVis: true,
      username: '',
      password: '',
      isLoading: false,
    };
  }

  checkLogin() {
    this.setState({
      isLoading: true,
    });
    // const {pathName} = this.props.route.params;
    const {pathName} = this.props;
    const {username, password} = this.state;
    fetch(`${FETCHURL}/user/sign-in`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    })
      .then((response) => response.json())
      .then(async (response) => {
        this.setState({isLoading: false});
        const res = JSON.stringify(response);
        if (response.token.token) {
          await AsyncStorage.setItem('userToken', response.token.token);
          await AsyncStorage.setItem('isLogged', 'true');
          await AsyncStorage.setItem('userFullName', response.user.fullname);
          this.props.signIn(response.token.token, response.user.fullname);

          this.props.navigation.navigate(this.props.pathScreen);
        } else {
          // alert(JSON.stringify(response));
          console.log('error: ', response.token);
        }
      })
      .catch((error) => {
        alert(error);
      });
  }

  render() {
    const {
      loginContainer,
      loginTitle,
      inputGroup,
      inputPlaceholder,
      inputStyle,
      wrapper,
      loginButton,
      loginButtonText,
      linkContainer,
      linkText,
      linkButton,
      inputIcon,
    } = styles;
    const {navigation, mlang} = this.props;
    const {isLoading} = this.state;
    const data = mlang === 'uz' ? langData.uz : langData.ru;
    return isLoading ? (
      <Loader />
    ) : (
      <SafeAreaView>
        <View style={wrapper}>
          <ScrollView>
            <View style={loginContainer}>
              <Text style={loginTitle}>{data.loginMainTitle}</Text>
              <View style={inputGroup}>
                <Text style={inputPlaceholder}>{data.loginTitle}</Text>
                <TextInput
                  style={inputStyle}
                  underlineColorAndroid="transparent"
                  onChangeText={(username) => this.setState({username})}
                  value={this.state.username}
                  autoCapitalize="none"
                />
              </View>
              <View style={inputGroup}>
                <TouchableOpacity
                  style={inputIcon}
                  onPress={() => this.setState({passVis: !this.state.passVis})}>
                  <Ionicons
                    name={
                      this.state.passVis === true ? 'ios-eye' : 'ios-eye-off'
                    }
                    size={16}
                  />
                </TouchableOpacity>
                <Text style={inputPlaceholder}>{data.passwordTitle}</Text>
                <TextInput
                  style={inputStyle}
                  underlineColorAndroid="transparent"
                  secureTextEntry={this.state.passVis}
                  onChangeText={(password) => this.setState({password})}
                  value={this.state.password}
                />
              </View>
              <TouchableOpacity
                style={loginButton}
                onPress={() => this.checkLogin()}>
                <Text style={loginButtonText}>{data.loginButton}</Text>
              </TouchableOpacity>
              <View style={linkContainer}>
                <Text style={linkText}>{data.notHaveAccount} </Text>
                <TouchableOpacity>
                  <Text
                    style={linkButton}
                    onPress={() => navigation.navigate('Registration')}>
                    {data.register}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    );
  }
}

function mapStateToProps(state, props) {
  return {
    loading: state.loading,
    mlang: state.language,
    isLogged: state.isLogged,
    pathScreen: state.pathScreen,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
