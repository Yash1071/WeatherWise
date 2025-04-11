import React from 'react';import { View, Text, StyleSheet, ScrollView } from 'react-native';import ForecastCard from './ForecastCard';
export default function WeatherScreen() {
  const forecastData = [
    { time: 'Now', temp: -20, icon: '🌨️', chance: 30 },
    { time: '2 AM', temp: -18, icon: '🌨️', chance: 30 },
    { time: '4 AM', temp: -21, icon: '❄️', chance: 20 },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.city}>Calgary</Text>
      <Text style={styles.temp}>-20°C</Text>
      <Text style={styles.condition}>Mostly Snowy</Text>
      <ScrollView horizontal style={styles.scroll}>
        {forecastData.map((item, index) => (
          <ForecastCard key={index} data={item} />
        ))}
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1, paddingTop: 80, alignItems: 'center', backgroundColor: '#1B1B2F' },
  city: { fontSize: 28, color: 'white' },
  temp: { fontSize: 60, color: 'white', marginVertical: 10 },
  condition: { fontSize: 16, color: '#A8A8B3' },
  scroll: { marginTop: 30, paddingHorizontal: 10 }
});