import { View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import { useRouter } from 'expo-router';

export default function HomeScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Watolink</Text>
      <Text style={styles.title}>Mind Controlled Drone</Text>

      <TouchableOpacity style={styles.button} onPress={() => router.push('/LoginScreen')}>
        <Text>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.push('/SignUpScreen')}>
        <Text style={styles.link}>Don’t have an account? <Text style={styles.linkHighlight}>Sign up here.</Text></Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    color: '#44E7FD',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#44E7FD',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 10,
    marginBottom: 16,
  },
  link: {
    color: 'white',
  },
  linkHighlight: {
    color: '#44E7FD',
  }
})



