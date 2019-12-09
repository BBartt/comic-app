import React from 'react';
import { View, Text, StyleSheet, Button, Image, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import Comic from './Comic';
import ComicImg from './ComicImg';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

class App extends React.Component {
  static navigationOptions = {
    title: 'XKCD',
    headerStyle: {
      backgroundColor: '#FFF',
    },
    headerTintColor: '#96A8C8',
    headerTitleStyle: {
      fontWeight: 'bold',
      fontSize: 25,
    },
  };
  state = {
    comicNum: null,
    comics: [],
    loading: true,
    err: false,
  };
  componentDidMount = () => {
    fetch('https://xkcd.com/info.0.json')
      .then(response => response.json())
      .then(json => { this.setState({ comicNum: json.num }); });
  }
  componentDidUpdate = () => {
    const { comics, comicNum } = this.state;
    if(comics.length === 0) {
      for (let num = comicNum; num > comicNum-8; num--){
        fetch(`https://xkcd.com/${num}/info.0.json`)
        .then(response => response.json())
        .then(json => this.setState({ comics: [...this.state.comics, json], loading: false }))
        .catch(error => this.setState({ err: true, loading: false }))
      }
    }
  }
  refresh = () => { this.setState({ comics: [] }); }
  render() {
    const { comics, loading, err } = this.state;
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <ScrollView>
          {err && <Text style={styles.msg}>Error</Text>}
          {loading && <Text style={styles.msg}>Loading...</Text>}
          {comics.map( (comic) => <Comic comic={comic} navigation={navigation} /> )}
          <Button
            title="Refresh page"
            color= '#1E6738'
            onPress={this.refresh}
          />
        </ScrollView>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#96A8C8',
    flex: 1,
  },
  msg: {
    textAlign: 'center',
    fontSize: 20,
  }
});

const AppNavigator = createStackNavigator({
  App,
  ComicImg,
  Comic,
});

export default createAppContainer(AppNavigator);










