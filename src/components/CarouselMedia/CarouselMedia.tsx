import React, {FC} from 'react';
import {View, Dimensions, StyleSheet} from 'react-native';
import {Post} from '../../../sdk/apis';
import Carousel, {Pagination} from 'react-native-reanimated-carousel';
import {CarouselMediaItem} from './CarouselMedia.Item';
import {useSharedValue} from 'react-native-reanimated';

interface CarouselMediaProps extends Post {}

const {width: MAX_WIDTH, height: MAX_HEIGHT} = Dimensions.get('screen');
export const CarouselMedia: FC<CarouselMediaProps> = props => {
  const {carousel_media, is_video, video_url, thumbnail_url} = props;
  const progress = useSharedValue<number>(0);

  if (carousel_media) {
    return (
      <>
        <Carousel
          width={MAX_WIDTH}
          height={MAX_HEIGHT * 0.55}
          data={carousel_media}
          onProgressChange={progress}
          renderItem={({item, index}) => (
            <CarouselMediaItem carouselMedia={item} />
          )}
        />
        <Pagination.Basic
          progress={progress}
          data={carousel_media}
          size={5}
          dotStyle={styles.dotStyle}
          containerStyle={styles.containerStyle}
        />
      </>
    );
  }
  return (
    <CarouselMediaItem
      isVideo={is_video}
      videoUrl={video_url}
      imageUrl={thumbnail_url}
    />
  );
};

const styles = StyleSheet.create({
  dotStyle: {
    backgroundColor: 'rgba(0,0,0,0.2)',
    borderRadius: 50,
  },
  containerStyle: {
    gap: 5,
    marginTop: 10,
  },
});
