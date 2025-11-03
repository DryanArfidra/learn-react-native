import React from 'react';
import { FlatList, Text, View, StyleSheet } from 'react-native';

const data = [
  { id: '1', name: 'React Native' },
  { id: '2', name: 'Expo' },
  { id: '3', name: 'TypeScript' },
  { id: '4', name: 'JavaScript' },
  { id: '5', name: 'Tailwind CSS' },
];

export default function FlatListExample() {
  return (
    <View>
      <Text style={styles.title}>2️⃣ FlatList Example</Text>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Text style={styles.item}>• {item.name}</Text>
        )}
      />
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
  item: {
    backgroundColor: '#3b82f6',
    color: 'white',
    marginVertical: 4,
    padding: 10,
    borderRadius: 6,
  },
});
