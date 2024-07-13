import React, {FC, memo, useState} from 'react';
import {StyleSheet} from 'react-native';
import RNFastImage, {
  FastImageProps as RNFastImageProps,
  Priority,
} from 'react-native-fast-image';

type Cache = 'immutable' | 'web' | 'cacheOnly';

export declare type FastImageSource =
  | {
      uri?: string | null;
      headers?: {
        [key: string]: string;
      };
      priority?: Priority;
      cache?: Cache;
    }
  | number;

export type FastImageProps = Omit<RNFastImageProps, 'source'> & {
  source?: FastImageSource;
};

export const FastImage: FC<FastImageProps> = memo(props => {
  const {style} = props;
  return (
    <RNFastImage
      {...props}
      source={{
        ...(props.source as any),
        priority: 'high',
        cache: RNFastImage.cacheControl.immutable,
      }}
      style={[styles.container, style]}
    />
  );
});
const styles = StyleSheet.create({
  container: {
    height: 200,
    width: 200,
  },
});
