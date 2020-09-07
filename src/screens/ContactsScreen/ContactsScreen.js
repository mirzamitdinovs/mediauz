import React from 'react';
import {View, SafeAreaView, ScrollView} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as Actions from '../../redux/actions';
import ContactCard from '../../components/ContactCard';
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/dist/FontAwesome5';
import {COLORS} from '../../constants/Colors';
// import ContactForm from '../../components/ContactForm';
import {styles} from './styles';
import {contactData} from './ContactScreen.i18n';
import MainTitle from '../../components/MainTitle';

class ContactsScreen extends React.Component {
  render() {
    const {uz, ru} = contactData;
    const {navigation, mlang} = this.props;
    let data = mlang === 'uz' ? uz : ru;
    const {container, wrapper} = styles;
    return (
      <SafeAreaView>
        <View>
          <ScrollView>
            <View style={container}>
              {/* <MainTitle title={data.contactTitle} /> */}
              <View style={wrapper}>
                <ContactCard
                  cardbgColor={{backgroundColor: COLORS.BRIGHT_PINK}}
                  cardTitle="+998911336742"
                  cardText={data.freeHelp}
                  cardIcon={
                    <FontAwesome name="phone" size={24} color={COLORS.WHITE} />
                  }
                />
              </View>
              <View style={wrapper}>
                <ContactCard
                  cardbgColor={{backgroundColor: COLORS.BRIGHT_BLUE}}
                  cardTitle={data.workingDays}
                  cardText={data.workingHours}
                  cardIcon={
                    <FontAwesome
                      name="clock-o"
                      size={24}
                      color={COLORS.WHITE}
                    />
                  }
                />
              </View>
              <View style={wrapper}>
                <ContactCard
                  cardbgColor={{backgroundColor: COLORS.LIME_GREEN}}
                  cardTitle={data.streetAdress}
                  cardText={data.cityAdreess}
                  cardIcon={
                    <FontAwesome5
                      name="map-marker-alt"
                      size={24}
                      color={COLORS.WHITE}
                    />
                  }
                />
              </View>
              <View style={wrapper}>
                <ContactCard
                  cardbgColor={{backgroundColor: COLORS.VIVID_ORANGE}}
                  cardTitle="Muhammaddincoder@gmail.com"
                  cardText={data.supportUs}
                  cardIcon={
                    <FontAwesome
                      name="envelope-o"
                      size={24}
                      color={COLORS.WHITE}
                    />
                  }
                />
                {/* <ContactForm
                  subjectTitle={data.subjectTitle}
                  questions={data.questions}
                  send={data.send}
                /> */}
              </View>
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    );
  }
}

function mapStateToProps(state) {
  return {
    mlang: state.language,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(ContactsScreen);
