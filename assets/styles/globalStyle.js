import {StyleSheet} from 'react-native';
import {getFontFamily} from '../fonts/helper';

const globalStyle = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: 26,
    marginRight: 17,
    marginTop: 20,
  },
  messageIcon: {
    padding: 14,
    borderRadius: 28,
    backgroundColor: '#F3F7F8',
  },
  messageNotification: {
    backgroundColor: '#F35BAC',
    borderRadius: 10,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    width: 12,
    height: 12,
    position: 'absolute',
    right: 10,
    top: 14,
  },
  messageNotificationNumber: {
    color: 'white',
    fontSize: 8,
    fontFamily: getFontFamily('Inter', '600'),
  },
});

export default globalStyle;
