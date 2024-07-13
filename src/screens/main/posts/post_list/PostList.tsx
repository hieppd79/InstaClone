import React, {useEffect, FC, ComponentType, useCallback, useMemo} from 'react';
import {View, Text, TouchableOpacity, FlatList} from 'react-native';
// import {useNavigation} from '@react-navigation/native';
import {Routes, useNavigator} from '../../../../navigation';
import {Post, useGetPostsQuery} from '../../../../../sdk/apis';
import {PostItem} from './components/PostItem';

export const PostList: FC = () => {
  const nav = useNavigator();

  const {data: getPostResult} = useGetPostsQuery();

  const postsArray = useMemo(() => getPostResult?.data.items, [getPostResult]);

  const handleGoToDetail = () => {
    nav.navigate(Routes.main.post_detail);
  };

  const renderItem = useCallback(
    ({item, index}: {item: Post; index: number}) => {
      return <PostItem {...item} />;
    },
    [],
  );

  return (
    <View>
      <FlatList data={postsArray} renderItem={renderItem} />
    </View>
  );
};

(PostList as ComponentType<any>).displayName = 'Screen.PostList';
