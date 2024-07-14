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
  StyleSheet,
  TextInput,
} from 'react-native';
import {Container, Avatar} from '../../../../components';
import {useAppDispatch, useDebounce} from '../../../../hooks';
import {useLazySearchUserQuery, User} from '../../../../../sdk/apis';
import {updateCurrentUserName} from '../../../../reduxs/reducers';
import {useNavigator} from '../../../../navigation';

export const SearchUser: FC = () => {
  const dispatch = useAppDispatch();
  const nav = useNavigator();
  const [searchText, setSearchText] = useState('');

  const [searchUser, {data, isLoading}] = useLazySearchUserQuery();

  const mKeyword = useDebounce(searchText, 300);

  useEffect(() => {
    if (mKeyword) {
      searchUser({userName: mKeyword});
    }
  }, [mKeyword]);

  const handleChangeUser = useCallback(
    (userName: string) => {
      dispatch(updateCurrentUserName(userName));
      nav.goBack();
    },
    [dispatch],
  );

  const renderItem = useCallback(
    ({item, index}: {item: User; index: number}) => {
      return (
        <TouchableOpacity
          style={styles.userItemContainer}
          onPress={() => handleChangeUser(item.username)}>
          <Avatar source={{uri: item.profile_pic_url}} />
          <Text style={styles.textName}>{item.username}</Text>
        </TouchableOpacity>
      );
    },
    [],
  );

  const keyExtractor = useCallback(
    (item: User, index: number) => `search_user_${item.id}`,
    [],
  );

  return (
    <Container edges={['bottom']} style={styles.container}>
      <TextInput
        onChangeText={setSearchText}
        value={searchText}
        style={styles.textInput}
        placeholder="Type to search"
      />
      <FlatList
        refreshing={isLoading}
        data={data?.data.users}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
      />
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  textInput: {
    height: 40,
    borderWidth: 1,
    borderColor: 'black',
    marginHorizontal: 10,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  userItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  textName: {
    marginLeft: 10,
    fontWeight: '700',
  },
});

(SearchUser as ComponentType<any>).displayName = 'Screen.SearchUser';
