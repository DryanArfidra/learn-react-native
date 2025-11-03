import React from 'react';
import { ScrollView, StatusBar, View, Text, StyleSheet } from 'react-native';
import ScrollViewExample from './src/components/ScrollViewExample';
import FlatListExample from './src/components/FlatListExample';
import SectionListExample from './src/components/SectionListExample';
import RefreshControlExample from './src/components/RefreshControlExample';

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#1e293b" />
      <Text style={styles.header}>Day 4</Text>

      <View style={styles.section}>
        <ScrollViewExample />
      </View>

      <View style={styles.section}>
        <FlatListExample />
      </View>

      <View style={styles.section}>
        <SectionListExample />
      </View>

      <View style={styles.section}>
        <RefreshControlExample />
      </View>

      <Text style={styles.footer}>© 2025 by: Dryanz</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f172a',
  },
  header: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
  section: {
    marginBottom: 30,
    backgroundColor: '#1e293b',
    padding: 10,
    borderRadius: 10,
  },
  footer: {
    color: 'gray',
    fontSize: 12,
    textAlign: 'center',
    marginVertical: 30,
  },
});
