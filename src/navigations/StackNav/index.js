import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import MainScreen from '../../screens/MainScreen/MainScreen';
import AboutUsScreen from '../../screens/AboutUsScreen/AboutUsScreen';
import RegistrationScreen from '../../screens/RegistrationScreen';
import LoginScreen from '../../screens/LoginScreen';
import NavbarBack from '../../components/NavbarBack/NavbarBack';
import NavbarMain from '../../components/NavbarMain';
import {bindActionCreators} from 'redux';
import * as Actions from '../../redux/actions';
import {connect} from 'react-redux';
import {langData} from '../Navigations.i18n';
import ContactsScreen from '../../screens/ContactsScreen/ContactsScreen';
import Ads from '../../screens/Ads/Ads';
import NewsScreen from '../../screens/NewsScreen/NewsScreen';
import NewsDetailsScreen from '../../screens/NewsDetailsScreen/NewsDetailsScreen';
import TeachersScreen from '../../screens/TeachersScreen/TeachersScreen';
import CoursesByTeacherScreen from '../../screens/CoursesByTeacherScreen/CoursesByTeacherScreen';
import CategoryScreen from '../../screens/CategoryScreen/CategoryScreen';
import LessonScreen from '../../screens/LessonScreen/LessonScreen';
import LessonByTeacherScreen from '../../screens/LessonByTeacherScreen/LessonByTeacherScreen';
import MyTabNavigation from '../TabNav/MyTabNavigation';

const Stack = createStackNavigator();

class StackNav extends React.Component {
  render() {
    console.log('subjectTitle: ', this.props.subjectTitle);
    const {uz, ru} = langData;
    const {navigation, mlang} = this.props;
    let data = mlang === 'uz' ? uz : ru;
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="MainScreen"
          component={MainScreen}
          options={{
            header: (props) => (
              <NavbarMain {...props} setSubjectInfo={this.props.setStatus} />
              // <NavigationBlock {...props} title={data.mainNavTitleGet} />
            ),
          }}
        />
        <Stack.Screen
          name="Category"
          component={CategoryScreen}
          options={{
            header: (props) => (
              <NavbarBack {...props} navbarTitle={data.courses} />
            ),
          }}
        />

        <Stack.Screen
          name="Teachers"
          component={TeachersScreen}
          options={{
            header: (props) => (
              <NavbarBack {...props} navbarTitle={data.teachers} />
            ),
          }}
        />
        <Stack.Screen
          name="CoursesByTeacher"
          component={CoursesByTeacherScreen}
          options={{
            header: (props) => (
              <NavbarBack
                {...props}
                navbarTitle={data.teachers}
                // status="lesson"
                status={
                  this.props.pathName === 'TeacherScreenMain'
                    ? 'main'
                    : 'lesson'
                }
              />
            ),
          }}
        />
        <Stack.Screen
          name="LessonScreen"
          component={LessonScreen}
          options={{
            header: (props) => (
              <NavbarMain {...props} mainTitle={this.props.subjectTitle} />
            ),
          }}
        />
        <Stack.Screen
          name="LessonByTeacherScreen"
          component={LessonByTeacherScreen}
          options={{
            header: (props) => (
              <NavbarMain
                {...props}
                mainTitle={this.props.subjectTeacherTitle}
              />
            ),
          }}
        />
        <Stack.Screen
          name="OnlineLessonsScreen"
          component={MyTabNavigation}
          options={{
            header: (props) => (
              <NavbarBack
                {...props}
                status="main"
                // mainTitle={data.onlineLessons}
                mainTitle="sayyod"
              />
            ),
          }}
        />

        <Stack.Screen
          name="Blog"
          component={NewsScreen}
          options={{
            header: (props) => (
              <NavbarBack {...props} navbarTitle={data.news} />
            ),
          }}
        />
        <Stack.Screen
          name="Ads"
          component={Ads}
          options={{
            header: (props) => (
              <NavbarBack {...props} navbarTitle={data.advertisement} />
            ),
          }}
        />
        <Stack.Screen
          name="AboutUs"
          component={AboutUsScreen}
          options={{
            header: (props) => (
              <NavbarBack {...props} navbarTitle={data.aboutUs} />
            ),
          }}
        />
        <Stack.Screen
          name="Contacts"
          component={ContactsScreen}
          options={{
            header: (props) => (
              <NavbarBack {...props} navbarTitle={data.contacts} />
            ),
          }}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{
            header: (props) => (
              <NavbarBack {...props} navbarTitle={data.login} />
            ),
          }}
        />
        <Stack.Screen
          name="Registration"
          component={RegistrationScreen}
          options={{
            header: (props) => (
              <NavbarBack {...props} navbarTitle={data.register} />
            ),
          }}
        />
        <Stack.Screen
          name="NewsDetails"
          component={NewsDetailsScreen}
          options={{
            header: (props) => (
              <NavbarBack {...props} navbarTitle={data.details} />
            ),
          }}
        />
      </Stack.Navigator>
    );
  }
}

function mapStateToProps(state, props) {
  return {
    mlang: state.language,
    pathName: state.pathName,
    subjectTitle: state.subjectTitle,
    subjectTeacherTitle: state.subjectTeacherTitle,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(StackNav);
