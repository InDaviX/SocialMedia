import React from 'react';
import {SafeAreaView} from 'react-native';
import {getFontFamily} from './assets/fonts/helper';
import Title from './components/title/Title';

const App = () => {
  return (
    <SafeAreaView>
      <Title title={'Let’s Explore '} />
    </SafeAreaView>
  );
};

export default App;
