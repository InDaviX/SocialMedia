import React, {useState} from 'react';
import {
  SafeAreaView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Title from './components/title/Title';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faEnvelope} from '@fortawesome/free-regular-svg-icons';
import globalStyle from './assets/styles/globalStyle';

const App = () => {
  const [numberOfNewMesseges, setNumberOfNewMesseges] = useState(0);
  return (
    <>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <SafeAreaView>
        <View style={globalStyle.header}>
          <Title title={'Let’s Explore '} />
          <TouchableOpacity
            style={globalStyle.messageIcon}
            onPress={() => {
              setNumberOfNewMesseges(numberOfNewMesseges + 1);
            }}>
            <FontAwesomeIcon icon={faEnvelope} size={26} color={'#A2A2A2'} />
            <View
              style={[
                globalStyle.messageNotification,
                {opacity: numberOfNewMesseges === 0 ? 0 : 1},
              ]}>
              <Text style={globalStyle.messageNotificationNumber}>
                {numberOfNewMesseges}
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </>
  );
};

export default App;
