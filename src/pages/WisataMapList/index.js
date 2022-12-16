import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const WisataMapList = () => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text>Semua</Text>
        <Text style={styles.text}>Wisata Alam</Text>
        <Text style={styles.text}>Wisata Air</Text>
        <Text style={styles.text}>Wisata Kuliner</Text>
      </View>
    </View>
  );
};

export default WisataMapList;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    // justifyContent: 'top',
    flex: 1,
    // alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginLeft: 20,
  },
  text: {
    marginLeft: 20,
  },
});
