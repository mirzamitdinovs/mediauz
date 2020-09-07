import React from 'react';
import {Button, View, Text, Image} from 'react-native';
import {bindActionCreators} from 'redux';
import * as Actions from '../../redux/actions';
import {connect} from 'react-redux';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import StackNav from '../StackNav';
import {COLORS} from '../../constants/Colors';
import SideMenu from './SideMenu';
import LessonByCategorySideMenu from './SideMenu/LessonByCategorySideMenu';
import LessonByTeacherSideMenu from './SideMenu/LessonByTeacherSideMenu';
const Drawer = createDrawerNavigator();

class DrawerNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      courseId: 0,
    };
  }
  componentDidMount() {
    this.getCourseId();
  }

  componentDidUpdate() {
    if (this.state.courseId !== this.props.courseId) {
      this.getCourseId();
    }
  }

  getCourseId = () => {
    this.setState({
      courseId: this.props.courseId,
    });
  };
  render() {
    return (
      <NavigationContainer>
        <Drawer.Navigator
          drawerContent={(props) => {
            if (this.props.pathName === 'categoryScreen') {
              return <LessonByCategorySideMenu {...props} />;
            } else if (this.props.pathName === 'teacherScreen') {
              return <LessonByTeacherSideMenu {...props} />;
            } else {
              return <SideMenu {...props} />;
            }
          }}
          drawerStyle={{backgroundColor: COLORS.WHITE}}>
          <Drawer.Screen
            name="mainScreen"
            component={StackNav}
            options={{headermode: 'none'}}
          />
        </Drawer.Navigator>
      </NavigationContainer>
    );
  }
}

function mapStateToProps(state, props) {
  return {
    courseId: state.courseId,
    subjectId: state.subjectId,
    pathName: state.pathName,
    status: state.status,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(DrawerNav);
