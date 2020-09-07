import React, {Component} from 'react';
import {View, FlatList, SafeAreaView, ScrollView} from 'react-native';
import {bindActionCreators} from 'redux';
import * as Actions from '../../redux/actions';
import {connect} from 'react-redux';
import {styles} from './styles';
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import {COLORS} from '../../constants/Colors';
import TagItem from '../../components/TagItem';
import OnlineLessonCard from '../../components/OnlineLessonCard/OnlineLessonCard';
import {langData} from '../screens.i18n';
import Loader from '../../components/Loader/Loader';

class OnlineLessonsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: '',
    };
    this.getTime();
  }
  componentDidMount() {
    this.getTime();
    this.props.fetchOnlineLessons();
  }
  getTime = () => {
    let date = new Date().getDate();
    let month = new Date().getMonth() + 1;
    let year = new Date().getFullYear();
    let hours = new Date().getHours();
    let min = new Date().getMinutes();
    let sec = new Date().getSeconds();
    this.setState({
      date: `${month}/${date}/${year} ${hours}:${min}:${sec}`,
    });
  };

  render() {
    const {navigation, mlang, onlineLessonsLoader} = this.props;
    const {container} = styles;
    const present = new Date();
    const data = mlang === 'uz' ? langData.uz : langData.ru;
    return onlineLessonsLoader ? (
      <Loader />
    ) : (
      <SafeAreaView>
        <ScrollView>
          <View>
            <FlatList
              keyExtractor={(item) => item.id}
              // data={mlang === 'uz' ? onlineLessonsUz : onlineLessonsRu}
              data={this.props.onlineLessons}
              renderItem={({item}) => (
                <OnlineLessonCard
                  subjectId={item.id}
                  meetingId={item.meetingId}
                  navigation={navigation}
                  title={item.meetingName}
                  src="app-asset/images/media/pictures/17.jpg"
                  teacherName={item.teacher}
                  text={item.welcomeMessage}
                  lessonLink={item.link}
                  beginTime={item.startTime}
                  timeColor={COLORS.VIVID_CYAN}
                  statusText="Online"
                  isArchive={false}
                  tags={
                    <View style={container}>
                      <TagItem
                        tagTitle={data.onlineLessons}
                        tagIcon={
                          <FontAwesome
                            name="tag"
                            size={16}
                            color={COLORS.VERY_DARK_DESATURATED_BLUE}
                          />
                        }
                      />
                      <TagItem
                        tagTitle={item.language_id === 1 ? 'Uz' : 'Ru'}
                        tagIcon={
                          <MaterialCommunityIcons
                            name="google-translate"
                            size={16}
                            color={COLORS.VERY_DARK_DESATURATED_BLUE}
                          />
                        }
                      />
                      {/* <TagItem
                        tagTitle={item.view}
                        tagIcon={
                          <FontAwesome
                            name="eye"
                            size={16}
                            color={COLORS.VERY_DARK_DESATURATED_BLUE}
                          />
                        }
                      /> */}
                    </View>
                  }
                />
              )}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

function mapStateToProps(state, props) {
  return {
    mlang: state.language,
    onlineLessons: state.onlineLessons,
    onlineLessonsLoader: state.onlineLessonsLoader,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(OnlineLessonsScreen);
