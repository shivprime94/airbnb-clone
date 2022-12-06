import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
const Post = props => {
  const post = props.post;
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: post.image,
        }}></Image>
      <Text style={styles.bedrooms}>
        {post.bed} Bed {post.bedroom} Bedroom
      </Text>
      <Text style={styles.description} numberOfLines={2}>
        {post.type} : {post.title}
      </Text>
      <Text style={styles.prices}>
        <Text style={styles.oldPrice}>${post.oldPrice} </Text>
        <Text style={styles.newPrice}> ${post.newPrice} </Text>/ night
      </Text>
      <Text style={styles.totalPrice}>${post.totalPrice} total</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
    marginHorizontal: 20,
    backgroundColor: '#fff',
    elevation: 5,
    padding: 20,
    borderRadius: 10,
  },
  image: {
    width: '100%',
    aspectRatio: 3 / 2,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  bedrooms: {
    marginVertical: 10,
    color: '#5b5b5b',
  },
  description: {
    fontSize: 18,
    lineHeight: 26,
  },
  prices: {
    fontSize: 18,
    marginVertical: 10,
  },
  oldPrice: {
    color: '#5b5b5b',
    textDecorationLine: 'line-through',
  },
  newPrice: {
    fontWeight: 'bold',
  },
  totalPrice: {
    color: '#5b5b5b',
    textDecorationLine: 'underline',
  },
});
export default Post;
