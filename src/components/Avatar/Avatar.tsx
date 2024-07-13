import React, {FC} from 'react';
import {StyleSheet} from 'react-native';
import {FastImage, FastImageProps} from '../FastImage';

interface AvatarProps extends FastImageProps {}

export const Avatar: FC<AvatarProps> = ({source, style}) => {
  return (
    <FastImage source={source} style={[style, styles.avatarDefaultStyle]} />
  );
};

const styles = StyleSheet.create({
  avatarDefaultStyle: {
    width: 35,
    height: 35,
    borderRadius: 50,
  },
});
