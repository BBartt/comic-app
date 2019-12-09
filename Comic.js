import * as React from 'react';
import { Text, View, StyleSheet, Image, Button } from 'react-native'

export default class Comic extends React.Component {
  render() {
    const { comic, navigation } = this.props;
    return (
      <View style={styles.comic__wrapper}>

        <Button
          title={comic.title}
          onPress={ () => navigation.navigate('ComicImg', { img: comic.img }) }
        />

        <Image
          source={{ uri: comic.img }}
          style={styles.comic__image}
        />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  comic__wrapper: {
    margin: 10,
    padding: 10,
    backgroundColor: '#fff',
    borderColor: '#000',
    borderWidth: 2,
    borderRadius: 5,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  comic__image: {
    height: 80,
    width: 80,
    borderWidth: 2,
    borderColor: "#000",
    borderStyle: "solid",
  }
});







