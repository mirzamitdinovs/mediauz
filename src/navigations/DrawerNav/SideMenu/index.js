import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  SafeAreaView,
  TouchableOpacity,
  Platform,
  UIManager,
  LayoutAnimation,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import {bindActionCreators} from 'redux';
import * as Actions from '../../../redux/actions';
import {connect} from 'react-redux';
import {COLORS, FONTWEIGHT} from '../../../constants/Colors';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {langData} from '../../Navigations.i18n';
import {styles} from './styles';
import AsyncStorage from '@react-native-community/async-storage';

class SideMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
      // userToken: '',
      // isLoading: true,
    };
    if (Platform.OS === 'android') {
      UIManager.setLayoutAnimationEnabledExperimental(true);
    }
    // this.getData();
  }

  onLogout = async () => {
    try {
      await AsyncStorage.clear();
      this.props.signOut();
    } catch (err) {
      console.log(err);
    }
  };

  changeLang = async (lang) => {
    if (lang === 'uz') {
      AsyncStorage.setItem('userLang', 'uz');
      this.props.changeLang('uz');
    } else {
      AsyncStorage.setItem('userLang', 'ru');
      this.props.changeLang('ru');
    }
  };

  render() {
    const {uz, ru} = langData;
    const {navigation, mlang, categoriesUz, categoriesRu} = this.props;
    const {userToken, expanded} = this.state;
    let data = mlang === 'uz' ? uz : ru;
    const {
      sideLogo,
      sideLogoText,
      sideLang,
      sideLangText,
      sideLangLine,
      sideLangContainer,
      sideLink,
      sideLinkButton,
      sideLinkText,
      row,
      row2,
      chaptersContainer,
      sideAuth,
      sideAuthText,
    } = styles;
    return this.state.isLoading ? (
      <ActivityIndicator size="large" />
    ) : (
      <SafeAreaView>
        <View>
          <View style={sideLogo}>
            <Text style={sideLogoText}>Mediateka</Text>
          </View>
          <View style={sideLang}>
            <TouchableOpacity
              style={sideLangContainer}
              onPress={() => this.changeLang('uz') && navigation.closeDrawer()}>
              <Text style={sideLangText}>Uz</Text>
              <View style={sideLangLine} />
            </TouchableOpacity>

            <TouchableOpacity style={sideLangContainer}>
              <Text
                style={sideLangText}
                onPress={() =>
                  this.changeLang('ru') && navigation.closeDrawer()
                }>
                Ru
              </Text>
              <View style={sideLangLine} />
            </TouchableOpacity>
          </View>

          <View style={sideLink}>
            <TouchableOpacity
              style={sideLinkButton}
              onPress={() => navigation.navigate('MainScreen')}>
              <Text style={sideLinkText}>{data.mainPage}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={sideLinkButton}
              onPress={() => {
                navigation.navigate('Category', {
                  categoryId: null,
                });
              }}>
              <Text style={sideLinkText}>{data.courses}</Text>
            </TouchableOpacity>
            <View style={sideLinkButton}>
              <TouchableOpacity
                style={expanded ? row : row2}
                onPress={() => this.toggleExpand()}>
                <Text
                  style={[
                    styles.sideLinkText,
                    expanded
                      ? {
                          color: COLORS.BRIGHT_PINK,
                        }
                      : {color: COLORS.VERY_DARK_GREY},
                  ]}>
                  {data.categories}
                </Text>
                <Icon
                  name={expanded ? 'chevron-down' : 'chevron-up'}
                  size={13}
                  color={
                    expanded ? COLORS.BRIGHT_PINK : COLORS.DARK_GREYISH_BLUE
                  }
                />
              </TouchableOpacity>
              {this.state.expanded && (
                <View style={styles.child}>
                  <FlatList
                    keyExtractor={(item) => item.id}
                    data={mlang === 'uz' ? categoriesUz : categoriesRu}
                    renderItem={({item}) => (
                      <View>
                        <TouchableOpacity
                          onPress={() => {
                            navigation.navigate('Category', {
                              categoryId: item.id,
                            });
                            this.props.setCategoryName(item.name);
                          }}
                          style={chaptersContainer}>
                          <Text style={sideLinkText}>{item.name}</Text>
                        </TouchableOpacity>
                      </View>
                    )}
                  />
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate('OnlineLessonsScreen', {});
                    }}
                    style={chaptersContainer}>
                    <Text style={sideLinkText}>{data.onlineLessons}</Text>
                  </TouchableOpacity>
                </View>
              )}
            </View>

            <TouchableOpacity
              style={sideLinkButton}
              onPress={() => navigation.navigate('Teachers')}>
              <Text style={sideLinkText}>{data.teachers}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={sideLinkButton}
              onPress={() => navigation.navigate('Blog')}>
              <Text style={sideLinkText}>{data.blogs}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={sideLinkButton}
              // onPress={() => navigation.navigate('Ads')}
            >
              <Text style={sideLinkText}>{data.advertisement}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={sideLinkButton}
              onPress={() => navigation.navigate('AboutUs')}>
              <Text style={sideLinkText}>{data.aboutUs}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={sideLinkButton}
              onPress={() => navigation.navigate('Contacts')}>
              <Text style={sideLinkText}>{data.contacts}</Text>
            </TouchableOpacity>
          </View>

          {this.props.userToken.length > 0 ? (
            <TouchableOpacity style={sideAuth} onPress={() => this.onLogout()}>
              <Text style={sideAuthText}>{data.logout}</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={sideAuth}
              onPress={() => navigation.navigate('Login')}>
              <Text style={sideAuthText}>{data.login}</Text>
            </TouchableOpacity>
          )}
        </View>
      </SafeAreaView>
    );
  }
  toggleExpand = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    this.setState({expanded: !this.state.expanded});
  };
}

function mapStateToProps(state, props) {
  return {
    loading: state.loading,
    subjects: state.subjects,
    categoriesUz: state.categoriesUz,
    categoriesRu: state.categoriesRu,
    mlang: state.language,
    isLogged: state.isLogged,
    userToken: state.userToken,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SideMenu);
