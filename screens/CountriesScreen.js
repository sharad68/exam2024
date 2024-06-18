import React from 'react';
import { View, ScrollView, Image, TouchableOpacity, StyleSheet } from 'react-native';
import countries from '../data/countries';
import { useNavigation } from '@react-navigation/native';

const CountriesScreen = () => {
  const navigation = useNavigation();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {countries.map((country, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => navigation.navigate('Country', { country })}
        >
          <Image source={{ uri: country.flag }} style={styles.flag} />
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  flag: {
    width: 100,
    height: 60,
    margin: 10,
  },
});

export default CountriesScreen;
