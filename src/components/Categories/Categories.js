import React from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  TouchableWithoutFeedback,
} from 'react-native';
import {COLORS} from '../../constants/Colors';
import Category from '../Category';
import MainTitle from '../MainTitle';
import {styles} from './styles';

const Categories = ({
  navigation,
  categoriesUzList,
  categoriesRuList,
  mlang,
  mainCategoryText,
  mainCategoryTitle,
  onlineLessonsList,
  setCategoryName,
  onlineLessonTitle,
}) => {
  const {container, cardList, icon} = styles;
  return (
    <TouchableWithoutFeedback>
      <View style={container}>
        <MainTitle
          title={mainCategoryTitle}
          text={mainCategoryText}
          titleColor={COLORS.DARK_BLUE}
          textColor={COLORS.DESATURATED_DARK_BLUE}
        />
        <View style={cardList}>
          <FlatList
            data={mlang === 'uz' ? categoriesUzList : categoriesRuList}
            keyExtractor={(item) => item.id}
            renderItem={({item}) => (
              <Category
                pathScreen={'CategoryScreen'}
                title={item.name}
                navigation={navigation}
                categoryId={item.id}
                categoryImg={item.img}
                setCategoryName={setCategoryName}
              />
            )}
          />
          <Category
            pathScreen={'OnlineLessonsScreen'}
            navigation={navigation}
            title={onlineLessonTitle}
            categoryImg={require('../../assets/images/courses-3.jpg')}
            isStatic={true}
            setCategoryName={setCategoryName}
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Categories;
