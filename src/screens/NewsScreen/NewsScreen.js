import React, {Component} from 'react';
import {View, SafeAreaView, ScrollView, FlatList} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as Actions from '../../redux/actions';
import {NewsCard} from '../../components/NewsCard';
import {styles} from './styles';
import {langData} from '../screens.i18n';
import Loader from '../../components/Loader';

class NewsScreen extends Component {
  componentDidMount() {
    this.props.fetchNews();
  }
  render() {
    const {container} = styles;
    const {navigation, mlang, news, newsLoader} = this.props;

    const {uz, ru} = langData;
    let data = mlang === 'uz' ? uz : ru;
    return newsLoader ? (
      <Loader />
    ) : (
      <SafeAreaView>
        <View style={container}>
          <FlatList
            keyExtractor={(item) => item.id + ''}
            data={
              mlang === 'uz'
                ? news.filter((a) => a.language_id === 1)
                : news.filter((a) => a.language_id === 3)
            }
            renderItem={({item}) => (
              <NewsCard data={item} navigation={navigation} />
            )}
          />
        </View>
      </SafeAreaView>
    );
  }
}

function mapStateToProps(state) {
  return {
    mlang: state.language,
    news: state.news,
    newsLoader: state.newsLoader,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(NewsScreen);
