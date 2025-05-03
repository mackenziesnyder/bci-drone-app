import { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  Alert,
  StyleSheet,
} from 'react-native';
import { useRouter } from 'expo-router';

export default function ConnectUnicorn() {
  const router = useRouter();
  const [number, setNumber] = useState('');

  const handleConnection = () => {
    // This is where we will have to implement knowledge to connect to the unicorn 
    // implement script we previously have 
    Alert.alert('Connection Successful');
    router.replace('/');

  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Connect Unicorn Device</Text>

      <TextInput
        style={styles.input}
        placeholder="Device ID"
        placeholderTextColor="#aaa"
        autoCapitalize="none"
        value={number}
        onChangeText={setNumber}
      />
      <View style={styles.buttonWrapper}>
        <Button title="Connect Device" onPress={handleConnection} color="#44E7FD" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    paddingHorizontal: 30,
  },
  title: {
    color: '#44E7FD',
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
  },
  input: {
    borderWidth: 1,
    borderColor: '#44E7FD',
    backgroundColor: '#222',
    color: 'white',
    padding: 10,
    marginBottom: 15,
    borderRadius: 5,
  },
  buttonWrapper: {
    marginVertical: 10,
  },
  backButton: {
    color: '#44E7FD',
    fontSize: 18,
    textAlign: 'center',
    marginTop: 20,
  },
});


