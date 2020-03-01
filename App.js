import React,{useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Linking} from 'expo'

export default function App() {
  useEffect(() => {
    alert('use effect')
    Linking.addEventListener('url', handleUrl)
    Linking.getInitialURL().then((url) => {
      alert('inital url'+url)
      console.log('initial url:' + url)
    })

  }, [])
  const handleUrl = event => {
    alert(JSON.stringify(event))
    alert(JSON.stringify(event.url))
    let redirectUrl = Linking.makeUrl("qr", { hello: "world" });
console.log(redirectUrl)
    alert(event.url)
    console.log('event.url',event.url)
    // Linking.openURL('http://www.google.com');
    // // this.setState({ url });
    let { path, queryParams } = Linking.parse(event.url);
    console.log('path',path)
    console.log('queryParams',queryParams)
    alert(`Linked to app with path: ${path} and data: ${JSON.stringify(queryParams)}`);
  };
  return (
    <View style={styles.container}>
      <Text>deep link</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
