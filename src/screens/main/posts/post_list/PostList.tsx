import React, {
  useEffect,
  FC,
  ComponentType,
  useCallback,
  useMemo,
  useState,
} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from 'react-native';
// import {useNavigation} from '@react-navigation/native';
import {Routes, useNavigator} from '../../../../navigation';
import {Post, useGetPostsQuery} from '../../../../../sdk/apis';
import {PostItem} from './components/PostItem';
import {FlashList} from '@shopify/flash-list';
import {useInfinityPost} from '../../../../hooks';

export const PostList: FC = () => {
  const nav = useNavigator();

  const {data, isLoading, isFetching, loadMore, refetch} = useInfinityPost({
    userName: 'mrbeast',
  });

  const handleGoToDetail = () => {
    nav.navigate(Routes.main.post_detail);
  };

  const renderItem = useCallback(
    ({item, index}: {item: Post; index: number}) => {
      return <PostItem {...item} />;
    },
    [],
  );

  const keyExtractor = useCallback(
    (item: Post, index: number) => `post_item_${item.id}`,
    [],
  );

  const onEndReached = useCallback(() => {
    loadMore();
  }, [loadMore]);

  return (
    <FlashList
      data={data}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      estimatedItemSize={600}
      refreshing={isLoading}
      onRefresh={refetch}
      onEndReached={onEndReached}
      onEndReachedThreshold={0.3}
      ListFooterComponent={
        isFetching ? <ActivityIndicator size="small" color="gray" /> : null
      }
    />
  );
};

(PostList as ComponentType<any>).displayName = 'Screen.PostList';
