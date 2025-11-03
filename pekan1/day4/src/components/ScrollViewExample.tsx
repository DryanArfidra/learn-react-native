import React from 'react';
import { ScrollView, Text, StyleSheet, View } from 'react-native';

export default function ScrollViewExample() {
  return (
    <View>
      <Text style={styles.title}>1️⃣ ScrollView Example</Text>
      <ScrollView style={styles.box}>
        {Array.from({ length: 20 }, (_, i) => (
          <Text key={i} style={styles.item}>
            Item ke-{i + 1}
          </Text>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    color: '#38bdf8',
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 8,
  },
  box: {
    backgroundColor: '#1e40af',
    borderRadius: 8,
    maxHeight: 200,
    padding: 8,
  },
  item: {
    color: 'white',
    padding: 10,
    borderBottomColor: '#93c5fd',
    borderBottomWidth: 1,
  },
});
