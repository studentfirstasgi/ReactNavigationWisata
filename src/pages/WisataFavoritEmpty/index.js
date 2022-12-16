import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

const WisataFavoritEmpty = () => {
  return (
    <View style={styles.container}>
      <Image
        style={{
          width: 44,
          height: 44,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        source={{
          uri: 'https://i.ibb.co/Mh7qzV1/tidakadalokasi.png',
        }}
      />
      <Text style={styles.text}>Tidak ada lokasi</Text>
    </View>
  );
};

export default WisataFavoritEmpty;

const styles = StyleSheet.create({
  text: {
    fontSize: 12,
    fontWeight: 'bold',
    marginBottom: 2,
  },
  container: {
    backgroundColor: 'white',
    justifyContent: 'center',
    flex: 1,
    alignItems: 'center',
  },
});
