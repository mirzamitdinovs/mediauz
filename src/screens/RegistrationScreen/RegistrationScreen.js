import React from 'react';
import {
  View,
  Button,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Text,
} from 'react-native';
import {styles} from './style';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import AsyncStorage from '@react-native-community/async-storage';
import {bindActionCreators} from 'redux';
import * as Actions from '../../redux/actions';
import {connect} from 'react-redux';
import {FETCHURL} from '../../constants/Colors';
import Loader from '../../components/Loader/Loader';
import {langData} from '../screens.i18n';

class RegistrationScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      full_name: '',
      email: '',
      username: '',
      password: '',
      confirm_password: '',
      passVis: true,
      isLoading: false,
    };
  }
  onChangeText = (key, val) => {
    this.setState({[key]: val});
  };

  checkSignUp = () => {
    const {username, password, email, full_name, confirm_password} = this.state;
    this.setState({
      isLoading: true,
    });
    fetch(`${FETCHURL}/user/register`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: username,
        email: email,
        password: password,
        full_name: full_name,
        confirm_password: confirm_password,
      }),
    })
      .then((response) => response.json())

      .then(async (response) => {
        this.setState({isLoading: false});

        if (response.auth_key) {
          await AsyncStorage.setItem('userToken', response.auth_key);
          await AsyncStorage.setItem('isLogged', 'true');
          await AsyncStorage.setItem('userFullName', response.fullname);

          this.props.navigation.navigate('MainScreen');
          this.props.signIn(response.auth_key, response.fullname);
        } else {
          console.log('error-token: ', response);
        }
      })
      .catch((error) => {
        console.error(error);
        this.setState({
          isLoading: false,
        });
      });
  };

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
    const data = mlang === 'uz' ? langData.uz : langData.ru;

    return this.state.isLoading ? (
      <Loader />
    ) : (
      <SafeAreaView>
        <ScrollView style={wrapper}>
          <View style={loginContainer}>
            <Text style={loginTitle}>{data.register}</Text>
            <View style={inputGroup}>
              <Text style={inputPlaceholder}>{data.fullNameTitle}</Text>
              <TextInput
                style={inputStyle}
                autoCapitalize="none"
                placeholderTextColor="white"
                onChangeText={(val) => this.onChangeText('full_name', val)}
                value={this.state.full_name}
              />
            </View>
            <View style={inputGroup}>
              <Text style={inputPlaceholder}>{data.emailTitle}</Text>
              <TextInput
                style={inputStyle}
                autoCapitalize="none"
                placeholderTextColor="white"
                onChangeText={(val) => this.onChangeText('email', val)}
              />
            </View>
            <View style={inputGroup}>
              <Text style={inputPlaceholder}>{data.loginTitle}</Text>
              <TextInput
                style={inputStyle}
                autoCapitalize="none"
                placeholderTextColor="white"
                onChangeText={(val) => this.onChangeText('username', val)}
                value={this.state.username}
              />
            </View>
            <View style={inputGroup}>
              <TouchableOpacity
                style={inputIcon}
                onPress={() => this.setState({passVis: !this.state.passVis})}>
                <Ionicons
                  name={this.state.passVis === true ? 'ios-eye' : 'ios-eye-off'}
                  size={16}
                />
              </TouchableOpacity>
              <Text style={inputPlaceholder}>{data.passwordTitle}</Text>
              <TextInput
                style={inputStyle}
                underlineColorAndroid="transparent"
                secureTextEntry={this.state.passVis}
                onChangeText={(val) => this.onChangeText('password', val)}
              />
            </View>
            <View style={inputGroup}>
              <TouchableOpacity
                style={inputIcon}
                onPress={() => this.setState({passVis: !this.state.passVis})}>
                <Ionicons
                  name={this.state.passVis === true ? 'ios-eye' : 'ios-eye-off'}
                  size={16}
                />
              </TouchableOpacity>
              <Text style={inputPlaceholder}>{data.rePasswordTitle}</Text>
              <TextInput
                style={inputStyle}
                underlineColorAndroid="transparent"
                secureTextEntry={this.state.passVis}
                onChangeText={(val) =>
                  this.onChangeText('confirm_password', val)
                }
              />
            </View>
            <TouchableOpacity style={loginButton} onPress={this.checkSignUp}>
              <Text style={loginButtonText}>{data.register}</Text>
            </TouchableOpacity>
            <View style={linkContainer}>
              <Text style={linkText}>{data.haveAccount} </Text>
              <TouchableOpacity onPress={() => this.checkSignUp}>
                <Text
                  style={linkButton}
                  onPress={() => navigation.navigate('LoginScreen')}>
                  {data.loginButton}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

function mapStateToProps(state, props) {
  return {
    loading: state.loading,
    mlang: state.language,
    isLogged: state.isLogged,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationScreen);
