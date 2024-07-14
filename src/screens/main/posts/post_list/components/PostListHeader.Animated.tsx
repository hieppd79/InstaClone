import React, {FC, useEffect, useRef, useState} from 'react';
import {
  View,
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {PostListHeader} from './PostListHeader';
import Animated, {
  interpolateColor,
  useAnimatedStyle,
  useDerivedValue,
  withTiming,
} from 'react-native-reanimated';
import {useAppSelector} from '../../../../../hooks';

export const PostListHeaderAnimated: FC = () => {
  const {top} = useSafeAreaInsets();
  const scrollYList = useAppSelector(state => state.root.posts.scrollY);
  //   const scrollY = useSharedValue(0)
  const AnimatedView = Animated.createAnimatedComponent(View);

  const scrollY = useDerivedValue(() => {
    return scrollYList;
  });

  const backgroundStyle = useAnimatedStyle(() => {
    return {
      zIndex: scrollY.value > 50 ? 1 : 0,

      opacity: withTiming(scrollY.value > 50 ? 1 : 0),
    };
  });

  return (
    <AnimatedView style={[styles.container, {top}, backgroundStyle]}>
      <PostListHeader />
    </AnimatedView>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 50,
    zIndex: 10,
    backgroundColor: 'white',
  },
});
