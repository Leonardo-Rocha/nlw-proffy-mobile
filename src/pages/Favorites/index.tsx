import React from 'react';
import { View } from 'react-native';

import Pageheader from '../../components/PageHeader';

import styles from './styles';

function Favorites() {
  return (
    <View style={styles.container}>
      <Pageheader title='Meus proffys Favoritos' />
    </View>
  );
}

export default Favorites;
