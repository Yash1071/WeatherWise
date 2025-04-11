import { useEffect } from 'react';import { Text, View, StyleSheet } from 'react-native';import { useRouter } from 'expo-router';
export default function SplashScreen() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.replace('/(tabs)');
    }, 2000);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.icon}>⛅</Text>
      <Text style={styles.title}>WeatherWise</Text>
      <Text style={styles.subtitle}>Forecast</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#F2F4F8' },
  icon: { fontSize: 60, marginBottom: 20 },
  title: { fontSize: 32, fontWeight: 'bold', color: '#0D0D2B' },
  subtitle: { fontSize: 18, color: '#7D7D93', marginTop: 8 }
});