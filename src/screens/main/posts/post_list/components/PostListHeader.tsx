import React, {FC, useCallback, useEffect, useRef, useState} from 'react';
import {
  View,
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import {Routes, useNavigator} from '../../../../../navigation';
import FeatherIcon from 'react-native-vector-icons/Feather';

export const PostListHeader: FC = () => {
  const nav = useNavigator();

  const handleGoToSearch = useCallback(() => {
    nav.navigate(Routes.main.search_user);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>INSTAGRAM</Text>
      <TouchableOpacity onPress={handleGoToSearch}>
        <FeatherIcon name="search" size={25} color="black" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 50,
    paddingHorizontal: 10,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'white',
  },
  title: {
    fontSize: 25,
    fontWeight: '700',
  },
});
