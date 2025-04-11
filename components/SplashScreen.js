import React, { useEffect } from 'react';import { View, Text, StyleSheet } from 'react-native';
export default function SplashScreen({ navigation }) {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Weather');
    }, 2500);
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
  container: {
    flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#F2F4F8'  },
  icon: {
    fontSize: 60, marginBottom: 20  },
  title: {
    fontSize: 32, fontWeight: 'bold', color: '#0D0D2B'  },
  subtitle: {
    fontSize: 18, color: '#7D7D93', marginTop: 8  }
});