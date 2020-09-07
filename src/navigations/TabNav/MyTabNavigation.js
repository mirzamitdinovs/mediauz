import React from 'react';
import {bindActionCreators} from 'redux';
import * as Actions from '../../redux/actions';
import {connect} from 'react-redux';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import OnlineLessons from '../../screens/OnlineLessonsScreen';
import Archive from '../../screens/Archive/Archive';
import {langData} from '../Navigations.i18n';

const Tab = createMaterialTopTabNavigator();

function MyTabNavigation({mlang}) {
  const data = mlang === 'uz' ? langData.uz : langData.ru;
  return (
    <Tab.Navigator lazy={true}>
      <Tab.Screen
        name="Online Darslar"
        component={OnlineLessons}
        options={{title: data.onlineLessons}}
      />
      <Tab.Screen
        name="Arxiv"
        component={Archive}
        options={{title: data.Archive}}
      />
    </Tab.Navigator>
  );
}

function mapStateToProps(state, props) {
  return {
    mlang: state.language,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MyTabNavigation);
