import React, {useEffect, FC, ComponentType} from 'react';
import {View, Text} from 'react-native';

export const PostDetail: FC = () => {
  return (
    <View>
      <Text>Post list</Text>
    </View>
  );
};

(PostDetail as ComponentType<any>).displayName = 'Screen.PostDetail';
