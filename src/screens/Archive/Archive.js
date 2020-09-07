import React, {Component} from 'react';
import {
  View,
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import {bindActionCreators} from 'redux';
import * as Actions from '../../redux/actions';
import {connect} from 'react-redux';
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import {COLORS} from '../../constants/Colors';
import TagItem from '../../components/TagItem';
import OnlineLessonCard from '../../components/OnlineLessonCard/OnlineLessonCard';
import {styles} from './styles';
import {langData} from '../screens.i18n';
import Loader from '../../components/Loader/Loader';

class Archive extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: '',
    };
  }
  componentDidMount() {
    this.props.fetchArchiveLessons();
  }

  timeConverter = (UNIX_timestamp) => {
    const newDate = new Date().toLocaleString();

    var a = new Date(UNIX_timestamp);
    var year = a.getFullYear();
    var month = a.getMonth();
    var date = a.getDate();
    var hour = a.getHours();
    var min = a.getMinutes();
    var sec = a.getSeconds();
    var time = `${month + 1}/${date}/${year} ${hour}:${
      min < 10 ? '0' + min : min
    }:${sec === 0 ? '00' : sec < 10 ? '0' + sec : sec}`;

    return time;
  };

  render() {
    const {
      navigation,
      mlang,
      archiveLessons,
      archiveLessonsLoader,
    } = this.props;
    const {container} = styles;
    const present = new Date();

    const data = mlang === 'uz' ? langData.uz : langData.ru;
    return archiveLessonsLoader ? (
      <Loader />
    ) : (
      <SafeAreaView>
        <ScrollView>
          <View>
            <FlatList
              keyExtractor={(item) => item.id}
              data={archiveLessons.recording}
              renderItem={({item}) => (
                <OnlineLessonCard
                  subjectId={item.id}
                  meetingId={item.meetingId}
                  navigation={navigation}
                  title={item.name}
                  src="app-asset/images/media/pictures/17.jpg"
                  teacherName={item.teacher}
                  text={item.welcomeMessage}
                  lessonLink={item.playback.format.url}
                  beginTime={this.timeConverter(parseInt(item.startTime))}
                  endTime={this.timeConverter(parseInt(item.endTime))}
                  timeColor={COLORS.BRIGHT_RED}
                  statusText="Online"
                  isArchive={true}
                  tags={
                    <View style={container}>
                      <TagItem
                        tagTitle={data.archive}
                        tagIcon={
                          <FontAwesome
                            name="tag"
                            size={16}
                            color={COLORS.VERY_DARK_DESATURATED_BLUE}
                          />
                        }
                      />
                      <TagItem
                        tagTitle={'Uz'}
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
    archiveLessons: state.archiveLessons,
    archiveLessonsLoader: state.archiveLessonsLoader,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Archive);
