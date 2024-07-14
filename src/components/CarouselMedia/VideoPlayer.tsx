import React, {FC, useEffect, useRef, useState} from 'react';
import {View, Dimensions, StyleSheet} from 'react-native';
import Video from 'react-native-video';
import {useAppSelector} from '../../hooks';

interface VideoPlayerProps {
  videoUrl: string;
  isVideoInCarouselFocus: boolean;
}

const {height: MAX_HEIGHT} = Dimensions.get('screen');
export const VideoPlayer: FC<VideoPlayerProps> = props => {
  const {videoUrl, isVideoInCarouselFocus} = props;
  const scrollY = useAppSelector(state => state.root.posts.scrollY);
  const itemRef = useRef<View>(null);
  const [paused, setPaused] = useState<boolean>(true);

  const checkIfInView = () => {
    if (itemRef.current) {
      itemRef.current.measureInWindow((x, y, width, height) => {
        const itemTop = y;
        const itemBottom = itemTop + height;

        if (
          itemTop >= 0 &&
          itemBottom <= MAX_HEIGHT &&
          isVideoInCarouselFocus
        ) {
          setPaused(false);
        } else {
          setPaused(true);
        }
      });
    }
  };

  useEffect(() => {
    checkIfInView();
  }, [scrollY, isVideoInCarouselFocus]);

  return (
    <View ref={itemRef}>
      <Video
        repeat
        resizeMode="cover"
        source={{uri: videoUrl}}
        style={styles.cardImage}
        paused={paused}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  cardImage: {
    width: '100%',
    height: MAX_HEIGHT * 0.65,
  },
});
