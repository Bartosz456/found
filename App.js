import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { RadioButton, TextInput } from 'react-native-paper';

export default found = () => {
  
  const [cheked, setChecked] = React.useState('first');

  return (
    <SafeAreaView>
      <View>
        <TouchableOpacity><Image style={styles.left} source={require('./assets/chevron-left.png')} /></TouchableOpacity>
        <View style={styles.mini_logo}>
          <Image  source={require('./assets/logo_mini.png')}/>
        </View>
      <View>
          <Text style={styles.title}>{"Zgłoś znalezione zwierzę"}</Text>
        </View>
        <View style={styles.radio}>
          <RadioButton.Item
          value="first"
          status={ cheked === 'first' ? 'checked' : 'unchecked' }
          onPress={() => setChecked('first')}
          label="Zwierzę domowe"
          />
          <RadioButton.Item
          value="second"
          status={ cheked === 'second' ? 'checked' : 'unchecked' }
          onPress={() => setChecked('second')}
          label="Dzikie zwierzę"
          />
        </View>

        <TextInput style={styles.input} placeholder='Czy miał obrożę z imieniem?'/>
        <TextInput style={styles.input} placeholder='Podaj miejsce, w którym go spotkałeś'/>
        <TextInput style={styles.input} placeholder='Opisz wygląd'/>
        <TextInput style={styles.input} placeholder='Jakie miał cechy charakterystyczne?'/>
        <View style={{justifyContent: 'center', alignItems: 'center'}}><TouchableOpacity style={styles.send}><Text style={styles.send_text}>{"Wyślij zgłoszenie"}</Text></TouchableOpacity></View>

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  left: {
    width: 45,
    height: 45,
    marginTop: 45,
    marginLeft: 8,
    position: 'absolute',
  },
  mini_logo: {
    alignItems: 'center',
    justifyContent: 'center',
    //position: 'absolute',
    marginTop: 40,
  },
  title: {
    fontSize: 32,
    padding: 15,
  },
  radio: {
    marginLeft: 50,
    marginRight: 50,
    fontSize: 40,
  },
  input: {
    padding: 10,
    backgroundColor: '#fff',
    borderBottomWidth: 2,
    borderBottomColor: '#eba059',
    marginRight: 30,
    marginLeft: 30,
  },
  send: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    backgroundColor: '#fa0000',
    width: '80%',
    height: 45,
    borderRadius: 10,
    elevation: 5,
  },
  send_text: {
    fontSize: 25,
    color: '#fff',
  },
});
