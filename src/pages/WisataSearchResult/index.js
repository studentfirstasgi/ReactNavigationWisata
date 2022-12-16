import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

const WisataSearchResult = () => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image
          style={{
            width: 44,
            height: 60,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 10,
          }}
          source={{
            uri: 'https://i.ibb.co/k28zrfP/IMG-5340-e-c-WM-L-1.png',
          }}
        />
        <View style={styles.text}>
          <Text style={styles.title}>Geosite Tebat Rasau</Text>
          <Text>Wista Air</Text>
          <Text>Jl. K.A. Bujang, Batu Penyu, Blitung Timur ...</Text>
        </View>
      </View>

      <View style={styles.card}>
        <Image
          style={{
            width: 44,
            height: 60,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 10,
          }}
          source={{
            uri: 'https://i.ibb.co/TtzQBbp/IMG-5340-e-c-WM-L-1.png',
          }}
        />
        <View style={styles.text}>
          <Text style={styles.title}>Geosite Tebat Rasau</Text>
          <Text>Wista Air</Text>
          <Text>Jl. K.A. Bujang, Batu Penyu, Blitung Timur ...</Text>
        </View>
      </View>
    </View>
  );
};

export default WisataSearchResult;

const styles = StyleSheet.create({
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  text: {
    marginLeft: 20,
  },
  card: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 20,
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  container: {
    paddingLeft: 20,
    paddingRight: 20,
    height: '100%',
    backgroundColor: 'white',
  },
});
