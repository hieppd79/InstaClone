import React, {useEffect, FC, ComponentType} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
// import {useNavigation} from '@react-navigation/native';
import {Routes, useNavigator} from '../../../../navigation';

export const PostList: FC = () => {
  const nav = useNavigator();

  const handleGoToDetail = () => {
    nav.navigate(Routes.main.post_detail);
  };
  return (
    <View>
      <Text>Post list</Text>
      <TouchableOpacity onPress={handleGoToDetail}>
        <Text>Go to detail</Text>
      </TouchableOpacity>
    </View>
  );
};

(PostList as ComponentType<any>).displayName = 'Screen.PostList';
