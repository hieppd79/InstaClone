import React, {FC, useMemo} from 'react';
import {FastImage} from '../FastImage';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {Media} from '../../../sdk/apis';

interface BaseProps {
  isVideo: boolean;
  videoUrl: string;
  imageUrl: string;
}

interface CarouselMediaProps {
  carouselMedia: Media;
  isVideo?: undefined;
  videoUrl?: undefined;
  imageUrl?: undefined;
}

interface NonCarouselMediaProps extends BaseProps {
  carouselMedia?: undefined;
}

type CarouselMediaItemProps = CarouselMediaProps | NonCarouselMediaProps;

const {height: MAX_HEIGHT} = Dimensions.get('screen');
export const CarouselMediaItem: FC<CarouselMediaItemProps> = props => {
  const {carouselMedia, isVideo, videoUrl, imageUrl} = props;
  if (carouselMedia) {
    if (!carouselMedia.is_video) {
      return (
        <FastImage
          resizeMode="cover"
          source={{uri: carouselMedia?.image_versions?.items[0].url}}
          style={styles.cardImage}
        />
      );
    } else {
      return (
        <View>
          <Text>video</Text>
        </View>
      );
    }
  } else {
    if (isVideo) {
      return (
        <View>
          <Text>video</Text>
        </View>
      );
    } else {
      return (
        <FastImage
          resizeMode="cover"
          source={{uri: imageUrl}}
          style={styles.cardImage}
        />
      );
    }
  }
};

const styles = StyleSheet.create({
  cardImage: {
    width: '100%',
    height: MAX_HEIGHT * 0.55,
  },
});
