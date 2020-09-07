import React from 'react';
import {
  Text,
  View,
  ScrollView,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as Actions from '../../redux/actions';
import {styles} from './style';
import Loader from '../../components/Loader';
import {SITEURL} from '../../constants/Colors';

class TeachersScreen extends React.Component {
  componentDidMount() {
    this.props.fetchTeachers();
  }
  render() {
    const {navigation, teachers, teacherLoader} = this.props;
    return teacherLoader ? (
      <Loader />
    ) : (
      <SafeAreaView>
        <View style={styles.container}>
          <FlatList
            data={teachers}
            renderItem={({item}) => (
              <TouchableOpacity
                onPress={() => {
                  this.props.setTeacherInfo(item.full_name, item.img);
                  this.props.navigation.navigate('CoursesByTeacher');
                  this.props.setMainTeacher(true);
                }}>
                <View style={styles.wrapper}>
                  <View style={styles.iconContainer}>
                    <Image
                      source={{
                        uri: `${SITEURL}${item.img}`,
                      }}
                      style={styles.teacherImage}
                    />
                  </View>
                  <Text style={styles.title}>{item.full_name}</Text>
                </View>
              </TouchableOpacity>
            )}
          />
        </View>
      </SafeAreaView>
    );
  }
}

function mapStateToProps(state, props) {
  return {
    teacherLoader: state.teacherLoader,
    teachers: state.teachers,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(TeachersScreen);
