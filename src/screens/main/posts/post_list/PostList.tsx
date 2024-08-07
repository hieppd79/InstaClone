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
  NativeSyntheticEvent,
  NativeScrollEvent,
} from 'react-native';
// import {useNavigation} from '@react-navigation/native';
import {Routes, useNavigator} from '../../../../navigation';
import {Post, useGetPostsQuery} from '../../../../../sdk/apis';
import {PostItem} from './components/PostItem';
import {PostListHeader} from './components/PostListHeader';
import {PostListHeaderAnimated} from './components/PostListHeader.Animated';
import {FlashList} from '@shopify/flash-list';
import {
  useInfinityPost,
  useAppDispatch,
  useAppSelector,
} from '../../../../hooks';
import {handleScroll} from '../../../../reduxs/reducers';
import {Container} from '../../../../components';

export const PostList: FC = () => {
  const nav = useNavigator();
  const dispatch = useAppDispatch();
  const currentUserName = useAppSelector(
    state => state.root.posts.currentUserName,
  );

  const {data, isLoading, isFetching, loadMore, refetch} = useInfinityPost({
    userName: currentUserName,
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

  const onScroll = useCallback(
    (event: NativeSyntheticEvent<NativeScrollEvent>) => {
      dispatch(handleScroll(event.nativeEvent.contentOffset.y));
    },
    [dispatch, handleScroll],
  );

  return (
    <Container>
      <PostListHeaderAnimated />
      <FlatList
        bounces={false}
        data={data}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        refreshing={isLoading}
        onRefresh={refetch}
        onEndReached={onEndReached}
        onEndReachedThreshold={0.3}
        ListFooterComponent={
          isFetching ? <ActivityIndicator size="small" color="gray" /> : null
        }
        onScroll={onScroll}
        scrollEventThrottle={500}
        ListHeaderComponent={PostListHeader}
      />
    </Container>
  );
};

(PostList as ComponentType<any>).displayName = 'Screen.PostList';
