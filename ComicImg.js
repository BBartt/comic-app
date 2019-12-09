import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native'

export default function ComicImg({navigation}) {
  return (
    <View>
      <Image
        source={{ uri: navigation.state.params.img ? navigation.state.params.img : "https://fakeimg.pl/300/" }}
        style={styles.comic__image}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  comic__image: {
    height: 500,
    width: '100%',
    borderWidth: 2,
    borderColor: "#000",
    borderStyle: "solid",
  }
});


