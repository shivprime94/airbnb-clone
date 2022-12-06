import React from 'react';
import {ScrollView} from 'react-native';
import Home from './screens/home';
import Post from './screens/post';
import Feed from '../src/assets/data/feed';
const post1 = Feed[0];
const Main = () => {
  return (
    <ScrollView>
      <Home />
      <Post post={post1} />
    </ScrollView>
  );
};
export default Main;
