import React, {FC, useEffect, useRef, useState} from 'react';
import {
  View,
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';

export const PostListHeader: FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>INSTAGRAM</Text>
      <TouchableOpacity>
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
