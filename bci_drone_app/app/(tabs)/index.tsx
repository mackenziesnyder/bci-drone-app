import { StyleSheet } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.titleContainer}>
       <ThemedView>
        <ThemedText type="title">Watolink</ThemedText>
      </ThemedView> 
      <ThemedView>
        <ThemedText type="title">Mind Controlled Drone</ThemedText>
      </ThemedView>  
      <ThemedView>
        <ThemedText type="title">Login</ThemedText>
      </ThemedView> 
      <ThemedView>
        <ThemedText type="title">Don't have an account? Sign up here.</ThemedText>
      </ThemedView>     
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
