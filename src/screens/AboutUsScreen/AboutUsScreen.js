import React from 'react';
import {View, Text, SafeAreaView, ScrollView} from 'react-native';
// import {MainTitle} from '../../components/MainTitle';
import {COLORS} from '../../constants/Colors';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as Actions from '../../redux/actions';
import {langData} from '../screens.i18n';
import {styles} from './styles';

class AboutUsScreen extends React.Component {
  render() {
    const {uz, ru} = langData;
    const {mlang} = this.props;
    let data = mlang === 'uz' ? uz : ru;
    const {wrapper, container, text} = styles;
    return (
      <SafeAreaView>
        <View style={container}>
          <ScrollView>
            <View style={wrapper}>
              {/* <MainTitle
                title={data.aboutUsTitle}
                titleColor={COLORS.DARK_BLUE}
              /> */}
              <Text style={text}>{data.aboutUsText}</Text>
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    );
  }
}

function mapStateToProps(state) {
  return {
    // mlang: state.languageReducer.language,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(AboutUsScreen);
