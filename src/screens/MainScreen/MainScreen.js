import React, {Component} from 'react';
import {
  View,
  TouchableWithoutFeedback,
  SafeAreaView,
  Keyboard,
  TouchableOpacity,
  Image,
  ScrollView,
  Text,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import {bindActionCreators} from 'redux';
import * as Actions from '../../redux/actions';
import {connect} from 'react-redux';
import Categories from '../../components/Categories';
import InfoList from '../../components/InfoList';
// import {OurCourses} from '../../components/OurCourses';
// import News from '../../components/News';
import {styles} from './styles';
import {langData} from './MainScreen.i18n';
import Loader from '../../components/Loader';

class MainScreen extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchSubjects();
    this.props.fetchTeachers();
    this.props.fetchCategories();
    this.props.setMainTeacher(false);
    this.userAuth();
    this.setLang();
    // this.props.setSubjectInfo(0, '');
  }

  setLang = async () => {
    const userLang = await AsyncStorage.getItem('userLang');
    this.props.changeLang(userLang);
  };
  userAuth = async () => {
    try {
      const userToken = await AsyncStorage.getItem('userToken');
      const userFullName = await AsyncStorage.getItem('userFullName');
      if (userToken !== null) {
        this.props.signIn(userToken, userFullName);
      }
    } catch (e) {
      console.log(e);
    }
  };

  render() {
    const {toTop, toTopImage} = styles;
    const {
      navigation,
      categoriesUz,
      categoriesRu,
      mlang,
      subjects,
      teachers,
      onlineLessons,
      categoryLoader,
      subjectLoader,
    } = this.props;
    const {uz, ru} = langData;
    let data = mlang === 'uz' ? uz : ru;
    return subjectLoader && categoryLoader ? (
      <Loader />
    ) : (
      <SafeAreaView>
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
          <View style={styles.view}>
            <ScrollView>
              <Categories
                navigation={navigation}
                categoriesUzList={categoriesUz}
                categoriesRuList={categoriesRu}
                mlang={mlang}
                onlineLessonsList={onlineLessons}
                setCategoryName={this.props.setCategoryName}
                mainCategoryTitle={data.mainCategoryTitle}
                mainCategoryText={data.mainCategoryText}
                onlineLessonTitle={data.onlineLessons}
              />
              <InfoList
                subjectsCount={subjects.length}
                teachersCount={teachers.length}
                infoAllTeachers={data.infoAllTeachers}
                infoAllStudents={data.infoAllStudents}
                infoAllCourses={data.infoAllCourses}
              />
              {/* <SponsorsList
                mainSponsorsTitle={data.mainSponsorsTitle}
                mainSponsorsText={data.mainSponsorsText}
              /> */}
              {/* <OurCourses
                ourCoursesMainTitle={data.ourCoursesMainTitle}
                ourCoursesMainText={data.ourCoursesMainText}
                learnOnlineTitle={data.learnOnlineTitle}
                learnOnlineText={data.learnOnlineText}
                learnOfflineTitle={data.learnOfflineTitle}
                learnOfflineText={data.learnOfflineText}
                buyBooksTitle={data.buyBooksTitle}
                buyBooksText={data.buyBooksText}
              /> */}
              {/* <News
                navigation={navigation}
                mainNewsTitle={data.mainNewsTitle}
              /> */}
            </ScrollView>
            {/* <TouchableOpacity
              onPress={() => this.setState({isButtonVisiable: false})}
              style={
                this.state.isButtonVisiable === false ? {height: 0} : toTop
              }>
              <Image
                source={require('../../assets/images/arrow-up.png')}
                style={toTopImage}
              />
            </TouchableOpacity> */}
          </View>
        </TouchableWithoutFeedback>
      </SafeAreaView>
    );
  }
}

function mapStateToProps(state, props) {
  return {
    mlang: state.language,
    subjects: state.subjects,
    teachers: state.teachers,
    subjectLoader: state.subjectLoader,
    categoriesUz: state.categoriesUz,
    categoriesRu: state.categoriesRu,
    categoryLoader: state.categoryLoader,
    status: state.status,
    pathName: state.pathName,
    // categoriesUz: state.categoriesUz,
    // categoriesRu: state.categoriesRu,
    // teachers: state.teachers,
    // mlang: state.languageReducer.language,
    // onlineLessons: state.onlineLessons,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);
