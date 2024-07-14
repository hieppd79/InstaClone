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
import {VideoPlayer} from './VideoPlayer';

interface BaseProps {
  isVideo: boolean;
  videoUrl: string;
  imageUrl: string;
  carouselCurrentIndex?: number;
  index?: number;
}

interface CarouselMediaProps {
  carouselMedia: Media;
  isVideo?: undefined;
  videoUrl?: undefined;
  imageUrl?: undefined;
  carouselCurrentIndex?: number;
  index?: number;
}

interface NonCarouselMediaProps extends BaseProps {
  carouselMedia?: undefined;
}

type CarouselMediaItemProps = CarouselMediaProps | NonCarouselMediaProps;

const {height: MAX_HEIGHT} = Dimensions.get('screen');
export const CarouselMediaItem: FC<CarouselMediaItemProps> = props => {
  const {
    carouselMedia,
    isVideo,
    videoUrl,
    imageUrl,
    carouselCurrentIndex,
    index,
  } = props;

  const isVideoInCarouselFocus = useMemo(
    () => carouselCurrentIndex === index,
    [carouselCurrentIndex, index],
  );

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
        <VideoPlayer
          videoUrl={String(carouselMedia?.video_url)}
          isVideoInCarouselFocus={isVideoInCarouselFocus}
        />
      );
    }
  } else {
    if (isVideo) {
      return (
        <VideoPlayer
          videoUrl={String(videoUrl)}
          isVideoInCarouselFocus={isVideoInCarouselFocus}
        />
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
    height: MAX_HEIGHT * 0.65,
  },
});
