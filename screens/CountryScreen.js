import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const CountryScreen = ({ route }) => {
  const { country } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{country.name}</Text>
      <Image source={{ uri: country.flag }} style={styles.flag} />
      <Text>Population: {country.population}</Text>
      <Text style={styles.description}>{country.description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  flag: {
    width: 200,
    height: 120,
    marginBottom: 20,
  },
  description: {
    marginTop: 20,
    fontSize: 16,
    textAlign: 'center',
  },
});

export default CountryScreen;
