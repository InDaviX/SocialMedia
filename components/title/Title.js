import React from 'react';
import style from './style';
import PropTypes from 'prop-types';
import {Text} from 'react-native';

const Title = props => {
  return <Text style={style.title}>{props.title}</Text>;
};

Title.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Title;
