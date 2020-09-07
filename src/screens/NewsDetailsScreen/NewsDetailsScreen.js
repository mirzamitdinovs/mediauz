import React from 'react';
import {Text, View, SafeAreaView, ScrollView} from 'react-native';
import NewsDetailsCard from '../../components/NewsDetailsCard';

import {styles} from './styles';

class NewsDetailsScreen extends React.Component {
  render() {
    const {data} = this.props.route.params;
    return (
      <SafeAreaView>
        <ScrollView>
          <View style={styles.container}>
            <NewsDetailsCard data={data} />
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default NewsDetailsScreen;
