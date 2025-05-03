import { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Button,
  Alert,
  StyleSheet,
} from 'react-native';
import { useRouter } from 'expo-router';

export default function SignUpScreen() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = () => {
    if (!email || !password) {
      Alert.alert('Error', 'Please fill in both fields');
      return;
    }

    Alert.alert('AccountCreated');
    router.replace('/LoginScreen');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#aaa"
        autoCapitalize="none"
        value={email}
        onChangeText={setEmail}
      />
    
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#aaa"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        placeholderTextColor="#aaa"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <View style={styles.buttonWrapper}>
        <Button title="Sign Up" onPress={handleSignUp} color="#44E7FD" />
      </View>

      <TouchableOpacity onPress={() => router.back()}>
        <Text style={styles.backButton}>Go back to Home</Text>
      </TouchableOpacity>
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
