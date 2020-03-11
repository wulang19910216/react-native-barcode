// @flow
import React, { useState } from 'react';
import { AppRegistry, StyleSheet, Text, TextInput, View } from 'react-native';

import Barcode from 'react-native-barcode-builder';

export default () => {
  const [text, setText] = useState('2645529340985');

  const handleChangeText = val => {
    setText(val);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>React Native Barcode Builder</Text>

      {text.length > 0 && (
        <View style={styles.barcodeWrapper}>
          <Barcode style={styles.barcode} value={text} format="EAN13" flat />
        </View>
      )}

      <TextInput value={text} onChangeText={handleChangeText} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    padding: 20,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  barcodeWrapper: {
    width: '100%',
    height: 200,
  },
});

AppRegistry.registerComponent('Example', () => Example);
