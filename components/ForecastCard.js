import React from 'react';import { View, Text, StyleSheet } from 'react-native';
export default function ForecastCard({ data }) {
  return (
    <View style={styles.card}>
      <Text style={styles.time}>{data.time}</Text>
      <Text style={styles.icon}>{data.icon}</Text>
      <Text style={styles.temp}>{data.temp}°C</Text>
      <Text style={styles.chance}>{data.chance}%</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  card: {
    backgroundColor: '#2E2E48',
    borderRadius: 16,
    padding: 15,
    alignItems: 'center',
    marginRight: 15,
    width: 80  },
  time: { color: '#C0C0D0', fontSize: 12 },
  icon: { fontSize: 24, marginVertical: 5 },
  temp: { color: 'white', fontSize: 16 },
  chance: { color: '#86C5F9', fontSize: 12 }
});