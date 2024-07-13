import React, {FC} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Post} from '../../../../../../sdk/apis';

interface PostItem extends Post {}

export const PostItem: FC<PostItem> = ({caption}) => {
  return (
    <View>
      <Text>{caption.text}</Text>
    </View>
  );
};
