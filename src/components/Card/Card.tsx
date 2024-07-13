import React, {FC, useMemo} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {Post} from '../../../sdk/apis';
import {FastImage} from '../FastImage';
import {Avatar} from '../Avatar';
import {CarouselMedia} from '../CarouselMedia';
import {Prototype} from '../../utils';
import FeatherIcon from 'react-native-vector-icons/Feather';

interface CardProps extends Post {}

const {height: MAX_HEIGHT} = Dimensions.get('screen');
export const Card: FC<CardProps> = props => {
  const {image_versions, user, like_count, caption} = props;
  const imageUri = useMemo(() => {
    return image_versions.items[0].url;
  }, [image_versions]);

  return (
    <View style={styles.container}>
      <View style={[styles.verticalAlign, styles.cardHeader]}>
        <Avatar
          source={{
            uri: user?.profile_pic_url,
          }}
        />
        <Text style={[styles.name, styles.textBold]}>{user.username}</Text>
      </View>
      <View>
        {/* <FastImage
          resizeMode="cover"
          source={{uri: imageUri}}
          style={styles.cardImage}
        /> */}
        <CarouselMedia {...props} />
      </View>
      <View style={styles.interactionIcon}>
        <View style={styles.iconsLeft}>
          <FeatherIcon name="heart" size={25} color="black" />
          <FeatherIcon
            name="message-circle"
            size={25}
            color="black"
            style={styles.iconSpacing}
          />
          <FeatherIcon name="send" size={25} color="black" />
        </View>
        <View>
          <FeatherIcon name="bookmark" size={25} color="black" />
        </View>
      </View>
      <View style={styles.cardCaption}>
        <Text style={styles.textBold}>
          Có {Prototype.number.formatNumber(like_count)} người thích
        </Text>
        <Text>
          <Text style={[styles.name, styles.textBold]}>{user.username}</Text>{' '}
          {caption.text}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // borderColor: 'red',
    // borderWidth: 1,
    backgroundColor: 'white',
    marginVertical: 10,
    paddingVertical: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  verticalAlign: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  name: {
    marginLeft: 10,
  },
  cardHeader: {
    paddingBottom: 10,
    paddingHorizontal: 10,
  },
  cardImage: {
    width: '100%',
    height: MAX_HEIGHT * 0.55,
  },
  cardCaption: {
    paddingHorizontal: 15,
  },
  textBold: {
    fontWeight: '700',
  },
  interactionIcon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  iconsLeft: {
    flexDirection: 'row',
  },
  iconSpacing: {
    marginHorizontal: 5,
  },
});
