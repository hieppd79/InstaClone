import React, {FC} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Post} from '../../../../../../sdk/apis';
import {Card} from '../../../../../components';

interface PostItem extends Post {}

export const PostItem: FC<PostItem> = ({...itemProps}) => {
  return <Card {...itemProps} />;
};
